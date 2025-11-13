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
}
}
function powrot(){
  document.getElementById("container").innerHTML = '<div id="top"><div id="problemy"><h1>Moja generacja. Młodzi dla przyszłości</h1><label for="prob">Problemy bieżące</label><ul id="prob"><li>Globalne ocieplenie <button id="info" onclick="Info(1)">→</button></li><li>Zanieczyszczenie planety <button id="info" onclick="Info(2)">→</button></li><li>Oszustwa internetowe <button id="info" onclick="Info(3)">→</button></li><li>Fake News z AI <button id="info" onclick="Info(4)">→</button></li></ul></div><label for="rozw">Możliwe rozwiązania</label><ul id="rozw"><li>Korzystanie z komunikacji miejskiej aby zmniejszyć emisję spalin</li><li>Segregacja śmieci</li><li>Weryfikacja linków w sieci</li><li>Szukanie informacji z zaufanych źródeł</li></ul></div>'
}

