$(document).ready(function () {
  // Menu burger
  const iconMenu = document.querySelector('.menu-icon');
  const menuBody = document.querySelector('.menu-body');
  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }


  // Scroll for header__links

  const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

        if (iconMenu.classList.contains('_active')) {
          iconMenu.classList.remove('_active');
          menuBody.classList.remove('_active');
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();

      }
    }
  }

  // slider for Tariff

  const tariffSlider = new Swiper('.tariff-slider__container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'slide',
    autoplay: {
      delay: 2500,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.tariff-slider__btn--next',
      prevEl: '.tariff-slider__btn--prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.tariff-slider__scrollbar',
    },

  });


  // Modal 
  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);


  function openModal(event) {
    event.preventDefault()
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible')
    modalDialog.addClass('modal__dialog--visible')
  }

  function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  }
});