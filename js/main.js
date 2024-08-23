/************************NAVBAR***************************/
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector('#toggleIcon');

toggleIcon.addEventListener("click",()=>{
	nav.classList.toggle("active");
	toggleIcon.classList.toggle("fa-xmark");
})



/************************NAVBAR***************************/

/************************COMPANY SWIPER***************************/
    jQuery(document).ready(function () {
                var clientSwiper = new Swiper('.company-swiper', {
                    loop: true,
                    speed: 100,
                    autoplay: true,
                    navigation: {
                        nextEl: '.swiper-button-next.clients',
                        prevEl: '.swiper-button-prev.clients',
                    },
                    pagination: {
                        el: '.swiper-pagination.clients',
                        clickable: true,
                    },
					
					breakpoints: {
               991: {
                    noSwiping: false,
                    allowSlidePrev: false,
                    allowSlideNext: false,
                    slidesPerView: 7,
                    spaceBetween: 20,
                  
               
                },
				
				768: {
                    noSwiping: true,
                    allowSlidePrev: true,
                    allowSlideNext: true,
                    slidesPerView: 5,
                    spaceBetween: 20,
                  
                  
                },
				
                576: {
                    noSwiping: true,
                    allowSlidePrev: true,
                    allowSlideNext: true,
                    slidesPerView: 4,
                    spaceBetween: 20, 
                },

                300: {
                    noSwiping: true,
                    allowSlidePrev: true,
                    allowSlideNext: true,
                    slidesPerView: 3,
                    spaceBetween: 15, 
                },

                 200: {
                    noSwiping: true,
                    allowSlidePrev: true,
                    allowSlideNext: true,
                    slidesPerView: 1,
                    spaceBetween: 0, 
                }
            }
			
         });
}); 

/************************COMPANY SWIPER***************************/

/************************CASE STUDIES SWIPER***************************/
    var swiper = new Swiper(".caseSwiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
/************************CASE STUDIES SWIPER***************************/