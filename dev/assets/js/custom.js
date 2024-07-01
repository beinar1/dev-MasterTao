  const burger = document.querySelector('.btn-burger');
  const mobileContainer = document.querySelector('.mobile-container')

  function addClass(){
        mobileContainer.classList.toggle('show')
  }

  burger.addEventListener('click', addClass)