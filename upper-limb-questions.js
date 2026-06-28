const UPPER_LIMB_IMAGE_ROOT = "assets/upper-limb-clean";

function upperLimbQuestion(text, options, explanation, image = "") {
  return { text, options, answer: 0, explanation, image };
}

function buildUpperLimbFactQuestions(facts) {
  const offsets = [1, 4, 7];

  return facts.flatMap((fact, index) => {
    const distractors = offsets.map((offset) => facts[(index + offset) % facts.length]);

    return [
      upperLimbQuestion(
        `Hvilken anatomisk struktur passer bedst til denne beskrivelse: ${fact.clue}`,
        [fact.name, ...distractors.map((item) => item.name)],
        fact.explanation
      ),
      upperLimbQuestion(
        `Hvilket udsagn om ${fact.name} er korrekt?`,
        [fact.statement, ...distractors.map((item) => item.statement)],
        fact.explanation
      )
    ];
  });
}

function upperLimbMaterial(id, title, description, facts, i18n) {
  return {
    id,
    title,
    description,
    i18n,
    questions: buildUpperLimbFactQuestions(facts)
  };
}

const UPPER_LIMB_BONE_FACTS = [
  {
    name: "Clavicula",
    clue: "En S-formet knogle, der fungerer som en strut mellem sternum og scapula og har en medial sternal ende samt en lateral acromial ende.",
    statement: "Den artikulerer medialt med manubrium sterni og lateralt med acromion.",
    explanation: "Clavicula holder skulderbæltet lateralt fra thorax og overfører belastning fra overekstremiteten til det aksiale skelet. Den sternale ende indgår i art. sternoclavicularis, mens den acromiale ende indgår i art. acromioclavicularis."
  },
  {
    name: "Scapula",
    clue: "En flad trekantet knogle med margo superior, medialis og lateralis samt angulus superior, inferior og lateralis.",
    statement: "Dens laterale vinkel bærer cavitas glenoidalis, som modtager caput humeri.",
    explanation: "Scapula er den centrale knogle i skulderbæltets bevægelige forbindelse til humerus. Dens kanter, vinkler, fossae og processer giver tilhæftning til mange muskler og stabiliserende ligamenter."
  },
  {
    name: "Cavitas glenoidalis",
    clue: "En relativt flad, pæreformet ledskål på scapulas laterale vinkel, som gøres dybere af en fibrøs bruskring.",
    statement: "Den danner skulderleddets ledskål og uddybes af labrum glenoidale.",
    explanation: "Cavitas glenoidalis artikulerer med caput humeri. Den lave knoglekongruens giver stor bevægelighed, mens labrum, kapsel, ligamenter og rotatormanchet må levere den nødvendige stabilitet."
  },
  {
    name: "Spina scapulae og acromion",
    clue: "En prominent knoglekam på scapulas bagside, som fortsætter lateralt i skulderens højeste knoglefremspring.",
    statement: "Spina scapulae deler bagsiden i fossa supra- og infraspinata og fortsætter i acromion.",
    explanation: "Spina scapulae er et vigtigt palpabelt landemærke og tilhæftningssted for blandt andet trapezius og deltoideus. Acromion artikulerer med clavicula og bidrager til det osteofibrøse tag over glenohumeralleddet."
  },
  {
    name: "Processus coracoideus",
    clue: "Et krogformet fremspring anteriort på scapula, der fungerer som tilhæftningspunkt for flere muskler og ligamenter.",
    statement: "Den giver tilhæftning til pectoralis minor, coracobrachialis, caput breve m. bicipitis og coracoide ligamenter.",
    explanation: "Processus coracoideus er et centralt anker i skulderregionen. Her hæfter både muskler og ligamenter som lig. coracoacromiale og ligg. coracoclavicularia, hvilket forbinder scapula, clavicula og humerus funktionelt."
  },
  {
    name: "Tuberculum supraglenoidale",
    clue: "Et lille knoglefremspring lige over cavitas glenoidalis, hvor en lang sene fra overarmens fleksormuskulatur udspringer.",
    statement: "Det er udspring for caput longum m. bicipitis brachii.",
    explanation: "Caput longum af biceps udspringer fra tuberculum supraglenoidale og tilstødende labrum. Senen løber intraartikulært, men ekstrasynovialt, før den fortsætter gennem sulcus intertubercularis."
  },
  {
    name: "Tuberculum infraglenoidale",
    clue: "Et knoglefremspring under cavitas glenoidalis, der giver udspring til en lang hoveddel af overarmens ekstensor.",
    statement: "Det er udspring for caput longum m. tricipitis brachii.",
    explanation: "Caput longum af triceps udspringer fra tuberculum infraglenoidale. Dets forløb mellem teres minor og teres major bidrager til afgrænsningen af de posteriore aksillære interstitser."
  },
  {
    name: "Caput humeri og collum anatomicum",
    clue: "En næsten halvkugleformet proximal ledflade, som vender medialt, superiort og let posteriort og er omgivet af en smal hals.",
    statement: "Caput humeri artikulerer med cavitas glenoidalis, og kapslen hæfter nær collum anatomicum.",
    explanation: "Caput humeri udgør skulderleddets ledhoved. Collum anatomicum markerer overgangen til tuberklerne og ligger tæt på kapslens tilhæftning, mens collum chirurgicum ligger mere distalt."
  },
  {
    name: "Collum chirurgicum humeri",
    clue: "En klinisk vigtig indsnævring distalt for tuberculum majus og minus, hvor frakturer kan skade en nerve og en cirkumfleks arterie.",
    statement: "En fraktur her kan beskadige n. axillaris og a. circumflexa humeri posterior.",
    explanation: "Collum chirurgicum er et hyppigt fraktursted. N. axillaris og a. circumflexa humeri posterior passerer tæt omkring området, så skade kan give deltoideusparese og sensibilitetstab over den laterale skulder."
  },
  {
    name: "Tuberculum majus humeri",
    clue: "Det laterale store fremspring på proximale humerus, som modtager tre af rotatormanchettens sener.",
    statement: "Supraspinatus, infraspinatus og teres minor insererer på dets tre facetter.",
    explanation: "Tuberculum majus har facetter for supraspinatus, infraspinatus og teres minor. Disse sener smelter sammen med kapslen og bidrager til aktiv centrering af caput humeri i cavitas glenoidalis."
  },
  {
    name: "Tuberculum minus humeri",
    clue: "Det anteriore mindre fremspring på proximale humerus, hvor den forreste rotatormanchetmuskel hæfter.",
    statement: "M. subscapularis insererer på tuberculum minus.",
    explanation: "Tuberculum minus er insertion for subscapularis, som primært indadroterer humerus og stabiliserer glenohumeralleddet fortil. Fremspringet ligger medialt for sulcus intertubercularis."
  },
  {
    name: "Sulcus intertubercularis",
    clue: "En fure mellem tuberculum majus og minus, som fører en lang bicepssene og har muskelfæster på sine læber og bund.",
    statement: "Senen fra caput longum m. bicipitis løber i furen under lig. transversum humeri.",
    explanation: "Sulcus intertubercularis fører den lange bicepssene. Pectoralis major hæfter på den laterale læbe, teres major på den mediale læbe og latissimus dorsi i bunden, hvilket gør furen til et vigtigt orienteringspunkt."
  },
  {
    name: "Caput radii",
    clue: "En skiveformet proximal ende af underarmens laterale knogle, der både artikulerer med capitulum humeri og roterer i et ringformet ligament.",
    statement: "Dets fovea artikulerer med capitulum, mens circumferentia articularis artikulerer med incisura radialis ulnae.",
    explanation: "Caput radii indgår i både art. humeroradialis og art. radioulnaris proximalis. Lig. anulare radii holder hovedet mod ulna, samtidig med at det tillader rotation ved pronation og supination."
  },
  {
    name: "Tuberositas radii",
    clue: "Et ru fremspring medialt på proximale radius lige distalt for collum radii, hvor en kraftig albuefleksor hæfter.",
    statement: "M. biceps brachii insererer her og kan derfor både flektere albuen og supinere underarmen.",
    explanation: "Tuberositas radii er insertion for bicepssenen. Fordi insertionen ligger på radius, skaber musklen et stærkt supinationsmoment, især når albuen er flekteret."
  },
  {
    name: "Olecranon og incisura trochlearis ulnae",
    clue: "Den proximale ulnas store posteriore fremspring og C-formede ledindskæring, som omslutter trochlea humeri.",
    statement: "Olecranon modtager tricepssenen, og incisura trochlearis danner den stabile humeroulnare artikulation.",
    explanation: "Olecranon fungerer som triceps' kraftarm og glider ind i fossa olecrani ved ekstension. Incisura trochlearis griber omkring trochlea humeri og giver albueleddet stor knoglestabilitet."
  },
  {
    name: "Processus coronoideus ulnae",
    clue: "Et anteriort fremspring på proximale ulna, der går ind i fossa coronoidea ved fleksion og modtager insertion fra en dyb albuefleksor.",
    statement: "M. brachialis insererer på processus coronoideus og tuberositas ulnae.",
    explanation: "Processus coronoideus bidrager til incisura trochlearis og stabiliserer albuen fortil. Ved fleksion bevæger det sig mod fossa coronoidea, og brachialis' insertion gør det vigtigt for kraftig albuefleksion."
  }
];

