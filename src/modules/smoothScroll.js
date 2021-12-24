const smoothScroll = () => {

    const liClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        if (targetId === '') return;
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop,
            behavior: 'smooth',
        });
    };

    const menuA = document.querySelectorAll('.header-menu a');

        menuA.forEach((elem) => {
            elem.addEventListener('click', liClick);
        });
};

export default smoothScroll;