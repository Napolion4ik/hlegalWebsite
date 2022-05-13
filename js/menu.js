$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

$(document).ready(function(){
        $('.data__btn').on('click', function(){
                $('.show').toggle();

        });
})
$(document).ready(function(){
        $('.consistent').on('click', function(){
                $('.customer-oriented').toggle();

        });
})

