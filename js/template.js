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
            <input type="text" class="hidden" id="exspo1__block-descr"/>
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
                <input type="text" class="hidden"/>
                <div class="exspo2__block-descr">
                    Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и
                    могла
                    удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в
                    минуту. могла
                    удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в
                    минуту.
                </div>
                <input type="text" class="hidden"/>
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
                <input type="text" class="hidden"/>
                <div class="exspo3__block-descr">
                    Она умела считать только на ленту. Она была плохо приспособлена для скоростного набора и
                    могла
                    удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в
                    минуту. могла
                    удовлетворять потребностям только юных бухгалтеров, работающих со скоростью 60 знаков в
                    минуту.
                </div>
                <input type="text" class="hidden"/>
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

        console.log(
            exspoTitle1, exspoDescr1, exspoTitle1Input, exspoDescr1Input
        );

        editButton.addEventListener('click', () => {
            exspoDescr1.classList.toggle('hidden');
            exspoTitle1.classList.toggle('hidden');
            exspoTitle1Input.classList.toggle('hidden');
            exspoDescr1Input.classList.toggle('hidden');
        })
    })

});

