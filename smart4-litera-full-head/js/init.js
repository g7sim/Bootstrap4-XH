$("ul.menulevel1").addClass("nav navbar-nav mr-auto");

$("ul.menulevel1 > li:first-child").addClass("nav-item"); 

$("ul.menulevel1 li a").addClass("nav-link"); //a+ dropdown-item  
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

 
 $('.nav li > span').each(function() {
var $this = $(this);
$this.replaceWith('<a class="navlink dropdown-toggle xhspan" href="#" onclick="return false;">' + $this.text() + '</a>');
}); 

/* affix header  https://www.codeply.com/go/LDHQhWUG0x */
$(document).ready(function() {

  var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;
    
    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }
      
  };
  

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div class="aff"></div>');
    
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });
    
    // init
    toggleAffix(ele, $(window), wrapper);
  });
  
});
  
 /* ------  to Top ------------- */
 	  
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
   

   





