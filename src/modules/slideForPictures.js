const slideForPictures = () => {
    const portfolioMenu = document.querySelectorAll('.portfolio-menu > li'),
        portfolioBlock = document.querySelectorAll('.portfolio-block');


    const  toggleTabContent = (itemPortfolioMenu) => {

        portfolioBlock.forEach( item => {
            if (item.className.replace('portfolio-block all', '').trim() === itemPortfolioMenu.className) {
                item.style.display = 'block';

            } else if (item.className.slice(16, 20) === itemPortfolioMenu.className.replace('active', '')) {
                item.style.display = 'block';

            }  else {
                item.style.display = 'none';
            }
        });
    };

    portfolioMenu.forEach(elem => {
        elem.addEventListener('click', (event) => {
            toggleTabContent(elem);
            portfolioMenu.forEach(item => {item.classList.remove('active')});
            document.querySelector(`[class="${elem.className}"]`).classList.add('active');
        });
    });
};

export default slideForPictures;