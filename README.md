# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Maud Naastepad 

  #### Je startniveau:
  Blauw/rood

  #### Je focus:
  Surface plane:
   1. Light dark mode
   2. Scrollen langs foto die automatisch uitzoomt.
   3. Na refreshen van pagina een grotere height van filmpje en dan automatisch kleiner worden.
   4. Animatie met 'cleanse' en ster SVG.
   5. Text treat tint vullen.
 
</details>



## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  Namaken website Rhodeskin.com --> https://www.rhodeskin.com

  #### Screenshot(s) van de eerste pagina (small screen): 
  rhode skin by hailey rhode bieber

  <img src="readme-images/een.jpg" width="375px" alt="Echtepagina">

  <img src="readme-images/twee.jpg" width="375px" alt="Echtepagina">

  <img src="readme-images/drie.jpg" width="375px" alt="Echtepagina">

  <img src="readme-images/vier.jpg" width="375px" alt="Echtepagina">

  <img src="readme-images/vijf.jpg" width="375px" alt="Echtepagina">




  #### Screenshot(s) van de tweede pagina (small screen):
  lip case | rhode skin

  <img src="readme-images/zes.jpg" width="375px" alt="Echtepagina">

</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Ik heb nooit eerder een screen reader gebruikt dus vond het sowieso erg zoeken met de knoppen. De reader gaf al snel aan dat ik dan op tab zou moeten klikken om elk kopje te kunnen horen. Het ging erg stroef, de tekst herhaalde zich steeds en er werd niet duidelijk verteld wat er op een afbeelding te zien was. Ook viel het tegen dat het hele lange onduidelijke zinnen waren en ik hierdoor met een beperking moeilijk begrijp wat er precies mee wordt bedoeld. Wel was de stem heel duidelijk en articuleerde goed. Ook werd er aangegeven wanneer ik bij een navigatie ben en wanneer het een button is. 

<!-- Bronnen: (Rhode, 2024) -->

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdownschets.jpg" width="375px" alt="Breakdownschets">


  ### dynamisch deel (bijv menu): 
  <img src="readme-images/breakdownschets.jpg" width="375px" alt="breakdown van een dynamisch deel">


  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/breakdownschets.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>




## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken

Ik heb de website Rhode Skin van Hailey Bieber uitgekozen, omdat ik dit een mooie site vind met leuke producten. We moesten deze week beginnen met een breakdownschets, voordat we begonnen met coderen. Ik vond het handig dat we die moesten maken en alvast een idee hadden voor de echte website met html code.
Al gauw konden we beginnen met coderen en heb ik mijn html ingedeeld hoe ik het normaal ook doe. Sections, articles, etc.

Wat er nieuw was, is dat we weinig classes moeten gebruiken. Eerder gebruikte ik alleen maar classes, maar we hebben hier een goed alternatief op gekregen. Namelijk nth-of-type en nth-child. Deze vond ik erg lastig en had dit ook als vraag voor de voortgangsgesprekken bedacht.

Ook was ik begonnen aan css deze week en heb ik een scrollbar met hulp van de docent erin kunnen zetten. Hij scrollt nog niet helemaal zoals het moet, maar de tekst komt er wel in te staan. Wel staan de afbeeldingen onder de scrollbar en scrollt hij ook verticaal. Dit is dan ook mijn vraag voor het opkomende voortgangsgesprek.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Lara           | Peter              | Mamush       | Ik               |
  | ---            | ---                | ---          | ---              |
  | Articles       | ---                | H1, H2, H3   | Scrollbar en img erin |
  | canvas elementen| ---               | Articles     | Uitleg css opstelling sections |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Een goede opbouw van html is eerst section en dan article, een section is een heel blok met alle content van de verschillende articles.
  - Als je meerdere sections wil gebruiken in css, moet je nth-of-type() gebruiken. Hierdoor wordt de organisatie van je css mooi. + Goede uitleg over deze alternatieven.
  - Heel goed opletten met gebruiken van pixels! Gebruik hier bijvoorbeeld em, vw, of procenten voor.
  - Met flex-direction maak je een verticale of een horizontale rij om hier je content goed in te kunnen sorteren.
  - Leer omgaan met padding en margins en voorkom om vooraf width en heights te zetten.

