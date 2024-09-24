$(function() {
    // 요소 선택자 초기화
    var $burger = $('.hambuger_btn'); // 햄버거 버튼
    var $hamburgerMenu = $('.hambuger_menu'); // 햄버거 메뉴
    var $wrap = $('#wrap'); // 전체 래핑 요소
    var $topBtn = $('.top_btn_wrap'); // 상단으로 이동 버튼
    var $headerWrap = $('.header_wrap'); // 헤더 래핑 요소
    var $mainContainer = $('.main'); // 메인 비주얼 선택자
    var menuVisible = false; // 메뉴 표시 여부
    var rollHeader = 100; // 헤더 고정 기준 스크롤 위치

    // 초기 설정: 페이지 로드 시 높이 및 여백 조정
    adjustPortfolioHeight();
    adjustMainVisualPadding();

    // 햄버거 버튼 클릭 시 메뉴 토글
    $burger.on('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });

    // 윈도우 리사이즈 시 메뉴 상태 및 높이 조정
    $(window).on('resize', function() {
        if ($(window).width() > 1200 && menuVisible) {
            closeMenu();
        }
        adjustPortfolioHeight(); // 포트폴리오 높이 조정
        adjustMainVisualPadding(); // 메인 비주얼 여백 조정
    });

    // 스크롤 이벤트 처리
    $(window).on('scroll', function() {
        var scroll = getCurrentScroll(); // 현재 스크롤 위치
        var headerHeight = $headerWrap.height(); // 헤더 높이

        // 헤더 고정 클래스 토글
        $headerWrap.toggleClass('fixnav', scroll >= rollHeader);
        adjustMainVisualPadding(); // 여백 조정

        // Top Button 표시 및 활성화 상태 관리
        if (scroll > 150) {
            $topBtn.addClass("active").fadeIn(); // 스크롤 150 이상 시 버튼 표시
        } else {
            $topBtn.removeClass("active").fadeOut(); // 그렇지 않으면 숨김
        }

        // 스크롤 중일 때 hover 상태 해제
        if (scroll > 0) {
            $topBtn.parent('.top_btn_wrap').removeClass('hover');
        } else {
            $topBtn.parent('.top_btn_wrap').addClass('active'); // 최상단일 때 active 유지
        }
    });

    // Top Button 클릭 시 부드럽게 스크롤
    $topBtn.on('click', function() {
        $(this).removeClass('active'); // active 클래스 제거
        $topBtn.parent('.top_btn_wrap').removeClass('active hover'); // active와 hover 클래스 제거

        // 스크롤을 0으로 애니메이션
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

    // Top Button 마우스 오버 이벤트 처리
    $topBtn.on('mouseenter', function() {
        $topBtn.parent('.top_btn_wrap').addClass('hover'); // hover 클래스 추가
    }).on('mouseleave', function() {
        if (!$(this).hasClass('active')) {
            $topBtn.parent('.top_btn_wrap').removeClass('hover'); // active 상태가 아닐 때 hover 제거
        }
    });

    // 메뉴 닫기 함수
    function closeMenu() {
        $hamburgerMenu.removeClass('active'); // 메뉴 비활성화
        $wrap.removeClass('on'); // 래핑 요소 비활성화
        $burger.removeClass('active'); // 햄버거 버튼 비활성화
        menuVisible = false; // 메뉴 상태 업데이트
    }

    // 메뉴 토글 함수
    function toggleMenu() {
        $burger.toggleClass('active'); // 햄버거 버튼 상태 토글
        $hamburgerMenu.toggleClass('active'); // 메뉴 상태 토글
        $wrap.toggleClass('on'); // 래핑 요소 상태 토글
        menuVisible = !menuVisible; // 메뉴 표시 여부 업데이트
    }

    // 현재 스크롤 위치 반환 함수
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop; // 스크롤 위치
    }

    // 메인 컨텐츠의 여백 조정 함수
    function adjustMainVisualPadding() {
        var headerHeight = $headerWrap.outerHeight(); // 헤더 높이
        $mainContainer.css('padding-top', headerHeight + 'px'); // 메인 여백 조정
    }

    // 초기화 함수: 포트폴리오 높이 조정
    function adjustPortfolioHeight() {
        // 포트폴리오 높이 조정 로직을 여기에 추가
    }
});
