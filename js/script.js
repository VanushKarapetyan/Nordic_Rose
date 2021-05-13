$('.variable-width').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,

    slidesToShow:6,
    slidesToScroll: 1,
    speed: 1000,
    Infinity: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus:true,
    pauseOnHover:true,
    pauseOnDotsHover: true,
  });

  document.getElementById("burger_menu").style.display = "none"
$(".burger_menu_icon").click(function () {
    var x = document.getElementById("burger_menu")
    
    if(x.style.display === 'none') {
        x.style.display = 'block'
    }
    else {
        x.style.display = 'none'
    };
});