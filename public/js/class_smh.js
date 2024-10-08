function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Single Robot Place
 * @class
 */

class RobotPlace {

    /**
     * @param {string} parent - Родитель (слайдер) для мест роботов на столе (ID)
     */
    constructor(parent=null) {
        this.parent = !parent ? 'containerSlider' : parent;
        this.init();
    }

    /**
    * Состояния погрузочного места
    * @prop {RobotPlace.STATES} EMPTY --- Нет робота
    * @prop {RobotPlace.STATES} ROBOT --- На данном месте есть робот
    * @prop {RobotPlace.STATES} ARRIVING --- Робот в пути на данное место
    * @prop {RobotPlace.STATES} DEPARTING --- Робот в процессе покидания погрузочного места
    */
    static STATES = Object.freeze({
        EMPTY: 1,
        ROBOT: 2,
        ARRIVING: 3,
        DEPARTING: 4,
        ROBOTFULL: 5
    });

    /**
    * Шаблоны для вставки в страницу
    * @prop {RobotPlace.TEMPLATES} EMPTY --- Нет робота
    * @prop {RobotPlace.TEMPLATES} ROBOT --- На данном месте есть робот
    * @prop {RobotPlace.TEMPLATES} ARRIVING --- Робот в пути на данное место
    * @prop {RobotPlace.TEMPLATES} DEPARTING --- Робот в процессе покидания погрузочного места
    */
    static TEMPLATES = Object.freeze({
        EMPTY: "containerInfoEmptyTemplate",
        ROBOT: "containerInfoRobotTemplate",
        ARRIVING: "containerInfoWaitInTemplate",
        DEPARTING: "containerInfoWaitOutTemplate",
        ROBOTFULL: "containerInfoRobotFullTemplate"
    });

    /**
    * Классы мест для вставки в страницу
    * @prop {RobotPlace.CLASSES} EMPTY --- Нет робота
    * @prop {RobotPlace.CLASSES} ROBOT --- На данном месте есть робот
    * @prop {RobotPlace.CLASSES} ARRIVING --- Робот в пути на данное место
    * @prop {RobotPlace.CLASSES} DEPARTING --- Робот в процессе покидания погрузочного места
    */
    static CLASSES = Object.freeze({
        EMPTY: "containerInfo",
        ROBOT: "containerInfo",
        ARRIVING: "containerInfo",
        DEPARTING: "containerInfo",
        ROBOTFULL: "containerInfo"
    });

    init() {
        this.listener = null;
        this.weight = null;
        this.fill = null;
        this.number = (document.getElementById(this.parent).childElementCount + 1).toString();
        this.textNumber = this.number;
        this.index = this.number - 1;
        this.id = "palceInfo" + this.number;

        this.state = RobotPlace.STATES.EMPTY;

        this.createDiv();
    }

    createDiv() {
        const template = document.getElementById(RobotPlace.TEMPLATES.EMPTY);
        const clone = document.importNode(template.content, true);

        let new_div = document.createElement('div');
        this.div = new_div;
        this.div.appendChild(clone);

        this.div.id = this.id;
        this.div.className = RobotPlace.CLASSES.EMPTY;

        this.listener = (event) => {
            this.placeClicked();
        };

        this.addListener();

        document.getElementById(this.parent).appendChild(this.div);

    }

    removeDiv() {

        var parent = document.getElementById(this.parent);
        this.removeListener();
        parent.removeChild(this.div);
    }

    /**
     * Изменение состояния погрузочного места
     * @param {RobotPlace.STATES} state
     * @returns Nothing
     */
    changeState(state) {
        
        // Example
        // Need to update number

        var template = null;

        switch (state) {
            case RobotPlace.STATES.EMPTY:
                template = RobotPlace.TEMPLATES.EMPTY;
                this.textNumber = "+";
                break;
            case RobotPlace.STATES.ROBOT:
                template = RobotPlace.TEMPLATES.ROBOT;
                this.textNumber = this.number;
                break;
            case RobotPlace.STATES.ARRIVING:
                template = RobotPlace.TEMPLATES.ARRIVING;
                this.textNumber = this.number;
                break;
            case RobotPlace.STATES.DEPARTING:
                template = RobotPlace.TEMPLATES.DEPARTING;
                this.textNumber = this.number;
                break;
            case RobotPlace.STATES.ROBOTFULL:
                template = RobotPlace.TEMPLATES.ROBOTFULL;
                this.textNumber = this.number;
                break;
            default:
                console.error("Undefined robot place. See more at class_smh.js -> placeClicked");
                return;
        }

        this.div.innerHTML = document.getElementById(template).innerHTML;
        this.div.querySelector(".containerNumber").textContent = this.textNumber;

        this.state = state;

        RobotPlace.notifyStatedSubscribers(this.id, this.state, this.textNumber, this.index);

    }

