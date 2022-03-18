$(function(){
///////////////////////////////////

// topBanner : 2022.03.17 

function topBannerHandler() {
    //$('.topBanner').hide(); //display:none;
    $('.topBanner').slideUp();
}
$('.topBanner .container i').on('click', topBannerHandler)

$('.visualSlide').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
});


//afterChange를 활용한 슬라이더 컨트롤
$('.visualSlide figure').eq(1).addClass('yes');
$('.visualSlide').on('afterChange', function(e,s,c){
    $('.visualSlide figure').eq(c+1).addClass('yes').siblings().removeClass('yes');
})

$('.epSlide').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
});

$('.eventProduct i:nth-last-of-type(1)').on('click', function(){
    $('.epSlide').slick('slickPause')
});

$('.eventProduct i:nth-last-of-type(2)').on('click', function(){
    $('.epSlide').slick('slickPlay')
});

$('.aproductSlide').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    slidesToShow: 5,
    centermode: true,
});

$('.allProduct i:first-child').on('click', function(){
    $('.aproductSlide').slick('slickPrev')
});

$('.allProduct i:last-child').on('click', function(){
    $('.aproductSlide').slick('slickNext')
});

// 슬라이드 중간에 효과주기
$('.aproductSlide figure').eq(7).addClass('oyes')
$('.aproductSlide').on('afterChange', function(e,s,c){
    console.log(c);
    var r = $('.allProduct .aproductSlide figure').index();
    $('.aproductSlide figure').eq(r+c+7).addClass('oyes').siblings().removeClass('oyes');
})

///////////////////////////////////
})

