const accordion = () => {
    const accordionHeading = document.querySelectorAll('.accordion-heading');
    const accordionBlock = document.querySelectorAll('.accordion-block');

    accordionBlock.forEach(item => item.style.display = 'none');

    const accordionFun = (i) => {
        accordionBlock.forEach((item, index) => {
            if (i === index) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    };

    accordionHeading.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            let target = e.target;
            if (target.closest('.accordion-heading')) {
                accordionFun(i)
            }
        });
    })
};

export default accordion;