    changeClass() {

    }

    placeClicked () {

        switch (this.state) {
            case RobotPlace.STATES.EMPTY:
                RobotPlace.notifyClickedSubscribers(this.id, this.state, this.textNumber, this.index);
                break;
            case RobotPlace.STATES.ROBOT:
                RobotPlace.notifyClickedSubscribers(this.id, this.state, this.textNumber, this.index);
                break;
            case RobotPlace.STATES.ROBOTFULL:
                RobotPlace.notifyClickedSubscribers(this.id, this.state, this.textNumber, this.index);
                break;
            case RobotPlace.STATES.ARRIVING:
                break;
            case RobotPlace.STATES.DEPARTING:
                break;
            default:
                console.error("Undefined robot place. See more at class_smh.js -> placeClicked");
        }
    }

    addListener() {
        this.div.addEventListener("click", this.listener);
    }

    removeListener() {
        document.removeEventListener("click", this.listener);
    }

    // Notification mechanism

    /**
     * Подписчики для уведомления о нажатиях этой кнопки
     */
    static subscribersClicked = [];
    static subscribersState = [];

    /**
     * Подписаться на нажатия на погрузочные места
     * @param {Object} subscriber
     * @usage subscribe(this) внутри конструктора класса
     * При реализации должна быть прописана функция placeClicked() как handler
     */
    static subscribeClicked (subscriber) {
        if (typeof subscriber.placeClicked === 'function'){
            RobotPlace.subscribersClicked.push(subscriber);
        } else {
            console.error("Uable to subscribe. Implemented class does not have listener on this event")
        }
    }

    /**
     * 
     * @param {string} id --- ID Нажатого контейнера (div)
     * @param {RobotPlace.STATES} state --- его состояние
     * @param {string} textNumber --- его нормер, который написан на экране
     */
    static notifyClickedSubscribers (id, state, textNumber, index) {
        RobotPlace.subscribersClicked.forEach(subscriber => {
            if (typeof subscriber.placeClicked === 'function'){
                subscriber.placeClicked(id, state, textNumber, index);
            } else {
                console.error("Error during recieving notifications: Implemented class does not have listener on this event")
            }
        });
    }

    static subscribeState (subscriber) {
        if (typeof subscriber.placeStateChanged === 'function'){
            RobotPlace.subscribersState.push(subscriber);
        } else {
            console.error("Uable to subscribe. Implemented class does not have listener on this event")
        }
    }

    // ?????
    // УДАЛИТЬ ГОВНОКОД
    static unSubscribeState(subscriber) {
        delete RobotPlace.subscribersState[subscriber];
    }

    static notifyStatedSubscribers (id, state, textNumber, index) {
        RobotPlace.subscribersState.forEach(subscriber => {
            if (typeof subscriber.placeStateChanged === 'function'){
                subscriber.placeStateChanged(id, state, textNumber, index);
            } else {
                console.error("Error during recieving notifications: Implemented class does not have listener on this event")
            }
        });
    }
}


class PlaceSlider {

    constructor (count) {

        this.places = []
        this.count = count;

        for (var i = 0; i < count; i++) {
            this.places[i] = new RobotPlace();
        }
        this.activePlace = null;
    }

    static robotTravelTimeDEBUGms = 4000;

    /**
     * 
     * @param {int} index -- index of place 
     * @returns 
     */
    sendRobot (index=null, notEoughSpace=null) {

        if (index == null || index >= this.count) {
            return;
        }

        this.places[index].changeState(RobotPlace.STATES.DEPARTING);

        // Shitcode
        // Send request to the server

        // When done
        setTimeout(() =>
            this.places[index].changeState(RobotPlace.STATES.EMPTY)
        , PlaceSlider.robotTravelTimeDEBUGms);

    }

