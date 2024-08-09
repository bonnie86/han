// 페이지 로드 시 초기 높이 조정
 // 윈도우 크기 변경 시 높이 조정
//Scroll fiexd gnb, lnb, snb
// Hambuger Btn & Menu
// 햄버거 버튼 클릭 이벤트 
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

    $burger.on('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });

    $(window).on('resize', function() {
        // 화면 크기 변경 시 메뉴 닫기 및 높이 조정
        if ($(window).width() > 1200 && menuVisible) {
            closeMenu();
        }
        adjustPortfolioHeight(); // 높이 조정
        adjustMainVisualPadding(); // 메인 비주얼 여백 조정
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

    $(window).on('scroll', function() {
        var scroll = getCurrentScroll();
        var headerHeight = $headerWrap.height();

        // 헤더 고정 클래스 토글
        $headerWrap.toggleClass('fixnav', scroll >= rollHeader);

        // 스크롤 위치에 따라 메인 비주얼의 여백 조정
        adjustMainVisualPadding();
        
        // Top Button 표시
        if (scroll > 150) {
            $topBtn.addClass("active").fadeIn();
        } else {
            $topBtn.removeClass("active").fadeOut();
        }
    });

    $topBtn.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    // 메인 비주얼의 상단 여백을 헤더 높이에 맞추어 조정하는 함수
    function adjustMainVisualPadding() {
        var headerHeight = $headerWrap.outerHeight();
        $mainContainer.css('padding-top', headerHeight + 'px');
    }

    // 초기화 함수: 포트폴리오 높이 조정
    function adjustPortfolioHeight() {
        // 포트폴리오 높이 조정 로직을 여기에 추가
    }

    // 페이지 로드 시 메인 비주얼 여백 조정
    adjustMainVisualPadding();
});

