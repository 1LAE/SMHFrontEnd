
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