    /**
     * 
     * @param {int} index -- index of place (from 0 to )
     * @returns 
     */
    takeRobot (index=null) {

        if (index == null) {
            for (var i = 0; i < this.count; i++) {
                if (this.places[i].state == RobotPlace.STATES.EMPTY) {
                    index = i;
                    break;
                }
            }
        }

        if (index == null || index >= this.count) {
            return;
        }

        this.places[index].changeState(RobotPlace.STATES.ARRIVING);

        // Shitcode
        // Send request to the server

        // When done
        setTimeout(() => 
        {
            if(this.places[index].state == RobotPlace.STATES.ARRIVING){
                this.places[index].changeState(RobotPlace.STATES.ROBOT);
            }
        }
        , PlaceSlider.robotTravelTimeDEBUGms);

    }

    requestRobots(barcodeList=null) {

        // Запрос в БД

        var list = [];

        // Готовим пустые контейнеры
        if (barcodeList == null) {
            list = [];
            list[0]=(new RobotListItem(1, RobotPlace.STATES.ARRIVING));
            this.takeRobot(1);
            list[1]=(new RobotListItem(3, this.places[3].state));
        }
        // for (var i = 0; i < this.count; i++) {
        //     if (this.places[i].state)
        // }

    }

    alertFullRobot (index) {

        this.places[index].changeState(RobotPlace.STATES.ROBOTFULL);

    }

    /**
     * 
     * @param {str} barcode 
     * @param {*} type 
     * @returns 
     */
    requestRobot (barcode=null, type=null) {

        // ГОВНОКОД
        // ПЕРЕПИСАТЬ КОГДА БУДЕТ СЕРВЕР
        var index = getRandomInt(0, this.count - 1);
        
        if (this.places[index].state != RobotPlace.STATES.ROBOT) {

            if (this.places.every(place => place.state == RobotPlace.STATES.ROBOTFULL)) {
                this.sendRobot(index);
                setTimeout(() => 
                this.takeRobot(index), PlaceSlider.robotTravelTimeDEBUGms);
            } else {
                if (this.places[index].state == RobotPlace.STATES.ROBOTFULL) {
                    for(var i = 0; i < this.places.length; i++) {
                        if (this.places[i].state != RobotPlace.STATES.ROBOTFULL) {
                            index = this.places[i].index;
                        }
                    }
                }
                if (this.places[index].state == RobotPlace.STATES.EMPTY) {
                    this.takeRobot(index);
                }
            }
        }
        
        return index;

    }

    /**
     * 
     * @param {list} robotList --- список ИНДЕКСОВ для роботов которые надо отправить
     */
    sendRobotFromList (robotList) {

        for (var robot in robotList) {
            this.sendRobot(robot);
        }

    }


    // Тут типо слайдер подписывается на все ящики
    // А на слайдер подписываются все остальные
    // Уже нет


}

class ManualPlaceControlPannel {

    constructor (placeSlider) {

        this.placeSlider = placeSlider;

        this.takePopUpButton = document.getElementById("takeRobot");
        this.takePopUp = document.getElementById("takeRobotPopUp");

        this.takePopUpIDInput = document.getElementById("manualControlIDInput");
        this.takePopUpAnyInput = document.getElementById("manualControlAnyInput");

        this.sendPopUpEnoughSpace = document.getElementById("manualControlEnoughSpace");
        this.sendPopUpNotEnoughSpace = document.getElementById("manualControlNotEnoughSpace");

        this.sendPopUpButton = document.getElementById("sendRobot");
        this.sendPopUp = document.getElementById("sendRobotPopUp");

        /**
         * Must Be INT
         */
        this.currentSelectedIndex = null;
        /**
         * Must be STR
         */
        this.currentSelectedNumber = null;

        this.init();

    }

    static sendBGRNone = "#f0c35a";
    static sendBGRSelected = "#5f7ae6";

