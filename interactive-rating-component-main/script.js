// const but = document.querySelector("#submit-button");
//
// console.log(but);
const ratingPlaceholder = document.querySelector("#rating-placeholder");

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", onSubmitClick);

const ratings = document.querySelectorAll(".rating");
ratings.forEach( elem => {
    elem.addEventListener("click", (event) => {
        ratingPlaceholder.innerText = event.target.innerText;
    })
})

function onSubmitClick() {
    if (ratingPlaceholder.innerText){
        const ratingSection = document.querySelector("#rating");
        const thxSection = document.querySelector("#thank-you");

        ratingSection.style.display = "none";
        thxSection.style.display = "flex";
    } else {
        alert("Please choose a rating!!!");
    }
}




