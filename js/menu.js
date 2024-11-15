const menuData = {
    uzkodas: [
        { title: "Liellopa karpočo ar cieto sieru", allergens: "1;7;13", description: "/liellops, siers, brušetes, olīveļļa/", price: "7.50 €" },
        { title: "Laša seviče", allergens: "4;13", description: "/lasis, avokado, sīpols, laima mērce, baziliks/", price: "7.50 €" },
        { title: "Siera plate", allergens: "1;5;7;8", description: "/sieru izlase, grauzdēti rieksti, vīnogas, olīvas/", price: "9.50 €" },
        { title: "Maizes kraukšķi ar burkānu čipsiem", allergens: "1;7;13", description: "/ar ķiplociņu un silto siera mērci/", price: "4.00 €" },
        { title: "Fritēto uzkodu plate ar mērci", allergens: "1;7;13", description: "/fritētās uzkodas ar saldo čilli mērci/", price: "5.50 €" },
        { title: "Tīģergarneles baltvīna mērcē", allergens: "1;4;7;13", description: "/ceptas tīģergarneles saldā krējuma-baltvīna mērcē ar grauzdētu maizi/", price: "18.20 €" }
    ],
    zupas: [
        { title: "Kokospiena-tīģergarneļu zupa", allergens: "4;8;13;14", description: "/garneles, sēnes, kokosriekstu piens, laims, puravs, čilī/", price: "8.50 €" },
        { title: "Soļanka", allergens: "1;7;13", description: "/sastāvdaļas tiks precizētas/", price: "5.90 €" },
        { title: "Krēmīgā dārzeņu zupa ar grauzdiņiem un bekonu", allergens: "1;7;13", description: "/dārzeņi, saldais krējums, grauzdiņi, bekons/", price: "5.90 €" }
    ],
    saldieEdieni: [
        { title: "Dienas kūka - jautāt viesmīlim", allergens: "", description: "", price: "5.90 €" },
        { title: "Saldējums", allergens: "7", description: "", price: "4.00 €" },
        { title: "Saldējuma kokteilis", allergens: "7", description: "/ar putukrējuma cepuri/", price: "4.50 €" },
        { title: "Biezpiena pikas ar kazeņu mērci un karamelizētiem riekstiem", allergens: "7;8", description: "/biezpiena-putukrējuma deserts ar kazeņu mērci, riekstiem un ogām/", price: "6.50 €" },
        { title: "Karstais saldējums", allergens: "1;7", description: "/saldējums ar ogu mērci/", price: "5.90 €" },
        { title: "Crème brûlée", allergens: "3;7", description: "", price: "5.90 €" },
        { title: "Ābolu strūdele ar saldējumu", allergens: "1;3;7", description: "/ābolu strūdele ar saldējumu un vaniļas mērci/", price: "5.90 €" }
    ],
    piedevas: [
        { title: "Vārīti-apcepti kartupeļi", allergens: "1;13", description: "", price: "3.50 €" },
        { title: "Frī kartupeļi", allergens: "1;13", description: "", price: "3.50 €" },
        { title: "Rīsi", allergens: "1;7", description: "", price: "3.50 €" },
        { title: "Griķi", allergens: "1;7", description: "", price: "3.50 €" },
        { title: "Grilēti dārzeņi", allergens: "13", description: "", price: "3.50 €" },
        { title: "Dārzeņu salāti", allergens: "13", description: "", price: "2.00 €" },
        { title: "Siltā mērce", allergens: "1;7;13", description: "", price: "1.50 €" },
        { title: "Ķiploku-zaļumu mērce", allergens: "3;7", description: "", price: "1.50 €" },
        { title: "Majonēze", allergens: "3;7", description: "", price: "1.50 €" },
        { title: "Tomātu mērce", allergens: "", description: "", price: "1.50 €" },
        { title: "Saldā čilli mērce", allergens: "", description: "", price: "1.50 €" },
        { title: "Krējums", allergens: "7", description: "", price: "1.50 €" },
        { title: "Šokolādes mērce", allergens: "", description: "", price: "1.50 €" },
        { title: "Zemeņu mērce", allergens: "", description: "", price: "1.50 €" },
        { title: "Ievārījums", allergens: "", description: "", price: "1.50 €" }
    ],
    gala: [
        { title: "Urugvajas liellopa striploin steiks", allergens: "0.6 kg", description: "", price: "38.00 €" },
        { title: "Urugvajas liellopa antrekota steiks", allergens: "0.45 kg", description: "", price: "38.00 €" },
        { title: "T-bone steiks", allergens: "0.4 kg", description: "", price: "33.00 €" },
        { title: "Liellopa karbonāde sinepju marinādē", allergens: "1;3;10", description: "", price: "9.50 €" },
        { title: "Cūkgaļas fileja ar brūkleņu mērci un kartupeļiem", allergens: "1;7;13", description: "/cūkgaļas fileja, kartupeļi, dārzeņi, brūkleņu mērce/", price: "13.50 €" },
        { title: "Lēni gatavots sivēna stilbs", allergens: "1;7;12", description: "/cūkgaļas fileja, kartupeļi, dārzeņi, brūkleņu mērce/", price: "13.00 €" },
        { title: "Grilēta cūkas kakla karbonāde", allergens: "6;13", description: "/cūkgaļas fileja, kartupeļi, dārzeņi, brūkleņu mērce/", price: "8.50 €" },
        { title: "Franču karbonāde", allergens: "1;3;7;13", description: "/karbonāde, tomāti, majonēze, siers/", price: "7.50 €" },
        { title: "Karbonāde “Ķēķis”", allergens: "1;3;7;13", description: "/karbonāde, burkāni, sīpoli, majonēze, siers/", price: "7.50 €" },
        { title: "Karbonāde ar šampinjoniem un sieru", allergens: "1;3;7;13", description: "/karbonāde, šampinjoni, siers/", price: "7.50 €" },
        { title: "Tvaicēta laša fileja", allergens: "4", description: "", price: "13.00 €" },
        { title: "Mīdijas baltvīna mērcē ar franču bageti", allergens: "1;4;7;13", description: "", price: "17.50 €" },
        { title: "Zandarta fileja ar laima mērci, piedevām", allergens: "4;7;13", description: "/zaļo zirnīšu un burkānu biezeņi, salāti/", price: "16.30 €" },
        { title: "Pīles krūtiņa ar apelsīnu mērci un ceptiem ķirbjiem", allergens: "13", description: "", price: "17.20 €" },
        { title: "Vistas fileja kaperu mērcē ar piedevām", allergens: "1;7;13;15", description: "/kartupeļi, pildīti ar sieru, salāti/", price: "17.70 €" },
        { title: "Vistas fileja ar sieru un spinātiem", allergens: "7", description: "", price: "8.50 €" },
        { title: "Vistas karbonāde ar sieru un ananasiem", allergens: "1;3;7;13", description: "", price: "7.50 €" },
        { title: "Vistas filejas nageti", allergens: "1;3;7", description: "", price: "5.50 €" },
        { title: "Jēra karē", allergens: "1;7;13", description: "/jēra riba, kartupeļu biezenis, grilēti dārzeņi, saldskābā mērce/", price: "22.50 €" }
    ],
    salati: [
        { title: "Cēzara salāti ar vistas fileju", allergens: "1;3;7;10", description: "", price: "9.00 €" },
        { title: "Cēzara salāti ar tīģergarnelēm", allergens: "1;3;4;7;10", description: "", price: "11.50 €" },
        { title: "Siltie pastas salāti ar tīģergarnelēm", allergens: "1;4;7", description: "/pasta, zaļās pākšu pupiņas, ķirštomāti, tīģergarneles, siers/", price: "14.60 €" },
        { title: "Siltie pastas salāti ar vistas fileju", allergens: "1;7", description: "/pasta, zaļās pākšu pupiņas, ķirštomāti, vista, siers/", price: "11.80 €" }
    ],
    zuljeni: [
        { title: "Žuljēns ar vistas gaļu", allergens: "7;13", description: "", price: "6.50 €" },
        { title: "Žuljēns ar baravikām", allergens: "7;13", description: "", price: "8.50 €" }
    ],
};