    init() {

        this.takePopUpClose = document.getElementById("closeTakeRobotPopUp");
        this.sendPopUpClose = document.getElementById("closeSendRobotPopUp");

        this.takePopUpSubmit = document.getElementById("submitTakeRobot");
        this.sendPopUpSubmit = document.getElementById("submitSendRobot");

        
        this.takeAny = false;

        this.takePopUpIDInput.addEventListener("keypress", (event) => {
            this.takeAny = false;
            this.takePopUpAnyInput.style.border = "1px solid #000";

            if (this.takePopUpIDInput.value.length > 10){
                this.takePopUpIDInput.value = this.takePopUpIDInput.value.substring(0, 10);
            }

        });

        this.takePopUpIDInput.addEventListener("click", (event) => {
            this.takeAny = false;
            this.takePopUpAnyInput.style.border = "1px solid #000";
        });

        this.takePopUpAnyInput.addEventListener("click", (event) => {

            this.takeAny = !this.takeAny;
            if (this.takeAny) {
                this.takePopUpAnyInput.style.border = "2px solid #617bdf";
                this.takePopUpIDInput.value = "";
            } else {
                this.takePopUpAnyInput.style.border = "1px solid #000";
            }

        });



        this.sendSelected = document.getElementById("containerPreview");
        this.sendSelectedBGR = document.getElementById("containerPreviewBackground");

        this.takePopUpButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.showDiv(this.takePopUp);
        });

        this.sendPopUpButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.sendDeselect();
            this.showDiv(this.sendPopUp);
        });

        this.takePopUpClose.addEventListener("click", (event) => {
            this.hideDiv(this.takePopUp);
            this.takeDeselect();
        });

        this.sendPopUpClose.addEventListener("click", (event) => {
            this.hideDiv(this.sendPopUp);
            this.sendDeselect();
        });


        this.sendPopUpEnoughSpaceValue = false;
        this.sendPopUpNotEnoughSpaceValue = false;

        this.sendPopUpEnoughSpace.addEventListener("click", (event) => {

            if (this.sendPopUpNotEnoughSpaceValue) {
                return;
            }

            this.sendPopUpEnoughSpaceValue = !this.sendPopUpEnoughSpaceValue;
            if (this.sendPopUpEnoughSpaceValue) {
                this.sendPopUpEnoughSpace.style.border = "2px solid #5f7ae6";
            } else {
                this.sendPopUpEnoughSpace.style.border = "1px solid #000";
            }
        });

        
        this.sendPopUpNotEnoughSpace.addEventListener("click", (event) => {
            if (this.sendPopUpEnoughSpaceValue) {
                return;
            }

            this.sendPopUpNotEnoughSpaceValue = !this.sendPopUpNotEnoughSpaceValue;
            if (this.sendPopUpNotEnoughSpaceValue) {
                this.sendPopUpNotEnoughSpace.style.border = "2px solid #d9584c";
            } else {
                this.sendPopUpNotEnoughSpace.style.border = "1px solid #000";
            }
        });

        this.takePopUpSubmit.addEventListener("click", (event) => {
            this.hideDiv(this.takePopUp);
            this.placeSlider.takeRobot(this.currentSelectedIndex);
            this.takeDeselect();
            this.currentSelecteNumber = null;
            this.currentSelectedIndex = null;
        });

        this.sendPopUpSubmit.addEventListener("click", (event) => {
            if (this.currentSelectedIndex != null) {
                this.placeSlider.sendRobot(this.currentSelectedIndex, this.sendPopUpNotEnoughSpace);
                this.hideDiv(this.sendPopUp);
                this.sendDeselect();
            }
        });

        RobotPlace.subscribeClicked(this);
    }

    placeClicked (id, state, textNumber, index) {
        
        if (state == RobotPlace.STATES.EMPTY) {
            this.showDiv(this.takePopUp);
            this.currentSelectedIndex = index;
            this.currentSelecteNumber = textNumber;
        } else if (state == RobotPlace.STATES.ROBOT || state == RobotPlace.STATES.ROBOTFULL) {
            this.currentSelectedIndex = index;
            this.currentSelectedNumber = textNumber;
            this.sendSelect(this.currentSelectedNumber);
        }
    }

    /**
     * Фиксирует выбор робота для отправки в матрицу на панели выбора
     * @param {str} selected --- номер контейнера, который будет отображаться на панели отправки контейнера в матрицу
     */
    sendSelect (selected) {
        this.sendSelected.innerText = selected;
        this.sendSelectedBGR.style.backgroundColor = ManualPlaceControlPannel.sendBGRSelected;
    }

    sendDeselect () {
        this.sendSelected.innerText = "?";
        this.sendSelectedBGR.style.backgroundColor = ManualPlaceControlPannel.sendBGRNone;
        this.currentSelecteNumber = null;
        this.currentSelectedIndex = null;

        this.sendPopUpEnoughSpace.style.border = "1px solid #000";
        this.sendPopUpNotEnoughSpace.style.border = "1px solid #000";

        this.sendPopUpEnoughSpaceValue = false;
        this.sendPopUpNotEnoughSpaceValue = false;
    }

    takeDeselect() {
        
        this.takeAny = false;
        this.takePopUpIDInput.value = "";
        this.takePopUpAnyInput.style.border = "1px solid #000";

    }

    showDiv (div) {
        div.style.display = "block";
    }

    hideDiv (div) {
        div.style.display = "none";
    }   
}

