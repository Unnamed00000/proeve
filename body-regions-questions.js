function bodyRegionQuestion(text, options, explanation) {
  return { text, options, answer: 0, explanation };
}

function bodyRegionFact(id, group, name, area, boundaries, relief, examination, layers, clinic) {
  return { id, group, name, area, boundaries, relief, examination, layers, clinic };
}

const BODY_REGION_FACTS = [
  bodyRegionFact(
    "facialis", "face", "Regiones facialis", "Ansigtets overfladiske region.",
    "Glabella, margo supraorbitalis, processus frontalis ossis zygomatici, arcus zygomaticus, forkanten af m. sternocleidomastoideus, en horisontal linje til angulus mandibulae og basis mandibulae.",
    "Relieffet bestemmes især af det underliggende skelet, men også af fedtfylde og tandstilling.",
    "M. masseter, a. facialis, ductus parotideus samt trigeminusgrenene ved foramina supraorbitale, infraorbitale og mentale kan undersøges.",
    "Tynd, løst bundet hud; fedtholdig underhud med mimisk muskulatur uden egentlig fascie, n. facialis, n. trigeminus samt a. og v. facialis; derefter periostbeklædt knogle eller brusk.",
    "Ansigtets farlige trekant kan sprede infektion via v. ophthalmica til sinus cavernosus. Facialis- og trigeminuslæsioner giver henholdsvis motoriske og sensoriske udfald; den løse hudbinding fremmer hæmatomer og infektion."
  ),
  bodyRegionFact(
    "parotideomasseterica", "face", "Regio parotideomasseterica", "Regionen omkring gl. parotidea og m. masseter.",
    "Arcus zygomaticus kranielt, forkanten af m. masseter fortil, basis mandibulae og linjen fra angulus mandibulae til m. sternocleidomastoideus kaudalt samt m. sternocleidomastoideus og processus mastoideus bagtil.",
    "Forreste del er konveks afhængigt af fedt og m. masseter; bageste del er konkav. Regionen kan opdeles i regio masseterica og regio retromandibularis.",
    "Ramus og angulus mandibulae, basis mandibulae, caput mandibulae, arcus zygomaticus, m. masseter, a. facialis og ductus parotideus kan palperes eller inspiceres.",
    "Hud; underhud med a. facialis og n. facialis; fascia parotideomasseterica; m. masseter fortil og gl. parotidea bagtil; ramus mandibulae i dybden.",
    "Parotitis og sialolithiasis kan give smertefuld hævelse. N. facialis løber gennem kirtlen og skal beskyttes ved parotidektomi; mandibelfraktur eller karskade kan give betydelig blødning."
  ),
  bodyRegionFact(
    "infratemporalis", "face", "Regio infratemporalis", "Et dybt rum medialt for ramus mandibulae.",
    "Ramus mandibulae lateralt, facies infratemporalis maxillae fortil, lamina lateralis processus pterygoidei og fissura pterygomaxillaris medialt, ala major og området under arcus zygomaticus som loft samt mm. pterygoidei som bund/bagvæg.",
    "Det er en dyb, fedtfyldt region uden et tydeligt overfladerelief.",
    "Regionen vurderes indirekte gennem kæbefunktion og neurologi; den indeholder a. maxillaris, plexus pterygoideus samt grene fra n. mandibularis.",
    "Fedtholdigt løst bindevæv med a. maxillaris, plexus pterygoideus, n. lingualis, n. alveolaris inferior, n. buccalis, n. massetericus og motoriske grene til m. temporalis mellem pterygoidmusklerne.",
    "Infektion fra plexus pterygoideus kan nå sinus cavernosus. Skade på a. maxillaris kan bløde kraftigt, og skade på n. lingualis eller n. alveolaris inferior kan give føleudfald efter fx visdomstandskirurgi."
  ),
  bodyRegionFact(
    "sublingualis", "face", "Regio sublingualis", "Det hesteskoformede gulv i mundhulen.",
    "Corpus mandibulae lateralt, bagkanten af mm. mylohyoidei som bageste/bundmæssig grænse, tungemuskulaturen medialt og mundslimhinden som loft.",
    "Regionen er hesteskoformet under tungen.",
    "Frenulum linguae, plicae sublinguales og fimbriatae ses, og gl. sublingualis kan palperes.",
    "Glat, løst bundet slimhinde; bindevæv med gl. sublingualis og submandibularis, ductus submandibularis, n. lingualis, n. hypoglossus og linguale/sublinguale kar; m. mylohyoideus som bund.",
    "Infektion kan udvikle sig til Ludwig-angina med truet luftvej. Sten i ductus submandibularis giver måltidsrelateret smerte/hævelse, og skade på n. lingualis kan påvirke følesans og smag fortil på tungen."
  ),

  bodyRegionFact(
    "submandibulare", "neck", "Trigonum submandibulare", "Den superiore trekant på halsens forside under mandiblen.",
    "Basis mandibulae samt venter anterior og posterior m. digastrici; bunden dannes især af m. mylohyoideus, m. hyoglossus og m. styloglossus.",
    "Svagt konvekst afhængigt af fedtprocent og hovedstilling.",
    "Basis mandibulae, m. digastricus og gl. submandibularis kan palperes.",
    "Hud og fedtholdig underhud; lamina superficialis fasciae cervicalis; submandibularlogen; dybere a. og v. facialis, n. hypoglossus og ganglion submandibulare.",
    "Sialadenitis eller sten i ductus submandibularis kan give hævelse og smerte i trekanten."
  ),
  bodyRegionFact(
    "submentale", "neck", "Trigonum submentale", "Den uparrede trekant i halsens forreste midtlinje under hagen.",
    "De to forreste buger af m. digastricus, forfladen af corpus ossis hyoidei og halsens midtlinje; m. mylohyoideus danner bunden.",
    "Et lille midtstillet område under hagen uden markant muskulært relief.",
    "Området under hagen inspiceres for hævelse; submentale lymfeknuder vurderes klinisk.",
    "Hud; fedtholdig underhud med kutane nerver og v. jugularis anterior; lamina superficialis; bindevæv med nodi lymphatici submentales; m. mylohyoideus.",
    "Regionen er vigtig ved infektioner fra underlæben og ved forstørrede submentale lymfeknuder."
  ),
  bodyRegionFact(
    "caroticum", "neck", "Trigonum caroticum", "Den superolaterale del af halsens forreste trekant.",
    "Venter posterior m. digastrici, venter superior m. omohyoidei og forkanten af m. sternocleidomastoideus.",
    "Området er forholdsvis affladet og påvirkes af muskulatur, fedtfylde og hovedstilling.",
    "Carotispuls, pharynx, cartilago thyroidea og cornu majus ossis hyoidei kan vurderes.",
    "Tynd hud; fedtfattig underhud med v. jugularis externa og cervikale lymfeknuder; lamina superficialis; dybere rum med carotiderne og v. jugularis interna.",
    "Trekanten giver kirurgisk adgang til store kar og nerver, blandt andet ved carotisendarterektomi."
  ),
  bodyRegionFact(
    "musculare", "neck", "Trigonum musculare", "Den inferomediale del af halsens forside over de infrahyoide muskler.",
    "Corpus ossis hyoidei, venter superior m. omohyoidei og forkanten af m. sternocleidomastoideus.",
    "Prominentia laryngea er ofte tydelig hos mænd, mens gl. thyroidea kan præge konturen hos kvinder.",
    "Os hyoideum, larynx, gl. thyroidea, trachea og de tilhørende membraner kan palperes eller inspiceres.",
    "Hud og underhud; lamina superficialis og linea alba colli; spatium suprasternale med v. jugularis anterior og arcus venosus juguli; lamina pretrachealis; spatium previscerale og viscera.",
    "Regionen bruges til adgang til gl. thyroidea og til luftvejene ved trakeostomi."
  ),
  bodyRegionFact(
    "cervicalis-lateralis", "neck", "Regio cervicalis lateralis", "Den laterale halsregion mellem m. sternocleidomastoideus og m. trapezius.",
    "Bagkanten af m. sternocleidomastoideus fortil, linea nuchae superior kranielt, forkanten af m. trapezius bagtil og clavicula kaudalt.",
    "Øvre del er konveks; nedre del er konkav svarende til fossa supraclavicularis major.",
    "Platysma, v. jugularis externa, clavicula og m. omohyoideus ses/palperes; i dybden findes bundmuskler, plexus brachialis og a. subclavia.",
    "Hud og underhud; lamina superficialis; fortil nedad spatium supraclaviculare og lamina media; bindevævsrum; prævertebralfascie med bundmuskulatur.",
    "Plexus brachialis kan skades, supraklavikulære knuder kan forstørres, regionen bruges til central venøs adgang, og thoracic outlet-syndrom kan komprimere kar og nerver."
  ),
  bodyRegionFact(
    "sternocleidomastoidea", "neck", "Regio sternocleidomastoidea", "Regionen svarende til m. sternocleidomastoideus' udstrækning.",
    "Afgrænsningen følger hele m. sternocleidomastoideus fra dens sternale og claviculære udspring til processus mastoideus.",
    "Musklen præger reliefet; inferiort findes fossa supraclavicularis minor.",
    "M. sternocleidomastoideus palperes, og den inferiore fordybning bruges som klinisk orienteringspunkt.",
    "Tynd hud; løs fedtholdig underhud med v. jugularis externa; lamina superficialis og m. sternocleidomastoideus med n. accessorius; pretrachealfascie; spatium lateropharyngeum med carotider, v. jugularis interna og n. vagus; prævertebralfascie.",
    "N. accessorius er udsat ved kirurgi og kan give svaghed i trapezius/SCM. Fascierne kan lede infektion til spatium lateropharyngeum, og fossa supraclavicularis minor er relevant ved kar- og lymfeknudeundersøgelse."
  ),

  bodyRegionFact(
    "thorax", "trunk", "Regio thoracis", "Brystvæggen inklusive mammaria og den anterolaterale væg.",
    "Diaphragma kaudalt, ryggen posteriort, clavicula kranielt og axillen lateralt.",
    "Relieffet præges især af m. pectoralis major og costae.",
    "Clavicula, sternum, de nederste elleve ribben samt thorakale knoglepunkter kan palperes og inspiceres.",
    "Hud med intercostale kutane grene; underhud med intercostale og thoracale kar; superficiel muskulatur; costae og intercostalmuskler; dybt cor, pulmones og mediastinum.",
    "Traumer kan give costa- eller sternumfraktur og pneumothorax. Kendskab til lagene er afgørende ved anlæggelse af pleuradræn."
  ),
  bodyRegionFact(
    "abdomen", "trunk", "Regio abdominis", "Den anterolaterale bugvæg.",
    "Pelvis kaudalt, ryggen posteriort og diaphragma kranielt.",
    "Konturen præges af fedtaflejringer og bugmuskulatur.",
    "Mm. recti abdominis, linea alba, m. obliquus externus, leverkanten, nyrerne og aortapulsation kan vurderes.",
    "Hud med kutane grene fra nedre intercostalnerver, n. subcostalis, iliohypogastricus og ilioinguinalis; underhud med lumbale/epigastriske kar; bugmuskler; fascia transversalis; viscera.",
    "Klinisk er regionen central ved hernier, abdominaltraumer, aortaaneurisme og risiko for skade på perifere nerver ved kirurgi."
  ),
  bodyRegionFact(
    "nuchalis", "trunk", "Regio nuchalis", "Nakkedelen af dorsum mellem baghoved og skulderbælte.",
    "Linea nuchae superior kranielt og en transversal linje fra processus spinosus C7 mod acromion kaudalt; lateralt relateret til m. trapezius.",
    "Vertebrale strukturer og m. trapezius præger konturen.",
    "Nakkemuskler, cervikale processus spinosi og lig. nuchae kan palperes.",
    "Tynd, løs hud; subkutant væv med dorsale cervikale nervegrene; m. trapezius, splenius capitis og semispinalis capitis; dybt mm. suboccipitales.",
    "Posturale spændinger og smerter er almindelige; traumer kan give cervikale frakturer eller skade på lig. nuchae."
  ),
  bodyRegionFact(
    "vertebralis", "trunk", "Regio vertebralis", "Den longitudinelle rygregion langs columna vertebralis.",
    "Følger columna mellem nakkens og lændens rygregioner med processus spinosi som centralt landemærke.",
    "Relieffet præges af processus spinosi og de paravertebrale muskelmasser.",
    "Processus spinosi palperes ned langs columna; paravertebrale muskler kan ses hos magre personer.",
    "Middeltyk hud tæt bundet over processus spinosi; subkutant væv med rami dorsales; m. trapezius og latissimus dorsi; dybt m. erector spinae.",
    "Skoliose og kyfose ses ved inspektion; diskusprolaps, protrusion og facetledssmerter kan give regionale symptomer."
  ),
  bodyRegionFact(
    "scapularis", "trunk", "Regio scapularis", "Den trekantede rygregion svarende til scapulas udstrækning.",
    "Afgrænsningen følger scapulas kontur og ligger lateralt for den vertebrale region.",
    "Trekantet relief formet af scapula og omgivende muskler.",
    "Spina scapulae, acromion og scapulas bevægelse ved armbevægelser vurderes.",
    "Tynd fleksibel hud; fedtfattig subcutis; superficielt m. trapezius, m. teres major og m. deltoideus; dybt rotatorcuffens muskler.",
    "Rotatorcufflæsioner, scapulafraktur og muskulær ubalance kan ses, blandt andet scapula alata."
  ),
  bodyRegionFact(
    "lumbalis", "trunk", "Regio lumbalis", "Lænderegionen mellem nederste thorax og crista iliaca.",
    "Indgår i dorsums afgrænsning mellem lateralkanten af rygmuskulaturen, crista iliaca og columna.",
    "Crista iliaca, store rygmuskler og fedtophobning præger reliefet.",
    "Crista iliaca, lumbale processus spinosi og paravertebrale muskler palperes; asymmetri, deformitet og atrofi inspiceres.",
    "Tyk, stramt bundet hud; fedtholdig subcutis med lumbale nervegrene; m. latissimus dorsi og nederste gluteus medius; dybt m. quadratus lumborum, psoas major og fascia thoracolumbalis.",
    "Lumbago og diskusprolaps er hyppige, især i den nedre lænd."
  ),

  bodyRegionFact(
    "brachialis-ant", "upper", "Regio brachialis anterior", "Overarmens forside.",
    "Underkanten af m. pectoralis major proximalt, to fingerbredder over basis olecrani distalt og vertikale planer gennem humerusepikondylerne til de intermusculære septa på siderne.",
    "Konveks fra side til side og ved udviklet biceps også konveks i længderetningen.",
    "Sulci bicipitales, m. biceps brachii, v. basilica og cephalica ses; septum mediale, a. brachialis og humerus palperes.",
    "Hud; underhud; fascia brachialis; superficielt m. coracobrachialis og biceps; dybt m. brachialis; humerus.",
    "Humerusfraktur kan skade nerver. V. basilica/cephalica bruges til venepunktur, a. brachialis til blodtryksmåling, og n. medianus samt n. musculocutaneus kan påvirkes ved traume."
  ),
  bodyRegionFact(
    "brachialis-post", "upper", "Regio brachialis posterior", "Overarmens bagside.",
    "Underkanten af m. teres major proximalt, to fingerbredder over basis olecrani distalt og vertikale planer gennem epicondyli humeri langs de intermusculære septa.",
    "Konveks fra side til side og tydeligt præget af tricepsmuskulaturen.",
    "M. triceps brachii palperes; n. radialis kan rulles mod humerus, og n. ulnaris findes distalt medialt.",
    "Hud; underhud; fascia brachialis; superficielt caput longum og laterale tricipitis; dybt caput mediale; humerus. N. radialis og a. profunda brachii følger sulcus nervi radialis.",
    "Radialislæsion eller midtskaftsfraktur af humerus kan give drop hand. N. ulnaris er udsat nær albuen, og injektioner kræver præcis placering for at undgå nerveskade."
  ),
  bodyRegionFact(
    "antebrachialis-ant", "upper", "Regio antebrachialis anterior", "Underarmens forside med fleksorgruppen.",
    "To fingerbredder under basis olecrani proximalt, én fingerbredde over processus styloideus radii distalt og vertikale linjer gennem humerusepikondylerne på siderne.",
    "Svagt konveks fra side til side.",
    "Senerne fra palmaris longus og flexor carpi radialis samt superficielle vener ses; muskellag og puls i a. radialis/ulnaris palperes.",
    "Hud; underhud; fascia antebrachialis; superficielt muskellag; neurovaskulært lag; dybt muskellag.",
    "Regionens vener bruges til venepunktur. Flexorsener kan få tenosynovitis, radialispuls måles distalt, og medianusrelaterede symptomer kan fortsætte mod karpaltunnelen."
  ),
  bodyRegionFact(
    "antebrachialis-post", "upper", "Regio antebrachialis posterior", "Underarmens bagside med ekstensorgruppen.",
    "To fingerbredder under basis olecrani proximalt, én fingerbredde over processus styloideus radii distalt og vertikale linjer gennem epicondyli humeri på siderne.",
    "Svagt konveks fra side til side.",
    "M. anconeus, ekstensorgruppen, den radiale muskelgruppe og subkutane vener ses; margo posterior ulnae, caput ulnae og distale radius palperes.",
    "Hud; underhud; fascia antebrachialis; superficielt muskellag; neurovaskulært lag; dybt muskellag.",
    "Overbelastning kan give ekstensor-tenosynovitis eller lateral epikondylitis. Radialisskade kan give drop hand, og ulna-/radiusfraktur giver smerte og funktionsnedsættelse."
  ),
  bodyRegionFact(
    "cubitalis-post", "upper", "Regio cubitalis posterior", "Albueleddets bagside omkring olecranon.",
    "Plan to fingerbredder over og under basis olecrani samt vertikale linjer gennem epicondyli humeri.",
    "Konveks fra side til side og præget af led- og knoglestrukturer.",
    "Olecranon, tricepssenen, fossa olecrani, begge epikondyler, n. ulnaris og caput radii ved pronation/supination palperes.",
    "Tyk løs hud; fedtfattig underhud med n. ulnaris og bursa subcutanea olecrani; fascie; muskulatur; knogle og albueled.",
    "Bursitis i bursa olecrani giver 'student's elbow'; flexor- og ekstensorudspring kan give henholdsvis golf- og tennisalbue."
  ),
  bodyRegionFact(
    "carpalis-ant", "upper", "Regio carpalis anterior", "Håndleddets palmare side.",
    "Mellem processus styloideus radii/ulnae og basis af metakarpalknoglerne; radialt afgrænset af APL/EPB-sener og ulnart af flexor carpi ulnaris-senen.",
    "Præget af prominente fleksorsener og konturerne af carpalknoglerne.",
    "Flexorsener, a. radialis og a. ulnaris palperes; scaphoideum vurderes ved tabatièren.",
    "Tynd smidig hud; subcutis med vener og kutane medianus-/ulnargrene; palmar fascie; retinaculum flexorum; flexorsener og n. medianus i carpaltunnelen; kar og knogler dybt.",
    "Karpaltunnelsyndrom komprimerer n. medianus. Tendinitis og frakturer som scaphoideum-, Colles- eller Smith-fraktur er klinisk vigtige."
  ),
  bodyRegionFact(
    "palma", "upper", "Palma manus", "Håndfladen distalt for flexorretinaklet.",
    "Distale rand af retinaculum flexorum proximalt, plicae natatoriae distalt og tommelens grundled radialt.",
    "En trekantet central udhuling (vola manus) og distalt tre pudeformede fremhvælvninger knyttet til aponeurosis palmaris.",
    "Håndfladens furer, senestrøg, kar og nerver vurderes funktionelt; a. ulnaris og radialis bidrager til de palmare buer.",
    "Hud; underhud; aponeurosis palmaris; subfascielle muskel- og bindevævsrum.",
    "Dupuytrens kontraktur forkorter aponeurosen. Karpaltunnelsyndrom giver medianussymptomer, og stærke bindevævsstrøg kan afgrænse en palmar absces, som ofte kræver drænage."
  ),
  bodyRegionFact(
    "dorsum-manus", "upper", "Regio carpalis posterior og dorsum manus", "Håndledsregionens bagside og håndryggen.",
    "En fingerbredde over processus styloideus radii proximalt og en linje gennem knoerne distalt.",
    "Plant/fladt relief, hvor ekstensorsenerne fremstår tydeligt.",
    "Første dorsale interosseus, ekstensorsener, tabatièren, a. radialis, scaphoideum samt håndrodsknogler og led kan undersøges.",
    "Hud; spatium dorsale manus subcutaneum; fascia dorsalis manus; subfascielt rum med ekstensorsener og a. radialis.",
    "Fald på strakt hånd kan give scaphoideumfraktur; ekstensorsener kan få tendinitis, og radialispuls i tabatièren hjælper med at vurdere blodforsyningen."
  ),

  bodyRegionFact(
    "coxalis", "pelvis", "Regio coxalis", "Den laterale hofteregion.",
    "Forkanten af m. tensor fasciae latae fortil, sulcus iliacus kranielt og forkanten/øvre kanten af m. gluteus maximus mod området over trochanter major kaudalt.",
    "Regio coxalis er relativt plan, mens den tilstødende glutealregion er konveks afhængigt af fedt og muskulatur.",
    "Os coxae, crista iliaca, gluteus maximus, tensor fasciae latae, trochanter major, tuber ischiadicum og n. ischiadicus' område vurderes.",
    "Hud; underhud; fascia som fortsættelse af fascia lata; gluteus maximus/medius; spatium intergluteale; dybt gluteus minimus og bækkenets udadrotatorer med n. ischiadicus omkring piriformis.",
    "Injektioner placeres sikkert i gluteus medius-området for at undgå n. ischiadicus. Trochanterbursitis, iskias og frakturer af trochanter/os coxae er relevante."
  ),
  bodyRegionFact(
    "pelvis", "pelvis", "Bækkenkaviteten", "Det tragt- eller skålformede rum i det lille bækken.",
    "Adskilles fra bughulen ved linea terminalis og afgrænses af diaphragma pelvis, symphysis pubica, sacrum, coccygis og ossa coxae.",
    "Tragt- eller skålformet; formen varierer blandt andet med køn.",
    "Crista iliaca, SIAS, symphysis pubica, sacrum og coccygis palperes; internt vurderes blære, rectum og hos kvinder uterus.",
    "Hud; underhud; superficiel muskulatur; knogler; diaphragma pelvis; fascia parietalis og visceralis; bækkenviscera.",
    "Bækkenfrakturer, organprolaps og obstetriske forhold kræver forståelse af rummets knogler, muskler, fascier og organrelationer."
  ),
  bodyRegionFact(
    "glutealis", "pelvis", "Regio glutealis", "Balden og den posteriore hofteregion.",
    "Crista iliaca kranielt, sulcus glutealis kaudalt, sacrum/coccygis medialt og trochanter major lateralt.",
    "Relieffet præges af m. gluteus maximus samt variation i fedtfordeling, muskelmasse og køn.",
    "Crista iliaca, trochanter major, sacrum/coccygis og glutealmuskulaturen kan palperes.",
    "Tyk bevægelig hud; fedtholdig underhud med nn. clunium; gluteus maximus; dybt gluteus medius/minimus, piriformis, obturatorius internus, gemelli og quadratus femoris med n. ischiadicus; knogler og sacroligamenter.",
    "Iskias kan give udstrålende smerte. Bursa trochanterica kan inflammeres, og traumer kan skade sacrum eller ligamenter som lig. sacrotuberale."
  ),

  bodyRegionFact(
    "femoralis-ant", "knee", "Regio femoralis anterior og trigonum femorale", "Forsiden af låret med femoraltrianglen proximalt.",
    "Trigonum femorale afgrænses af lig. inguinale, m. sartorius og m. adductor longus; m. iliopsoas indgår i bunden.",
    "Præget af lårets muskeltonus og trofik; trianglen kan mærkes som en trekantet fordybning.",
    "Lig. inguinale bruges som reference, og a. femoralis palperes umiddelbart under ligamentet; n. femoralis og triangelområdet vurderes.",
    "Tynd elastisk hud; fedtholdig underhud med store vener og kutane nerver; sartorius, adductor longus og iliopsoas; fascia lata; femorale kar og n. femoralis.",
    "Femoralhernie kan vise sig i området. A. femoralis bruges til pulsvurdering, arteriel adgang, kateterisation og angiografi."
  ),
  bodyRegionFact(
    "genus-ant", "knee", "Regio genus anterior", "Knæets forside.",
    "Materialet angiver en proximal grænse mod låret, patella distalt/centralt samt m. vastus medialis medialt og m. vastus lateralis lateralt.",
    "Patella dominerer reliefet; ved høj muskeltonus ses quadricepskonturerne tydeligt.",
    "Patella palperes som en fast central struktur, og knæleddets kapsel og ledlinjer undersøges.",
    "Tynd løs hud; fedtholdig underhud; fascia lata; quadriceps med vastus medialis/lateralis; fibrøs ledkapsel; patella, femur, tibia og fibula.",
    "Patellaluksation, bursitis og ligamentskade er centrale kliniske problemstillinger på knæets forside."
  ),
  bodyRegionFact(
    "genus-post", "knee", "Regio genus posterior", "Knæets bagside omkring den popliteale region.",
    "Distale femur proximalt, proximale tibia distalt, semimembranosus/semitendinosus medialt og biceps femoris lateralt.",
    "Relieffet præges af fossa poplitea.",
    "Fossa poplitea, a. poplitea, ledlinjer og sener fra biceps femoris og semitendinosus undersøges.",
    "Tynd løs hud; fedtholdig underhud med kar og nerver; hamstringsmuskler; fascia lata/cruris; bageste ledkapsel, PCL og synovialmembran.",
    "Baker-cyste/bursitis og ligamentskade kan give smerte, udfyldning og ustabilitet bag knæet."
  ),
  bodyRegionFact(
    "poplitea", "knee", "Fossa poplitea", "Den trekantede knæhase bag knæleddet.",
    "Semimembranosus og semitendinosus superomedialt, biceps femoris superolateralt samt gastrocnemius' mediale og laterale hoveder inferiort; plantaris bidrager lateralt.",
    "Trekantet fordybning, tydeligst ved flekteret knæ; stærke hamstringssener danner øvre kanter, og ledkapslen danner en del af bunden.",
    "Puls i a. poplitea og knæledskapslen palperes med knæet afslappet/flekteret.",
    "Tynd løs hud; fedtholdig underhud med kutane nerver; muskulære kanter; fascia cruris og fascia poplitea omkring de dybe kar og nerver.",
    "Knætraume og Baker-cyste kan udfylde fossen. N. tibialis og n. fibularis communis kan påvirkes, og karstrukturerne skal vurderes ved skade."
  ),

  bodyRegionFact(
    "cruralis-post", "leg", "Regio cruralis posterior", "Underbenets bagside.",
    "Øvre kant af m. gastrocnemius ved knæet proximalt og ankelleddet bag malleolerne distalt.",
    "Præget af den store gastrocnemiusmasse afhængigt af muskelmasse og tonus.",
    "Gastrocnemius, soleus og Achillessenen palperes; a. tibialis posterior og n. tibialis vurderes bag mediale malleol.",
    "Tynd, løst bundet hud; fedtholdig underhud med kutane nerver og kar; fascia cruris og dybe septa; gastrocnemius/soleus; dybere tibiale kar og nerver.",
    "Achillesseneruptur giver funktionssvigt og hævelse. Nedsat flow i a. tibialis posterior kan kompromittere fodens blodforsyning."
  ),
  bodyRegionFact(
    "talocruralis", "leg", "Regio talocruralis", "Ankelregionen med forreste, bageste, mediale og laterale afsnit.",
    "Et plan to fingerbredder over og et plan to fingerbredder under spidsen af malleolus medialis.",
    "Malleolerne præger siderne, Achillessenen bagsiden og ekstensorsenerne forsiden.",
    "Tibialis anterior-senen og begge malleoler vurderes; a. dorsalis pedis palperes mellem EHL og EDL, og a. tibialis posterior bag mediale malleol.",
    "Middeltyk løs hud; fedtfattig underhud med vener og kutane nerver; retinacula som fortsættelse af fascia cruris; senekanaler med kar/nerver; knogler og led.",
    "Inversionsskader rammer ofte laterale ligamenter. Achillesseneruptur/tendinitis, malleolfrakturer og luksationer er vigtige, og pedal/tibial puls vurderer perifer cirkulation."
  ),
  bodyRegionFact(
    "dorsum-pedis", "leg", "Dorsum pedis", "Fodryggen.",
    "Fodens mediale og laterale sidekontur samt plicae natatoriae fortil/distalt.",
    "Konvekst relief præget af lange ekstensorsener og m. extensor digitorum brevis.",
    "M. extensor digitorum brevis, ekstensorsener, knogler/led og a. dorsalis pedis undersøges; pulsen kan anatomisk mangle hos nogle.",
    "Hud; spatium dorsale pedis subcutaneum; fascia dorsalis pedis; subfascielt rum med sener, kar og øvrige dybe strukturer.",
    "Metatarsalfraktur og ekstensortendinitis er almindelige. Dorsalispuls bruges til kredsløbsvurdering, og ødem kan afspejle traume eller systemisk hjerte-/nyresygdom."
  ),
  bodyRegionFact(
    "planta", "leg", "Planta pedis", "Fodsålen.",
    "Hælens sidekontur bagtil, fodens mediale og laterale sidekontur samt plicae natatoriae fortil.",
    "Medial konkavitet mellem fodbalde og hælbalde svarende til længdebuen.",
    "Lig. plantare longum og aponeurosis plantaris vurderes ved palpation.",
    "Hud; underhud; aponeurosis plantaris; spatium plantare med fire muskellag; knogler, led, ligamenter og mm. interossei.",
    "Plantar fasciitis giver typisk morgensmerter i hælen. Hælspore, pes planus, metatarsalgi og diabetiske tryksår er øvrige centrale problemstillinger."
  )
];

