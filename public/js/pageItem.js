
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