class PackageOptions {

    static packageOptions = [   
        "Гофрокороб S",
        "Гофрокороб M",
        "Гофрокороб L",
        "Пакет S",
        "Конверт А4"
    ];

}

/**
 * Класс для эоементов внутори страницы вклаки поп-апа
 */
class PageItem {

    /**
     * 
     * @param {PageItem.ITEMTYPE} itemType --- Тип элемента списка (вкладка, страница)
     * @param {Object} parent --- Родитель (страница на вкладке)
     * @param {str} insertBeforeItem --- ID элемента, перед которым надо вставлять элементы списка
     * @param {str} barcode --- Штрихкод (пусто / значение штрихкода)
     * @param {*} packageName --- Тип упаковки
     * @param {*} packageNameList --- Список для выбора упаковки
     */
    constructor (itemType, parent, insertBeforeItem, barcode=null, packageName=null, packageNameList=null) {

        this.type = itemType;
        this.barcode = null;

        this.parent = parent;
        this.placeIndex = null;

        if (barcode == null) {
            // this.barcode = "Штрихкод не введен";
            this.barcode = null;
        } else {
            this.barcode = barcode;
        }

        this.parentPage = this.parent.page;
        this.insertBeforeItem = insertBeforeItem;

        this.packageName = packageName;
        
        this.init();

        // if (barcode != null) {
        //     this.placeIndex = this.parent.placeSlider.requestRobot(this.barcode);
        // }

    }

    static ITEMTYPE = Object.freeze ({
        FIRSTFIRST: "itemFirstTabFirstPage",
        FIRSTSECOND: "itemFirstTabSecondPage",
        SECONDFIRST: "itemSecondTabFirstPage",
        SECONDSECOND: "itemSecondTabSecondPage"
    });

