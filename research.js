const inputElm = document.getElementById('inputs')


const infotextEL = document.getElementById('info-text');

const meaningEl =document.getElementById('meaning-container')

const title1 = document.getElementById("title")
const title2 = document.getElementById("meaning")
const audioEl= document.getElementById("audio")



async function fetchAPI(word){
    try {
    infotextEL.style.display = "block";
    meaningEl.style.display = "none";
    //infotextEL.innerText =`searching for the meaning of the word${word}`
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result = await fetch(url).then((res) => res.json())

    if(result.title){
    title1.innerText = word;
    title2.innerText = "N/A";
    audioEl.src = "none"
    }else{
    infotextEL.style.display = "none";
    meaningEl.style.display = "block";  
    audioEl.style.display ="inline-flex";
    title1.innerText = result[0].word;
    title2.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
    }


    console.log(result);
    infotextEL.style.display = "none";
    meaningEl.style.display = "block";

    title1.innerText = result[0].word;
    title2.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;



    } catch (error) {
        console.log(error)

        infotextEL.innerText ='there has been an error that has happend,please try later'
    }
    //console.log(word);
}

inputElm.addEventListener("keyup", (e)=>{
    //console.log(e.key)
    if(e.target.value && e.key === 'Enter'){
        fetchAPI(e.target.value)
    }
})

















/*fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dictionary')
    .then(response => {

        if(!response.ok){
            throw new  error("could not fetch resource");
        }
        return response.json();

    })    

    
    .then(data => console.log(data))
    .catch(error => console.error(error));
    */
   /*fetchdata();
   async function fetchdata(){

    try{
        //let newword = document.getElementById("js-texts").value
         const inputElement = document.getElementById("js-texts");
        const newword = inputElement.value.trim();
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${newword}`);
        // .trim() removes accidental whitespace
        if(!response.ok){
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
   }
  async function fetchdata() {
    try {
        const inputElement = document.getElementById("js-texts");
        const newword = inputElement.value.trim();

        // Prevent API call if the input is empty
        if (!newword) {
            console.warn("Please enter a word to search.");
            return;
        }

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${newword}`);
        
        if (!response.ok) {
            throw new Error("Could not fetch resource (Word not found)");
        }

        const data = await response.json();
        console.log(data);
        //const NEWitem = data.sprites.front_default;
        //const textElement = document.getElementById('js-paragraph');
        let definition =data[0].meanings[0].definition[0].definition;
        //let name =  JSON.parse(JSON.stringify(data));
         //document.getElementById('js-paragraph').innerHTML = JSON.stringify(data[0].meanings[0].definition);
         document.getElementById('js-paragraph').innerHTML = definition;
    } catch (error) {
        console.error(error);
        document.getElementById('js-paragraph').innerHTML = "Error" + error.message;
    }
}

// Remove the immediate fetchdata(); call if you want it to trigger on user action*/
