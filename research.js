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
   }*/
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
         document.getElementById('js-paragraph').innerHTML = data;
    } catch (error) {
        console.error(error);
    }
}

// Remove the immediate fetchdata(); call if you want it to trigger on user action