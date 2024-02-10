var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


function adjustStyles() {
  const body = document.body;
  const html = document.documentElement;

  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  let fontSize = 16;
  if (viewportWidth < 480) {
    fontSize = 14;
  } else if (viewportWidth < 768) {
    fontSize = 16;
  } else if (viewportWidth < 1024) {
    fontSize = 18;
  } else {
    fontSize = 20;
  }

  body.style.fontSize = `${fontSize}px`;
  body.style.padding = `${fontSize / 2}px`;
  body.style.margin = `${fontSize / 2}px`;

  html.style.fontSize = `${fontSize}px`;
}



document.addEventListener('DOMContentLoaded', function() {
    const calender1 = document.getElementByclsss('calender1');
    const update1 = document.getElementByclass('update1');
  
    function checkScreenSize() {
      const viewportWidth = window.innerWidth;
      const breakpoint = 375; 
  
      if (viewportWidth <= breakpoint) {
        update1.style.order = '1';
        calender1.style.order = '2';
      } else {
        update1.style.order = '2';
        calender1.style.order = '1';
      }
    }
  
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });



  
