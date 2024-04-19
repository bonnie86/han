window.addEventListener('load', function () {
    adjustPortfolioHeight(); // 페이지 로드 시 초기 높이 조정

    // 윈도우 크기 변경 시 높이 조정
    window.addEventListener('resize', function () {
        adjustPortfolioHeight();
    });
});

//Scroll fiexd gnb, lnb, snb
$(document).ready(function() {
    var rollHeader = 100;
    var snb = $('.snb'); // .snb 요소를 변수로 저장

    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        var gnbHeight = $('.header_wrap').height();
        var lnbHeight = $('.lnb_wrap').height();
        var lnbTop = scroll + gnbHeight;

        // 헤더와 LNB 위치 조정
        $('.header_wrap').toggleClass('fixnav', scroll >= rollHeader);
        $('.lnb_wrap').css('top', scroll >= rollHeader ? lnbTop + 'px' : '0px');
    });

    $('ul.snb li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.snb li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');

        var href = $(this).find('a').attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var gnbHeight = $('.header_wrap').outerHeight();
        var lnbHeight = $('.lnb_wrap').outerHeight();
        var position = target.offset().top - gnbHeight - lnbHeight;

        if ($(window).width() <= 960) {
            var snbHeight = snb.outerHeight();
            position -= snbHeight + 40;
        }

        $("html, body").animate({ scrollTop: position }, 550);
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});




// Hambuger Btn & Menu
// 햄버거 버튼 클릭 이벤트 
$(function () {
    var burger = $('.hambuger_btn');
    var menuVisible = false;
    var windowWidth = $(window).width(); // 초기 창 너비 저장

    burger.each(function (index) {
        var $this = $(this);

        $this.on('click', function (e) {
            e.preventDefault();
            $this.toggleClass('active');

            if (!menuVisible) {
                if ($(window).width() <= 768) {
                    $('.hambuger_menu')
                        .addClass('active')
                        .animate({
                            right: '0%'
                        }, 500);
                } else {
                    $('.hambuger_menu')
                        .addClass('active')
                        .animate({
                            right: '0%'
                        }, 500);
                }

                menuVisible = true;
            } else {
                if ($(window).width() <= 1200) {
                    $('.hambuger_menu.active')
                        .animate({
                            right: '-200%'
                        }, 500)
                        .removeClass('active');
                } else {
                    $('.hambuger_menu.active')
                        .animate({
                            right: '-200%'
                        }, 500)
                        .removeClass('active');
                }

                menuVisible = false;
            }
        });
    });

    $(window).resize(function () {
        var newWindowWidth = $(window).width(); // 새로운 창 너비 저장

        if (!menuVisible && newWindowWidth <= 1200) {
            // 모바일 사이즈에서 메뉴가 숨겨진 경우
            $('.hambuger_menu')
                .css({
                    right: '-200%'
                })
                .removeClass('active');

            menuVisible = false;
        } else if (!menuVisible && newWindowWidth > 1200) {
            // 데스크탑 사이즈에서 메뉴가 숨겨진 경우
            $('.hambuger_menu')
                .css({
                    right: '-200%'
                })
                .removeClass('active');

            menuVisible = false;
        }

        windowWidth = newWindowWidth; // 창 너비 업데이트
    });
});


//Top BTN Scroll
//$(function () { // 보이기 | 숨기기
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 150) { //150 넘으면 버튼이 보여짐니다. 
//            $('.top_btn_wrap').fadeIn().addClass("active");
//        } else {
//            $('.top_btn_wrap').fadeOut().removeClass("active");
//        }
//    }); // 버튼 클릭시 
//    $(".top_btn_wrap").click(function () {
//        $('html, body').animate({
//            scrollTop: 0 // 0 까지 animation 이동합니다. 
//        }, 300); // 속도 400 
//        return false;
//    });
//});
//Top BTN Scroll 최적화
$(function () {
    var topBtn = $('.top_btn_wrap'); // Top 버튼 요소를 변수에 저장

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            topBtn.addClass("active").fadeIn(); // 150 넘으면 버튼이 보여짐
        } else {
            topBtn.removeClass("active").fadeOut();
        }
    });

    topBtn.click(function () {
        $('html, body').animate({
            scrollTop: 0 // 0까지 animation 이동
        }, 300); // 속도 300
        return false;
    });
});