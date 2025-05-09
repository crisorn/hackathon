const body = document.querySelector("body");
const el = document.createElement("div");
const imageContainer = document.createElement("img");
const dateContainer = document.createElement('p');
const descContainer = document.createElement('p');

imageContainer.setAttribute('id', 'image')
dateContainer.setAttribute('id', 'date')
descContainer.setAttribute('id', 'desc')

el.appendChild(imageContainer);
el.appendChild(descContainer);
el.appendChild(dateContainer);
body.appendChild(el);

class Pictureboard {
    constructor(link) {
        this.nasaData = {};
        this.url = link
        console.log('test');

    }

    async requestData () {
        //input : nothing
        //output : whatever object/array we receive from our API call
        try {
            const res = await fetch(this.url)
            this.nasaData = await res.json();
            this.placeInformation();
        }
        catch (err) {
            console.log("Error:" + err);
        }
    }

    async placeInformation () {
        document.querySelector('#image').src = this.nasaData.hdurl;
        document.querySelector('#date').innerText = this.nasaData.date;
        document.querySelector('#desc').innerText = this.nasaData.explanation;
    }

    // async customDate (date) {
    //     try {
    //         const res = await fetch(this.url + )
    //         this.nasaData = await res.json();
    //         this.placeInformation();
    //     }
    //     catch (err) {
    //         console.log("Error:" + err);
    //     }
    // }
    // }
}

document.addEventListener("DOMContentLoaded", async () => {
    
const myPictureboard = new Pictureboard('https://api.nasa.gov/planetary/apod?api_key=Gy73jSKnY1f7ciOxbxBJb2IpFlwcP0NmcOx5EGGa')

myPictureboard.requestData();
// myPictureboard.placeInformation(el);

});
