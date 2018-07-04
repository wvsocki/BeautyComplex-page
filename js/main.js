document.addEventListener("DOMContentLoaded", function () {

    var header = document.querySelector('.page-header');
    var registeronline = document.querySelector('.register-online');
    window.addEventListener('scroll', function () {
        if (this.pageYOffset >= 1) {
            header.classList.add('page-header-shrink');
            registeronline.classList.add('register-online-shrink');
        } else {
            header.classList.remove('page-header-shrink');
            registeronline.classList.remove('register-online-shrink');
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
            // body.classList.remove("no-scroll")
        })
    }
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
            // body.classList.add("no-scroll");
            var currentImage = list.indexOf(this);
            // console.log(currentImage);
            displayFullScreen(currentImage);
        });
    }
    document.querySelector('.header-navigation-list a')[0].onclick = function () {
        scrollTo(2500, 1250);
    };

    scrollTo = function(to, duration) {
        var
            element = document.scrollingElement || document.documentElement,
            start = element.scrollTop,
            change = to - start,
            startDate = +new Date(),
            // t = current time
            // b = start value
            // c = change in value
            // d = duration
            easeInOutQuad = function(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            },
            animateScroll = function() {
                var currentDate = +new Date();
                var currentTime = currentDate - startDate;
                element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
                if(currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
                else {
                    element.scrollTop = to;
                }
            };
        animateScroll();
    };

});

function initMap() {
    var styledMapType = new google.maps.StyledMapType([
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffc107"
                },
                {
                    "weight": "2"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "2.00"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "weight": "1"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffc107"
                },
                {
                    "weight": "1"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#303030"
                },
                {
                    "lightness": "0"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ], {name: 'Styled Map'});
    var salon = {lat: 54.467869, lng: 18.484628};
    var map = new google.maps.Map(document.querySelector('.map'), {zoom: 15, center: {lat: 54.467869, lng: 18.494628}, mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'styled_map']} );
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    var marker = new google.maps.Marker({position: salon, map: map, icon: 'http://www.myiconfinder.com/uploads/iconsets/64-64-56165014858e6dbadaf3ba00d782f125.png'});
}


