const inputThingy = document.getElementById("myId");
const inputButton = document.getElementById("buttonId");

// console.log(inputThingy.value);

inputButton.addEventListener("click", function () {
    if (inputThingy.value) {
        showPokemon(inputThingy.value);
    } else {
        showPokemon(25);
    }
    // showPokemon(158);

    function showPokemon(idChosen) {
        const apiData = {
            url: "https://pokeapi.co/api/v2/",
            type: "pokemon",
            id: idChosen,
        };

        const { url, type, id } = apiData;
        const apiUrl = `${url}${type}/${id}`;

        fetch(apiUrl)
            .then((data) => data.json())
            .then((pokemon) => generateHTML(pokemon));

        // console.log(apiUrl);

        const generateHTML = (data) => {
            const html = `
            <div class = "name">${data.name}</div>
            <div class = "id">${data.id}</div>
            <img src=${data.sprites.front_default}>
            <div class = "details">
                <span>Height:${data.height} </span>
                <span>Weight:${data.weight} </span>
            </div>
        `;

            const pokemonDiv = document.querySelector(".pokemon");
            pokemonDiv.innerHTML = html;
        };
    }
});
