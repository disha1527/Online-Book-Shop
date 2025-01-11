
searchBox = document.querySelector('.from-box');

document.querySelector('#search-btn').onclick = () =>{
    
    searchBox.classList.toggle('active');
}







window.onscroll = () =>{

    searchBox.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header2').classList.remove('active');

    }
}


window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header2').classList.remove('active');

    }
}

/*---login form----*/

var loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{

    loginForm.classList.toggle('active');

}
document.querySelector('#close-login-btn').onclick = () =>{

    loginForm.classList.remove('active');
}
/*--swiper--*/
var swiper = new Swiper(".books-list",{
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableInteraction:false,

    },
    navigation:{
        nextEl:".swiper-button-next",},
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
        },
    });

    /*--featured----*/
 var swiper = new Swiper(".featured-slider",{

        spaceBetween:10,
        loop:true,
        centeredSlides:true,
        autoplay:{
            delay:9500,
            disableInteraction:false,
    
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev",
        },
        breakpoints:{
            0:{
                slidesPerView:1,
            },
            450:{
                slidesPerView:2,

            },
            768:{
                slidesPerView:3,
            },
            1024:{
                slidesPerView:4,
            },
            },
        });

        /*arrivals--*/
        var swiper = new Swiper(".arrivals-slider",{
            spaceBetween:10,
            loop:true,
          centeredSlides:true,
            autoplay:{
                delay:9500,
                disableInteraction:false,
        
            },
            navigation:{
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev",
            },
            breakpoints:{
                0:{
                    slidesPerView:1,
                },
                768:{
                    slidesPerView:2,
                },
                1024:{
                    slidesPerView:3,
                },
                },
            });
   /*--review--*/         
var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    loop:true,
    centerSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
    },
});
/*--blog--*/
var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    loop:true,
    centerSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
   
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
    },
});