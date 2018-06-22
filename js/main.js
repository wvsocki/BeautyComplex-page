document.addEventListener("DOMContentLoaded", function () {
    // console.log(window);

    const header = document.querySelector('.page-header');
    window.addEventListener('scroll', function(e) {
        if (this.pageYOffset >= 20) {
            header.classList.add('page-header-shrink');
        } else {
            header.classList.remove('page-header-shrink');
        }
    });

    var list = document.querySelectorAll(".gallery li");
    console.log(list);
    var body = document.querySelector("body");

    for (var i = 0; i < list.length; i++) {
        function showFullscreen(i) {
            list[i].addEventListener("click", function () {

                var src = (this.children[0].src);
                var element = document.createElement("div");

                element.classList.add("fullScreen");

                element.innerHTML =
                    '<button class="gallery-btn gallery-prev"></button>' +
                    '<button class="gallery-btn gallery-next"></button>' +
                    '<button class="close"></button>' +
                    '<img src="' + src + '">';

                body.appendChild(element);

                var close = element.querySelector(".close");
                close.addEventListener("click", function () {
                    body.removeChild(element);

                });
            });

        }
        showFullscreen(i);

        // var previous = document.querySelector(".gallery-prev");
        // previous.addEventListener("click", function () {
        //     console.log("xd");
        //     // document.querySelector(".fullscreen").removeChild("img");
        //     // element.appendChild("img")
        //     showFullscreen(i++)
        //
        //
        // })
    }
    // var previous = document.querySelector(".gallery-prev");
    // var fullscreen = document.querySelector(".fullscreen");
    // previous.addEventListener("click", function () {
    //     fullscreen.removeChild("img")
    //
    //
    // })

});


