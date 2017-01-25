$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('#mod-media img').ready(function() {
        $('#mod-media a.hidden').removeClass('hidden');
    });
    $('#report-parameters').click(function(e) {
        e.preventDefault();
        $('#modal').html('<div class="loading"><img src="/assets/9a0d4/images/ajax-wide.gif" width="200" height="19" /></div>').modal('show').load((languageTagInPath ? ('/'+languageTag) : '') + '/report/parameters/'+$(this).data('mod-id')+'/');
    });
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