const popup = () => {
    const popupDesign = document.querySelector('.popup-design');
    const popupConsultation = document.querySelector('.popup-consultation');
    const popupGift = document.querySelector('.popup-gift');

    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.button-design')) {
            popupDesign.style.display = 'block';
        } else if (target.closest('.infinite')) {
            popupGift.style.display = 'block';
        } else if (target.closest('.button-consultation')) {
            popupConsultation.style.display = 'block';
        } else if (target.closest('.popup-close') || !target.closest('.popup-content')) {
            popupDesign.style.display = 'none';
            popupConsultation.style.display = 'none';
            popupGift.style.display = 'none';
        }
    });
};

export default popup;