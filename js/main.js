document.addEventListener("DOMContentLoaded", function () {
    // console.log(window);

    const header = document.querySelector('.page-header');
    window.addEventListener('scroll', function (e) {
        if (this.pageYOffset >= 20) {
            header.classList.add('page-header-shrink');
        } else {
            header.classList.remove('page-header-shrink');
        }
    });

    var galleryLi = document.querySelectorAll(".gallery li");
    var list = Array.prototype.slice.call(galleryLi);
    var body = document.querySelector("body");


    function displayFullScreen(numberOfImage) {
        var currImg = numberOfImage;
        var fullScreenBox = document.createElement("div");
        fullScreenBox.classList.add("fullScreen");
        fullScreenBox.innerHTML =
            '<button class="gallery-btn gallery-prev"></button>' +
            '<button class="gallery-btn gallery-next"></button>' +
            '<button class="close"></button>';
        body.appendChild(fullScreenBox);

        function updateImage(fullScreenBox, currImg) {
            var src = list[currImg].children[0].src;
            var galleryImage = document.createElement("img");
            galleryImage.classList.add("gallery-img");
            galleryImage.src= src;
            fullScreenBox.appendChild(galleryImage)

        }
        updateImage(fullScreenBox, currImg);

        closeFullScreen();
        var prev = document.querySelector(".gallery-prev");
        prev.addEventListener("click", function () {
            if (currImg===0){
                currImg = 5
            } else {
                currImg = currImg - 1;
            }
            fullScreenBox.removeChild(document.querySelector(".gallery-img"));
            updateImage(fullScreenBox, currImg)

        });
        var next = document.querySelector(".gallery-next");
        next.addEventListener("click", function () {
            if (currImg===5){
                currImg = 1
            } else {
                currImg = currImg + 1;
            }
            fullScreenBox.removeChild(document.querySelector(".gallery-img"));
            updateImage(fullScreenBox, currImg)

        })
    }
    function closeFullScreen() {
        var close = document.querySelector(".close");
        close.addEventListener("click", function () {
            body.removeChild(document.querySelector(".fullScreen"));
            body.classList.remove("no-scroll")
        })
    }
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
            body.classList.add("no-scroll");
            var currentImage = list.indexOf(this);
            console.log(currentImage);
            displayFullScreen(currentImage);
        });
    }
});


