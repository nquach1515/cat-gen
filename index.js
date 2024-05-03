const cat_url = "https://api.thecatapi.com/v1/images/search"
const api_key = "live_AsedLRTRw9rRmBeux5yEYk4Dla0qvGm3Gzc3PQvHYIvOgURm20FMR8YdFAjH1PEJ"

document.addEventListener("DOMContentLoaded", init);

function init() {
    // let image = document.getElementById("cat-image");
    // let cat_img_url = fetch(cat_url);
    // image.src = cat_img_url[0].url
    // .then(resp => resp.json()).then(json => image.src = json[0].url);

    // fetch(cat_url, {headers: {
    //     'x-api-key': api_key
    //   }})
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    // let imagesData = data;
    // imagesData.map(function(imageData) {
    //     //use the url from the image object
    //     image.src = `${imageData.url}`;
      
    //     });
    // })

    // fetch(cat_url, {headers : {'x-api-key' : api_key}})
    // .then(response => {
    //     return response.json();
    // })
    // .then(data => {
    //     let image_url = data[0].url
    // })

    let button = document.getElementById("gen-button");
    let image = document.getElementById("cat-image");
    button.addEventListener("click", (event) => {
        fetch(cat_url, {headers : {'x-api-key' : api_key}}).then(resp => resp.json()).then(json => image.src = json[0].url);
        // .then(response => {
        //     return response.json();
        // })
        // .then(data => {
        //     let image_url = data[0].url
        // })
    });

}

// function buttonClk() {
//     let button = document.getElementById("gen-button");
//     button.addEventListener("click", fetchCatImage())
// }