const UPPER_LIMB_SHOULDER_FACTS = [
  {
    name: "Rotatormanchetten",
    clue: "En dynamisk stabiliserende enhed af fire scapulohumerale muskler, hvis sener smelter sammen med skulderleddets kapsel.",
    statement: "Den består af supraspinatus, infraspinatus, teres minor og subscapularis.",
    explanation: "Rotatormanchetten komprimerer caput humeri mod cavitas glenoidalis under bevægelse. Musklerne styrer rotation og abduktion og modvirker, at deltoideus forskyder humerushovedet kranielt."
  },
  {
    name: "M. supraspinatus",
    clue: "En muskel fra fossa supraspinata, som passerer under acromion til tuberculum majus og starter armens abduktion.",
    statement: "Den initierer typisk de første cirka 15 grader af abduktion og innerveres af n. suprascapularis.",
    explanation: "Supraspinatus udspringer i fossa supraspinata og insererer på den øverste facet af tuberculum majus. Den initierer abduktion og stabiliserer caput humeri; dens sene er udsat ved subacromial impingement."
  },
  {
    name: "M. infraspinatus",
    clue: "En stor muskel i fossa infraspinata, der insererer på tuberculum majus og udadroterer humerus.",
    statement: "Den er en vigtig udadrotator og innerveres af n. suprascapularis.",
    explanation: "Infraspinatus udspringer fra fossa infraspinata og hæfter på den midterste facet af tuberculum majus. Den udadroterer humerus og stabiliserer skulderleddet posteriort."
  },
  {
    name: "M. teres minor",
    clue: "En smal muskel fra margo lateralis scapulae, der ligger over teres major og bidrager til udadrotation.",
    statement: "Den insererer på den nederste facet af tuberculum majus og innerveres af n. axillaris.",
    explanation: "Teres minor er en del af rotatormanchetten og udadroterer samt svagt adducerer humerus. Den ligger ved det firkantede interstits og deler innervation med deltoideus via n. axillaris."
  },
  {
    name: "M. subscapularis",
    clue: "Den eneste rotatormanchetmuskel på scapulas forflade, som løber til tuberculum minus.",
    statement: "Den indadroterer humerus og innerveres af de øvre og nedre subscapulære nerver.",
    explanation: "Subscapularis udspringer fra fossa subscapularis og insererer på tuberculum minus. Den er en kraftig indadrotator og stabiliserer kapslen anteriort, hvor skulderen ellers er sårbar for luksation."
  },
  {
    name: "M. deltoideus",
    clue: "En trekantet overfladisk skuldermuskel fra clavicula, acromion og spina scapulae til tuberositas deltoidea.",
    statement: "Dens midterste fibre abducerer armen, og hele musklen innerveres af n. axillaris.",
    explanation: "Deltoideus har forreste, midterste og bageste fibre, der henholdsvis bidrager til fleksion/indadrotation, abduktion og ekstension/udadrotation. Den virker effektivt efter supraspinatus har initieret abduktionen."
  },
  {
    name: "Articulatio glenohumeralis",
    clue: "Et ægte kugleled mellem et stort humerushoved og en relativt lille scapulær ledskål med meget stor bevægelighed.",
    statement: "Ledhovedet er caput humeri, ledskålen er cavitas glenoidalis, og stabiliteten er primært bløddelsafhængig.",
    explanation: "Glenohumeralleddet tillader fleksion, ekstension, abduktion, adduktion og rotation. Den store bevægelighed skyldes en løs kapsel og lav kongruens, men øger behovet for labrum, ligamenter og rotatormanchet."
  },
  {
    name: "Labrum glenoidale",
    clue: "En fibrøs bruskring omkring scapulas ledskål, som øger kontaktfladen uden at begrænse bevægeligheden væsentligt.",
    statement: "Den uddyber cavitas glenoidalis og giver fæste til kapsel samt caput longum m. bicipitis superior.",
    explanation: "Labrum glenoidale øger glenoidens dybde og stabilitet. Superior hæfter den lange bicepssene i labrumområdet, hvilket forklarer SLAP-læsioners relation til bicepsankeret."
  },
  {
    name: "Skulderleddets kapsel",
    clue: "En relativt tynd og slap fibrøs struktur, som tillader stor bevægelse og danner en inferior aksillær fold.",
    statement: "Den hæfter omkring glenoidranden og collum anatomicum og forstærkes af rotatormanchettens sener.",
    explanation: "Kapslens løshed er nødvendig for skulderens store bevægeudslag. Den er svagest inferiort, mens rotatormanchetten forstærker den anteriort, superiort og posteriort."
  },
  {
    name: "Bursa subacromialis-subdeltoidea",
    clue: "En stor slimsæk mellem rotatormanchetten og det osteofibrøse tag samt deltoideus.",
    statement: "Den reducerer friktion ved abduktion og kommunikerer normalt ikke med glenohumeralleddet.",
    explanation: "Bursaen ligger under acromion og deltoideus, især over supraspinatussenen. Inflammation eller fortykkelse kan give smertebue og impingementsymptomer ved elevation af armen."
  },
  {
    name: "Det coracoacromiale tag",
    clue: "En beskyttende bue over humerushovedet dannet af to knoglefremspring og et ligament mellem dem.",
    statement: "Det dannes af acromion, processus coracoideus og lig. coracoacromiale.",
    explanation: "Det coracoacromiale tag beskytter glenohumeralleddet superiort og modvirker kraniel forskydning. Rummet under taget indeholder blandt andet supraspinatussenen og bursa subacromialis."
  },
  {
    name: "Ligg. glenohumeralia",
    clue: "Kapsulære fortykkelser på skulderleddets forside, som især modvirker anterior translation og ekstreme rotationsstillinger.",
    statement: "De stabiliserer skulderen anteriort og strammes forskelligt afhængigt af abduktionsgraden.",
    explanation: "De superiore, mediale og inferiore glenohumerale ligamenter er integreret i kapslen. Det inferiore kompleks er særligt vigtigt mod anterior luksation, når armen er abduceret og udadroteret."
  },
  {
    name: "Fossa axillaris",
    clue: "Et pyramideformet rum mellem thorax og overarm med en apex, en bund og fire vægge.",
    statement: "Den indeholder a. og v. axillaris, plexus brachialis, lymfeknuder og fedt.",
    explanation: "Axillen er hovedpassagen for kar, nerver og lymfe mellem hals/thorax og overekstremiteten. Dens vægge dannes af pectoralmuskler fortil, subscapularis/teres major/latissimus bagtil, serratus anterior medialt og humerusområdet lateralt."
  },
  {
    name: "Forreste og bageste aksilfold",
    clue: "To palpable hud- og muskelfolder, som markerer axillens nederste for- og bagkant.",
    statement: "Den forreste dannes primært af pectoralis major, den bageste af latissimus dorsi og teres major.",
    explanation: "Aksilfolderne er kliniske overfladelandemærker. Den bageste folds underkant markerer også overgangen fra a. axillaris til a. brachialis ved nederste kant af teres major."
  },
  {
    name: "M. biceps brachii",
    clue: "En to-hovedet muskel i overarmens forreste loge, som hæfter på tuberositas radii og aponeurosis bicipitalis.",
    statement: "Den er en stærk supinator og albuefleksor og innerveres af n. musculocutaneus.",
    explanation: "Biceps' lange hoved udspringer supraglenoidalt, og det korte fra processus coracoideus. Insertionen på radius forklarer den stærke supination, mens aponeurosen beskytter dybere strukturer i fossa cubitalis."
  },
  {
    name: "M. brachialis",
    clue: "En dyb muskel på humerus' forside, der krydser albuen og insererer på ulna.",
    statement: "Den er den mest konsekvente rene albuefleksor uanset underarmens rotationsstilling.",
    explanation: "Brachialis udspringer fra den distale forflade af humerus og insererer på tuberositas ulnae/processus coronoideus. Fordi den hæfter på ulna, påvirkes dens fleksionskraft kun lidt af pronation og supination."
  },
  {
    name: "M. triceps brachii",
    clue: "En tre-hovedet muskel i overarmens bageste loge, som samles i en sene til olecranon.",
    statement: "Den ekstenderer albuen og innerveres af n. radialis.",
    explanation: "Triceps består af caput longum, laterale og mediale. Alle hoveder ekstenderer albuen; det lange hoved krydser også skulderen og kan bidrage til ekstension og adduktion af humerus."
  },
  {
    name: "Fossa cubitalis",
    clue: "En trekantet fordybning foran albuen med brachioradialis lateralt og pronator teres medialt.",
    statement: "Den indeholder blandt andet bicepssenen, a. brachialis med deling, n. medianus og n. radialis lateralt.",
    explanation: "Fossa cubitalis har loft af hud, subcutis, fascia og aponeurosis bicipitalis samt gulv af brachialis og supinator. Den er vigtig ved pulspalpation, blodtryksmåling og orientering af neurovaskulære strukturer."
  },
  {
    name: "Articulatio cubiti",
    clue: "Et sammensat ledkompleks i én kapsel, der kombinerer fleksion-ekstension med underarmens rotation.",
    statement: "Det omfatter art. humeroulnaris, art. humeroradialis og art. radioulnaris proximalis.",
    explanation: "Albuekomplekset forener tre artikulationer. Humeroulnarleddet giver stabil hængselbevægelse, humeroradialleddet overfører belastning, og det proximale radioulnarled muliggør pronation-supination."
  },
  {
    name: "Lig. anulare radii",
    clue: "Et ringformet ligament, der hæfter på for- og bagkanten af incisura radialis ulnae og omslutter radialhovedet.",
    statement: "Det holder caput radii mod ulna, men tillader rotation under pronation og supination.",
    explanation: "Lig. anulare radii stabiliserer det proximale radioulnarled. Hos små børn kan radialhovedet delvist glide ud under ligamentet ved pludseligt træk i hånden, kendt som pulled elbow."
  },
  {
    name: "Lig. collaterale ulnare cubiti",
    clue: "Et trekantet medialt albueligament fra epicondylus medialis til ulna, der modstår en bestemt sidebelastning.",
    statement: "Det er en hovedstabilisator mod valgusstress.",
    explanation: "Det ulnare kollateralligament har anteriore, posteriore og transversale dele. Den anteriore del er særlig vigtig mod valgusbelastning og kan skades ved gentagne kast."
  },
  {
    name: "Det laterale kollateralligamentkompleks",
    clue: "Et lateralt stabiliserende system fra epicondylus lateralis mod lig. anulare og ulna.",
    statement: "Det modstår varusstress og posterolateral rotatorisk instabilitet.",
    explanation: "Det laterale kompleks omfatter blandt andet lig. collaterale radiale og det laterale ulnare kollateralligament. Det samarbejder med den knoglede kongruens om at stabilisere albuen lateralt."
  }
];

