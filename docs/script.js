window.onscroll = function () {
    $('.parallax-img').css((
        top: "-" + (window.scrollY / 3) + "px"
    ));
};
