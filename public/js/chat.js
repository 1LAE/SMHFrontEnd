class ChatPopUp {

    constructor() {
        this.popUp = document.getElementById("chatPopUp");
        this.popUpButton = document.getElementById("chatPopUpButton");

        this.isShowed = false;

        this.popUpButton.addEventListener("click", (event) => {
            this.show();
        });

        this.popUp.addEventListener("click", (event) => {
            this.hide();
        })

    }

    show() {
        this.popUp.style.display = "block";
    }

    hide() {
        this.popUp.style.display = "none";
    }

}