document.addEventListener('DOMContentLoaded', function() {
    // Основная часть задания - изменение размера шрифта
    const book = document.getElementById('book');
    const fontSizeControls = document.querySelectorAll('.font-size');
    
    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем активный класс у всех элементов
            fontSizeControls.forEach(item => item.classList.remove('font-size_active'));
            
            // Добавляем активный класс текущему элементу
            this.classList.add('font-size_active');
            
            // Удаляем все классы размера шрифта у книги
            book.classList.remove('book_fs-small', 'book_fs-big');
            
            // Добавляем нужный класс в зависимости от data-атрибута
            const size = this.dataset.size;
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
    
    // Повышенный уровень сложности - цвет текста и фона
    const textColorControls = document.querySelectorAll('[data-text-color]');
    const bgColorControls = document.querySelectorAll('[data-bg-color]');
    
    if (textColorControls.length > 0) {
        textColorControls.forEach(control => {
            control.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Удаляем активный класс у всех элементов управления цветом текста
                textColorControls.forEach(item => item.classList.remove('color_active'));
                
                // Добавляем активный класс текущему элементу
                this.classList.add('color_active');
                
                // Удаляем все классы цвета текста у книги
                book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
                
                // Добавляем нужный класс в зависимости от data-атрибута
                const color = this.dataset.textColor;
                if (color === 'black') {
                    book.classList.add('book_color-black');
                } else if (color === 'gray') {
                    book.classList.add('book_color-gray');
                } else if (color === 'whitesmoke') {
                    book.classList.add('book_color-whitesmoke');
                }
            });
        });
    }
    
    if (bgColorControls.length > 0) {
        bgColorControls.forEach(control => {
            control.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Удаляем активный класс у всех элементов управления цветом фона
                bgColorControls.forEach(item => item.classList.remove('color_active'));
                
                // Добавляем активный класс текущему элементу
                this.classList.add('color_active');
                
                // Удаляем все классы фона у книги
                book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
                
                // Добавляем нужный класс в зависимости от data-атрибута
                const bgColor = this.dataset.bgColor;
                if (bgColor === 'black') {
                    book.classList.add('book_bg-black');
                } else if (bgColor === 'gray') {
                    book.classList.add('book_bg-gray');
                } else if (bgColor === 'white') {
                    book.classList.add('book_bg-white');
                }
            });
        });
    }
});