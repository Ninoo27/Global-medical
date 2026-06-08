// DATABASE COMPLETO DEI PRODOTTI
const databaseProdotti = {
    "letto-comfort": {
        titolo: "Letto Ortopedico Elettrico Global Comfort",
        descrizione: "Letto ortopedico elettrico singolo, ideale per disabili e anziani. Dotato di telecomando e pratiche sponde laterali abbattibili divise.",
        immagini: ["GLOBAL COMFORT-1.png", "GLOBAL COMFORT-2.png", "GLOBAL COMFORT-3.png", "GLOBAL COMFORT-4.png", "GLOBAL COMFORT-5.png"],
        dettagli: `
            <h4>Movimenti e Regolazioni:</h4>
            <ul>
                <li><strong>Altezza:</strong> Regolazione elettrica da 26 a 80 cm da terra.</li>
                <li><strong>Schienale:</strong> Inclinazione biocompensante fino a 70°.</li>
                <li><strong>Cosce e Gambe:</strong> Inclinazione elettrica cosce fino a 40° e regolazione manuale gambe in 5 posizioni.</li>
            </ul>
            <h4>Caratteristiche Tecniche:</h4>
            <ul>
                <li>Dimensioni esterne: 103 x 210 cm</li>
                <li>Portata massima: 225 kg</li>
            </ul>
            <h4>Dotazione Inclusa:</h4>
            <ul><li>Triangolo alzamalati, quattro ruote piroettanti con freno, supporti ferma materasso.</li></ul>
        `
    },
    "letto-deluxe": {
        titolo: "Letto Ortopedico Global Technical Deluxe",
        descrizione: "Letto elettrico ribassato da una piazza e mezza. Particolarmente indicato per agevolare i trasferimenti dalla carrozzina al letto e viceversa.",
        immagini: ["GLOBAL TECHNICAL DELUXE-1.png", "GLOBAL TECHNICAL DELUXE-2.png", "GLOBAL TECHNICAL DELUXE-3.png"],
        dettagli: `
            <h4>Movimenti e Regolazioni:</h4>
            <ul>
                <li><strong>Altezza ultra-bassa:</strong> Regolazione elettrica da soli 23 a 66 cm da terra per agevolare i passaggi.</li>
                <li><strong>Schienale e Cosce:</strong> Regolazione elettrica per la posizione seduta e per evitare lo scivolamento del bacino.</li>
            </ul>
            <h4>Caratteristiche Tecniche:</h4>
            <ul>
                <li>Dimensioni esterne: 135 x 215 cm (Misure rete: 120 x 195 cm)</li>
                <li>Portata massima: 185 kg</li>
            </ul>
        `
    },
    "letto-plus": {
        titolo: "Letto Ortopedico Global Technical Plus",
        descrizione: "Letto ortopedico elettrico da una piazza e mezza, pensato per anziani e disabili, studiato per favorire la gestione del paziente.",
        immagini: ["GLOBAL TECHNICAL PLUS-1.png", "GLOBAL TECHNICAL PLUS-2.png", "GLOBAL TECHNICAL PLUS-3.png", "GLOBAL TECHNICAL PLUS-4.png", "GLOBAL TECHNICAL PLUS-5.png"],
        dettagli: `
            <h4>Movimenti e Regolazioni:</h4>
            <ul>
                <li><strong>Altezza:</strong> Regolabile elettricamente da 38,5 cm a 81,5 cm.</li>
                <li><strong>Inclinazioni:</strong> Schienale (fino a 70°) e cosce regolabili tramite telecomando.</li>
            </ul>
            <h4>Caratteristiche Tecniche:</h4>
            <ul>
                <li>Dimensioni esterne: 132 x 211,5 cm</li>
                <li>Portata massima: 185 kg</li>
            </ul>
        `
    },
    "letto-luxor": {
        titolo: "Letto Ortopedico Global Luxor",
        descrizione: "Rete in legno multistrato di faggio con speciali funghi alveolati ammortizzanti a zone. Sostegno ergonomico personalizzabile per una detrazione fiscale del 19%. Telecomando Bluetooth di serie.",
        immagini: ["global luxor.png", "global luxor1.png", "global luxor2.png", "global luxor3.png", "global luxor4.png"],
        dettagli: `
            <h4>Struttura e Materiali di Qualità:</h4>
            <ul>
              <li><strong>Telaio robusto:</strong> Realizzato in multistrato di faggio (70x25 cm).</li>
              <li><strong>Piedi in legno:</strong> Rinforzati con angolari in acciaio per la massima stabilità.</li>
              <li><strong>Ferma materasso:</strong> Pratico accessorio in metallo posizionato ai piedi.</li>
            </ul>
            <h4>Ergonomia e Comfort Avanzato:</h4>
            <ul>
              <li><strong>Funghi Alveolati:</strong> Ammortizzanti a zone per un comfort su misura che si adatta alle forme del corpo.</li>
              <li><strong>Supporto Ergonomico:</strong> Con 30 regolatori rossi e un sostegno centrale estraibile per personalizzare la rigidità.</li>
            </ul>
            <h4>Portata e Technology:</h4>
            <ul>
              <li><strong>Portata:</strong> Supporto garantito fino a <strong>135 kg a persona</strong> (calcolato su un'altezza di 1,80 cm).</li>
              <li><strong>Telecomando Bluetooth:</strong> Di serie, per un controllo dei movimenti fluido e senza fili.</li>
            </ul>
            <h4>Agevolazioni e Misure:</h4>
            <ul>
              <li><strong>Recupero Fiscale:</strong> Detraibile al 19% nel modello 730.</li>
              <li><strong>Misure disponibili:</strong> Larghezze da 80 a 170 cm e Fuori Misura. Lunghezze 190, 195, 200 cm e Fuori Misura.</li>
              <li><strong>Altezza piedi:</strong> Kit 4 piedi in legno disponibili h 23/28/33/38/43/48 cm.</li>
            </ul>
        `
    },
    "scooter-3": {
        titolo: "Scooter Elettrico Global 3",
        descrizione: "Scooter ideale per uso esterno con quattro ammortizzatori indipendenti e sedile imbottito girevole.",
        immagini: ["GLOBAL 3-1.png", "GLOBAL 3-2.png", "GLOBAL 3-3.png", "GLOBAL 3-4.png"],
        dettagli: `
            <h4>Prestazioni:</h4>
            <ul>
                <li>Velocità fino a 13 km/h con un'autonomia fino a 35 km.</li>
                <li>Pendenza superabile: 21%. Portata: 160 kg.</li>
            </ul>
            <h4>Comfort e Sicurezza:</h4>
            <ul><li>Set completo di luci, frecce, stop, porta USB e ruote pneumatiche da 30 cm.</li></ul>
        `
    },
    "scooter-4sport": {
        titolo: "Scooter Global 4Sport",
        descrizione: "Scooter robusto, ideale per qualsiasi tipo di terreno. Condivide molte comodità con il modello base, con prestazioni maggiorate.",
        immagini: ["GLOBAL 4SPORT-1.png", "GLOBAL 4SPORT-2.png", "GLOBAL 4SPORT-3.png", "GLOBAL 4SPORT-4.png"],
        dettagli: `
            <h4>Prestazioni Maggiorate:</h4>
            <ul>
                <li>Velocità fino a 15 km/h, autonomia straordinaria fino a 45 km.</li>
                <li>Ruote pneumatiche grandi da 33 cm. Portata massima: 180 kg.</li>
            </ul>
        `
    },
    "scooter-3ruote": {
        titolo: "Scooter Global 3Ruote",
        descrizione: "Scooter dal design unico in stile Vespa. Offre una guida fluida e una sicurezza al top con freno a disco anteriore.",
        immagini: ["GLOBAL 3RUOTE-1.png"],
        dettagli: `
            <h4>Caratteristiche:</h4>
            <ul>
                <li>Autonomia fino a 40 km, pendenze superabili eccezionali fino al 25%.</li>
                <li>Display LCD, bauletto posteriore, vano sotto sella e antifurto con chiave. Disponibile con o senza cappottina.</li>
            </ul>
        `
    },
    "sollevatore-wc": {
        titolo: "Sollevatore Elettrico per WC",
        descrizione: "Aiuta ad alzarsi dal WC e accompagna il movimento di discesa, evitando di 'buttarsi'. Semplicissimo da installare in 10 minuti senza opere murarie.",
        immagini: ["sollevatore wc-1.jpg", "sollevatore wc-2.jpg", "sollevatore wc-3.jpg", "sollevatore wc-4.jpg", "sollevatore wc-5.jpg"],
        dettagli: `
            <h4>Vantaggi:</h4>
            <ul>
                <li>Si posiziona in 10 minuti. Movimenti fluidi e silenziosi tramite pulsanti posizionati sul bracciolo.</li>
                <li>Alimentazione a batteria (senza cavi elettrici scoperti in bagno).</li>
            </ul>
            <h4>Specifiche:</h4>
            <ul><li>Portata: 140 kg. Altezza max WC: 47 cm.</li></ul>
        `
    },
    "deambulatore-amico": {
        titolo: "Deambulatore Rollator Amico",
        descrizione: "Il deambulatore Rollator ideale per l'uso quotidiano. Struttura solida e certificata come Dispositivo Medico di Classe I.",
        immagini: ["Deambulatore.png"],
        dettagli: `
            <h4>Caratteristiche e Regolazioni:</h4>
            <ul>
                <li>Regolazione impugnature ergonomiche in 6 posizioni (da 78 a 88 cm).</li>
                <li>Blocco di stazionamento sicuro tramite freni a leva e seduta imbottita con schienale.</li>
                <li>Peso leggero di soli 7,5 kg, pieghevole e facile da trasportare in auto. Portata fino a 136 kg.</li>
            </ul>
        `
    },
    "sollevatore-clinico": {
        titolo: "Sollevatore Elettrico Clinico",
        descrizione: "Ideale per trasferimenti controllati dal letto alla carrozzina in totale sicurezza. Evita i rischi di cadute per l'utente.",
        immagini: ["Sollevatore elettrico-1.png", "Sollevatore elettrico-2.png"],
        dettagli: `
            <h4>Vantaggi:</h4>
            <ul>
                <li>Apertura delle gambe a pedale per avvicinarsi alla carrozzina. Semplicissimo da usare a livello domiciliare.</li>
                <li>Telaio robusto smontabile e funzionamento a batteria (autonomia 40 cicli).</li>
            </ul>
            <h4>Specifiche:</h4>
            <ul><li>Portata max 150 kg. Imbragatura standard (schiena e cosce) compresa.</li></ul>
        `
    },
    "deambulatore-runner": {
        titolo: "Deambulatore Global Runner",
        descrizione: "Rollator di alta qualità, leggero e pieghevole. Dotato di seduta imbottita, schienale di supporto e ampio cestino portaoggetti. Progettato per offrire la massima autonomia e sicurezza.",
        immagini: ["GLOBAL RUNNER-1.jpg.jpeg"],
        dettagli: `
            <h4>Caratteristiche Principali:</h4>
            <ul>
                <li><strong>Struttura:</strong> Telaio in alluminio ultra-leggero, facilmente ripiegabile per un trasporto agevole in auto.</li>
                <li><strong>Seduta e Comfort:</strong> Seduta imbottita comoda con schienale a fascia per una sosta in totale relax.</li>
                <li><strong>Sicurezza:</strong> Sistema frenante a doppia funzione per una frenata immediata o per il blocco di stazionamento.</li>
                <li><strong>Accessori:</strong> Cestino portaoggetti di grande capienza per trasportare la spesa o oggetti personali.</li>
            </ul>
            <h4>Specifiche Tecniche:</h4>
            <ul>
                <li>Impugnature anatomiche regolabili in altezza per un comfort personalizzato.</li>
                <li>Ruote piene ad alta resistenza, adatte sia per uso domestico che esterno.</li>
                <li>Design compatto per garantire maneggevolezza anche negli spazi più stretti.</li>
            </ul>
        `
    },
    "topper-magnetico": {
        titolo: "Topper Magnetico",
        descrizione: "Topper innovativo con terapia magnetica integrata. Stimola il microcircolo cellulare e dona equilibrio ed energia, migliorando la qualità del tuo riposo.",
        immagini: ["Magneto Topper.jpeg"],
        dettagli: `
            <h4>Benefici e Caratteristiche:</h4>
            <ul>
                <li><strong>Terapia Magnetica:</strong> Stimola il microcircolo e il metabolismo cellulare.</li>
                <li><strong>Comfort Superiore:</strong> Migliora significativamente la qualità del riposo.</li>
                <li><strong>Benessere:</strong> Dona equilibrio e nuova energia a ogni riposo.</li>
                <li><strong>Versatile:</strong> Compatibile con diversi tipi di materassi.</li>
            </ul>
            <h4>Specifiche Tecniche:</h4>
            <ul>
                <li><strong>Altezza Topper Finito:</strong> 4 cm Ca.</li>
                <li><strong>Flessibilità:</strong> Si piega perfettamente su reti manuali e a motore.</li>
                <li><strong>Lavaggio:</strong> Lavabile in lavatrice a 30° (non centrifugare).</li>
            </ul>
        `
    },
    
    // NUOVO PRODOTTO AGGIUNTO: POLTRONA GLOBAL LIVIA
    "poltrona-livia": {
        titolo: "Poltrona Relax Global Livia",
        descrizione: "Poltrona ortopedica dotata di comando elettrico, sistema a 2 motori con funzione alzapersona (Lift) e Kit Roller di serie per lo spostamento. Offre il massimo comfort quotidiano unito a un elegante tessuto antimacchia.",
        immagini: ["Global Livia.png"],
        dettagli: `
            <h4>Sollievo e Posizioni Relax (3 Posizioni):</h4>
            <ul>
                <li><strong>Funzione LIFT (Alzapersona):</strong> Accompagna il movimento di alzata in modo fluido, aiutando ad alzarsi in piedi con facilità e in totale sicurezza.</li>
                <li><strong>Posizione TV:</strong> Configurazione ideale per leggere, guardare la televisione o riposare mantenendo la corretta postura cervicale e lombare.</li>
                <li><strong>Posizione RELAX:</strong> Estensione totale indipendente di schienale e pediera per garantire il massimo del comfort e un relax assoluto.</li>
            </ul>
            <h4>Caratteristiche Strutturali e Materiali:</h4>
            <ul>
                <li><strong>Struttura Interna:</strong> Realizzata interamente in legno multistrato ultra-resistente.</li>
                <li><strong>Imbottitura:</strong> Poliuretano espanso ad alta densità indeformabile, studiato per un supporto ottimale della colonna.</li>
                <li><strong>Movimentazione Professionale:</strong> Meccanismo a 2 motori indipendenti per gestire schienale e poggiapiedi in modo separato.</li>
                <li><strong>Kit Roller di Serie:</strong> Pratico sistema di ruote a scomparsa per spostare agevolamente la poltrona da una stanza all'altra della casa.</li>
            </ul>
            <h4>Tessuto e Varianti Colore:</h4>
            <ul>
                <li><strong>Rivestimento Premium:</strong> Tessuto tecnico <em>Savoy Antimacchia</em> d'alta qualità (Composizione: 89% poliestere, 8% poliammide, 2% cotone, 1% viscosa).</li>
                <li><strong>Colorazioni Disponibili a Catalogo:</strong> Cod. 20 Beige | Cod. 70 Rosso | Cod. 94 Visone.</li>
            </ul>
        `
    }
};

