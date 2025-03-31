document.addEventListener('DOMContentLoaded', function() {
    // Находим все dropdown-элементы на странице
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Для каждого dropdown добавляем обработчики событий
    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        
        // Обработчик клика по значению - открывает/закрывает список
        value.addEventListener('click', function(e) {
            e.stopPropagation(); // Предотвращаем всплытие, чтобы не сработал document.click
            
            // Закрываем все другие открытые dropdown
            document.querySelectorAll('.dropdown__list_active').forEach(openList => {
                if (openList !== list) {
                    openList.classList.remove('dropdown__list_active');
                }
            });
            
            // Открываем/закрываем текущий dropdown
            list.classList.toggle('dropdown__list_active');
        });
        
        // Обработчики кликов по пунктам списка
        dropdown.querySelectorAll('.dropdown__item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault(); // Запрещаем переход по ссылке
                
                // Получаем текст выбранного пункта
                const selectedText = this.textContent.trim();
                
                // Устанавливаем новое значение
                value.textContent = selectedText;
                
                // Закрываем список
                list.classList.remove('dropdown__list_active');
            });
        });
    });
    
    // Закрытие dropdown при клике вне его области
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown__list_active').forEach(list => {
            list.classList.remove('dropdown__list_active');
        });
    });
});