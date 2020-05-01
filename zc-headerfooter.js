/*----Get common window width starts------*/
function wWidth() {
    var windowWidth;
    windowWidth = $(window).outerWidth();
    return windowWidth;
}
/*----Get common window width Ends------*/
/*-----------------------------Mobile Sticky Product Menu Starts-------------------------------*/
$(window).scroll(function () {
    if ($(window).scrollTop() >= 450)
        $('.z-bottom-cta-menu').addClass('onscroll');
    else {
        $('.z-bottom-cta-menu').removeClass('onscroll');
    }
});
$(document).ready(function () {
    if ($('#mini-panel-product_menu').length > 0 && window.location.pathname.indexOf('zoholics') < 0) {
        $('body').addClass('zph-sticky');
        if (productName == 'home') {
            $('body').addClass('zph-sticky-home');
        }
        cta1Link = $('.zgh-signup').attr('href');
        cta1Text = (window.innerWidth < 400) ? Drupal.t('Sign up') : Drupal.t('Sign up for free');
    if(isMobile && productName == 'survey'){
      var iOS = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if(iOS){
        cta1Text = Drupal.t('GET THE APP');
      }
    }
        cta2Link = $gotoPage;
  cta2Text = ((window.innerWidth < 480 && currentUrlLang != '') || (window.innerWidth < 360 && currentUrlLang == '')) ? Drupal.t('Access') : (accessZoho + ' ' + productName);
        if (productName == 'zohoorchestly') {
            cta2Text = Drupal.t('Access') + ' orchestly';
        } else if (productName == 'identity-management') {
            cta2Text = Drupal.t('Access') + ' identity manager plus';
        }
        accessZoho + ' ' + productName;
        prdMenuMobile = $('.product-nav-links > ul').clone();
        if ($('#blogin-text').length > 0) {
            cta1Text = $('#blogin-text').html();
        }
        if ($('#alogin-text').length > 0) {
            cta2Text = $('#alogin-text').html();
        }
        if ($('#blogin-link').length > 0) {
            cta1Link = $('#blogin-link').html();
        }
        if ($('#alogin-link').length > 0) {
        cta2Link = $('#alogin-link').html();
        }
    var zMobileMenuV2 = '<div class="z-mobile-menu-v2"> <div class="z-bottom-cta-menu"><span class="mobile-menu-icon1"><span class="zhamburger"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span> </span><a class="loggedout" href="' + cta1Link + '">' + cta1Text + '</a> <a class="loggedin" href="' + cta2Link + '">' + cta2Text + '</a></div></div>';
        if (window.location.href.indexOf('terms.html') < 0 && window.location.href.indexOf('privacy.html') < 0) {
            $(zMobileMenuV2).appendTo('.main-container-wrapper');
        }

        prdMenuMobile = $('.product-nav-links > ul').clone();
        prdLink = $('.product-title a').attr('href');
        if (prdName != 'Mobile Device Management') {
      if(productName != 'home'){
        prdName = $('.product-title > a')[0].childNodes[0].nodeValue;
      }
        }
        loginLink = zPrdLoginLink;
    var stext = Drupal.t('Search') + ' zoho.' + domainOne;
    if(currentUrlLang == 'jp'){
      stext = Drupal.t('Search');
    }
        var zMobileMenuV2 = '<div class="zmobile-menu-new"> <div class="zmobile-menu-new-inner"> <div class="zmobile-menu-search"> <div class="zmobile-menu-searchbox"> <form action="" id="zmobile-menu-searchaction"> <input type="text" class="zmobile-menu-searchinput" aria-label="Search for product overviews, FAQs, and more..." placeholder="' + stext + '"> <button class="zmobile-menu-searchbtn" type="submit" value="Submit"><span></span></button> </form> </div> </div> <div class="zmobile-menu-link"> <div class="zmobile-menu-new-content"> <div class="zmobile-menu-prdlogo"><span><a class="prd_link" href="' + prdLink + '">' + prdName + '</a></span></div> <ul> ' + $(prdMenuMobile).html() + ' </ul> <div class="zcommon-link-container"> <span class="zlogin-menu"><a href="https://accounts.' + Zdomain + '.' + domainOne + '/signin?' + customvar.clang + 'servicename=ZohoHome&signupurl=https://www.' + Zdomain + '.' + domainOne + langsrc + 'signup.html">' + Drupal.t('Login') + '</a></span> <span class="zallprd-menu"><a href="' + langsrc + '">' + Drupal.t('All Zoho Products') + '</a></span> </div> </div> </div> </div> </div>';
        $(zMobileMenuV2).appendTo('.z-mobile-menu-v2');
        var interCount = 0;
        var intervl = setInterval(function () {
            if (typeof getusername != 'undefined') {
                clearInterval(intervl);
        if (typeof customvar.logged != 'undefined') {
          customvar.logged();
        }
            }
            if (interCount > 25) {
                clearInterval(intervl);
                if (typeof getusername == 'undefined') {
                    if (typeof customvar.nonlogged != 'undefined') {
                        customvar.nonlogged();
              }
                }else{
          if(typeof customvar.logged != 'undefined') {
            customvar.logged();
          }
        }
            }
            interCount++;
        }, 100);
        $('.zmobile-menu-new-content li').removeClass('leaf').removeClass('first').removeClass('selected').removeClass('expanded');
        $('.zmobile-menu-new-content li.featured-apps-part').remove();
        $('.zmobile-menu-new-content li.dropdown').addClass('zdropdown-container').removeClass('dropdown');
        $('.zdropdown-container > a').replaceWith(function () {
            return $("<span>" + $(this).html() + "</span>");
        });

        $(document).on('submit', '#zmobile-menu-searchaction', function (e) {
            e.preventDefault();
            var formval = $('.zmobile-menu-searchinput').val().trim();
            var actionURL;
            if (currentUrlLang == "") {
                actionURL = window.location.origin + '/search-results.html';
            } else {
                actionURL = window.location.origin + '/' + currentUrlLang + '/' + 'search-results.html';
            }
            if (formval != "") {
                window.location = actionURL + "?query=" + encodeURIComponent(formval);
            }
        });

        $(document).on(selectEvents, '.mobile-menu-icon1', function () {
            var thatObj = $(this);
            thatObj.toggleClass('active');
            thatObj.find('.zhamburger').toggleClass('active');
            if (thatObj.find('.zhamburger').hasClass('active')) {
                $('body, html').addClass('zoverflow-mobile');
                $('.zmobile-menu-new-inner').addClass('zshow');
                $('.zmobile-menu-new').fadeIn(300);
            } else {
                $('body, html').removeClass('zoverflow-mobile');
                $('.zmobile-menu-new-inner').removeClass('zshow');
                $('.zmobile-menu-new').fadeOut(300);
            }
        });

        var touchEve = 'click';
        if (/iPhone/i.test(navigator.userAgent)) {
            touchEve = 'touchstart';
        }
        $(document).on(touchEve, '.zdropdown-container > a,.zdropdown-container > span', function (e) {
            e.preventDefault();
            var thatObj = $(this);
            if (thatObj.parent().hasClass('active')) {
                thatObj.parent().removeClass('active');
                thatObj.parent().find('.dropdown-menu').slideUp();
            } else {
                $('.z-mobile-menu-v2').find('.zdropdown-container').removeClass('active');
                $('.z-mobile-menu-v2').find('.dropdown-menu').slideUp();
                thatObj.parent().addClass('active');
                thatObj.parent().find('.dropdown-menu').slideDown();
            }
            return false;
        });
        $(document).on(selectEvents, '.zmobile-menu-new', function (e) {
            var container = $('.zmobile-menu-new-inner');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('body, html').removeClass('zoverflow-mobile');
                $('.zmobile-menu-new-inner').removeClass('zshow');
                $('.zmobile-menu-new').fadeOut(300);
                $('.mobile-menu-icon1').removeClass('active');
                $('.z-mobile-menu-v2').find('.zhamburger').removeClass('active');
            }
        });
    }
});
$(window).on('load', function () {
    $('.zmobile-menu-new-content ul').html('');
    prdMenuMobile = $('.product-nav-links > ul').clone();
    $('.zmobile-menu-new-content ul').html($(prdMenuMobile).html());
    $('.zmobile-menu-new-content li').removeClass('leaf').removeClass('first').removeClass('selected').removeClass('expanded');
    $('.zmobile-menu-new-content li.featured-apps-part').remove();
    $('.zmobile-menu-new-content li.dropdown').addClass('zdropdown-container').removeClass('dropdown');
    $('.zdropdown-container > a').replaceWith(function () {
        return $("<span>" + $(this).html() + "</span>");
    });
    if ($('.zmobile-menu-new-content ul li').length == 0) {
        $('.zmobile-menu-new-content ul').addClass('ulempty');
    }
});