let immaginiProdottoCorrente = [];
let indiceFotoAttuale = 0;

function apriModale(idProdotto) {
    const prodotto = databaseProdotti[idProdotto];
    immaginiProdottoCorrente = prodotto.immagini;
    indiceFotoAttuale = 0;
    
    document.getElementById("modalTitolo").innerText = prodotto.titolo;
    document.getElementById("modalDescrizione").innerText = prodotto.descrizione;
    document.getElementById("modalDettagli").innerHTML = prodotto.dettagli;
    
    const fotoPrincipale = document.getElementById("modalFotoPrincipale");
    fotoPrincipale.src = immaginiProdottoCorrente[0];
    
    const contenitoreGalleria = document.getElementById("modalGalleriaScorrevole");
    contenitoreGalleria.innerHTML = "";
    
    immaginiProdottoCorrente.forEach((nomeFoto, indice) => {
        const miniatura = document.createElement("img");
        miniatura.src = nomeFoto;
        miniatura.className = "thumb-img" + (indice === 0 ? " active" : "");
        miniatura.onclick = function() {
            fotoPrincipale.src = nomeFoto;
            indiceFotoAttuale = indice;
            document.querySelectorAll(".thumb-img").forEach(t => t.classList.remove("active"));
            miniatura.classList.add("active");
        };
        contenitoreGalleria.appendChild(miniatura);
    });
    
    const numeroWhatsApp = "393924440598";
    const messaggio = encodeURI("Salve, vorrei avere maggiori informazioni sul prodotto: " + prodotto.titolo);
    document.getElementById("modalWhatsapp").href = "https://wa.me/" + numeroWhatsApp + "?text=" + messaggio;
    
    document.getElementById("modalProdotto").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function chiudiModale() {
    document.getElementById("modalProdotto").style.display = "none";
    document.body.style.overflow = "auto";
}

function apriLightboxAttuale() {
    const lightbox = document.getElementById("lightboxFoto");
    const lightboxImg = document.getElementById("lightboxImgGrande");
    lightboxImg.src = immaginiProdottoCorrente[indiceFotoAttuale];
    lightbox.style.display = "flex";
}

function chiudiLightbox() {
    document.getElementById("lightboxFoto").style.display = "none";
}

function cambiaFotoLightbox(direzione) {
    indiceFotoAttuale = (indiceFotoAttuale + direction + immaginiProdottoCorrente.length) % immaginiProdottoCorrente.length;
    document.getElementById("lightboxImgGrande").src = immaginiProdottoCorrente[indiceFotoAttuale];
    document.getElementById("modalFotoPrincipale").src = immaginiProdottoCorrente[indiceFotoAttuale];
    
    const miniature = document.querySelectorAll(".thumb-img");
    if(miniature.length > 0) {
        miniature.forEach(t => t.classList.remove("active"));
        miniature[indiceFotoAttuale].classList.add("active");
        miniature[indiceFotoAttuale].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
}

// GESTIONE FINESTRE SONDAGGIO E OMAGGIO
function apriSondaggio() {
    document.getElementById("modalSondaggio").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function chiudiSondaggio() {
    document.getElementById("modalSondaggio").style.display = "none";
    document.body.style.overflow = "auto";
}

function apriOmaggio() {
    document.getElementById("modalOmaggio").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function chiudiOmaggio() {
    document.getElementById("modalOmaggio").style.display = "none";
    document.body.style.overflow = "auto";
}

// LOGICHE DI INIZIALIZZAZIONE DELLA PAGINA
document.addEventListener('DOMContentLoaded', function() {
    // Ricerca Live Prodotti
    const searchInput = document.getElementById('productSearch');
    const productCards = document.querySelectorAll('.product-card');
    if(searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            productCards.forEach(card => {
                const productKeywords = card.getAttribute('data-name');
                if (productKeywords.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Banner Cookie
    const banner = document.getElementById('cookieBanner');
    const btnAccetta = document.getElementById('btnAccettaCookie');
    if (banner && btnAccetta) {
        if (!localStorage.getItem('cookieAccettati')) {
            setTimeout(function() { banner.classList.add('show'); }, 500);
        }
        btnAccetta.addEventListener('click', function() {
            localStorage.setItem('cookieAccettati', 'true');
            banner.classList.remove('show');
        });
    }

    // Blocco Nord Italia per il Sondaggio
    const formSondaggio = document.getElementById('formSondaggioPersonale');
    if(formSondaggio) {
        formSondaggio.addEventListener('submit', function(event) {
            const controlloRegione = document.getElementById('controlloRegione');
            if(controlloRegione) {
                const regioneSelezionata = controlloRegione.value;
                if (regioneSelezionata !== 'Nord Italia') {
                    event.preventDefault(); 
                    alert("Ci dispiace! L'offerta e l'omaggio attualmente sono attivi solo per i residenti nel NORD ITALIA. Grazie per il tuo interesse.");
                }
            }
        });
    }
});
