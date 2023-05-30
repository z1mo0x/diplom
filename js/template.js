const templateMainContainer = document.getElementById('template');
const templateButtonElements = document.querySelectorAll('.template__select > button');
const hiddenElements = document.querySelectorAll('.hidden-exspo');
var selectedExspo = null;

templateButtonElements.forEach((button, index) => {

    button.addEventListener('click', () => {
        templateContent.style.maxHeight = 0;
        templateMainContainer.id = 'exspo' + (index + 1);
        selectedExspo = (index + 1);
        console.log(selectedExspo);
        hiddenElements.forEach((element) => {
            element.classList.add('hidden-exspo');
        })
        hiddenElements[selectedExspo - 1].classList.toggle('hidden-exspo');

        const editButton = document.getElementById('editButton');
        const exspoTitle1 = document.querySelector('.exspo1__block-title');
        const exspoDescr1 = document.querySelector('.exspo1__block-descr');
        const exspoTitle1Input = document.getElementById('exspo1__block-title');
        const exspoDescr1Input = document.getElementById('exspo1__block-descr');
        const exspoTitle2 = document.querySelector('.exspo2__block-title');
        const exspoDescr2 = document.querySelector('.exspo2__block-descr');
        const exspoDownText2 = document.querySelector('.exspo2__downtext');
        const exspoTitle2Input = document.getElementById('exspo2__block-title');
        const exspoDescr2Input = document.getElementById('exspo2__block-descr');
        const exspoDownText2Input = document.getElementById('exspo2__block-downtext');
        const exspoTitle3 = document.querySelector('.exspo3__block-title');
        const exspoDescr3 = document.querySelector('.exspo3__block-descr');
        const exspoTitle3Input = document.getElementById('exspo3__block-title');
        const exspoDescr3Input = document.getElementById('exspo3__block-descr');

        editButton.style.display = 'none';

        if (selectedExspo != null) {
            editButton.style.display = 'block';
            if (selectedExspo == 1) {
                editButton.addEventListener('click', () => {
                    const title = document.querySelector('.title');
                    exspoDescr1.classList.toggle('hidden');
                    exspoTitle1.classList.toggle('hidden');
                    exspoTitle1Input.classList.toggle('hidden');
                    exspoDescr1Input.classList.toggle('hidden'); exspoTitle1.textContent = exspoTitle1Input.value;
                    exspoDescr1.textContent = exspoDescr1Input.value;
                    title.textContent = exspoTitle1Input.value;
                })
            }
            else if (selectedExspo == 2) {
                editButton.addEventListener('click', () => {
                    const title = document.querySelector('.title');
                    exspoDescr2.classList.toggle('hidden');
                    exspoTitle2.classList.toggle('hidden');
                    exspoDownText2.classList.toggle('hidden');
                    exspoTitle2Input.classList.toggle('hidden');
                    exspoDescr2Input.classList.toggle('hidden');
                    exspoDownText2Input.classList.toggle('hidden');
                    exspoTitle2.textContent = exspoTitle2Input.value;
                    exspoDescr2.textContent = exspoDescr2Input.value;
                    exspoDownText2.textContent = exspoDownText2Input.value;
                    title.textContent = exspoTitle2Input.value;
                })
            } else if (selectedExspo == 3) {
                editButton.addEventListener('click', () => {
                    exspoDescr3.classList.toggle('hidden');
                    const title = document.querySelector('.title');
                    exspoTitle3.classList.toggle('hidden');
                    exspoTitle3Input.classList.toggle('hidden');
                    exspoDescr3Input.classList.toggle('hidden'); exspoTitle3.textContent = exspoTitle3Input.value;
                    exspoDescr3.textContent = exspoDescr3Input.value;
                    title.textContent = exspoTitle3Input.value;
                })
            }
        }
    })
});

