document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector('.page-header');
    window.addEventListener('scroll', function () {
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
    // function initMap() {
    //     var mapOptions = {
    //         center: new google.maps.LatLng(51.5, -0.12),
    //         zoom: 10,
    //         mapTypeId: google.maps.MapTypeId.HYBRID
    //     };
    //     var map = new google.maps.Map(document.querySelector(".map"), mapOptions);
    // }


});

function initMap() {
    var styledMapType = new google.maps.StyledMapType([
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "hue": "#ff0000"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": "100"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "100"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": "100"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "lightness": "23"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eaeaea"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffcd00"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#ffd900"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#cccccc"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
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


