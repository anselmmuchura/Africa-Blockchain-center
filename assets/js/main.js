
!(function($) {
  "use strict";
 
  let nextSection;

  $('#page-nav .carousel-control-next').on('click', function() {
    let activeSection =  $('.hor-page.active');

    let nextUp = $('.left-sub-image img');
    if(activeSection.attr("id") === 'overview')
        nextUp.attr('src', 'assets/img/portfolio-banner.jpg');
    else if(activeSection.attr("id") === 'services')
        nextUp.attr('src', 'assets/img/contact-us-banner.jpg');
    else if(activeSection.attr("id") === 'portfolio')
        nextUp.attr('src', 'assets/img/portfolio-banner.jpg');
    else if(activeSection.attr("id") === 'contact-us')
        nextUp.attr('src', 'assets/img/overview-banner.jpg');
    else if(activeSection.attr("id") === 'team')
        nextUp.attr('src', 'assets/img/services-banner.jpg');

    let sections = [];

    $('.link-label').each(function(index,item){
        sections.push($(item).text());
    });

    $('.link-label').each(function(index,item){
        if(index == sections.length-1){
            $(item).text(sections[0]);
        }else{
            $(item).text(sections[index+1]);   
        }
        
    });

    if(activeSection.attr("id") === 'team'){
        nextSection =$('#overview');
        activeSection.removeClass("active");
        nextSection.addClass('active')
        $(window).animate({scrollLeft: nextSection.position().left}, 1000);
    }else{
        nextSection = activeSection.next();
        activeSection.removeClass("active");
        nextSection.addClass('active');
        $(window).animate({scrollLeft: nextSection.position().left}, 1000);
    }

  });
  
   $('#page-nav .carousel-control-prev').on('click', function() {

    let activeSection =  $('.hor-page.active');

    let sections = [];

    $('.link-label').each(function(index,item){
        sections.push($(item).text());
        console.log(sections[0]);
    });
    
    $('.link-label').each(function(index,item){
        if(index == 0){
            $(item).text(sections[4]);
        }else{
            $(item).text(sections[index-1]);   
        }
        
    });

    if(activeSection.attr("id") == 'overview'){
        nextSection =$('#team');
        activeSection.removeClass("active");
        nextSection.addClass('active')
        $(window).animate({scrollLeft: nextSection.position().left}, 1000);
    }else{
        nextSection = activeSection.prev();
        activeSection.removeClass("active");
        nextSection.addClass('active');
        $(window).animate({scrollLeft: nextSection.position().left}, 1000);
    }
    
  });

  

})(jQuery);