$(document).ready(function() {
    let inputElement = $(".blackInput");
    let h5Element = $("#enterTxt");

    inputElement.on("input", function() {

        let inputValue = inputElement.val();

        h5Element.text(inputValue);
    });
});
// 1)

$(document).ready(function() {
    let inputElement2 = $(".blackInput2");
    let buttonElement = $(".replaceBtn");
    let h5Element2 = $("#enterTxt2");

    buttonElement.on("click", function() {
        let inputValue = inputElement2.val();
        
        h5Element2.text(inputValue);
    });
});
// 2)

$(document).ready(function(){
    let changeColor = $(".Exc3");
    let addBtn = $(".addClass");

    addBtn.on("click", function() {
        changeColor.addClass('active');
    });
});
// 3)

$(document).ready(function(){
    let changeColor2 = $(".Exc4");
    let deleteBtn = $(".deleteClass");

    deleteBtn.on("click", function() {
        changeColor2.removeClass('active');
    });
});
// 4)

$(document).ready(function() {
    let element = $(".Exc5");
    let button = $(".deleteAddClass");

    button.on("click", function() {
        element.toggleClass('active');
    });
});
// 5)

$(document).ready(function() {
    let element = $(".Exc6");
    let addButton = $(".deleteAddClass2");
    let checkButton = $(".deleteAddClass3");

    addButton.on("click", function() {
        element.toggleClass('active');
    });

    checkButton.on("click", function() {
        if (element.hasClass('active')) {
            alert("Класс 'active' присутствует");
        } else {
            alert("Класс 'active' отсутствует");
        }
    });
});
// 6)


// 9)