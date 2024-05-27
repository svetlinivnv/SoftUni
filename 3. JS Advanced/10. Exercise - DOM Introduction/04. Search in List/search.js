function search() {

   const searchedString = document.getElementById('searchText').value;
   let liElements = document.querySelectorAll('ul *');
   let matchesPrint = document.getElementById('result');
   let matches = 0;

   matches = 0;

   for (city of liElements) {
      city.style = '';
   }

   for (city of liElements) {
      if (city.textContent.includes(searchedString) && searchedString !== '') {
         city.style = 'font-weight: bold; text-decoration: underline';
         matches++;
      }
   }

   if (matches > 0) {
      matchesPrint.textContent = `${matches} matches found`;
   } else {
      matchesPrint.textContent = '';
   }
}