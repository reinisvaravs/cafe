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
        { title: "Soļanka", allergens: "1;7;13", description: "", price: "5.90 €" },
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
        { title: "Urugvajas liellopa striploin steiks", allergens: "0.4 kg", description: "", price: "38.00 €" },
        { title: "Urugvajas liellopa antrekota steiks", allergens: "0.4 kg", description: "", price: "38.00 €" },
        { title: "Argentīnas liellopa picanha steiks", allergens: "0.4 kg", description: "", price: "38.00 €" },
        { title: "Liellopa karbonāde sinepju marinādē", allergens: "1;3;10", description: "", price: "9.50 €" },
        { title: "Jēra karē", allergens: "1;7;13", description: "/jēra riba, kartupeļu biezenis, grilēti dārzeņi, saldskābā mērce/", price: "22.50 €" },
        { title: "Cūkgaļas fileja ar brūkleņu mērci un kartupeļiem", allergens: "1;7;13", description: "/cūkgaļas fileja, kartupeļi, dārzeņi, brūkleņu mērce/", price: "13.50 €" },
        { title: "Lēni gatavots sivēna stilbs", allergens: "1;7;12", description: "", price: "13.00 €" },
        { title: "Grilēta cūkas kakla karbonāde", allergens: "6;13", description: "", price: "8.50 €" },
        { title: "Franču karbonāde", allergens: "1;3;7;13", description: "/karbonāde, tomāti, majonēze, siers/", price: "7.50 €" },
        { title: "Karbonāde “Ķēķis”", allergens: "1;3;7;13", description: "/karbonāde, burkāni, sīpoli, majonēze, siers/", price: "7.50 €" },
        { title: "Karbonāde ar šampinjoniem un sieru", allergens: "1;3;7;13", description: "/karbonāde, šampinjoni, siers/", price: "7.50 €" },
        { title: "Pīles krūtiņa ar apelsīnu mērci un ceptiem ķirbjiem", allergens: "13", description: "", price: "17.20 €" },
        { title: "Vistas fileja kaperu mērcē ar piedevām", allergens: "1;7;13;15", description: "/kartupeļi, pildīti ar sieru, salāti/", price: "17.70 €" },
        { title: "Vistas fileja ar sieru un spinātiem", allergens: "7", description: "", price: "8.50 €" },
        { title: "Vistas karbonāde ar sieru un ananasiem", allergens: "1;3;7;13", description: "", price: "7.50 €" },
        { title: "Vistas filejas nageti", allergens: "1;3;7", description: "", price: "5.50 €" },
        { title: "Tvaicēta laša fileja", allergens: "4", description: "", price: "13.00 €" },
        { title: "Mīdijas baltvīna mērcē ar franču bageti", allergens: "1;4;7;13", description: "", price: "17.50 €" },
        { title: "Zandarta fileja ar laima mērci, piedevām", allergens: "4;7;13", description: "/pasniegta ar zaļo zirnīšu un burkānu biezeņiem, salātiem/", price: "16.30 €" },
    ],
    salati: [
        { title: "Cēzara salāti ar vistas fileju", allergens: "1;3;7;10", description: "", price: "9.00 €" },
        { title: "Cēzara salāti ar tīģergarnelēm", allergens: "1;3;4;7;10", description: "", price: "11.50 €" },
        { title: "Siltie pastas salāti ar tīģergarnelēm", allergens: "1;4;7", description: "/pasta, zaļās pākšu pupiņas, ķirštomāti, tīģergarneles, siers/", price: "14.60 €" },
        { title: "Siltie pastas salāti ar vistas fileju", allergens: "1;7", description: "/pasta, zaļās pākšu pupiņas, ķirštomāti, vista, siers/", price: "11.80 €" },
    ],
    pankukas: [
        { title: "Kartupeļu pankūkas", allergens: "", description: "", price: "" },
        { title: "Ar krējumu", allergens: "1;3;4;7", description: "", price: "6.50 €" },
        { title: "Ar lasi", allergens: "1;3;7", description: "", price: "8.50 €" },
        { title: "Ar baraviku mērci", allergens: "1;3;7", description: "", price: "8.50 €" },
        { title: "Plānās pankūkas", allergens: "1;3;7", description: "", price: "4.00 €" },
        { title: "Ar sieru un šķiņķi", allergens: "1;3;7", description: "", price: "5.00 €" },
    ],
    zuljeni: [
        { title: "Žuljēns ar vistas gaļu", allergens: "7;13", description: "", price: "6.50 €" },
        { title: "Žuljēns ar baravikām", allergens: "7;13", description: "", price: "8.50 €" },
    ],
    austeres: [
        { title: "Austere Poesia atvērta", allergens: "14", description: "/austere pasniegta ar sarkanvīna etiķa mērci un citronu/", price: "3.90 €" },
        { title: "Austere Poesia neatvērta", allergens: "14", description: "/austere pasniegta ar sarkanvīna etiķa mērci un citronu/", price: "3.50 €" },
        { title: "Austere Selection or (Gold) atvērta", allergens: "14", description: "/austere pasniegta ar sarkanvīna etiķa mērci un citronu/", price: "4.60 €" },
        { title: "Austere Selection or (Gold) neatvērta", allergens: "14", description: "/austere pasniegta ar sarkanvīna etiķa mērci un citronu/", price: "4.00 €" },
    ],
}