</details>



## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik ben na de feedback van vorige week donderdag weer verder gegaan met de code. Ik heb veel geleerd van deze feedback en ook van de studenten erbij. Ik heb alle pixels in mijn code omgezet naar em door alles door 16 te delen. Ik liep even vast met het filmpje en de border-radius na het verzetten naar em hiervan, maar heb er met hulp van de studentassistent weer een goed beeld van kunnen maken. 

  Verder had ik problemen met de grote van de afbeeldingen in de eerste section om de img in de scrollbar te zetten.
  <img src="images/foutesection.jpg" width="375px" alt='Foute section'>
  Het is nu veranderd naar de grootte van iedere afbeelding. Het probleem hierbij was wel weer dat de achtergrond kleur verwijderd moest worden en ik transform:scale() zou moeten gebruiken om de afbeeldingen op goede grootte te krijgen.

<!-- Bronnen: (MDN, transform:scale()) -->

  Ik wilde dit voordat ik transform:scale() ging gebruiken handmatig afsnijden in Photoshop en kreeg toen deze melding. 
  <img src="images/foutmelding.jpg" width="375px" alt='Foutmelding photoshop'> Door hulp van de docent is dit gelukt om met transform te doen. Thuis heb ik in mdn verder opgezocht hoe je de scale kunt gebruiken. Nu heb ik meer verstand van de grootte van een article en dat je het niet per se een achtergrond kleur aan toe moet voegen, maar ook met transform:scale() een goede overeenkomst kunt maken.

<!-- Bronnen:  (MDN, transform:scale()) -->

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Julian         | Wessel             | Bibi         | Ik               |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Je kunt margin-right gebruiken om de tekst op te schuiven naar onder.
  - Met scroll-snap-align:center zet je de afbeeldingen na het scrollen altijd in het midden en is het niet afgesneden.
  - Check soms even de validator voor errors. Op het einde mag je geen errors hebben.
</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
 Mijn website is op de eerste pagina erg toegankelijk en heb ik getest met de screenreader. Als ik de website open, begint de VoiceOver automatisch met praten en gaat hij van boven naar beneden de website. Ook was het fijn dat hij opnoemde wanneer er een H2 element was en een afbeelding. Dan werd de alt genoemd die ik in de html heb vermeld. Wanneer er een carrousel was swipete hij er zelf doorheen. Het probleem hierbij was helaas wel dat de afbeeldingen niet genoemd werden en alleen de titels.

 Na de carrousel ging alles heel makkelijk en vertelde de VoiceOver ook wanneer er een knop was om op te klikken en hoe je dit moest doen.
<img src="images/opeenknopklikken.jpg" width="375px" alt='Screenreader voorlezen'>

Op de tweede pagina deed de Voiceover er hetzelfde over. Ik kwam er wel achter dat de navigatiebar eigenlijk niet duidelijk genoeg werd benoemd en dat ik hier verandering in moet maken.

Gelukkig werd er wel duidelijk aangegeven wanneer er geswiped moest worden dat de afbeeldingen horizontaal naast elkaar stonden.

Na de test ben ik wel de alt namen van de laatste carrousel gaan aanpassen, want er werden eerder niet duidelijke namen aangegeven.
Before:
<img src="images/before.jpg" width="375px" alt='Before alt namen'>
After:
<img src="images/after.jpg" width="375px" alt='After alt namen'>


