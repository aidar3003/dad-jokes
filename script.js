const jokeElement = document.getElementById('joke');
const btn = document.getElementById('btn');

jokeBtn.addEventListener('click', () => {
    generateJoke();
})

generateJoke();

async function generateJoke () {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

   const res = await fetch('https://icanhazdadjoke.com', config);
   
   const data = await res.json()
   jokeElement.innerHTML = data.joke;
        
}