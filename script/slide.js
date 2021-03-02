var slideIndex; var slides; var dots; var captionText; 
function initGallery() {                                          /* Intitalising function */
  slideIndex = 0;                                                 /* Setting the index as 0 since we want to select the first image at the start */
  slides = document.getElementsByClassName("imageHolder");        /* Putting all images and caption into an array */
  slides[slideIndex].style.opacity = 1;                           /* Making the first image visible */

  captionText=document.querySelector(".captionHolder .captionText");                   /* Selecting the caption holder class in the intrend.html */
  captionText.innerText=slides[slideIndex].querySelector(".captionText").innerHTML;    /* Adding the caption from the select imageHolder and inserting into the captionHolder class */ 

  dots=[];                                                         /* Creating the dots array */
  var dotsContainer = document.getElementById("dotsContainer");    /* Getting the dotsContainer id from the intrend.html */

  for(var i=0; i<slides.length; i++) {                             /* Creating the number of dots based on how many imageHolder class in the html file */
    var dot = document.createElement("span");                      
    dot.classList.add("dots");                                     /* Creating the dots */
    dot.setAttribute("onClick","moveSlide("+i+")");                /* Seting when the dot is click it will move to the specific image that it holds */
    dotsContainer.append(dot);
    dots.push(dot);
  }
  dots[slideIndex].classList.add("active");                        /* Setting the first dot as selected at the start */

}

function plusSlides(n) {                                           /* Changing the slide index based on left/right click by adding or subtracting 1 */
  moveSlide(slideIndex+n); 
}

function moveSlide (n) {
  var i; var current; var next;
  var moveSlideAnimClass={
    forCurrent:"",
    forNext:""
  }

  if (n > slideIndex) {                                            /* When user click on the right button */
    if (n >= slides.length){n=0}                                   /* Check if n is more than the amount of slides and loop it back to the start */
    moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";          /* Animation for current slide */
    moveSlideAnimClass.forNext="moveLeftNextSlide";                /* Animation for next slide */
  }
  else if (n < slideIndex) {                                       /* When user click on the left button */
    if (n < 0) {n=slides.length-1}                                 /* Check if n is less than 0 and loop it back to the end */
    moveSlideAnimClass.forCurrent="moveRightCurrentSlide";         /* Animation for current slide */
    moveSlideAnimClass.forNext="moveRightNextSlide";               /* Animation for next slide */
  }
  if (n != slideIndex) {                                           /* Checking if the slide has to move */
    next=slides[n];                                                  
    current=slides[slideIndex];
    for (i=0; i < slides.length; i++) {      
      slides[i].className="imageHolder";                          
      slides[i].style.opacity=0;                                   /* Making old images invisible */
      dots[i].classList.remove("active");                          /* removing the selected colour from the old dot */ 
    } 
    current.classList.add(moveSlideAnimClass.forCurrent);
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add("active");                               /* Adding the selected colour for the new dot */
    slideIndex = n;                                                /* Setting the newly selected slide number as the index */
  }
  captionText.style.display = "none";
  captionText.innerText = slides[n].querySelector(".captionText").innerHTML;           /* retrieving caption from imageHolder and replacing into the caption Holder */
  captionText.style.display = "block";
}

function setTimer() {                                              /* Creating of timer */
  var timer=setInterval(function (){   
    plusSlides(1);                                                 /* Adding 1 to the slideIndex using plusSlide() function */
  },4000)                                                          /* Time interval, 4000 = 4sec */
}


/* Main Code */
initGallery();
setTimer();