const btnOrder = document.querySelectorAll('.button__order');
const overlayOrder = document.querySelector('.overlay__order');
const order = overlayOrder.querySelector('.modal__order');

btnOrder.forEach((btn) => {
  btn.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
    order.value = btn.dataset.order;
  });
});

overlayOrder.addEventListener('click', (event) => {
  if (event.target === overlayOrder || event.target.closest('.modal__close')) {
    overlayOrder.classList.remove('overlay_active');
  }
});
