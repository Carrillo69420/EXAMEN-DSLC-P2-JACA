document.addEventListener('DOMContentLoaded', function() {
    console.log('La página se ha cargado correctamente');
    
    function getCurrentYear() {
        return new Date().getFullYear();
    }
    
    const catalogFooterYear = document.getElementById('current-year');
    if (catalogFooterYear) {
        catalogFooterYear.textContent = getCurrentYear();
    }
    
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.addEventListener('click', function() {
            this.style.transform = 'scale(1.01)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
