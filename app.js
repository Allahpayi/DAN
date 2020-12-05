$(document).ready(function () {
    $("nav .right-menu .menu-bottom li:last-child input").focus(function (e) { 
        e.preventDefault();
        $(this).animate({
            'width':'100%',
        },500);
        
    });
    $("nav .right-menu .menu-bottom li:last-child input").blur(function (e) { 
        e.preventDefault();
        $(this).animate({
            'width':'60%',
        },500);
        
    });
    $('#region').change(function (e) { 
        e.preventDefault();
        $('#city').removeAttr('disabled');
    });
});
