document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(rotator => {
      const cases = rotator.querySelectorAll('.rotator__case');
      let currentIndex = 0;
      
      function rotate() {
        // Скрываем текущий активный элемент
        cases[currentIndex].classList.remove('rotator__case_active');
        
        // Переходим к следующему элементу (с зацикливанием)
        currentIndex = (currentIndex + 1) % cases.length;
        
        // Получаем параметры нового активного элемента
        const nextCase = cases[currentIndex];
        const speed = nextCase.dataset.speed || 1000;
        const color = nextCase.dataset.color || 'black';
        
        // Применяем стили и делаем элемент видимым
        nextCase.style.color = color;
        nextCase.classList.add('rotator__case_active');
        
        // Устанавливаем таймер для следующей смены
        setTimeout(rotate, speed);
      }
      
      // Запускаем первый цикл смены
      const firstCase = cases[currentIndex];
      const initialSpeed = firstCase.dataset.speed || 1000;
      const initialColor = firstCase.dataset.color || 'black';
      
      firstCase.style.color = initialColor;
      setTimeout(rotate, initialSpeed);
    });
  });