function Info(num){


switch(num){
 case 1:
  document.getElementById("top").innerHTML = '<h1>Moja generacja. Młodzi dla przyszłości</h1> <br>Globalne ocieplenie - wzrost średnich temperatur na Ziemi spowodowany głównie przez emisję gazów cieplarnianych, prowadzący do topnienia lodowców, ekstremalnych zjawisk pogodowych i zmian w ekosystemach. <button id="powrot" onclick="powrot()">❌</button>';
  break;
   case 2:
  document.getElementById("top").innerHTML = '<h1>Moja generacja. Młodzi dla przyszłości</h1> <br>Zanieczyszczenie planety - nagromadzenie odpadów, plastiku, chemikaliów i toksyn w powietrzu, wodzie i glebie, które zagrażają zdrowiu ludzi, zwierząt i roślin. <button id="powrot" onclick="powrot()">❌</button>';
  break;
   case 3:
  document.getElementById("top").innerHTML = '<h1>Moja generacja. Młodzi dla przyszłości</h1> <br>Oszustwa internetowe - działania mające na celu wyłudzenie pieniędzy lub danych osobowych w sieci. Przykłady: phishing (podszywanie się pod bank lub portal), fałszywe sklepy online, scam na aukcjach internetowych, fałszywe wiadomości e-mail z wirusami lub ransomware. <button id="powrot" onclick="powrot()">❌</button>';
  break;
   case 4:
  document.getElementById("top").innerHTML = '<h1>Moja generacja. Młodzi dla przyszłości</h1> <br>Fake News z AI - fałszywe lub zmanipulowane informacje tworzone lub wzmacniane przez sztuczną inteligencję, które mogą wprowadzać w błąd opinię publiczną i wpływać na decyzje ludzi. <button id="powrot" onclick="powrot()">❌</button>';
  break;
    case 5:
    document.getElementById("top").innerHTML = '<h1>Moja generacja. Młodzi dla przyszłości</h1> <br>Przeciętny samochód osobowy emituje ~4,6 t CO₂/rok. podróżując komunikacją miejską zamiast samochodu przyjmijmy średnio 1,2 t CO₂/rok na pasażera .Jeśli 1 000 000 osób przestało by przemieszczać się samochodem i będzie chodzić pieszo lub jeździć na rowerze. To ilość emitownych spalin spadnie o 4 600 000 t na rok gdyby tak sama ilość osób zaczeła by jeździć komunikacją miejską to licczba emitowanych spalin wyniosła by 3 400 000 t na rok <br> W całej polsce żyje 5 milionów osób w przedziale 18-29 lat są to młode osoby gdyby jedna piąta z nich zaczeła poruszać się sposobami alternatywnymi do samochodów osobowych to miało by to duże znaczenie dla środowiska trzeba pamiętać że mówimy tylko o młodych osobach.<button id="powrot" onclick="powrot()">❌</button>';
    break;
    //case 6:
    //document.getElementById("top").innerHTML = '<h1>Moja generacja. Młodzi dla przyszłości</h1> <br>Segregacja śmieci - Proces oddzielania odpadów na różne kategorie (np. papier, plastik, szkło, bioodpady) w celu ułatwienia recyklingu i zmniejszenia ilości odpadów trafiających na składowiska. <button id="powrot" onclick="powrot()">❌</button>';
    //break;
    //case 7:
    //document.getElementById("top").innerHTML = '<h1>Moja generacja. Młodzi dla przyszłości</h1> <br>Weryfikacja linków w sieci - Sprawdzanie autentyczności i bezpieczeństwa linków przed ich kliknięciem, aby uniknąć oszustw internetowych, phishinngu i złośliwego oprogramowania. <button id="powrot" onclick="powrot()">❌</button>';
    //break;
    //case 8:
    //document.getElementById("top").innerHTML = '<h1>Moja generacja. Młodzi dla przyszłości</h1> <br>Szukanie informacji z zaufanych źródeł - Korzystanie z wiarygodnych i sprawdzonych źródeł informacji, takich jak renomowane media, instytucje naukowe i oficjalne strony rządowe, aby unikać dezinformacji i fake newsów. <button id="powrot" onclick="powrot()">❌</button>';
    //break;
}

}
function powrot(){
  document.getElementById("container").innerHTML = '<div id="top"><div id="problemy"><h1>Moja generacja. Młodzi dla przyszłości</h1><label for="prob">Problemy bieżące</label><ul id="prob"><li>Globalne ocieplenie <button id="info" onclick="Info(1)">→</button></li><li>Zanieczyszczenie planety <button id="info" onclick="Info(2)">→</button></li><li>Oszustwa internetowe <button id="info" onclick="Info(3)">→</button></li><li>Fake News z AI <button id="info" onclick="Info(4)">→</button></li></ul></div><label for="rozw">Możliwe rozwiązania</label><ul id="rozw"><li>Korzystanie z komunikacji miejskiej aby zmniejszyć emisję spalin</li><li>Segregacja śmieci</li><li>Weryfikacja linków w sieci</li><li>Szukanie informacji z zaufanych źródeł</li></ul></div>'


}
