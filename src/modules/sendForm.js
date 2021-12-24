const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скокро с вами свяжемся!',
        errorImg = './images/wait/error.png',
        loadImg = './images/wait/wait.gif',
        successImg = './images/wait/success.png';

    const processingForm = (idForm) => {
        const form = document.getElementById(idForm);
        
        const statusMessage = document.createElement('div');
        const img = document.createElement('img');
        
        
        statusMessage.className = 'successError';
        statusMessage.style.cssText = 'font-size: 2rem; color: #fff';
        img.height = 50;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            if ((body.name === '' || body.phone == '') && (body.email === '' || body.message === '')) {
                alert('Введите корректные данные')
            } else {
                postData(body)
                    .then(() => {
                        console.log('ok')
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        })
    };

    processingForm('form');
    processingForm('form1');
    processingForm('form2');

    const postData = (body) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", () => {
                if (request.readyState !== 4) return;
                if (request.status === 200) {
                    resolve()
                } else {
                    reject(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        });
    }
};

export default sendForm;