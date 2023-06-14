const url = 'https://icanhazdadjoke.com/';

const btn = document.getElementById("joke-btn");
const jokeText = document.getElementById("joke-text");

// Add event listener to button
btn.addEventListener('click', () => {
    fetchDadJoke();
});

const fetchDadJoke = async () => {
    try {
        // Get response from website
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'Learning application: (https://github.com/DLi2004/dad-joke-generator)',
            },
        });

        // Check for error
        if (!response.ok) {
            throw new Error(' error');
        }

        // Change joke text
        const data = await response.json();
        jokeText.textContent = data.joke;
    } catch (error) {
        console.log(error.message);
        jokeText.textContent = 'There was an error.';
    }
};

// Initial dad joke
fetchDadJoke();