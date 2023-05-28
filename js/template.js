const templateMainContainer = document.getElementById('template');
const templateButtonElements = document.querySelectorAll('.template__select > button');

const exspos = [
    `<div class="exspo1">
    <div class="exspo1__title title">Название</div>
    <input type="text" class="hidden" id="exspo1__title"/>
    <div class="container exspo1__wrapper">
        <div class="exspo1__block">
            <img class="exspo1__bg" src="img/example2.webp" alt="">
            <div class="exspo1__images">
                <img src="img/exspo1.jpg" alt="">
                <img src="img/exspo2.jpg" alt="">
            </div>
            <div class="exspo1__block-title">
                Электромеханическая счётно-табличная машина "АСКОТА"
            </div>
                <input type="text" class="hidden" id="exspo1__block-title"/>
            <div class="exspo1__block-descr">
                Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и могла
                удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в минуту.
                Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и могла
                удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в минуту.
                Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и могла
                удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в минуту.

            </div>
            <textarea cols="100" rows="10" class="hidden" id="exspo1__block-descr"></textarea>
            <div class="exspo1__block-link">
                <a href="#">Перейти к новости</a>
            </div>
        </div>
    </div>
</div>`,
    `<div class="exspo2">
<div class="exspo2__title title">Название</div>
<input type="text" class="hidden"/>
<div class="container exspo2__wrapper">
    <div class="exspo2__block">
        <img class="exspo2__bg" src="img/example1.webp" alt="">
        <div class="exspo2__top">
            <div class="exspo2__images">
                <img src="img/exspo1.jpg" alt="">
            </div>
            <div class="exspo2__text">
                <div class="exspo2__block-title">
                    Электромеханическая счётно-табличная машина "АСКОТА"
                </div>
                <input type="text" class="hidden" id="exspo2__block-title"/>
                <div class="exspo2__block-descr">
                    Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и
                    могла
                    удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в
                    минуту. могла
                    удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в
                    минуту.
                </div>
                <textarea cols="50" rows="10" class="hidden" id="exspo2__block-descr"></textarea>
            </div>
        </div>
        <div class="exspo2__downtext">
            Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и могла
            удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в минуту.
            Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и могла
            удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в минуту.
            Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и могла
            удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в минуту.
            Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и могла
            удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в минуту.
            <input type="text" class="hidden"/>
        </div>
        <textarea cols="100" rows="10" class="hidden" id="exspo2__block-downtext"></textarea>
        <div class="exspo1__block-link">
            <a href="#">Перейти к новости</a>
        </div>
    </div>
</div>
</div>`, `<div class="exspo3">
<div class="exspo3__title title">Название</div>
<input type="text" class="hidden"/>
<div class="container exspo3__wrapper">
    <div class="exspo3__block">
        <img class="exspo3__bg" src="img/example4.webp" alt="">
        <div class="exspo3__images">
            <img src="img/exspo1.jpg" alt="">
            <img src="img/exspo2.jpg" alt="">

        </div>
        <div class="exspo3__down">
            <div class="exspo3__logo">
                <img src="img/exspo1.jpg" alt="">
            </div>
            <div class="exspo3__text">
                <div class="exspo3__block-title">
                    Электромеханическая счётно-табличная машина "АСКОТА"
                </div>
                <input type="text" class="hidden" id="exspo3__block-title"/>
                <div class="exspo3__block-descr">
                    Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и
                    могла
                    удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в
                    минуту. могла
                    удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в
                    минуту.
                </div>
                <textarea cols="50" rows="10" class="hidden" id="exspo3__block-descr"></textarea>
            </div>
        </div>
        <div class="exspo3__block-link">
            <a href="#">Перейти к новости</a>
        </div>
    </div>
</div>
</div>`];

var selectedExspo = null;




templateButtonElements.forEach((button, index) => {

    button.addEventListener('click', () => {
        templateMainContainer.innerHTML = exspos[index];
        templateContent.style.maxHeight = 0;
        templateMainContainer.id = 'exspo' + (index + 1);
        selectedExspo = (index + 1);

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
                    const titles = document.querySelector('.title');
                    exspoTitle3.classList.toggle('hidden');
                    exspoTitle3Input.classList.toggle('hidden');
                    exspoDescr3Input.classList.toggle('hidden'); exspoTitle3.textContent = exspoTitle3Input.value;
                    exspoDescr3.textContent = exspoDescr3Input.value;
                    itle.textContent = exspoTitle3Input.value;
                })
            }
        }
    })

});

