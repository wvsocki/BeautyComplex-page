document.addEventListener("DOMContentLoaded", function () {
    console.log(window);

    const header = document.querySelector('.page-header');
    window.addEventListener('scroll', function(e) {
        if (this.pageYOffset >= 20) {
            header.classList.add('page-header-shrink');
        } else {
            header.classList.remove('page-header-shrink');
        }
    })
})