const UPPER_LIMB_FOREARM_FACTS = [
  {
    name: "Fascia antebrachii og membrana interossea",
    clue: "Fasciale strukturer, der omslutter underarmen og sammen med septa opdeler den i en anterior fleksor- og posterior ekstensorloge.",
    statement: "Membrana interossea forbinder radius og ulna og giver muskelfæste samt kraftoverførsel.",
    explanation: "Fascia antebrachii sender septa mod knoglerne, mens membrana interossea spænder mellem radius og ulna. Sammen organiserer de muskelgrupperne og skaber passageforhold for kar og nerver."
  },
  {
    name: "Fleksorlogens første lag",
    clue: "Det mest superficielle anteriore muskellag med fire muskler, som hovedsageligt udspringer fra epicondylus medialis.",
    statement: "Det består af pronator teres, flexor carpi radialis, palmaris longus og flexor carpi ulnaris.",
    explanation: "Første lag udspringer overvejende fra caput commune flexorum på epicondylus medialis. Musklerne bidrager til pronation, håndledsfleksion og radial eller ulnar deviation."
  },
  {
    name: "M. flexor digitorum superficialis",
    clue: "Den eneste muskel i fleksorlogens andet lag, hvis fire sener deles og hæfter på mellemphalangerne.",
    statement: "Den flekterer primært PIP-leddene og innerveres af n. medianus.",
    explanation: "FDS-senerne passerer gennem canalis carpi og deler sig i chiasma tendinum, så FDP kan fortsætte til distalphalangen. Musklen flekterer PIP-led og bidrager også til MCP- og håndledsfleksion."
  },
  {
    name: "M. flexor digitorum profundus",
    clue: "En dyb fingerfleksor, hvis fire sener passerer gennem de superficielle seners spalter til distalphalangerne.",
    statement: "Den flekterer DIP-leddene; den radiale halvdel innerveres af n. medianus, den ulnare af n. ulnaris.",
    explanation: "FDP er den eneste muskel, der kan flektere DIP-leddene på 2.-5. finger. Den dobbelte innervation er klinisk vigtig: n. interosseus anterior for de radiale sener og n. ulnaris for ring- og lillefinger."
  },
  {
    name: "M. flexor pollicis longus",
    clue: "En dyb radial fleksor med én sene gennem canalis carpi til tommelfingerens distal phalanx.",
    statement: "Den flekterer tommelfingerens IP-led og innerveres af n. interosseus anterior fra n. medianus.",
    explanation: "FPL udspringer hovedsageligt fra radius og membrana interossea. Senen har sin egen radiale bursa og er afgørende for kraftfuld fleksion af tommelfingerens yderled."
  },
  {
    name: "M. pronator quadratus",
    clue: "En firkantet muskel i det dybeste, fjerde lag på den distale underarms forside.",
    statement: "Den pronerer underarmen og stabiliserer det distale radioulnarled via n. interosseus anterior.",
    explanation: "Pronator quadratus spænder mellem distale ulna og radius. Den er den primære pronator ved rolig bevægelse og holder knoglerne sammen ved det distale radioulnarled."
  },
  {
    name: "N. medianus i fleksorlogen",
    clue: "Den nerve, der innerverer næsten alle underarmens fleksorer, men har to vigtige ulnare undtagelser.",
    statement: "Undtagelserne er flexor carpi ulnaris og den ulnare halvdel af flexor digitorum profundus.",
    explanation: "N. medianus eller dens gren n. interosseus anterior forsyner størstedelen af fleksor-pronatorgruppen. FCU og FDP til 4.-5. finger innerveres derimod af n. ulnaris."
  },
  {
    name: "M. pronator teres",
    clue: "En superficiel pronator med humeralt og ulnart hoved, hvor en stor nerve passerer mellem hovederne.",
    statement: "N. medianus passerer typisk mellem musklens to hoveder.",
    explanation: "Pronator teres pronerer underarmen og hjælper svagt med albuefleksion. Medianus kan komprimeres mellem hovederne, hvilket kan give pronator-teres-syndrom med smerter og medianuspåvirkning."
  },
  {
    name: "M. flexor carpi ulnaris",
    clue: "En superficiel håndledsfleksor på ulnarsiden, som er en markant undtagelse fra fleksorlogens normale innervation.",
    statement: "Den flekterer og ulnardeviaterer håndleddet og innerveres af n. ulnaris.",
    explanation: "FCU har humeralt og ulnart hoved og insererer via os pisiforme til hamulus ossis hamati og basis af 5. metacarp. N. ulnaris passerer ind i underarmen mellem dens hoveder."
  },
  {
    name: "Den radiale superficielle ekstensorgruppe",
    clue: "Tre posterolaterale muskler, som ligger radialt og omfatter en albuefleksor samt to håndledsekstensorer.",
    statement: "Gruppen består af brachioradialis, extensor carpi radialis longus og brevis.",
    explanation: "Brachioradialis flekterer albuen bedst i neutralstilling. ECRL og ECRB ekstenderer og radialdeviaterer håndleddet; alle forsynes fra n. radialis eller dens dybe gren."
  },
  {
    name: "Den øvrige superficielle ekstensorgruppe",
    clue: "Fire muskler fra det fælles ekstensorudspring ved epicondylus lateralis, der bevæger håndled og fingre.",
    statement: "Den omfatter anconeus, extensor carpi ulnaris, extensor digitorum og extensor digiti minimi.",
    explanation: "Musklerne ligger superficielt på underarmens bagside. De ekstenderer håndled og fingre, mens anconeus hjælper triceps og stabiliserer albuen."
  },
  {
    name: "Den dybe ekstensorgruppe",
    clue: "Fem dybe muskler, som inkluderer supinator samt lange tommelfinger- og pegefingerekstensorer.",
    statement: "Den består af supinator, abductor pollicis longus, extensor pollicis brevis, extensor pollicis longus og extensor indicis.",
    explanation: "Den dybe gruppe styrer supination og differentierede bevægelser af tommel og pegefinger. Den innerveres motorisk af n. interosseus posterior efter den dybe radialgren har passeret supinator."
  },
  {
    name: "Ramus superficialis n. radialis",
    clue: "Den overvejende sensoriske slutgren af n. radialis, som løber dybt for brachioradialis mod håndryggen.",
    statement: "Den giver kutan sensibilitet til den dorsoradiale hånd, men ingen væsentlig motorisk innervation i hånden.",
    explanation: "Den superficielle radialgren følger a. radialis i store dele af underarmen og bliver subkutan distalt. Den forsyner især dorsoradial hånd og proximale dorsale dele af de radiale fingre."
  },
  {
    name: "Ramus profundus n. radialis",
    clue: "Den motoriske radialgren, der perforerer supinator og fortsætter som en nerve til underarmens ekstensorer.",
    statement: "Efter passage gennem supinator fortsætter den som n. interosseus posterior.",
    explanation: "Den dybe radialgren innerverer ekstensorerne. Kompression ved supinator kan give posterior interosseous nerve syndrome med finger- og tommelekstensionssvaghed uden betydeligt sensibilitetstab."
  },
  {
    name: "Retinaculum extensorum",
    clue: "En fascieforstærkning dorsalt ved håndleddet, som holder ekstensorsenerne tæt mod knoglerne i seks tunneler.",
    statement: "Det danner seks senekulisser med synoviale seneskeder og modvirker bowstringing.",
    explanation: "Retinaklet spænder over dorsale radius og ulna og sender septa til underlaget. Derved organiseres ekstensorsenerne i seks rum, som er vigtige ved klinisk lokalisering af tenosynovitis."
  },
  {
    name: "Første og anden ekstensor-kulisse",
    clue: "De to mest radiale dorsale håndledsrum; det første fører tommelabduktor og kort ekstensor, det andet de radiale håndledsekstensorer.",
    statement: "1. rum: APL og EPB; 2. rum: ECRL og ECRB.",
    explanation: "Første kulisse indeholder abductor pollicis longus og extensor pollicis brevis og er involveret ved de Quervain-tenosynovitis. Anden kulisse fører extensor carpi radialis longus og brevis."
  },
  {
    name: "Tredje til sjette ekstensor-kulisse",
    clue: "De fire resterende dorsale senetunneler, som organiserer tommel-, finger-, lillefinger- og ulnar håndledsekstension.",
    statement: "3: EPL; 4: ED og EI; 5: EDM; 6: ECU.",
    explanation: "Tredje rum fører extensor pollicis longus omkring Listers tuberkel. Fjerde fører extensor digitorum og indicis, femte extensor digiti minimi og sjette extensor carpi ulnaris."
  },
  {
    name: "Articulationes radioulnares",
    clue: "Et kombineret proximalt og distalt drejeled, hvor radius bevæger sig omkring ulna.",
    statement: "De muliggør pronation og supination, hvor radialhovedet roterer proximalt og radius krydser ulna distalt.",
    explanation: "Det proximale radioulnarled ligger mellem caput radii og incisura radialis ulnae; det distale mellem caput ulnae og incisura ulnaris radii. Membrana interossea kobler bevægelser og belastning mellem knoglerne."
  },
  {
    name: "Tabatièren",
    clue: "En trekantet fordybning på den dorsoradiale hånd ved ekstenderet tommel med en arterie i bunden.",
    statement: "Den afgrænses af APL/EPB radialt og EPL ulnart; a. radialis løber over scaphoideum i bunden.",
    explanation: "Den anatomiske snusboks bliver tydelig ved tommelekstension. Ømhed i bunden efter fald kan indikere scaphoideumfraktur, og a. radialis kan palperes i området."
  }
];

