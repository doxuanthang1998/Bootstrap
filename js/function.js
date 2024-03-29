$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'hover focus'
    });
    $('[data-toggle="tooltip"]').tooltip();

    $('#top10').on('hide.bs.collapse', function () {
        var btn = $('.btn-collapse');
        btn.removeClass('glyphicon-minus');
        btn.addClass('glyphicon-plus');
    })
    $('#top10').on('show.bs.collapse', function () {
        var btn = $('.btn-collapse');
        btn.removeClass('glyphicon-plus');
        btn.addClass('glyphicon-minus');
    });
    $('#nav-test').affix({
        offset:{
            top:$('#nav-test').offset().top -70,
            bottom: function () {
                return $('.qh-footer').outerHeight(true) + 20;
            }
        }
    })
});
