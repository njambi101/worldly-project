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
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result = await fetch(url).then((res) => res.json())

    if(result.title){
    infotextEL.style.display = "none";
    meaningEl.style.display = "non";
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


    //console.log(result);
    infotextEL.style.display = "none";
    meaningEl.style.display = "block";

    title1.innerText = result[0].word;
    title2.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;



    } catch (error) {
        console.log(error)

        infotextEL.innerText ='there has been an error that has happend,please try later'
    }
    
}

inputElm.addEventListener("keyup", (e)=>{
    
    if(e.target.value && e.key === 'Enter'){
        fetchAPI(e.target.value)
    }
})