const UPPER_LIMB_HAND_FACTS = [
  {
    name: "Ossa carpi",
    clue: "Otte håndrodsknogler arrangeret i en proximal og distal række mellem underarmen og metacarpalknoglerne.",
    statement: "Proksimalt: scaphoideum, lunatum, triquetrum, pisiforme; distalt: trapezium, trapezoideum, capitatum, hamatum.",
    explanation: "Carpus består af to buede rækker, der danner den dorsale bund i canalis carpi. Scaphoideum er klinisk vigtigt på grund af frakturrisiko og sårbar retrograd blodforsyning."
  },
  {
    name: "Canalis carpi",
    clue: "En osteofibrøs tunnel på håndleddets palmarside med karpalknogler som bund og et kraftigt retinakel som tag.",
    statement: "Den indeholder n. medianus og ni fleksorsener: 4 FDS, 4 FDP og 1 FPL.",
    explanation: "Canalis carpi afgrænses dorsalt og lateralt af karpusbuen og palmært af retinaculum flexorum. Trykstigning kan komprimere n. medianus og give paræstesier, natlige smerter og thenarsvaghed."
  },
  {
    name: "Retinaculum flexorum",
    clue: "Et stærkt tværgående ligament, som spænder over karpusbuen og holder de lange fleksorsener tæt ved håndleddet.",
    statement: "Det hæfter radialt på scaphoideum/trapezium og ulnart på pisiforme/hamulus hamati.",
    explanation: "Retinaculum flexorum danner taget i canalis carpi og forhindrer fleksorsenerne i at løfte sig fra håndleddet. N. ulnaris og a. ulnaris passerer superficielt for retinaklet i Guyons kanal."
  },
  {
    name: "Thenarmusklerne",
    clue: "En muskelgruppe ved tommelfingerballen, der frembringer abduktion, fleksion og opposition af tommelfingeren.",
    statement: "Abductor pollicis brevis, opponens pollicis og superficielle del af flexor pollicis brevis innerveres typisk af n. medianus.",
    explanation: "Thenarmusklerne giver tommelfingeren dens særlige opposition og præcisionsfunktion. Den recurrerende medianusgren er særlig vigtig; skade kan give tab af opposition og thenaratrofi."
  },
  {
    name: "M. adductor pollicis",
    clue: "En dybtliggende tommelmuskel med caput obliquum og transversum, som trækker tommelfingeren mod håndfladen.",
    statement: "Den adducerer tommelfingeren og innerveres af den dybe gren af n. ulnaris.",
    explanation: "Adductor pollicis er central for kraftgreb og pinch. Ved ulnarislæsion kan patienten kompensere med flexor pollicis longus under papirgreb, hvilket ses som positivt Froment-tegn."
  },
  {
    name: "Hypothenarmusklerne",
    clue: "Musklerne ved lillefingerballen, som abducerer, flekterer og opponerer digitus minimus.",
    statement: "Abductor, flexor brevis og opponens digiti minimi innerveres overvejende af n. ulnaris.",
    explanation: "Hypothenargruppen finjusterer lillefingerens stilling og uddyber håndens hulning ved greb. Gruppen forsynes af n. ulnaris, ligesom palmaris brevis i overfladen."
  },
  {
    name: "Mm. lumbricales",
    clue: "Fire ormelignende muskler, der udspringer fra FDP-senerne og passerer radialt til ekstensoraponeurosen.",
    statement: "De flekterer MCP-led og ekstenderer IP-led; 1.-2. innerveres af medianus, 3.-4. af ulnaris.",
    explanation: "Lumbricalerne omdirigerer kraft fra de dybe fleksorsener til ekstensorapparatet. Kombinationen af MCP-fleksion og IP-ekstension er vigtig for præcisionsstilling af fingrene."
  },
  {
    name: "Mm. interossei palmares",
    clue: "Tre unipennate muskler mellem metacarpalknoglerne, som fører fingrene mod håndens midterakse.",
    statement: "De adducerer 2., 4. og 5. finger mod 3. finger og innerveres af n. ulnaris.",
    explanation: "Palmarinterosserne huskes med PAD: palmar adduction. De bidrager også via ekstensoraponeurosen til MCP-fleksion og IP-ekstension."
  },
  {
    name: "Mm. interossei dorsales",
    clue: "Fire bipennate muskler mellem metacarpalknoglerne, som spreder fingrene fra håndens midterakse.",
    statement: "De abducerer fingrene fra 3. fingers akse og innerveres af n. ulnaris.",
    explanation: "Dorsalinterosserne huskes med DAB: dorsal abduction. De kan testes ved at lade patienten sprede fingrene mod modstand; svaghed tyder ofte på ulnarispåvirkning."
  },
  {
    name: "Aponeurosis palmaris",
    clue: "En trekantet kraftig fascie i håndfladen, som fortsætter fra palmaris longus og sender længde- og tværgående strøg mod fingrene.",
    statement: "Den beskytter underliggende sener, kar og nerver og forankrer huden ved greb.",
    explanation: "Palmaraponeurosen stabiliserer huden og fordeler trækkraft i håndfladen. Fibrose og forkortning kan give Dupuytren-kontraktur med fleksionsstilling af især ring- og lillefinger."
  },
  {
    name: "Bursa radialis",
    clue: "En synovial seneskede i canalis carpi, som omslutter én lang tommelfingerfleksorsene.",
    statement: "Den omgiver senen fra m. flexor pollicis longus.",
    explanation: "Bursa radialis reducerer friktion omkring FPL-senen gennem karpaltunnelen. Den kan kommunikere distalt med tommelfingerens digitale seneskede og dermed lede infektion."
  },
  {
    name: "Bursa ulnaris",
    clue: "En fælles synovial skede omkring de otte lange fingerfleksorsener i karpaltunnelen.",
    statement: "Den omslutter FDS- og FDP-sener og kommunikerer ofte med lillefingerens seneskede.",
    explanation: "Bursa ulnaris beskytter de lange fleksorsener mod friktion. Kommunikation med lillefingerens digitale skede forklarer, hvorfor infektion kan spredes mellem lillefinger og den fælles fleksorskede."
  },
  {
    name: "Ekstensoraponeurosen",
    clue: "Et dorsalt senenet over fingrene, hvor ekstensorsenen deles og modtager fibre fra lumbricaler og interosser.",
    statement: "Den centrale slip hæfter på mellemphalangen, mens laterale bånd fortsætter til distalphalangen.",
    explanation: "Ekstensoraponeurosen koordinerer ekstension i PIP- og DIP-led. Lumbricaler og interosser passerer palmært for MCP-aksen men dorsalt ved IP-leddene, så de kan flektere MCP og ekstendere IP."
  },
  {
    name: "M. flexor digitorum superficialis ved fingeren",
    clue: "En sene, der deler sig i to omkring en dybere sene og hæfter på mellemphalangen.",
    statement: "Den insererer på siderne af phalanx media og flekterer PIP-leddet.",
    explanation: "FDS deler sig i Camper-chiasmet, så FDP kan passere til distalphalangen. Isoleret FDS-funktion testes ved at holde de øvrige fingre strakte og bede patienten flektere PIP-leddet."
  },
  {
    name: "M. flexor digitorum profundus ved fingeren",
    clue: "En dyb sene, der passerer gennem den superficielle senes deling og hæfter helt distalt.",
    statement: "Den insererer på basis af phalanx distalis og er nødvendig for DIP-fleksion.",
    explanation: "FDP-senen løber gennem FDS-splittet og fortsætter til distalphalangen. Dens funktion kan testes ved at stabilisere PIP-leddet og bede patienten flektere DIP-leddet."
  },
  {
    name: "Articulationes metacarpophalangeae",
    clue: "Ægte kondylære fingerled mellem metacarpalhoveder og proximale phalanges med kollateralligamenter.",
    statement: "De tillader fleksion-ekstension samt abduktion-adduktion; kollateralligamenterne strammes i fleksion.",
    explanation: "MCP-leddene er bevægelige toaksede led. Kollateralligamenternes spænding i fleksion begrænser sidebevægelse og forklarer, hvorfor immobilisering typisk sker med MCP-leddene flekterede."
  },
  {
    name: "Tommelfingerens carpometacarpalled",
    clue: "Et sadelled mellem os trapezium og basis af 1. metacarp, som giver tommelfingeren stor bevægelighed.",
    statement: "Det muliggør blandt andet opposition ved kombineret abduktion, fleksion og rotation.",
    explanation: "Tommelfingerens CMC-led er biomekanisk grundlaget for opposition og præcisionsgreb. Den store belastning og bevægelighed gør leddet udsat for artrose."
  },
  {
    name: "Præcisionsgrebet",
    clue: "Et fint greb mellem tommel og fingerpulpa, som kræver opposition, stabil MCP-stilling og koordineret intrinsic muskulatur.",
    statement: "Det afhænger af thenarmuskler, adductor pollicis, lumbricaler og interosser i samspil med lange sener.",
    explanation: "Præcisionsgreb kræver stabilitet og finjustering snarere end kun kraft. Medianus muliggør især opposition, mens ulnarisinnerverede interosser og adductor pollicis positionerer og stabiliserer fingrene."
  }
];

