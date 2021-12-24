const validateInputs = () => {

    const formName = document.querySelectorAll('[name=name]'),
        formMessage = document.querySelectorAll('[name=message]'),
        formEmail = document.querySelectorAll('[name=email]');



    const trim = (input) => {
        input.value = input.value.replace(/\s+/g, ' ');
        input.value = input.value.replace(/\-+/g, '-');

        let inputToExp = new RegExp("ReGeX" + input.value + "ReGeX");
        if (/^[/ /-]/.test(inputToExp)) {
            input.value = input.value.replace(/^[/ /-]/, '')
        }
        if (/[/ /-]$/.test(inputToExp)) {
            input.value = input.value.replace(/[/ /-]$/, '')
        }
    };

    const capitalize = (input) => {
        let inputValue = input.value;
        return inputValue.split(' ').map(item =>
            item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
    };

    const controlInputs = (input, exp, message = 'Введите корректные данные') => {
        if (input.value === '') return;
        if (!input.value.match(exp)) {
            alert(message);
            input.value = '';
        }
    };

    //--------------------------------------------------------------------------
    formName.forEach(el => {
        el.addEventListener('blur', () => {
            trim(el);
            el.value = capitalize(el);
            controlInputs(el, /[а-яё]{2,}/gi);
        })
    });


    formMessage.forEach(el => {
        el.addEventListener('blur', () => {
            controlInputs(el, /[а-яё^0-9\.\,\:\-\!\?]/gi);
            //controlInputs(el, /[^а-яё0-9\.\,\:\-\!\?]/gi);
            trim(el);
        })
    });

    formEmail.forEach(el => {
        el.addEventListener('blur', () => {
            controlInputs(el, /\w+@\w+\.\w{2,3}/g);
            trim(el);
        })
    });



};

export default validateInputs;