function bodyRegionExplanation(region, focus) {
  return `${focus} ${region.name} dækker ${region.area.toLowerCase()} Grænser: ${region.boundaries} Relief: ${region.relief} Ved undersøgelse: ${region.examination} Lag: ${region.layers} Klinisk: ${region.clinic}`;
}

function bodyRegionDistractors(region, field) {
  const index = BODY_REGION_FACTS.indexOf(region);
  const distractors = [];

  for (let offset = 1; offset < BODY_REGION_FACTS.length && distractors.length < 3; offset += 1) {
    const candidate = BODY_REGION_FACTS[(index + offset) % BODY_REGION_FACTS.length][field];

    if (candidate !== region[field] && !distractors.includes(candidate)) {
      distractors.push(candidate);
    }
  }

  return distractors;
}

function buildBodyRegionQuestions(region) {
  return [
    bodyRegionQuestion(
      `Hvilken region beskrives? ${region.area} Grænserne omfatter: ${region.boundaries}`,
      [region.name, ...bodyRegionDistractors(region, "name")],
      bodyRegionExplanation(region, `Det korrekte regionsnavn er ${region.name}.`)
    ),
    bodyRegionQuestion(
      `Hvilke grænser passer til ${region.name}?`,
      [region.boundaries, ...bodyRegionDistractors(region, "boundaries")],
      bodyRegionExplanation(region, `Disse anatomiske landemærker afgrænser ${region.name}.`)
    ),
    bodyRegionQuestion(
      `Hvordan beskrives reliefet i ${region.name}?`,
      [region.relief, ...bodyRegionDistractors(region, "relief")],
      bodyRegionExplanation(region, `Reliefet genkendes på de overfladiske konturer og underliggende strukturer.`)
    ),
    bodyRegionQuestion(
      `Hvilket palpations- eller inspektionsfund hører til ${region.name}?`,
      [region.examination, ...bodyRegionDistractors(region, "examination")],
      bodyRegionExplanation(region, `Dette er de vigtigste undersøgelsesfund i ${region.name}.`)
    ),
    bodyRegionQuestion(
      `Hvilken lagdeling passer bedst til ${region.name}?`,
      [region.layers, ...bodyRegionDistractors(region, "layers")],
      bodyRegionExplanation(region, `Lagene skal forstås fra overfladen mod de dybere strukturer.`)
    ),
    bodyRegionQuestion(
      `Hvilken klinisk forklaring passer bedst til ${region.name}?`,
      [region.clinic, ...bodyRegionDistractors(region, "clinic")],
      bodyRegionExplanation(region, `Den kliniske betydning følger regionens kar, nerver, fascier, organer og bevægeapparat.`)
    )
  ];
}