const UPPER_LIMB_VASCULAR_FACTS = [
  {
    name: "A. axillaris",
    clue: "Fortsættelsen af a. subclavia fra lateralranden af costa I til underkanten af m. teres major.",
    statement: "Den bliver til a. brachialis ved underkanten af teres major.",
    explanation: "A. axillaris er hovedarterien i axillen og ledsages af plexus brachialis' fasciculi. Pectoralis minor opdeler den i tre stykker, som er grundlaget for systematisk navngivning af grenene."
  },
  {
    name: "A. axillaris' tre stykker",
    clue: "En inddeling bestemt af relationen til m. pectoralis minor.",
    statement: "Første stykke ligger medialt, andet posteriort og tredje lateralt for pectoralis minor.",
    explanation: "Inddelingen gør grenene lettere at huske og er vigtig ved kirurgisk orientering. Fasciculi i plexus brachialis navngives desuden efter deres relation til den axillære arterie."
  },
  {
    name: "A. thoracica superior",
    clue: "Den typiske lille gren fra første stykke af a. axillaris.",
    statement: "Den forsyner den øverste thoraxvæg og første intercostalrum.",
    explanation: "A. thoracica superior er normalt den eneste gren fra første axillærstykke. Den løber medialt langs den øvre thorax og bidrager til forsyningen omkring første og andet intercostalrum."
  },
  {
    name: "A. thoracoacromialis og a. thoracica lateralis",
    clue: "De to klassiske grene fra andet stykke af a. axillaris.",
    statement: "Thoracoacromialis perforerer fascia clavipectoralis; thoracica lateralis følger thoraxvæggen mod mamma og serratus anterior.",
    explanation: "Begge grene afgår typisk bag pectoralis minor. Thoracoacromialis deler sig i pectorale, deltoide, claviculare og acromiale grene, mens thoracica lateralis løber langs thoraxvæggen."
  },
  {
    name: "A. subscapularis",
    clue: "Den største gren fra tredje stykke af a. axillaris, som deler sig mod scapula og thoraxryggen.",
    statement: "Den deler sig i a. circumflexa scapulae og a. thoracodorsalis.",
    explanation: "A. subscapularis afgår nær axillens bagvæg. Circumflexa scapulae passerer gennem det trekantede interstits til scapulære anastomoser, mens thoracodorsalis følger n. thoracodorsalis til latissimus dorsi."
  },
  {
    name: "Aa. circumflexae humeri anterior et posterior",
    clue: "To grene fra tredje axillærstykke, som løber omkring collum chirurgicum og forsyner skulderregionen.",
    statement: "Den posteriore er større og ledsager n. axillaris gennem det firkantede interstits.",
    explanation: "De to cirkumflekse humerale arterier anastomoserer omkring collum chirurgicum. Den posteriore løber med n. axillaris, hvilket forklarer deres fælles sårbarhed ved fraktur og luksation."
  },
  {
    name: "A. brachialis",
    clue: "Hovedarterien i overarmen, som løber i sulcus bicipitalis medialis og deler sig i fossa cubitalis.",
    statement: "Den ender typisk som a. radialis og a. ulnaris nær collum radii.",
    explanation: "A. brachialis fortsætter fra a. axillaris og ligger sammen med n. medianus i overarmen. Den kan palperes medialt for bicepssenen i fossa cubitalis og bruges ved blodtryksmåling."
  },
  {
    name: "A. profunda brachii",
    clue: "Den største proximale gren fra a. brachialis, som følger en stor nerve gennem bageste overarmsloge.",
    statement: "Den følger n. radialis i sulcus nervi radialis og forsyner tricepsregionen.",
    explanation: "A. profunda brachii passerer posteriort med n. radialis i radialfuren på humerus. Den bidrager til albueanastomoserne og er vigtig for blodforsyningen til overarmens ekstensorloge."
  },
  {
    name: "A. radialis",
    clue: "Den laterale endegren fra a. brachialis, som er let at palpere ved håndleddet og passerer gennem tabatièren.",
    statement: "Den løber radialt for flexor carpi radialis-senen og danner hovedparten af arcus palmaris profundus.",
    explanation: "A. radialis følger underarmens laterale side, krydser dorsalt gennem den anatomiske snusboks og går mellem hovederne af første dorsale interosseus. Den afsluttes især i den dybe palmarbue."
  },
  {
    name: "A. ulnaris",
    clue: "Den mediale endegren fra a. brachialis, som passerer dybt for pronator teres og følger n. ulnaris distalt.",
    statement: "Den danner hovedparten af arcus palmaris superficialis.",
    explanation: "A. ulnaris løber mod underarmens ulnare side og kommer til hånden superficielt for retinaculum flexorum. Dens superficielle gren danner især den superficielle palmarbue, mens en dyb gren bidrager til den dybe bue."
  },
  {
    name: "A. interossea communis",
    clue: "En kort, vigtig gren fra a. ulnaris, som straks deler sig på hver side af membrana interossea.",
    statement: "Den deler sig i aa. interosseae anterior og posterior.",
    explanation: "Den anteriore interosseøse arterie følger forsiden af membrana interossea med n. interosseus anterior. Den posteriore passerer til ekstensorlogen og bidrager til forsyningen af underarmens bagside."
  },
  {
    name: "Arcus palmaris superficialis",
    clue: "En arteriel bue i håndens superficielle kar-nervelag, som hovedsageligt kommer fra den ulnare arterie.",
    statement: "Den afgiver tre aa. digitales palmares communes, som deler sig til proper digitale arterier.",
    explanation: "Den superficielle bue ligger dybt for palmaraponeurosen, men superficielt for fleksorsenerne. Den er normalt ulnardomineret og suppleres ofte af en superficiel radialgren."
  },
  {
    name: "Arcus palmaris profundus",
    clue: "En dybere arteriel bue nær metacarpalbaserne, som hovedsageligt dannes af en radial arterie.",
    statement: "Den dannes primært af a. radialis og suppleres af ramus profundus a. ulnaris.",
    explanation: "Den dybe palmarbue ligger omtrent en centimeter mere proximalt end den superficielle og tæt på metacarpalknoglerne. Den afgiver palmar metacarpale grene og anastomoserer med den superficielle bue."
  },
  {
    name: "V. cephalica",
    clue: "En superficiel vene, der starter radialt på håndryggen og løber lateralt på underarm og overarm.",
    statement: "Den løber i sulcus deltopectoralis og perforerer fascia clavipectoralis før udmunding i v. axillaris.",
    explanation: "V. cephalica er den store laterale superficielle vene. Dens deltopectorale forløb gør den til et kirurgisk landemærke, og den modtager lymfekar fra den laterale del af overekstremiteten."
  },
  {
    name: "V. basilica",
    clue: "En superficiel vene, der starter ulnart på håndryggen og løber medialt på underarm og overarm.",
    statement: "Den perforerer fascia brachii midt på overarmen og forenes med vv. brachiales til v. axillaris.",
    explanation: "V. basilica er den store mediale superficielle vene. Den går i dybden tidligere end v. cephalica og bidrager sammen med de dybe brachialvener til dannelsen af v. axillaris."
  },
  {
    name: "V. mediana cubiti",
    clue: "En superficiel forbindelsesvene foran albuen mellem de laterale og mediale hovedvener.",
    statement: "Den forbinder typisk v. cephalica og v. basilica og bruges ofte til venepunktur.",
    explanation: "V. mediana cubiti ligger i subcutis over fossa cubitalis. Aponeurosis bicipitalis ligger dybere og beskytter a. brachialis og n. medianus, hvilket gør venen velegnet til blodprøvetagning."
  },
  {
    name: "Venae comitantes",
    clue: "Parrede dybe vener, der ledsager arterierne distalt for albuen og forbindes af tværgående grene.",
    statement: "De følger typisk a. radialis og a. ulnaris og fortsætter som vv. brachiales.",
    explanation: "Dybe vener i ekstremiteterne ligger ofte parvist omkring arterierne. Arteriepulsationer og muskelpumpen hjælper den venøse retur gennem disse venae comitantes."
  },
  {
    name: "V. axillaris",
    clue: "Den store dybe vene gennem axillen, som begynder ved underkanten af teres major og ender ved costa I.",
    statement: "Den bliver til v. subclavia ved lateralranden af costa I og modtager blandt andet v. cephalica.",
    explanation: "V. axillaris dannes typisk af v. basilica og vv. brachiales. Den ligger anteromedialt for a. axillaris og modtager superficielle tilløb, før den fortsætter som v. subclavia."
  },
  {
    name: "Superficielle lymfekar fra overekstremiteten",
    clue: "Lymfekar, der følger de store superficielle vener fra hånden mod axillen.",
    statement: "Laterale kar følger v. cephalica mod deltopectorale/apikale knuder; mediale følger v. basilica mod humerale knuder.",
    explanation: "De superficielle lymfekar dræner hud og subcutis. Den cephaliske rute kan gå via infraclaviculære/deltopectorale knuder, mens den basiliske rute især når de humerale axillære knuder."
  },
  {
    name: "De axillære lymfeknudegrupper",
    clue: "Fem anatomiske grupper, som modtager lymfe fra overekstremitet, thoraxvæg, ryg og mamma.",
    statement: "Grupperne er pectoral, subscapulær, humeral, central og apikal.",
    explanation: "Pectorale knuder ligger langs mediale axilvæg, subscapulære posteriort og humerale lateralt. Disse dræner mod centrale og derefter apikale knuder, som fortsætter til truncus subclavius."
  },
  {
    name: "Truncus subclavius",
    clue: "Den lymfatiske samlestamme, som modtager efferente kar fra de apikale axillære knuder.",
    statement: "Venstre truncus subclavius dræner typisk til ductus thoracicus, højre til ductus lymphaticus dexter eller venøs vinkel.",
    explanation: "Truncus subclavius samler hovedparten af lymfen fra overekstremiteten. Sideforskellen afspejler kroppens overordnede lymfatiske afløb til venstre ductus thoracicus og højre lymfegang."
  }
];

