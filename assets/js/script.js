$(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.about-slider__arrows-item.right',
            prevEl: '.about-slider__arrows-item.left',
        },
    })
    $('.callback-button').click(function(){
        $('.callback-form').fadeIn();
        $('.overlay').fadeIn();
    });
    $('.close-button, .overlay').click(function(){
        $('.callback-form').fadeOut();
        $('.overlay').fadeOut();
    });
    $('.callback-form form').submit(function(){
        $.ajax({
            url: "/assets/ajax-mail.php",
            type: 'POST',
            dataType: 'html',
            data: $(this).serialize(),
            context: document.body,
            success: function(result){
                console.log(result);
            }
        });

        return false;
    });
})
