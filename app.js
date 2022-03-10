document.getElementById('button').addEventListener('click', loadData);

function loadData() {
   // XHR object
   const xhr = new XMLHttpRequest();

   // Open
   xhr.open('GET', 'data.txt', true);

   xhr.onload = function(){
      if(this.status === 200) {
         document.getElementById('output').innerHTML = 
         `<h1>${this.responseText}</h1>`
      }
   }

   xhr.send();
}