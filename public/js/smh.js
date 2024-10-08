// Файл с JavaScript кодом для фронт-энд части СМХ


// Список обработчиков контейнеров
let containersListeners = {};
// Текущий нажатый робот, когда необходимо выбрать робота
let currentSelectedRobotID = null

// Обработчик нажатия на робота (место для робота)
function containerClicked (DivID) {
    var curDiv = document.getElementById(DivID);
    var number = curDiv.querySelector('.containerNumber').textContent;
    if (number == '+') {
        showTakeRobotPopUp();
    } else {
        selectContainerToSend(DivID);
    }
}

// Удалить погрузочное место со стола
function removeContainerInfoDiv(divID) {

    var parent = document.getElementById("containerSlider");
    var child = document.getElementById(divID);
    parent.removeChild(child);
}

// Возврат номера погрузочного меса при добавлнеии нового на стол погрузки
function newContainerNumber() {
    var slider = document.getElementById('containerSlider');
    return (slider.childElementCount + 1).toString();
}

// Добавить 1 погрузочное место на стол
function addNewContainerInfoDiv(containerTemplate) {
    const parentDiv = document.getElementById('containerSlider');
    const template = document.getElementById(containerTemplate);

    const clone = document.importNode(template.content, true);

    let newDiv = document.createElement('div');
    newDiv.appendChild(clone);

    // WARNING: Чекать на колизии!!!
    if (containerTemplate.includes("Empty")) {
        newDiv.id = 'containerInfoEmpty-' + Math.floor(Math.random() * 50000000);
        newDiv.className = "containerInfo";
        listener = function(event) {
            currentSelectedRobotID = newDiv.id;
            containerClicked(newDiv.id);
        };
        listener = newDiv.addEventListener("click", listener);
        containersListeners[newDiv.id] = listener;
    } else if (containerTemplate.includes("Wait")) {
        newDiv.id = 'containerInfoWait-' + Math.floor(Math.random() * 50000000);
        newDiv.className = "containerInfo";
        newDiv.querySelector('.containerNumber').textContent = newContainerNumber();
    } else if (containerTemplate.includes("Robot")) {
        newDiv.id = 'containerInfoRobot-' + Math.floor(Math.random() * 50000000);
        newDiv.className = "containerInfo";
        newDiv.querySelector('.containerNumber').textContent = newContainerNumber();
        listener = function(event) {
            currentSelectedRobotID = newDiv.id;
            containerClicked(newDiv.id);
        };
        listener = newDiv.addEventListener("click", listener);
        containersListeners[newDiv.id] = listener;
    }
    parentDiv.appendChild(newDiv);
}

// Убрать потом
// Делается через администрирование
addNewContainerInfoDiv('containerInfoEmptyTemplate');
// addNewContainerInfoDiv('containerInfoEmptyTemplate');
// addNewContainerInfoDiv('containerInfoEmptyTemplate');
// addNewContainerInfoDiv('containerInfoEmptyTemplate');
// addNewContainerInfoDiv('containerInfoEmptyTemplate');


// Изменение состояния робота
// Рекурсивная функция
// Переписать функцию и вызовы
function changeRobotPlaceState(robotPlace, i, state, action, breakpoint = false) {

    const parentDiv = document.getElementById(robotPlace.id).parentNode;

    const template = document.getElementById(state);
    const clone = document.importNode(template.content, true);

    let newDiv = document.createElement('div');
    newDiv.id = robotPlace.id;
    newDiv.className = "containerInfo";
    newDiv.appendChild(clone);
    newDiv.querySelector('.containerNumber').textContent = i.toString();
    parentDiv.replaceChild(newDiv, robotPlace);

    if (!state.includes('Wait')) {
        listener = function(event) {
            currentSelectedRobotID = newDiv.id;
            containerClicked(newDiv.id);
        };
        listener = newDiv.addEventListener("click", listener);
        containersListeners[newDiv.id] = listener;
    }

    if (breakpoint == false) {
        setTimeout(() => {
            changeRobotPlaceState(newDiv, action == 'in' ? i : '+', action == 'in' ? 'containerInfoRobotTemplate' : 'containerInfoEmptyTemplate', null, true);
        }, 5000);
    }
}

