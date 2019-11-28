//fade out page after scroll
var element = $('#fade-out');
$(window).on('scroll', function () {
    var st = $(this).scrollTop();
    element.css({
        'opacity': 1 - st / 900
    });
});

//collapse and expand drop down lists
$(".subheader").click(function (e) {
    e.preventDefault();

    $subheader = $(this);
    //getting the next element
    $content = $subheader.next();
    //open up the content needed - toggle the slide - if visible, slide up, if not slide down
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
    });

});