// fetch(  "https://app.ticketmaster.com/discovery/v2/events.json?size=6&apikey=93pGEEPMzqYFAEUn3cg6mvaHS5XBAZPt&city=Los Angeles"

// )
// .then (function(response){
//     return response.json();
// })
// .
var list = document.querySelector(".data-container");
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// //   list.innerHTML = data;
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// console.log(posts);

function showData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      list.textContent = JSON.stringify(data);
    });
}
