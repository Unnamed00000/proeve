const QUIZ_MATERIALS = [
  {
    id: "pr-first-degree",
    title: "PR-interval og 1. grads AV-blok",
    description: "Grundlæggende PR-interval, normal ledning og forlænget PR-interval.",
    questions: [
      {
        text: "Hvad måler PR-intervallet på et EKG?",
        options: [
          "Tiden fra start af P-takken til start af QRS-komplekset",
          "Tiden fra start af QRS til slutningen af T-takken",
          "Højden af R-takken i millimeter",
          "Afstanden mellem to T-takker"
        ],
        answer: 0,
        explanation: "PR-intervallet beskriver ledningstiden fra atriernes depolarisering starter i P-takken, til ventriklernes depolarisering starter i QRS-komplekset. Derfor måles det fra begyndelsen af P-takken til begyndelsen af QRS."
      },
      {
        text: "Hvilket EKG-kriterium passer med 1. grads AV-blok?",
        options: [
          "PR-interval under 120 ms",
          "PR-interval over 200 ms",
          "Ingen synlig P-tak",
          "QRS-varighed under 80 ms"
        ],
        answer: 1,
        explanation: "Ved 1. grads AV-blok er impulsen stadig ledt fra atrier til ventrikler, men ledningen er forsinket. Det ses som et PR-interval over 200 ms, svarende til mere end 5 små tern på standard EKG-papir."
      },
      {
        text: "Hvor mange små tern svarer cirka til 200 ms på standard EKG-papir?",
        options: ["2 små tern", "3 små tern", "5 små tern", "10 små tern"],
        answer: 2,
        explanation: "Ved almindelig papirhastighed på 25 mm/s svarer ét lille tern til 40 ms. Fem små tern er derfor 5 x 40 ms = 200 ms."
      },
      {
        text: "Hvad er det typiske forhold mellem P-takker og QRS-komplekser ved 1. grads AV-blok?",
        options: [
          "Alle P-takker efterfølges normalt af et QRS-kompleks",
          "P-takker og QRS-komplekser har ingen relation",
          "Hver anden P-tak blokeres altid",
          "Der findes QRS-komplekser uden P-takker"
        ],
        answer: 0,
        explanation: "1. grads AV-blok er en forsinkelse, ikke en fuld blokering. Derfor bliver hver atrial impuls typisk ledt videre, så hver P-tak efterfølges af et QRS-kompleks, men PR-intervallet er forlænget."
      },
      {
        text: "Hvad er den bedste korte beskrivelse af 1. grads AV-blok?",
        options: [
          "Forsinket AV-ledning uden tabte QRS-komplekser",
          "Pludselige tabte QRS-komplekser uden PR-forlængelse",
          "Total adskillelse mellem P-takker og QRS",
          "Kort PR-interval med deltabølge"
        ],
        answer: 0,
        explanation: "Kernen i 1. grads AV-blok er, at AV-ledningen er langsommere end normalt. Der er ikke tale om, at impulser periodisk mistes; kriteriet er et konstant forlænget PR-interval."
      },
      {
        text: "Hvilket udsagn om PR-intervallet er korrekt?",
        options: [
          "Det starter ved slutningen af P-takken",
          "Det slutter ved slutningen af QRS-komplekset",
          "Det inkluderer AV-ledningstiden",
          "Det bruges kun ved Wolff-Parkinson-White"
        ],
        answer: 2,
        explanation: "PR-intervallet afspejler tiden gennem atrier, AV-knude og His-Purkinje-system frem til ventrikulær aktivering. Derfor er det centralt, når man vurderer AV-blok og præekscitation."
      },
      {
        text: "Hvis PR-intervallet er 240 ms, hvilken vurdering passer bedst?",
        options: [
          "Normalt PR-interval",
          "1. grads AV-blok",
          "Mobitz type II med sikkerhed",
          "3. grads AV-blok med sikkerhed"
        ],
        answer: 1,
        explanation: "240 ms er længere end grænsen på 200 ms. Hvis P-takkerne stadig ledes til QRS-komplekser, passer fundet bedst med 1. grads AV-blok."
      },
      {
        text: "Hvilket fund er ikke typisk for 1. grads AV-blok?",
        options: [
          "PR-interval over 200 ms",
          "Et QRS-kompleks efter hver P-tak",
          "Progressivt kortere PR-interval før et tabt slag",
          "Forsinket AV-ledning"
        ],
        answer: 2,
        explanation: "Progressivt ændrende PR-interval med efterfølgende tabt QRS hører til 2. grads AV-blok Mobitz type I. Ved 1. grads AV-blok er hovedfundet et forlænget PR-interval uden tabte komplekser."
      },
      {
        text: "Hvilken del af EKG'et markerer starten på ventriklernes depolarisering?",
        options: ["P-takken", "PR-segmentet", "QRS-komplekset", "T-takken"],
        answer: 2,
        explanation: "QRS-komplekset repræsenterer ventriklernes depolarisering. Derfor stopper målingen af PR-intervallet ved starten af QRS-komplekset."
      },
      {
        text: "Hvorfor er et PR-interval over 200 ms vigtigt i dette materiale?",
        options: [
          "Det er kriteriet for 1. grads AV-blok",
          "Det beviser altid 3. grads AV-blok",
          "Det viser altid Wolff-Parkinson-White",
          "Det betyder, at QRS altid er bredt"
        ],
        answer: 0,
        explanation: "Materialet angiver 1. grads AV-blok som PR-interval > 200 ms. Fundet skal tolkes sammen med resten af EKG'et, især om P-takkerne stadig efterfølges af QRS-komplekser."
      }
    ]
  },
  {
    id: "second-degree-av-block",
    title: "2. grads AV-blok: Mobitz I og II",
    description: "Progressiv PR-forlængelse, tabte QRS-komplekser og forskellen på Mobitz I og II.",
    questions: [
      {
        text: "Hvad kendetegner 2. grads AV-blok Mobitz type I?",
        options: [
          "Progressiv forlængelse af PR-intervallet indtil et QRS-kompleks falder ud",
          "Konstant kort PR-interval med deltabølge",
          "Ingen relation mellem P-takker og QRS-komplekser",
          "Alle P-takker ledes normalt"
        ],
        answer: 0,
        explanation: "Mobitz type I kaldes også Wenckebach. Det centrale mønster er, at PR-intervallet bliver længere fra slag til slag, indtil en P-tak ikke ledes videre og QRS-komplekset mangler."
      },
      {
        text: "Hvad betyder et 'dropped QRS complex' i forbindelse med AV-blok?",
        options: [
          "En P-tak bliver ikke ledt til ventriklerne",
          "T-takken bliver højere end normalt",
          "PR-intervallet bliver altid kortere end 120 ms",
          "Der opstår altid ventrikelflimren"
        ],
        answer: 0,
        explanation: "Et tabt QRS-kompleks betyder, at en atrial impuls ses som en P-tak, men impulsen når ikke ventriklerne. Derfor kommer der ingen efterfølgende ventrikulær depolarisering."
      },
      {
        text: "Hvad kendetegner 2. grads AV-blok Mobitz type II?",
        options: [
          "Intermitterende ikke-ledte P-takker uden progressiv PR-forlængelse",
          "PR-interval over 200 ms ved alle slag uden tabte QRS",
          "Ingen relation mellem P-takker og QRS-komplekser",
          "Kort PR-interval, deltabølge og bredt QRS"
        ],
        answer: 0,
        explanation: "Ved Mobitz type II kommer der periodisk P-takker, som ikke ledes til ventriklerne. I modsætning til Mobitz I sker det uden den gradvise PR-forlængelse før det tabte QRS."
      },
      {
        text: "Hvordan adskilles Mobitz type I bedst fra Mobitz type II i dette materiale?",
        options: [
          "Mobitz I har progressiv PR-forlængelse; Mobitz II har tabte P-takker uden progressiv PR-forlængelse",
          "Mobitz I har altid kort PR; Mobitz II har altid deltabølge",
          "Mobitz I har ingen P-takker; Mobitz II har ingen QRS-komplekser",
          "Mobitz I er det samme som 3. grads AV-blok"
        ],
        answer: 0,
        explanation: "Forskellen ligger i mønsteret før det manglende QRS-kompleks. Mobitz I viser gradvis PR-forlængelse, mens Mobitz II har intermitterende ikke-ledte P-takker uden progressiv PR-forlængelse."
      },
      {
        text: "Hvilket fund peger mest på Mobitz type I?",
        options: [
          "PR-intervallet bliver længere og længere før et QRS mangler",
          "PR-intervallet er under 120 ms",
          "QRS-varigheden er altid under 80 ms",
          "P-takker og QRS-komplekser er helt uafhængige"
        ],
        answer: 0,
        explanation: "Den progressive forlængelse af PR-intervallet før et tabt QRS-kompleks er netop det klassiske kriterium for Mobitz type I."
      },
      {
        text: "Hvilket fund peger mest på Mobitz type II?",
        options: [
          "En P-tak ledes ikke til ventriklerne, selv om PR-intervallet ikke gradvist forlænges",
          "Alle P-takker har et efterfølgende QRS",
          "PR-intervallet bliver kortere efter hvert slag",
          "Der er deltabølge ved hvert QRS"
        ],
        answer: 0,
        explanation: "Mobitz type II viser pludselige, intermitterende ledningssvigt. P-takken er til stede, men der kommer ikke et QRS-kompleks, og der ses ikke den gradvise PR-forlængelse fra Mobitz I."
      },
      {
        text: "Hvilket udsagn om 2. grads AV-blok er korrekt?",
        options: [
          "Nogle atriale impulser ledes ikke videre til ventriklerne",
          "Alle atriale impulser ledes altid normalt",
          "Der er aldrig P-takker på EKG'et",
          "QRS-komplekserne kommer altid uden relation til P-takker"
        ],
        answer: 0,
        explanation: "2. grads AV-blok betyder, at ledningen fra atrier til ventrikler svigter periodisk. Derfor ses nogle P-takker uden efterfølgende QRS-kompleks."
      },
      {
        text: "Ved Mobitz type I, hvad sker der lige før det tabte QRS-kompleks?",
        options: [
          "PR-intervallet er blevet gradvist længere",
          "PR-intervallet er blevet kortere end 120 ms",
          "P-takkerne forsvinder helt",
          "QRS-komplekset bliver altid smalt"
        ],
        answer: 0,
        explanation: "Materialet beskriver Mobitz type I som progressiv prolongation af PR-intervallet indtil et QRS-kompleks droppes. Den gradvise forlængelse er derfor nøglefundet."
      },
      {
        text: "Hvilken mulighed beskriver bedst en ikke-ledt P-tak?",
        options: [
          "En P-tak uden efterfølgende QRS-kompleks",
          "Et QRS-kompleks uden forudgående elektrisk aktivitet",
          "En T-tak uden ST-segment",
          "En høj R-tak i brystafledningerne"
        ],
        answer: 0,
        explanation: "En ikke-ledt P-tak betyder, at atriet aktiveres, men impulsen ikke passerer videre gennem AV-systemet til ventriklerne. Derfor mangler det efterfølgende QRS-kompleks."
      },
      {
        text: "Hvilket svar passer bedst til teksten 'intermittent non-conducted P waves'?",
        options: [
          "Nogle P-takker ledes ikke videre",
          "Alle P-takker ledes videre",
          "Der findes ingen P-takker",
          "P-takkerne er altid efter QRS"
        ],
        answer: 0,
        explanation: "Intermitterende betyder, at det sker af og til. Non-conducted P waves betyder P-takker, der ikke bliver ledt til ventriklerne og derfor ikke efterfølges af QRS."
      },
      {
        text: "Hvilken diagnose passer bedst, hvis PR-intervallet gradvist forlænges og derefter mangler et QRS?",
        options: [
          "1. grads AV-blok",
          "2. grads AV-blok Mobitz type I",
          "2. grads AV-blok Mobitz type II",
          "Wolff-Parkinson-White"
        ],
        answer: 1,
        explanation: "Progressiv forlængelse af PR-intervallet efterfulgt af et tabt QRS er det mønster, materialet angiver for Mobitz type I."
      },
      {
        text: "Hvilken diagnose passer bedst, hvis der er tabte QRS-komplekser uden progressiv PR-forlængelse?",
        options: [
          "2. grads AV-blok Mobitz type II",
          "1. grads AV-blok",
          "Normal AV-ledning",
          "Kun sinusarytmi"
        ],
        answer: 0,
        explanation: "Mobitz type II defineres i materialet ved intermitterende ikke-ledte P-takker uden progressiv forlængelse af PR-intervallet."
      }
    ]
  },
  {
    id: "third-degree-and-wpw",
    title: "3. grads AV-blok og WPW",
    description: "AV-dissociation, komplet blok og Wolff-Parkinson-White-syndrom.",
    questions: [
      {
        text: "Hvad er EKG-kriteriet for 3. grads AV-blok i materialet?",
        options: [
          "Ingen relation mellem P-takker og QRS-komplekser",
          "PR-interval over 200 ms med 1:1-ledning",
          "Kort PR-interval med deltabølge",
          "Progressiv PR-forlængelse før et tabt QRS"
        ],
        answer: 0,
        explanation: "Ved 3. grads AV-blok er der komplet AV-blok. Atria og ventrikler aktiveres uafhængigt, så P-takkerne har ingen fast relation til QRS-komplekserne."
      },
      {
        text: "Hvad betyder AV-dissociation ved 3. grads AV-blok?",
        options: [
          "P-takker og QRS-komplekser følger hver sin rytme",
          "Alle P-takker ledes langsomt men sikkert videre",
          "QRS-komplekset bliver altid smalt",
          "PR-intervallet er altid under 120 ms"
        ],
        answer: 0,
        explanation: "AV-dissociation betyder, at atrier og ventrikler ikke arbejder i et fast ledningsforhold. P-takkerne optræder uafhængigt af QRS-komplekserne."
      },
      {
        text: "Hvilket fund taler mest imod 3. grads AV-blok?",
        options: [
          "Fast PR-interval og et QRS efter hver P-tak",
          "P-takker uden fast relation til QRS",
          "Uafhængige atriale og ventrikulære rytmer",
          "Manglende sammenhæng mellem P-tak og QRS"
        ],
        answer: 0,
        explanation: "Et fast PR-interval med 1:1-ledning viser, at atriale impulser ledes til ventriklerne. Det passer ikke med komplet AV-blok, hvor relationen mellem P og QRS mangler."
      },
      {
        text: "Hvad kendetegner Wolff-Parkinson-White-syndrom på EKG i materialet?",
        options: [
          "PR-interval < 120 ms, deltabølge og QRS-forlængelse > 110 ms",
          "PR-interval > 200 ms og ingen tabte QRS",
          "Progressiv PR-forlængelse indtil QRS droppes",
          "Ingen relation mellem P-takker og QRS"
        ],
        answer: 0,
        explanation: "Materialet angiver tre EKG-kriterier for WPW: kort PR-interval under 120 ms, deltabølge og forlænget QRS over 110 ms. Kombinationen skyldes præeksitation via en accessorisk ledningsbane."
      },
      {
        text: "Hvad er en deltabølge?",
        options: [
          "En sløret/opadskrånende begyndelse af QRS-komplekset",
          "En ekstra P-tak efter T-takken",
          "En flad T-tak uden ST-segment",
          "Et helt manglende QRS-kompleks"
        ],
        answer: 0,
        explanation: "Deltabølgen er den langsomme, slørede begyndelse af QRS-komplekset ved præeksitation. Den opstår, fordi en del af ventriklen aktiveres tidligt gennem en accessorisk pathway."
      },
      {
        text: "Hvad betyder 'accessory pathway' ved WPW?",
        options: [
          "En ekstra ledningsbane mellem atrier og ventrikler",
          "En ekstra T-tak i hver hjertesyklus",
          "En blokering i sinusknuden",
          "En mekanisk hjerteklap"
        ],
        answer: 0,
        explanation: "En accessorisk pathway er en ekstra elektrisk forbindelse, som kan lede impulser uden om den normale AV-knude. Det giver tidlig ventrikelaktivering og kan forklare kort PR-interval og deltabølge."
      },
      {
        text: "Hvor kort er PR-intervallet typisk ved WPW ifølge materialet?",
        options: ["Under 120 ms", "Over 200 ms", "Præcis 300 ms", "Det kan ikke måles"],
        answer: 0,
        explanation: "Materialet angiver PR-interval < 120 ms som et kriterium for WPW. Det er kort, fordi impulsen kan nå ventriklerne tidligt via den accessoriske ledningsbane."
      },
      {
        text: "Hvilken QRS-varighed nævnes som kriterium ved WPW?",
        options: ["Over 110 ms", "Under 80 ms", "Præcis 40 ms", "Over 300 ms"],
        answer: 0,
        explanation: "Materialet nævner QRS-prolongation > 110 ms. QRS bliver bredere, fordi ventriklerne aktiveres på en unormal og delvist tidlig måde."
      },
      {
        text: "Hvad nævner materialet som ætiologi ved WPW?",
        options: [
          "Genetisk disposition",
          "Altid akut blodprop",
          "Altid infektion i AV-knuden",
          "Kun elektrolytforstyrrelse"
        ],
        answer: 0,
        explanation: "Under ætiologi nævner materialet genetisk disposition. Det betyder, at der kan være en medfødt eller arvelig tendens til den ekstra ledningsbane."
      },
      {
        text: "Hvilken epidemiologi angives for WPW i materialet?",
        options: [
          "3 tilfælde per 1000 individer",
          "3 tilfælde per 100 individer",
          "30 tilfælde per 1000 individer",
          "1 tilfælde per 1 million individer"
        ],
        answer: 0,
        explanation: "Materialet angiver epidemiologien som 3 cases per 1000 individuals. På dansk svarer det til cirka 3 tilfælde per 1000 individer."
      },
      {
        text: "Hvilken kombination passer bedst med WPW og ikke med 1. grads AV-blok?",
        options: [
          "Kort PR-interval og deltabølge",
          "Langt PR-interval uden tabte QRS",
          "Progressiv PR-forlængelse før tabt QRS",
          "Ingen relation mellem P og QRS"
        ],
        answer: 0,
        explanation: "WPW handler om præeksitation og viser typisk kort PR-interval og deltabølge. 1. grads AV-blok viser derimod forlænget PR-interval over 200 ms."
      },
      {
        text: "Hvilken diagnose passer bedst til 'ingen relation mellem P-takker og QRS-komplekser'?",
        options: [
          "3. grads AV-blok",
          "1. grads AV-blok",
          "Mobitz type I",
          "Wolff-Parkinson-White"
        ],
        answer: 0,
        explanation: "Ingen relation mellem P-takker og QRS-komplekser er materialets kriterium for 3. grads AV-blok. Det viser, at atrier og ventrikler ikke er elektrisk koblet gennem normal AV-ledning."
      },
      {
        text: "Hvilket fund passer bedst til præeksitation?",
        options: [
          "Deltabølge og kort PR-interval",
          "PR-interval over 200 ms",
          "Progressivt længere PR-interval",
          "P-takker uden nogen QRS-relation"
        ],
        answer: 0,
        explanation: "Præeksitation betyder, at ventriklerne aktiveres tidligere end normalt. Ved WPW ses det som kort PR-interval og deltabølge i starten af QRS-komplekset."
      },
      {
        text: "Hvilken forskel mellem 3. grads AV-blok og WPW er korrekt?",
        options: [
          "3. grads AV-blok har AV-dissociation; WPW har præeksitation via accessorisk pathway",
          "Begge har altid PR-interval over 200 ms",
          "Begge defineres af progressiv PR-forlængelse",
          "WPW har ingen relation mellem P-takker og QRS-komplekser"
        ],
        answer: 0,
        explanation: "3. grads AV-blok er komplet ledningsblok mellem atrier og ventrikler. WPW er derimod en præeksitationssyndrom, hvor en ekstra ledningsbane aktiverer ventriklerne tidligt."
      }
    ]
  }
];
