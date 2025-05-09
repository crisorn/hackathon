const body = document.querySelector("body");
const el = document.createElement("div");
const imageContainer = document.createElement("img");
const dateContainer = document.createElement('p');
el.appendChild(imageContainer);
el.appendChild(dateContainer);
body.appendChild(el);

class Pictureboard {
    constructor(link) {
        this.imageWithDate = {};
        this.url = link

    }

    async requestData () {
        //input : nothing
        //output : whatever object/array we receive from our API call
        try {
            const res = await fetch(this.url)
            const data = await res.json();
            console.log("Success:" + data);
        }
        catch (err) {
            console.log("Error:" + err);
        }
    }

    placeInformation () {
        //input : nothing
        //output : 
            //image key
            //explanation key
            //date key
    }

}


document.addEventListener("DOMContentLoaded", async () => {
    
const myPictureboard = new Pictureboard('https://api.nasa.gov/planetary/apod?api_key=Gy73jSKnY1f7ciOxbxBJb2IpFlwcP0NmcOx5EGGa')

});