<!-- Bronnen: (Rhode namaak, Maud 2024), (Voiceover, 2024)-->
</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
   Ik heb weer heel veel gehad aan de feedback van vorige week donderdag. De studentassistenten hielpen me met vele goede vragen die ik nog had voor de laatste content dingen. Een daarvan was bijvoorbeeld hoe je de scrollbar in de eerste en de zesde section op het midden van ieder plaatje kon uit laten komen. Hiervoor was alleen de regel 'scroll-snap-align:center' nodig. 
  
  <!-- Bronnen: (Studentassisent uitleg) -->

   Ik heb ondertussen alle validators even gecheckt en alles was valid in html en css.
   <img src="images/errorschecken.jpg" width="375px" alt='Errors checken'>
   Wel waren er veel info meldingen over de articles.

   Ik was erg verward met hoe je op een goede manier een svg in html moest zetten dus stelde die vraag. Ik kreeg al snel van de docent en assistenten een makkelijke uitleg. Eerst de html edit maken van de svg en dan in een mapje en html zetten. Nu moest ik alleen zelf de grootte en positie nog goed maken.
   <img src="images/eerdereerrorsvg.jpg" width="375px" alt='Svg error' >
   Deze error kreeg ik als ik de svg net als img ging downloaden.
   
   Door de svg tip ben ik veel sneller gegaan in iconen neerzetten en dus ook een navigatiebar die ik met css compleet ga maken.
   <!-- Bronnen: (Studentassisent uitleg) -->


   Ik was bezig met de afbeeldingen goed te zetten van de zesde section en kreeg steeds dat de plaatjes of meters uit elkaar stonden, of onder elkaar gingen staan. Ik heb af en toe wat vragen gesteld aan chatGPT en bleek uiteindelijk te zijn dat ik niet width:100% moest maken van de afbeelding maar width:100vw. 
   <img src="images/chatgpt.jpg" width="375px" alt='ChatGPT'>

<!-- Bronnen: (ChatGPT, 2024) -->

Tijdens de 2e les van deze week had ik een vraag over een enorme witruimte die ik had naast mijn content. Na veel zoeken moest ik het kleine scherm annuleren en het op het hele scherm bekijken en zag ik dat een svg heel groot was. Dit kwam omdat het in vw stond en alles in de footer position:absolute of relative had. Door alles in display:flex te zetten met wat ik eerder in de website al had gedaan, ging dit probleem weer weg!

<!-- Bronnen: (Studentassisent uitleg) -->

   Na deze problemen ging het verder erg goed! Ik ben een stuk verder met de content voor de tweede pagina en kwam erachter om veel css regels van pagina 1 korter te maken, dat ik meer regels zonder classes kan gebruiken voor de 2e pagina.

   Door steeds weer opnieuw te kijken naar je eerdere css regels is het veel makkelijker om weer de content erin te zetten.

   Na deze problemen en goede resultaten ging ik beginnen aan de surface plane.


  Een paar dagen voor de deadline wilde ik beginnen aan de micro interactie, het hamburger-menu. Ik begon aardig goed de stappen te volgen van de opdracht in dlo. Ik had alles goed op zijn plek gezet, totdat ik de visibility door kreeg. Deze ging telkens of fout dat de content overlapte, of goed maar de knoppen deden het niet meer. Ik ben hier in totaal wel 4 uur mee bezig geweest en had erg veel tijd hier in gestopt. Ik had mijn tijd nog nodig voor de surface plane, dus heb de microinteractie even open gelaten. Ik was bijna bij het einde, dus er valt niet heel veel meer aan te doen.

  <img src="images/microinteractiewerktniet.jpg" alt='Niet snappen van overlapping'>

 <!-- Ik had de opdracht van dlo gebruikt hiervoor en met de overlapping gevraagd aan chatgpt, (z-index, visibility:visible)Bronnen: (chatgpt, 2024), (dlo, oefening JS - 3 stap) -->

 
