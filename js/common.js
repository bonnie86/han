$(function() {
    var $burger = $('.hambuger_btn');
    var $hamburgerMenu = $('.hambuger_menu');
    var $wrap = $('#wrap');
    var $topBtn = $('.top_btn_wrap');
    var $headerWrap = $('.header_wrap');
    var $mainContainer = $('.main'); // 메인 비주얼 선택자
    var menuVisible = false;
    var rollHeader = 100;

    // 페이지 로드 시 초기 높이 조정
    adjustPortfolioHeight();
    adjustMainVisualPadding();

    $burger.on('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });

    $(window).on('resize', function() {
        if ($(window).width() > 1200 && menuVisible) {
            closeMenu();
        }
        adjustPortfolioHeight(); // 높이 조정
        adjustMainVisualPadding(); // 메인 비주얼 여백 조정
    });

    $(window).on('scroll', function() {
        var scroll = getCurrentScroll();
        var headerHeight = $headerWrap.height();

        // 헤더 고정 클래스 토글
        $headerWrap.toggleClass('fixnav', scroll >= rollHeader);
        adjustMainVisualPadding();

        // Top Button 표시 및 hover 상태 관리
        if (scroll > 150) {
            $topBtn.addClass("active").fadeIn();
        } else {
            $topBtn.removeClass("active").fadeOut();
        }

        // 스크롤 중일 때 hover 해제
        if (scroll > 0) {
            $topBtn.parent('.top_btn_wrap').removeClass('hover');
        } else {
            $topBtn.parent('.top_btn_wrap').addClass('active'); // 최상단일 때 active 유지
        }
    });

    $topBtn.on('click', function() {
        $(this).removeClass('active'); // active 클래스 제거
        $topBtn.parent('.top_btn_wrap').removeClass('active hover'); // active와 hover 클래스 제거

        // 부드럽게 스크롤 0으로 애니메이션
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

    // 마우스 오버 이벤트 추가
    $topBtn.on('mouseenter', function() {
        $topBtn.parent('.top_btn_wrap').addClass('hover'); // hover 클래스 추가
    }).on('mouseleave', function() {
        if (!$(this).hasClass('active')) {
            $topBtn.parent('.top_btn_wrap').removeClass('hover'); // active 상태가 아닐 때 hover 제거
        }
    });

    function closeMenu() {
        $hamburgerMenu.removeClass('active');
        $wrap.removeClass('on');
        $burger.removeClass('active');
        menuVisible = false;
    }

    function toggleMenu() {
        $burger.toggleClass('active');
        $hamburgerMenu.toggleClass('active');
        $wrap.toggleClass('on');
        menuVisible = !menuVisible;
    }

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    // 메인 컨텐츠를 헤더 높이에 맞추어 조정하는 함수
    function adjustMainVisualPadding() {
        var headerHeight = $headerWrap.outerHeight();
        $mainContainer.css('padding-top', headerHeight + 'px');
    }

    // 초기화 함수: 포트폴리오 높이 조정
    function adjustPortfolioHeight() {
        // 포트폴리오 높이 조정 로직을 여기에 추가
    }
});
