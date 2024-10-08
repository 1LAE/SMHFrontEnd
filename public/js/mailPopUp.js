
/**
 * Класс для страниц ВНУТРИ ВКЛАДОК поп-апов выдачи/приемки
 */
class MailPopUpPage {

    /**
     * 
     * @param {str} formTab --- номер вкладки
     * @param {str} formPage --- номер страницы
     * Использование new MailPopUpTab("First", "Second")
     * Эти номера должны быть прописаны текстом для согласовываения с HTML идентификаторами
     */
    constructor (formTab, formPage, placeSlider) {
        this.page = document.getElementById("mail" + formTab + "Tab" + formPage + "Page");
        this.submitButton = document.getElementById("submit" + formTab + "Tab" + formPage + "Page");

        this.formTab = formTab;
        this.formPage = formPage;

        this.placeSlider = placeSlider;

        this.INSERTBEFOREITEM = {
            "First": "sectionButton" + this.formTab + "TabAddNewMail",
            "Second": "submit" + this.formTab + "Tab" + this.formPage + "Page"
        };


        // Этот список надо как-то обновлять
        this.itemList = {};

        this.init ()

    }

    init () {

        this.addMailButton = document.getElementById(this.INSERTBEFOREITEM["First"]);
        
        if (this.formPage == "First" && this.addMailButton != null) {

            this.addMailButton.addEventListener("click", (event) => {

                // AddNewMail
                this.appendNewItem();

            });
        }

        if (this.formPage == "Second") {
            // Это надо для того, чтобы в лайв режиме отображалось, приехал ли контейнер или нет
            // RobotPlace.subscribeState(this);
            console.log("MailPopUpPage Subscribed ghost");
        }
    }

    appendNewItem (barcode=null, packageName=null) {

        var type = null;

        if (this.formPage == "First") {

            if (this.formTab == "First") {
                type = PageItem.ITEMTYPE.FIRSTFIRST;
            } else {
                type = PageItem.ITEMTYPE.SECONDFIRST;
            }

            var item = new PageItem(type, this, this.INSERTBEFOREITEM["First"], null, null, null);
            var removeItemButton = item.div.querySelector(".image_deleteelement");

            // Обработчик для удаления элемента из списка посылок
            if (removeItemButton) {
                removeItemButton.addEventListener("click", (event) => {
                    item.removeDiv();
                    delete this.itemList[item.div.id];
                })
            }
            this.itemList[item.div.id] = item;

        } else {

            if (this.formTab == "First") {
                type = PageItem.ITEMTYPE.FIRSTSECOND;
            } else {
                type = PageItem.ITEMTYPE.SECONDSECOND;
            }

            var item = new PageItem(type, this, this.INSERTBEFOREITEM["Second"], barcode, packageName);
            this.itemList[item.div.id] = item;

            // this.itemList[item.div.id].placeIndex = this.placeSlider.requestRobot(this.itemList[item.div.id].barcode);
            console.log("MailPopUpPage appended new item and robot requested");


            // ГОВНОКОД ПЕРЕДЕЛАТЬ
            // слегка костыль, но пока пойдет
            // item.updateRobotState(this.placeSlider.places[this.itemList[item.div.id].placeIndex].state, (this.itemList[item.div.id].placeIndex + 1).toString());
            console.log("MailPopUpPage item changed stateRobot")

        }

    }

    // Отслеживаем в элементах, приехали или уехали ли контейнеры
    placeStateChanged (id, state, textNumber, index) {

        console.log("MailPopUpPage placeStateChanged");
        return;

        // Запрос в бд какой штрихкод пришел
        // Формат запроса: в контейнере Х есть посылка со штрихкодом Y

        for (var itemID in this.itemList) {

            var item = this.itemList[itemID];  // Получаем элемент по ключу
            // var res = item.getPlaceIndex();

            if (index == item.placeIndex) {
                item.updateRobotState(state, textNumber);
            }

        }

    }

    show () {
        this.page.style.display = "block";
    }

    hide () {
        this.page.style.display = "none";
    }

    clearAll () {

        var itemsToDelete = [];

        for (var i = 0; i < this.page.children.length - 1; i++) {
            if (this.page.children[i].id.includes("item")){
                itemsToDelete.push(this.page.children[i].id);
            }
        }

        for(var i = 0; i < itemsToDelete.length; i++) {
            document.getElementById(itemsToDelete[i]).remove();
            delete this.itemList[itemsToDelete[i]];
        }

    }

    freezeData () {

        for (var itemID in this.itemList) {
            this.itemList[itemID].barcode = this.itemList[itemID].getBarcodeValue(); 
            this.itemList[itemID].packageName = this.itemList[itemID].getPackageNameValue();
        }

    }

