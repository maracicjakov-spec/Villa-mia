/* =========================================================
   Villa Mia — app.js
   1. CONFIG   2. I18N (HR/DE/IT; EN lives in the markup)
   3. GALLERY  4. Behaviour
   ========================================================= */
(() => {
"use strict";

/* ---------- 1 · CONFIG — fill in before launch ---------- */
const CONFIG = {
  // Address that receives inquiries (sent via formsubmit.co). Empty = form shows "not connected".
  inquiryEmail: "",
  // Future direct-booking engine URL. When set, every "Book / Check availability" button uses it.
  directBookingUrl: "",
  airbnb: {
    en: "https://www.airbnb.com/rooms/13507672",
    hr: "https://hr.airbnb.com/rooms/13507672",
    de: "https://www.airbnb.de/rooms/13507672",
    it: "https://www.airbnb.it/rooms/13507672"
  },
  mapEmbed: "https://www.google.com/maps?q=43.58395,16.59787&z=12&output=embed"
};

/* ---------- 2 · I18N ---------- */
const I18N = {
hr: {
  skip:"Preskoči na sadržaj", brandSub:"Dugopolje · Split",
  nav1:"Vila", nav2:"Doživljaj", nav3:"Sadržaji", nav4:"Galerija", nav5:"Lokacija", nav6:"Kontakt",
  bookStay:"Rezervirajte boravak", menu:"Izbornik",
  heroEyebrow:"Dugopolje · Split · Dalmacija", heroT1:"Vaše privatno", heroT2:"mediteransko", heroT3:"utočište",
  heroLead:"Otkrijte nezaboravne trenutke, bezvremenski komfor i ljepotu dalmatinskog načina života.",
  heroCta1:"Istražite vilu", heroCta2:"Provjerite dostupnost",
  metaPool:"Grijani bazen", metaGuests:"Gostiju", metaRooms:"Sobe s kupaonicom", metaRating:"Ocjena na Airbnbu", ratingNum:"4,96 ★", scroll:"Dalje",
  altIntro:"Vila Mia odozgo: kuća s crvenim krovom, terasa bazena s drvenim ležaljkama i kameni potporni zid",
  capIntro:"Vila i terasa s bazenom, a na obzoru Mosor",
  introLabel:"Dobro došli u Vilu Mia", introTitle:"Mjesto za usporiti.<br><em>Mjesto za pamćenje.</em>",
  introP1:"Renovirana i iznajmljuje se isključivo u cijelosti: Vila Mia smjestila se u mirnom, zelenom dijelu Dugopolja, mjesta podno Mosora, 15–20 minuta vožnje od centra Splita.",
  introP2:"Ima 300 m² stambenog prostora na posjedu od 2.000 m². Dovoljno je mjesta da dvanaest gostiju bude zajedno, i dovoljno prostora da svatko pronađe svoj mirni kutak.",
  fGuests:"Gostiju", fBedrooms:"Spavaćih soba, sve s kupaonicom", fBeds:"Kreveta", fBaths:"Kupaonica", bathsNum:"5,5", fPool:"Grijani bazen", fPlot:"Posjed", plotNum:"2.000 m²",
  ratingLine:"4,96 iz 100 recenzija gostiju na Airbnbu",
  villaLabel:"Vila", villaTitle:"Stvorena za <em>posebne</em> trenutke",
  villaIntro:"Dva kata, pet spavaćih soba s vlastitom kupaonicom i dnevni boravak koji izlazi ravno na bazen. Cijela vila je klimatizirana.",
  altLiving:"Dnevni boravak sa smeđom kutnom garniturom, staklenim stolićem i kliznim vratima otvorenima prema bazenu",
  altLivingView:"Pogled iz dnevnog boravka kroz staklena vrata na bazen i planine",
  r1k:"Dnevni boravak", r1t:"Otvoren prema bazenu",
  r1p:"Na povišenom prizemlju veliki dnevni boravak kroz staklena vrata vodi izravno na terasu s bazenom i do roštilja. Kameni stupovi, topli drveni podovi i duboka kutna garnitura čine ga prostorom u kojem se rado ostaje.",
  altDining:"Blagovaonica s dugim drvenim stolom, kožnim stolicama krem boje i kuhinjom u pozadini",
  altKitchen:"Potpuno opremljena kuhinja s elementima krem boje, pećnicom, pločom za kuhanje i kuhalom za vodu",
  r2k:"Kuhinja i blagovaonica", r2t:"Oko hrastovog stola",
  r2p:"Potpuno opremljena kuhinja ima pećnicu, štednjak, perilicu posuđa, mikrovalnu pećnicu, aparat za kavu i visoki hladnjak. Nastavlja se na blagovaonicu okupljenu oko velikog, masivnog hrastovog stola.",
  altHottub:"Okrugla masažna kada na popločanom balkonu ispod crvenog krova",
  altViewMosor:"Pogled s balkona preko bazena prema vrhovima Mosora",
  r3k:"Balkon", r3t:"Hidromasažna kada s pogledom na Mosor",
  r3p:"Jedna od spavaćih soba na katu izlazi na veliki balkon, zaklonjen od pogleda, s masažnom kadom za troje i širokim pogledom na planinu i okolnu prirodu.",
  roomsT:"Pet spavaćih soba, pet kupaonica",
  roomsP:"Svaka spavaća soba ima vlastitu kupaonicu. Tri su na katu, ispod drvenih greda, s pogledom na prirodu i Mosor. Dvije su u prizemlju, a jedna od njih ima vrata izravno na terasu s bazenom. Prizemlje upotpunjuje gostinjski WC s praonicom rublja.",
  floorsAria:"Filtriraj po katu", floorAll:"Sve", floorUp:"Kat", floorGround:"Prizemlje",
  altRoom1:"Soba 1: bračni krevet ispod drvenih greda", altRoom2:"Soba 2: bračni krevet, krovni prozor i drveni strop",
  altRoom3:"Soba 3: bračni krevet ispod kosog drvenog stropa", altRoom4:"Soba 4 s bračnim i jednim pojedinačnim krevetom te vratima kupaonice",
  altRoom5:"Soba 5 sa staklenim vratima prema bazenu",
  room1:"Bračni krevet ispod drvenih greda · vlastita kupaonica", room2:"Bračni krevet, krovni prozor · vlastita kupaonica",
  room3:"Bračni krevet, kosi drveni strop · vlastita kupaonica", room4:"Bračni i pojedinačni krevet · vlastita kupaonica",
  room5:"Bračni krevet, vrata na terasu s bazenom · vlastita kupaonica",
  roomsNote:"Brojevi soba prate opise fotografija domaćina na Airbnbu. Raspored po katovima temelji se na opisu i fotografijama.",
  poolLabel:"Privatni bazen", poolTitle:"Gdje svaki dan <em>miriše na ljeto</em>",
  poolF1:"Temperatura vode", poolF2:"Grijani bazen", poolF3v:"Tra – Lis", poolF3:"Sezona kupanja",
  poolP1:"Bazen je grijan na 28–30 °C, pa kupanje počinje već oko Uskrsa i traje do kraja listopada.",
  poolP2:"Terasa je prostrana, s drvenim ležaljkama, drvenim stolovima i natkrivenim kutkom za najtoplije sate. Navečer voda svijetli plavo uz topli kamen kuće.",
  seasonAria:"Sezona kupanja od travnja do listopada",
  altPoolNight:"Bazen noću osvijetljen plavo, s ležaljkama i paviljonom s roštiljem u pozadini",
  altCocktail:"Piće, sunčane naočale i slamnati šešir na drvenom stoliću uz bazen",
  outLabel:"Život na otvorenom", outTitle:"Luksuz <em>nečinjenja</em>",
  outIntro:"Okućnica je dovoljno velika da se cijelo društvo okupi, ali i da se svatko na trenutak povuče.",
  altPergola:"Natkrivena pergola s dugim drvenim stolom, bocom vina i čašama, a iza nje bazen",
  altBbq:"Zidani kameni roštilj s naslaganim drvima ispod", altRoses:"Grmovi ruža u vrtu, a iza njih vila",
  o1t:"Natkrivena terasa", o1p:"Drvena pergola s dugim stolom za lagane ručkove uz bazen.",
  o2t:"Kameni roštilj", o2p:"Tradicionalni zidani roštilj uz bazen, s vlastitim natkrivenim paviljonom.",
  o3t:"Vrt i igralište", o3p:"Travnjak, voćke i ruže, uz drvenu penjalicu i ljuljačke za djecu.",
  o4t:"Hlad i odmor", o4p:"Lounge kutak uz roštilj i drvene ležaljke svuda oko bazena.",
  dayTitle:"Dan u <em>Vili Mia</em>",
  altMorning:"Ružičasto i bijelo cvijeće na jutarnjem suncu, iza njih bazen i roštilj",
  d1t:"Jutro", d1p:"Kava među cvijećem, dok je bazen još miran i tih.",
  altNoon:"Svijetloplava voda bazena u podne ispred vile",
  d2t:"Podne", d2p:"Topla voda, hladna pića i dugi ručak pod pergolom.",
  altSunset:"Vila i bazen odozgo u zalasku sunca, s ružičastim nebom nad brdima",
  d3t:"Zalazak", d3p:"Pali se roštilj dok svjetlo nad brdima postaje ružičasto.",
  altNight:"Osvijetljeni bazen i vila noću",
  d4t:"Noć", d4p:"Tiha noć, svjež zrak i bazen koji svijetli plavo.",
  actT:"A kad poželite aktivnost", actP:"Mosor se uzdiže točno ispred Dugopolja, a okolica je puna staza za pješačenje, biciklizam i jahanje.",
  act1:"Teretana odmah uz vilu", act2:"Četiri bicikla uključena u cijenu i više od 100 km označenih staza u blizini",
  act3:"Biljar, stolni tenis, pikado, šah, domino i karte", act4:"Jahanje i vožnja kočijom na upit, uz doplatu",
  altGym:"Kućna teretana sa spravom za vježbanje, klupom i utezima", altBilliards:"Stol za biljar ispred staklenih vrata prema bazenu",
  altBikes:"Brdski bicikli poredani uz vilu", altCarriage:"Gosti u kočiji s konjskom zapregom u prirodi",
  galLabel:"Galerija", galTitle:"U svakom <em>svjetlu</em>", filtersAria:"Filtriraj fotografije",
  cAll:"Sve", cExt:"Eksterijer", cPool:"Bazen", cInt:"Interijer", cBed:"Sobe", cOut:"Vani",
  lbAria:"Preglednik fotografija", close:"Zatvori", prev:"Prethodna fotografija", next:"Sljedeća fotografija",
  amenLabel:"Sadržaji", amenTitle:"Svaki detalj, <em>pažljivo promišljen</em>",
  ag1:"Udobnost", ag2:"Život na otvorenom", ag3:"Zabava", ag4:"Kuhinja", ag5:"Internet i dolazak", ag6:"Obitelj",
  a1_1:"Klima-uređaji u cijeloj vili", a1_2:"Grijanje", a1_3:"Zastori za zamračivanje", a1_4:"Posteljina i ručnici", a1_5:"Sušilo za kosu i šampon", a1_6:"Perilica rublja i glačalo",
  a2_1:"Grijani bazen, 45 m², 28–30 °C", a2_2:"Hidromasažna kada za troje na balkonu", a2_3:"Natkrivena terasa i pergola", a2_4:"Zidani kameni roštilj", a2_5:"Vrt s voćkama", a2_6:"Dječje igralište",
  a3_1:"Teretana", a3_2:"Biljar", a3_3:"Stolni tenis", a3_4:"Pikado, šah, domino i karte", a3_5:"Četiri bicikla uključena", a3_6:"TV s kabelskim programima",
  a4_1:"Potpuno opremljena kuhinja", a4_2:"Pećnica i štednjak", a4_3:"Perilica posuđa", a4_4:"Mikrovalna pećnica", a4_5:"Aparat za kavu", a4_6:"Hladnjak, posuđe i osnovne namirnice za kuhanje",
  a5_1:"Wi-Fi", a5_2:"Besplatno parkiranje na posjedu za 5 automobila", a5_3:"Samostalna prijava uz kutiju za ključeve", a5_4:"Domaćin vas dočekuje", a5_5:"Ostavljanje prtljage", a5_6:"Dulji boravci od 28 noći",
  a6_1:"Dječji krevetić", a6_2:"Hranilica", a6_3:"Zaštita za utičnice", a6_4:"Igralište u vrtu", a6_5:"Kućni ljubimci dopušteni", a6_6:"Cijela vila iznajmljuje se samo jednoj grupi",
  locLabel:"Otkrijte Dalmaciju", locTitle:"Istražite ljepotu <em>Dalmacije</em>",
  locIntro:"Dugopolje se nalazi odmah iznad Splita, između Mosora i dalmatinskog zaleđa. Miran je to kraj, a obala i stari gradovi su nadohvat ruke.",
  pl1t:"Split", pl1:"Dioklecijanova palača, stara gradska jezgra i Riva.", pl1d:"15–20 min autom",
  pl2t:"Plaža Žnjan", pl2:"Duga šljunčana plaža u Splitu sa svim sadržajima.", pl2d:"15–20 min autom",
  pl3t:"Mosor", pl3:"Planinarenje i penjanje na planini koja se uzdiže ispred Dugopolja.", pl3d:"Pred vratima",
  pl4t:"Špilja Vranjača", pl4:"Špilja puna stalaktita i stalagmita.",
  pl5t:"Tvrđava Klis", pl5:"Srednjovjekovna tvrđava iznad Splita s pogledom na otoke.",
  pl6t:"Rijeka Cetina", pl6:"Rafting, kanjoning i jahanje uz rijeku.",
  pl7t:"Salona, Trogir i Omiš", pl7:"Rimske ruševine i povijesni gradovi uz obalu.",
  pl8:"Dom viteške igre Sinjska alka i njezina muzeja.",
  altAerial:"Vila Mia i bazen odozgo, s brdima splitskog zaleđa", loadMap:"Prikaži interaktivnu kartu", openMaps:"Otvori u Google Kartama",
  locNote:"Vremena putovanja procjena su domaćina. Karta prikazuje približno područje vile; točna adresa šalje se nakon rezervacije.",
  bookLabel:"Rezervacija", bookTitle:"Vaša mediteranska priča <em>počinje ovdje</em>",
  bookP:"Dostupnost i aktualne cijene pogledajte na Airbnbu, gdje možete sigurno rezervirati. Za pitanja o boravku pišite nam izravno.",
  checkAvail:"Provjerite dostupnost", contactUs:"Kontaktirajte nas", ratingStar:"★ 4,96", trust1:"100 recenzija na Airbnbu", trust2:"Domaćin Ivica",
  ctLabel:"Kontakt", ctTitle:"Isplanirajte <em>boravak</em>",
  ctP:"Javite nam datume i broj gostiju, a mi ćemo odgovoriti s dostupnošću i svime što vas zanima.",
  ctNotice:"Obrazac još nije povezan, pa se poruke ne mogu poslati. Do tada dostupnost provjerite i domaćinu se javite putem Airbnba.",
  fName:"Ime", fEmail:"E-mail", fIn:"Datum dolaska", fOut:"Datum odlaska", fGuestsN:"Broj gostiju", fSelect:"Odaberite", fMsg:"Poruka",
  fMsgPh:"Sve što trebamo znati: dob djece, vrijeme dolaska, posebne prigode…", fSend:"Pošaljite upit",
  ftrTag:"Vaše privatno mediteransko utočište", ftrNav:"Istražite", ftrLoc:"Lokacija", ftrRegion:"Splitsko-dalmatinska županija", ftrCountry:"Hrvatska", ftrBook:"Rezervacija", credit:"Izrada stranice:"
},
de: {
  skip:"Zum Inhalt springen", brandSub:"Dugopolje · Split",
  nav1:"Die Villa", nav2:"Erlebnis", nav3:"Ausstattung", nav4:"Galerie", nav5:"Lage", nav6:"Kontakt",
  bookStay:"Aufenthalt buchen", menu:"Menü",
  heroEyebrow:"Dugopolje · Split · Dalmatien", heroT1:"Ihr privater", heroT2:"mediterraner", heroT3:"Rückzugsort",
  heroLead:"Entdecken Sie unvergessliche Momente, zeitlosen Komfort und die Schönheit des dalmatinischen Lebens.",
  heroCta1:"Villa entdecken", heroCta2:"Verfügbarkeit prüfen",
  metaPool:"Beheizter Pool", metaGuests:"Gäste", metaRooms:"Zimmer mit Bad", metaRating:"Airbnb-Bewertung", ratingNum:"4,96 ★", scroll:"Scrollen",
  altIntro:"Villa Mia von oben: das Haus mit Terrakottadach, das Pooldeck mit Holzliegen und die Natursteinmauer",
  capIntro:"Die Villa und ihr Pooldeck, am Horizont der Mosor",
  introLabel:"Willkommen in der Villa Mia", introTitle:"Ein Ort zum Innehalten.<br><em>Ein Ort zum Erinnern.</em>",
  introP1:"Renoviert und nur als Ganzes vermietet, liegt die Villa Mia in einer ruhigen, grünen Ecke von Dugopolje, einem Dorf am Fuß des Mosor-Gebirges, 15–20 Autominuten vom Zentrum von Split entfernt.",
  introP2:"Sie bietet 300 m² Wohnfläche auf einem 2.000 m² großen Grundstück. Platz genug, damit zwölf Gäste zusammen sein können – und damit jeder seine eigene ruhige Ecke findet.",
  fGuests:"Gäste", fBedrooms:"Schlafzimmer, alle mit Bad", fBeds:"Betten", fBaths:"Badezimmer", bathsNum:"5,5", fPool:"Beheizter Pool", fPlot:"Grundstück", plotNum:"2.000 m²",
  ratingLine:"4,96 aus 100 Gästebewertungen auf Airbnb",
  villaLabel:"Die Villa", villaTitle:"Geschaffen für <em>besondere</em> Momente",
  villaIntro:"Zwei Etagen, fünf Schlafzimmer mit eigenem Bad und ein Wohnzimmer, das sich direkt zum Pool öffnet. Die gesamte Villa ist klimatisiert.",
  altLiving:"Wohnzimmer mit braunem Ecksofa, Glascouchtisch und zum Pool geöffneten Schiebetüren",
  altLivingView:"Blick aus dem Wohnzimmer durch Glastüren auf den Pool und die Berge",
  r1k:"Wohnzimmer", r1t:"Offen zum Pool",
  r1p:"Im Hochparterre führt ein großes Wohnzimmer durch Glastüren direkt auf die Poolterrasse und zum Grillbereich. Steinpfeiler, warme Holzböden und ein tiefes Ecksofa laden zum Verweilen ein.",
  altDining:"Essbereich mit langem Holztisch, cremefarbenen Lederstühlen und der Küche im Hintergrund",
  altKitchen:"Voll ausgestattete Küche mit cremefarbenen Fronten, Backofen, Kochfeld und Wasserkocher",
  r2k:"Küche & Essbereich", r2t:"Rund um den Eichentisch",
  r2p:"Die voll ausgestattete Küche bietet Backofen, Herd, Geschirrspüler, Mikrowelle, Kaffeemaschine und einen hohen Kühlschrank. Sie geht in einen Essbereich über, in dessen Mitte ein großer, schwerer Eichentisch steht.",
  altHottub:"Runder Massage-Whirlpool auf einem gefliesten Balkon unter dem Terrakottadach",
  altViewMosor:"Blick vom Balkon über den Pool auf die Gipfel des Mosor",
  r3k:"Der Balkon", r3t:"Ein Whirlpool mit Blick auf den Mosor",
  r3p:"Eines der Schlafzimmer im Obergeschoss öffnet sich auf einen großen, blickgeschützten Balkon mit einem Massage-Whirlpool für drei Personen und weitem Blick auf Berg und Landschaft.",
  roomsT:"Fünf Schlafzimmer, fünf Bäder",
  roomsP:"Jedes Schlafzimmer hat ein eigenes Bad. Drei liegen im Obergeschoss unter Holzbalken, mit Blick auf die Natur und den Mosor. Zwei befinden sich im Erdgeschoss, eines davon mit direktem Zugang zur Poolterrasse. Ein Gäste-WC mit Waschküche ergänzt das Erdgeschoss.",
  floorsAria:"Nach Etage filtern", floorAll:"Alle", floorUp:"Obergeschoss", floorGround:"Erdgeschoss",
  altRoom1:"Zimmer 1: Doppelbett unter freiliegenden Holzbalken", altRoom2:"Zimmer 2: Doppelbett mit Gaubenfenster und Holzdecke",
  altRoom3:"Zimmer 3: Doppelbett unter einer schrägen Holzdecke", altRoom4:"Zimmer 4 mit Doppel- und Einzelbett und Badezimmertür",
  altRoom5:"Zimmer 5 mit Glastür in Richtung Pool",
  room1:"Doppelbett unter Holzbalken · eigenes Bad", room2:"Doppelbett, Gaubenfenster · eigenes Bad",
  room3:"Doppelbett, schräge Holzdecke · eigenes Bad", room4:"Doppel- und Einzelbett · eigenes Bad",
  room5:"Doppelbett, Tür zur Poolterrasse · eigenes Bad",
  roomsNote:"Die Zimmernummern folgen den Fotobeschriftungen des Gastgebers auf Airbnb. Die Zuordnung zu den Etagen beruht auf Beschreibung und Fotos.",
  poolLabel:"Der private Pool", poolTitle:"Wo sich jeder Tag <em>wie Sommer anfühlt</em>",
  poolF1:"Wassertemperatur", poolF2:"Beheizter Pool", poolF3v:"Apr. – Okt.", poolF3:"Badesaison",
  poolP1:"Der Pool wird auf 28–30 °C beheizt – so beginnt die Badesaison schon um Ostern und dauert bis Ende Oktober.",
  poolP2:"Die großzügige Terrasse bietet Holzliegen, Holztische und eine überdachte Ecke für die heißesten Stunden. Abends leuchtet das Wasser blau vor dem warmen Stein des Hauses.",
  seasonAria:"Badesaison von April bis Oktober",
  altPoolNight:"Der nachts blau beleuchtete Pool mit Liegen und dem Grillpavillon dahinter",
  altCocktail:"Ein Drink, Sonnenbrille und Strohhut auf einem Holztisch am Pool",
  outLabel:"Leben im Freien", outTitle:"Der Luxus des <em>Nichtstuns</em>",
  outIntro:"Das Grundstück ist groß genug, damit die ganze Gruppe zusammenkommen kann – und damit sich jeder auch einmal zurückziehen kann.",
  altPergola:"Überdachte Pergola mit langem Holztisch, einer Flasche Wein und Gläsern, dahinter der Pool",
  altBbq:"Gemauerter Steingrill mit darunter gestapeltem Brennholz", altRoses:"Rosensträucher im Garten, dahinter die Villa",
  o1t:"Überdachte Terrasse", o1p:"Eine Holzpergola mit langem Tisch für ausgedehnte Mittagessen am Pool.",
  o2t:"Steingrill", o2p:"Ein traditioneller gemauerter Grill neben dem Pool, mit eigenem überdachtem Pavillon.",
  o3t:"Garten & Spielplatz", o3p:"Rasen, Obstbäume und Rosen, dazu ein Klettergerüst aus Holz und Schaukeln für Kinder.",
  o4t:"Schatten & Entspannung", o4p:"Eine Lounge-Ecke am Grill und Holzliegen rund um das Pooldeck.",
  dayTitle:"Ein Tag in der <em>Villa Mia</em>",
  altMorning:"Rosa und weiße Blumen in der Morgensonne, dahinter Pool und Grill",
  d1t:"Morgen", d1p:"Kaffee zwischen den Blumen, während der Pool noch still daliegt.",
  altNoon:"Hellblaues Poolwasser zur Mittagszeit vor der Villa",
  d2t:"Mittag", d2p:"Warmes Wasser, kalte Getränke und ein langes Mittagessen unter der Pergola.",
  altSunset:"Villa und Pool von oben bei Sonnenuntergang, mit rosa Himmel über den Hügeln",
  d3t:"Abendrot", d3p:"Der Grill wird angezündet, während sich das Licht über den Hügeln rosa färbt.",
  altNight:"Der beleuchtete Pool und die Villa bei Nacht",
  d4t:"Nacht", d4p:"Eine stille Nacht, frische Luft und der blau leuchtende Pool.",
  actT:"Und wenn Sie aktiv sein möchten", actP:"Das Mosor-Gebirge erhebt sich direkt vor Dugopolje, und die Umgebung ist voller Wander-, Rad- und Reitwege.",
  act1:"Ein Fitnessraum direkt an der Villa", act2:"Vier Fahrräder inklusive, dazu über 100 km markierte Wege in der Nähe",
  act3:"Billard, Tischtennis, Darts, Schach, Domino und Karten", act4:"Ausritte und Kutschfahrten auf Anfrage, gegen Aufpreis",
  altGym:"Heim-Fitnessraum mit Kraftstation, Hantelbank und Gewichten", altBilliards:"Billardtisch vor Glastüren zum Pool",
  altBikes:"Mountainbikes in einer Reihe an der Villa", altCarriage:"Gäste in einer Pferdekutsche in der Landschaft",
  galLabel:"Galerie", galTitle:"In jedem <em>Licht</em>", filtersAria:"Fotos filtern",
  cAll:"Alle", cExt:"Außen", cPool:"Pool", cInt:"Innen", cBed:"Schlafzimmer", cOut:"Draußen",
  lbAria:"Fotoansicht", close:"Schließen", prev:"Vorheriges Foto", next:"Nächstes Foto",
  amenLabel:"Ausstattung", amenTitle:"Jedes Detail, <em>sorgfältig durchdacht</em>",
  ag1:"Komfort", ag2:"Leben im Freien", ag3:"Unterhaltung", ag4:"Küche", ag5:"Internet & Ankunft", ag6:"Familie",
  a1_1:"Klimaanlage im ganzen Haus", a1_2:"Heizung", a1_3:"Verdunkelungsvorhänge", a1_4:"Bettwäsche und Handtücher", a1_5:"Föhn und Shampoo", a1_6:"Waschmaschine und Bügeleisen",
  a2_1:"Beheizter Pool, 45 m², 28–30 °C", a2_2:"Whirlpool für drei auf dem Balkon", a2_3:"Überdachte Terrasse und Pergola", a2_4:"Gemauerter Steingrill", a2_5:"Garten mit Obstbäumen", a2_6:"Kinderspielplatz",
  a3_1:"Fitnessraum", a3_2:"Billard", a3_3:"Tischtennis", a3_4:"Darts, Schach, Domino und Karten", a3_5:"Vier Fahrräder inklusive", a3_6:"TV mit Kabelprogrammen",
  a4_1:"Voll ausgestattete Küche", a4_2:"Backofen und Herd", a4_3:"Geschirrspüler", a4_4:"Mikrowelle", a4_5:"Kaffeemaschine", a4_6:"Kühlschrank, Geschirr und Grundausstattung zum Kochen",
  a5_1:"WLAN", a5_2:"Kostenlose Parkplätze auf dem Grundstück für 5 Autos", a5_3:"Self-Check-in mit Schlüsselbox", a5_4:"Persönlicher Empfang durch den Gastgeber", a5_5:"Gepäckaufbewahrung", a5_6:"Langzeitaufenthalte ab 28 Nächten",
  a6_1:"Reisebett", a6_2:"Hochstuhl", a6_3:"Steckdosenschutz", a6_4:"Spielplatz im Garten", a6_5:"Haustiere erlaubt", a6_6:"Die ganze Villa wird nur an eine Gruppe vermietet",
  locLabel:"Dalmatien entdecken", locTitle:"Entdecken Sie die Schönheit <em>Dalmatiens</em>",
  locIntro:"Dugopolje liegt landeinwärts von Split, zwischen dem Mosor-Gebirge und dem dalmatinischen Hinterland. Eine ruhige Landschaft – die Küste und die Altstädte sind dennoch schnell erreicht.",
  pl1t:"Split", pl1:"Diokletianpalast, Altstadt und die Uferpromenade Riva.", pl1d:"15–20 Min. mit dem Auto",
  pl2t:"Strand Žnjan", pl2:"Ein langer Kiesstrand in Split mit allen Annehmlichkeiten.", pl2d:"15–20 Min. mit dem Auto",
  pl3t:"Mosor-Gebirge", pl3:"Wandern und Klettern auf dem Berg, der sich vor Dugopolje erhebt.", pl3d:"Direkt vor der Tür",
  pl4t:"Höhle Vranjača", pl4:"Eine Höhle voller Stalaktiten und Stalagmiten.",
  pl5t:"Festung Klis", pl5:"Eine mittelalterliche Festung über Split mit Blick auf die Inseln.",
  pl6t:"Fluss Cetina", pl6:"Rafting, Canyoning und Ausritte entlang des Flusses.",
  pl7t:"Salona, Trogir & Omiš", pl7:"Römische Ruinen und historische Städte an der Küste.",
  pl8:"Heimat des Ritterturniers Sinjska Alka und seines Museums.",
  altAerial:"Villa Mia und ihr Pool von oben, mit den Hügeln des Hinterlands von Split", loadMap:"Interaktive Karte anzeigen", openMaps:"In Google Maps öffnen",
  locNote:"Die Fahrzeiten sind Schätzungen des Gastgebers. Die Karte zeigt die ungefähre Lage der Villa; die genaue Adresse erhalten Sie nach der Buchung.",
  bookLabel:"Buchung", bookTitle:"Ihre mediterrane Geschichte <em>beginnt hier</em>",
  bookP:"Aktuelle Verfügbarkeit und Preise finden Sie auf Airbnb, wo Sie sicher buchen können. Bei Fragen zu Ihrem Aufenthalt schreiben Sie uns direkt.",
  checkAvail:"Verfügbarkeit prüfen", contactUs:"Kontakt aufnehmen", ratingStar:"★ 4,96", trust1:"100 Bewertungen auf Airbnb", trust2:"Gastgeber: Ivica",
  ctLabel:"Kontakt", ctTitle:"Planen Sie Ihren <em>Aufenthalt</em>",
  ctP:"Nennen Sie uns Ihre Reisedaten und die Größe Ihrer Gruppe – wir antworten mit der Verfügbarkeit und allem, was Sie wissen möchten.",
  ctNotice:"Dieses Formular ist noch nicht verbunden, Nachrichten können daher nicht gesendet werden. Bitte prüfen Sie bis dahin die Verfügbarkeit und kontaktieren Sie den Gastgeber über Airbnb.",
  fName:"Name", fEmail:"E-Mail", fIn:"Anreisedatum", fOut:"Abreisedatum", fGuestsN:"Anzahl der Gäste", fSelect:"Auswählen", fMsg:"Nachricht",
  fMsgPh:"Alles, was wir wissen sollten: Alter der Kinder, Ankunftszeit, besondere Anlässe…", fSend:"Anfrage senden",
  ftrTag:"Ihr privater mediterraner Rückzugsort", ftrNav:"Entdecken", ftrLoc:"Lage", ftrRegion:"Gespanschaft Split-Dalmatien", ftrCountry:"Kroatien", ftrBook:"Buchen", credit:"Website von"
},
it: {
  skip:"Vai al contenuto", brandSub:"Dugopolje · Spalato",
  nav1:"La villa", nav2:"Esperienza", nav3:"Servizi", nav4:"Galleria", nav5:"Posizione", nav6:"Contatti",
  bookStay:"Prenota il soggiorno", menu:"Menu",
  heroEyebrow:"Dugopolje · Spalato · Dalmazia", heroT1:"Il vostro rifugio", heroT2:"mediterraneo", heroT3:"privato",
  heroLead:"Scoprite momenti indimenticabili, un comfort senza tempo e la bellezza della vita dalmata.",
  heroCta1:"Scopri la villa", heroCta2:"Verifica disponibilità",
  metaPool:"Piscina riscaldata", metaGuests:"Ospiti", metaRooms:"Camere con bagno", metaRating:"Valutazione Airbnb", ratingNum:"4,96 ★", scroll:"Scorri",
  altIntro:"Villa Mia dall'alto: la casa con il tetto in cotto, il solarium della piscina con lettini in legno e il muro in pietra",
  capIntro:"La villa e la sua piscina, con il Mosor all'orizzonte",
  introLabel:"Benvenuti a Villa Mia", introTitle:"Un luogo per rallentare.<br><em>Un luogo da ricordare.</em>",
  introP1:"Ristrutturata e affittata solo per intero, Villa Mia si trova in un angolo verde e tranquillo di Dugopolje, un paese ai piedi del monte Mosor, a 15–20 minuti d'auto dal centro di Spalato.",
  introP2:"Offre 300 m² di spazio abitativo su una proprietà di 2.000 m². C'è posto perché dodici ospiti stiano insieme, e spazio sufficiente perché ognuno trovi il proprio angolo tranquillo.",
  fGuests:"Ospiti", fBedrooms:"Camere, tutte con bagno", fBeds:"Letti", fBaths:"Bagni", bathsNum:"5,5", fPool:"Piscina riscaldata", fPlot:"Proprietà", plotNum:"2.000 m²",
  ratingLine:"4,96 su 100 recensioni degli ospiti su Airbnb",
  villaLabel:"La villa", villaTitle:"Pensata per momenti <em>speciali</em>",
  villaIntro:"Due piani, cinque camere con bagno privato e un soggiorno che si apre direttamente sulla piscina. Tutta la villa è climatizzata.",
  altLiving:"Soggiorno con divano angolare marrone, tavolino in vetro e porte scorrevoli aperte sulla piscina",
  altLivingView:"Vista dal soggiorno, attraverso le porte a vetri, sulla piscina e sulle montagne",
  r1k:"Soggiorno", r1t:"Aperto sulla piscina",
  r1p:"Al piano rialzato, un ampio soggiorno conduce attraverso porte a vetri direttamente alla terrazza della piscina e alla zona barbecue. Pilastri in pietra, caldi pavimenti in legno e un comodo divano angolare invitano a restare.",
  altDining:"Zona pranzo con lungo tavolo in legno, sedie in pelle color crema e la cucina sullo sfondo",
  altKitchen:"Cucina completamente attrezzata con mobili color crema, forno, piano cottura e bollitore",
  r2k:"Cucina e zona pranzo", r2t:"Intorno al tavolo di rovere",
  r2p:"La cucina completamente attrezzata dispone di forno, fornelli, lavastoviglie, microonde, macchina del caffè e un frigorifero alto. Prosegue in una zona pranzo raccolta attorno a un grande e massiccio tavolo di rovere.",
  altHottub:"Vasca idromassaggio rotonda su un balcone piastrellato sotto il tetto in cotto",
  altViewMosor:"Vista dal balcone sulla piscina e sulle cime del Mosor",
  r3k:"Il balcone", r3t:"Un idromassaggio di fronte al Mosor",
  r3p:"Una delle camere al piano superiore si apre su un ampio balcone, al riparo da sguardi esterni, con una vasca idromassaggio per tre persone e un'ampia vista sulla montagna e sulla campagna.",
  roomsT:"Cinque camere, cinque bagni",
  roomsP:"Ogni camera ha il proprio bagno. Tre si trovano al piano superiore sotto travi a vista, con vista sulla natura e sul Mosor. Due sono al piano terra, una delle quali con porta direttamente sulla terrazza della piscina. Un bagno per gli ospiti con lavanderia completa il piano terra.",
  floorsAria:"Filtra per piano", floorAll:"Tutte", floorUp:"Primo piano", floorGround:"Piano terra",
  altRoom1:"Camera 1: letto matrimoniale sotto travi di legno a vista", altRoom2:"Camera 2: letto matrimoniale, abbaino e soffitto in legno",
  altRoom3:"Camera 3: letto matrimoniale sotto un soffitto inclinato in legno", altRoom4:"Camera 4 con letto matrimoniale, letto singolo e porta del bagno",
  altRoom5:"Camera 5 con porta a vetri verso la piscina",
  room1:"Letto matrimoniale sotto travi di legno · bagno privato", room2:"Letto matrimoniale, abbaino · bagno privato",
  room3:"Letto matrimoniale, soffitto inclinato in legno · bagno privato", room4:"Letto matrimoniale e singolo · bagno privato",
  room5:"Letto matrimoniale, porta sulla terrazza della piscina · bagno privato",
  roomsNote:"La numerazione delle camere segue le didascalie delle foto dell'host su Airbnb. La suddivisione per piani si basa sulla descrizione e sulle fotografie.",
  poolLabel:"La piscina privata", poolTitle:"Dove ogni giorno <em>sa d'estate</em>",
  poolF1:"Temperatura dell'acqua", poolF2:"Piscina riscaldata", poolF3v:"Apr – Ott", poolF3:"Stagione dei bagni",
  poolP1:"La piscina è riscaldata a 28–30 °C: si nuota già da Pasqua fino alla fine di ottobre.",
  poolP2:"Il solarium è ampio, con lettini e tavoli in legno e un angolo coperto per le ore più calde. La sera l'acqua si illumina di blu contro la pietra calda della casa.",
  seasonAria:"Stagione dei bagni da aprile a ottobre",
  altPoolNight:"La piscina illuminata di blu di notte, con lettini e il gazebo del barbecue sullo sfondo",
  altCocktail:"Un drink, occhiali da sole e un cappello di paglia su un tavolino di legno vicino alla piscina",
  outLabel:"Vivere all'aperto", outTitle:"Il lusso del <em>dolce far niente</em>",
  outIntro:"La proprietà è abbastanza grande perché tutto il gruppo possa ritrovarsi, e perché chiunque possa ritagliarsi un momento per sé.",
  altPergola:"Pergolato coperto con un lungo tavolo in legno, una bottiglia di vino e bicchieri, con la piscina sullo sfondo",
  altBbq:"Barbecue in muratura di pietra con legna accatastata sotto", altRoses:"Cespugli di rose in giardino, con la villa sullo sfondo",
  o1t:"Terrazza coperta", o1p:"Un pergolato in legno con un lungo tavolo per pranzi senza fretta accanto alla piscina.",
  o2t:"Barbecue in pietra", o2p:"Un tradizionale barbecue in muratura vicino alla piscina, con un proprio gazebo coperto.",
  o3t:"Giardino e area giochi", o3p:"Prato, alberi da frutto e rose, con una struttura in legno per arrampicarsi e altalene per i bambini.",
  o4t:"Ombra e relax", o4p:"Un angolo lounge vicino al barbecue e lettini in legno tutto intorno alla piscina.",
  dayTitle:"Una giornata a <em>Villa Mia</em>",
  altMorning:"Fiori rosa e bianchi al sole del mattino, con la piscina e il barbecue sullo sfondo",
  d1t:"Mattino", d1p:"Un caffè tra i fiori, mentre la piscina è ancora calma e silenziosa.",
  altNoon:"L'acqua azzurra della piscina a mezzogiorno davanti alla villa",
  d2t:"Mezzogiorno", d2p:"Acqua tiepida, bevande fresche e un lungo pranzo sotto il pergolato.",
  altSunset:"La villa e la piscina dall'alto al tramonto, con il cielo rosa sopra le colline",
  d3t:"Tramonto", d3p:"Si accende il barbecue mentre la luce sulle colline diventa rosa.",
  altNight:"La piscina illuminata e la villa di notte",
  d4t:"Notte", d4p:"Una notte silenziosa, aria fresca e la piscina che brilla di blu.",
  actT:"E quando volete muovervi", actP:"Il monte Mosor si erge proprio davanti a Dugopolje, e i dintorni sono ricchi di sentieri per trekking, ciclismo ed equitazione.",
  act1:"Una palestra proprio accanto alla villa", act2:"Quattro biciclette incluse nel prezzo e oltre 100 km di percorsi segnalati nei dintorni",
  act3:"Biliardo, ping-pong, freccette, scacchi, domino e carte", act4:"Passeggiate a cavallo e in carrozza su richiesta, con supplemento",
  altGym:"Palestra con stazione multifunzione, panca e pesi", altBilliards:"Tavolo da biliardo davanti alle porte a vetri sulla piscina",
  altBikes:"Mountain bike allineate vicino alla villa", altCarriage:"Ospiti su una carrozza trainata da cavalli in campagna",
  galLabel:"Galleria", galTitle:"In ogni <em>luce</em>", filtersAria:"Filtra le foto",
  cAll:"Tutte", cExt:"Esterni", cPool:"Piscina", cInt:"Interni", cBed:"Camere", cOut:"All'aperto",
  lbAria:"Visualizzatore foto", close:"Chiudi", prev:"Foto precedente", next:"Foto successiva",
  amenLabel:"Servizi", amenTitle:"Ogni dettaglio, <em>curato con attenzione</em>",
  ag1:"Comfort", ag2:"Vivere all'aperto", ag3:"Intrattenimento", ag4:"Cucina", ag5:"Connessione e arrivo", ag6:"Famiglia",
  a1_1:"Aria condizionata in tutta la villa", a1_2:"Riscaldamento", a1_3:"Tende oscuranti", a1_4:"Biancheria da letto e asciugamani", a1_5:"Asciugacapelli e shampoo", a1_6:"Lavatrice e ferro da stiro",
  a2_1:"Piscina riscaldata, 45 m², 28–30 °C", a2_2:"Idromassaggio per tre sul balcone", a2_3:"Terrazza coperta e pergolato", a2_4:"Barbecue in muratura di pietra", a2_5:"Giardino con alberi da frutto", a2_6:"Area giochi per bambini",
  a3_1:"Palestra", a3_2:"Biliardo", a3_3:"Ping-pong", a3_4:"Freccette, scacchi, domino e carte", a3_5:"Quattro biciclette incluse", a3_6:"TV con canali via cavo",
  a4_1:"Cucina completamente attrezzata", a4_2:"Forno e fornelli", a4_3:"Lavastoviglie", a4_4:"Microonde", a4_5:"Macchina del caffè", a4_6:"Frigorifero, stoviglie e prodotti base per cucinare",
  a5_1:"Wi-Fi", a5_2:"Parcheggio gratuito nella proprietà per 5 auto", a5_3:"Check-in autonomo con cassetta portachiavi", a5_4:"Accoglienza da parte dell'host", a5_5:"Deposito bagagli", a5_6:"Soggiorni lunghi da 28 notti",
  a6_1:"Culla da viaggio", a6_2:"Seggiolone", a6_3:"Copriprese", a6_4:"Area giochi in giardino", a6_5:"Animali ammessi", a6_6:"L'intera villa viene affittata a un solo gruppo",
  locLabel:"Scopri la Dalmazia", locTitle:"Esplorate la bellezza <em>della Dalmazia</em>",
  locIntro:"Dugopolje si trova nell'entroterra di Spalato, tra il monte Mosor e la campagna dalmata. Una zona tranquilla, con la costa e le città storiche a breve distanza.",
  pl1t:"Spalato", pl1:"Il Palazzo di Diocleziano, il centro storico e il lungomare Riva.", pl1d:"15–20 min in auto",
  pl2t:"Spiaggia di Žnjan", pl2:"Una lunga spiaggia di ciottoli a Spalato con tutti i servizi.", pl2d:"15–20 min in auto",
  pl3t:"Monte Mosor", pl3:"Escursioni e arrampicata sulla montagna che si erge davanti a Dugopolje.", pl3d:"A due passi",
  pl4t:"Grotta Vranjača", pl4:"Una grotta ricca di stalattiti e stalagmiti.",
  pl5t:"Fortezza di Clissa", pl5:"Una fortezza medievale sopra Spalato con vista sulle isole.",
  pl6t:"Fiume Cetina", pl6:"Rafting, canyoning e passeggiate a cavallo lungo il fiume.",
  pl7t:"Salona, Traù e Almissa", pl7:"Rovine romane e città storiche lungo la costa.",
  pl8:"Patria della giostra cavalleresca Sinjska Alka e del suo museo.",
  altAerial:"Villa Mia e la sua piscina dall'alto, con le colline dell'entroterra di Spalato", loadMap:"Mostra la mappa interattiva", openMaps:"Apri in Google Maps",
  locNote:"I tempi di percorrenza sono stime dell'host. La mappa mostra la zona approssimativa della villa; l'indirizzo esatto viene comunicato dopo la prenotazione.",
  bookLabel:"Prenotazione", bookTitle:"La vostra storia mediterranea <em>inizia qui</em>",
  bookP:"Disponibilità e tariffe aggiornate sono su Airbnb, dove potete prenotare in sicurezza. Per domande sul soggiorno, scriveteci direttamente.",
  checkAvail:"Verifica disponibilità", contactUs:"Contattateci", ratingStar:"★ 4,96", trust1:"100 recensioni su Airbnb", trust2:"Host: Ivica",
  ctLabel:"Contatti", ctTitle:"Pianificate il vostro <em>soggiorno</em>",
  ctP:"Indicateci le date e il numero di ospiti: vi risponderemo con la disponibilità e tutto ciò che desiderate sapere.",
  ctNotice:"Questo modulo non è ancora collegato, quindi i messaggi non possono essere inviati. Nel frattempo, verificate la disponibilità e contattate l'host tramite Airbnb.",
  fName:"Nome", fEmail:"E-mail", fIn:"Data di arrivo", fOut:"Data di partenza", fGuestsN:"Numero di ospiti", fSelect:"Seleziona", fMsg:"Messaggio",
  fMsgPh:"Tutto ciò che dovremmo sapere: età dei bambini, orario di arrivo, occasioni speciali…", fSend:"Invia richiesta",
  ftrTag:"Il vostro rifugio mediterraneo privato", ftrNav:"Esplora", ftrLoc:"Posizione", ftrRegion:"Regione spalatino-dalmata", ftrCountry:"Croazia", ftrBook:"Prenota", credit:"Sito web di"
}
};

/* Strings used only by scripts — all four languages */
const UI = {
  en: { docTitle:"Villa Mia — Heated Pool Villa in Dugopolje, near Split", of:"of",
        months:["J","F","M","A","M","J","J","A","S","O","N","D"],
        errName:"Please enter your name.", errEmail:"Please enter a valid email address.", errIn:"Please choose an arrival date.",
        errInPast:"The arrival date cannot be in the past.", errOut:"Please choose a departure date.", errOutBefore:"Departure must be after arrival.",
        errGuests:"Please select the number of guests.", errForm:"Please check the highlighted fields.",
        sending:"Sending…", ok:"Thank you! Your inquiry has been sent. We will reply soon.", fail:"Sorry, the message could not be sent. Please try again or use Airbnb.",
        more:"Show all %n photos", notConnected:"The form is not connected yet, so nothing was sent. Please contact the host through Airbnb." },
  hr: { docTitle:"Villa Mia — vila s grijanim bazenom u Dugopolju kraj Splita", of:"od",
        months:["S","V","O","T","S","L","S","K","R","L","S","P"],
        errName:"Upišite svoje ime.", errEmail:"Upišite ispravnu e-mail adresu.", errIn:"Odaberite datum dolaska.",
        errInPast:"Datum dolaska ne može biti u prošlosti.", errOut:"Odaberite datum odlaska.", errOutBefore:"Odlazak mora biti nakon dolaska.",
        errGuests:"Odaberite broj gostiju.", errForm:"Provjerite označena polja.",
        sending:"Šaljem…", ok:"Hvala! Upit je poslan. Javit ćemo vam se uskoro.", fail:"Nažalost, poruka nije poslana. Pokušajte ponovno ili koristite Airbnb.",
        more:"Prikaži svih %n fotografija", notConnected:"Obrazac još nije povezan pa ništa nije poslano. Domaćinu se javite putem Airbnba." },
  de: { docTitle:"Villa Mia — Villa mit beheiztem Pool in Dugopolje bei Split", of:"von",
        months:["J","F","M","A","M","J","J","A","S","O","N","D"],
        errName:"Bitte geben Sie Ihren Namen ein.", errEmail:"Bitte geben Sie eine gültige E-Mail-Adresse ein.", errIn:"Bitte wählen Sie ein Anreisedatum.",
        errInPast:"Das Anreisedatum darf nicht in der Vergangenheit liegen.", errOut:"Bitte wählen Sie ein Abreisedatum.", errOutBefore:"Die Abreise muss nach der Anreise liegen.",
        errGuests:"Bitte wählen Sie die Anzahl der Gäste.", errForm:"Bitte prüfen Sie die markierten Felder.",
        sending:"Wird gesendet…", ok:"Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns bald.", fail:"Die Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder nutzen Sie Airbnb.",
        more:"Alle %n Fotos anzeigen", notConnected:"Das Formular ist noch nicht verbunden, es wurde nichts gesendet. Bitte kontaktieren Sie den Gastgeber über Airbnb." },
  it: { docTitle:"Villa Mia — villa con piscina riscaldata a Dugopolje, vicino a Spalato", of:"di",
        months:["G","F","M","A","M","G","L","A","S","O","N","D"],
        errName:"Inserite il vostro nome.", errEmail:"Inserite un indirizzo e-mail valido.", errIn:"Scegliete una data di arrivo.",
        errInPast:"La data di arrivo non può essere nel passato.", errOut:"Scegliete una data di partenza.", errOutBefore:"La partenza deve essere successiva all'arrivo.",
        errGuests:"Selezionate il numero di ospiti.", errForm:"Controllate i campi evidenziati.",
        sending:"Invio in corso…", ok:"Grazie! La richiesta è stata inviata. Vi risponderemo presto.", fail:"Purtroppo il messaggio non è stato inviato. Riprovate o utilizzate Airbnb.",
        more:"Mostra tutte le %n foto", notConnected:"Il modulo non è ancora collegato, quindi non è stato inviato nulla. Contattate l'host tramite Airbnb." }
};

/* ---------- 3 · GALLERY — [file, category, width/height, EN, HR, DE, IT] ---------- */
const GALLERY = [
  ["hero-dusk","exterior",1.918,"The villa and pool at dusk","Vila i bazen u sumrak","Villa und Pool in der Abenddämmerung","La villa e la piscina al crepuscolo"],
  ["pool-day","pool",1.5,"Loungers in the dappled shade by the pool","Ležaljke u hladu uz bazen","Liegen im Halbschatten am Pool","Lettini all'ombra accanto alla piscina"],
  ["exterior-pool","exterior",1.5,"The villa, the pool deck and the stone barbecue","Vila, terasa bazena i kameni roštilj","Die Villa, das Pooldeck und der Steingrill","La villa, il solarium e il barbecue in pietra"],
  ["living","interior",1.5,"The living room opens onto the pool","Dnevni boravak otvara se prema bazenu","Das Wohnzimmer öffnet sich zum Pool","Il soggiorno si apre sulla piscina"],
  ["room1-a","bedrooms",1.5,"Bedroom 1, under timber beams","Soba 1, ispod drvenih greda","Zimmer 1 unter Holzbalken","Camera 1, sotto le travi in legno"],
  ["pool-ladder","pool",1.5,"Heated to 28–30 °C, April to October","Grijan na 28–30 °C, od travnja do listopada","Beheizt auf 28–30 °C, April bis Oktober","Riscaldata a 28–30 °C, da aprile a ottobre"],
  ["terrace-pergola","outdoor",1.5,"Lunch under the pergola","Ručak pod pergolom","Mittagessen unter der Pergola","Pranzo sotto il pergolato"],
  ["exterior-mosor","exterior",1.5,"From above, with the hills behind","Odozgo, s brdima u pozadini","Von oben, mit den Hügeln dahinter","Dall'alto, con le colline alle spalle"],
  ["dining","interior",1.778,"The oak dining table","Hrastov blagovaonski stol","Der Esstisch aus Eiche","Il tavolo da pranzo in rovere"],
  ["hottub-balcony","outdoor",1.5,"The balcony hot tub","Hidromasažna kada na balkonu","Der Whirlpool auf dem Balkon","L'idromassaggio sul balcone"],
  ["room2-a","bedrooms",1.5,"Bedroom 2","Soba 2","Zimmer 2","Camera 2"],
  ["pool-night","pool",2.095,"The pool lit at night","Bazen osvijetljen noću","Der beleuchtete Pool bei Nacht","La piscina illuminata di notte"],
  ["kitchen","interior",1.5,"The fully equipped kitchen","Potpuno opremljena kuhinja","Die voll ausgestattete Küche","La cucina completamente attrezzata"],
  ["view-mosor","outdoor",1.5,"The view of Mount Mosor from the balcony","Pogled na Mosor s balkona","Blick vom Balkon auf den Mosor","La vista sul monte Mosor dal balcone"],
  ["exterior-aerial","exterior",1.5,"The villa in its green surroundings","Vila u zelenom okruženju","Die Villa in grüner Umgebung","La villa immersa nel verde"],
  ["room3-b","bedrooms",1.5,"Bedroom 3","Soba 3","Zimmer 3","Camera 3"],
  ["pool-steps","pool",1.5,"Steps into the pool","Stube u bazen","Stufen in den Pool","I gradini della piscina"],
  ["bbq","outdoor",1.5,"The built-in stone barbecue","Zidani kameni roštilj","Der gemauerte Steingrill","Il barbecue in muratura di pietra"],
  ["living-b","interior",1.74,"Living and dining space","Dnevni boravak i blagovaonica","Wohn- und Essbereich","Soggiorno e zona pranzo"],
  ["room4-a","bedrooms",1.5,"Bedroom 4, on the ground floor","Soba 4, u prizemlju","Zimmer 4 im Erdgeschoss","Camera 4, al piano terra"],
  ["pool-flowers","pool",1.333,"Geraniums by the pool","Pelargonije uz bazen","Geranien am Pool","Gerani accanto alla piscina"],
  ["aerial-sunset","exterior",1.5,"Sunset over the valley","Zalazak sunca nad dolinom","Sonnenuntergang über dem Tal","Tramonto sulla valle"],
  ["hottub","outdoor",1.5,"Massage hot tub for three","Masažna kada za troje","Massage-Whirlpool für drei","Vasca idromassaggio per tre"],
  ["dining-living","interior",1.5,"From the dining table to the pool","Od blagovaonskog stola do bazena","Vom Esstisch bis zum Pool","Dal tavolo da pranzo alla piscina"],
  ["room5-a","bedrooms",1.5,"Bedroom 5, opening to the pool","Soba 5, s izlazom prema bazenu","Zimmer 5 mit Zugang zum Pool","Camera 5, con uscita verso la piscina"],
  ["lounge-rattan","outdoor",1.333,"The lounge corner by the barbecue","Lounge kutak uz roštilj","Die Lounge-Ecke am Grill","L'angolo lounge vicino al barbecue"],
  ["pool-loungers","pool",1.778,"Sun loungers and the mountains","Ležaljke i planine","Sonnenliegen und Berge","Lettini e montagne"],
  ["entrance-carport","exterior",1.5,"Main entrance and covered parking","Glavni ulaz i natkriveno parkiralište","Haupteingang und überdachter Parkplatz","Ingresso principale e parcheggio coperto"],
  ["living-pool-view","interior",1.5,"Glass doors to the pool","Staklena vrata prema bazenu","Glastüren zum Pool","Porte a vetri sulla piscina"],
  ["room1-b","bedrooms",1.5,"Bedroom 1","Soba 1","Zimmer 1","Camera 1"],
  ["garden-flowers","outdoor",1.333,"Spring in the garden","Proljeće u vrtu","Frühling im Garten","Primavera in giardino"],
  ["pool-night-terrace","pool",1.778,"Evening by the pool","Večer uz bazen","Abend am Pool","Sera accanto alla piscina"],
  ["kitchen-detail","interior",1.5,"Kitchen worktop","Kuhinjska radna ploča","Arbeitsfläche der Küche","Il piano di lavoro della cucina"],
  ["room2-b","bedrooms",1.5,"Bedroom 2","Soba 2","Zimmer 2","Camera 2"],
  ["pergola-table","outdoor",1.5,"The covered terrace","Natkrivena terasa","Die überdachte Terrasse","La terrazza coperta"],
  ["pool-cocktail","pool",1.5,"Poolside","Uz bazen","Am Pool","A bordo piscina"],
  ["entrance","exterior",1.47,"The front entrance","Ulaz u vilu","Der Eingang","L'ingresso"],
  ["living-tv","interior",1.5,"Living room","Dnevni boravak","Wohnzimmer","Soggiorno"],
  ["room3-a","bedrooms",1.5,"Bedroom 3","Soba 3","Zimmer 3","Camera 3"],
  ["bbq-pavilion","outdoor",1.5,"The barbecue pavilion","Paviljon s roštiljem","Der Grillpavillon","Il gazebo del barbecue"],
  ["pool-doors","pool",1.5,"A bedroom door onto the pool","Vrata sobe prema bazenu","Zimmertür zum Pool","La porta di una camera sulla piscina"],
  ["billiards","interior",.75,"Billiards","Biljar","Billard","Biliardo"],
  ["room4-b","bedrooms",1.5,"Bedroom 4","Soba 4","Zimmer 4","Camera 4"],
  ["garden-roses","outdoor",.75,"Roses in the garden","Ruže u vrtu","Rosen im Garten","Rose in giardino"],
  ["bath1-a","interior",1.5,"Bathroom 1","Kupaonica 1","Bad 1","Bagno 1"],
  ["room4-c","bedrooms",1.5,"Bedroom 4","Soba 4","Zimmer 4","Camera 4"],
  ["playground","outdoor",1.778,"The children's playground","Dječje igralište","Der Kinderspielplatz","L'area giochi per bambini"],
  ["living-c","interior",1.5,"Living room","Dnevni boravak","Wohnzimmer","Soggiorno"],
  ["room5-b","bedrooms",1.5,"Bedroom 5","Soba 5","Zimmer 5","Camera 5"],
  ["gym","interior",1.333,"The gym","Teretana","Der Fitnessraum","La palestra"],
  ["garden-lawn","outdoor",1.333,"Lawn and fruit trees","Travnjak i voćke","Rasen und Obstbäume","Prato e alberi da frutto"],
  ["bath4-a","interior",1.5,"Bathroom 4","Kupaonica 4","Bad 4","Bagno 4"],
  ["bath3-a","interior",1.5,"Bathroom 3","Kupaonica 3","Bad 3","Bagno 3"],
  ["bikes","outdoor",1.333,"Bikes for guests","Bicikli za goste","Fahrräder für Gäste","Biciclette per gli ospiti"],
  ["cherries","outdoor",1.333,"Cherries from the garden","Trešnje iz vrta","Kirschen aus dem Garten","Ciliegie dal giardino"],
  ["bath2","interior",1.5,"Bathroom 2","Kupaonica 2","Bad 2","Bagno 2"],
  ["hottub-door","outdoor",1.5,"The balcony door and the hot tub","Vrata balkona i masažna kada","Balkontür und Whirlpool","La porta del balcone e l'idromassaggio"],
  ["bath5","interior",.902,"Bathroom 5","Kupaonica 5","Bad 5","Bagno 5"],
  ["carriage","outdoor",.75,"Horse-carriage tours, on request","Vožnja kočijom, na upit","Kutschfahrten auf Anfrage","Giri in carrozza su richiesta"],
  ["playground-swing","outdoor",1.333,"Swings and climbing frame","Ljuljačke i penjalica","Schaukeln und Klettergerüst","Altalene e struttura per arrampicarsi"],
  ["riding","outdoor",.75,"Horseback riding, on request","Jahanje, na upit","Ausritte auf Anfrage","Passeggiate a cavallo su richiesta"]
];

/* ---------- 4 · Behaviour ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const LANGS = ["en", "hr", "de", "it"];
const LIDX = { en: 3, hr: 4, de: 5, it: 6 };
let lang = "en";

const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
};

/* --- i18n --- */
const EN = {};
const attrs = [["data-i18n", "text"], ["data-i18n-html", "html"], ["data-i18n-alt", "alt"], ["data-i18n-aria", "aria"], ["data-i18n-ph", "ph"]];
function captureEN() {
  for (const [a, kind] of attrs) {
    $$(`[${a}]`).forEach(el => {
      const k = el.getAttribute(a);
      if (EN[k] !== undefined) return;
      EN[k] = kind === "text" ? el.textContent : kind === "html" ? el.innerHTML : kind === "alt" ? el.alt : kind === "aria" ? el.getAttribute("aria-label") : el.placeholder;
    });
  }
}
function t(k) { return (lang !== "en" && I18N[lang] && I18N[lang][k] !== undefined) ? I18N[lang][k] : EN[k]; }
function u(k) { return (UI[lang] || UI.en)[k]; }
function bookUrl() { return CONFIG.directBookingUrl || CONFIG.airbnb[lang] || CONFIG.airbnb.en; }

function applyLang(next, persist) {
  lang = LANGS.includes(next) ? next : "en";
  document.documentElement.lang = lang;
  for (const [a, kind] of attrs) {
    $$(`[${a}]`).forEach(el => {
      const v = t(el.getAttribute(a));
      if (v === undefined) return;
      if (kind === "text") el.textContent = v;
      else if (kind === "html") el.innerHTML = v;
      else if (kind === "alt") el.alt = v;
      else if (kind === "aria") el.setAttribute("aria-label", v);
      else el.placeholder = v;
    });
  }
  $$("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  $$("[data-book]").forEach(a => { a.href = bookUrl(); });
  document.title = u("docTitle");
  renderMonths();
  renderGallery(currentCat, false);
  if (lb.open) showLb(lb.i, false);
  if (persist) {
    store.set("vm-lang", lang);
    const url = new URL(location.href);
    if (url.searchParams.has("lang")) { url.searchParams.set("lang", lang); history.replaceState(null, "", url); }
  }
}

/* --- header --- */
const hdr = $("#hdr");
const hero = $(".hero");
let lastY = 0;
function onScroll() {
  const y = window.scrollY;
  const pastHero = y > (hero.offsetHeight - 90);
  hdr.classList.toggle("is-solid", y > 40);
  hdr.classList.toggle("is-hidden", y > lastY && y > hero.offsetHeight * .6 && !document.body.classList.contains("menu-open"));
  lastY = y;
  mbarUpdate(pastHero);
}

/* --- mobile menu --- */
const burger = $("#burger");
const menu = $("#menu");
function setMenu(open) {
  burger.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
  if (open) {
    menu.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add("is-open")));
    setTimeout(() => { const f = $("a", menu); f && f.focus({ preventScroll: true }); }, 300);
  } else {
    menu.classList.remove("is-open");
    setTimeout(() => { if (!menu.classList.contains("is-open")) menu.hidden = true; }, reduce ? 0 : 700);
  }
}
burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); burger.focus(); }
});
window.matchMedia("(min-width: 1280px)").addEventListener("change", m => { if (m.matches) setMenu(false); });

