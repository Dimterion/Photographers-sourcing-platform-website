async function getPhotographers() {
    // TODO : Replace with data from the JSON file - Done
        let url = 'data/photographers.json';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    // Return photographer array only once - Removed return statement
    /* return ({
        photographers: [...photographers, ...photographers, ...photographers]}) */
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Retreive photographer data
    const { photographers } = await getPhotographers();
    //Checking photographers array --> console.log(photographers);
    displayData(photographers);
}

init();