    getDataList () {

        var dataList = [];

        for(var itemID in this.itemList) {

            var itemData = {};

            itemData["barcode"] = this.itemList[itemID].getBarcodeValue(); ;
            itemData["packageName"] = this.itemList[itemID].getPackageNameValue(); 

            dataList.push(itemData);

        }

        return dataList;

    }

}

/**
 * Класс для вкладок на поп-апе выдачи/приемки
 */
class MailPopUpTab {

    /**
     * 
     * @param {str} form -- какая вкладка (лево / право)
     * Использование new MailPopUpTab("First")
     *           ИЛИ new MailPopUpTab("Second")
     * ИЛИ НИКАК
     */
    constructor (form, placeSlider) {
        
        this.form = form;
        this.placeSlider = placeSlider;

        this.tab = document.getElementById("mail" + form + "Tab");
        this.tabNavButton = document.getElementById("button" + form + "Tab");
        this.firstPage = new MailPopUpPage(this.form, "First", placeSlider);
        this.secondPage = new MailPopUpPage(this.form, "Second", placeSlider);

        this.init();

    }

    init () {

        this.firstPage.submitButton.addEventListener("click", (event) => {
            this.proceedNexPage();
        });

        this.secondPage.submitButton.addEventListener("click", (event) => {
            this.clearAll();
        })

    }

    clearAll () {
        this.firstPage.clearAll();
        this.secondPage.clearAll();
    }

    /**
     * Переносит (с конвертацией) все элементы (посылки) с первой страницы на вторую вкладок поп-апа
     */
    translateElements() {
        this.firstPage.freezeData();
    
        // Итерируем по ключам itemList
        for (var key in this.firstPage.itemList) {
            if (this.firstPage.itemList.hasOwnProperty(key)) {
                var item = this.firstPage.itemList[key];  // Получаем элемент по ключу

                // ГОВНОКОД ПЕРЕДЕЛАТЬ
                // Надо задать теплейтные настройки
                if (
                    (this.form == "Second" && 
                    (!item.barcode || !PackageOptions.packageOptions.includes(item.packageName))) ||
                    
                    (this.form == "First" && 
                    !item.barcode)

                ) {
                    return false;
                }

                this.secondPage.appendNewItem(item.barcode, item.packageName);
            }
        }

        return true;
    }
    
    
 
    proceedNexPage () {

        if(this.firstPage.page.childElementCount > 2) {

            this.secondPage.clearAll();
            var transferComplete = this.translateElements();

            if (transferComplete) {
                
                this.firstPage.hide();
                this.secondPage.show();
            } else {
                this.secondPage.clearAll();

            }
        }
    }

    activate () {
        this.tab.classList.add("w--tab-active");
        this.tabNavButton.classList.add("w--current");
        this.secondPage.hide();
        this.firstPage.show();
    }

    deactivate () {
        this.firstPage.hide();
        this.secondPage.hide();
        this.tab.classList.remove("w--tab-active");
        this.tabNavButton.classList.remove("w--current");
    }

}

class MailPopUp {

    constructor (placeSlider) {

        this.placeSlider = placeSlider;
        this.init();

    }

    init() {

        this.popUp = document.querySelector(".pop_up_inoutpackage");

        this.firstTabButtonDiv = document.getElementById("giveMailDiv");
        this.secondTabButtonDiv = document.getElementById("takeMailDiv");

        this.firstTabButton = document.getElementById("buttonFirstTab");
        this.secondTabButton = document.getElementById("buttonSecondTab");

        this.firstTab = new MailPopUpTab("First", this.placeSlider);
        this.secondTab = new MailPopUpTab("Second", this.placeSlider);

        this.firstTabButtonDiv.addEventListener("click", (event) => {
            event.preventDefault();
            this.show();
            this.firstTab.activate();
        });

        this.secondTabButtonDiv.addEventListener("click", (event) => {
            event.preventDefault();
            this.show();
            this.secondTab.activate();
        });

        this.firstTabButton.addEventListener("click", (event) => {
            this.switch(this.secondTab, this.firstTab);
        });

        this.secondTabButton.addEventListener("click", (event) => {
            this.switch(this.firstTab, this.secondTab);
        });

        this.firstTab.secondPage.submitButton.addEventListener("click", (event) => {
            this.hide();
        });

        this.secondTab.secondPage.submitButton.addEventListener("click", (event) => {
            this.hide();
        });

    }

    show() {
        this.popUp.style.display = "block";
    }

    hide () {
        this.popUp.style.display = "none";
        this.firstTab.deactivate();
        this.secondTab.deactivate();
    }

    switch (from, to) {
        from.deactivate();
        to.activate();
    }

}
