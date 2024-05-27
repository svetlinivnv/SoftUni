function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchString = document.getElementById('searchField').value;
      let cells = document.querySelectorAll('tbody tr > td');

      for (let cell of cells) {
         cell.parentElement.classList.remove('select');
      }

      for (let cell of cells) {
         let name = cell.textContent;
         if (name.includes(searchString) && searchString !== '') {
            cell.parentElement.classList.add('select');
         }
      }
   }
}