async function fetchDataFromApi() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const json = await res.json();
    console.log(json.joke);
}

async function init() {
    await fetchDataFromApi();
    console.log('Finished fetching data ');
}

init();