$(window).resize(function () {
    var wW = wWidth();
    if (wW > 767) {
        $('.zmobile-menu-new').removeAttr('style');
        $('.z-bottom-cta-menu .mobile-menu-icon1,.z-bottom-cta-menu .zhamburger').removeClass('active');
        $('.zmobile-menu-new-inner').removeClass('zshow');
        $('body').removeClass('zoverflow-mobile');
    }
});
/*-----------------------------Mobile Sticky Product Menu Ends----------------------------------*/

/*------------------------------------Global Header Starts--------------------------------------*/
//Global Header Events on Ready
function zGlobalHeader() {
    $('#mini-panel-product_menu .product-nav-links').before(zghLoc);
    /*  Global Menu Block Ends */
    /*  Global All Product Starts */
    //Set Menu Lang & Path to get json values
    var menuLang;
    var rlcount = 0;
    var menuUrlLang;
    if (currentUrlLang == "" || currentUrlLang == "in" || currentUrlLang == undefined) {
        menuLang = 'en';
        menuUrlLang = '';
    } else {
        menuLang = currentUrlLang;
        menuUrlLang = '/' + currentUrlLang;
    }
    if (domainOne == "com.cn") {
        menuLang = "zh-hans";
        //menuUrlLang = '/zh-hans';
    }

    //Menu Order in Array
    var menuOrder = [];
    var categoryArr = [];
    var headerProductArr = [];
    var menuBoxLen = 30;
    for (var i = 1; i <= menuBoxLen; i++) {
        menuOrder.push(i);
    }
    //Product Box Structure
    function linkupdates(a) {
        var _curl = '';
        if (prdName.toLowerCase() == 'orchestly' && a.toLowerCase() != 'orchestly') {
            _curl = 'https://www.zoho.' + domainOne + '';
        }
        if ((a == 'IT Management' || a == 'Finance Plus' || a == 'Checkout' || a == 'ServiceDesk Plus' || a == 'Mobile Device Management' || a == 'Site24x7' || a == 'Office Integrator' || menuLang == "zh-hans" || a.toLowerCase() == 'orchestly' || a.toLowerCase() == 'payroll')) {
            return _curl;
        } else if (domainOne == "com.cn" || ((a == 'Subscriptions' || a == 'Inventory' || a == 'Expense' || a == 'Finance Plus' || a == 'Checkout' || a == 'Invoice') && (menuLang == 'ar' || menuLang == 'vi' || menuLang == 'it'))) {
            return _curl;
        } else if ((a == 'Books' || a == 'Invoice') && (menuLang == "id" || menuLang == "th" || menuLang == "nl" || menuLang == 'vi' || menuLang == 'it')) {
            return _curl;
        } else {
            if ((menuLang == 'pt-br' || menuLang == 'nl' || menuLang == 'id' || menuLang == 'th' || menuLang == 'ar') && (a == 'Subscriptions' || a == 'Inventory' || a == 'Expense')) {
                return _curl;
            } else {
                return _curl + menuUrlLang;
            }
        }
    }

    function boxDiv(getProdItem, proURL, prdNameclass, productVersion, productVisible, productName, productDesc, productBoxHidden, setBlank, setPrdTagline, productTagLine) {
        if (productVisible == true) {
            var dataBox;
            var _lurl = '';
            if (menuLang == 'de' || menuLang == 'fr' || menuLang == 'es-xl' || menuLang == 'pt-br' || menuLang == 'nl' || menuLang == 'id' || menuLang == 'th') {
                if (menuLang == 'es-xl') {
                    _lurl = '/es';
                } else if (menuLang == 'pt-br') {
                    _lurl = '/pt';
                } else {
                    _lurl = '/' + menuLang;
                }
            }
            (proURL.indexOf('www.site24x7.com') > 0) ? (proURL = 'https://www.site24x7.' + domainOne + _lurl + '/') : '';

            if (menuLang != '') {
                if (proURL.indexOf('online-service-desk-software.html') > 0 || proURL.indexOf('mdm-cloud.html') > 0 || proURL.indexOf('checkout') > 0 || proURL.indexOf('financeplus') > 0 || proURL.indexOf('it-management') > 0 || menuLang == "zh-hans") {
                    if (proURL.indexOf(langsrc) > -1) {
                        proURL = ('/' + proURL.split(langsrc)[1]);
                    }
                }
            }
            if (menuLang == 'pt-br') {
                if (proURL.indexOf('expense') > 0 || proURL.indexOf('subscriptions') > 0 || proURL.indexOf('inventory') > 0) {
                    proURL = ('/' + proURL.split(langsrc)[1]);
                }
            } else if (menuLang == 'nl' || menuLang == 'ar') {
                if (proURL.indexOf('expense') > 0 || proURL.indexOf('subscriptions') > 0 || proURL.indexOf('inventory') > 0 || proURL.indexOf('invoice') > 0) {
                    proURL = ('/' + proURL.split(langsrc)[1]);
                }
            } else if (menuLang == 'id' || menuLang == 'th' || menuLang == 'vi' || menuLang == 'it') {
                if (proURL.indexOf('books') > 0 || proURL.indexOf('expense') > 0 || proURL.indexOf('subscriptions') > 0 || proURL.indexOf('inventory') > 0 || proURL.indexOf('invoice') > 0) {
                    proURL = ('/' + proURL.split(langsrc)[1]);
                }
            }
            if (proURL.indexOf('marketplace') < 0) {
                proURL = proURL + '?src=top-header&ireft=' + prdName + '-' + categoryArr[categoryArr.length - 1].substring(0, 2);
            } else {
                if (domainOne != 'com') {
                    proURL = proURL.split('.com').join('.' + domainOne);
                }
            }
            if (prdName.toLowerCase() == 'orchestly') {
                if (proURL.indexOf('https') < 0) {
                    proURL = 'https://www.zoho.' + domainOne + proURL;
                }
            }
            if (proURL.indexOf('www.orchestly.com/') > -1 && domainOne != 'com') {
                proURL = proURL.split('.com').join('.' + domainOne);
            }
            if (setPrdTagline) {
                if (setBlank) {
                    if (productVersion != "") {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + Drupal.t(productVersion) + '</span><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + Drupal.t(productVersion) + '</span><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }

                    } else {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }
                    }
                } else {
                    if (productVersion != "") {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + Drupal.t(productVersion) + '</span><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + Drupal.t(productVersion) + '</span><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }

                    } else {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }
                    }
                }
            } else {
                if (setBlank) {
                    if (productVersion != "") {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + Drupal.t(productVersion) + '</span><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + Drupal.t(productVersion) + '</span><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }

                    } else {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }
                    }
                } else {
                    if (productVersion != "") {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + Drupal.t(productVersion) + '</span><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + Drupal.t(productVersion) + '</span><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }

                    } else {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }
                    }
                }
            }
            return dataBox;
        }

    }

    var getJsonFile;
    if (_preZ == window.location.host || Zdomain == 'localzoho' || domainOne == 'com.cn') {
        getJsonFile = '/sites/default/files/global-menu.json';
    } else {
        getJsonFile = 'https://www.zohowebstatic.com/sites/default/files/global-menu.json';
    }

    var getRelCNprds = ['People', 'Mail', 'Projects', 'CRM', 'Creator'];
    var isRelCN = true;
    //Getting Related Products
    if (currentUrlLang != 'jp') {
        if (prdName != '') {
            var getRelprds = [];
            /*$.getJSON(getJsonFile, function(data){
                $.each(data, function (index, item) {
                    $.each(item.categoryProducts, function (index, items) {
                        if (items.productName == 'Zoho One' && prdName == 'One') {
                            items.productName = 'One';
                        } else if (items.productName == 'Identity Management' && prdName == 'Identity Manager Plus') {
                            items.productName = 'Identity Manager Plus';
                        } else if (items.productName == 'Log Management Cloud' && prdName == 'Log360 Cloud') {
                            items.productName = 'Log360 Cloud';
                        }
                        if (items.productName.toLowerCase().replace(/-|\s/g, "") == prdName.toLowerCase().replace(/-|\s/g, "")) {
                            if (prdName == 'One') {
                                items.productName = 'Zoho One';
                            } else if (prdName == 'Identity Manager Plus') {
                                items.productName = 'Identity Management';
                            } else if (prdName == 'Log360 Cloud') {
                                items.productName = 'Log Management Cloud';
                            }
                            if (items.relatedProducts != undefined) {
                                getRelprds.push(items.relatedProducts.split(','));
                                getRelprds[0].unshift(items.productName);
                            }
                        }
                    });
                });
                if (getRelprds.length >= 1) {
                    $.each(getRelprds[0].reverse(), function (index, item) {
                        $.each(data, function (getindex, getItem) {
                            $.each(getItem.categoryProducts, function (getindex1, getItem1) {
                                if (domainOne != 'com' && productName == 'zohoorchestly' || domainOne != 'com' && getItem1.productName.toLowerCase() == 'orchestly') {
                                    if (getItem1.productUrl.indexOf('.com') > 0) {
                                        getItem1.productUrl = getItem1.productUrl.split('.com').join('.' + domainOne);
                                    }
                                }
                                if (item.toLowerCase().replace(/-|\s/g, "") == getItem1.productName.toLowerCase().replace(/-|\s/g, "")) {
                                    if (prdName == 'One' && item == 'Zoho One') {
                                        getItem1.productName = 'one';
                                    } else if (prdName == 'Identity Manager Plus' && item == 'Identity Management') {
                                        getItem1.productName = 'Identity Manager Plus';
                                    } else if (prdName == 'Log360 Cloud' && item == 'Log Management Cloud') {
                                        getItem1.productName = 'Log360 Cloud';
                                    }
                                    if (getItem1.productName.toLowerCase().replace(/ /g, '') == prdName.toLowerCase().replace(/-|\s/g, "")) {
                                        if (getItem1.productName == 'one' && prdName == 'One') {
                                            getItem1.productName = 'Zoho One';
                                        } else if (getItem1.productName == 'Identity Manager Plus' && prdName == 'Identity Manager Plus') {
                                            getItem1.productName = 'Identity Management';
                                        } else if (getItem1.productName == 'Log360 Cloud' && prdName == 'Log360 Cloud') {
                                            getItem1.productName = 'Log Management Cloud';
                                        }
                                        if (headerProductArr.indexOf(getItem1.productName) < 0) {
                                            $('.zgh-nav > ul').prepend('<li><a class="active" href="' + (linkupdates(getItem1.productName) + getItem1.productUrl) + '?src=top-header">' + getItem1.productName + '</a></li>');
                                        }
                                    } else {
                                        if (headerProductArr.indexOf(getItem1.productName) < 0) {
                                            if (domainOne != "com.cn") {
                                                if (rlcount > getRelprds[0].length - getRelprds[0].length) {
                                                    $('.product-nav-links .menu .featured-apps-part .featured-pro').prepend('<a class="zgh-i-' + getItem1.productName.toLowerCase().replace(/-|\s/g, "") + '" href="' + (linkupdates(getItem1.productName) + getItem1.productUrl) + '?src=product-header&ireft=' + prdName + '"><span>' + getItem1.productName + '</span></a>');
                                                }
                                                rlcount++;
                                                $('.zgh-nav > ul').prepend('<li><a href="' + (linkupdates(getItem1.productName) + getItem1.productUrl) + '?src=top-header&ireft=' + prdName + '">' + getItem1.productName + '</a></li>');
                                            } else {
                                                if (isRelCN) {
                                                    $.each(getRelCNprds, function (index, item) {
                                                        $('.zgh-nav > ul').prepend('<li><a href="/' + item.toLowerCase() + '/?src=top-header&ireft=' + prdName + '">' + item + '</a></li>');
                                                    });
                                                    isRelCN = false;
                                                }
                                            }
                                        }
                                    }
                                    headerProductArr.push(getItem1.productName);
                                }
                            });
                        });
                    });
                }
            });*/
   


    if (prdName == 'home') {
        $('.product-nav-links .menu .featured-apps-part .featured-pro').html('');
        $('.product-nav-links .menu .featured-apps-part .featured-pro').prepend('<a class="zgh-i-crm" href="' + langsrc + 'crm/?src=product-header&ireft=home">CRM<span></span></a> <a class="zgh-i-mail" href="' + langsrc + 'mail/?src=product-header&ireft=home"> <span>Mail</span></a> <a class="zgh-i-creator" href="' + langsrc + 'creator/?src=product-header&ireft=home"><span>Creator</span></a> <a class="zgh-i-books" href="/books/?src=product-header&ireft=home"><span>Books</span></a>');
    }

    var menuCateDiv = [3, 6, 8, 11];
    var menuCatBundle = [];
    //Getting products
    $.getJSON(getJsonFile, function (data) {

                $.each(data, function (index, item) {
                    $.each(item.categoryProducts, function (index, items) {
                        if (items.productName == 'Zoho One' && prdName == 'One') {
                            items.productName = 'One';
                        } else if (items.productName == 'Identity Management' && prdName == 'Identity Manager Plus') {
                            items.productName = 'Identity Manager Plus';
                        } else if (items.productName == 'Log Management Cloud' && prdName == 'Log360 Cloud') {
                            items.productName = 'Log360 Cloud';
                        }
                        if (items.productName.toLowerCase().replace(/-|\s/g, "") == prdName.toLowerCase().replace(/-|\s/g, "")) {
                            if (prdName == 'One') {
                                items.productName = 'Zoho One';
                            } else if (prdName == 'Identity Manager Plus') {
                                items.productName = 'Identity Management';
                            } else if (prdName == 'Log360 Cloud') {
                                items.productName = 'Log Management Cloud';
                            }
                            if (items.relatedProducts != undefined) {
                                getRelprds.push(items.relatedProducts.split(','));
                                getRelprds[0].unshift(items.productName);
                            }
                        }
                    });
                });
                if (getRelprds.length >= 1) {
                    $.each(getRelprds[0].reverse(), function (index, item) {
                        $.each(data, function (getindex, getItem) {
                            $.each(getItem.categoryProducts, function (getindex1, getItem1) {
                                if (domainOne != 'com' && productName == 'zohoorchestly' || domainOne != 'com' && getItem1.productName.toLowerCase() == 'orchestly') {
                                    if (getItem1.productUrl.indexOf('.com') > 0) {
                                        getItem1.productUrl = getItem1.productUrl.split('.com').join('.' + domainOne);
                                    }
                                }
                                if (item.toLowerCase().replace(/-|\s/g, "") == getItem1.productName.toLowerCase().replace(/-|\s/g, "")) {
                                    if (prdName == 'One' && item == 'Zoho One') {
                                        getItem1.productName = 'one';
                                    } else if (prdName == 'Identity Manager Plus' && item == 'Identity Management') {
                                        getItem1.productName = 'Identity Manager Plus';
                                    } else if (prdName == 'Log360 Cloud' && item == 'Log Management Cloud') {
                                        getItem1.productName = 'Log360 Cloud';
                                    }
                                    if (getItem1.productName.toLowerCase().replace(/ /g, '') == prdName.toLowerCase().replace(/-|\s/g, "")) {
                                        if (getItem1.productName == 'one' && prdName == 'One') {
                                            getItem1.productName = 'Zoho One';
                                        } else if (getItem1.productName == 'Identity Manager Plus' && prdName == 'Identity Manager Plus') {
                                            getItem1.productName = 'Identity Management';
                                        } else if (getItem1.productName == 'Log360 Cloud' && prdName == 'Log360 Cloud') {
                                            getItem1.productName = 'Log Management Cloud';
                                        }
                                        if (headerProductArr.indexOf(getItem1.productName) < 0) {
                                            $('.zgh-nav > ul').prepend('<li><a class="active" href="' + (linkupdates(getItem1.productName) + getItem1.productUrl) + '?src=top-header">' + getItem1.productName + '</a></li>');
                                        }
                                    } else {
                                        if (headerProductArr.indexOf(getItem1.productName) < 0) {
                                            if (domainOne != "com.cn") {
                                                if (rlcount > getRelprds[0].length - getRelprds[0].length) {
                                                    $('.product-nav-links .menu .featured-apps-part .featured-pro').prepend('<a class="zgh-i-' + getItem1.productName.toLowerCase().replace(/-|\s/g, "") + '" href="' + (linkupdates(getItem1.productName) + getItem1.productUrl) + '?src=product-header&ireft=' + prdName + '"><span>' + getItem1.productName + '</span></a>');
                                                }
                                                rlcount++;
                                                $('.zgh-nav > ul').prepend('<li><a href="' + (linkupdates(getItem1.productName) + getItem1.productUrl) + '?src=top-header&ireft=' + prdName + '">' + getItem1.productName + '</a></li>');
                                            } else {
                                                if (isRelCN) {
                                                    $.each(getRelCNprds, function (index, item) {
                                                        $('.zgh-nav > ul').prepend('<li><a href="/' + item.toLowerCase() + '/?src=top-header&ireft=' + prdName + '">' + item + '</a></li>');
                                                    });
                                                    isRelCN = false;
                                                }
                                            }
                                        }
                                    }
                                    headerProductArr.push(getItem1.productName);
                                }
                            });
                        });
                    });
                }



        $.each(menuOrder, function (getMenuindex, getMenuItem) {
            $.each(data, function (getDataindex, item) {
                getMenuCatName = item.categoryName[0][menuLang];
                getMenuCatIndex = getDataindex + 1;
                getMenuCatOrder = item.categoryOrder;
                getMenuCatBundle = item.categoryBundleProducts;
                getProVisCount = item.productVisibleCount;
                getMenuCatProducts = item.categoryProducts;
                var setMenuCatNameclass = item.categoryName[0].en;
                setMenuCatNameclass = setMenuCatNameclass.replace(/&+/g, '-').toLowerCase();
                setMenuCatNameclass = setMenuCatNameclass.replace(/\s+/g, '').toLowerCase();
                if (getMenuItem == getMenuCatOrder) {
                    if (getMenuCatOrder == 1) {
                        $('.zgh-products .zgh-megaMenuCat').append('<li class="active zgh-b-' + setMenuCatNameclass + '" data-list="' + getMenuCatIndex + '" data-bundle="' + getMenuCatBundle + '"><span>' + getMenuCatName + '</span></li>');
                        $('.zgh-products .zgh-megaMenuPro').append('<div class="active zgh-' + setMenuCatNameclass + '" data-category="' + getMenuCatIndex + '"></div>');
                    } else {
                        $('.zgh-products .zgh-megaMenuCat').append('<li class="zgh-b-' + setMenuCatNameclass + '" data-list="' + getMenuCatIndex + '" data-bundle="' + getMenuCatBundle + '"><span>' + getMenuCatName + '</span></li>');
                        $('.zgh-products .zgh-megaMenuPro').append('<div class="zgh-' + setMenuCatNameclass + '" data-category="' + getMenuCatIndex + '"></div>');
                    }
                    categoryArr.push(setMenuCatNameclass);
                    if (getProVisCount != "" || getProVisCount != 0) {
                        var proShowMore = true;
                        $.each(menuOrder, function (getMenuindex, getProdItem) {
                            $.each(getMenuCatProducts, function (index, items) {
                                var setPrdNameclass = items.productName;
                                setPrdNameclass = setPrdNameclass.replace(/&+/g, '-').toLowerCase();
                                setPrdNameclass = setPrdNameclass.replace(/\s+/g, '').toLowerCase();
                                getProURL = '';
                                setBlank = false;
                                if (menuLang == 'en') {
                                    getProURL = items.productUrl;
                                    if (items.productUrl.indexOf("www.") > -1) {
                                        setBlank = true;
                                    }
                                } else {
                                    if (items.productUrl.indexOf("www.") > -1) {
                                        getProURL = items.productUrl;
                                        setBlank = true;
                                    } else {
                                        getProURL = menuUrlLang + items.productUrl;
                                    }
                                }
                                setPrdTagline = false;
                                getPrdTagline = '';
                                if (typeof items.productTagline != 'undefined') {
                                    setPrdTagline = true;
                                    getPrdTagline = items.productTagline[0][menuLang];
                                }
                                if (getProdItem == items.productOrder) {
                                    if (proShowMore) {
                                        proShowMore = false;
                                        $('div.zgh-' + setMenuCatNameclass).append('<div class="zmenu-menuProBox"><div class="zmenu-menuProBox-1"></div><div class="zmenu-menuProBox-2"></div><div class="zmenu-menuProBox-3"></div><div class="zmenu-menuProBox-4"></div></div><div class="zmenu-moreBox"><span class="zmenu-moreBtn">' + Drupal.t("More products") + '</span></div>');
                                    }
                                    var boxHidden;
                                    if (index + 1 <= getProVisCount) {
                                        boxHidden = false;
                                    } else {
                                        boxHidden = true;
                                    }
                                    if (wW < 768) {
                                        $('div.zgh-' + setMenuCatNameclass).append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        vendMobile = false;
                                    } else if (wW > 767 && wW < 1200) {
                                        split = (getProdItem - 1) % 3;
                                        if (split == 0) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-1').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 1) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-2').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 2) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-3').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        }
                                        vendTab = false;
                                    } else {
                                        split = (getProdItem - 1) % 4;
                                        if (split == 0) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-1').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 1) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-2').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 2) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-3').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 3) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-4').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        }
                                        vendDesk = false;
                                    }
                                }
                            });
                            setBlank = false;
                            setPrdTagline = false;
                        });
                        proShowMore = true;
                    } else {
                        $.each(menuOrder, function (getMenuindex, getProdItem) {
                            $.each(getMenuCatProducts, function (index, items) {
                                var setPrdNameclass = items.productName;
                                setPrdNameclass = setPrdNameclass.replace(/&+/g, '-').toLowerCase();
                                setPrdNameclass = setPrdNameclass.replace(/\s+/g, '').toLowerCase();
                                getProURL = '';
                                setBlank = false;
                                if (menuLang == 'en') {
                                    getProURL = items.productUrl;
                                    if (items.productUrl.indexOf("www.") > -1) {
                                        setBlank = true;
                                    }
                                } else {
                                    if (items.productUrl.indexOf("www.") > -1) {
                                        getProURL = items.productUrl;
                                        setBlank = true;
                                    } else {
                                        getProURL = menuUrlLang + items.productUrl;
                                    }
                                }
                                setPrdTagline = false;
                                getPrdTagline = '';
                                if (typeof items.productTagline != 'undefined') {
                                    setPrdTagline = true;
                                    getPrdTagline = items.productTagline[0][menuLang];
                                }
                                if (getProdItem == items.productOrder) {
                                    boxHidden = false;
                                    $('div.zgh-' + setMenuCatNameclass).append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                }
                            });
                            setBlank = false;
                            setPrdTagline = false;
                        });
                    }
                }
            });
            $.each(menuCateDiv, function (divIndex, divItem) {
                $('.zgh-products .zgh-megaMenuCat li[data-list="' + divItem + '"]').addClass('zgh-catDivider');
            });
            if (getMenuItem == menuBoxLen) {
                menuAfterInt();
            }
            $('.other-lang .zgh-i-patchmanagerplus').parent().remove();
        });
        if ($('.zgh-products .zgh-b-extensions').length > 0) {
            $('.zgh-products .zgh-b-extensions').before('<p class="marketplace-title">Do more with your Zoho products</p>');
        }
        $('.zgh-marketplace a').attr('target', '_blank');
        //Bundle Default active
        if (wW > 1199) {
            $('[data-bundle]').each(function () {
                var that = $(this);
                if (that.hasClass('active')) {
                    if (that.attr('data-bundle').length > 0) {
                        menuCatBundle.push(that.data('bundle').split(','));
                    }
                }
            });
            if (menuCatBundle.length > 0) {
                $('.zgh-bundles > div').css('display', 'none');
                $.each(menuCatBundle[0], function (index, item) {
                    getBundleClass = item;
                    getBundleClass = getBundleClass.replace(/&+/g, '-').toLowerCase();
                    getBundleClass = getBundleClass.replace(/\s+/g, '').toLowerCase();
                    $('.zgh-b-' + getBundleClass).css('display', 'block');
                });
                $('.zgh-bundles').addClass('active-visible');
                menuCatBundle = [];
            } else {
                $('.zgh-bundles').removeClass('active-visible');
                $('.zgh-bundles > div').css('display', '');
            }
        }
    }).fail(function () {
        throw { name: "FileError", message: "An error has occurred while fetching the json data" };
    });

         }
    }

    function fileError(message) {
        this.name = "FileError";
        this.message = (message || "");
    }
    fileError.prototype = Error.prototype;
    //Products Menu Show more
    $(document).on('click', '.zmenu-moreBtn', function () {
        var that = $(this);
        if (that.hasClass('active')) {
            that.closest('[data-category]').find('.zgh-hidden').attr('data-hidden', 'true').slideUp();
            that.removeClass('active').text('More products');
        } else {
            that.hide();
            that.closest('[data-category]').find('.zgh-hidden').attr('data-hidden', 'false').slideDown();
            that.addClass('active').text('Less products');
        }
    });
    /*  Global All Product Ends */
    /*  Search Starts */
    $(document).on('click', '.zgh-search-icon', function () {
        $('.zgh-search-container').addClass('active');
        $('.zgh-search-field').focus().val('');
    });

    function searchHide() {
        if ($('.zgh-search-container').hasClass('active')) {
            $('.zgh-search-container').removeClass('active');
            $('.zgh-search-field').val('');
        }
    }
    $(document).on(selectEvents, '.zgh-search-clear,.zgh-search-overlay', function () {
        searchHide();
    });
    $(document).on('click', '.zgh-search-btn', function () {
        $('#zgh-search-action').submit();
    });
    $(document).on('submit', '#zgh-search-action', function (e) {
        e.preventDefault();
        var formval = $('#zgh-search-query').val().trim();
        var actionURL
        if (currentUrlLang == "") {
            actionURL = window.location.origin + '/search-results.html';
        } else {
            actionURL = window.location.origin + '/' + currentUrlLang + '/' + 'search-results.html';
        }
        if (formval != "") {
            window.location = actionURL + "?query=" + encodeURIComponent(formval);
        }
    });
    $(document).keyup(function (e) {
        if ((e.keyCode === 27)) {
            searchHide();
        }
    });
    $(window).scroll(function () {
        var thisScroll = $(this).scrollTop();
        if (thisScroll > 100) {
            searchHide();
        }
    });
    /*  Search Ends */
    /*  Localization Starts */
    $(document).on('mouseenter touchstart', '.zgh-localization', function () {
        var that = $(this);
        that.addClass('active');
    });
    $(document).on('mouseleave', '.zgh-localization', function () {
        var that = $(this);
        that.removeClass('active');
    });
    /*  Localization Ends */
    /*  Account Starts*/
    $(document).on(selectEvents, '.zgh-userAvatar', function () {
        var that = $(this);
        that.parent().toggleClass('active');
    });
    /*  Account Ends */
    //After Menu init
    function menuAfterInt() {
        //Do other logic here before resize trigger.....
        $('.zgh-nav').addClass('active');
        $('.zgh-i-zohoone p').html('One');
        $('.zgh-i-orchestly').removeAttr('target');
        initGlobalHeaderResize();
    }
}
//Set Device Mode
function setDevice(wW, wH) {
    if (wW < 768) {
        if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('body').attr('data-device', 'mobile');
            $(document).on(selectEvents, '[data-device="mobile"]', function (event) {
                userAccOutClick(this, event);
                userLanOutClick(this, event);
            });
        } else {
            $('body').attr('data-device', 'desktop');
            $(document).on(selectEvents, '[data-device="desktop"]', function (event) {
                userAccOutClick(this, event);
                userLanOutClick(this, event);
            });
        }
    } else if (wW > 767 && wW < 1200) {
        if (/Android|webOS|iPad|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('body').attr('data-device', 'tab');
            $(document).on(selectEvents, '[data-device="tab"]', function (event) {
                megaMenuOutClick(this, event);
                userAccOutClick(this, event);
                userLanOutClick(this, event);
            });
        } else {
            $('body').attr('data-device', 'desktop');
            $(document).on(selectEvents, '[data-device="desktop"]', function (event) {
                megaMenuOutClick(this, event);
                userAccOutClick(this, event);
                userLanOutClick(this, event);
            });
        }
    } else {
        $('body').attr('data-device', 'desktop');
        $(document).on(selectEvents, '[data-device="desktop"]', function (event) {
            megaMenuOutClick(this, event);
            userAccOutClick(this, event);
            userLanOutClick(this, event);
        });
    }
}
//Megamenu & User account mouse leave
megaMenuOutClick = function (target, event) {
    event.stopPropagation();
    var container = $('.zgh-megaMenu');
    if (!container.is(event.target) && container.has(event.target).length === 0) {
        container.removeClass('active');
        $('.zgh-megaMenuCat li').removeAttr('style');
    }
};
userAccOutClick = function (target, event) {
    event.stopPropagation();
    var container = $('.zgh-userPanel');
    if (!container.is(event.target) && container.has(event.target).length === 0) {
        container.removeClass('active');
    }
};
userLanOutClick = function (target, event) {
    event.stopPropagation();
    var container = $('.zgh-localization');
    if (!container.is(event.target) && container.has(event.target).length === 0) {
        container.removeClass('active');
    }
};

