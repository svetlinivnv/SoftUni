function loadRepos() {

   const resElement = document.getElementById('res');
   const url = 'https://api.github.com/users/testnakov/repos';

   const xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         resElement.textContent = xhr.responseText;
      }
   };
   xhr.open("GET", url);
   xhr.send();
}