const UPPER_LIMB_NERVE_FACTS = [
  {
    name: "Rødderne i plexus brachialis",
    clue: "De ventrale rami fra fem spinalnerveniveauer, som danner hele overekstremitetens store nerveplexus.",
    statement: "De klassiske rødder er C5, C6, C7, C8 og T1.",
    explanation: "Plexus brachialis begynder som rami ventrales C5-T1 mellem mm. scaleni anterior og medius. Variationer kan være præ- eller postfikserede, men C5-T1 er standardmønstret."
  },
  {
    name: "Trunci plexus brachialis",
    clue: "Tre stammer dannet i halsen ved samling af rødderne før passage over costa I.",
    statement: "C5-C6 danner truncus superior, C7 medius og C8-T1 inferior.",
    explanation: "De tre trunci ligger i den posteriore halstrekant. Hver trunkus deler sig bag clavicula i en anterior og en posterior division."
  },
  {
    name: "Divisioner og fasciculi",
    clue: "Seks nerveafsnit bag clavicula, der omorganiseres til tre bundter omkring en stor axillær arterie.",
    statement: "Anteriore divisioner danner fasciculi lateralis/medialis; alle posteriore divisioner danner fasciculus posterior.",
    explanation: "Divisionerne adskiller overvejende fleksor- og ekstensorforsyning. Fasciculi navngives efter deres relation til a. axillaris og afgiver de infraclaviculære grene."
  },
  {
    name: "De fem terminale grene",
    clue: "De vigtigste blandede nerver, der afslutter plexus brachialis og fortsætter ud i overekstremiteten.",
    statement: "De er n. musculocutaneus, axillaris, radialis, medianus og ulnaris.",
    explanation: "De fem terminale nerver formidler både motorik og sensibilitet. Deres cord-oprindelse og forløb forklarer karakteristiske udfald ved læsioner på forskellige niveauer."
  },
  {
    name: "N. dorsalis scapulae",
    clue: "En tidlig gren hovedsageligt fra C5, som perforerer m. scalenus medius og løber langs scapulas mediale kant.",
    statement: "Den innerverer rhomboidei og ofte levator scapulae.",
    explanation: "N. dorsalis scapulae udspringer direkte fra en rod før dannelsen af trunci. Den forsyner muskler, som retraherer og stabiliserer scapula mod thorax."
  },
  {
    name: "N. thoracicus longus",
    clue: "En rodgren fra C5-C7, der løber superficielt på serratus anterior langs thoraxvæggen.",
    statement: "Den innerverer serratus anterior; læsion giver scapula alata og nedsat elevation over horisontalplanet.",
    explanation: "N. thoracicus longus har et langt overfladisk forløb og er udsat ved axilkirurgi eller traume. Uden serratus anterior løsner scapulas mediale kant sig fra thorax ved fremadpres."
  },
  {
    name: "N. suprascapularis",
    clue: "En gren fra truncus superior, som passerer incisura scapulae og fortsætter til supra- og infraspinatus.",
    statement: "Den fører typisk C5-C6 og innerverer supraspinatus og infraspinatus.",
    explanation: "N. suprascapularis passerer under lig. transversum scapulae superius, mens arterien ofte passerer over. Læsion kan svække initieret abduktion og udadrotation."
  },
  {
    name: "Nn. pectorales lateralis et medialis",
    clue: "To infraclaviculære grene fra henholdsvis lateral og medial fascikel, som forsyner brystmusklerne.",
    statement: "Den laterale forsyner især pectoralis major; den mediale perforerer ofte pectoralis minor og forsyner begge.",
    explanation: "Pectoralnerverne danner ofte en ansa pectoralis foran a. axillaris. De innerverer pectoralis major og minor og er derfor vigtige for adduktion og indadrotation af humerus samt scapulastabilitet."
  },
  {
    name: "Nn. subscapulares og n. thoracodorsalis",
    clue: "Tre grene fra fasciculus posterior til axillens bagvægsmuskler.",
    statement: "Subscapulære nerver forsyner subscapularis/teres major; thoracodorsalis forsyner latissimus dorsi.",
    explanation: "Den øvre og nedre subscapulære nerve innerverer subscapularis, og den nedre også teres major. N. thoracodorsalis følger a. thoracodorsalis på latissimus dorsis dybe flade."
  },
  {
    name: "N. musculocutaneus",
    clue: "En terminal gren fra fasciculus lateralis, der perforerer coracobrachialis og løber mellem biceps og brachialis.",
    statement: "Den innerverer overarmens forreste loge og fortsætter som n. cutaneus antebrachii lateralis.",
    explanation: "N. musculocutaneus fører typisk C5-C7. Den forsyner coracobrachialis, biceps og brachialis og giver derefter sensibilitet til underarmens laterale side."
  },
  {
    name: "N. medianus",
    clue: "En terminal nerve dannet af en lateral og medial rod, som følger a. brachialis og passerer gennem canalis carpi.",
    statement: "Den innerverer de fleste fleksor-pronatormuskler samt thenarmuskler og de to radiale lumbricaler.",
    explanation: "N. medianus har typisk fibre C6-T1 og afgiver normalt ingen store motoriske grene i overarmen. I underarmen forsyner den næsten alle fleksorer, og i hånden er den afgørende for opposition og radial digital sensibilitet."
  },
  {
    name: "N. ulnaris",
    clue: "En terminal gren fra fasciculus medialis, som passerer bag epicondylus medialis og ind i hånden gennem Guyons kanal.",
    statement: "Den innerverer FCU, ulnare FDP samt størstedelen af håndens intrinsiske muskler.",
    explanation: "N. ulnaris fører især C8-T1. Den er overfladisk bag den mediale epicondyl og forsyner i hånden interosser, hypothenar, adductor pollicis og de to ulnare lumbricaler."
  },
  {
    name: "N. radialis",
    clue: "Den største terminale gren fra fasciculus posterior, som løber med a. profunda brachii i humerus' radialfure.",
    statement: "Den innerverer ekstensorlogerne i overarm og underarm og giver dorsoradial hudsensibilitet.",
    explanation: "N. radialis fører typisk C5-T1 og forsyner triceps samt underarmens ekstensorer via den dybe gren. Den superficielle gren er sensorisk på den dorsoradiale hånd."
  },
  {
    name: "N. axillaris",
    clue: "En kort terminal gren fra fasciculus posterior, som går gennem det firkantede interstits omkring collum chirurgicum.",
    statement: "Den innerverer deltoideus og teres minor og giver sensibilitet over den laterale skulder.",
    explanation: "N. axillaris fører primært C5-C6 og ledsager a. circumflexa humeri posterior. Den er udsat ved skulderluksation og kirurgisk-hals-fraktur, hvilket kan give svag abduktion og deltoidatrofi."
  },
  {
    name: "Fasciculus posterior",
    clue: "Et bundt dannet af alle tre posteriore divisioner og placeret bag a. axillaris.",
    statement: "Det afgiver blandt andet n. axillaris, n. radialis, nn. subscapulares og n. thoracodorsalis.",
    explanation: "Fasciculus posterior samler fibre til overekstremitetens ekstensorside og proximale bagvægsmuskler. Skade kan derfor påvirke både skulderabduktion og ekstension i albue, håndled og fingre."
  },
  {
    name: "Fasciculus lateralis",
    clue: "Et bundt dannet af de anteriore divisioner fra truncus superior og medius, lateralt for a. axillaris.",
    statement: "Det afgiver n. musculocutaneus og radix lateralis til n. medianus samt n. pectoralis lateralis.",
    explanation: "Fasciculus lateralis fører især fibre fra C5-C7. Dets grene forsyner overarmens forreste loge, bidrager til medianus og innerverer pectoralmuskulatur."
  },
  {
    name: "Fasciculus medialis",
    clue: "Et bundt fra den anteriore division af truncus inferior, medialt for a. axillaris.",
    statement: "Det afgiver n. ulnaris, radix medialis til medianus og mediale kutane nerver til arm og underarm.",
    explanation: "Fasciculus medialis fører især C8-T1-fibre. Dets grene er centrale for håndens intrinsiske motorik og sensibilitet på overekstremitetens mediale side."
  },
  {
    name: "Radialislæsion i sulcus nervi radialis",
    clue: "En nerveskade ved humerusskaftet, som typisk bevarer en del tricepsfunktion, men svækker håndleds- og fingerekstension.",
    statement: "Det klassiske motoriske fund er drop-hånd på grund af ekstensorparese.",
    explanation: "Ved skade i radialfuren er grene til dele af triceps ofte allerede afgivet, så albueekstension kan være delvist bevaret. Ekstensorerne distalt lammes, og sensibilitet kan reduceres dorsoradialt."
  },
  {
    name: "Medianuskompression i canalis carpi",
    clue: "En trykpåvirkning ved håndleddet med natlige paræstesier radialt i hånden og gradvist tab af tommelopposition.",
    statement: "Den påvirker især sensibilitet i de radiale 3½ fingre og motorik i thenar via den recurrerende gren.",
    explanation: "Karpaltunnelsyndrom skyldes kompression af n. medianus under retinaculum flexorum. Palmar hud over thenar kan være relativt skånet, fordi den palmare kutane gren afgår før tunnelen."
  },
  {
    name: "Ulnarislæsion ved håndleddet",
    clue: "En nerveskade, der rammer de fleste intrinsiske håndmuskler og giver svag fingerabduktion-adduktion.",
    statement: "Den kan give klo-stilling især af 4.-5. finger og positivt Froment-tegn.",
    explanation: "Ved distal ulnarislæsion svækkes interosser, de ulnare lumbricaler og adductor pollicis. Manglende MCP-fleksion og IP-ekstension fremhæver kloen, mens pinch kompenseres med medianusinnerveret FPL."
  },
  {
    name: "Dermatomer C6, C7 og C8",
    clue: "Tre kliniske hudzoner på hånden, som ofte testes over tommel, langefinger og lillefinger.",
    statement: "C6 testes typisk ved tommel, C7 ved langefinger og C8 ved lillefinger.",
    explanation: "Dermatomer afspejler spinalrødder og overlapper perifere nervers hudområder. Sammenligning af dermatom- og nervemønster hjælper med at skelne radikulopati fra perifer nervelæsion."
  }
];

