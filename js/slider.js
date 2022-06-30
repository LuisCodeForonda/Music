(function () {
    const sliders = [...document.querySelectorAll('.slider__body')];
    console.log(sliders)
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before')
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(cambiar) {
        console.log(cambiar)
        const elementoActual = Number(document.querySelector('.slider__body--show').dataset.id);

        value = elementoActual;
        value += cambiar;

        if (value === 0 || value == sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[elementoActual - 1].classList.toggle('slider__body--show');
        sliders[value - 1].classList.toggle('slider__body--show');
    };
})()