import {checkForURL} from './URLChecker.js'

const apiKey = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const lang = '&lang=en';


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let articleLink = document.getElementById('name').value
    if (checkForURL(articleLink)) {

      console.log("::: Form Submitted :::")

      postData('https://break-it-down-gmc.herokuapp.com//analyse', {text: articleLink})

        .then(newData => {

          document.getElementById('score tag').innerHTML = `Score Tag: ` + newData.score_tag.toLowerCase()
          document.getElementById("agreement").innerHTML = `Agreement: ` + newData.agreement.toLowerCase()
          document.getElementById("subjectivity").innerHTML = `Subjectivity: ` + newData.subjectivity.toLowerCase()
          document.getElementById("confidence").innerHTML = `Confidence: ` + newData.confidence.toLowerCase()
          document.getElementById("irony").innerHTML = `Irony: ` + newData.irony.toLowerCase()

        })

    } else {
      alert("Sorry that's not a valid URL!")

    }
    
}


const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        return newData

      }catch(error) {
        console.log("error", error);
      }
};


export { handleSubmit }
