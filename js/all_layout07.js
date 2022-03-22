$(function () {
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
        autoplaySpeed: 4000,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
    });


    //afterChange를 활용한 슬라이더 컨트롤
    $('.visualSlide figure').eq(1).addClass('yes');
    $('.visualSlide').on('afterChange', function (e, s, c) {
        $('.visualSlide figure').eq(c + 1).addClass('yes').siblings().removeClass('yes');
    })

    $('.epSlide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.eventProduct i:nth-last-of-type(1)').on('click', function () {
        $('.epSlide').slick('slickPause')
    });

    $('.eventProduct i:nth-last-of-type(2)').on('click', function () {
        $('.epSlide').slick('slickPlay')
    });

    $('.aproductSlide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
    });

    $('.allProduct i:first-child').on('click', function () {
        $('.aproductSlide').slick('slickPrev')
    });

    $('.allProduct i:last-child').on('click', function () {
        $('.aproductSlide').slick('slickNext')
    });

    // 슬라이드 중간에 효과주기
    $('.aproductSlide figure').eq(6).addClass('oyes')
    $('.aproductSlide').on('afterChange', function (e, s, c) {
        var r = $('.allProduct .aproductSlide figure').index();
        $('.aproductSlide figure').eq(r + c + 6).addClass('oyes').siblings().removeClass('oyes');
    });

    $(this).on



    // 유튜브 플레이어

    $("#bgndVideo").YTPlayer({
        videoURL: 'https://youtu.be/nhtBaeF8kE8', 
        containment: '.movieBg', 
        autoPlay: true, 
        mute: true, 
        startAt: 0, 
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.movieBg i:nth-child(1)').on('click', function(){

        $('#bgndVideo').YTPPlay();
    });

    $('.movieBg i:nth-child(2)').on('click', function(){

        $('#bgndVideo').YTPPause();
    });


    //탭메뉴 만들기

    $('.tabMenu li').on('click', function(){
       // var const let

        var idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabContent>div').eq(idx).addClass('active').siblings().removeClass('active');
    });

    //link

    $('#link').on('change', function(){
        let link = $(this).val();
        if (!link) return;
        window.open(link)
    });

    //popup

    $('.popup01 button').on('click', function(){
        $(this).parent().hide();
    })

    ///////////////////////////////////
})