// Убрать выбранного робота из матрицы
function takeRobotFromMatrix() {

    var robotPlacesList = document.getElementById('containerSlider').children;
    var i = 1;
    for (var robotPlace of robotPlacesList) {
        var containerNumberElement = robotPlace.querySelector('containerNumber');
        if (
                (currentSelectedRobotID != null && robotPlace.id == currentSelectedRobotID) || 
                (currentSelectedRobotID == null && robotPlace.textContent.includes("+"))
            ) {
            changeRobotPlaceState(robotPlace, i, 'containerInfoWaitInTemplate', 'in');
            currentSelectedRobotID = null;
            break;
        }
        i = i + 1;
    }
}

// Выбор робота для отправки в матрицу 
// Меняет визуал поп-апа "Отправить контейнер в матрицу"
function selectContainerToSend(DivID) {

    var containerPreview = document.querySelector('.numbercontainer_manualin');
    let containerNumberText = document.getElementById(DivID).querySelector('.containerNumber').textContent;
    document.getElementById('containerPreview').innerText = containerNumberText.toString();
    document.getElementById('containerPreviewBackground').style.backgroundColor="#5f7ae6";
}

// Отправить выбранного робота в матрицу
function sendRobotToMatrix() {
 
    var robotIndex = parseInt(document.getElementById('containerPreview').textContent.trim(), 10);

    var robotPlacesList = document.getElementById('containerSlider').children;

    for (var i = 1; i <= robotPlacesList.length; i++) {
        var robotPlace = robotPlacesList[i - 1]; // Индексация начинается с 0, поэтому i - 1
        var containerNumberElement = robotPlace.querySelector('.containerNumber'); // Исправлено селектор
        if (containerNumberElement && containerNumberElement.innerText.includes(robotIndex.toString())) { // Убедились, что элемент существует и сравниваем строки
            changeRobotPlaceState(robotPlace, i, 'containerInfoWaitOutTemplate', 'out');
            currentSelectedRobotID = null; // Убедитесь, что currentSelectedRobotID объявлена
            break;
        }
    }

    document.getElementById('containerPreview').innerText = '?';
    document.getElementById('containerPreviewBackground').style.backgroundColor="#f0c35a";

}

// Закрыть поп-ап
function closeSendRobot () {
    var element = document.getElementById('sendRobotPopUp').style.display="none";
}

// Закрыть поп-ап
function closeTakeRobot () {
    var element = document.getElementById('takeRobotPopUp').style.display="none";
}

// Обработчик для кнопки изьять робота из матрицы
document.getElementById('submitTakeRobot').addEventListener('click', function e(event) {
    takeRobotFromMatrix();
    closeTakeRobot();
});

// Обраьотчик для кнопки отправить робота в матрицу
document.getElementById('submitSendRobot').addEventListener('click', function e(event) {
    sendRobotToMatrix();
    closeSendRobot();
});

// Показать поп-ап
function showTakeRobotPopUp () {
    var element = document.getElementById('takeRobotPopUp').style.display="block";
}

// Обработчик для нопки показать поп-ап
document.getElementById('takeRobot').addEventListener('click', function e(event) {
    event.preventDefault();
    showTakeRobotPopUp();
});

// Открыть поп-ап
function showSendRobotPopUp () {
    var element = document.getElementById('sendRobotPopUp').style.display="block";
}

// Обработчик для кнопки открыть поп-ап
document.getElementById('sendRobot').addEventListener('click', function e(event) {
    document.getElementById('containerPreview').innerText = '?';
    document.getElementById('containerPreviewBackground').style.backgroundColor="#f0c35a";
    event.preventDefault();
    showSendRobotPopUp();
});

// Обработчик для кнопки закрыть поп-ап
document.getElementById('closeSendRobotPopUp').addEventListener('click', function e(event) {
   closeSendRobot();
});

// Обработчик для кнопки закрыть поп-ап
document.getElementById('closeTakeRobotPopUp').addEventListener('click', function e(event) {
    closeTakeRobot();
});

// Обработчики для кнопок на поп ап вкладки принять / отдать
document.getElementById('takeMailDiv').addEventListener('click', function e(event) {
    document.querySelector('.pop_up_inoutpackage').style.display="block";
    document.getElementById('mailSecondTabFirstPage').style.display="block";
    document.getElementById('buttonSecondTab').classList.add('w--current');
    document.getElementById('mailSecondTab').classList.add("w--tab-active");
});

document.getElementById('giveMailDiv').addEventListener('click', function e(event) {
    document.querySelector('.pop_up_inoutpackage').style.display="block";
    document.getElementById('mailFirstTabFirstPage').style.display="block";
    document.getElementById('buttonFirstTab').classList.add('w--current');
    document.getElementById('mailFirstTab').classList.add("w--tab-active");
});