const UPPER_LIMB_IMAGE_QUESTIONS = [
  upperLimbQuestion(
    "På den rene scapula-illustration: Hvilken struktur er den grønne tværgående kam på den midterste knogle?",
    ["Spina scapulae", "Margo medialis", "Processus coracoideus", "Cavitas glenoidalis"],
    "Den grønne kam er spina scapulae. Den deler scapulas bagside i fossa supraspinata og infraspinata og fortsætter lateralt i acromion.",
    `${UPPER_LIMB_IMAGE_ROOT}/scapula.jpg`
  ),
  upperLimbQuestion(
    "På scapula-illustrationen: Hvad repræsenterer det store gule område på den venstre, anteriore knogleflade?",
    ["Fossa subscapularis", "Fossa infraspinata", "Fossa supraspinata", "Cavitas glenoidalis"],
    "Det store anteriore område er fossa subscapularis, hvor m. subscapularis udspringer. Musklen løber til tuberculum minus og indadroterer humerus.",
    `${UPPER_LIMB_IMAGE_ROOT}/scapula.jpg`
  ),
  upperLimbQuestion(
    "På scapula-illustrationens højre laterale visning: Hvilken ledflade er markeret centralt med orange?",
    ["Cavitas glenoidalis", "Acromion", "Fossa subscapularis", "Incisura scapulae"],
    "Den orange laterale ledflade er cavitas glenoidalis. Den artikulerer med caput humeri og uddybes af labrum glenoidale.",
    `${UPPER_LIMB_IMAGE_ROOT}/scapula.jpg`
  ),
  upperLimbQuestion(
    "På knoglepladen: Hvilken knogle vises som de to store knogler længst til venstre?",
    ["Humerus", "Radius", "Ulna", "Clavicula"],
    "De to store knogler længst til venstre er humerus set fra to sider. Det kugleformede caput ligger proximalt, mens trochlea og capitulum ses distalt.",
    `${UPPER_LIMB_IMAGE_ROOT}/long-bones.jpg`
  ),
  upperLimbQuestion(
    "På knoglepladen: Hvilken underarmsknogle genkendes på det skiveformede caput proximalt?",
    ["Radius", "Ulna", "Humerus", "Scapula"],
    "Radius har et skiveformet caput med fovea mod capitulum humeri og circumferentia mod ulna. Ulna har derimod olecranon og den store incisura trochlearis proximalt.",
    `${UPPER_LIMB_IMAGE_ROOT}/long-bones.jpg`
  ),
  upperLimbQuestion(
    "På skuldermuskelpladens venstre figur: Hvilken stor grøn muskel dækker skulderen lateralt?",
    ["M. deltoideus", "M. subscapularis", "M. supraspinatus", "M. teres minor"],
    "Den store grønne muskel er deltoideus. Dens midterste fibre abducerer humerus, og musklen innerveres af n. axillaris.",
    `${UPPER_LIMB_IMAGE_ROOT}/shoulder-muscles.jpg`
  ),
  upperLimbQuestion(
    "På skuldermuskelpladens midterste figur: Hvilken muskel ligger som det pink område over spina scapulae?",
    ["M. supraspinatus", "M. infraspinatus", "M. teres major", "M. subscapularis"],
    "Det pink område over spina scapulae er supraspinatus. Den initierer abduktion og passerer under acromion til tuberculum majus.",
    `${UPPER_LIMB_IMAGE_ROOT}/shoulder-muscles.jpg`
  ),
  upperLimbQuestion(
    "På skuldermuskelpladens midterste figur: Hvilken stor lilla muskel ligger under spina scapulae?",
    ["M. infraspinatus", "M. supraspinatus", "M. teres major", "M. deltoideus"],
    "Det lilla område er infraspinatus i fossa infraspinata. Musklen udadroterer humerus og stabiliserer glenohumeralleddet posteriort.",
    `${UPPER_LIMB_IMAGE_ROOT}/shoulder-muscles.jpg`
  ),
  upperLimbQuestion(
    "På skuldermuskelpladens højre figur: Hvilken blå muskel ligger på scapulas forflade mod thorax?",
    ["M. subscapularis", "M. serratus anterior", "M. infraspinatus", "M. pectoralis minor"],
    "Den blå muskel er subscapularis. Den udspringer fra fossa subscapularis, insererer på tuberculum minus og indadroterer humerus.",
    `${UPPER_LIMB_IMAGE_ROOT}/shoulder-muscles.jpg`
  ),
  upperLimbQuestion(
    "På albuepladens øverste tegning: Hvilken anatomisk region vises som trekanten foran albuen?",
    ["Fossa cubitalis", "Canalis carpi", "Tabatièren", "Fossa axillaris"],
    "Trekanten er fossa cubitalis. Den afgrænses af brachioradialis lateralt og pronator teres medialt og indeholder vigtige kar, nerver og bicepssenen.",
    `${UPPER_LIMB_IMAGE_ROOT}/elbow.jpg`
  ),
  upperLimbQuestion(
    "På albuepladens midterste tegning: Hvilken knogle har det blå, skiveformede ledhoved lateralt?",
    ["Radius", "Ulna", "Humerus", "Scapula"],
    "Det blå skiveformede hoved tilhører radius. Det artikulerer med capitulum humeri og roterer i lig. anulare radii ved pronation-supination.",
    `${UPPER_LIMB_IMAGE_ROOT}/elbow.jpg`
  ),
  upperLimbQuestion(
    "På albuepladens nederste tegning: Hvilket ligament omslutter radialhovedet som en ring?",
    ["Lig. anulare radii", "Lig. collaterale ulnare", "Lig. coracoacromiale", "Retinaculum flexorum"],
    "Lig. anulare radii hæfter på begge sider af incisura radialis ulnae og holder caput radii på plads. Samtidig tillader det radialhovedets rotation.",
    `${UPPER_LIMB_IMAGE_ROOT}/elbow.jpg`
  ),
  upperLimbQuestion(
    "På fleksorpladen: Hvilket muskellag vises på den første farvede underarm umiddelbart efter tværsnittet?",
    ["Det superficielle første lag", "Det dybe fjerde lag", "Ekstensorernes dybe lag", "Thenarlaget"],
    "Den første farvede underarm viser fleksorlogens superficielle første lag: pronator teres, FCR, palmaris longus og FCU. De udspringer hovedsageligt fra epicondylus medialis.",
    `${UPPER_LIMB_IMAGE_ROOT}/forearm-flexors.jpg`
  ),
  upperLimbQuestion(
    "På fleksorpladen: Hvilken muskel vises alene som den store pink muskel i andet lag?",
    ["M. flexor digitorum superficialis", "M. flexor digitorum profundus", "M. palmaris longus", "M. pronator quadratus"],
    "Andet lag består alene af flexor digitorum superficialis. Dens sener deler sig omkring FDP og hæfter på mellemphalangerne.",
    `${UPPER_LIMB_IMAGE_ROOT}/forearm-flexors.jpg`
  ),
  upperLimbQuestion(
    "På fleksorpladen: Hvilken muskel er det lille lilla, tværgående område på den distale underarm længst til højre?",
    ["M. pronator quadratus", "M. supinator", "M. flexor pollicis longus", "M. anconeus"],
    "Det lilla tværgående område er pronator quadratus, fleksorlogens fjerde lag. Den pronerer og stabiliserer det distale radioulnarled.",
    `${UPPER_LIMB_IMAGE_ROOT}/forearm-flexors.jpg`
  ),
  upperLimbQuestion(
    "På ekstensorpladen: Hvilken gruppe vises på den højre af de tre øverste underarmstegninger?",
    ["Den dybe ekstensorgruppe", "Fleksorlogens første lag", "Thenarmusklerne", "Den radiale superficielle gruppe"],
    "Den højre tegning viser den dybe ekstensorgruppe med supinator og de dybe tommel- og pegefingermuskler. Gruppen innerveres af den dybe radialgren/posterior interosseous nerve.",
    `${UPPER_LIMB_IMAGE_ROOT}/forearm-extensors.jpg`
  ),
  upperLimbQuestion(
    "På ekstensorpladens nederste tværsnit: Hvad repræsenterer rækken af farvede sener under den grønne bue?",
    ["De seks ekstensor-kulisser", "De ni sener i canalis carpi", "De digitale arterier", "Lumbricalerne"],
    "De farvede sener viser de seks dorsale ekstensorrum under retinaculum extensorum. Retinaklet holder senerne tæt mod knoglerne og hindrer bowstringing.",
    `${UPPER_LIMB_IMAGE_ROOT}/forearm-extensors.jpg`
  ),
  upperLimbQuestion(
    "På ekstensorpladen: Hvilken region ved tommelbasen vises som en trekantet fordybning på håndryggen?",
    ["Tabatièren", "Canalis carpi", "Guyons kanal", "Fossa cubitalis"],
    "Regionen er den anatomiske snusboks. APL og EPB afgrænser den radialt, EPL ulnart, og a. radialis løber over scaphoideum i bunden.",
    `${UPPER_LIMB_IMAGE_ROOT}/forearm-extensors.jpg`
  ),
  upperLimbQuestion(
    "På håndknoglepladen: Hvad er den farvede gruppe af otte små knogler mellem underarm og metacarpaler?",
    ["Ossa carpi", "Ossa metacarpi", "Phalanges", "Ossa sesamoidea"],
    "Den farvede gruppe er de otte karpalknogler i proximal og distal række. De danner håndroden og karpusbuen omkring canalis carpi.",
    `${UPPER_LIMB_IMAGE_ROOT}/hand-bones.jpg`
  ),
  upperLimbQuestion(
    "På håndknoglepladen: Hvorfor har tommelfingeren færre phalanges end de øvrige fingre?",
    ["Den har kun en proximal og en distal phalanx", "Den mangler en metacarp", "Den har ingen distal phalanx", "Den består kun af karpalknogler"],
    "Pollex har to phalanges, en proximal og en distal, mens de øvrige fingre har tre. Tommelfingeren har stadig sin egen første metacarp."
    , `${UPPER_LIMB_IMAGE_ROOT}/hand-bones.jpg`
  ),
  upperLimbQuestion(
    "På håndmuskelpladens første figur: Hvilken muskelgruppe er farvet ved tommelfingerballen?",
    ["Thenarmusklerne", "Hypothenarmusklerne", "Lumbricalerne", "Dorsalinterosserne"],
    "Første figur viser thenarmusklerne ved tommelfingerballen. De muliggør abduktion, fleksion og især opposition af tommelfingeren.",
    `${UPPER_LIMB_IMAGE_ROOT}/hand-muscles.jpg`
  ),
  upperLimbQuestion(
    "På håndmuskelpladens tredje figur: Hvilke fire orange muskler følger de lange fleksorsener mod fingrene?",
    ["Mm. lumbricales", "Mm. interossei dorsales", "Thenarmusklerne", "Mm. flexores digitorum superficiales"],
    "De fire orange muskler er lumbricalerne. De udspringer fra FDP-senerne og flekterer MCP-leddene samtidig med, at de ekstenderer IP-leddene.",
    `${UPPER_LIMB_IMAGE_ROOT}/hand-muscles.jpg`
  ),
  upperLimbQuestion(
    "På håndmuskelpladens fjerde figur: Hvilke pink muskler ligger mellem metacarpalknoglerne og adducerer fingrene?",
    ["Mm. interossei palmares", "Mm. lumbricales", "Hypothenarmusklerne", "Mm. interossei dorsales"],
    "De tre pink muskler er palmarinterosserne. De adducerer fingrene mod 3. fingers akse og innerveres af n. ulnaris.",
    `${UPPER_LIMB_IMAGE_ROOT}/hand-muscles.jpg`
  ),
  upperLimbQuestion(
    "På arteriepladen: Hvilken hovedarterie deler sig ved albuen i en radial og en ulnar gren?",
    ["A. brachialis", "A. axillaris", "A. subclavia", "A. profunda brachii"],
    "A. brachialis deler sig typisk i fossa cubitalis i a. radialis og a. ulnaris. Den er fortsættelsen af a. axillaris distalt for teres major.",
    `${UPPER_LIMB_IMAGE_ROOT}/arteries.jpg`
  ),
  upperLimbQuestion(
    "På arteriepladens håndtegninger: Hvilken arterie danner hovedparten af den dybe palmarbue?",
    ["A. radialis", "A. ulnaris", "A. brachialis", "A. interossea posterior"],
    "Arcus palmaris profundus dannes hovedsageligt af a. radialis og suppleres af en dyb ulnargren. Den superficielle bue er derimod overvejende ulnardomineret.",
    `${UPPER_LIMB_IMAGE_ROOT}/arteries.jpg`
  ),
  upperLimbQuestion(
    "På venepladens øverste tegning: Hvilken forbindelsesvene krydser typisk albueområdet mellem de to lange superficielle vener?",
    ["V. mediana cubiti", "V. axillaris", "V. subclavia", "V. brachialis profunda"],
    "V. mediana cubiti forbinder typisk v. cephalica og v. basilica foran albuen. Den er ofte velegnet til venepunktur, fordi den ligger superficielt over aponeurosis bicipitalis.",
    `${UPPER_LIMB_IMAGE_ROOT}/veins-lymph.jpg`
  ),
  upperLimbQuestion(
    "På lymfepladens nederste tegning: Hvad repræsenterer de fem farvede knudegrupper i axillen?",
    ["Pectorale, subscapulære, humerale, centrale og apikale lymfeknuder", "De fem terminale nerver", "Rotatormanchettens muskler", "De fem karpalknogler"],
    "De farvede grupper viser de fem axillære lymfeknudegrupper. Perifere grupper dræner mod centrale og apikale knuder, hvorefter lymfen fortsætter i truncus subclavius.",
    `${UPPER_LIMB_IMAGE_ROOT}/veins-lymph.jpg`
  ),
  upperLimbQuestion(
    "På nervepladens øverste diagram: Hvilken struktur vises som et netværk fra fem proximale rødder til terminale grene?",
    ["Plexus brachialis", "Plexus lumbosacralis", "Sympatisk grænsestreng", "N. vagus"],
    "Diagrammet viser plexus brachialis fra C5-T1 gennem rødder, trunci, divisioner og fasciculi til terminale nerver. Netværket fordeler motoriske og sensoriske fibre til hele overekstremiteten.",
    `${UPPER_LIMB_IMAGE_ROOT}/nerves.jpg`
  ),
  upperLimbQuestion(
    "På nervepladens nederste række: Hvad repræsenterer de fem separate farvede nerveforløb?",
    ["De fem terminale grene fra plexus brachialis", "Fem spinalnerver til truncus superior", "Fem arterier fra a. axillaris", "Fem lymfeknudegrupper"],
    "Forløbene repræsenterer musculocutaneus, medianus, ulnaris, radialis og axillaris. Hver nerve har et karakteristisk motorisk og sensorisk territorium."
    , `${UPPER_LIMB_IMAGE_ROOT}/nerves.jpg`
  ),
  upperLimbQuestion(
    "På nervepladens øverste diagram: Hvilket kar ligger centralt mellem fasciculi og bruges til at navngive dem?",
    ["A. axillaris", "V. cephalica", "A. radialis", "A. brachialis profunda"],
    "Fasciculus lateralis, medialis og posterior navngives efter deres relation til a. axillaris. Denne nære relation er afgørende ved axillær kirurgi og regional anæstesi.",
    `${UPPER_LIMB_IMAGE_ROOT}/nerves.jpg`
  )
];

