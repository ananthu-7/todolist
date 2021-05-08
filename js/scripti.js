// // api url
// const api_url = 
//       "https://jsonplaceholder.typicode.com/todos";
  
// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
// }
// // Calling that async function
// getapi(api_url);
  
// // Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
//     let tab = 
//         `<tr>
//           <th>userId</th>
//           <th>id</th>
//           <th>title</th>
//           <th>completed</th>
//          </tr>`;
    
//     // Loop to access all rows 
//     for (let r of data.list) {
//         tab += `<tr> 
//     <td>${r.userId} </td>
//     <td>${r.id}</td>
//     <td>${r.title}</td> 
//     <td>${r.completed}</td>          
// </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("lists").innerHTML = tab;
// }

let fetchBtn = document.getElementById("fetchBtn");
  
  
    fetchBtn.addEventListener("click", buttonclickhandler);
  
    function buttonclickhandler() {
  
        // Instantiate an new XHR Object
        const xhr = new XMLHttpRequest();
  
        // Open an obejct (GET/POST, PATH,
        // ASYN-TRUE/FALSE)
        xhr.open("GET", 
"https://jsonplaceholder.typicode.com/todos", true);
  
  
  
  
        // When response is ready
        xhr.onload = function () {
            if (this.status === 200) {
  
                // Changing string data into JSON Object
                obj = JSON.parse(this.responseText);
  
                // Getting the ul element
                let list = document.getElementById("list");
                str = ""
                for (key in obj.data) {
                    str += `<li>${obj.data[key].title}</li>`;
                }
                list.innerHTML = str;
            }
            else {
                console.log("File not found");
            }
        }
  
        // At last send the request
        xhr.send();
    }