/* --- reveal --- */
function initReveal() {
  const els = $$("[data-reveal]");
  if (!("IntersectionObserver" in window) || reduce) { els.forEach(e => e.classList.add("in")); return; }
  // stagger siblings inside the same parent
  const groups = new Map();
  els.forEach(el => { const p = el.parentElement; const n = groups.get(p) || 0; el.style.setProperty("--rd", `${Math.min(n, 6) * 0.08}s`); groups.set(p, n + 1); });
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting || en.boundingClientRect.top < 0) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: .12 });
  els.forEach(el => io.observe(el));
}

/* --- parallax (transform only, rAF, in-view only) --- */
function initParallax() {
  if (reduce) return;
  const items = $$("[data-parallax]").map(el => ({ el, k: parseFloat(el.dataset.parallax) || .1, on: false }));
  if (!items.length) return;
  const io = new IntersectionObserver(es => es.forEach(e => { const it = items.find(i => i.el === e.target); if (it) it.on = e.isIntersecting; }), { rootMargin: "20% 0px" });
  items.forEach(i => io.observe(i.el));
  let ticking = false;
  const run = () => {
    const vh = window.innerHeight;
    items.forEach(i => {
      if (!i.on) return;
      const r = i.el.parentElement.getBoundingClientRect();
      const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh)); // clamped -1..1 around centre
      i.el.style.transform = `translate3d(0, ${(-p * i.k * 100).toFixed(2)}%, 0) scale(${1 + i.k})`;
    });
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
  run();
}

