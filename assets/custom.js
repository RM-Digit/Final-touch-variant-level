
jQuery(document).ready(function ($) {
    var choosenVariant;
    var selectedvariant_title;
    var activeFlavor;
    
    $('.custom-product-title h1').click((e)=>{
        e.stopPropagation();
        $(e.target).css("cursor","pointer")
       var url = $(e.target).parents(".item-content").find("a").attr("href");
        window.location.href =url;
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) $('.qsb-wrapper.qsb-wrapper--desktop-top').show();
        else $('.qsb-wrapper.qsb-wrapper--desktop-top').hide();
        if($(window).width()< 600){
            if($(window).scrollTop() > 1100) $('.qsb-mobile-wrapper').show();
            else $('.qsb-mobile-wrapper').hide();
            if($(window).scrollTop() > 300) $('.templateCart .mobile-total-price').css("display","block");
            else $('.templateCart .mobile-total-price').css("display","none");
          
        }
        if (window.location.href.includes("bulk-jerky-of-the-month-club") ) {
            $('#qikify-stickycart-app').hide();
        }
    });
    
    if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)){
        console.log("Safari Browser");
        $(window).resize(function(){
            $(".image-pos img").height($(".image-pos img").width());
          });
        var imageHeightAdjust = setInterval(() => {
            
            if ($(".image-pos img").height() == $(".image-pos img").width()) {
                clearInterval(imageHeightAdjust);
            } else {
                $(".image-pos img").height($(".image-pos img").width());
            }
    
        }, 10);
    }
    
    
    $('div#home-banner-1603951435526').hover(function () {
        $('div#home-banner-1603951435526 .owl-nav').show();

    }, function () {
        $('div#home-banner-1603951435526 .owl-nav').hide();
 
    })
    $('div#product-grid-1601015265701').hover(function () {
        $('div#product-grid-1601015265701 .owl-nav').show();

    }, function () {
        $('div#product-grid-1601015265701 .owl-nav').hide();
 
    })
    $('div#list-collection-1601452688151').hover(function () {
        $('div#list-collection-1601452688151 .owl-nav').show();
    }, function () {
        $('div#list-collection-1601452688151 .owl-nav').hide();
    })
    $('div#shopify-section-1601655632258').hover(function () {
        $('div#shopify-section-1601655632258 .owl-nav').show();
    }, function () {
        $('div#shopify-section-1601655632258 .owl-nav').hide();
    })
    $('.main-slider .owl-nav').hover(function () {
        $('.main-slider .owl-nav').show();
    }, function () {
        $('.main-slider .owl-nav').hide();
    })
    $('div#related_item').hover(function () {
        $('div#related_item .owl-nav').show();
    }, function () {
        $('div#related_item .owl-nav').hide();
    })


    $('.custom-product-title').parent('.element-wrap ').css('position', 'absolute').css('top', '45%').css('left', '5%').css('right', '5%');
    $('.custom-product-title h1').css('color','#fff!important');
    $(".page-product .product-content-wrapper .group-cw .swatch input").click(() => {

        $(this).next().css("background", "#212121");
        $(this).next().css("color", "#FAFAFA");
    })

    $('li.search-icon.search-icon-desktop').click(() => {
        if ($('.header-container.layout-full.style-27 .container').css('display') == "none") {
            $("body").scrollTop(0);
            $('.header-container.layout-full.style-27 .container').slideDown();

        } else {
            $('.header-container.layout-full.style-27 .container').slideUp();
        }
    })
    $('#mobile-search-btn').click(() => {
        if ($('div#noeffect').css('display') == "none") {
            $("body").scrollTop(0);
            $('div#noeffect').slideDown();

        } else {

            $('div#noeffect').slideUp();
        }
    })
    
    $('.swatch-0 .swatch-element input').click((e) => {
       
        e.stopPropagation();
        if ($(e.target).parent().hasClass('soldout')) {
            console.log("Soldout product");
        } else {
           
            var optVal = $(e.target).val();
            $('.product-variant-title').text(optVal);
            /*update thumb image*/
            $('.variant-title').text(optVal);
            var thumbnailImageUpdate = $.trim(optVal.toLowerCase());
            if (thumbnailImageUpdate.includes('&')) thumbnailImageUpdate = thumbnailImageUpdate.replace(/\s+&+\s/g, ' ');
            if (thumbnailImageUpdate.includes(' ')) thumbnailImageUpdate = thumbnailImageUpdate.replace(/\s/g, "-");

            $(".slider-thumbs-00 .slick-slide img").each(function (index) {
                if ($(this).hasClass(thumbnailImageUpdate)) {
                    console.log("active element")
                    $(this).parents('.slick-slide').show();
                } else {

                    $(this).parents('.slick-slide').hide()
                }
            });
            activeFlavor = $.trim(optVal.toLowerCase());
            console.log("active flavor",activeFlavor);
            if (activeFlavor.includes('&')) activeFlavor = activeFlavor.replace(/\s+&+\s/g, ' ');
            if (activeFlavor.includes(' ')) activeFlavor = activeFlavor.replace(/\s/g, "-");
            if (activeFlavor.includes('.')) activeFlavor = activeFlavor.replace(/\./g, "-");
            var checkIndex=0,first=0;
            $(".swatch-1 .swatch-element").each(function () {
               
                if ($(this).hasClass(activeFlavor)) {
                    $(this).show();
                    
                    if ($(this).hasClass('available')) {
                        var index_outofstock = 0;
                        $(this).find('label').removeClass('bkchange-black');
                        var sizeValue = $.trim($(this).find(':radio').val().toLowerCase()).replace(/\s/g, "-");
                        console.log(sizeValue);
                        console.log(choosenVariant);
                        if (sizeValue == choosenVariant) {
                            console.log('has choosed');
                            $(this).find('label').addClass('bkchange-black');
                         } 
                    
                       var waitTextChange = setInterval(() => {
                        checkIndex ++;
                        
                           if($('#add-to-cart').text() !== "Add to cart"){
                                index_outofstock ++;
                                $(this).find(':radio').click();
                                $(`img.${activeFlavor}`).click()
                                if($('#add-to-cart').text() !== "Add to cart"){
                                    $(".product-form.product-action.variants")[0].reset();
                                    console.log(activeFlavor);
                                    $(`#swatch-0-${activeFlavor}`).click();
                                    $(this).find(':radio').click();
                                }
                                
                                clearInterval(waitTextChange);
                           }
                           else {
                               if(checkIndex == 300) clearInterval(waitTextChange);
                           }
                       }, 10);
                       
                    }
                } else {
                    $(this).hide();
                }
            });
            /*variant option show/none*/
            selectedvariant_title = activeFlavor + '-' + choosenVariant;
            console.clear()
            console.log("choose variant",selectedvariant_title);
            if (choosenVariant == "") selectedvariant_title = activeFlavor
            $('variantoptions').each( function (index, variantoptions ) {
                if( $(variantoptions).hasClass(selectedvariant_title) ){
                    $(variantoptions).removeClass('hide-variant').addClass('show-variant');
                } else {
                    $(variantoptions).removeClass('show-variant').addClass('hide-variant');
                }
            } )
        }

    });
    $('.swatch-1 .swatch-element').click((e) => {
        e.stopPropagation();
       
        if ($(e.target).parent().hasClass('soldout')) {
            console.log("Soldout product");
        } else {
            $(this).find('label').removeClass('bkchange-black');
            choosenVariant = $.trim($(e.target).val().toLowerCase()).replace(/\s/g, "-");
            if (choosenVariant.includes('.')) choosenVariant = choosenVariant.replace(/\./g, "-");
        }
        selectedvariant_title = activeFlavor + '-' + choosenVariant;
         console.log(selectedvariant_title);
        $('variantoptions').each( function ( index, variantoptions ) {
            if( $(variantoptions).hasClass(selectedvariant_title) ){
                $(variantoptions).removeClass('hide-variant').addClass('show-variant');
            } else {
                $(variantoptions).removeClass('show-variant').addClass('hide-variant');
            }
        } )

    });
    if (window.location.href.includes("dried-fruit") || window.location.href.includes("nuts") ) {
        $('.jerky').hide();
    }
    
    if (window.location.href.includes("holiday-bundles") ) {
        $('button.prod-desc').addClass("active");
        $(".panel.prod-desc").css("display","block");
    }
    if (window.location.href.includes("bulk-jerky-of-the-month-club") ) {
       $('#qikify-stickycart-app').hide();
    }
    if (window.location.href.includes("cart")) {
        $('div#section-newsletter-footer').hide();
          $('#shopify-section-1600941026513').hide();
          $('div#shopify-section-1600941026513').hide();
          $('div#insta-feed').hide();
          $('div#shopify-section-1600941026513').hide()
        // $('.upsell-products').hide();
    }
   
    if (window.location.href.includes("samplers")) {
        $(".jerky_recipes").hide();
        $(".nutri").hide();
    }
    if (window.location.href.includes("product") && !window.location.href.includes("bulk-jerky-of-the-month-club")) {
        
        
        var waitLoadSwatch = setInterval(() => {
  
            activeFlavor = $.trim(localStorage.getItem("thumbslider_active_class").toLowerCase());
            var activeSize = $.trim(localStorage.getItem("activeSize").toLowerCase());
            if (activeFlavor.includes('&')) activeFlavor = activeFlavor.replace(/\s+&+\s/g, ' ');
            if (activeFlavor.includes(' ')) activeFlavor = activeFlavor.replace(/\s/g, "-");
            if (activeSize.includes(' ')) activeSize = activeSize.replace(/\s/g, "-");
            if (activeSize.includes('.')) activeSize = activeSize.replace(/\./g, "-");
            choosenVariant = activeSize;
            if ($('.slider-thumbs-00 .slick-slide').length != 0) {
                $(".swatch-1 .swatch-element").each(function (index) {
                    if ($(this).hasClass(activeFlavor)) {
                        $(this).show();
                        if ($(this).hasClass('available')) {
                            $(this).find('label').removeClass('bkchange-black');
                            var sizeValue = $.trim($(this).find(':radio').val().toLowerCase()).replace(/\s/g, "-");
                            console.log(sizeValue);

                            if (sizeValue == choosenVariant) {
                                console.log('has choosed');
                                $(this).find('label').addClass('bkchange-black');
                            }
                        }
                    } else {
                        $(this).hide();
                    }
                });
            }

            clearInterval(waitLoadSwatch);
        }, 10);

        var waitLoadSlick = setInterval(() => {
            var thumbslider_active_class = $.trim(localStorage.getItem("thumbslider_active_class").toLowerCase());

            if (thumbslider_active_class.includes('&')) thumbslider_active_class = thumbslider_active_class.replace(/\s+&+\s/g, ' ');
            if (thumbslider_active_class.includes(' ')) thumbslider_active_class = thumbslider_active_class.replace(/\s/g, "-");
            if ($('.slider-thumbs-00 .slick-slide').length != 0) {

                $(".slider-thumbs-00 .slick-slide img").each(function () {
                    if ($(this).hasClass(thumbslider_active_class)) {
                        console.log("active element")
                        // $(this).show();
                        $(this).parents('.slick-slide').show();

                    } else {
                        // $(this).hide();
                        $(this).parents('.slick-slide').hide()
                    }
                });
                $('.slider-thumbs-01').slick('slickGoTo', 0);
                clearInterval(waitLoadSlick);
            }
        }, 10);
        // var waitLoadSlick2 = setInterval(() => {
        //     var flavor_main = $.trim(localStorage.getItem("thumbslider_active_class").toLowerCase());

        //     if (flavor_main.includes('&')) flavor_main = flavor_main.replace(/\s+&+\s/g, ' ');
        //     if (flavor_main.includes(' ')) flavor_main = flavor_main.replace(/\s/g, "-");
        //     if ($('.slider-for-01 .slick-slide').length != 0) {

        //         $(".slider-for-01 .slick-slide img").each(function () {
        //             if ($(this).hasClass(flavor_main)) {
        //                 console.log("active element")
        //                 // $(this).show();
        //                 $(this).parents('.slick-slide').show();

        //             } else {
        //                 // $(this).hide();
        //                 $(this).parents('.slick-slide').hide()
        //             }
        //         });
        //         $('.slider-thumbs-01').slick('slickGoTo', 0);
        //         clearInterval(waitLoadSlick2);
        //     }
        // }, 10);
        $('.slider-thumbs-01').on('afterChange', function () {
            var dataId = $('.slick-current').attr("data-slick-index");
            console.log($('.slider-thumbs-01 .slick-track').css('transform'));
            var myElement = document.querySelector('.slider-thumbs-01 .slick-track');
            var style = window.getComputedStyle(myElement);
            var matrix = new WebKitCSSMatrix(style.webkitTransform);
            console.log('translateY: ', Math.abs(matrix.m42));
            $('.slider-thumbs-01 .slick-track').css('margin-top',   Math.abs(matrix.m42) + 'px');
        });
    }

});