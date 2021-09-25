
let contentButton = document.querySelector('.content__button');
let contentText = document.querySelector('.content__more-text')

let open = function () {
    contentText.classList.toggle('content__more-text')
    if (contentText.classList.contains('content__more-text')) {
        contentButton.textContent = 'Показать все';
    } else {
        contentButton.textContent = 'Скрыть';
    }
    contentButton.classList.toggle('content__button--hide')
}
contentButton.addEventListener('click', open)

