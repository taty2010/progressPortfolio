$(document).ready(function(){
	


$(window).scroll(function() {

    if ($(window).scrollTop()>75)
     {
		 $('#under').addClass("change").removeClass("under");
		 
     }
	
	  else 
     {
		 $('#under').addClass("under").removeClass("change");
     }
			
		});
	
	
	});