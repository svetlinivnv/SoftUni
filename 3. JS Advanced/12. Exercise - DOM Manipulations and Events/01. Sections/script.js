function create(words) {

   let contentElement = document.getElementById('content');

   words.forEach(word => {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.style.display = 'none';
      divElement.addEventListener('click', (event) => {
         pElement.style.display = '';
      })
      pElement.textContent = word;
      divElement.append(pElement);
      contentElement.append(divElement);
   });
}