    init() {
        
        this.createDiv();

        this.scanButton = this.div.querySelector(".div_scan");

        this.barcodeDiv = this.div.querySelector(".field_input_barcode");
        if (this.barcode != null) {
            this.barcodeDiv.innerText = this.barcode;
        }

        if (this.type == PageItem.ITEMTYPE.FIRSTFIRST || this.type == PageItem.ITEMTYPE.SECONDFIRST) {

            this.scanButton.addEventListener("click", (event) => {
                alert ("Отсканируйте товар");
                // DB request
                // Scanner request (in DB)
                // All requests to server (security)

                // ГОВНОКОД ПЕРЕДЕЛАТЬ
                this.div.querySelector(".div_barcode_value").value = (getRandomInt(12345, 1233456)).toString();
                this.packageName = PackageOptions.packageOptions[getRandomInt(0, PackageOptions.packageOptions.length - 1)];
                
                if (this.div.querySelector(".typeofpackage_value")) {
                    this.div.querySelector(".typeofpackage_value").innerText = this.packageName;
                }
                if (this.div.querySelector(".dropdown-button")) {
                    this.div.querySelector(".dropdown-button").innerText = this.packageName;
                }

                this.div.querySelector(".hint_scan").innerHTML = "Штрихкод<br/>отсканирован";

            });
        }

        this.packageNameDiv = this.div.querySelector(".typeofpackage_value");
        if (!this.packageNameDiv) {
            this.packageNameDiv = this.div.querySelector(".div_typeofpackage");
        }

        if(this.packageName != null){
            this.packageNameDiv.innerText = this.packageName;
        }


        /**
         * Номер контейнера, куда надо класть или доставать посылку на вторых страницах обеих вкладок
         */
        this.digit = this.div.querySelector(".container_digit_inoutpackagenumber");

        if (this.type == PageItem.ITEMTYPE.FIRSTSECOND) {
            this.digit.addEventListener("click", (event) => {
                if (this.digit.innerText == "+") {
                    
                    this.placeIndex = this.parent.placeSlider.requestRobot(this.barcode);
                    this.updateRobotState(this.parent.placeSlider.places[this.placeIndex].state, (this.placeIndex + 1).toString());
                }
            });
        }


        if (this.type == PageItem.ITEMTYPE.SECONDFIRST) {

            this.fillDropDown();

        }

        this.notEnoughSpaceButton = null;
        this.insertedButton = null;
        this.inserted = false;
        this.fullCapacityButton = null;
        this.fullCapacity = false;
        
        if (this.type == PageItem.ITEMTYPE.SECONDSECOND) {

            this.notEnoughSpaceButton = this.div.querySelector(".button_requestanothercontainer_notenoughspace");
            this.insertedButton = this.div.querySelector(".button_packagesubmit");
            this.fullCapacityButton = this.div.querySelector(".checkbox_packagesubmit_isfullcontainer");

            this.notEnoughSpaceButton.addEventListener("click", (event) => {

                this.notEnoughSpaceButton.style.border = "4px solid #db605d";

                setTimeout(() => {
                    this.notEnoughSpaceButton.style.border = "2px solid #db605d";
                }, PlaceSlider.robotTravelTimeDEBUGms);

                this.parent.placeSlider.alertFullRobot(this.placeIndex);
                this.placeIndex = this.parent.placeSlider.requestRobot(this.barcode);

                this.updateRobotState(this.parent.placeSlider.places[this.placeIndex].state, (this.placeIndex + 1).toString());
            });

            this.insertedButton.addEventListener("click", (event) => {

                this.inserted = !this.inserted;
                if (this.inserted) {
                    this.insertedButton.style.border = "4px solid #5f7ae6";
                } else {
                    this.insertedButton.style.border = "2px solid #5f7ae6";
                    this.fullCapacityButton.style.boxShadow = "0 4px 2px rgba(0, 0, 0, .2)";
                    this.fullCapacityButton.style.border = "2px solid #db5f60";
                }

            });

            this.fullCapacityButton.addEventListener("click", (event) => {

                if (this.inserted) {

                    this.fullCapacity = !this.fullCapacity;

                    if (this.fullCapacity) {
                        
                        this.fullCapacityButton.style.boxShadow = "0 4px 2px #ff3029";
                        this.fullCapacityButton.style.border = "4px solid #db5f60";

                    } else {
                        this.fullCapacityButton.style.boxShadow = "0 4px 2px rgba(0, 0, 0, .2)";
                        this.fullCapacityButton.style.border = "2px solid #db5f60";
                    }

                }

            });
            
            this.digit.addEventListener("click", (event) => {
                if (this.digit.innerText == "+") {
                    
                    this.placeIndex = this.parent.placeSlider.requestRobot(this.barcode);
                    this.updateRobotState(this.parent.placeSlider.places[this.placeIndex].state, (this.placeIndex + 1).toString());
                }
            });

        }

        if (this.type == PageItem.ITEMTYPE.FIRSTSECOND || this.type == PageItem.ITEMTYPE.SECONDSECOND) {
            RobotPlace.subscribeState(this);
            this.placeIndex = this.parent.placeSlider.requestRobot(this.barcode, this.packageName);
            this.updateRobotState(this.parent.placeSlider.places[this.placeIndex].state, (this.placeIndex + 1).toString());
        }


    }


    placeStateChanged(id, state, textNumber, index) {

        console.log("PageItem RobotStateChanged " + state);

        if (index != this.placeIndex) {
            return;
        }

        if (state == RobotPlace.STATES.ROBOTFULL && this.type != PageItem.ITEMTYPE.FIRSTSECOND) {

            this.placeIndex = this.parent.placeSlider.requestRobot(this.barcode, this.packageName);
            this.updateRobotState(this.parent.placeSlider.places[this.placeIndex].state, this.parent.placeSlider.places[this.placeIndex].textNumber);

        } else {
            this.updateRobotState(state, textNumber);
        }

    }
    

    createDiv () {

        const template = document.getElementById(this.type);
        const clone = document.importNode(template.content, true);

        var newDiv = document.createElement('div');
        newDiv.appendChild(clone);
        
        newDiv.id = this.type + (this.parentPage.childElementCount - 1).toString();
        // newDiv.className = template.firstElementChild.className;

        this.parentPage.insertBefore(newDiv, document.getElementById(this.insertBeforeItem));
        this.div = document.getElementById(newDiv.id);

    }

    removeDiv () {
        this.parentPage.removeChild(this.div);
    }

    getBarcodeValue () {
        return this.div.querySelector(".div_barcode_value").value;
    }

