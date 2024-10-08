
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
