// Scroll to block
$(document).ready(function(){
    $('.nav-item').click(function(event){
        event.preventDefault();
        let target_top= $('section[id="'+this.href.split("#")[1]+'"]').offset().top;
        $('html, body').animate({
            scrollTop:target_top
        }, 'slow');
    });
    $('.home').click(function(event){
        event.preventDefault();
        let target_home= $('header[id="'+this.href.split("#")[1]+'"]').offset().top;
        $('html, body').animate({
            scrollTop:target_home
        }, 'slow');
    });
});