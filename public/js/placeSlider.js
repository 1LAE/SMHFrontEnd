
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
