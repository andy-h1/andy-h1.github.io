const addLink = document.querySelector('#addLink');
const streamerInput = document.querySelector('#sname');
// const linkInput = document.querySelector('#link');
const streamers = document.querySelector('.streamers');
const endPoint = 'https://api.github.com/users/andy-h1';
const author = document.querySelector('.author');

const authorPromise = fetch(endPoint);
authorPromise.then(response => {
    return response.json();
}).then(data => {
    console.log(data.html_url);
    author.innerHTML = `
    <p>Created by ${data.name}</p><br>
    <a href="${data.html_url}" target="_blank">Github</a>
    `;
}).catch(handleError)


function handleError(err) {
    console.log("ERROR!");
    console.log(err);
    userEl.textContent =`Something went wrong: ${err}`
  }

function handleCardButtonClick(event) {
    event.preventDefault();

    console.log(streamerInput.value);
    const validStreamerInput = streamerInput.value;

    if (validStreamerInput) {
        const newStreamDetails = `
        <div class="streamer">
        <p class="streamerName">${validStreamerInput}</p>
        <a href="https://twitch.tv/${validStreamerInput}" target="_blank">Twitch</a>
    </div>
        `;
        streamers.insertAdjacentHTML("beforeend", newStreamDetails);    
    }

    // const validLinkInput = linkInput.value;

    // if (validStreamerInput === "") {
    //     return false;
    // }
}

addLink.addEventListener('click', handleCardButtonClick);

//validate if input is blank
//if input is blank return error
//if input is filled out return newStreamer details



// create a div with class of streamer
// create a p tag with the name (streamer.value) in the middle
// create an a tag with the href of link.value
// append them to the page
