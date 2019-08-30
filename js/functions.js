$(document).ready(function(){
    $('.filter').click(function(e){
        e.preventDefault();

        var filter = $(this).attr('id');

        $('.col-sm-4').show().addClass('visible');
        $('.card').show().addClass('visible');
        $('.card-body').show().addClass('visible');
        $('.card-project-footer').show().addClass('visible');

		if (filter != "" && filter != "all"){
			console.log(filter);
			$('.projects div:not([class*="' + filter + '"])').hide().removeClass('visible');
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

		if (filter != "" && filter != "all"){
			$('.publications>div:not([class*="' + filter + '"])').hide().removeClass('visible');
		}
    });
})