$(function(){
///////////////////////////////////

// topBanner : 2022.03.17 

function topBannerHandler() {
    //$('.topBanner').hide(); //display:none;
    $('.topBanner').slideUp();
}
$('.topBanner .container i').on('click', topBannerHandler)

$('.visualSlide').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
});




///////////////////////////////////
})

