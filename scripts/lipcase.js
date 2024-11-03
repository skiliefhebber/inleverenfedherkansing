
const afbeeldingEen = document.querySelector(".tekst1");
const afbeeldingTwee = document.querySelector(".latenzienimg2");
const afbeeldingDrie = document.querySelector(".latenzienimg3");

const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");

function toonAfbeelding(afbeelding, selectedElement) {
    img1.classList.add('hidden');
    img2.classList.add('hidden');
    img3.classList.add('hidden');

    afbeelding.classList.remove('hidden');

    afbeelding.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); 

    resetSelected();

    selectedElement.classList.add('geselecteerd');
}

function resetSelected() {
    afbeeldingEen.classList.remove('geselecteerd');
    afbeeldingTwee.classList.remove('geselecteerd');
    afbeeldingDrie.classList.remove('geselecteerd');
}

afbeeldingEen.addEventListener('click', function() {
    toonAfbeelding(img1, afbeeldingEen);
});

afbeeldingTwee.addEventListener('click', function() {
    toonAfbeelding(img2, afbeeldingTwee);
});

afbeeldingDrie.addEventListener('click', function() {
    toonAfbeelding(img3, afbeeldingDrie);
});