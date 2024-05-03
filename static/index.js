const cat_url = "https://api.thecatapi.com/v1/images/search"
const api_key = ""

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

    // BASIC IMAGE GEN
    // button.addEventListener("click", (event) => {
    //     fetch(cat_url, {headers : {'x-api-key' : api_key}}).then(resp => resp.json()).then(json => image.src = json[0].url);
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         let image_url = data[0].url
    //     })
    // });

    function generateAiImage() {
        const breed = document.getElementById("breed").value;
        const color = document.getElementById("color").value;
        let prompt = "";
        if (typeof breed === 'string' && breed.trim() !== '' && typeof color === 'string' && color.trim() !== '') {
            prompt = `A cute ${color} ${breed} cat.`;
            }
        else if (typeof breed === 'string' && breed.trim() !== '' && typeof color !== 'string' && color.trim() === '') {
            prompt = `A cute ${breed} cat.`;
            }
        else if (typeof color === 'string' && color.trim() !== '') {
            prompt = `A cute ${color} cat.`;
            }
        else {
            prompt = '';
        }

        button.textContent = "Generating...";
        document.getElementById('loading-indicator').style.display = 'block';

        fetch('/generate-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('loading-indicator').style.display = 'none';
            if (data.image_url) {
                image.src = data.image_url;
            } else {
                alert('Failed to generate image: ' + data.error);
            }

            button.textContent = "Generate Image";
            button.disabled = false;
        })
        .catch(error => {
            document.getElementById('loading-indicator').style.display = 'none';
            console.error('Error:', error);

            button.textContent = "Generate Image";
            button.disabled = false;
        });
    }
    
    button.addEventListener("click", (event) => {
        generateAiImage();
    });

}

// function buttonClk() {
//     let button = document.getElementById("gen-button");
//     button.addEventListener("click", fetchCatImage())
// }