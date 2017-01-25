$(document).ready(function(){
    $('#user-settings-adult-confirm').click(function() {
        var $container = $(this).parent();
        $container.html('<div class="loading"><img src="/assets/9a0d4/images/ajax-wide.gif" width="200" height="19" /></div>');
        $.post((languageTagInPath ? ('/'+languageTag) : '')+'/user/settings/csrf:'+$(this).data('csrf')+'/', 'data[user][settings][adult]=1', function(response) {
            $container.addClass('hide').next().removeClass('hide');
        }).always(function() {
            location.reload(false);
        });
    });
    $('#user-settings-adult-decline').click(function() {
        $(this).parent().parent().remove();
    });
});