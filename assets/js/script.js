$(function () {
    svg4everybody();
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.about-slider__arrows-item.right',
            prevEl: '.about-slider__arrows-item.left',
        },
    })
    $(".input-phone").inputmask("+7 (999) 999-99-99");
    $('.callback-button').click(function(){
        $('.callback-form').fadeIn();
        $('.overlay').fadeIn();
    });
    $('.close-button, .overlay').click(function(){
        $('.callback-form').fadeOut();
        $('.overlay').fadeOut();
    });
    $('.callback-form form').submit(function(){
        var container = $(this).parents('.callback-form__wrapper');
        $.ajax({
            url: "/assets/ajax-mail.php",
            type: 'POST',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(result){
                container.html('<div class="thank-text">'+result+'</div>');
            }
        });
        return false;
    });
    $('.reserve-form form').submit(function(){
        var container = $(this).parents('.reserve-form');
        $.ajax({
            url: "/assets/ajax-mail.php",
            type: 'POST',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(result){
                container.html('<div class="thank-text">'+result+'</div>');
            }
        });
        return false;
    });
})