const drinksData = {
    dzirkstosieViniUnSampaniesi: [
        { title: "VINCENT BRUT TRADITION", origin: "Francija", type: "Bruts", variants: [{ volume: "75cl", price: "48 €" }] },
        { title: "COSTAROSS PROSECCO ROSE", origin: "Itālija", type: "Ekstra sauss", variants: [{ volume: "75cl", price: "15 €" }] },
        { title: "COSTAROSS PROSECCO TREVISO", origin: "Itālija", type: "Ekstra sauss", variants: [{ volume: "75cl", price: "15 €" }, { volume: "20cl", price: "6 €" }] },
        { title: "TBILISI PEAK", origin: "Gruzija", type: "Pussalds", variants: [{ volume: "75cl", price: "15 €" }] },
        { title: "PATRIARCHE HERITAGE", origin: "Francija", type: "Pussauss", variants: [{ volume: "75cl", price: "15 €" }] },
    ],
    vini: [
        { title: "CHATEAU DU TERME", origin: "Francija", type: "Sauss", variants: [{ volume: "75cl", price: "18 €" }] },
        { title: "CHATEAU LATAPIE", origin: "Francija", type: "Sauss", variants: [{ volume: "75cl", price: "15 €" }] },
        { title: "LABOURE-ROI MERLOT", origin: "Francija", type: "Sauss", variants: [{ volume: "75cl", price: "14 €" }] },
        { title: "MOTTURA PRIMITIVO DI MANDURIA", origin: "Itālija", type: "Sauss", variants: [{ volume: "75cl", price: "18 €" }] },
        { title: "VINISTELLA PARCIALE APPASSIMENTO BIO", origin: "Itālija", type: "Sauss", variants: [{ volume: "75cl", price: "14 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "EL JARDIN DE LA EMPERATRIZ RIOJA RED", origin: "Spānija", type: "Sauss", variants: [{ volume: "75cl", price: "22 €" }] },
        { title: "PERDRIEL COLECCION SYRAH", origin: "Argentīna", type: "Sauss", variants: [{ volume: "75cl", price: "22 €" }] },
        { title: "NORTON COLECCION MALBEC", origin: "Argentīna", type: "Sauss", variants: [{ volume: "75cl", price: "14 €" }] },
        { title: "IVERIA KINDZMARAULI", origin: "Gruzija", type: "Pussalds", variants: [{ volume: "75cl", price: "15 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "CHABLIS LABOURE ROI", origin: "Francija", type: "Sauss", variants: [{ volume: "75cl", price: "35 €" }] },
        { title: "LABOURE-ROI SAUVIGNON", origin: "Francija", type: "Sauss", variants: [{ volume: "75cl", price: "14 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "VINISTELLA PINOT GRIGIO ORGANIC", origin: "Itālija", type: "Sauss", variants: [{ volume: "75cl", price: "14 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "SOAVE CLASSICO BOTTEGA", origin: "Itālija", type: "Sauss", variants: [{ volume: "75cl", price: "18 €" }] },
        { title: "RUDOLF MILLER RIESLING SPATLESE", origin: "Vācija", type: "Salds", variants: [{ volume: "75cl", price: "16 €" }] },
        { title: "AULA VERDEJO", origin: "Spānija", type: "Sauss", variants: [{ volume: "75cl", price: "14 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "THE FOUNDER SAUVIGNON BLANC", origin: "Jaunzēlande", type: "Sauss", variants: [{ volume: "75cl", price: "18 €" }] },
        { title: "BODEGA NORTON CHARDONNAY BARREL SELECT", origin: "Argentīna", type: "Sauss", variants: [{ volume: "75cl", price: "16 €" }] },
    ],
    stiprieAlkoholiskie: [
        { title: "CAMUS VSOP BORDERIES", origin: "konjaks", type: "40%", variants: [{ volume: "50ml", price: "6.50 €" }] },
        { title: "LARSEN XO", origin: "konjaks", type: "40%", variants: [{ volume: "50ml", price: "5.20 €" }] },
        { title: "MARTELL VSOP", origin: "konjaks", type: "40%", variants: [{ volume: "50ml", price: "4.50 €" }] },
        { title: "HENNESSY VS", origin: "konjaks", type: "40%", variants: [{ volume: "50ml", price: "4.00 €" }] },
        { title: "COURVOISIER VS", origin: "konjaks", type: "40%", variants: [{ volume: "50ml", price: "3.50 €" }] },        
        { title: "ARARAT 5zv.", origin: "brendijs", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },        
        { title: "RĪGAS MELNAIS", origin: "balzams", type: "45%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "RĪGAS MELNAIS CURRANT", origin: "balzams", type: "30%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "GLENFARCLAS HERITAGE", origin: "viskijs", type: "40%", variants: [{ volume: "50ml", price: "4.00 €" }] },
        { title: "SINGLE MALT", origin: "viskijs", type: "x%", variants: [{ volume: "50ml", price: "x €" }] },
        { title: "CHIVAS REGAL 12YO", origin: "viskijs", type: "40%", variants: [{ volume: "50ml", price: "3.50 €" }] },
        { title: "JACK DANIELS", origin: "viskijs", type: "40%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "JIM BEAM WHITE", origin: "viskijs", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "JAMESON", origin: "viskijs", type: "40%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "ZACAPA 23Y RESERVA", origin: "rums", type: "40%", variants: [{ volume: "50ml", price: "6.50 €" }] },
        { title: "HAVANA CLUB ESPECIAL", origin: "rums", type: "37.5%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "COLONIST PREMIUM DARK", origin: "rums", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "BACARDI OAKHEART", origin: "rums", type: "35%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "BACARDI CARTA BLANC", origin: "rums", type: "37.5%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "BACARDI CARTA NEGRA", origin: "rums", type: "40%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "BEEFEATER", origin: "džins", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "ABSOLUT", origin: "degvīns", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "KOSKENKORVA", origin: "degvīns", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "SOBIESKI", origin: "degvīns", type: "40%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "LIMONCINO BOTE", origin: "liķieris", type: "30%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "BAILEYS", origin: "liķieris", type: "17%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "JAGERMEISTER", origin: "liķieris", type: "35%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "MARTINI BIANCO", origin: "vermuts", type: "15%", variants: [{ volume: "50ml", price: "1.50 €" }] },
        { title: "APERITĪVS BITTERS APEROL", origin: "vermuts", type: "11%", variants: [{ volume: "50ml", price: "2.00 €" }] },
    ],    
    vieglieAlkoholiskie: [
        { title: "Alus “Mežpils”", origin: "alus", type: null, variants: [{ volume: "500ml", price: "4.00 €" }, { volume: "350ml", price: "3.20 €" }] },
        { title: "Sidrs “Somersby”", origin: "sidrs", type: null, variants: [{ volume: "350ml", price: "2.50 €" }] }
    ],
    kokteili: [
        { title: "Vasaras brīze", description: "absolut degvīns, ananasu sula, citronu sula, minerālūdens, cukura sīrups, laims, ledus", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Saldais grēks", description: "Džins, sprite, upeņu sīrups", variants: [{ volume: null, price: "7.50 €" }] },
        { title: "Dzērvenīte", description: "absolut degvīns, dzērveņu sula, limončello liķieris, citronu sula, ledus", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Aperol Spritz", description: "Aperols, šampanietis, prosecco, sprite, ledus", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Ziemas mirklis", description: "Jagermeistar liķieris, citronu sula, laima sula, grenadīna sīrups", variants: [{ volume: null, price: "6.50 €" }] },
        { title: "Ledlauzis", description: "Laima sīrups, blue curacao sīrups, sprite, brūnais cukurs", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Dāmu šots", description: "Jagermeistar liķieris, apelsīnu sula, piparmētru sīrups", variants: [{ volume: null, price: "3.00 €" }] },
        { title: "Kungu šots", description: "Džins, cukurs, upeņu sīrups, citrons", variants: [{ volume: null, price: "3.00 €" }] },
        { title: "Vēja pieskāriens", description: "Martini, schwepps, brūnais cukurs, blue curacao sīrups", variants: [{ volume: null, price: "8.50 €" }] },
        { title: "Mohito", description: "Rums, mohito sīrups, cukurs, sprite, piparmētras, laims", variants: [{ volume: null, price: "8.50 €" }] },
        { title: "Limoncello Spritz", description: "Limončello liķieris, prosecco, sprite, citrons, piparmētra", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Blue Lagoon", description: "laima sīrups, blue curacao sīrups, sprite, piparmētras", variants: [{ volume: null, price: "6.50 €" }] },
        { title: "Mohito", description: "Mohito sīrups, cukurs, sprite, piparmētras, laims", variants: [{ volume: null, price: "6.50 €" }] },
        { title: "Aperol Spritz", description: "Apelsīnu sīrups, sprite, ledus", variants: [{ volume: null, price: "6.50 €" }] },
    ],
};





function renderAllItems(category, containerId) {
    const container = document.getElementById(containerId)

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`)
        return
    }

    // Clear the container
    container.innerHTML = ""

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
        `
        container.innerHTML += menuItemHTML
    })

    // Ensure the static content remains
    container.innerHTML += `
        <div class="menu-img" id="${containerId}-img">
            <button class="alergeni" type="submit" onclick="window.open('./assets/alergeni.pdf')">
                <p class="underline-blue">Alergēni</p>
            </button>
        </div>
    `
}

function renderAllItemsPamat(category, containerId) {
    const container = document.getElementById(containerId)

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`)
        return
    }

    // Clear the container
    container.innerHTML = ""

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
        `
        container.innerHTML += menuItemHTML
    })
}

function renderDrinks(category, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
        return;
    }

    if (!drinksData[category]) {
        console.error(`Category '${category}' not found in drinksData.`);
        return;
    }

    container.innerHTML = "";

    drinksData[category].forEach(item => {
        // Extract volumes and prices
        const volumes = item.variants.map(variant => variant.volume).filter(Boolean).join(" / ");
        const prices = item.variants
            .map(variant => variant.price)
            .sort((a, b) => parseFloat(b) - parseFloat(a)) 
            .join(" / ");

        // Conditionally render the origin only if it is provided
        const originHTML = item.origin ? `<p class="origin">${item.origin}</p>` : "";

        // Conditionally render the description for "kokteili" drinks
        const descriptionHTML =
            category === "kokteili" && item.description
                ? `<h4 class="description">${"/" + item.description + "/"}</h4>`
                : "";

        const drinksItemHTML = `
            <div class="drink-item">
                <div class="drink-title-div">
                    ${originHTML}
                    <h2 class="drink-title">${item.title}</h2>
                    <h3 class="type">${item.type ? `${item.type}` : ""}</h3>
                    ${descriptionHTML}
                </div>
                <div class="drink-variants-div">
                    <p>${volumes}</p>
                    <p>${prices}</p>
                </div>
            </div>
        `;
        container.innerHTML += drinksItemHTML;
    });

    container.innerHTML += `
        <div class="drinks-img" id="vini-img"></div>
    `;
}



document.addEventListener("DOMContentLoaded", () => {
    renderAllItems("uzkodas", "uzkodas")
    renderAllItems("zupas", "zupas")
    renderAllItems("saldieEdieni", "saldieEdieni")
    renderAllItemsPamat("piedevas", "piedevas")
    renderAllItemsPamat("gala", "gala")
    renderAllItemsPamat("salati", "salati")
    renderAllItemsPamat("pankukas", "pankukas")
    renderAllItemsPamat("zuljeni", "zuljeni")

    renderDrinks("dzirkstosieViniUnSampaniesi", "dzirkstosieViniUnSampaniesi")
    renderDrinks("vini", "vini")
    renderDrinks("stiprieAlkoholiskie", "stiprieAlkoholiskie")
    renderDrinks("vieglieAlkoholiskie", "vieglieAlkoholiskie")
    renderDrinks("kokteili", "kokteili")
})