//Global Header Events on Resize
function headerMinHeight(a) {
    $('.zgh-products .zgh-megaMenuPro > div,.zgh-menuItem').css('display', 'block');
    $('.zgh-menuItem a').css('height', '');
    hei = 0;
    idS = 1;
    idE = a;
    orId = [];
    $('.zgh-megaMenuPro > div:not(.zgh-bundles):not(.zgh-marketplace)').each(function () {
        var that = $(this);
        if (that.find('.zmenu-moreBtn').length) {
            that.find('.zgh-menuItem').each(function (index, item) {
                if (index + 1 >= idS && index + 1 <= idE) {
                    orId.push(index + 1);
                    if (that.find('[data-index="' + (index + 1) + '"] a').height() > hei) {
                        hei = that.find('[data-index="' + (index + 1) + '"] a').height();
                    }
                }
                if (orId.length == a) {
                    $.each(orId, function (i) {
                        that.find('[data-index="' + orId[i] + '"] a').height(hei);
                    });
                    orId.length = 0;
                    hei = 0;
                    idS = idE + 1;
                    idE = idE + a;
                }
            });
            orId.length = 0;
            hei = 0;
            idS = 1;
            idE = a;
        } else {
            that.find('.zgh-menuItem').each(function (index, item) {
                var thats = $(this);
                if (thats.data('index') >= idS && thats.data('index') <= idE) {
                    orId.push(thats.data('index'));
                    if (thats.find('a').height() > hei) {
                        hei = thats.find('a').height();
                    }
                }
                if (orId.length == a) {
                    $.each(orId, function (i) {
                        that.find('[data-index="' + orId[i] + '"] a').height(hei);
                    });
                    orId.length = 0;
                    hei = 0;
                    idS = idE + 1;
                    idE = idE + a;
                }
            });
            orId.length = 0;
            hei = 0;
            idS = 1;
            idE = a;
        }
    });
    $('.zgh-products .zgh-megaMenuPro > div,.zgh-menuItem').removeAttr('style');
    $('.zgh-hidden').each(function () {
        var that = $(this);
        if (that.data('hidden') == 'false') {
            that.css('display', 'block');
        } else {
            that.css('display', 'none');
        }
    });
    $('.zgh-bundles .zgh-menuItem a,.zgh-marketplace .zgh-menuItem a').css('height', '');
    $('.zgh-products .zgh-megaMenuInner').css('height', '');
    var boxHei = 0;
    $('.zgh-megaMenuPro > div').each(function () {
        var that = $(this);
        if (that.innerHeight() > boxHei) {
            boxHei = that.innerHeight();
        }
    });
    $('.zgh-products .zgh-megaMenuInner').css('height', boxHei + 25);
}

