document.addEventListener('DOMContentLoaded', function() {
    const descr = document.querySelector('.about-whoWe__content-text');
    const showBtn = document.querySelector('.about-whoWe__show-btn');
    const btnText = showBtn ? showBtn.querySelector('span') : null;
    const arrowImg = showBtn ? showBtn.querySelector('img') : null;

    if (!descr || !showBtn || !btnText || !arrowImg) {
        return;
    }

    // Функция для переключения состояния текста
    function toggleText() {
        if (descr.classList.contains('expanded')) {
            descr.style.maxHeight = '220px';
            btnText.textContent = 'Развернуть';
            arrowImg.style.transform = 'rotate(0deg)';
        } else {
            descr.style.maxHeight = `${descr.scrollHeight}px`;
            btnText.textContent = 'Свернуть';
            arrowImg.style.transform = 'rotate(180deg)';
        }
        descr.classList.toggle('expanded');
    }

    function checkWidth() {
        if (window.innerWidth <= 500) {
            showBtn.style.display = 'flex';
        } else {
            showBtn.style.display = 'none';
            descr.classList.remove('expanded');
            descr.style.maxHeight = `${descr.scrollHeight}px`;
            btnText.textContent = 'Развернуть'; 
            arrowImg.style.transform = 'rotate(0deg)'; 
        }
    }

    showBtn.addEventListener('click', toggleText);
    window.addEventListener('resize', checkWidth);

    checkWidth();
});