Ik heb de microinteractie even laten zitten, want ik moest nog verder aan de surface plane. Ik begon met de surface plane --> cleanse horizontaal laten animeren. Ik had eerst nog geen idee hoe ik dit wilde doen, maar ik had tijdens de lessen een aantal dingen onthouden. Namelijk dat je hierbij gebruik moet maken van transform: en dan het aantal sec. En keyframes met daarbij de snelheid die je wil bereiken in een aantal px. Met deze info ging ik eerst in de html divs maken en in iedere div een verschillende klas. Toen ging ik de classes op een logische volgorde composeren en dat ging eigenlijk best makkelijk.
  
  Het probleem kwam eigenlijk dat ik de tekst ook met position:absolute niet kon zien. Ik heb eerder van chatGPT gehoord dat je dan z-index kan gebruiken, maar dat kon hier niet. Ik ben een beetje gaan testen met relative en dit werkte. Nu stond al mijn content goed, ik moest het alleen nog laten bewegen. Hierbij had ik wat hulp nodig en vroeg ik aan chatGPT hoeveel sec ik moest tranfsorm. Ik kreeg snel een voorbeeld, maar heb de secondes toch wat langzamer gemaakt. Ook heb ik de keyframes van 0% tot 100% meteen gedaan, anders ging het heel langzaam.

Hier vroeg ik aan chatGPT welke transform: ik moest gebruiken:
<img src="images/antwoordchatgpt.jpg" alt='Antwoord chatGPT'>

En hier vroeg ik waarom mijn content aan de rechterkant wordt afgesneden. Ik heb het geprobeerd goed te zetten, maar niks is gelukt.

<img src="images/sliderniettotrand.jpg" alt='Slider niet tot rand '>
<!-- Bronnen: (chatGPT, cleanse animatie) -->


  Ik ging verder met de surface plane,'Na refreshen van pagina een grotere height van filmpje en dan automatisch kleiner worden'. Deze had ik al vrij snel in mijn hoofd. Ik begon met het kijken naar de code van de website zelf. Hierbij ging de height van groot naar klein. Ik wist dus dat ik iets met keyframes moest gaan doen, dus ben ik door de slides van dlo gegaan van het animeren in week 3. Al gauw zag ik info staan bij een oefening over een keyframe, maar deze leek niet echt op wat het bij mij moest worden.
  Ik vroeg wat de beste manier was om de height van groot naar lang te laten animeren :
   <img src="images/keyframes.jpg" width="375px" alt="Keyframes"> 

   Ik heb de animatie niet boven de content kunnen zetten en had ook nog tijd nodig voor de andere surface planes als ik heel eerlijk ben, dus ben ik daarna weer verder gegaan. Ik ging verder met 

  <!-- (chatgpt, 2024), (dlo, oefening Animeren 1) -->

  Tijdens het laatste voortgangsgesprek heb ik de studentassistent gevraagd hoe ik de Text, treat, tint moet maken. Hij zei meteen dat ik de h2 een a moet maken samen met een scroll behaviour. Nu staat er inderdaad een hover onder de a met dat die geselecteerd is. De rest moet ik doen met Javascript, alleen geen idee hoe.
Ik begon eerst met het experimenteren van de a samen met een bijgevoegde style van scroll-behaviour:smooth, wat de studentassistent zei.

Ik heb de html helemaal afgemaakt en alle drie de images erbij gezet. Nu zag ik alle drie de afbeeldingen en als je op de tekst klikt ga je naar die afbeelding. Om de afbeeldingen te stylen ga ik in css wat experimenteren. Hierbij heb ik wat hulp gebruikt van MDN. 

<img src="images/totnutoe.jpg" alt='Tot nu toe' >

Ook kwam ik helaas hier niet verder. MDN heeft me hiermee goed geholpem, alleen zelf wist ik geen oplossing meer.

<!-- Bronnen: (MDN, scroll-behavior) -->


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Wessel      | Bibi        | Julian    |  Ik       |
  | ---            | ---                | ---          | ---              |
  | scroll-infite  | ?         | ?    | surface plane, goedkeuring   |
  |  |  |  | Op 2e pagina soms grijze vlakken, andere nav maken |
  |             |             |       | Het grijze vlak heb ik kunnen weghalen door middel van classes op de eerste pagina. Ik had deze eigenlijk altijd vermeden, maar het kon niet helemaal vermeden worden.             |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - gebruik ook classes in de html van je eerste website
  - de surface plane van de afbeeldingen automatisch inzoomen, kun je op de website Interesction Observer doen.
  - De animatie van text, treat, tint kun je doen via scroll-behaviour smooth en een a zetten bij je h2.
  - Kijk met de surface plane, 'Na refreshen van pagina een automatische verandering van filmpje groot naar filmpje normaal' af bij de originele website. Ook gebruik maken van keyframes.

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  Pagina 1:

  <img src="readme-images/uitkomst1.jpg" width="375px" alt="breakdown van nog een dynamisch deel">
     
  Pagina 2:

  <img src="readme-images/uitkomst2.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