function zGlobalHeaderResize(wW, wH) {
    var zghTrans = 0;
    var menuCatBundle = [];
    if (wW < 768) {
        minHeiDes = true;
        minHeiTab = true;
        //Hamburger mobile menu
        $(document).on(selectEvents, '.zgh-menu', function (e) {
            e.stopPropagation();
            var that = $(this);
            if (that.hasClass('active')) {
                that.removeClass('active');
                $('.zgh-nav').slideUp();
                $('body').removeClass('lock');
            } else {
                that.addClass('active');
                $('.zgh-nav').slideDown(400, function () { $('.zgh-nav').css('overflow', 'scroll'); });
                $('body').addClass('lock');
            }
        });
        //$('.zgh-nav').css('height', wH - 50);
        //Global Menu Event
        $('.zgh-products .zgh-megaMenuInner').css('height', '');
        $('.zgh-megaMenuCat li').removeAttr('style');
        $(document).off('mouseenter touchstart click', '.zgh-megaMenu > a');
        $(document).off('mouseleave', '.zgh-megaMenu');
        $(document).on(selectEvents, '.zgh-megaMenu > a', function (e) {
            e.stopPropagation();
            var that = $(this);
            if (that.parent().hasClass('active')) {
                that.next().slideUp();
                that.parent().removeClass('active');
            } else {
                $('.zgh-megaMenuBox').slideUp();
                $('.zgh-megaMenu').removeClass('active');
                that.next().slideDown();
                that.parent().addClass('active');
            }
        });
        //Product Megamenu Event
        $(document).off('mouseenter touchstart', '[data-list]');
        $(document).on(selectEvents, '.zgh-megaMenuCat > li > span', function (e) {
            e.stopPropagation();
            var that = $(this).parent();
            if (that.hasClass('active')) {
                that.find('[data-category]').slideUp().removeClass('active');
                that.removeClass('active');
                lastCatActive = that.data('list');
            } else {
                $('.zgh-megaMenuCat > li').removeClass('active');
                $('[data-category]').slideUp().removeClass('active');
                that.find('[data-category]').slideDown().addClass('active');
                that.addClass('active');
                lastCatActive = that.data('list');
            }
        });
        //Append Menu box to category
        $('[data-category]').each(function () {
            var that = $(this);
            if ($('.zgh-megaMenuPro > div').length) {
                that.appendTo('[data-list="' + that.data('category') + '"]');
            }
        });
        if (defCatActive) {
            $('[data-category="1"]').css('display', 'block');
            defCatActive = false;
        } else {
            $('[data-category="' + lastCatActive + '"]').css('display', 'block');
        }
        $('.zgh-bundles').removeClass('active-visible');
        $('.zgh-bundles > div').css('display', '');
        //Product box position change
        $('.zgh-menuItem').css('overflow', '');
        $('.zgh-menuItem a').css('height', '');
        $('[data-category]').each(function (index, item) {
            var that = $(this);
            if (vendMobile) {
                that.find('.zgh-menuItem').each(function (index, item) {
                    var thats = $(this);
                    that.find('[data-index="' + (index + 1) + '"]').appendTo(that);
                });
            }
        });
        vendMobile = false;
        vendTab = true;
        vendDesk = true;
    } else {
        //Bundle default active on resize
        if (wW > 1199) {
            if ($('.zgh-b-bundles').hasClass('active')) {
                $('.zgh-b-bundles').removeClass('active');
                $('.zgh-bundles').removeClass('active');
                lastCatActive = 1;
            }
        }
        //Hamburger mobile menu
        $('.zgh-nav').removeAttr('style');
        $('.zgh-menu').removeClass('active');
        $(document).off(selectEvents, '.zgh-menu');
        //Global Menu Event
        $('.zgh-megaMenu').removeClass('active');
        $('.zgh-megaMenuBox').removeAttr('style');
        $(document).off(selectEvents, '.zgh-megaMenu > a');
        if (/Android|webOS|iPad|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(document).off('mouseenter', '.zgh-megaMenu > a');
            $(document).off('mouseleave', '.zgh-megaMenu');
            $(document).off(selectEvents, '.zgh-megaMenu > a');
            $(document).on(selectEvents, '.zgh-megaMenu > a', function (e) {
                e.stopPropagation();
                var that = $(this);
                if (!that.parent().hasClass('active')) {
                    $('.zgh-megaMenu').removeClass('active');
                    that.parent().addClass('active');
                    $('.zgh-megaMenuCat li').removeAttr('style');
                    $('.zgh-megaMenuCat li').each(function () {
                        var thatElm = $(this);
                        thatElm.css({ 'transition-delay': zghTrans + 'ms', '-webkit-transition-delay': zghTrans + 'ms' });
                        zghTrans = zghTrans + 120;

                    });
                    zghTrans = 0;
                } else {
                    that.parent().removeClass('active');
                    $('.zgh-megaMenuCat li').removeAttr('style');
                }
            });
        } else {
            $(document).off(selectEvents, '.zgh-megaMenu > a');
            $(document).on('mouseenter', '.zgh-megaMenu > a', function (e) {
                e.stopPropagation();
                var that = $(this);
                that.parent().addClass('active');
                $('.zgh-megaMenuCat li').removeAttr('style');
                $('.zgh-megaMenuCat li').each(function () {
                    var thatElm = $(this);
                    thatElm.css('transition-delay', zghTrans + 'ms');
                    zghTrans = zghTrans + 120;

                });
                zghTrans = 0;
            });
            $(document).on('mouseleave', '.zgh-megaMenu', function (e) {
                e.stopPropagation();
                var that = $(this);
                that.removeClass('active');
                $('.zgh-megaMenuCat li').removeAttr('style');
            });
        }
        //Product Megamenu Event
        $('[data-list="' + lastCatActive + '"]').addClass('active');
        $(document).off(selectEvents, '.zgh-megaMenuCat > li > span');
        $(document).on('mouseenter touchstart', '[data-list]', function (e) {
            e.stopPropagation();
            var that = $(this);
            $('[data-list]').removeClass('active');
            $('[data-category]').removeClass('active').removeAttr('style');
            that.addClass('active');
            $('[data-category=' + that.attr('data-list') + ']').addClass('active');
            lastCatActive = that.attr('data-list');
            defCatActive = false;
            //Bundle active
            if (wW > 1199) {
                if (that.hasClass('active')) {
                    if (that.attr('data-bundle').length > 0) {
                        menuCatBundle = [];
                        menuCatBundle.push(that.data('bundle').split(','));
                    }
                }
                if (menuCatBundle.length > 0) {
                    $('.zgh-bundles > div').css('display', 'none');
                    $.each(menuCatBundle[0], function (index, item) {
                        getBundleClass = item;
                        getBundleClass = getBundleClass.replace(/&+/g, '-').toLowerCase();
                        getBundleClass = getBundleClass.replace(/\s+/g, '').toLowerCase();
                        $('.zgh-b-' + getBundleClass).css('display', 'block');
                    });
                    $('.zgh-bundles').addClass('active-visible');
                    menuCatBundle = [];
                } else {
                    $('.zgh-bundles').removeClass('active-visible');
                    $('.zgh-bundles > div').css('display', '');
                }
            }
        });
        //Append Menu box from category
        $('[data-category]').removeAttr('style');
        $('[data-category]').each(function () {
            var that = $(this);
            if ($('.zgh-megaMenuCat > li > div').length) {
                that.appendTo('.zgh-megaMenuPro');
            }
        });
        $('[data-category="' + lastCatActive + '"]').addClass('active');
        //Product box position change
        $('.zgh-menuItem').css('overflow', '');
        if (wW > 767 && wW < 1200 && vendTab) {
            $('[data-category]').each(function (index, item) {
                var that = $(this);
                that.find('.zgh-menuItem').each(function (indexs, item) {
                    var thats = $(this);
                    var thatItem = that.find('[data-index="' + (indexs + 1) + '"]');
                    split = indexs % 3;
                    if (split == 0) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-1').append(thatItem);
                    } else if (split == 1) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-2').append(thatItem);
                    } else if (split == 2) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-3').append(thatItem);
                    }
                });
                $('.zmenu-moreBtn').removeClass('active').text('More products');
                $('.zmenu-moreBtn').css('display', 'inline-block');
            });
            vendTab = false;
            vendMobile = true;
            vendDesk = true;
        } else if (wW > 1199 && vendDesk) {
            $('[data-category]').each(function (index, item) {
                var that = $(this);
                that.find('.zgh-menuItem').each(function (indexs, item) {
                    var thats = $(this);
                    var thatItem = that.find('[data-index="' + (indexs + 1) + '"]');
                    split = indexs % 4;
                    if (split == 0) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-1').append(thatItem);
                    } else if (split == 1) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-2').append(thatItem);
                    } else if (split == 2) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-3').append(thatItem);
                    } else if (split == 3) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-4').append(thatItem);
                    }
                });
                $('.zmenu-moreBtn').removeClass('active').text('More products');
                $('.zmenu-moreBtn').css('display', 'inline-block');
            });
            vendDesk = false;
            vendMobile = true;
            vendTab = true;
        }
        if (wW > 767 && wW < 1200) {
            //Products Box Min-height
            if (minHeiTab) {
                headerMinHeight(3);
                minHeiTab = false;
                minHeiDes = true;
            }
        } else if (wW > 1199) {
            //Products Box Min-height
            if (minHeiDes) {
                headerMinHeight(4);
                minHeiDes = false;
                minHeiTab = true;
            }
        }
        //Bundle default active on resize
        if (wW > 1199) {
            $('[data-bundle]').each(function () {
                var that = $(this);
                if (that.hasClass('active')) {
                    if (that.attr('data-bundle').length > 0) {
                        menuCatBundle = [];
                        menuCatBundle.push(that.data('bundle').split(','));
                    }
                }
            });
            if (menuCatBundle.length > 0) {
                $('.zgh-bundles > div').css('display', 'none');
                $.each(menuCatBundle[0], function (index, item) {
                    getBundleClass = item;
                    getBundleClass = getBundleClass.replace(/&+/g, '-').toLowerCase();
                    getBundleClass = getBundleClass.replace(/\s+/g, '').toLowerCase();
                    $('.zgh-b-' + getBundleClass).css('display', 'block');
                });
                $('.zgh-bundles').addClass('active-visible');
                menuCatBundle = [];
            } else {
                $('.zgh-bundles').removeClass('active-visible');
                $('.zgh-bundles > div').css('display', '');
            }
        }
    }
    //User Account
    $('.zgh-userPanel').removeClass('active');
}
//Call init on window resize & scroll 

