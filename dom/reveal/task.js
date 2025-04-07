document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом reveal
    const reveals = document.querySelectorAll('.reveal');
    
    // Функция проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Функция обработки прокрутки
    function handleScroll() {
        reveals.forEach(reveal => {
            if (isElementInViewport(reveal)) {
                reveal.classList.add('reveal_active');
            }
        });
    }
    
    // Проверяем элементы при загрузке страницы
    handleScroll();
    
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);
});