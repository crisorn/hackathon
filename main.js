const body = document.querySelector("body");
body.style.width = "700px";
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.background = "#000000"
body.style.color = "#FFFFFF"
const el = document.createElement("div");
el.style.width = "690px";
el.style.display = 'flex';
el.style.flexDirection = 'column';
el.style.alignItems = 'center';
el.style.justifyContent = 'center';
const imageContainer = document.createElement("img");
imageContainer.style.maxWidth = "100%";
imageContainer.style.height = "auto";
const dateContainer = document.createElement('p');
const descContainer = document.createElement('p');
//----------add input container NEW ADDITION
const inputContainer = document.createElement('input');
inputContainer.setAttribute('type', 'text');
inputContainer.setAttribute('id', 'input');
inputContainer.setAttribute('placeholder', 'YYYY-MM-DD');
//inputContainer.setAttribute('label','Date');
//-----------------------add button  NEW ADDITION
const button = document.createElement('button');
button.setAttribute('id', 'button');
button.textContent = "Get Photo";

//  

imageContainer.setAttribute('id', 'image')
dateContainer.setAttribute('id', 'date')
descContainer.setAttribute('id', 'desc')

el.appendChild(imageContainer);
el.appendChild(descContainer);
el.appendChild(dateContainer);
// add inputContainer and button    NEW ADDITION
el.appendChild(inputContainer);
el.appendChild(button);

// add all elements to the body
body.appendChild(el);


class Pictureboard {
    constructor(link) {
        this.nasaData = {};
        this.url = link
        console.log('test');
        // add tag and event listener for button NEW ADDITION
        this.button = document.querySelector('#button');
        this.customDate = this.customDate.bind(this); //binding to >this<
        this.button.addEventListener('click', this.customDate);

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

    async customDate () {
        const newDate = document.querySelector('#input').value;
        console.log('isString?' + newDate);
        try {
            const newUrl = `${this.url}&date=${newDate}`;
            console.log(newUrl);
            const res = await fetch(newUrl);
            this.nasaData = await res.json();
            this.placeInformation();
        }
        catch (err) {
            console.log("Error:" + err);
        }
    }
     
}

document.addEventListener("DOMContentLoaded", async () => {
    
const myPictureboard = new Pictureboard('https://api.nasa.gov/planetary/apod?api_key=Gy73jSKnY1f7ciOxbxBJb2IpFlwcP0NmcOx5EGGa')

myPictureboard.requestData();
// myPictureboard.placeInformation(el);

});
