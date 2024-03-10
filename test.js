let button = document.querySelector('#button');

button.addEventListener('click',function() {
    let inputs = document.querySelectorAll('#test input');

    for (let input of inputs) {
        input.classList.remove('correct');
        input.classList.remove('incorrect');

        if (input.value == input.dataset.right) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
        }
    }
});

// Вместо класса можно использовать data-атрибуты: "[data-clear-button]"
document.querySelectorAll(".clear-button")
.forEach(function (elem) {
  elem.onclick = function (e) {
    // Если необходимо предотвратить/отменить событие по умолчанию,
    // то необходимо вызвать метод preventDefault у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
    // e.preventDefault();
    // если необходимо также предотвратить дальнейшее "всплытие" события,
    // то необходимо вызвать метод stopPropagation у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation
    // e.stopPropagation();
    let selector = this.dataset.clearSelector;
    document.querySelectorAll(selector)
    .forEach(function (item) {
      item.value = "";
    });
  };
});