/* --- active nav link --- */
function initSpy() {
  const links = $$(".nav a");
  const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  const targets = { "villa": "villa", "the-villa": "villa", "pool": "experience", "experience": "experience", "gallery": "gallery", "amenities": "amenities", "location": "location", "booking": "contact", "contact": "contact" };
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const key = targets[e.target.id];
      links.forEach(a => a.removeAttribute("aria-current"));
      if (key && map.get(key)) map.get(key).setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(targets).forEach(id => { const s = document.getElementById(id); s && io.observe(s); });
}

/* --- rooms: floor filter + drag scroll --- */
function initRooms() {
  const track = $("#rooms");
  const rooms = $$(".room", track);
  $$(".floors button").forEach(b => b.addEventListener("click", () => {
    $$(".floors button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
    const f = b.dataset.floor;
    rooms.forEach(r => r.dataset.dim = String(f !== "all" && r.dataset.floor !== f));
    const first = rooms.find(r => f === "all" || r.dataset.floor === f);
    if (first) track.scrollTo({ left: first.offsetLeft - track.offsetLeft, behavior: reduce ? "auto" : "smooth" });
  }));
  let down = false, sx = 0, sl = 0, moved = false;
  track.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; });
  window.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 4) { moved = true; track.classList.add("is-drag"); }
    track.scrollLeft = sl - dx;
  });
  window.addEventListener("pointerup", () => { if (!down) return; down = false; track.classList.remove("is-drag"); });
  track.addEventListener("click", e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
}

