  const burger = document.querySelector('.hamburger');
  const mobileContainer = document.querySelector('.mobile-container')
  const body = document.querySelector('body')

  function toggleClass(){
        mobileContainer.classList.toggle('show')
        burger.classList.toggle('is-active')
        body.classList.toggle('overflow-hidden')
  }

  burger.addEventListener('click', toggleClass)

  const swiper = new Swiper('.banner-slider', {
      loop: true,
      spaceBetween: 20,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      navigation:{
        enabled: false
      },

      breakpoints: {
        1025: {
          spaceBetween: 50,
          navigation: {
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      }
    });

const typeFile = document.querySelectorAll('.custom-file')

typeFile.forEach(item=>{
  item.addEventListener('change', ()=> {
    const fileName = item.closest('.control-box').querySelector('.file-name')
    fileName.innerHTML = item.files[0].name;
  })
});