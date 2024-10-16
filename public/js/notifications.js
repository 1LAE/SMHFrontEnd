class NotificationsPopUp {
    constructor () {
        this.popUp = document.getElementById("notificationsPopUp");

        this.popUpButton = document.getElementById("notificationButton");

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