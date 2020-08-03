$(document).ready(function () {
    
    $('.input-add').keypress(function (e) { 
        
        if ( e.which == 13 ) {
            e.preventDefault();
            console.log('enter');

            var cmt_clone = $('.cmt-temp').clone(true);
            $('.khoi-cmt').append(cmt_clone);
            $('.cmt:last').removeClass('cmt-temp');

            var avt = $('.form-add .avt').attr('src');
                ten = 'Huấn RÔ SÌ' ;
                nd = $('.input-add').val();
            $('.cmt:last .avt').attr('src', avt);
            $('.cmt:last .ten').html(ten);
            $('.cmt:last .nd').html(nd);
            $('.input-add').val('');
        }


    });

    $('.icon-del').click(function (e) { 
        e.preventDefault();
        $(this).addClass('icon-del-click');
        var user = $('.cmt:has(.icon-del-click) .ten').html();
        if ( user == 'Huấn RÔ SÌ' ) {
            $('.cmt:has(.icon-del-click)').remove();
        }
        $('.icon-del-click').removeClass('icon-del-click');
    });
    
    $('.icon-edit').click(function (e) { 
        e.preventDefault();
        $(this).addClass('icon-edit-click');
        var user = $('.cmt:has(.icon-edit-click) .ten').html();
        if ( user == 'Huấn RÔ SÌ') {
            $('.cmt:has(.icon-edit-click)').hide();
            var form_clone = $('.form-edit-temp').clone(true);
            $('.cmt:has(.icon-edit-click)').after(form_clone);
            $('.form-edit:last').removeClass('form-edit-temp');
            $('.form-edit:last').addClass('form-editing');

            var anh = $('.cmt:has(.icon-edit-click) .avt').attr('src');
                nd_cu = $('.cmt:has(.icon-edit-click) .nd').html();

            $('.form-editing .avt').attr('src', anh);
            $('.form-editing .input-edit').val(nd_cu);
        } else {
            $('.icon-edit-click').removeClass('icon-edit-click');
        }
        
    });

    $('.input-edit').keypress(function (e) { 
        if ( e.which == 13 ) {
            e.preventDefault();

            var nd_moi = $('.form-editing .input-edit').val();
            $('.form-editing').remove();
            $('.cmt:has(.icon-edit-click)').show();
            $('.cmt:has(.icon-edit-click) .nd').html(nd_moi);
            $('.icon-edit-click').removeClass('icon-edit-click');
        }

    });

    $('.input-edit').keyup(function (e) { 
        
        if (e.which == 27) {
            e.preventDefault();
            $('.form-editing').remove();
            $('.cmt:has(.icon-edit-click)').show();
            $('.icon-edit-click').removeClass('icon-edit-click');
        }

    });

});