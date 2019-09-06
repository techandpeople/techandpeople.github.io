$(document).ready(function(){
    var filter_applied = "";
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

    var year_filter_applied = "";
    var area_filter_applied = "";

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
                $('.publications>div:not([class*="' + year_filter_applied + '"])').hide().removeClass('visible');
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
})