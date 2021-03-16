$(document).ready(function() {
    $('.cardlar li div').click(function() {

        $('.cardlar li div').removeClass('active');

        $(this).addClass('active');
    });
});