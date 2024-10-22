async function fetchPokemon() {
    const numberInput = document.getElementById("pokemonNumber");
    const pokemonCard = document.getElementById("pokemonCard");
    const pokemonNumber = numberInput.value;

    if (!pokemonNumber) {
        showError("Porfavor ingresa un número.");
        return;
    }

    try {
        const response = await fetch(
            https
        );
        if (!response.ok) {
            throw new Error("No se encontró ningún Pokémon.");
        }
        const data = await response.json();

        // Clear any previous content or errors
        pokemonCard.innerHTML = "";
        pokemonCard.style.display = "block";

        // Display the Pokémon data
        const name = data.name;
        const type = data.types[0].type.name;
        const height = data.height / 10; // Convert to meters
        const weight = data.weight / 10; // Convert to kilograms
        const imageUrl = data.sprites.front_default;

        pokemonCard.innerHTML = `
              <h2>${name}</h2>
              <img src="${imageUrl}" alt="${name}">
              <p><strong>Tipo:</strong> ${type}</p>
              <p><strong>Altura:</strong> ${height} m</p>
              <p><strong>Peso:</strong> ${weight} kg</p>
          `;
    } catch (error) {
        showError(error.message);
    }
}
function showError(message) {
    const pokemonCard = document.getElementById("pokemonCard");
    pokemonCard.innerHTML = <p class="error">${message}</p>;
    pokemonCard.style.display = "block";
}