const BODY_REGION_MATERIAL_DEFINITIONS = [
  {
    id: "body-regions-face-mouth",
    title: "Ansigt, kæberegioner og mundbund",
    description: "Facialis, parotideomasseterica, infratemporalis og sublingualis.",
    groups: ["face"],
    i18n: {
      ru: { title: "Лицо, челюстные регионы и дно полости рта", description: "Facialis, parotideomasseterica, infratemporalis и sublingualis." },
      ka: { title: "სახე, ყბის რეგიონები და პირის ღრუს ფსკერი", description: "Facialis, parotideomasseterica, infratemporalis და sublingualis." }
    }
  },
  {
    id: "body-regions-neck",
    title: "Halsens regioner og trekanter",
    description: "De fire forreste trekanter, lateralregionen og SCM-regionen.",
    groups: ["neck"],
    i18n: {
      ru: { title: "Регионы и треугольники шеи", description: "Четыре передних треугольника, латеральный регион и область SCM." },
      ka: { title: "კისრის რეგიონები და სამკუთხედები", description: "ოთხი წინა სამკუთხედი, ლატერალური რეგიონი და SCM-ის არე." }
    }
  },
  {
    id: "body-regions-trunk-back",
    title: "Thorax, abdomen og ryg",
    description: "Brystvæg, bugvæg samt nuchal-, vertebral-, scapular- og lumbalregion.",
    groups: ["trunk"],
    i18n: {
      ru: { title: "Грудная клетка, живот и спина", description: "Грудная и брюшная стенки, затылочный, позвоночный, лопаточный и поясничный регионы." },
      ka: { title: "გულმკერდი, მუცელი და ზურგი", description: "გულმკერდისა და მუცლის კედლები, კეფის, ხერხემლის, ბეჭისა და წელის რეგიონები." }
    }
  },
  {
    id: "body-regions-upper-limb",
    title: "Overekstremitetens regioner",
    description: "Overarm, underarm, albue, håndled, håndflade og håndryg.",
    groups: ["upper"],
    i18n: {
      ru: { title: "Регионы верхней конечности", description: "Плечо, предплечье, локоть, запястье, ладонь и тыл кисти." },
      ka: { title: "ზედა კიდურის რეგიონები", description: "მხარი, წინამხარი, იდაყვი, მაჯა, ხელისგული და ხელის ზურგი." }
    }
  },
  {
    id: "body-regions-pelvis-hip",
    title: "Bækken og hofteregioner",
    description: "Regio coxalis, bækkenkaviteten og regio glutealis.",
    groups: ["pelvis"],
    i18n: {
      ru: { title: "Таз и тазобедренные регионы", description: "Regio coxalis, полость таза и regio glutealis." },
      ka: { title: "მენჯისა და თეძოს რეგიონები", description: "Regio coxalis, მენჯის ღრუ და regio glutealis." }
    }
  },
  {
    id: "body-regions-thigh-knee",
    title: "Lår og knæregioner",
    description: "Femoralregionen, knæets for- og bagside samt fossa poplitea.",
    groups: ["knee"],
    i18n: {
      ru: { title: "Регионы бедра и колена", description: "Бедренный регион, передняя и задняя поверхности колена и подколенная ямка." },
      ka: { title: "ბარძაყისა და მუხლის რეგიონები", description: "ბარძაყის რეგიონი, მუხლის წინა და უკანა მხარე და მუხლქვეშა ფოსო." }
    }
  },
  {
    id: "body-regions-leg-foot",
    title: "Underben, ankel og fod",
    description: "Bageste underbensregion, ankelregionen, fodryg og fodsål.",
    groups: ["leg"],
    i18n: {
      ru: { title: "Голень, голеностоп и стопа", description: "Задняя поверхность голени, голеностоп, тыл и подошва стопы." },
      ka: { title: "წვივი, კოჭი და ტერფი", description: "წვივის უკანა რეგიონი, კოჭი, ტერფის ზურგი და ძირი." }
    }
  }
];