function initGlobalHeaderResize() {
    var wW = wWidth();
    var wH = $(window).height();
    zGlobalHeaderResize(wW, wH);
    setDevice(wW, wH);

    //Positioning New label
    $('.zgh-menuItem').each(function () {
        var that = $(this);
        if (that.find('span').length) {
            offText = that.find('p').text().length;
            if (offText < 14) {
                if (wW > 767 && wW < 1025) {
                    if (currentUrlLang == 'ar') {
                        that.find('span').css({ 'right': (offText * 8) + 86, 'top': 30, 'left': 'inherit' });
                    } else {
                        that.find('span').css({ 'left': (offText * 8) + 70, 'top': 30 });
                    }
                } else if (wW > 1024) {
                    if (currentUrlLang == 'ar') {
                        if (that.is(':first-of-type')) {
                            that.find('span').css({ 'right': (offText * 8) + 121, 'top': 30, 'left': 'inherit' });
                        } else {
                            that.find('span').css({ 'right': (offText * 8) + 106, 'top': 30, 'left': 'inherit' });
                        }
                    } else {
                        if (that.is(':first-of-type')) {
                            that.find('span').css({ 'left': (offText * 8) + 115, 'top': 30 });
                        } else {
                            that.find('span').css({ 'left': (offText * 8) + 100, 'top': 30 });
                        }
                    }
                }
            }
        }
    });

    var cachedWidth = wWidth(),
        cachedHeight = $(window).height();
    $(window).resize(function () {
        var newWidth = wWidth();
        var newHeight = $(window).height();
        if (newWidth != cachedWidth || newHeight != cachedHeight) {
            var wW = wWidth();
            var wH = $(window).height();
            zGlobalHeaderResize(wW, wH);
            setDevice(wW, wH);
            cachedWidth = newWidth;
            cachedHeight = newHeight;
            //Positioning New label
            $('.zgh-menuItem').each(function () {
                var that = $(this);
                if (that.find('span').length) {
                    offText = that.find('p').text().length;
                    if (offText < 14) {
                        if (wW > 767 && wW < 1025) {
                            if (currentUrlLang == 'ar') {
                                that.find('span').css({ 'right': (offText * 8) + 86, 'top': 30, 'left': 'inherit' });
                            } else {
                                that.find('span').css({ 'left': (offText * 8) + 70, 'top': 30 });
                            }
                        } else if (wW > 1024) {
                            if (currentUrlLang == 'ar') {
                                if (that.is(':first-of-type')) {
                                    that.find('span').css({ 'right': (offText * 8) + 121, 'top': 30, 'left': 'inherit' });
                                } else {
                                    that.find('span').css({ 'right': (offText * 8) + 106, 'top': 30, 'left': 'inherit' });
                                }
                            } else {
                                if (that.is(':first-of-type')) {
                                    that.find('span').css({ 'left': (offText * 8) + 115, 'top': 30 });
                                } else {
                                    that.find('span').css({ 'left': (offText * 8) + 100, 'top': 30 });
                                }
                            }
                        }
                    }
                }
            });
        }
    });

    $(window).trigger('resize');
    $(window).on('scroll', function () {
        var wW = wWidth();
        $('.zgh-userPanel,.zgh-localization').removeClass('active');
        if (wW <= 767 && $('.ztop-slide-mobile-menu').length > 0) {
            if ($(window).scrollTop() >= 450) {
                $('.ztop-slide-mobile-menu').addClass('onscroll');
            } else {
                $('.ztop-slide-mobile-menu').removeClass('onscroll');
            }
        }
    });
}
//Set Device Condition
var vendMobile = true;
var vendTab = true;
var vendDesk = true;
var minHeiTab = true;
var minHeiDes = true;
var defCatActive = true;
var lastCatActive = 0;
var devOrientPor = true;
var devOrientLan = true;
$(document).ready(function () {
    zGlobalHeader();
});

/*------------------------------------Global Header Ends--------------------------------------*/
