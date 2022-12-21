//Please put your answer here
$(function(){

    $('.signup-modal-wrapper').css('display','none');

    $('.signup-show').click(function(){
        $('#signup-modal').show();
    });

    $('#close-modal').click(function(){
        $('#signup-modal').hide();
    });
});