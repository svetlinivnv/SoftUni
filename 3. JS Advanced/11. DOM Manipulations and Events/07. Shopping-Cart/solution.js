function solve() {
   let cartList = [];
   let totalSpent = 0;

   let addBtns = document.querySelectorAll('.add-product');
   let textArea = document.querySelector('textarea');
   let checkoutBtn = document.querySelector('.checkout');

   function addProductHandler(event) {
      let productElement = event.currentTarget.parentElement.parentElement;
      let title = productElement.querySelector('.product-title').textContent;
      if (!cartList.includes(title)) {
         cartList.push(title);
      }
      let price = Number(productElement.querySelector('.product-line-price').textContent);
      totalSpent += price;
      textArea.append(`Added ${title} for ${price.toFixed(2)} to the cart.\n`);
   }

   addBtns.forEach(btn => { btn.addEventListener('click', addProductHandler); });

   checkoutBtn.addEventListener('click', (event) => {
      textArea.append(`You bought ${cartList.join(', ')} for ${totalSpent.toFixed(2)}.`)
      addBtns.forEach(btn => {btn.setAttribute('disabled', '');});
      checkoutBtn.setAttribute('disabled', '');
   });
}