<!-- Bronnen:(Rhode namaak, Maud 2024) -->

  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  Ik denk dat ik veel heb geleerd aan steeds weer nieuwe mogelijkheden maken van een html of css opbouw. Vaak werkte het op het eerste moment niet en moest ik weer wat aanpassen. Ook heb ik geleerd dat de Rhode website namaken niet lastig moet zijn, want er zijn voorbeelden van in dlo. Voorbeelden zijn dan de cleanse animatie en het hamburgermenu:

<img src="images/animaties.jpg" alt='Animaties'>
<img src="images/hamburgermenu.jpg" alt='Animaties'>

  Ik heb hieruit dus ook verschillende keyframes geleerd en kunnen maken, maar ook delen van javascript waarin het makkelijk als voorbeeld stond gegeven. Helaas begreep ik het soms helemaal niet.

Css vile is valid!

Nu is alleen mijn doel nog om meer te leren van het maken van de surface planes en ik ben tevreden.

  ### Dit was lastig/Is niet gelukt:

Ik heb verder geleerd dat er echt best wat tijd in moet zitten in de surface planes. Vanwege de drukte van het andere vak, ben ik hiermee te laat begonnen en heb ik aan 3 wel een begin gemaakt. Zo heb ik alvast een start punt. 

Ik vond javascript bij deze website erg lastig. Vooral omdat ik uit mezelf niet zo snel in javascript iets kan bedenken en daarbij snel hulp nodig heb. 

Ik heb dit blok ook best moeite gehad met de overlappingen van afbeeldingen en teksten, met name het hamburger menu. I heb daar iets te veel tijd in gestopt, waardoor de tijd voor de surface planes zijn weggevallen.

Ik krijg nu alleen nog 6 errors in allebei mijn htmls, vanwege 1 svg. Ik weet niet hoe ik dit moet oplossen, maar dat het even gezegd is.

<img src="images/html6errors.jpg" alt='6 errors'>

Ook vind ik achteraf dat ik eerder om hulp had moeten vragen inplaats van afwachten en zelf maar proberen. Ik denk dat veel fouten van mij makkelijk op te lossen zijn en snel gedaan kunnen worden als ik dat vraag. Dat is weer een leermoment.


Na herkansing:

Ik vind dat ik op tijd ben begonnen met alle feedback verwerken en hulp vragen voor de surface planes. Ik heb veel geleerd van de surface planes, want nu ze af zijn weet ik daadwerkelijk hoe ik ze gebruiken moet en dus hoe ik het in de toekomst kan namaken. Ik vond het ook steeds leuker worden naarmate ik het beter ging begrijpen en daardoor ging het proces ook snel. 

</details>


## Herkansing 

Ik plaats de nieuwe surface planes met uitleg hierin. Ik moest een aantal dingen voor de herkansing aanpassen.
1. CSS netter maken
2. Micro interactie
3. 5 surface planes

Ze zijn allemaal gelukt!

Ik begon met het filmpje langer maken als er gerefreshed wordt en dan automatisch naar de normale size ga. Ik had hier al een begin aan gemaakt en hoefde dus niet veel te veranderen. Ik kreeg bij het laatste feedback moment na het mondeling nog een tip met hoe ik het moet doen. Ik kon aspect-ratio gebruiken en heb ik ingetypt in MDN. Toen ik het probeerde deed hij het niet in mijn server. Ik vroeg aan chatGPT wat ik dan moest doen en hij gaf mij een andere optie die best makkelijk leek, omdat ik een ander deel al had. Ik moest de keyframe 'shrink' noemen en ease-in-out erbij zetten. Ik heb toen zelf nog een beetje geexperimenteerd met hoogtes en hoe dit zo clean mogelijk eruit zou gaan zien om het zo te maken hoe het nu is. 

