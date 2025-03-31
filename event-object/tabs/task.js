document.addEventListener('DOMContentLoaded', function() {
    const tabsContainers = document.querySelectorAll('.tabs');
    
    tabsContainers.forEach(function(tabsContainer) {
        const tabs = Array.from(tabsContainer.querySelectorAll('.tab'));
        const tabContents = tabsContainer.querySelectorAll('.tab__content');
        
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                // Находим индекс текущей вкладки
                const index = tabs.indexOf(tab);
                
                // Удаляем активные классы
                tabs.forEach(t => t.classList.remove('tab_active'));
                tabContents.forEach(c => c.classList.remove('tab__content_active'));
                
                // Добавляем активные классы
                tab.classList.add('tab_active');
                tabContents[index].classList.add('tab__content_active');
            });
        });
    });
});