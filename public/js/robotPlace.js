
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

