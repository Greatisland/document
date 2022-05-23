$(function(){

    let videoHeight = $('.collection').offset().top + 100
    $('.search_btn').on('click', function(){
        $('.control_search').slideDown().css('display','flex')
    })
    $('.search_close_btn').on('click', function(){
        $(this).parent().slideUp()
    })
    // header 검색창 on/off

    $('.top_btn').on('click',function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop : 0
        },600)
    })
    //scrollTop 


    $(window).on('scroll',function(){
        let height = $('.main_visual').height()
        let scr = $(window).scrollTop()

        if(scr + 100 >= height) {
            $('.header').addClass('header_bg')
            $('.top_btn').fadeIn()
        }else{
            $('.header').removeClass('header_bg')
            $('.top_btn').fadeOut()
        }
    // header 스크롤 fixed & 탑버튼

        let height02 = height + $('.header').height()
        let height03 = height02 + $('.collection .col').height()
        let height04 = height03 + $('.collection .col').height()
        
        if (scr + 500 >= height04) {
                $('.col03 .text_side').addClass('text_move')
                setTimeout(function () {
                    $('.col03 .img_middle').addClass('middle_move')
                },300)
                setTimeout(function () {
                    $('.col03 .img_small').addClass('small_move')
                },600)
        } else if (scr + 500 >= height03) {
                $('.col02 .text_side').addClass('text_move')
                setTimeout(function () {
                $('.col02 .img_middle').addClass('middle_move')
                },300)
                setTimeout(function () {
                $('.col02 .img_small').addClass('small_move')
                },600)
        } else if (scr + 500 >= height02) {
                $('.col01 .text_side').addClass('text_move')
                setTimeout(function () {
                $('.col01 .img_middle').addClass('middle_move')
                },300)
                setTimeout(function () {
                $('.col01 .img_small').addClass('small_move')
                },600)
        } else {
            $('.col .img_middle').removeClass('middle_move')
            $('.col .img_small').removeClass('small_move')
            $('.col .text_side').removeClass('text_move')
        }
        // collection 요소 스크롤 값에 따른 애니메이션

        if(scr >= 4100){
            $('.news .news_item01').addClass('news_move')
            setTimeout(function () {
                $('.news .news_item02').addClass('news_move')
            },200)
            setTimeout(function () {
                $('.news .news_item03').addClass('news_move')
            },400)
        } else {
            $('.news .news_item').removeClass('news_move')
        }

    })


    let video = $('.video')
    video.YTPlayer({
        videoURL: 'https://youtu.be/jkFZh_2lk1c', 
        containment: '.main_visual', 
        useOnMobile: true,
        autoPlay: true, 
        mute: true, 
        showControls: false,
        playOnlyIfVisible: false,
        stopMovieOnBlur: false,
        startAt: 0,
        stopAt: 60,
        loop: false,
    })
    //유튜브 동영상 플러그인 ytplayer 구동

    let nowPlaying = false
    //재생 완전종료 상태변수

    video.on('YTPStart',function(){
        if(!nowPlaying){
        $('circle').addClass('circle')
        nowPlaying = true
        }
    })
    //동영상 첫 구동 이벤트

    function play(){
        video.YTPPlay()
        $('.circle_play').css('display','none')
        $('.circle_pause').css('display','block')
    }
    //동영상 재생 시작 함수

    $('.play_btn').on('click',function(){
        let ytState = video.prop('state')
        //동영상 재생 상태변수

        if(ytState == 1 || ytState == 0){
            video.YTPPause()
            $('circle').addClass('circle_stop')
            $('.circle_play').css('display','block')
            $('.circle_pause').css('display','none')
        } else if (ytState == 2 && nowPlaying) {
            $('circle').removeClass('circle_stop')
            play()
        } else if (ytState == 2 && !nowPlaying) {
            $('circle').removeClass('circle')
            void $('circle').outerWidth()
            $('circle').addClass('circle')
            play()
            nowPlaying = true
        }
    })
    //재생or일시정지 버튼 이벤트

    video.on("YTPEnd",function(){
        nowPlaying = false
        $('.circle_play').css('display','block')
        $('.circle_pause').css('display','none')
    })
    //동영상 완전종료

    $('.world_of_seiko a').on('mouseover mouseout',function(){
        $('.world_of_seiko a').not(this).toggleClass('wos_move')
    })
    //world_of_seiko hover 효과




})