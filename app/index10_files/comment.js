$(document).ready(function(){
    function BBCodeEmoticons() {
        if (!$('.BBCodeEmoticons').length) {
            var $content = $('<div/>').addClass('BBCodeEmoticons').addClass('BBCodeDrop').hide();
            var html = [];
            var emoticons = {
                ':)':'emoticon_smile',
                '>:':'emoticon_evilgrin',
                '8-)':'emoticon_happy',
                ':D':'emoticon_grin',
                '<3':'heart',
                ':(':'emoticon_unhappy',
                ':O':'emoticon_surprised',
                ':P':'emoticon_tongue',
                ';)':'emoticon_wink'
            };
            var i=0;
            for (var x in emoticons) {
                if (i%3==0) {
                    html.push('</div>');
                    html.push('<div class="BBCodeEmoticonsColumn">');
                }
                html.push('<a href="#" data-emoticon="'+x+'"><img src="/assets/vendor/images/bbcode/icons/'+emoticons[x]+'.png" /></a>');
                i++;
            }
            $($content).html(html.join('')).find('a')
                .click(function(e) {
                    e.preventDefault();
                    $.BBCode({replaceWith:$(this).data('emoticon')});
                    $($content).hide();
                });
            return $($content).appendTo('body');
        } else
            return $('.BBCodeEmoticons');
    }
    function buildCommentEditor() {
        var strings = {"en":{"bold":"Bold","italic":"Italic","underlined":"Underlined","striked":"Striked","toleft":"Align left","center":"Align center","toright":"Align right","smiles":"Smiles","link":"Link","hidden":"Hidden text","spoiler":"Spoiler","quote":"Quote","list":"Marked list","numlist":"Numerated list","video":"Video","cleanbb":"Clean from BB-codes","preview":"Preview"},"ru":{"bold":"\u0416\u0438\u0440\u043d\u044b\u0439","italic":"\u041a\u0443\u0441\u0440\u0438\u0432","underlined":"\u041f\u043e\u0434\u0447\u0451\u0440\u043a\u043d\u0443\u0442\u044b\u0439","striked":"\u0417\u0430\u0447\u0451\u0440\u043a\u043d\u0443\u0442\u044b\u0439","toleft":"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e","center":"\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443","toright":"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e","smiles":"\u0421\u043c\u0430\u0439\u043b\u0438\u043a\u0438","link":"\u0421\u0441\u044b\u043b\u043a\u0430","hidden":"\u0421\u043a\u0440\u044b\u0442\u044b\u0439 \u0442\u0435\u043a\u0441\u0442","spoiler":"\u0421\u043f\u043e\u0439\u043b\u0435\u0440","quote":"\u0426\u0438\u0442\u0430\u0442\u0430","list":"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a","numlist":"\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a","video":"\u0412\u0438\u0434\u0435\u043e","cleanbb":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043e\u0442 BB-\u043a\u043e\u0434\u043e\u0432","preview":"\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"},"fr":{"bold":"Gras","italic":"Italique","underlined":"Souligne","striked":"Barr\u00e9","toleft":"Aligner \u00e0 gauche","center":"Centrer","toright":"Aligner \u00e0 droite","smiles":"Sourire","link":"Lien","hidden":"Texte Cach\u00e9","spoiler":"Spoiler","quote":"Citation","list":"Liste marqu\u00e9","numlist":"Liste \u00e9num\u00e9r\u00e9e","video":"Vid\u00e9o","cleanbb":"Clean de BB-codes","preview":"Aper\u00e7u"},"es":{"bold":"Negrita","italic":"Cursiva","underlined":"Subrayado","striked":"Tachado","toleft":"Alinear a la izquierda","center":"Alinear centro","toright":"Alinear a la derecha","smiles":"Sonrisas","link":"Enlace","hidden":"Texto oculto","spoiler":"Aler\u00f3n","quote":"Cita","list":"Lista de Marcado","numlist":"Lista enumerada","video":"Video","cleanbb":"Limpiar de c\u00f3digos BB","preview":"Vista previa"},"pt":{"bold":"Negrito","italic":"It\u00e1lico","underlined":"Sublinhado","striked":"Riscado","toleft":"Alinhar \u00e0 esquerda","center":"Alinhar centro","toright":"Alinhar \u00e0 direita","smiles":"Sorrisos","link":"Liga\u00e7\u00e3o","hidden":"Texto oculto","spoiler":"Aler\u00f3n","quote":"Citar","list":"Lista Marcado","numlist":"Lista enumerada","video":"V\u00eddeo","cleanbb":"Limpar a partir de c\u00f3digos BB","preview":"Visualiza\u00e7\u00e3o"},"de":{"bold":"Fett","italic":"Kursiv","underlined":"Unterstrichen","striked":"Durchgestrichen","toleft":"Richten Sie links","center":"Zentriert","toright":"Richten Sie rechts","smiles":"L\u00e4cheln","link":"Link","hidden":"Versteckter Text","spoiler":"Spoiler","quote":"Quote","list":"Markierte Liste","numlist":"Aufz\u00e4hlungsliste ","video":"Video","cleanbb":"Saubere von BB-Codes","preview":"Vorschau"}};
        $('textarea.comment:not(.BBCodeEditor)').BBCode({
            onShiftEnter:           {keepDefault:false, replaceWith:'\n'},
            onTab:                  {keepDefault:false, replaceWith:'    '},
            markupSet: [
                {name:strings[languageTag].bold, openWith:'[b]', closeWith:'[/b]', className:'BBCodeButtonBold'},
                {name:strings[languageTag].italic, openWith:'[i]', closeWith:'[/i]', className:'BBCodeButtonItalic'},
                {name:strings[languageTag].underlined, openWith:'[u]', closeWith:'[/u]', className:'BBCodeButtonUnderline'},
                {name:strings[languageTag].striked, openWith:'[s]', closeWith:'[/s]', className:'BBCodeButtonStrike'},
                {separator:'---------------'},
                {name:strings[languageTag].toleft, openWith:'[left]', closeWith:'[/left]', className:'BBCodeButtonLeft'},
                {name:strings[languageTag].center, openWith:'[center]', closeWith:'[/center]', className:'BBCodeButtonCenter'},
                {name:strings[languageTag].toright, openWith:'[right]', closeWith:'[/right]', className:'BBCodeButtonRight'},
                {separator:'---------------'},
                {name:strings[languageTag].smiles, className:'BBCodeButtonSmiley', beforeInsert: function() {
                    var $BBCodeEmoticons = BBCodeEmoticons();
                    var offset = $('.BBCodeButtonSmiley:visible').offset();
                    $BBCodeEmoticons.css({'top':offset.top, 'left':offset.left}).show();
                }},
                {name:strings[languageTag].link, openWith:'[url]', closeWith:'[/url]', className:'BBCodeButtonLink'},
                {separator:'---------------'},
                {name:strings[languageTag].hidden, openWith:'[hide]', closeWith:'[/hide]', className:'BBCodeButtonHide'},
                {name:strings[languageTag].spoiler, openWith:'[spoiler]', closeWith:'[/spoiler]', className:'BBCodeButtonSpoiler'},
                {name:strings[languageTag].quote, openWith:'[quote]', closeWith:'[/quote]', className:'BBCodeButtonQuote'}
            ]
        });
    };
    buildCommentEditor();
    $(document).on('click', 'a.comment-reply', function(e) {
        e.preventDefault();
        if ($(this).hasClass('disabled'))
            return false;
        var $this = $(this);
        var replyToCommentId = $(this).data('reply-to');
        $('div.comment:not(:visible)').show();
        var replyToCommentContainer = $(this).parents('div.comment');
        $('div.comment-reply').remove();
        $('a.comment-reply').removeClass('disabled');
        $('div.comment-edit').remove();
        $(this).addClass('disabled');
        $('<div class="row-fluid comment-reply" id="comment-reply-'+replyToCommentId+'"><div class="span12 center" style="padding: 20px 0;"><img src="/assets/9a0d4/images/ajax-wide.gif" width="200" height="19" /></div></div>').insertAfter(replyToCommentContainer);
        $.get($(this).attr('href'), function(data) {
            if ($('#comment-reply-'+replyToCommentId).length) {
                $('div.comment-edit').remove();
                $('div.comment:not(:visible)').show();

                $('div.comment-reply').remove();
                replyToCommentContainer.after(data);
                buildCommentEditor();
            }
        });
        return false;
    });
    $(document).on('click', 'a.comment-reply-cancel', function(e) {
        e.preventDefault();
        var replyToCommentId = $(this).parents('div.comment-reply').data('reply-to');
        $(this).parents('div.comment-reply').remove();
        $('a.comment-reply[data-reply-to="'+replyToCommentId+'"]').removeClass('disabled');
        return false;
    });
    $(document).on('click', 'a.comment-edit', function(e) {
        e.preventDefault();
        if ($(this).hasClass('disabled'))
            return false;
        var $this = $(this);
        var commentContainer = $(this).parents('div.comment');
        $('div.comment:not(:visible)').show();
        var commentId = $(commentContainer).hide().data('comment-id');
        $('div.comment-edit').remove();
        $('div.comment-reply').remove();
        $('a.comment-reply').removeClass('disabled');
        $('<div class="row-fluid comment-edit" id="comment-edit-'+commentId+'"><div class="span12 center" style="padding: 20px 0;"><img src="/assets/9a0d4/images/ajax-wide.gif" width="200" height="19" /></div></div>').insertAfter(commentContainer);
        $.get($(this).attr('href'), function(data) {
            if ($('#comment-edit-'+commentId).length) {
                $('div.comment-reply').remove();
                $('a.comment-reply').removeClass('disabled');

                $('div.comment-edit').remove();
                commentContainer.after(data);
                buildCommentEditor();
            }
        });
        return false;
    });
    $(document).on('click', 'a.comment-edit-cancel', function(e) {
        e.preventDefault();
        $(this).parents('div.comment-edit').remove();
        $('div.comment:not(:visible)').show();
        return false;
    });
    $(document).on('submit', '#form-comment-edit', function(e) {
        e.preventDefault();
        var $this = $(this);
        var commentId = $(this).parents('[data-comment-edit]').data('comment-edit');
        var commentData = $(this).serializeArray();
        var actionURI = $(this).attr('action');
        $('<div class="row-fluid comment-edit" id="comment-edit-'+commentId+'"><div class="span12 center" style="padding: 20px 0;"><img src="/assets/9a0d4/images/ajax-wide.gif" width="200" height="19" /></div></div>').insertAfter($(this).parents('div.comment-edit'));
        $(this).parents('div.comment-edit').remove();
        $.post(actionURI, commentData, function(data) {
            $('#comment-edit-'+commentId).remove();
            $('[data-comment-id="'+commentId+'"]').show().find('.well').html(data);
        });
        return false;
    });
    $(document).on('click', 'a.comment-report', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $.get($(this).attr('href'));
        }
        return false;
    });
    $(document).on('click', 'body', function(e) {
        $('.BBCodeDrop').css('display', 'none');
    });
});