function cloneBodyRegionQuestion(question) {
  return { ...question, options: question.options.map((option) => option) };
}

const bodyRegionsFolder = globalThis.QUIZ_FOLDERS?.find((folder) => folder.id === "face-neck-regions");

if (bodyRegionsFolder) {
  BODY_REGION_MATERIAL_DEFINITIONS.forEach((definition) => {
    const facts = BODY_REGION_FACTS.filter((fact) => definition.groups.includes(fact.group));
    bodyRegionsFolder.materials.push({
      id: definition.id,
      title: definition.title,
      description: definition.description,
      i18n: definition.i18n,
      questions: facts.flatMap(buildBodyRegionQuestions)
    });
  });

  bodyRegionsFolder.materials.push({
    id: "body-regions-mixed",
    title: "Blandet test: alle regioner",
    description: "Alle spørgsmål fra dokumentet samlet i én stor repetition.",
    i18n: {
      ru: { title: "Смешанный тест: все регионы", description: "Все вопросы из документа собраны в одном большом повторении." },
      ka: { title: "შერეული ტესტი: ყველა რეგიონი", description: "დოკუმენტის ყველა კითხვა ერთ დიდ გამეორებაშია გაერთიანებული." }
    },
    questions: bodyRegionsFolder.materials.flatMap((material) => material.questions.map(cloneBodyRegionQuestion))
  });
}
