$(document).ready(function(){
    $(document).on('click', '.content-bookmark', function() {
        if ($(this).attr('disabled'))
            return false;
        var $button = $(this);
        var action = 'add';
        if (!$button.hasClass('active'))
            action = 'remove';
        $button.attr('disabled', true);
        $.get((languageTagInPath ? ('/'+languageTag) : '')+ '/'+$button.data('content-type')+'/bookmark/'+$button.data('content-id')+'/csrf:'+$button.data('csrf')+'/action:'+action+'/', function() {
            if (!$button.parent().hasClass('section-header')) {
                if (action == 'remove')
                    $button.closest('div.content').css('opacity', '0.3');
                else
                    $button.closest('div.content').css('opacity', '1');
            }
            $button.removeAttr('disabled');
        });
    });
});