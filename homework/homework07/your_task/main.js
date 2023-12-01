const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}
function playTrack(trackid) {
    //console.log("test");
    document.querySelector("#artist-section > h1").innerHTML = "Now Playing"

    const template = `<iframe style="border-radius:12px" 
src="https://open.spotify.com/embed/track/${trackid}?utm_source=generator&theme=0" 
width="100%" 
height="152" 
frameBorder="0" 
allowfullscreen="" 
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
loading="lazy"></iframe>`

    document.querySelector("#artist").innerHTML = template
}

async function getTracks(term) {
    //query spot, update template, paste
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const response = await fetch(url);
    const trackData = await response.json();
    //console.log(trackData)
    document.querySelector("#tracks").innerHTML = ""

    if (trackData.length == 0) {
        document.querySelector("#tracks").innerHTML += "No tracks found"
        return;
    }
    for (let i = 0; i < 5; i++) {
        if (i >= trackData.length) {
            break;
        }
        const template =
            `<section class="track-item preview" onclick = playTrack('${trackData[i].id}')>
<img src="${trackData[i].album.image_url}" alt=${trackData[i].album.name}>
<i class="fas play-track fa-play" aria-hidden="true"></i>
<div class="label">
    <h2>${trackData[i].name}</h2>
    <p>
    ${trackData[i].artist.name}
    </p>
</div>
</section>`

        document.querySelector("#tracks").innerHTML += template;
    }
}

async function getAlbums(term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const response = await fetch(url);
    const albumData = await response.json();
    console.log(albumData)
    document.querySelector("#albums").innerHTML = ""

    if (albumData.length == 0) {
        document.querySelector("#albums").innerHTML += "No tracks found"
        return;
    }

    for (let i = 0; i < albumData.length; i++) {
        const template = `<section class="album-card" id="${albumData[i].id}">
            <div>
                <img src="${albumData[i].image_url}" alt=${albumData[i].name}>
                <h2>${albumData[i].name}</h2>
                <div class="footer">
                    <a href="${albumData[i].spotify_url}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
        </section>
        `

        document.querySelector("#albums").innerHTML += template;

    }
}

async function getArtist(term) {
    //query spot, update template, paste
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    const response = await fetch(url);
    const artistData = await response.json();
    const artist = artistData[0];
    //console.log(artist);
    document.querySelector("#artist").innerHTML = ""

    if (artistData.length == 0) {
        document.querySelector("#artist").innerHTML += "Artist not found"
        return;
    }

    const template =
        `<section class="artist-card" id="${artist.id}">
<div>
    <img src="${artist.image_url}" alt=${artist.name}>
    <h2>${artist.name}</h2>
    <div class="footer">
        <a href="${artist.spotify_url}" target="_blank">
            view on spotify
        </a>
    </div>
</div>
</section>`
    document.querySelector('#artist').innerHTML = template;
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}