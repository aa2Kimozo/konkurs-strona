function Info(num) {
    document.getElementById("banner").style.display = "none";
    document.getElementById("footer").style.display = "none";

    let content = "";

    switch (num) {
        case 1:
            content = 'Globalne ocieplenie - wzrost średnich temperatur na Ziemi spowodowany głównie przez emisję gazów cieplarnianych, prowadzący do topnienia lodowców, ekstremalnych zjawisk pogodowych i zmian w ekosystemach.';
            break;
        case 2:
            content = 'Zanieczyszczenie planety - nagromadzenie odpadów, plastiku, chemikaliów i toksyn w powietrzu, wodzie i glebie, które zagrażają zdrowiu ludzi, zwierząt i roślin.';
            break;
        case 3:
            content = 'Oszustwa internetowe - działania mające na celu wyłudzenie pieniędzy lub danych osobowych w sieci. Przykłady: phishing (podszywanie się pod bank lub portal), fałszywe sklepy online, scam na aukcjach internetowych, fałszywe wiadomości e-mail z wirusami lub ransomware.';
            break;
        case 4:
            content = 'Fake News z AI - fałszywe lub zmanipulowane informacje tworzone lub wzmacniane przez sztuczną inteligencję, które mogą wprowadzać w błąd opinię publiczną i wpływać na decyzje ludzi.';
            break;
    }

    document.getElementById("top").innerHTML = '<h1>Moja generacja. Młodzi dla przyszłości</h1><br>' + content + '<button id="powrot" onclick="powrot()">❌</button>';
}

function powrot() {
    document.getElementById("top").innerHTML = `
                <div id="problemy">
                    <h1>Moja generacja. Młodzi dla przyszłości</h1>

                    <label for="prob">Problemy bieżące</label>        
                    <ul id="prob">
                        <li>Globalne ocieplenie <button id="info" onclick="Info(1)">→</button></li>
                        <li>Zanieczyszczenie planety <button id="info" onclick="Info(2)">→</button></li>
                        <li>Oszustwa internetowe <button id="info" onclick="Info(3)">→</button></li>
                        <li>Fake News z AI <button id="info" onclick="Info(4)">→</button></li>
                    </ul>
                </div>
                <label for="rozw">Możliwe rozwiązania</label>
                <ul id="rozw">
                    <li>Korzystanie z komunikacji miejskiej aby zmniejszyć emisję spalin</li>
                    <li>Segregacja śmieci</li>
                    <li>Weryfikacja linków w sieci</li>
                    <li>Szukanie informacji z zaufanych źródeł</li>
                </ul>
            `;

    document.getElementById("banner").style.display = "block";
    document.getElementById("footer").style.display = "block";
}
