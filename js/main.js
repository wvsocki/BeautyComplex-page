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
            function createFullscreen(i) {
                var element = document.createElement("div");

                element.classList.add("fullScreen");

                function addContent(listElement) {
                    var src = (listElement.children[0].src);
                    element.innerHTML =
                        '<button class="gallery-btn gallery-prev"></button>' +
                        '<button class="gallery-btn gallery-next"></button>' +
                        '<button class="close"></button>' +
                        '<img class="gallery-img" src="' + src + '">';
                }

                body.appendChild(element);
                addContent(list[i]);
                closeFullscreen(element)
            }
            function closeFullscreen(element) {
                var close = document.querySelector(".close");
                close.addEventListener("click", function () {
                    body.removeChild(element);

                });

            }


            list[i].addEventListener("click", function () {
                createFullscreen(i);



                var previous = document.querySelector(".gallery-prev");
                var j = 0;
                previous.addEventListener("click", function () {
                    j--;
                    // addContent(list[i - j]);
                    createFullscreen(i--);
                    console.log(j);
                });


                // var close = document.querySelector(".close");
                // close.addEventListener("click", function () {
                //     body.removeChild(element);
                //
                // });
            });

        }
        showFullscreen(i);

    }
    //
    // for (var i = 0; i < list.length; i++) {
    //         function showFullscreen(i) {
    //             list[i].addEventListener("click", function () {
    //
    //                 var src = (this.children[0].src);
    //                 var element = document.createElement("div");
    //
    //                 element.classList.add("fullScreen");
    //
    //                 element.innerHTML =
    //                     '<button class="gallery-btn gallery-prev"></button>' +
    //                     '<button class="gallery-btn gallery-next"></button>' +
    //                     '<button class="close"></button>' +
    //                     '<img class="gallery-img" src="' + src + '">';
    //
    //                 body.appendChild(element);
    //
    //                 var close = document.querySelector(".close");
    //                 close.addEventListener("click", function () {
    //                     body.removeChild(element);
    //
    //                 });
    //
    //             });
    //
    //         }
    //         showFullscreen(i);
    //
    //     }
    // var previous = document.querySelector(".gallery-prev");
    // var fullScreen = document.querySelector(".fullScreen");
    // var img = document.querySelector(".gallery-img");
    // var j = 0;
    // previous.addEventListener("click", function () {
    //     j--;
    //     console.log(j);
    //     fullScreen.removeChild(img);
    //     fullScreen.innerHTML = '<button class="gallery-btn gallery-prev"></button>' +
    //         '<button class="gallery-btn gallery-next"></button>' +
    //         '<button class="close"></button>' +
    //         '<img class="gallery-img" src="' + list[i+j].children[0].src + '">';
    //
    //
    // });




});