// Переключение вкладок принять / отдать
document.getElementById('buttonFirstTab').addEventListener('click', function e(event) {
    document.getElementById('mailFirstTabFirstPage').style.display="block";
    document.getElementById('buttonFirstTab').classList.add('w--current');
    document.getElementById('mailFirstTab').classList.add("w--tab-active");

    document.getElementById('mailFirstTabSecondPage').style.display="none";
    document.getElementById('mailSecondTabFirstPage').style.display="none";
    document.getElementById('mailSecondTabSecondPage').style.display="none";
    document.getElementById('buttonSecondTab').classList.remove('w--current');
    document.getElementById('mailSecondTab').classList.remove("w--tab-active");

});

document.getElementById('buttonSecondTab').addEventListener('click', function e(event) {
    document.getElementById('mailSecondTabFirstPage').style.display="block";
    document.getElementById('buttonSecondTab').classList.add('w--current');
    document.getElementById('mailSecondTab').classList.add("w--tab-active");

    document.getElementById('mailSecondTabSecondPage').style.display="none";
    document.getElementById('mailFirstTabFirstPage').style.display="none";
    document.getElementById('mailFirstTabSecondPage').style.display="none";
    document.getElementById('buttonFirstTab').classList.remove('w--current');
    document.getElementById('mailFirstTab').classList.remove("w--tab-active");
});



// ГОВНОКОД
// Переписать когда появится связь с БД
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ГОВНОКОД
// Переписать когда появится связь с БД
function getContainerState (barcode) {
    var state = {};
    state.number = getRandomInt(1, 5);
    state.color = 'white'
    return state
}

// Добавление посылки в первый поп-ап
function addElementFirstTabSecondPage(page, barcode, package) {
    
    // itemFirstTab

    const parentDiv = document.getElementById(page.id);
    const template = document.getElementById('itemFirstTabSecondPage');

    const clone = document.importNode(template.content, true);

    let newDiv = document.createElement('div');
    newDiv.appendChild(clone);

    // WARNING: Чекать на колизии!!!
    newDiv.id = 'firstTabSecondPageItem-' + Math.floor(Math.random() * 50000000);
    newDiv.className = "w-layout-layout quick-stack-7-tab2 wf-layout-layout";

    newDiv.querySelector('.field_input_barcode').innerText = barcode.toString();
    newDiv.querySelector('.typeofpackage_value').innerText = package.toString();

    var containerState = getContainerState(barcode);
    
    newDiv.querySelector('.container_digit_inoutpackagenumber').innerText = containerState.number.toString();

    parentDiv.insertBefore(newDiv, document.getElementById('submitFirtsTabSecondPage'));



    // ГОВНОКОД - УДАЛИТЬ ПОТОМ
    var robotPlacesList = document.getElementById('containerSlider').children;
    var i = 1;
    for (var robotPlace of robotPlacesList) {
        var containerNumberElement = robotPlace.querySelector('containerNumber');
        if (
                i == containerState.number
            ) {
            changeRobotPlaceState(robotPlace, i, 'containerInfoWaitInTemplate', 'in');
            currentSelectedRobotID = null;
            break;
        }
        i = i + 1;
    }
}

// Перенос посылок с первой страницы первой вкладки поп-апа во вторую
function copyItemsFirstPageFirstTabToSecondPage () {

    var elements = document.getElementById('mailFirstTabFirstPage').children;
    var secondPage = document.getElementById('mailFirstTabSecondPage');
    var submitButton = document.getElementById('submitFirtsTabSecondPage');

    var toCopy = [];

    for(var i = 0; i < elements.length; i++) {
        if (elements[i].className.includes('layout-layout')) {
            toCopy.push(elements[i]);
            addElementFirstTabSecondPage(secondPage, elements[i].querySelector('.div_barcode_value').value, elements[i].querySelector('.typeofpackage_value').textContent);
        }
    }

}

// Очистка страницы первой вкладки поп-апа
function clearFirstTabSecondPageElements() {
    // Получаем элемент с идентификатором 'mailFirstTabSecondPage'
    var secondPage = document.getElementById('mailFirstTabSecondPage');

    // Получаем все дочерние элементы этого элемента
    var elements = secondPage.children;

    var elemList = [];

    // Проходимся по всем дочерним элементам
    for(var i = 0; i < elements.length - 1; i++) {
        elements[i].id += 'to_delete';
        elemList.push(elements[i].id);
    }

    for (var i = 0; i < elemList.length; i++) {
        document.getElementById(elemList[i]).remove();
    }
}