    getPackageNameValue () {
        var packageNameDiv = this.div.querySelector(".dropdown-button");
        if (packageNameDiv) {
            return this.div.querySelector(".dropdown-button").innerText;
        } else {
            return "Упаковка не определена";
        }
    }

    getPlaceIndex () {
        return this.placeIndex;
    }

    fillDropDown () {

        this.dropdownContent = this.div.querySelector(".dropdown-content");

        for (var i = 0; i < PackageOptions.packageOptions.length; i++) {

            var elem = document.createElement("div");
            elem.className = "dropdownItem";
            elem.innerText = PackageOptions.packageOptions[i];
            this.dropdownContent.appendChild(elem);
        
        }

        this.dropdownItems = this.dropdownContent.querySelectorAll(".dropdownItem");

        this.dropdownItems.forEach(item => {
            item.addEventListener("click", (event) => {
                this.packageName = item.innerText;
                this.div.querySelector(".dropdown-button").innerText = this.packageName;
            })
        })

        this.dropdownContent.style.display = "none";

        this.dropdownButton = this.div.querySelector(".div_typeofpackage");

        this.dropdownButton.addEventListener("click", (event) => {
            if (this.dropdownContent.style.display == "none") {
                this.dropdownContent.style.display = "block";
            } else {
                this.dropdownContent.style.display = "none";
            }
        }); 

    }

    updateRobotState (state, digit) {

        if (this.digit == null) {
            return;
        }

        var iconDone = this.div.querySelector(".image_locationstatus_ontable");
        if (!iconDone) {
            iconDone = this.div.querySelector(".image_containerontable");
        }

        switch (state) {

            case RobotPlace.STATES.ARRIVING:
                iconDone.src = "images/Primary-9_1.svg";
                this.digit.parentNode.style.backgroundColor = "#f0c35a";
                this.digit.style.color = "#191919";
                break;
            case RobotPlace.STATES.DEPARTING:
                iconDone.src = "images/Primary-9_1.svg";
                this.digit.parentNode.style.backgroundColor = "#f0c35a";
                this.digit.style.color = "#191919";
                break;
            case RobotPlace.STATES.ROBOT:
                iconDone.src = "images/Primary-7_1.svg";
                this.digit.parentNode.style.backgroundColor = "#5f7ae6";
                this.digit.style.color = "#f3f5fd";
                break;
            case RobotPlace.STATES.EMPTY:
                break;
            case RobotPlace.STATES.ROBOTFULL:
                iconDone.src = "images/error.svg";
                this.digit.parentNode.style.backgroundColor = "#ff4747";
                break;
            default:
                console.error("Wrong robot place state " + state + " at container" + this.div.id + ". Please, check PageItem.updateRobotState");
                break;
        }

        this.digit.innerText = digit.toString();

    }
    
}

class RobotListItem {
    
    /**
     * 
     * @param {int} index 
     * @param {RobotPlace.STATES} state 
     */
    constructor (index, state) {

        this.index = index;
        this.state = state;
    }

}

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

class AdministrationPannel {

    constructor (placeSlider) {

        this.div = document.querySelector(".div_leftbottompanel_settings");

        this.connectionStatus = this.div.querySelector(".image_connectionstatus");
        
        this.statisticsButton = this.div.querySelector(".cell_statisticsbutton");
        this.historyButton = this.div.querySelector(".cell_historybutton");
        this.diagnosticButton = this.div.querySelector(".cell_diagnosticsbutton");
        this.settingsButton = this.div.querySelector(".cell_settingsbutton");

        this.init();

    }

    init() {

        this.statisticsButton.addEventListener("click", (event) => {
            alert("Недоступно в альфа версии");
        });

        this.historyButton.addEventListener("click", (event) => {
            alert("Недоступно в альфа версии");
        });

        this.diagnosticButton.addEventListener("click", (event) => {
            alert("Недоступно в альфа версии");
        });

        this.settingsButton.addEventListener("click", (event) => {
            alert("Недоступно в альфа версии");
        });
    }

}

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


var placeSlider = new PlaceSlider(5);
var manualPlaceControlPannel = new ManualPlaceControlPannel(placeSlider);

var mailPopUp = new MailPopUp(placeSlider);
var transferPopUp = new TransferPopUp(placeSlider);
var administrationPannel = new AdministrationPannel(placeSlider);