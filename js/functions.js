$(document).ready(function(){

    const present = new Date().getFullYear();
    const older = present-5;

    $('#filterByYear').append('<button type="button" class="btn btn-default filterBtn filterPub filterYear selected" id="all">All</button>');
    for(let year = present; year > older; year--){
        $('#filterByYear').append('<button type="button" class="btn btn-default filterBtn filterPub filterYear" id="'+year+'">'+year+'</button>');
    }
    $('#filterByYear').append('<button type="button" class="btn btn-default filterBtn filterPub filterYear" id="older">OLDER</button>');

    var filter_applied = "";
    //publication page
    var year_filter_applied = "";
    var area_filter_applied = "";
    //videos page
    var vid_type_filter_applied = "";
    var vid_area_filter_applied = "";

    $('.filter').click(function(e){
        e.preventDefault();

        var filter = $(this).attr('id');

        $('.col-sm-4').show().addClass('visible');
        $('.card').show().addClass('visible');
        $('.card-body').show().addClass('visible');
        $('.card-project-footer').show().addClass('visible');
        $('.filter').removeClass("selected");

        if(filter_applied === filter){
            filter_applied="";
        }else{
            filter_applied=filter;
        }

		if (filter_applied != "" && filter != "all"){
			$('.projects div:not([class*="' + filter_applied + '"])').hide().removeClass('visible');
            $("#"+filter_applied).addClass("selected");
		}else{
            $("#all").addClass("selected");
            filter_applied="";
        }
    });

    $('.filterPub').click(function(e){
        e.preventDefault();
        var filter = $(this).attr('id');
        $('.row').show().addClass('visible');
        $('.card').show().addClass('visible');
		$('.col-sm-3').show().addClass('visible');
        $('.col-sm-4').show().addClass('visible');
		$('.col-sm-9').show().addClass('visible');
        $('.filterPub').removeClass("selected");

        if($(this).hasClass('filterYear')){
            if(year_filter_applied === filter){
                year_filter_applied="";
            }else{
                year_filter_applied=filter;
            }
        }else{
            if(area_filter_applied === filter){
                area_filter_applied="";
            }else{
                area_filter_applied=filter;
            }
        }

        if ((area_filter_applied != "" || year_filter_applied != "") && filter != "all"){
            if(year_filter_applied != ""){
                let stringSelector = '.publications>div';
                if(year_filter_applied === 'older'){
                    for(let index = present; index > older; index--){
                        if(index === present)
                            stringSelector = stringSelector + '[class*="' + index + '"]'
                        else
                            stringSelector = stringSelector + ',[class*="' + index + '"]'
                    }
                }else{
                    stringSelector = stringSelector + ':not([class*="' + year_filter_applied + '"])'
                }
                $(stringSelector).hide().removeClass('visible');
                $("#"+year_filter_applied).addClass("selected");
            }
            if(area_filter_applied != ""){
                $('.publications>div:not([class*="' + area_filter_applied + '"])').hide().removeClass('visible');
                $("#"+area_filter_applied).addClass("selected");
            }
            // $('.publications>div:not([class*="' + filter + '"])').hide().removeClass('visible');
        }else{
            year_filter_applied = "";
            area_filter_applied = "";
            $("#all").addClass("selected");
        }
    });

    $('.filterVidType').click(function(e){
        e.preventDefault();

        var filter = $(this).attr('id');

        $('.col-sm-6').show().addClass('visible');
        $('.filterVidType').removeClass("selected");

        if(vid_type_filter_applied === filter){
            vid_type_filter_applied="";
        }else{
            vid_type_filter_applied=filter;
        }

        if(filter === "all"){
            $('.filterVidArea').removeClass("selected");
            $("#all").addClass("selected");
            vid_area_filter_applied="";
            vid_type_filter_applied="";
        }else {

            if (vid_area_filter_applied != ""){
                $('.videos-row div:not([class*="' + vid_area_filter_applied + '"]).video-container').hide().removeClass('visible');
                $("#"+vid_area_filter_applied).addClass("selected");
            }

            if (vid_type_filter_applied != ""){
                $('.videos-row div:not([class*="' + vid_type_filter_applied + '"]).video-container').hide().removeClass('visible');
                $("#"+vid_type_filter_applied).addClass("selected");
            }
        }
    });
    $('.filterVidArea').click(function(e){
        e.preventDefault();

        var filter = $(this).attr('id');

        $('.col-sm-6').show().addClass('visible');
        $('.filterVidArea').removeClass("selected");

        if(vid_area_filter_applied === filter){
            vid_area_filter_applied="";
        }else{
            vid_area_filter_applied=filter;
        }

        if(filter === "all"){
            $('.filterVidArea').removeClass("selected");
            $("#all").addClass("selected");
            vid_area_filter_applied="";
            vid_type_filter_applied="";
        }else {

            if (vid_area_filter_applied != ""){
                $('.videos-row div:not([class*="' + vid_area_filter_applied + '"]).video-container').hide().removeClass('visible');
                $("#"+vid_area_filter_applied).addClass("selected");
            }

            if (vid_type_filter_applied != ""){
                $('.videos-row div:not([class*="' + vid_type_filter_applied + '"]).video-container').hide().removeClass('visible');
                $("#"+vid_type_filter_applied).addClass("selected");
            }
        }

    });
})