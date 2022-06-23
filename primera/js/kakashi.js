var productScroll,
    keyScroll,
    keyVisualDisabled = false;

(function ($) {
  var ww = $(window).width();
  var sizeMode = 769 > ww ? 1 : 1024 > ww ? 2 : 1441 > ww ? 3 : 4;
  gsap.registerPlugin(ScrollTrigger);

  var keyVisualInteraction = function () {
    var keyWrap = $(".p-main-keyvisual")[0];
    var keySwiper = new Swiper('.p-main-keyvisual .swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.p-main-keyvisual__pagination',
        type: 'fraction',
        formatFractionCurrent: function (n) {
          return ('0' + n).substr(-2);
        },
        formatFractionTotal: function (n) {
          return ('0' + n).substr(-2);
        }
      },
      // parallax: false,
      effect: 'fade',
      speed: 1200,
      navigation: {
        nextEl: '.p-main-keyvisual__controller .swiper-button-next',
        prevEl: '.p-main-keyvisual__controller .swiper-button-prev'
      },
      init: false,
      breakpoints: {
        769: {
          allowTouchMove: false
        }
      }
    });
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        keyScroll = gsap.timeline({
          scrollTrigger: {
            trigger: keyWrap,
            pin: true,
            pinSpacing: true,
            scrub: true,
            start: "top top",
            end: "200% bottom",
            toggleActions: "play complete none none",
            // markers: true,
            // once: true,
            onUpdate: function (self) {
              // console.log(keyScroll.progress())
              if (keyScroll.progress() > 0.5) {
                keySwiper.init();
                $('.p-main-keyvisual__slider').addClass('p-main-keyvisual__slider--active');
                $('.p-main-keyvisual__emblem').addClass('p-main-keyvisual__emblem--active');
              } else {
                $('.p-main-keyvisual__slider').removeClass('p-main-keyvisual__slider--active');
                $('.p-main-keyvisual__emblem').removeClass('p-main-keyvisual__emblem--active');
              }

              if (!self.isActive) {
                productScroll.scrollTrigger.refresh();
                keyVisualDisabled = true;
              }
            },
            onEnter: function () {
              keySwiper.init();
              keySwiper.update();
            },
            onLeave: function (self) {
              keyScroll.clear();
              self.kill();
              $('html, body').stop().animate({
                scrollTop: 0
              }, 0);
              productScroll.scrollTrigger.refresh();
            },
            onLeaveBack: function () {
              keySwiper.update();
            },
            onRefresh: function () {
              keySwiper.update();
            }
          }
        });
        keyScroll.fromTo('.a-kv__image1', 1, {
          // scale: 0.66, transformOrigin: '24% 34%'
          scale: 0.75,
          transformOrigin: '32% 39%'
        }, {
          scale: 1,
          transformOrigin: '32% 39%'
        }).fromTo('.a-kv__mask--shape', 2, {
          scale: 1,
          transformOrigin: '50% 50%'
        }, {
          scale: 5.5
        }, '-=0.8').fromTo('.a-kv__overlay1', 1, {
          opacity: 0
        }, {
          opacity: 0.2
        }, '-=0.5').addLabel('done');
      },
      "(max-width: 768px)": function () {
        $('.a-kv__image2').css("transform", {
          transform: 'scale(1)',
          transformOrigin: '50% 50%'
        });
        $('.a-kv__mask--shape').css({
          transform: 'scale(9)',
          transformOrigin: 'center'
        });
        keySwiper.init();
      }
    });
    $('.a-main-keyvisual').addClass('init');
  };

  var mainBannerInteraction = function () {
    var bannerSwiper = new Swiper('.p-main-banner__slider .swiper-container', {
      slidesPerView: 1,
      effect: 'fade',
      pagination: {
        el: '.p-main-banner__pagination',
        type: 'fraction',
        formatFractionCurrent: function (n) {
          return ('0' + n).substr(-2);
        },
        formatFractionTotal: function (n) {
          return ('0' + n).substr(-2);
        }
      },
      speed: 1200,
      breakpoints: {
        769: {
          effect: 'fade',
          allowTouchMove: false
        }
      },
      navigation: {
        nextEl: '.p-main-banner__controller .swiper-button-next',
        prevEl: '.p-main-banner__controller .swiper-button-prev'
      }
    });
    var bannerTextSwiper = new Swiper('.p-main-banner__text-slider .swiper-container', {
      spaceBetween: 30,
      speed: 1200,
      effect: 'fade',
      breakpoints: {
        769: {
          allowTouchMove: false
        }
      }
    });
    bannerTextSwiper.controller.control = bannerSwiper;
    bannerSwiper.controller.control = bannerTextSwiper;
  };

  var loivieIsInteraction = function () {
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        var loivieIs = $(".p-main-loivie-is__article-link");
        var loivieIs_article = $(".p-main-loivie-is__article");
        var loivieIs_activeClass = 'p-main-loivie-is__article-link--selected';
        loivieIs.on('focusin mouseenter', function () {
          selectLoivieIs(loivieIs.index(this));
        }).on('mousemove', _.throttle(function (e) {
          loivieIs_article.eq(loivieIs.index(this))[0].style.transform = 'translate(calc(50% + ' + (25 - e.offsetX / e.target.getBoundingClientRect().width * 50) + 'px),calc(-50% + ' + (15 - e.offsetY / e.target.getBoundingClientRect().height * 30) + 'px))';
        }, 16)).on('click', function (e) {
          e.preventDefault();
        });

        selectLoivieIs = function (index) {
          loivieIs.removeClass(loivieIs_activeClass).eq(index).addClass(loivieIs_activeClass);
          loivieIs_article.removeClass('is-active').eq(index).addClass('is-active');
        };

        selectLoivieIs(0);
      },
      "(max-width: 768px)": function () {
        var bestSwiper = new Swiper('.p-main-loivie-is', {
          wrapperClass: 'p-main-loivie-is__articles',
          slideClass: 'p-main-loivie-is__item',
          effect: 'fade',
          slidesPerView: 1,
          speed: 600,
          navigation: {
            nextEl: '.p-main-loivie-is__controller .swiper-button-next',
            prevEl: '.p-main-loivie-is__controller .swiper-button-prev'
          },
          pagination: {
            el: '.p-main-loivie-is__pagination',
            type: 'fraction',
            formatFractionCurrent: function (n) {
              return ('0' + n).substr(-2);
            },
            formatFractionTotal: function (n) {
              return ('0' + n).substr(-2);
            }
          }
        });
      }
    });
  };

  var bestforyouInteraction = function () {
    var bestSwiperBg = $(".p-main-best-for-you-origin .a-main-best-for-you__bg");
    var bestSwiper = new Swiper('.p-main-best-for-you-origin .swiper-container', {
      slidesPerView: 1,
      speed: 1200,
      loop: true,
      loopAdditionalSlides: 2,
      centeredSlides: true,
      breakpoints: {
        769: {
          slidesPerView: 3,
          allowTouchMove: false
        }
      },
      pagination: {
        el: '.p-main-best-for-you-origin .p-main-best-for-you__pagination',
        type: 'fraction',
        formatFractionCurrent: function (n) {
          return ('0' + n).substr(-2);
        },
        formatFractionTotal: function (n) {
          return ('0' + n).substr(-2);
        }
      },
      on: {
        slideChange: function () {
          var _this = this;

          var length = this.slides.length - this.loopedSlides * 2; // console.log(this.realIndex)

          bestSwiperBg.each(function (index) {
            $(this).fadeTo(600, index === _this.realIndex % bestSwiperBg.length);
          });
          $(".p-main-best-for-you-origin .p-main-best-for-you__progress span").css('left', this.realIndex * (100 / length) + '%');
        },
        init: function () {
          var length = this.slides.length - this.loopedSlides * 2;
          $(".p-main-best-for-you-origin .p-main-best-for-you__progress").append('<span style="width:' + 100 / length + '%;left:' + this.realIndex * (100 / length) + '%"/>');
        },
        transitionStart: function () {
          $(".p-main-best-for-you-origin .swiper-wrapper").css({
            willChange: "transform"
          });
        },
        transitionEnd: function () {
          $(".p-main-best-for-you-origin .swiper-wrapper").css({
            willChange: "auto"
          });
        }
      },
      navigation: {
        nextEl: '.p-main-best-for-you-origin .p-main-best-for-you__controller .swiper-button-next',
        prevEl: '.p-main-best-for-you-origin .p-main-best-for-you__controller .swiper-button-prev'
      }
    });
  };

  var outProductInteraction = function () {
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        var productWrap = $(".p-main-our-product__wrap")[0];
        var productList = $(".p-main-our-product__list")[0]; // console.log(productWrap.clientHeight, productList.clientHeight)
        // var motiveShapes = document.getElementById("product-motive").children

        var flapAnimation = gsap.timeline({
          duration: 1.5,
          repeat: -1
        });
        var duration = 1.5;
        flapAnimation.add([waveSVG(document.getElementById("product-motive"), {
          taperStart: 12,
          taperEnd: 20,
          start: 7,
          end: 39,
          length: 90,
          magnitude: 4,
          phase: 200,
          angle: 44,
          invertFlow: true,
          loose: true,
          repeat: -1
        })]);
        /* var scrollPos, lastScrollPos = null, timer = 0;
        $(window).on('scroll', function () {
        	scrollPos = window.scrollY;
        	if (lastScrollPos != null) {
        		var delta = scrollPos - lastScrollPos;
        		if (delta > 100) delta = 100
        		else if (delta < -100) delta = -100
        		delta = Math.max(Math.min(Math.abs(delta) / 3, duration), 0.3)
        		flapAnimation.timeScale(delta * 8)
        	}
        	lastScrollPos = scrollPos;
        	timer && clearTimeout(timer)
        	timer = setTimeout(function () {
        		lastScrollPos = null;
        		flapAnimation.timeScale(1)
        	}, 30)
        }) */

        /* var productMorph = gsap.timeline({repeat: -1, ease: "power2.inOut", repeatDelay: 0})
        productMorph
        	.to('#Path-1', 2, {
        		morphSVG: '#Path-2',
        		attr: {
        			transform: "translate(-468.000000, -328.000000)",
        		}, duration: 5
        	}, "A")
        	.to('#Gradient1', {attr: {style: "stop-color:#9CC4DE"}, duration: 5}, "A")
        	.to('#Gradient2', {attr: {style: "stop-color:#F5B895"}, duration: 5}, "A")
        	.to('#Path-1', 2, {
        		morphSVG: '#Path-3',
        		attr: {
        			transform: "translate(-514.000000, -330.000000)",
        		}, duration: 5
        	}, "B")
        	.to('#Gradient1', {attr: {style: "stop-color:#EBD9B4"}, duration: 5}, "B")
        	.to('#Gradient2', {attr: {style: "stop-color:#DDA2AC"}, duration: 5}, "B")
        	.to('#Path-1', 2, {
        		morphSVG: '#Path-2',
        		attr: {
        			transform: "translate(-468.000000, -328.000000)",
        		}, duration: 5
        	}, "C")
        	.to('#Gradient1', {attr: {style: "stop-color:#9CC4DE"}, duration: 5}, "C")
        	.to('#Gradient2', {attr: {style: "stop-color:#F5B895"}, duration: 5}, "C")
        	.to('#Path-1', 2, {
        		morphSVG: '#Path-1',
        		attr: {
        			transform: "translate(-395.000000, -329.000000)",
        		}, duration: 5
        	}, "D")
        	.to('#Gradient1', {attr: {style: "stop-color:#D9E1E2"}, duration: 5}, "D")
        	.to('#Gradient2', {attr: {style: "stop-color:#E8B3C3"}, duration: 5}, "D")
        		 */

        $(".p-main-our-product__list li").each(function () {
          WS.add({
            target: $(this),
            screenAnchor: 0.7,
            enterFromTop: function () {
              this.target.addClass("is-show");
            },
            outToTop: function () {
              this.target.removeClass("is-show");
            }
          });
        });
        productScroll = gsap.timeline({
          scrollTrigger: {
            trigger: '.p-main-our-product__wrap',
            start: "top top",
            endTrigger: '.p-main-our-product__list',
            end: "bottom bottom",
            pin: true,
            pinSpacing: false
          }
        });
      },
      "(max-width: 768px)": function () {
        var $list = $(".p-main-our-product__list");
        $list.wrap('<div class="p-main-our-product__container"></div>');
        $(".p-main-our-product__container").append(function () {
          var element = $('<div class="p-main-our-product__cloned"></div>');
          Array.from($list.children()).forEach(function (item) {
            $("<div></div>").appendTo(element);
            $(item).css({
              height: '120rem'
            });
          });
          return element;
        });
        ScrollTrigger.create({
          trigger: $list,
          start: 'top bottom-=200rem',
          end: 'bottom bottom',
          scrub: false,
          onEnter: function (self) {
            $list.children().eq(0).css({
              height: 360 + 'rem'
            }).addClass('active');
          },
          onLeaveBack: function () {
            $list.children().eq(0).css({
              height: 120 + 'rem'
            }).removeClass('active');
          }
        });
        $(document).on('click', 'li[class^="p-main-our-product--"]:not(.active) .p-main-our-product__link', function (e) {
          e.preventDefault();
          $('li[class^="p-main-our-product"]').not($(this).parents('li[class^="p-main-our-product"]')).css({
            height: '120rem'
          }).removeClass('active');
          $(this).parents('li[class^="p-main-our-product"]').css({
            height: '360rem'
          }).addClass('active');
          var $this = $(this);
          setTimeout(function () {
            $this.off();
          }, 500);
        }); // ScrollTrigger.create({
        // 	trigger: $(".p-main-our-product__cloned div:nth-last-of-type(2)"),
        // 	start: 'top bottom',
        // 	endTrigger: $('.p-main-our-product').next(),
        // 	end: 'top bottom-=40%',
        // 	scrub: false,
        // 	onEnter: function() {
        // 		console.log('enter contents')
        // 			$('.p-main-our-product').next().css({
        // 				willChange: 'transform'
        // 		});
        // 	},
        // 	onEnterBack: function() {
        // 		console.log('enterback')
        // 		var heightCalc = $('.p-main-our-product__cloned').outerHeight() - $('.p-main-our-product__list').outerHeight();
        // 		$('.p-main-our-product').next().css({
        // 			transform: 'translate(0, ' + - heightCalc + 'rem)',
        // 			transition: 'none'
        // 		});
        // 	},
        // 	onUpdate: function() {
        // 		var heightCalc = $('.p-main-our-product__cloned').outerHeight() - $('.p-main-our-product__list').outerHeight();
        // 		$('.p-main-our-product').next().css({
        // 			transform: 'translate(0, ' + - heightCalc + 'rem)',
        // 			transition: 'none'
        // 		})
        // 	},
        // 	onLeave: function() {
        // 		$('.p-main-our-product').next().css({
        // 			transform: 'translate(0, 0)',
        // 			transition: 'transform 0.5s ease'
        // 		});
        // 	}
        // });
      } // "(max-width: 768px)": function () {
      // 	var $list = $(".p-main-our-product__list")
      // 	var $header = $('.l-header-wrap');
      // 	var headerBottomPosY = $header.get(0).getBoundingClientRect().bottom;
      // 	var winH = $(window).height();
      // 	var viewportHeight = winH - headerBottomPosY;
      // 	var px60 = viewportHeight / 100 * 60;
      // 	var px20 = viewportHeight / 100 * 20;
      //
      // 	$(window).on('scroll', _.debounce(function(){
      // 		headerBottomPosY = $header.get(0).getBoundingClientRect().bottom;
      // 		viewportHeight = winH - headerBottomPosY;
      // 		px60 = viewportHeight / 100 * 60;
      // 		px20 = viewportHeight / 100 * 20;
      // 	}, 300))
      //
      // 	$list.wrap('<div class="p-main-our-product__container"></div>')
      // 	$(".p-main-our-product__container").append(function () {
      // 		var element = $('<div class="p-main-our-product__cloned"></div>')
      // 		Array.from($list.children()).forEach(function (item, index) {
      // 			// $("<div></div>").css({height: item.clientHeight + 'px'}).appendTo(element)
      // 			$("<div></div>").css({height: item.clientHeight + 'px'}).appendTo(element)
      // 			$(item).height( index === 0 ? px60 : px20);
      // 		})
      // 		return element
      // 	})
      // 	var clonedDivs = $(".p-main-our-product__cloned div");
      // 	clonedDivs.each(function (index, category) {
      // 		var $el = $list.children().eq(index)
      // 		ScrollTrigger.create({
      // 			// trigger: category,
      // 			// start: 'top 85%',
      // 			// end: 'bottom +=478rem',
      // 			// // markers: true,
      // 			// scrub: 1,
      // 			// onUpdate: function(self) {
      // 			// 	gsap.to($el, {height: Math.max(120, 360 * self.progress) + 'rem'})
      // 			// }
      //
      // 			trigger: category,
      // 			start: 'top 80%',
      // 			// endTrigger: clonedDivs[index+1],
      // 			end: 'bottom 80%',
      // 			// markers: true,
      // 			scrub: 1,
      // 			onUpdate: function(self) {
      // 				gsap.to($el, {height: Math.max(px20, px60 * self.progress) + 'px'})
      // 			}
      // 		});
      // 	})
      // }

    });
  };

  var loiviePickInteraction = function () {
    var loiviePickSwiperBg = $(".p-main-loivie-pick .a-main-best-for-you__bg");
    var loiviePickSwiper = new Swiper('.p-main-loivie-pick .swiper-container', {
      slidesPerView: 1,
      speed: 1200,
      loop: true,
      loopAdditionalSlides: 2,
      centeredSlides: true,
      breakpoints: {
        769: {
          slidesPerView: 3,
          allowTouchMove: false
        }
      },
      pagination: {
        el: '.p-main-loivie-pick .p-main-best-for-you__pagination',
        type: 'fraction',
        formatFractionCurrent: function (n) {
          return ('0' + n).substr(-2);
        },
        formatFractionTotal: function (n) {
          return ('0' + n).substr(-2);
        }
      },
      on: {
        slideChange: function () {
          var _this = this;

          var length = this.slides.length - this.loopedSlides * 2;
          loiviePickSwiperBg.each(function (index) {
            $(this).fadeTo(600, index === _this.realIndex % loiviePickSwiperBg.length);
          });
          $(".p-main-loivie-pick .p-main-best-for-you__progress span").css('left', this.realIndex * (100 / length) + '%');
        },
        init: function () {
          var length = this.slides.length - this.loopedSlides * 2;
          $(".p-main-loivie-pick .p-main-best-for-you__progress").append('<span style="width:' + 100 / length + '%;left:' + this.realIndex * (100 / length) + '%"/>');
        },
        transitionStart: function () {
          $(".p-main-loivie-pick .swiper-wrapper").css({
            willChange: "transform"
          });
        },
        transitionEnd: function () {
          $(".p-main-loivie-pick .swiper-wrapper").css({
            willChange: "auto"
          });
        }
      },
      navigation: {
        nextEl: '.p-main-loivie-pick .p-main-best-for-you__controller .swiper-button-next',
        prevEl: '.p-main-loivie-pick .p-main-best-for-you__controller .swiper-button-prev'
      }
    });
  };

  var dontMissInteraction = function () {
    $(".c-nitm").each(function () {
      WS.add({
        target: $(this),
        screenAnchor: 0.7,
        enterFromTop: function () {
          this.target.addClass("c-nitm--show");
        }
      });
    });
  };

  var subBannerInteraction = function () {
    var everyBannerSwiper = new Swiper('.p-main-every-banner__slider .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 8,
      speed: 1200,
      breakpoints: {
        769: {
          allowTouchMove: false,
          spaceBetween: 0
        }
      },
      watchSlidesProgress: true,
      pagination: {
        el: '.p-main-every-banner__pagination',
        type: 'fraction',
        formatFractionCurrent: function (n) {
          return ('0' + n).substr(-2);
        },
        formatFractionTotal: function (n) {
          return ('0' + n).substr(-2);
        }
      },
      navigation: {
        nextEl: '.p-main-every-banner__controller .swiper-button-next',
        prevEl: '.p-main-every-banner__controller .swiper-button-prev'
      },
      on: {
        progress: function () {
          if ($(window).width() > 768) {
            var swiper = this;

            for (var i = 0; i < swiper.slides.length; i++) {
              var progress = swiper.slides[i].progress; // console.log(progress)

              swiper.slides[i].querySelector("img").style.transform = 'scale(' + (1 - Math.abs(progress * 0.15)) + ')';
            }
          }
        },
        setTransition: function (speed) {
          if ($(window).width() > 768) {
            var swiper = this;

            for (var i = 0; i < swiper.slides.length; i++) {// swiper.slides[i].style.transition = speed + "ms";
              // swiper.slides[i].querySelector("img").style.transition = speed + "ms";
            }
          }
        }
      }
    });
    var everyBannerTextSwiper = new Swiper('.p-main-every-banner__text-slider .swiper-container', {
      effect: 'fade',
      speed: 1200,
      breakpoints: {
        769: {
          allowTouchMove: false
        }
      }
    });
    everyBannerTextSwiper.controller.control = everyBannerSwiper;
    everyBannerSwiper.controller.control = everyBannerTextSwiper;
  };

  var videoInteraction = function () {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;

    window.onYouTubeIframeAPIReady = function () {
      player = new YT.Player('main_video', {
        width: '100%',
        height: '100%',
        videoId: $('#main_video').data('video'),
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        },
        playerVars: {
          rel: 0
        }
      });
    };

    function onPlayerReady(event) {
      window.videoPlay = function () {
        event.target.playVideo();
        $(".p-main-video__cover").fadeOut();
      };
    }

    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PAUSED) {
        $(".p-main-video__cover").fadeIn();
      } else if (event.data == YT.PlayerState.ENDED) {
        $(".p-main-video__cover").css('display', 'block');
      }
    }
  };

  var instagramInteraction = function () {
    var instagramWrap = $(".p-main-instagram__hash-wrap");
    var hashList = $("ul", instagramWrap);
    var clonedList = hashList.clone();
    var infinite = gsap.timeline({
      repeat: -1,
      paused: false
    });
    clonedList.addClass("cloned").appendTo(instagramWrap);
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        instagramWrap.on("mouseenter", function () {
          infinite.pause();
        }).on("mouseleave", function () {
          infinite.play();
        });
      },
      "(max-width: 768px)": function () {
        var dist = 0,
            startX = 0;
        instagramWrap.on('touchstart', function (e) {
          startX = e.changedTouches[0].pageX;
          progress = infinite.progress();
        }).on('touchend', function () {}).on('touchmove', function (e) {
          dist = e.changedTouches[0].pageX - startX;
          var value = progress - dist / listWidth * 1.2;
          value = value > 100 ? value - 100 : value < 0 ? 100 + value : value;
          infinite.progress(value);
        });
      }
    });
    var listWidth = 0;

    var initMarquee = function () {
      // console.log('init')
      listWidth = hashList.outerWidth(true);
      hashList.add(clonedList).css({// "width": listWidth + "px"
      });
      infinite.clear();
      infinite.to(instagramWrap, listWidth / (lastDevice == 'PC' ? 60 : 30), {
        x: -listWidth,
        ease: Linear.easeNonef
      }, 0);
      infinite.play();
    };

    var oldWidth = $(window).width();
    $(window).on('load', _.debounce(initMarquee, 500)).on('resize', _.debounce(function () {
      var newWidth = $(window).width();

      if (oldWidth !== newWidth) {
        initMarquee();
        oldWidth = newWidth;
      }
    }, 500));
    var instagramSwiper = new Swiper('.p-main-instagram .swiper-container', {
      centeredSlides: true,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 8,
      breakpoints: {
        769: {
          slidesPerView: 5,
          spaceBetween: 32
        }
      }
    });
  };

  function waveSVG(e, vars) {
    var _placeDot = function (x, y, vars) {
      var _createSVG = function (type, attributes) {
        var element = document.createElementNS("http://www.w3.org/2000/svg", type),
            reg = /([a-z])([A-Z])/g,
            p;

        for (p in attributes) {
          element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
        }

        return element;
      },
          dot = _createSVG("circle", {
        cx: x,
        cy: y,
        r: vars.size || 6,
        fill: vars.color || "red"
      }),
          container = vars.container || document.querySelector("svg");

      if (container) {
        container.appendChild(dot);
      }

      return dot;
    },
        _transformBezier = function (b, matrix) {
      var i, x, y;

      if (matrix && (matrix.a !== 1 || matrix.b || matrix.c || matrix.d !== 1 || matrix.e || matrix.f)) {
        for (var i = 0; i < b.length; i += 2) {
          x = b[i];
          y = b[i + 1];
          b[i] = x * matrix.a + y * matrix.c + matrix.e;
          b[i + 1] = x * matrix.b + y * matrix.d + matrix.f;
        }
      }

      return b;
    },
        _getLength = function (x, y, x2, y2) {
      x = x2 - x;
      y = y2 - y;
      return Math.sqrt(x * x + y * y);
    },
        _getTotalLength = function (bezier, start, end) {
      var x = bezier[start],
          y = bezier[start + 1],
          length = 0,
          i;

      for (i = start; i < end; i += 2) {
        length += _getLength(x, y, x = bezier[i], bezier[i + 1]);
      }

      return length;
    },
        _DEG2RAD = Math.PI / 180,
        _RAD2DEG = 180 / Math.PI,
        _round = function (value) {
      return Math.round(value * 1000) / 1000;
    },
        bezier = _transformBezier(MorphSVGPlugin.stringToRawPath(e.getAttribute("d"))[0], debug && e.transform.baseVal.length ? e.transform.baseVal.consolidate().matrix : null),
        start = (vars.start || 0) * 2,
        end = vars.end === 0 ? 0 : vars.end * 2 || bezier.length - 1,
        length = vars.length || 100,
        magnitude = vars.magnitude || 50,
        proxy = {
      a: 0
    },
        debug = !!vars.debug,
        phase = (vars.phase || 0) * _DEG2RAD,
        taperStart = vars.taperStart || 0,
        taperEnd = vars.taperEnd || 0,
        startX = bezier[start],
        startY = bezier[start + 1],
        changes = [],
        bezierLength = 0,
        loose = !!vars.loose,
        //if true, we'll just make the points influence the current positions instead of forcing them strictly onto the wave.
    tl = gsap.timeline({
      repeat: vars.repeat
    }),
        bezierTotalLength,
        angle,
        i,
        x,
        y,
        dx,
        dy,
        sin,
        cos,
        sin2,
        cos2,
        m,
        pathStart,
        t,
        negCos,
        negSin,
        rotatedStartX;

    i = bezier.length;

    while (i--) {
      bezier[i] = _round(bezier[i]);
    }

    if (end >= bezier.length - 1) {
      end = bezier.length - 2;
    }

    if (start >= bezier.length) {
      start = bezier.length - 1;
    }

    bezierTotalLength = _getTotalLength(bezier, start, end);
    dx = bezier[end] - startX;
    dy = bezier[end + 1] - startY;

    if (vars.angle || vars.angle === 0) {
      angle = vars.angle * _DEG2RAD;
    } else {
      angle = Math.atan2(dy, dx) - Math.PI / 2;
    }

    sin = Math.sin(angle);
    cos = Math.cos(angle);
    sin2 = Math.sin(angle + Math.PI / 2);
    cos2 = Math.cos(angle + Math.PI / 2);
    negCos = Math.cos(-angle);
    negSin = Math.sin(-angle);
    rotatedStartX = startX * negCos + startY * negSin;

    if (debug) {
      //note: if debug is true, we drop a red dot at the beginning, yellow at the end, blue dots as control points, and purple as anchors.
      _placeDot(bezier[start], bezier[start + 1], {
        container: e.parentNode,
        color: "red"
      });

      _placeDot(bezier[end], bezier[end + 1], {
        container: e.parentNode,
        color: "yellow"
      });

      console.log("waveSVG() angle: ", angle * _RAD2DEG, "degrees. RED dot is start, YELLOW is end.");
    }

    x = startX;
    y = startY;

    for (i = start; i <= end; i += 2) {
      bezierLength += _getLength(x, y, x = bezier[i], y = bezier[i + 1]);
      dx = x * negCos + y * negSin; //rotated in the opposite direction

      dy = x * negSin + y * negCos;
      t = taperStart && bezierLength < taperStart ? bezierLength / taperStart : taperEnd && bezierLength > bezierTotalLength - taperEnd && bezierLength < bezierTotalLength ? (bezierTotalLength - bezierLength) / taperEnd : 1; //taper

      m = Math.sin(dx / length * Math.PI * 2 + phase) * magnitude;
      changes.push({
        i: i - (start ? 2 : 0),
        p: dx,
        a: dx / length * Math.PI * 2 + phase,
        t: t,
        x: loose ? x - m * sin * t : startX + (dx - rotatedStartX) * cos2 * t,
        y: loose ? y - m * cos * t : startY + (dx - rotatedStartX) * sin2 * t,
        smooth: i % 6 === 0 && i > start && i < end ? Math.abs(Math.atan2(y - bezier[i - 1], x - bezier[i - 2]) - Math.atan2(bezier[i + 3] - y, bezier[i + 2] - x)) < 0.01 : false
      });

      if (debug) {
        changes[changes.length - 1].dot = _placeDot(x, y, {
          container: e.parenNode,
          size: 3,
          color: i % 6 ? "blue" : "purple"
        });
      }
    } //when we're not animating the first point, optimize things by taking out the first x/y and treat them independently so we can merely bezier.join(",") on each update.


    if (start) {
      pathStart = "M" + bezier.shift() + "," + bezier.shift() + " C";
    }

    tl.to(proxy, {
      duration: vars.duration || 3,
      a: Math.PI * (vars.invertFlow ? -2 : 2),
      ease: vars.ease || "none",
      onUpdate: function () {
        var l = changes.length,
            angle = proxy.a,
            node,
            i,
            m,
            x,
            y,
            x2,
            y2,
            x1,
            y1,
            cp,
            dx,
            dy,
            d,
            a,
            cpCos,
            cpSin;

        for (i = 0; i < l; i++) {
          node = changes[i];

          if (node.smooth || i === l - 1 || !changes[i + 1].smooth) {
            m = Math.sin(node.a + angle) * magnitude * node.t;
            bezier[node.i] = x = _round(node.x + m * sin);
            bezier[node.i + 1] = y = _round(node.y + m * cos);

            if (node.smooth) {
              //make sure smooth anchors stay smooth!
              cp = changes[i - 1];
              m = Math.sin(cp.a + angle) * magnitude * cp.t;
              x1 = cp.x + m * sin;
              y1 = cp.y + m * cos;
              cp = changes[i + 1];
              m = Math.sin(cp.a + angle) * magnitude * cp.t;
              x2 = cp.x + m * sin;
              y2 = cp.y + m * cos;
              a = Math.atan2(y2 - y1, x2 - x1);
              cpCos = Math.cos(a);
              cpSin = Math.sin(a);
              dx = x2 - x;
              dy = y2 - y;
              d = Math.sqrt(dx * dx + dy * dy);
              bezier[cp.i] = _round(x + cpCos * d);
              bezier[cp.i + 1] = _round(y + cpSin * d);
              cp = changes[i - 1];
              dx = x1 - x;
              dy = y1 - y;
              d = Math.sqrt(dx * dx + dy * dy);
              bezier[cp.i] = _round(x - cpCos * d);
              bezier[cp.i + 1] = _round(y - cpSin * d);
              i++;
            }
          }
        }

        if (debug) {
          for (i = 0; i < l; i++) {
            node = changes[i];
            node.dot.setAttribute("cx", bezier[node.i]);
            node.dot.setAttribute("cy", bezier[node.i + 1]);
          }
        } else if (start) {
          e.setAttribute("d", pathStart + bezier.join(","));
        } else {
          e.setAttribute("d", "M" + bezier[0] + "," + bezier[1] + " C" + bezier.slice(2).join(","));
        }
      }
    });
    return tl;
  }

  Ellipsis({
    ellipsis: '...',
    debounce: 0,
    responsive: true,
    className: '.c-nitm__ellipsis',
    lines: 2
  });

  function splitWord() {
    var $splitWrap = $('.p-main-our-product__link strong');
    $splitWrap.each(function (idx) {
      var splitWrapIdx = $splitWrap.eq(idx);
      var textArr = splitWrapIdx.text().split(' ');

      for (i = 0; i < textArr.length; i++) {
        if (textArr[i] === textArr[1]) {
          textArr[i] = '<br>' + '<em>' + textArr[i] + '</em>';
        } else {
          textArr[i] = '<em>' + textArr[i] + '</em>';
        }
      }

      splitWrapIdx.html(textArr.join(' '));
    });
  }

  keyVisualInteraction();
  $(".p-main-loivie-is").length && loivieIsInteraction();
  $(".p-main-best-for-you").length && bestforyouInteraction();
  $(".p-main-banner").length && mainBannerInteraction();
  $(".p-main-our-product").length && outProductInteraction();
  $(".p-main-loivie-pick").length && loiviePickInteraction();
  $(".p-main-dont-miss").length && dontMissInteraction();
  $(".p-main-every-banner").length && subBannerInteraction();
  videoInteraction();
  instagramInteraction();
  splitWord();
})(window.jQuery);