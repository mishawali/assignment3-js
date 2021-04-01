
let jsonURL = "https://github.com/mishawali/assignment3-js/blob/main/deals.json";


//use fetch to access the json information
fetch(jsonURL).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data.length);
    appendData(data);
  });
  


  function appendData(data) {
  
  for(let i = 0; i < data.length; i++) {

  //create a table row element
  let tr = document.createElement("tr");
  
      //Create columns
      let imgTd = document.createElement("td");
      let productnameTd = document.createElement("td");
      let descriptionTd = document.createElement("td");
      let priceTd = document.createElement("td");


      
    //productname
    productnameTd.innerHTML = data[i].productName;
    //price
    priceTd.innerHTML = "$" + data[i].price;
    //description
    descriptionTd.innerHTML = data[i].description;
    //img
    let img = document.createElement("img");
    img.setAttribute("src", data[i].image);
    img.style.width = "50px";
    imgTd.appendChild(img);



     //append columns to a table row
     tr.appendChild(imgTd);
     tr.appendChild( productnameTd);
     tr.appendChild(descriptionTd);
     tr.appendChild(priceTd);
  
      //append a table row to the tbody
      tbody.appendChild(tr);
    }
  }