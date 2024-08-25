/************************NAVBAR***************************/
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector('#toggleIcon');

toggleIcon.addEventListener("click",()=>{
	nav.classList.toggle("active");
	toggleIcon.classList.toggle("fa-xmark");
})



/************************NAVBAR***************************/

/************************COMPANY SWIPER***************************/
     var companySwiper = new Swiper(".companySwiper", {
      loop:true,
      autoplay:true,
      speed:1000,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
      	340: {
          slidesPerView: 2,
          spaceBetween: 10,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
      mousewheel: true,
      keyboard: true,
    });

/************************COMPANY SWIPER***************************/

/************************CASE STUDIES SWIPER***************************/
    var swiper = new Swiper(".caseSwiper", {
      autoplay:true,
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

/************************OUR WORK ACCORDIAN***************************/
 const accordianitems = document.querySelectorAll(".accordian-item");
            accordianitems.forEach(item =>{
                const title = item.querySelector(".accordian-title");
                const content = item.querySelector(".accordian-content");
                const icon = item.querySelector(".accordian-icon");

                title.addEventListener("click" ,()=>{
                    for(var i=0; i<accordianitems.length;i++)
                        {
                            if(accordianitems[i]!=item)
                             {
                                 accordianitems[i].classList.remove("active");
                             }

                            else
                             {
                                 item.classList.toggle("active");
                             }
                        }
                });
            });

/************************OUR WORK ACCORDIAN***************************/

/************************TESTAMONIAL SWIPER***************************/
     var swiper = new Swiper(".testamonialSwiper", {
      loop:true,
      autoplay:true,
      speed:3000,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
    });
/************************TESTAMONIAL SWIPER***************************/
