// Scroll to block
$(document).ready(function(){
    $('.nav-item').on('click', function(event){
        event.preventDefault();
        let target_top= $('section[id="'+this.href.split("#")[1]+'"]').offset().top;
        $('html, body').animate({
            scrollTop:target_top
        }, 'slow');
    });
    $('.home').on('click', function(event){
        event.preventDefault();
        let target_home= $('header[id="'+this.href.split("#")[1]+'"]').offset().top;
        $('html, body').animate({
            scrollTop:target_home
        }, 'slow');
    });

    //Burger-menu (window < 1024px)
    $('.burger_menu').on('click', function() {
        $(this).toggleClass('burger-active');
       $('.head_menu').toggleClass('head_menu-active');
    });


    // Dropdown menu
    $('.main-menu_list').on('click', function(e) {                      // sorry, i did click
        e.preventDefault();
       $('.drop_menu').show(1000).on('mouseleave', function() {
           $(this).hide(1000);
       });
       $('.drop_menu-item').on('click', function(e) {
           e.preventDefault();
           $('.drop_menu-last').show(1000).on('mouseleave', function() {
               $(this).hide(1000);
           })
       })

    });

    // Redid from JS to jQuery
    $('.nav-item, .home').each(function() {
        $(this).on('focusin', function () {
            $(this).toggleClass('menu_active');
        });
        $(this).on('blur', function () {
            $(this).toggleClass('menu_active');
        });
    });


    // Animate progress bar
    let windowHeight = $(window).height();

    $(document).on('scroll', function() {
        let progress = $('.progress-bar');
        $(progress).each(function() {
            let max = $(this).data('max');
            let self = $(this),
                height = self.offset().top + self.height();
            if ($(document).scrollTop() + windowHeight >= height) {
                self.css('width', max);
            }
        });
    });

});