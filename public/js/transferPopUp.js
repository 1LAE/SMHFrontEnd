
class TransferTab {

    /**
     * 
     * @param {*} placeSlider 
     * @param {str} form 
     */
    constructor(placeSlider, form) {
        this.placeSlider = placeSlider;
        this.form = form;
        this.itemList = {};
        this.init();
    }

    init() {

        this.page = document.getElementById("transfer" + this.form + "Tab");

    }

    appendNewItem (barcode, packageName) {

        var type = null;

        if (this.form == "First") {
            type = PageItem.ITEMTYPE.FIRSTSECOND;
        } else {
            type = PageItem.ITEMTYPE.SECONDSECOND;
        }

        var item = new PageItem(type, this, "insertBefore" + this.form + "Tab", barcode, packageName);
        this.itemList[item.div.id] = item;

        console.log("TransferTab item created, robot requested");
        // this.itemList[item.div.id].placeIndex = this.placeSlider.requestRobot(this.itemList[item.div.id].barcode);
        
        // ГОВНОКОД ПЕРЕДЕЛАТЬ
        // слегка костыль, но пока пойдет
        console.log("TransferTab item update robot state");
        // item.updateRobotState(this.placeSlider.places[this.itemList[item.div.id].placeIndex].state, (this.itemList[item.div.id].placeIndex + 1).toString());

    }

    clearAll() {
        for (var key in this.itemList) {
            if (this.itemList.hasOwnProperty(key)) {
                this.itemList[key].removeDiv();
                delete this.itemList[key];
            }
        }
    }

    isActive() {
        return this.page.style.display == "block";
    }

    show () {

        this.page.style.display = "block";
    }

    hide () {

        this.page.style.display = "none";
    }

}

class TransferPopUp {

    constructor (placeSlider) {
        this.placeSlider = placeSlider;
        this.init();
    }

    init () {

        this.openTransfer = document.getElementById("transferOpenButton");

        this.popUp = document.getElementById("popUpTransfer");


        this.firstTab = new TransferTab(this.placeSlider, "First");
        this.secondTab = new TransferTab(this.placeSlider, "Second");

        this.tabChoise = this.popUp.querySelector(".transferChioceValue");
        this.inOutHint = document.getElementById("inOutIMGHint");

        this.nextTab = document.getElementById("transferCoiceRightArrow");
        this.nextTab.addEventListener("click", (event) => {

            if (this.firstTab.isActive()) {
                this.switchTabs(this.firstTab, this.secondTab);
            } else {
                this.switchTabs(this.secondTab, this.firstTab);
            }
        });
        this.prevTab = document.getElementById("transferCoiceLeftArrow");
        this.prevTab.addEventListener("click", (event) => {

            if (this.firstTab.isActive()) {
                this.switchTabs(this.firstTab, this.secondTab);
            } else {
                this.switchTabs(this.secondTab, this.firstTab);
            }
        });

        this.closeTransfer = document.getElementById("closeTransfer")
        this.closeTransfer.addEventListener("click", (event) => {
            this.hide();
        })

        this.submitTransfer = document.getElementById("submitTransfer");
        this.submitTransfer.addEventListener("click", (event) => {
            this.hide();
        });

        this.openTransfer.addEventListener("click", (event) => {
        
            this.generateTransferList();
            this.show();
        });
        
    }

    /**
     * 
     * @param {TransferTab} from 
     * @param {TransferTab} to 
     */
    switchTabs (from, to) {
        from.hide();
        to.show();

        if (to.form == "First") {
            this.tabChoise.innerText = "Разгрузка";
            this.inOutHint.style.transform = "rotate(90deg)";
        } else {
            this.tabChoise.innerText = "Погрузка";
            this.inOutHint.style.transform = "rotate(270deg)";
        }
    }

    show() {
        this.popUp.style.display = "block";
    }

    hide () {
        this.clearAll();
        this.popUp.style.display = "none";
    }

    generateTransferList () {

        // Запросы в БД


        // ГОВНОКОД ПЕРЕДЕЛАТЬ
        var isFirstTabToFill = true;
        var isSecondTabToFill = true;

        // Списки пар: [barcode, package]
        var firstTabElemList = [{"barcode": "111", "packageName": "Пакет S"}, {"barcode": "222", "packageName": "Короб L"}];
        var secondTabElemList = [{"barcode": "333", "packageName": "Пакет S"}, {"barcode": "444", "packageName": "Короб L"}];

        if (isFirstTabToFill) {

            for(var element in firstTabElemList){
                this.firstTab.appendNewItem(element["barcode"], element["packageName"]);
            }

        }

        if (isSecondTabToFill) {

            for(var element in secondTabElemList){
                this.secondTab.appendNewItem(element["barcode"], element["packageName"]);
            }

        }

    }

    clearAll() {
        this.firstTab.clearAll();
        this.secondTab.clearAll();
    }

}