// Переход на следующую вкладку
document.getElementById('submitFirtsTabFirstPage').addEventListener('click', function e(event) {

    document.getElementById('mailFirstTabSecondPage').style.display="block";
    document.getElementById('mailFirstTabFirstPage').style.display="none";
    clearFirstTabSecondPageElements();
    copyItemsFirstPageFirstTabToSecondPage();

});

// Обработчик для кнопки при переходу на следующую страницу
document.getElementById('submitSecondTabFirstPage').addEventListener('click', function e(event) {

    document.getElementById('mailSecondTabSecondPage').style.display="block";
    document.getElementById('mailSecondTabFirstPage').style.display="none";

});

// Обнвление порядковых номеров посылок, когда одна удаляется где-то в середине
function updateMailsNumber() {

    var mails = document.getElementById('mailFirstTabFirstPage').children; // Используем children вместо childNodes

    for (var i = 1; i <= mails.length; i++) {
        let mail = mails[i - 1]; // Индексация начинается с 0, поэтому i - 1
        if (mail.id.includes('mailPackage')) {
            var digitElement = document.getElementById(mail.id).querySelector('.container_digit_inoutpackagenumber');
            if (digitElement) { // Проверяем, что элемент существует
                digitElement.textContent = i.toString(); // Преобразуем индекс в строку перед присваиванием
            }
        }
    }
}

// Удалить посылку
function deleteMailFirstTab(DivID) {

    var child = document.getElementById(DivID);
    var parent = document.getElementById("mailFirstTabFirstPage");
    parent.removeChild(child);
    
    updateMailsNumber();

}

// Добавление новой посылки (вкладка выдача)

function getLastMailNumber () {

    var mails = document.getElementById('mailFirstTabFirstPage').childNodes;
    return mails.length - 4;
}

function addNewMailFirstTab() {
    const parentDiv = document.getElementById('mailFirstTabFirstPage');
    const template = document.getElementById('itemFirstTab');

    const clone = document.importNode(template.content, true);

    let newDiv = document.createElement('div');
    newDiv.appendChild(clone);

    // WARNING: Чекать на колизии!!!
    newDiv.id = 'mailPackage-' + Math.floor(Math.random() * 50000000);
    newDiv.className = "w-layout-layout quick-stack-7-tab2 wf-layout-layout";
    newDiv.querySelector('.selector_container_selected_done').style = 'border-radius:40px;';

    newDiv.querySelector('.container_digit_inoutpackagenumber').textContent=getLastMailNumber();

    deleteButton = newDiv.querySelector('.image_deleteelement');
    scanButton = newDiv.querySelector('.div_scan');

    deleteButton.addEventListener("click", function e(event) {
        deleteMailFirstTab(newDiv.id);
    });

    scanButton.addEventListener("click", function e(event) {
        
        newDiv.querySelector('.div_scan').style.backgroundColor="rgba(165, 179, 231, 0.48)";
        setTimeout(() => {
            newDiv.querySelector('.div_scan').style.backgroundColor="white";
        }, 100);

    });

    parentDiv.insertBefore(newDiv, document.getElementById('sectionButtonFirstTabAddNewMail'));
}

// Обработчик для кнопки добавления посылки
document.getElementById('buttonFirstTabAddNewMail').addEventListener('click', function e(event) {

    addNewMailFirstTab();

});

// Очистка посылок, которые уже ушли в матрицу
function clearFirstTabFirstPageElements() {

    clearFirstTabSecondPageElements();
    // Получаем элемент с идентификатором 'mailFirstTabSecondPage'
    var secondPage = document.getElementById('mailFirstTabFirstPage');

    // Получаем все дочерние элементы этого элемента
    var elements = secondPage.children;

    var elemList = [];

    // Проходимся по всем дочерним элементам
    for(var i = 0; i < elements.length - 2; i++) {
        elements[i].id += 'to_delete';
        elemList.push(elements[i].id);
    }

    for (var i = 0; i < elemList.length; i++) {
        document.getElementById(elemList[i]).remove();
    }

}

// Обработчик для кнопки когда все вложено в роботы
document.getElementById('submitFirtsTabSecondPage').addEventListener('click', function e(event) {

    document.getElementById('mailFirstTabSecondPage').style.display="none";
    document.getElementById('mailFirstTabFirstPage').style.display="none";

    clearFirstTabFirstPageElements();

    document.querySelector('.pop_up_inoutpackage').style.display="none";
    document.getElementById('buttonFirstTab').classList.remove('w--current');
    document.getElementById('mailFirstTab').classList.remove("w--tab-active");

});