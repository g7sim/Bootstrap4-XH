$("ul.menulevel1").addClass("nav navbar-nav mr-auto").css("width", "100%"); ;

$("ul.menulevel1 > :first-child").addClass("nav-item"); 

$("ul.menulevel1 li a").addClass("nav-link").css("color", "#fff"); //a+ dropdown-item  Schriftfarbe - hier ändern

$("li.docs").addClass("nav-item dropdown");  // docs Seite mit vorhandenen Unterseiten
$("li.sdocs").addClass("nav-item dropdown");  // sdocs - eine aktive Seite mit vorhandenen Unterseiten

$("ul.menulevel2").addClass("dropdown-menu"); 
$("ul.menulevel3").addClass("dropdown-menu"); 
$("ul.menulevel4").addClass("dropdown-menu"); 
$("ul.menulevel5").addClass("dropdown-menu"); 
$("ul.menulevel6").addClass("dropdown-menu"); 
$("ul.menulevel7").addClass("dropdown-menu"); 
$("ul.menulevel8").addClass("dropdown-menu"); 
$("ul.menulevel9").addClass("dropdown-menu"); 

$("li.sdoc").css("line-height", "20px").css("background-color", "inherit").css("text-align", "left").css("margin-left", "10px").css("max-width", "300px"); // aktive Seite ohne vorhandene Unterseiten 
$("li.sdocs").css("line-height", "20px").css("background-color", "inherit").css("text-align", "left").css("margin-left", "10px").css("max-width", "300px"); //aktive Seite mit vorhandenen Unterseiten 
 	  
 (function() {
   			$('<i id="to-top"></i>').appendTo($('body'));

			$(window).scroll(function() {
				if($(this).scrollTop() != 0) {
					$('#to-top').fadeIn();	
				} else {
					$('#to-top').fadeOut();
				}
			});
			
			$('#to-top').click(function() {
				$('body,html').animate({scrollTop:0},100);
			});	

	})();					  
   
$("span[data-toggle=popover]").popover()
   




