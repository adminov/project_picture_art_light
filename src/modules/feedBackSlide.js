const feedBackSlide = () => {
    const container = document.querySelector('.feedback .container'),
        feedbackSlider = container.querySelector('.feedback-slider'),
        track = feedbackSlider.querySelector('.track'),
        elements = track.querySelectorAll('.feedback-slider-item');

    const mainPrevBtn = document.querySelector('.main-prev-btn'),
        mainNextBtn = document.querySelector('.main-next-btn');

    feedbackSlider.style.overflow = 'hidden';
    feedbackSlider.style.height = '450px';
    track.style.display = '-webkit-box';


    let position = 0;

    const slidesToShow = 1,
        slidesToScroll = 1;

    const itemsCount = elements.length,
        itemWidth = container.clientWidth / slidesToShow,
        movePosition = slidesToScroll * itemWidth;

    elements.forEach(item => {
        item.style.minWidth = `${itemWidth}px`;
    });

    mainNextBtn.addEventListener('click', () => {
        const  itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
        setPosition();
    });

    mainPrevBtn.addEventListener('click', () => {
        const  itemLeft = Math.abs(position) / itemWidth;
        position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
        setPosition();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };


};

export default feedBackSlide;