<!-- Bronnen: (Feedback Danny) (MDN, aspect ratio) (CHATgpt, 2024)-->

De micro interactie deed ik meteen hierna en ik kreeg als tip om gewoon de opdracht te volgen via dlo. Eerder lukte mij dat niet en had ik geen tijd meer om het af te maken, maar nu lukte het meteen. Ik kon de code die in dlo stond makkelijk begrijpen en eigen classes erbij toevoegen waardoor de code ging kloppen. Hoe een button open en dicht gaat wist ik al, want dit had ik eerder ook geprobeerd bij de microinteractie. Nog een beetje wat aanpassingen bij de css en de nav2 goed kloppend maken, en de micro interactie werd eindelijk compleet.

<!-- Bronnen, (dlo, oefening JS) -->

Nadat ik de micro interactie heb gemaakt, ging ik meteen door aan de cleanse slider animatie, want hier was ik al bijna klaar mee. Ik had steeds een klein stukje van de slider dat werd afgesneden, maar ik probeerde in mijn css de margin van de .slider aan te passen en hij stond wel goed. Ik had gewoon de transition keyframe gebruikt met dat hij opnieuw begint na 12 sec. Ik heb nog later van Bas, die mij uitlegde over hoe ik het mooier kan maken, gezien dat ik met behulp van divs om de slider de svg zonder toegevoegde classes in de slider kon zetten waar cleanse stond. Hierdoor lijnt het mooier uit en verspringt hij niet opnieuw. Dit was erg top om te horen en neem ik ook weer meer als goed leermoment voor andere sliders.

<!-- Bronnen, (Bas uitleg) (feedback Danny) -->

Ik ben hierna zelf verder gegaan aan de text, treat tint surface plane. Ik heb tijdens de lessen al aan een student een begin van de html gekregen en hoe ik dit in css met de classes en ids moet zetten. Ik heb aan chatgpt gevraagd hoe ik dit nu kan koppelen aan de afbeelding. Ik begreep het meteen en heb wat css en classes aangepast. Ook ben ik goed gaan begrijpen waarom precies de javascript code past bij de ids met de addeventlisteners. 

 <!-- Bronnen: (CHAT, geselecteerd item groen) -->

Al deze surface planes had ik al een groot begin aangemaakt en was dit met het herkansen nog een paar nieuwe toevoegingen. De andere twee komen nu met bijbehorende problemen.

Alles ging goed met de surface planes en micro interacties, totdat ik de light-dark mode had gemaakt. De light dark mode vond ik erg makkelijk om te maken, de button met klikken in javascript had ik al eerder gemaakt en kon ik meteen doen. Ik heb een tutorial op youtube opgezocht hoe ik het best de kleuren in de root moest noemen en veranderen. Dit was allemaal gelukt, totdat ik zag dat op de tweede pagina de text treat tint het niet meer deed. Ik heb gekeken of het aan de html en css lag, maar ik wist meteen dat het javascript was. Ik kreeg de error 'Null' en kon niet vinden wat er fout was. Ik ben hiervoor naar Bas gegaan die veel weet over frontend, en hij heeft mij uitgelegd wat er fout ging. Omdat ik de const van de text treat tint in hetzelfde javascript document had staan als de andere aangeroepen clicks kan het voor de javascript erg verwarren. Ik heb daarom 2 andere aangemaakt om het mooier en georganiseerder te verdelen. Hierna deed hij het weer wel gelukkig en kon ik weer verder met de laatste surface plane.
  <!-- Bronnen (Youtube, dark light mode), (Bas uitleg) -->