function renderAllItems(category, containerId) {
    const container = document.getElementById(containerId);
    console.log(`Rendering ${category} into #${containerId}`);
    console.log(container);

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
        return;
    }

    // Clear the container
    container.innerHTML = "";

    // Loop through all items in the category
    menuData[category].forEach(item => {
        const menuItemHTML = `
            <div class="menu-item">
                <div class="menu-apraksts">
                    <h1>${item.title} <span>${item.allergens}</span></h1>
                    <p>${item.description}</p>
                </div>
                <div class="menu-cena">
                    <h2>${item.price}</h2>
                </div>
            </div>
        `;
        container.innerHTML += menuItemHTML;
    });

    // Ensure the static content remains
    container.innerHTML += `
        <div class="menu-img" id="${containerId}-img">
            <button class="alergeni" type="submit" onclick="window.open('./assets/alergeni.pdf')">
                <p class="underline-blue">Alergēni</p>
            </button>
        </div>
    `;
}

function renderAllItemsPamat(category, containerId) {
    const container = document.getElementById(containerId);
    console.log(`Rendering ${category} into #${containerId}`);
    console.log(container);

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
        return;
    }

    // Clear the container
    container.innerHTML = "";

    // Loop through all items in the category
    menuData[category].forEach(item => {
        const menuItemHTML = `
            <div class="menu-item">
                <div class="menu-apraksts">
                    <h1>${item.title} <span>${item.allergens}</span></h1>
                    <p>${item.description}</p>
                </div>
                <div class="menu-cena">
                    <h2>${item.price}</h2>
                </div>
            </div>
        `;
        container.innerHTML += menuItemHTML;
    });

    console.log(`${category} items rendered.`);
}



document.addEventListener("DOMContentLoaded", () => {
    renderAllItems("uzkodas", "uzkodas");
    renderAllItems("zupas", "zupas");
    renderAllItems("saldieEdieni", "saldieEdieni");
    renderAllItemsPamat("piedevas", "piedevas");
    renderAllItemsPamat("gala", "gala");
    renderAllItemsPamat("salati", "salati");
    renderAllItemsPamat("zuljeni", "zuljeni");
});
