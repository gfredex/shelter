console.log('Самооценка:\n1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля.\nВесь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции: +8\n9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n10. Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8');

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".nav__burger").addEventListener('click', function (doIt) {
        doIt.stopPropagation();
        document.querySelector(".nav__burger").classList.toggle("open");
        document.querySelector(".nav__list").classList.toggle("open");
    });

    document.addEventListener("click", function () {
        if (document.querySelector(".nav__burger").classList.contains("open")) {
            document.querySelector(".nav__burger").classList.toggle("open");
            document.querySelector(".nav__list").classList.toggle("open");
        }
    });
    ``
});