De laatste en lastigste surface plane is het inzoomen van afbeeldingen als je erlangs scrollt. Ik kreeg van de docent als tip om intersection observer te doen en kreeg een hele hoop tekst te zien toen ik bij MDN had ingevuld. Ik kwam er gewoon helemaal niet uit en vroeg bij deze functie aan Bas of hij het me kon uitleggen. Ik heb de scale cijfers die in de echte website veranderen als je langs de foto's scrollt gekopieerd en geplakt in mijn javascript met daarbij een code die de scale per procent wanneer je langs de afbeelding scrollt een beetje wordt uitgezoomd. Door telkens de scale met /10 te verhogen zoomt hij automatisch uit met wat ik eerder in javascript heb vermeld. Ik vond het erg lastig om te begrijpen, maar doordat ik een goede uitleg heb gekregen snap ik waarvoor de scale in de intersection observer zo belangrijk is. Het was erg leerzaam om deze surface plane gedaan te hebben, want nu weet ik hoe ik dat bij toekomstige websites kan toepassen. Ook vind ik het gewoon een cool effect hebbenen mooi staan in de website.

 <img src="readme-images/fotoinzoomenonderzoek.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

  <!-- Bronnen (MDN, intersection observer), (Bas uitleg), (Rhode 2024)  -->

Nu zijn alle 5 surface planes af en heb ik alle tijd over om nog de css code netter te maken. Ik heb geleerd van Bas ook toen ik om die ene javascript fout vroeg dat je ook gewoon alle margin waardes in een margin kan zetten. Hierdoor werd de code meteen korter en ging ik alles stuk voor stuk na om te kijken wat er weg kon. Ik heb veel color(var) geplaatst in kopjes die bijvoorbeeld altijd de p oplichten en dus niet telkens de p een kleur moet geven. Dit heb ik ook bij de button gedaan. Ook heb ik veel meer p een ul gemaakt, want ik had eerder 20 verschillende nth-of-types en nu 2 uls. Dat is een groot verchil en staat ook netter. Veel heb ik ook gewoon dubbel erin gezet bij bijvoorbeeld afbeeldingen en vond ik echt fijn om te zien dat het weg was. Veel code heb ik ook naast elkaar kunnen vermelden waardoor ik niet telkens een nieuw kopje moest aanmaken om te stylen.
Ik ben van min 2000 css regels naar nu 1200 css regels gegaan, met nog precies alle informatie en content die ik eerder ook had.

<!-- (Bas uitleg) -->

Nog een kleine toevoeging aan de vormgeving om het beter te maken, was de select en detail knoppen.

<!-- (Feedback Danny) -->

## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  1. (ChatGPT.nl) --> Kleine vragen aan ChatGPT
  2. https://dlo.mijnhva.nl/content/enforced/609314-FDMCI-2000FED121-DMCI-CMD-2425/FED%2024-25%20-%20Blok%201%20-%20Oefening%20JS%203-stap.pdf

  (dlo, oefening JS)

  3. https://chatgpt.com/share/66fb85f7-22cc-8000-ba0e-6c18253711e0 

  (chatGPT, cleanse animatie maken)

  4. https://www.rhodeskin.com 
  (Rhode, 2024)

  5. https://developer.mozilla.org/en-US/docs/Web/CSS/transform

  (MDN, transform:scale())

  6. (Rhode namaak, Maud 2024)

  7. (Voiceover, 2024)

  8. (Studentassistent uitleg)

  9. https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

  (MDN, scroll-behavior)

  10. https://nl.piliapp.com/symbol/heart/

  (Hartje, icoon)

  11. https://youtu.be/350_XyLj4-U?si=W3QbCTCVjxw6Njba

  (Youtube, video autoplay)

  12. https://chatgpt.com/share/6724af7c-a3fc-8000-9e28-d19334e0392d 
  (CHAT, geselecteerd item groen)

  13. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
  (Select,MDN)

  14. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
  (Details,2024)

  15. https://chatgpt.com/share/6724e799-7fbc-8000-aa3e-9cc5a6d6a53d
  (Dark light mode)

  16. https://youtu.be/9LZGB3OLXNQ?si=guN0tfSwYKVqzxP6 + eerder gemaakte javascript van samen.js de buttons.

  (Youtube, dark light mode)

  17. (Bas uitleg)

  18. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

  (MDN, intersection observer)

  19. (Feedback Danny)

  20. https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio

  (MDN, aspect ratio)

</details>