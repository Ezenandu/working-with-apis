let search = "cows";
getFetch(search);

const searchText = document.querySelector('input[type="text"]');
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
    let newSearch = searchText.value;
    getFetch(newSearch);
});

const refreshBtn = document.querySelector("#refresh");
refreshBtn.addEventListener("click", () => location.reload());

const img = document.querySelector("img");

async function getFetch(search) {
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=znnZCWorJtOa3YEcTuCe4ToF87k0tbmL&s=+${search}`,
            { mode: "cors" }
        );
        const gifData = await response.json();
        const newGIF =
            response === ""
                ? alert("Search again")
                : (img.src = gifData.data.images.original.url);
    } catch {
        (err) => console.log(err);
    }
}
