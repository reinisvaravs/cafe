

// === LATVIAN === //

const menuData = {
    uzkodas: [
        { title: "Liellopa karpočo ar cieto sieru", allergens: "1713", description: "/liellops, siers, brušetes, olīveļļa/", price: "7.50 €" },
        { title: "Laša seviče", allergens: "413", description: "/lasis, avokado, sīpols, laima mērce, baziliks/", price: "7.50 €" },
        { title: "Siera plate", allergens: "1578", description: "/sieru izlase, grauzdēti rieksti, vīnogas, olīvas/", price: "9.50 €" },
        { title: "Maizes kraukšķi ar burkānu čipsiem", allergens: "1713", description: "/ar ķiplociņu un silto siera mērci/", price: "4.00 €" },
        { title: "Fritēto uzkodu plate ar mērci", allergens: "1713", description: "/fritētās uzkodas ar saldo čilli mērci/", price: "5.50 €" },
        { title: "Tīģergarneles baltvīna mērcē", allergens: "14713", description: "/ceptas tīģergarneles saldā krējuma-baltvīna mērcē ar grauzdētu maizi/", price: "18.20 €" }
    ],
    zupas: [
        { title: "Kokospiena-tīģergarneļu zupa", allergens: "481314", description: "/garneles, sēnes, kokosriekstu piens, laims, puravs, čilī/", price: "8.50 €" },
        { title: "Soļanka", allergens: "1713", description: "", price: "5.90 €" },
        { title: "Krēmīgā dārzeņu zupa ar grauzdiņiem un bekonu", allergens: "1713", description: "/dārzeņi, saldais krējums, grauzdiņi, bekons/", price: "5.90 €" }
    ],
    saldieEdieni: [
        { title: "Dienas kūka - jautāt viesmīlim", allergens: "", description: "", price: "5.90 €" },
        { title: "Saldējums", allergens: "7", description: "", price: "4.00 €" },
        { title: "Saldējuma kokteilis", allergens: "7", description: "/ar putukrējuma cepuri/", price: "4.50 €" },
        { title: "Biezpiena pikas ar kazeņu mērci un karamelizētiem riekstiem", allergens: "78", description: "/biezpiena-putukrējuma deserts ar kazeņu mērci, riekstiem un ogām/", price: "6.50 €" },
        { title: "Karstais saldējums", allergens: "17", description: "/saldējums ar ogu mērci/", price: "5.90 €" },
        { title: "Crème brûlée", allergens: "37", description: "", price: "5.90 €" },
        { title: "Ābolu strūdele ar saldējumu", allergens: "137", description: "/ābolu strūdele ar saldējumu un vaniļas mērci/", price: "5.90 €" }
    ],
    piedevas: [
        { title: "Vārīti - apcepti kartupeļi", allergens: "113", description: "", price: "3.50 €" },
        { title: "Frī kartupeļi", allergens: "113", description: "", price: "3.50 €" },
        { title: "Rīsi", allergens: "17", description: "", price: "3.50 €" },
        { title: "Griķi", allergens: "17", description: "", price: "3.50 €" },
        { title: "Grilēti dārzeņi", allergens: "13", description: "", price: "3.50 €" },
        { title: "Dārzeņu salāti", allergens: "13", description: "", price: "2.00 €" },
        { title: "Siltā mērce", allergens: "1713", description: "", price: "1.50 €" },
        { title: "Ķiploku-zaļumu mērce", allergens: "37", description: "", price: "1.50 €" },
        { title: "Majonēze", allergens: "37", description: "", price: "1.50 €" },
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
        { title: "Liellopa karbonāde sinepju marinādē", allergens: "1310", description: "", price: "9.50 €" },
        { title: "Jēra karē", allergens: "1713", description: "/jēra riba, kartupeļu biezenis, grilēti dārzeņi, saldskābā mērce/", price: "22.50 €" },
        { title: "Cūkgaļas fileja ar brūkleņu mērci un kartupeļiem", allergens: "1713", description: "/cūkgaļas fileja, kartupeļi, dārzeņi, brūkleņu mērce/", price: "13.50 €" },
        { title: "Lēni gatavots sivēna stilbs", allergens: "1712", description: "", price: "13.00 €" },
        { title: "Grilēta cūkas kakla karbonāde", allergens: "613", description: "", price: "8.50 €" },
        { title: "Franču karbonāde", allergens: "13713", description: "/karbonāde, tomāti, majonēze, siers/", price: "7.50 €" },
        { title: "Karbonāde “Ķēķis”", allergens: "13713", description: "/karbonāde, burkāni, sīpoli, majonēze, siers/", price: "7.50 €" },
        { title: "Karbonāde ar šampinjoniem un sieru", allergens: "13713", description: "/karbonāde, šampinjoni, siers/", price: "7.50 €" },
        { title: "Pīles krūtiņa ar apelsīnu mērci un ceptiem ķirbjiem", allergens: "13", description: "", price: "17.20 €" },
        { title: "Vistas fileja kaperu mērcē ar piedevām", allergens: "171315", description: "/kartupeļi, pildīti ar sieru, salāti/", price: "17.70 €" },
        { title: "Vistas fileja ar sieru un spinātiem", allergens: "7", description: "", price: "8.50 €" },
        { title: "Vistas karbonāde ar sieru un ananasiem", allergens: "13713", description: "", price: "7.50 €" },
        { title: "Vistas filejas nageti", allergens: "137", description: "", price: "5.50 €" },
        { title: "Tvaicēta laša fileja", allergens: "4", description: "", price: "13.00 €" },
        { title: "Mīdijas baltvīna mērcē ar franču bageti", allergens: "14713", description: "", price: "17.50 €" },
        { title: "Zandarta fileja ar laima mērci, piedevām", allergens: "4713", description: "/pasniegta ar zaļo zirnīšu un burkānu biezeņiem, salātiem/", price: "16.30 €" },
    ],
    salati: [
        { title: "Cēzara salāti ar vistas fileju", allergens: "13710", description: "", price: "9.00 €" },
        { title: "Cēzara salāti ar tīģergarnelēm", allergens: "134710", description: "", price: "11.50 €" },
        { title: "Siltie pastas salāti ar tīģergarnelēm", allergens: "147", description: "/pasta, zaļās pākšu pupiņas, ķirštomāti, tīģergarneles, siers/", price: "14.60 €" },
        { title: "Siltie pastas salāti ar vistas fileju", allergens: "17", description: "/pasta, zaļās pākšu pupiņas, ķirštomāti, vista, siers/", price: "11.80 €" },
    ],
    pankukas: [
        { title: "Kartupeļu pankūkas", allergens: "", description: "", price: "" },
        { title: "Ar krējumu", allergens: "1347", description: "", price: "6.50 €" },
        { title: "Ar lasi", allergens: "137", description: "", price: "8.50 €" },
        { title: "Ar baraviku mērci", allergens: "137", description: "", price: "8.50 €" },
        { title: "Plānās pankūkas", allergens: "137", description: "", price: "4.00 €" },
        { title: "Ar sieru un šķiņķi", allergens: "137", description: "", price: "5.00 €" },
    ],
    zuljeni: [
        { title: "Žuljēns ar vistas gaļu", allergens: "713", description: "", price: "6.50 €" },
        { title: "Žuljēns ar baravikām", allergens: "713", description: "", price: "8.50 €" },
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
}

function renderAllItems(category, containerId) {
    const container = document.getElementById(containerId)

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`)
        return
    }

    container.innerHTML = ""

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

    container.innerHTML = ""

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
    const container = document.getElementById(containerId)

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`)
        return
    }

    if (!drinksData[category]) {
        console.error(`Category '${category}' not found in drinksData.`)
        return
    }

    container.innerHTML = ""

    drinksData[category].forEach(item => {
        // Extract volumes and prices
        const volumes = item.variants.map(variant => variant.volume).filter(Boolean).join(" / ")
        const prices = item.variants
            .map(variant => variant.price)
            .sort((a, b) => parseFloat(b) - parseFloat(a)) 
            .join(" / ")

        // Conditionally render the origin only if it is provided
        const originHTML = item.origin ? `<p class="origin">${item.origin}</p>` : ""

        // Conditionally render the description for "kokteili" drinks
        const descriptionHTML =
            category === "kokteili" && item.description
                ? `<h4 class="description">${"/" + item.description + "/"}</h4>`
                : ""

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
        `
        container.innerHTML += drinksItemHTML
    })

    container.innerHTML += `
        <div class="drinks-img" id="vini-img"></div>
    `
}


// === ENGLISH === //

const menuDataENG = {
    uzkodas: [
        { title: "Beef Carpaccio with Hard Cheese", allergens: "1;7;13", description: "/beef, cheese, bruschetta, olive oil/", price: "7.50 €" },
        { title: "Salmon Ceviche", allergens: "4;13", description: "/salmon, avocado, onion, lime sauce, basil/", price: "7.50 €" },
        { title: "Cheese Plate", allergens: "1;5;7;8", description: "/selection of cheeses, roasted nuts, grapes, olives/", price: "9.50 €" },
        { title: "Bread Crisps with Carrot Chips", allergens: "1;7;13", description: "/with garlic and warm cheese sauce/", price: "4.00 €" },
        { title: "Plate of Deep-Fried Snacks", allergens: "1;7;13", description: "/deep-fried snacks with sweet chilli sauce/", price: "5.50 €" },
        { title: "Tiger Prawns in White Wine Sauce", allergens: "1;4;7;13 ", description: "/fried tiger prawns in sweet cream-white wine sauce with toasted bread/", price: "18.20 €" }
    ],
    zupas: [
        { title: "Coconut Milk - tiger prawn soup", allergens: "4;8;13;14", description: "/tiger prawns, mushrooms, coconut milk, lime, leek, chilli/", price: "8.50 €" },
        { title: "Solanka", allergens: "1;7;13", description: "", price: "5.90 €" },
        { title: "Creamy Vegetables Soup with Croutons and Bacon", allergens: "1;7;13", description: "/vegetables, sweet cream, toast, bacon/", price: "5.90 €" }
    ],
    saldieEdieni: [
        { title: "Cake of the Day - Ask the Waiter", allergens: "", description: "", price: "5.90 €" },
        { title: "Ice Cream", allergens: "7", description: "", price: "4.00 €" },
        { title: "Milkshake", allergens: "7", description: "", price: "4.00 €" },
        { title: "Mikshake with Whipped Cream", allergens: "7", description: "", price: "4.50 €" },
        { title: "Cottage Cheese Pies with Blackberry Sauce and Nuts", allergens: "7;8", description: "/curd-whipped cream dessert with blackberry sauce, nuts and berries/", price: "6.50 €" },
        { title: "Hot Ice Cream", allergens: "1;7", description: "/ice cream with berry sauce/", price: "5.90 €" },
        { title: "Crème Brûlée", allergens: "3;7", description: "", price: "5.90 €" },
        { title: "Apple Strudel with Ice Cream", allergens: "1;3;7", description: "/apple strudel with ice cream and vanilla sauce/", price: "5.90 €" }
    ],
    piedevas: [
        { title: "Boiled - Fried Potatoes", allergens: "1;13", description: "", price: "3.50 €" },
        { title: "French Fries", allergens: "1;13", description: "", price: "3.50 €" },
        { title: "Rice", allergens: "1;7", description: "", price: "3.50 €" },
        { title: "Buckwheat", allergens: "1;7", description: "", price: "3.50 €" },
        { title: "Grilled Vegetables", allergens: "13", description: "", price: "3.50 €" },
        { title: "Vegetable Salad", allergens: "13", description: "", price: "2.00 €" },
        { title: "Warm Sauce", allergens: "1;7;13", description: "", price: "1.50 €" },
        { title: "Garlic-Greens Sauce", allergens: "3;7", description: "", price: "1.50 €" },
        { title: "Mayonnaise", allergens: "3;7", description: "", price: "1.50 €" },
        { title: "Tomato Sauce", allergens: "", description: "", price: "1.50 €" },
        { title: "Sweet Chili Sauce", allergens: "", description: "", price: "1.50 €" },
        { title: "Cream", allergens: "7", description: "", price: "1.50 €" },
        { title: "Chocolate Sauce", allergens: "", description: "", price: "1.50 €" },
        { title: "Strawberry Sauce", allergens: "", description: "", price: "1.50 €" },
        { title: "Jam", allergens: "", description: "", price: "1.50 €" }
    ],
    gala: [
        { title: "Uruguayan Beef Striploin Steak", allergens: "0.4 kg", description: "", price: "38.00 €" },
        { title: "Uruguayan Beef Entrecote Steak", allergens: "0.4 kg", description: "", price: "38.00 €" },
        { title: "Argentine Beef Picanha Steak", allergens: "0.4 kg", description: "", price: "38.00 €" },
        { title: "Beef Chop in Mustard Marinade", allergens: "1;3;10", description: "", price: "9.50 €" },
        { title: "Lamb Curry", allergens: "1;7;13", description: "/lamb rib, mashed potatoes, grilled vegetables, sweet and sour sauce/", price: "22.50 €" },
        { title: "Pork Fillet with Lingonberry Sauce and Potatoes", allergens: "1;7;13", description: "/pork fillet, potatoes, vegetables, cranberry sauce/", price: "13.50 €" },
        { title: "Slow - Cooked Pork Shank", allergens: "1;7;12", description: "", price: "13.00 €" },
        { title: "Grilled Pork Neck Chop", allergens: "6;13", description: "", price: "8.50 €" },
        { title: "French Chop", allergens: "1;3;7;13", description: "/chop, tomato, mayonnaise, cheese/", price: "7.50 €" },
        { title: "Chop “Ķēķis”", allergens: "1;3;7;13", description: "/chop, carrots, onions, mayonnaise, cheese/", price: "7.50 €" },
        { title: "Chop with Champignons and Cheese", allergens: "1;3;7;13", description: "/chop, champignons, cheese/", price: "7.50 €" },
        { title: "Duck Breast with Orange Cauce and Roasted Pumpkins", allergens: "13", description: "", price: "17.20 €" },
        { title: "Chicken Fillet in Caper Sauce with Side Dishes", allergens: "1;7;13;15", description: "/served with potatoes stuffed with cheese, salad/", price: "17.70 €" },
        { title: "Chicken Fillet with Cheese and Spinach", allergens: "7", description: "", price: "8.50 €" },
        { title: "Chicken Chop with Cheese and Pineapple", allergens: "1;3;7;13", description: "", price: "7.50 €" },
        { title: "Chicken Nuggets", allergens: "1;3;7", description: "", price: "5.50 €" },
        { title: "Steamed Salmon Fillet", allergens: "4", description: "", price: "13.00 €" },
        { title: "Mussel with White Wine Sauce and French Baguette", allergens: "1;4;7;13", description: "", price: "17.50 €" },
        { title: "Zander Fillet with Lime Sauce, Side Dishes", allergens: "4;7;13", description: "/served with green peas and carrot purees, salad/", price: "16.30 €" }
    ],
    salati: [
        { title: "Caesar Salad with Chicken", allergens: "1;3;7;10", description: "", price: "9.00 €" },
        { title: "Caesar Salad with Tiger Prawns", allergens: "1;3;4;7;10", description: "", price: "11.50 €" },
        { title: "Warm Pasta Salad with Tiger Prawns", allergens: "1;4;7", description: "/pasta, green beans, cherry tomatoes, tiger prawns, cheese/", price: "14.60 €" },
        { title: "Warm Pasta Salad with Chicken Fillet", allergens: "1;7", description: "/pasta, green beans, cherry tomatoes, chicken, cheese/", price: "11.80 €" }
    ],
    pankukas: [
        { title: "Potato Pancakes", allergens: "", description: "", price: "" },
        { title: "With Cream", allergens: "1;3;4;7", description: "", price: "6.50 €" },
        { title: "With Salmon", allergens: "1;3;7", description: "", price: "8.50 €" },
        { title: "With Boletus Sauce", allergens: "1;3;7", description: "", price: "8.50 €" },
        { title: "Pancakes", allergens: "1;3;7", description: "", price: "4.00 €" },
        { title: "With Cheese and Ham", allergens: "1;3;7", description: "", price: "5.00 €" }
    ],
    zuljeni: [
        { title: "Julienne with Chicken", allergens: "7;13", description: "", price: "6.50 €" },
        { title: "Julienne with Boletus", allergens: "7;13", description: "", price: "8.50 €" }
    ],
    austeres: [
        { title: "Oyster Poesia Opened", allergens: "14", description: "/oyster served with red wine vinegar sauce and lemon/", price: "3.90 €" },
        { title: "Oyster Poesia Unopened", allergens: "14", description: "/oyster served with red wine vinegar sauce and lemon/", price: "3.50 €" },
        { title: "Oyster Selection or (Gold) Opened", allergens: "14", description: "/oyster served with red wine vinegar sauce and lemon/", price: "4.60 €" },
        { title: "Oyster Selection or (Gold) Unopened", allergens: "14", description: "/oyster served with red wine vinegar sauce and lemon/", price: "4.00 €" }
    ]
}
const drinksDataENG = {
    dzirkstosieViniUnSampaniesi: [
        { title: "VINCENT BRUT TRADITION", origin: "France", type: "Brut", variants: [{ volume: "75cl", price: "48 €" }] },
        { title: "COSTAROSS PROSECCO ROSE", origin: "Italy", type: "Extra Dry", variants: [{ volume: "75cl", price: "15 €" }] },
        { title: "COSTAROSS PROSECCO TREVISO", origin: "Italy", type: "Extra Dry", variants: [{ volume: "75cl", price: "15 €" }, { volume: "20cl", price: "6 €" }] },
        { title: "TBILISI PEAK", origin: "Georgia", type: "Semi-Sweet", variants: [{ volume: "75cl", price: "15 €" }] },
        { title: "PATRIARCHE HERITAGE", origin: "France", type: "Semi-Dry", variants: [{ volume: "75cl", price: "15 €" }] }
    ],
    vini: [
        { title: "CHATEAU DU TERME", origin: "France", type: "Dry", variants: [{ volume: "75cl", price: "18 €" }] },
        { title: "CHATEAU LATAPIE", origin: "France", type: "Dry", variants: [{ volume: "75cl", price: "15 €" }] },
        { title: "LABOURE-ROI MERLOT", origin: "France", type: "Dry", variants: [{ volume: "75cl", price: "14 €" }] },
        { title: "MOTTURA PRIMITIVO DI MANDURIA", origin: "Italy", type: "Dry", variants: [{ volume: "75cl", price: "18 €" }] },
        { title: "VINISTELLA PARCIALE APPASSIMENTO BIO", origin: "Italy", type: "Dry", variants: [{ volume: "75cl", price: "14 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "EL JARDIN DE LA EMPERATRIZ RIOJA RED", origin: "Spain", type: "Dry", variants: [{ volume: "75cl", price: "22 €" }] },
        { title: "PERDRIEL COLECCION SYRAH", origin: "Argentina", type: "Dry", variants: [{ volume: "75cl", price: "22 €" }] },
        { title: "NORTON COLECCION MALBEC", origin: "Argentina", type: "Dry", variants: [{ volume: "75cl", price: "14 €" }] },
        { title: "IVERIA KINDZMARAULI", origin: "Georgia", type: "Semi-Sweet", variants: [{ volume: "75cl", price: "15 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "CHABLIS LABOURE ROI", origin: "France", type: "Dry", variants: [{ volume: "75cl", price: "35 €" }] },
        { title: "LABOURE-ROI SAUVIGNON", origin: "France", type: "Dry", variants: [{ volume: "75cl", price: "14 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "VINISTELLA PINOT GRIGIO ORGANIC", origin: "Italy", type: "Dry", variants: [{ volume: "75cl", price: "14 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "SOAVE CLASSICO BOTTEGA", origin: "Italy", type: "Dry", variants: [{ volume: "75cl", price: "18 €" }] },
        { title: "RUDOLF MILLER RIESLING SPATLESE", origin: "Germany", type: "Sweet", variants: [{ volume: "75cl", price: "16 €" }] },
        { title: "AULA VERDEJO", origin: "Spain", type: "Dry", variants: [{ volume: "75cl", price: "14 €" }, { volume: "15cl", price: "3.80 €" }] },
        { title: "THE FOUNDER SAUVIGNON BLANC", origin: "New Zealand", type: "Dry", variants: [{ volume: "75cl", price: "18 €" }] },
        { title: "BODEGA NORTON CHARDONNAY BARREL SELECT", origin: "Argentina", type: "Dry", variants: [{ volume: "75cl", price: "16 €" }] }
    ],
    stiprieAlkoholiskie: [
        { title: "CAMUS VSOP BORDERIES", origin: "Cognac", type: "40%", variants: [{ volume: "50ml", price: "6.50 €" }] },
        { title: "LARSEN XO", origin: "Cognac", type: "40%", variants: [{ volume: "50ml", price: "5.20 €" }] },
        { title: "MARTELL VSOP", origin: "Cognac", type: "40%", variants: [{ volume: "50ml", price: "4.50 €" }] },
        { title: "HENNESSY VS", origin: "Cognac", type: "40%", variants: [{ volume: "50ml", price: "4.00 €" }] },
        { title: "COURVOISIER VS", origin: "Cognac", type: "40%", variants: [{ volume: "50ml", price: "3.50 €" }] },
        { title: "ARARAT 5-Star", origin: "Brandy", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "RĪGAS MELNAIS", origin: "Balsam", type: "45%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "RĪGAS MELNAIS CURRANT", origin: "Balsam", type: "30%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "GLENFARCLAS HERITAGE", origin: "Whiskey", type: "40%", variants: [{ volume: "50ml", price: "4.00 €" }] },
        { title: "SINGLE MALT", origin: "Whiskey", type: "x%", variants: [{ volume: "50ml", price: "x €" }] },
        { title: "CHIVAS REGAL 12YO", origin: "Whiskey", type: "40%", variants: [{ volume: "50ml", price: "3.50 €" }] },
        { title: "JACK DANIELS", origin: "Whiskey", type: "40%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "JIM BEAM WHITE", origin: "Whiskey", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "JAMESON", origin: "Whiskey", type: "40%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "ZACAPA 23Y RESERVA", origin: "Rum", type: "40%", variants: [{ volume: "50ml", price: "6.50 €" }] },
        { title: "HAVANA CLUB ESPECIAL", origin: "Rum", type: "37.5%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "COLONIST PREMIUM DARK", origin: "Rum", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "BACARDI OAKHEART", origin: "Rum", type: "35%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "BACARDI CARTA BLANC", origin: "Rum", type: "37.5%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "BACARDI CARTA NEGRA", origin: "Rum", type: "40%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "BEEFEATER", origin: "Gin", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "ABSOLUT", origin: "Vodka", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "KOSKENKORVA", origin: "Vodka", type: "40%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "SOBIESKI", origin: "Vodka", type: "40%", variants: [{ volume: "50ml", price: "2.00 €" }] },
        { title: "LIMONCINO BOTE", origin: "Liqueur", type: "30%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "BAILEYS", origin: "Liqueur", type: "17%", variants: [{ volume: "50ml", price: "3.00 €" }] },
        { title: "JAGERMEISTER", origin: "Liqueur", type: "35%", variants: [{ volume: "50ml", price: "2.50 €" }] },
        { title: "MARTINI BIANCO", origin: "Vermouth", type: "15%", variants: [{ volume: "50ml", price: "1.50 €" }] },
        { title: "APEROL BITTERS", origin: "Vermouth", type: "11%", variants: [{ volume: "50ml", price: "2.00 €" }] }
    ],
    vieglieAlkoholiskie: [
        { title: "Beer 'Mežpils'", origin: "Beer", type: null, variants: [{ volume: "500ml", price: "4.00 €" }, { volume: "350ml", price: "3.20 €" }] },
        { title: "Cider 'Somersby'", origin: "Cider", type: null, variants: [{ volume: "350ml", price: "2.50 €" }] }
    ],
    kokteili: [
        { title: "Summer Breeze", description: "absolut vodka, pineapple juice, lemon juice, mineral water, sugar syrup, lime, ice", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Sweet Sin", description: "gin, sprite, blackcurrant syrup", variants: [{ volume: null, price: "7.50 €" }] },
        { title: "Cranberry", description: "absolut vodka, cranberry juice, limoncello liqueur, lemon juice, ice", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Aperol Spritz", description: "aperol, champagne, prosecco, sprite, ice", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Winter Moment", description: "Jagermeistar liqueur, lemon juice, lime juice, grenadine syrup", variants: [{ volume: null, price: "6.50 €" }] },
        { title: "Ice Breaker", description: "Lime syrup, Blue Curacao syrup, Sprite, brown sugar", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Ladies' Shot", description: "Jagermeistar liqueur, orange juice, mint syrup", variants: [{ volume: null, price: "3.00 €" }] },
        { title: "Gentlemen's Shot", description: "Gin, sugar, blackcurrant syrup, lemon", variants: [{ volume: null, price: "3.00 €" }] },
        { title: "Touch of Wind", description: "Martini, schwepps, brown sugar, blue curacao syrup", variants: [{ volume: null, price: "8.50 €" }] },
        { title: "Mojito", description: "Rum, Mojito syrup, sugar, Sprite, mint, lime", variants: [{ volume: null, price: "8.50 €" }] },
        { title: "Limoncello Spritz", description: "Limoncello liqueur, prosecco, Sprite, lemon, mint", variants: [{ volume: null, price: "8.00 €" }] },
        { title: "Blue Lagoon", description: "Lime syrup, Blue Curacao syrup, Sprite, mint", variants: [{ volume: null, price: "6.50 €" }] },
        { title: "Mojito", description: "Mojito syrup, sugar, Sprite, mint, lime", variants: [{ volume: null, price: "6.50 €" }] },
        { title: "Aperol Spritz", description: "Orange syrup, Sprite, ice", variants: [{ volume: null, price: "6.50 €" }]
        }
    ]
}

function renderAllItemsENG(category, containerId) {
    const container = document.getElementById(containerId)

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`)
        return
    }

    container.innerHTML = ""

    menuDataENG[category].forEach(item => {
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

    container.innerHTML += `
        <div class="menu-img" id="${containerId}-img">
            <button class="alergeni" type="submit" onclick="window.open('./assets/alergeni.pdf')">
                <p class="underline-blue">Alergēni</p>
            </button>
        </div>
    `
}
function renderAllItemsPamatENG(category, containerId) {
    const container = document.getElementById(containerId)

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`)
        return
    }

    container.innerHTML = ""

    menuDataENG[category].forEach(item => {
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
function renderDrinksENG(category, containerId) {
    const container = document.getElementById(containerId)

    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`)
        return
    }

    if (!drinksData[category]) {
        console.error(`Category '${category}' not found in drinksData.`)
        return
    }

    container.innerHTML = ""

    drinksDataENG[category].forEach(item => {
        // Extract volumes and prices
        const volumes = item.variants.map(variant => variant.volume).filter(Boolean).join(" / ")
        const prices = item.variants
            .map(variant => variant.price)
            .sort((a, b) => parseFloat(b) - parseFloat(a)) 
            .join(" / ")

        // Conditionally render the origin only if it is provided
        const originHTML = item.origin ? `<p class="origin">${item.origin}</p>` : ""

        // Conditionally render the description for "kokteili" drinks
        const descriptionHTML =
            category === "kokteili" && item.description
                ? `<h4 class="description">${"/" + item.description + "/"}</h4>`
                : ""

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
        `
        container.innerHTML += drinksItemHTML
    })

    container.innerHTML += `
        <div class="drinks-img" id="vini-img"></div>
    `
}




document.addEventListener("DOMContentLoaded", () => {
    if (document.documentElement.lang === "lv") {
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
    }
    else {
        renderAllItemsENG("uzkodas", "uzkodas")
        renderAllItemsENG("zupas", "zupas")
        renderAllItemsENG("saldieEdieni", "saldieEdieni")
        renderAllItemsPamatENG("piedevas", "piedevas")
        renderAllItemsPamatENG("gala", "gala")
        renderAllItemsPamatENG("salati", "salati")
        renderAllItemsPamatENG("pankukas", "pankukas")
        renderAllItemsPamatENG("zuljeni", "zuljeni")
    
        renderDrinksENG("dzirkstosieViniUnSampaniesi", "dzirkstosieViniUnSampaniesi")
        renderDrinksENG("vini", "vini")
        renderDrinksENG("stiprieAlkoholiskie", "stiprieAlkoholiskie")
        renderDrinksENG("vieglieAlkoholiskie", "vieglieAlkoholiskie")
        renderDrinksENG("kokteili", "kokteili")
    }
})