const UPPER_LIMB_MATERIALS = [
  upperLimbMaterial(
    "upper-limb-bones-joints",
    "Knogler og knoglepunkter",
    "Scapula, clavicula, humerus, radius og ulna med funktionelle knoglelandemærker.",
    UPPER_LIMB_BONE_FACTS,
    {
      ru: { title: "Кости и костные ориентиры", description: "Лопатка, ключица, плечевая, лучевая и локтевая кости с функциональными ориентирами." },
      ka: { title: "ძვლები და ძვლოვანი ორიენტირები", description: "ბეჭი, ლავიწი, მხრის, სხივისა და იდაყვის ძვლები." }
    }
  ),
  upperLimbMaterial(
    "upper-limb-shoulder-arm-elbow",
    "Skulder, aksil, overarm og albue",
    "Rotatormanchet, skulderstabilitet, axillens vægge, overarmens muskler og albuekomplekset.",
    UPPER_LIMB_SHOULDER_FACTS,
    {
      ru: { title: "Плечо, подмышка, плечевой отдел и локоть", description: "Ротаторная манжета, стабильность плеча, подмышечная область и локтевой комплекс." },
      ka: { title: "მხარი, იღლია, მკლავი და იდაყვი", description: "როტატორული მანჟეტი, მხრის სტაბილურობა, იღლია და იდაყვი." }
    }
  ),
  upperLimbMaterial(
    "upper-limb-forearm",
    "Underarmens muskler og loger",
    "Fleksorlag, ekstensorgrupper, retinakler, radioulnarled og tabatièren.",
    UPPER_LIMB_FOREARM_FACTS,
    {
      ru: { title: "Мышцы и фасциальные ложа предплечья", description: "Сгибатели, разгибатели, удерживатели сухожилий и лучелоктевые суставы." },
      ka: { title: "წინამხრის კუნთები და კომპარტმენტები", description: "მომხრელები, გამშლელები, რეტინაკულუმები და სხივ-იდაყვის სახსრები." }
    }
  ),
  upperLimbMaterial(
    "upper-limb-hand",
    "Hånd, fingre og intrinsiske muskler",
    "Carpus, canalis carpi, thenar, hypothenar, lumbricaler, interosser og fingerapparatet.",
    UPPER_LIMB_HAND_FACTS,
    {
      ru: { title: "Кисть, пальцы и собственные мышцы", description: "Запястье, карпальный канал, тенар, гипотенар, червеобразные и межкостные мышцы." },
      ka: { title: "მტევანი, თითები და შინაგანი კუნთები", description: "კარპუსი, კარპალური გვირაბი, თენარი, ჰიპოთენარი და თითების აპარატი." }
    }
  ),
  upperLimbMaterial(
    "upper-limb-vessels-lymph",
    "Arterier, vener og lymfedrænage",
    "Axillære og brachiale kar, palmarbuer, superficielle vener og axillære lymfeknuder.",
    UPPER_LIMB_VASCULAR_FACTS,
    {
      ru: { title: "Артерии, вены и лимфоотток", description: "Подмышечные и плечевые сосуды, ладонные дуги, поверхностные вены и лимфоузлы." },
      ka: { title: "არტერიები, ვენები და ლიმფოდრენაჟი", description: "იღლიისა და მხრის სისხლძარღვები, ხელის რკალები, ვენები და ლიმფური კვანძები." }
    }
  ),
  upperLimbMaterial(
    "upper-limb-nerves",
    "Plexus brachialis og perifere nerver",
    "Rødder, trunci, fasciculi, terminale grene, motorik, sensibilitet og kliniske læsioner.",
    UPPER_LIMB_NERVE_FACTS,
    {
      ru: { title: "Плечевое сплетение и периферические нервы", description: "Корешки, стволы, пучки, конечные ветви и клинические поражения." },
      ka: { title: "მხრის წნული და პერიფერიული ნერვები", description: "ფესვები, ღეროები, კონები, საბოლოო ტოტები და კლინიკური დაზიანებები." }
    }
  ),
  {
    id: "upper-limb-images",
    title: "Anatomiske billeder uden labels",
    description: "Identificér selv strukturerne på rene tegninger. Forklaringen vises først efter dit svar.",
    i18n: {
      ru: { title: "Анатомические рисунки без подписей", description: "Самостоятельно определите структуру. Название и объяснение появятся только после ответа." },
      ka: { title: "ანატომიური სურათები წარწერების გარეშე", description: "თავად ამოიცანით სტრუქტურა; ახსნა გამოჩნდება პასუხის შემდეგ." }
    },
    questions: UPPER_LIMB_IMAGE_QUESTIONS
  }
];

function cloneUpperLimbQuestion(question) {
  return {
    ...question,
    options: question.options.map((option) => {
      if (option && typeof option === "object") {
        return { ...option };
      }

      return option;
    })
  };
}

const upperLimbFolder = globalThis.QUIZ_FOLDERS?.find((folder) => folder.id === "upper-limb");

if (upperLimbFolder) {
  upperLimbFolder.materials = upperLimbFolder.materials.filter((material) => material.id !== "upper-limb-mixed");

  UPPER_LIMB_MATERIALS.forEach((material) => {
    if (!upperLimbFolder.materials.some((existing) => existing.id === material.id)) {
      upperLimbFolder.materials.push(material);
    }
  });

  upperLimbFolder.materials.push({
    id: "upper-limb-mixed",
    title: "Blandet Upper limb-test",
    description: "Alle spørgsmål fra Upper limb blandet i én stor repetition.",
    i18n: {
      ru: { title: "Смешанный тест Upper limb", description: "Все вопросы по верхней конечности собраны в одном большом повторении." },
      ka: { title: "შერეული Upper limb ტესტი", description: "ზედა კიდურის ყველა კითხვა ერთ დიდ გამეორებაშია." }
    },
    questions: upperLimbFolder.materials.flatMap((material) => material.questions.map(cloneUpperLimbQuestion))
  });
}
