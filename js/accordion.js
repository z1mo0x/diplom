const templateButton = document.querySelector('.template__accordion');
const templateContent = document.querySelector('.template__select');

templateButton.addEventListener('click', () => {

    if (templateContent.getBoundingClientRect().height != 0) {
        templateContent.style.maxHeight = 0;
        templateContent.style.opacity = 0;
    } else {
        templateContent.style.maxHeight = templateContent.scrollHeight + 'px';
        templateContent.style.opacity = 1;
    }

})