/* --- pool season months --- */
function renderMonths() {
  const ol = $("[data-months]");
  if (!ol) return;
  ol.innerHTML = u("months").map((m, i) => `<li class="${i >= 3 && i <= 9 ? "on" : ""}" style="--i:${i}">${m}</li>`).join("");
}

/* --- gallery + lightbox --- */
const masonry = $("#masonry");
let currentCat = "all";
let expanded = false;
const LIMIT = 16;
const moreBtn = $("#galMore");
let visible = GALLERY;
const src = (n, w) => `images/${n}-${w}.webp`;
function cap(item) { return item[LIDX[lang]] || item[3]; }

function renderGallery(cat, animate = true) {
  currentCat = cat;
  visible = cat === "all" ? GALLERY : GALLERY.filter(g => g[1] === cat);
  const shown = expanded ? visible : visible.slice(0, LIMIT);
  moreBtn.hidden = expanded || visible.length <= LIMIT;
  moreBtn.textContent = u("more").replace("%n", visible.length);
  masonry.innerHTML = shown.map((g, i) => {
    const h = Math.round(800 / g[2]);
    return `<li style="--i:${animate ? Math.min(i, 16) : 0}${animate ? "" : ";animation:none"}"><button type="button" data-i="${i}" data-cap="${cap(g).replace(/"/g, "&quot;")}" aria-label="${cap(g).replace(/"/g, "&quot;")}"><img src="${src(g[0], 800)}" width="800" height="${h}" alt="${cap(g).replace(/"/g, "&quot;")}" loading="lazy" decoding="async"></button></li>`;
  }).join("");
  $$(".filters [data-count]").forEach(s => { const c = s.dataset.count; s.textContent = c === "all" ? GALLERY.length : GALLERY.filter(g => g[1] === c).length; });
}
$$(".filters button").forEach(b => b.addEventListener("click", () => {
  $$(".filters button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
  expanded = false;
  renderGallery(b.dataset.cat);
}));
moreBtn.addEventListener("click", () => {
  const from = LIMIT; expanded = true; renderGallery(currentCat, false);
  const next = masonry.querySelector(`[data-i="${from}"]`); if (next) next.focus({ preventScroll: true });
});
masonry.addEventListener("click", e => { const b = e.target.closest("button[data-i]"); if (b) openLb(+b.dataset.i, b); });

const lbEl = $("#lb"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbCount = $("#lbCount");
const lb = { open: false, i: 0, opener: null };
function showLb(i, swap = true) {
  const n = visible.length;
  lb.i = (i + n) % n;
  const g = visible[lb.i];
  const set = () => {
    lbImg.srcset = `${src(g[0], 1400)} 1400w, ${src(g[0], 2200)} 2200w`;
    lbImg.sizes = "100vw";
    lbImg.src = src(g[0], 1400);
    lbImg.alt = cap(g);
    lbCap.textContent = cap(g);
    lbCount.textContent = `${String(lb.i + 1).padStart(2, "0")} ${u("of")} ${String(n).padStart(2, "0")}`;
  };
  if (swap && !reduce) {
    lbImg.classList.add("is-swap");
    setTimeout(() => { set(); lbImg.onload = () => lbImg.classList.remove("is-swap"); if (lbImg.complete) lbImg.classList.remove("is-swap"); }, 180);
  } else set();
  // preload neighbours
  [lb.i + 1, lb.i - 1].forEach(j => { const x = visible[(j + n) % n]; const im = new Image(); im.src = src(x[0], 1400); });
}
function openLb(i, opener) {
  lb.open = true; lb.opener = opener;
  lbEl.hidden = false;
  document.body.style.overflow = "hidden";
  showLb(i, false);
  requestAnimationFrame(() => lbEl.classList.add("is-open"));
  $("#lbClose").focus();
}
function closeLb() {
  lb.open = false;
  lbEl.classList.remove("is-open");
  document.body.style.overflow = "";
  setTimeout(() => { if (!lb.open) lbEl.hidden = true; }, reduce ? 0 : 400);
  if (lb.opener) lb.opener.focus({ preventScroll: true });
}
$("#lbClose").addEventListener("click", closeLb);
$("#lbPrev").addEventListener("click", () => showLb(lb.i - 1));
$("#lbNext").addEventListener("click", () => showLb(lb.i + 1));
lbEl.addEventListener("click", e => { if (e.target === lbEl || e.target.id === "lbStage") closeLb(); });
document.addEventListener("keydown", e => {
  if (!lb.open) return;
  if (e.key === "Escape") closeLb();
  else if (e.key === "ArrowRight") showLb(lb.i + 1);
  else if (e.key === "ArrowLeft") showLb(lb.i - 1);
  else if (e.key === "Tab") { // keep focus inside the dialog
    const f = $$("button", lbEl); const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
let tx = 0, ty = 0;
lbEl.addEventListener("touchstart", e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
lbEl.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) showLb(lb.i + (dx < 0 ? 1 : -1));
  else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) closeLb();
}, { passive: true });

/* --- map (loaded only on request) --- */
$("#loadMap").addEventListener("click", () => {
  const box = $("#mapbox");
  const f = document.createElement("iframe");
  f.src = CONFIG.mapEmbed; f.title = "Map: Villa Mia, Dugopolje"; f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade";
  box.appendChild(f);
  $(".mapbox__ui", box).hidden = true;
});

/* --- form --- */
const form = $("#form");
const status = $("#formStatus");
const fIn = $("#f-in"), fOut = $("#f-out");
const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
fIn.min = iso(new Date());
fIn.addEventListener("change", () => { if (fIn.value) { const d = new Date(fIn.value); d.setDate(d.getDate() + 1); fOut.min = iso(d); } });
if (!CONFIG.inquiryEmail) $("#formNotice").hidden = false;

function setErr(name, msg) {
  const el = form.elements[name];
  const p = $(`[data-err="${name}"]`, form);
  if (p) p.textContent = msg || "";
  if (el) { if (msg) { el.setAttribute("aria-invalid", "true"); el.setAttribute("aria-describedby", `err-${name}`); p.id = `err-${name}`; } else el.removeAttribute("aria-invalid"); }
  return !msg;
}
function validate() {
  const v = n => (form.elements[n].value || "").trim();
  const today = iso(new Date());
  let ok = true;
  ok = setErr("name", v("name").length < 2 ? u("errName") : "") && ok;
  ok = setErr("email", /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email")) ? "" : u("errEmail")) && ok;
  ok = setErr("arrival", !v("arrival") ? u("errIn") : v("arrival") < today ? u("errInPast") : "") && ok;
  ok = setErr("departure", !v("departure") ? u("errOut") : (v("arrival") && v("departure") <= v("arrival")) ? u("errOutBefore") : "") && ok;
  ok = setErr("guests", !v("guests") ? u("errGuests") : "") && ok;
  return ok;
}
["name", "email", "arrival", "departure", "guests"].forEach(n => form.elements[n].addEventListener("blur", () => { if (form.dataset.tried) validate(); }));
form.addEventListener("submit", async e => {
  e.preventDefault();
  form.dataset.tried = "1";
  status.className = "form__status";
  if (form.elements._honey.value) return;
  if (!validate()) { status.textContent = u("errForm"); status.classList.add("is-error"); const bad = $("[aria-invalid='true']", form); bad && bad.focus(); return; }
  if (!CONFIG.inquiryEmail) { status.textContent = u("notConnected"); status.classList.add("is-error"); return; }
  status.textContent = u("sending");
  const btn = $("button[type=submit]", form); btn.disabled = true;
  try {
    const data = Object.fromEntries(new FormData(form));
    delete data._honey;
    data._subject = `Villa Mia inquiry: ${data.arrival} → ${data.departure}, ${data.guests} guests`;
    data._template = "table"; data.language = lang;
    const r = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONFIG.inquiryEmail)}`, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
    if (!r.ok) throw new Error(String(r.status));
    status.textContent = u("ok"); status.classList.add("is-ok"); form.reset(); delete form.dataset.tried;
  } catch (err) {
    status.textContent = u("fail"); status.classList.add("is-error");
  } finally { btn.disabled = false; }
});

/* --- mobile booking bar --- */
const mbar = $("#mbar");
let endZone = false;
function mbarUpdate(pastHero) { mbar.classList.toggle("is-on", pastHero && !endZone); }
function initMbar() {
  const io = new IntersectionObserver(es => {
    endZone = es.some(e => e.isIntersecting) || $$("#booking, #contact, .ftr").some(el => { const r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; });
    onScroll();
  });
  $$("#booking, #contact, .ftr").forEach(el => io.observe(el));
}

/* --- language buttons --- */
$$("[data-lang]").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang, true)));

/* --- boot --- */
captureEN();
$("#year").textContent = new Date().getFullYear();
const qs = new URLSearchParams(location.search).get("lang");
const saved = store.get("vm-lang");
const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
applyLang(LANGS.includes(qs) ? qs : LANGS.includes(saved) ? saved : (LANGS.includes(nav) && nav !== "en" ? nav : "en"), false);
initReveal();
initParallax();
initSpy();
initRooms();
initMbar();
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
// The season bar animates when its block reveals
const season = $(".season");
if (season) { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { season.classList.add("in"); io.disconnect(); } }), { threshold: .4 }); io.observe(season); }
})();
