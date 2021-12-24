const calc = () => {
    const form = document.querySelector('.form'),
        size = document.getElementById('size'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        promoCode = document.querySelector('.promocode'),
        calcPrice = form.querySelector('.calc-price');

    let total = 0,
        count = 0,
        numberPromoCode = 30,
        saleNumber,
        timeout;

    const countSum = () => {
        const sizeVal = parseInt(size.value),
            materialVal = parseInt(material.value),
            optionsVal = parseInt(options.value),
            promoCodeVal = promoCode.value;

        if (sizeVal.value !== '' && materialVal.value !== '') {
            count = sizeVal + materialVal;
        }
        if (optionsVal.value !== '') {
            count += optionsVal;
        }
        if (promoCodeVal === 'IWANTPOPART') {
            saleNumber = (count * numberPromoCode) / 100;
            count -= saleNumber;
        }
        total = count;
    };

    const animateTotal = () => {
        const target = total;
        const count = +calcPrice.textContent;
        const speed = 200;
        let tmp = 0;

        const inc = target / speed;

        if (count < target) {
            calcPrice.textContent = count + inc;
            timeout = setTimeout(animateTotal, 5);
        } else {
            calcPrice.textContent = `${target} ₽`;
            clearTimeout(timeout);
        }

    };

    form.addEventListener('change', (event) => {
        let target = event.target;
        if (target.matches('select') || target.matches('input')) {
            countSum();
            animateTotal();
        }
    });
};

export default calc;