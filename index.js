// 1. ELEMENTLER
const planets = document.querySelectorAll(".planet-card");

const nameEl = document.getElementById("planet-name");
const modeEl = document.getElementById("planet-mode");
const workInfoEl = document.getElementById("work-time");
const breakEl = document.getElementById("break-time");
const descEl = document.getElementById("planet-description");

const focusBtn = document.querySelector(".focus-btn");


// 2. GEZEGEN VERİLERİ
const planetData = {

    dunya: {
        name: "Dünya",
        mode: "Balanced Focus Mode",
        work: "25 DK ÇALIŞMA",
        break: "5 DK MOLA",
        desc: "Klasik pomodoro tekniği ile dengeli başlangıç modu."
    },

    mars: {
        name: "Mars",
        mode: "Intense Focus Mode",
        work: "40 DK ÇALIŞMA",
        break: "10 DK MOLA",
        desc: "Daha uzun odaklanma, daha az mola."
    },

    saturn: {
        name: "Satürn",
        mode: "Deep Focus Mode",
        work: "60 DK ÇALIŞMA",
        break: "15 DK MOLA",
        desc: "Derin çalışma modu, uzun süreli konsantrasyon."
    },

    jupiter: {
        name: "Jüpiter",
        mode: "Ultra Focus Mode",
        work: "90 DK ÇALIŞMA",
        break: "20 DK MOLA",
        desc: "En yoğun odaklanma modu."
    }

};


// 3. GEZEGEN ANAHTARLARI
const keys = ["dunya", "mars", "saturn", "jupiter"];


// seçili gezegen
let currentPlanet = "dunya";


// 4. GEZEGEN SEÇİMİ
planets.forEach((planet, index) => {

    planet.addEventListener("click", () => {

        // active kart sistemi
        planets.forEach(p => p.classList.remove("active"));
        planet.classList.add("active");

        // seçilen gezegen
        const key = keys[index];
        currentPlanet = key;

        const selected = planetData[key];

        // panel güncelle
        nameEl.textContent = selected.name;
        modeEl.textContent = selected.mode;
        workInfoEl.textContent = selected.work;
        breakEl.textContent = selected.break;
        descEl.textContent = selected.desc;

    });

});


// 5. STUDY SPACE YÖNLENDİRME
focusBtn.addEventListener("click", () => {

    window.location.href = `${currentPlanet}.html`;

});
