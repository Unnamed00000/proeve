const svgImage = (path) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 360"><rect width="900" height="360" fill="#fff7f7"/><path d="M0 40H900M0 80H900M0 120H900M0 160H900M0 200H900M0 240H900M0 280H900M0 320H900M45 0V360M90 0V360M135 0V360M180 0V360M225 0V360M270 0V360M315 0V360M360 0V360M405 0V360M450 0V360M495 0V360M540 0V360M585 0V360M630 0V360M675 0V360M720 0V360M765 0V360M810 0V360M855 0V360" stroke="#f3b0b0" stroke-width="1"/><path d="M0 200H900M225 0V360M450 0V360M675 0V360" stroke="#e07f7f" stroke-width="2"/><path d="${path}" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`)}`;

const ECG_IMAGES = {
  av1: svgImage('M30 215 L90 215 C105 180 125 180 140 215 L230 215 L245 185 L260 85 L280 260 L300 215 L390 215 C405 180 425 180 440 215 L530 215 L545 185 L560 85 L580 260 L600 215 L690 215 C705 180 725 180 740 215 L830 215 L845 185 L860 85 L880 260'),
  mobitz1: svgImage('M30 215 L90 215 C105 180 125 180 140 215 L225 215 L240 185 L255 85 L275 260 L295 215 L385 215 C400 180 420 180 435 215 L550 215 L565 185 L580 85 L600 260 L620 215 L700 215 C715 180 735 180 750 215 L860 215'),
  mobitz2: svgImage('M30 215 L90 215 C105 180 125 180 140 215 L225 215 L240 185 L255 85 L275 260 L295 215 L385 215 C400 180 420 180 435 215 L520 215 L535 185 L550 85 L570 260 L590 215 L690 215 C705 180 725 180 740 215 L860 215'),
  av3: svgImage('M30 215 L90 215 C105 180 125 180 140 215 L210 215 C225 180 245 180 260 215 L330 215 L345 185 L360 85 L380 260 L400 215 L470 215 C485 180 505 180 520 215 L600 215 C615 180 635 180 650 215 L725 215 L740 185 L755 85 L775 260 L795 215 L860 215'),
  wpw: svgImage('M30 215 L115 215 C130 180 150 180 165 215 L210 215 C245 170 270 130 300 85 L325 260 L350 215 L440 215 C470 160 530 160 560 215 L860 215'),
  qrsNormal: svgImage('M30 215 L170 215 C190 178 215 178 235 215 L300 215 L312 178 L330 90 L350 260 L370 215 L520 215 C545 178 570 178 595 215 L660 215 L672 178 L690 90 L710 260 L730 215 L870 215'),
  qrsWide: svgImage('M30 215 L145 215 C170 178 195 178 220 215 L285 215 C315 170 340 118 370 85 L405 260 L450 215 L565 215 C590 178 615 178 640 215 L700 215 C730 170 755 118 785 85 L820 260 L870 215'),
  lvh: svgImage('M30 215 L90 215 C105 178 130 178 145 215 L225 215 L238 178 L255 55 L285 285 L315 215 L405 215 C420 178 445 178 460 215 L540 215 L553 178 L570 55 L600 285 L630 215 L720 215 C735 178 760 178 775 215 L855 215'),
  rbbb: svgImage('M30 215 L100 215 C120 178 145 178 165 215 L220 215 L240 175 L260 92 L290 260 L325 190 L365 225 L430 215 L500 215 C520 178 545 178 565 215 L620 215 L640 175 L660 92 L690 260 L725 190 L765 225 L850 215'),
  lbbb: svgImage('M30 215 L105 215 C125 178 150 178 170 215 L235 215 C270 165 300 120 330 82 L375 272 L430 215 L505 215 C525 178 550 178 570 215 L635 215 C670 165 700 120 730 82 L775 272 L850 215')
};

const EKG_IMAGE_QUESTIONS = {
  id: 'ekg-billeder',
  title: 'EKG-billeder',
  description: 'Træn genkendelse af EKG uden tekst eller svar på selve billedet.',
  questions: [
    {text:'Hvad viser dette EKG?',image:ECG_IMAGES.av1,options:['1. grads AV-blok','WPW','Mobitz type II','Normal sinusrytme'],answer:0,explanation:'Konstant forlænget PR-interval med QRS efter hver P-tak passer bedst med 1. grads AV-blok.'},
    {text:'Hvilken AV-blok passer bedst til billedet?',image:ECG_IMAGES.av1,options:['1. grads AV-blok','2. grads AV-blok type I','3. grads AV-blok','WPW'],answer:0,explanation:'Ved 1. grads AV-blok er PR-intervallet forlænget, men alle impulser ledes videre.'},
    {text:'Hvad er det vigtigste fund i dette billede?',image:ECG_IMAGES.av1,options:['Forlænget PR-interval','Deltabølge','AV-dissociation','Bredt QRS uden P-takker'],answer:0,explanation:'Det centrale fund er et forlænget PR-interval.'},
    {text:'Hvad viser dette EKG?',image:ECG_IMAGES.mobitz1,options:['Mobitz type I','Mobitz type II','WPW','Normal sinusrytme'],answer:0,explanation:'PR-intervallet bliver gradvist længere, indtil et QRS-kompleks bortfalder.'},
    {text:'Hvilket mønster ses på billedet?',image:ECG_IMAGES.mobitz1,options:['Wenckebach-mønster','Kort PR med deltabølge','Komplet AV-dissociation','Normal QRS-depolarisering'],answer:0,explanation:'Wenckebach er et andet navn for Mobitz type I.'},
    {text:'Hvad er korrekt om dette EKG?',image:ECG_IMAGES.mobitz1,options:['PR forlænges progressivt før bortfald af QRS','PR er konstant under 120 ms','P og QRS er helt uafhængige','QRS er altid normalt uden pauser'],answer:0,explanation:'Mobitz type I kendes ved progressiv PR-forlængelse før et manglende QRS.'},
    {text:'Hvad viser dette EKG?',image:ECG_IMAGES.mobitz2,options:['Mobitz type II','Mobitz type I','1. grads AV-blok','WPW'],answer:0,explanation:'Mobitz type II har pludseligt bortfald af QRS uden gradvis PR-forlængelse.'},
    {text:'Hvilket fund passer bedst med billedet?',image:ECG_IMAGES.mobitz2,options:['Ikke-ledt P-tak uden progressiv PR-forlængelse','Deltabølge','Konstant forlænget PR uden bortfald','AV-dissociation'],answer:0,explanation:'En P-tak ledes ikke videre, og PR forlænges ikke gradvist.'},
    {text:'Hvad skal man især være opmærksom på ved dette mønster?',image:ECG_IMAGES.mobitz2,options:['Risiko for progression til højgradig AV-blok','Det er altid normalt','Det skyldes altid WPW','Det viser venstre ventrikelhypertrofi'],answer:0,explanation:'Mobitz type II er mere alvorlig end Mobitz type I og kan progrediere.'},
    {text:'Hvad viser dette EKG?',image:ECG_IMAGES.av3,options:['3. grads AV-blok','1. grads AV-blok','Mobitz type I','WPW'],answer:0,explanation:'P-takker og QRS-komplekser har ingen fast relation, hvilket passer med komplet AV-blok.'},
    {text:'Hvilket begreb passer bedst til billedet?',image:ECG_IMAGES.av3,options:['AV-dissociation','Deltabølge','Forlænget PR med 1:1 overledning','Normal sinusrytme'],answer:0,explanation:'AV-dissociation betyder, at atrier og ventrikler arbejder uafhængigt af hinanden.'},
    {text:'Hvad er korrekt om dette EKG?',image:ECG_IMAGES.av3,options:['P-takker og QRS-komplekser er uafhængige','Alle P-takker ledes normalt','PR er kort og konstant','Der ses kun normal QRS'],answer:0,explanation:'Ved 3. grads AV-blok er der ingen fast sammenhæng mellem P og QRS.'},
    {text:'Hvad viser dette EKG?',image:ECG_IMAGES.wpw,options:['WPW-syndrom','Mobitz type II','3. grads AV-blok','1. grads AV-blok'],answer:0,explanation:'Kort PR-interval og sløret begyndelse af QRS passer med WPW.'},
    {text:'Hvilket fund passer bedst med WPW på billedet?',image:ECG_IMAGES.wpw,options:['Deltabølge','AV-dissociation','Gradvis PR-forlængelse','Ikke-ledt P-tak'],answer:0,explanation:'Deltabølgen skyldes tidlig ventrikelaktivering via accessorisk ledningsbane.'},
    {text:'Hvad er typisk for WPW?',image:ECG_IMAGES.wpw,options:['Kort PR-interval','PR-interval over 200 ms','Ingen relation mellem P og QRS','Bortfald af QRS efter lang PR'],answer:0,explanation:'WPW er typisk forbundet med kort PR og deltabølge.'},
    {text:'Hvad viser dette QRS-kompleks?',image:ECG_IMAGES.qrsNormal,options:['Normalt smalt QRS','Venstre grenblok','Højre grenblok','Ventrikulær rytme'],answer:0,explanation:'Et smalt QRS taler for normal ventrikulær depolarisering via ledningssystemet.'},
    {text:'Hvad er korrekt om dette QRS?',image:ECG_IMAGES.qrsNormal,options:['QRS er smalt','QRS er tydeligt bredt','Det viser WPW sikkert','Det viser komplet AV-blok'],answer:0,explanation:'Billedet viser et smalt QRS-kompleks.'},
    {text:'Hvad viser dette QRS-kompleks?',image:ECG_IMAGES.qrsWide,options:['Bredt QRS-kompleks','Normalt smalt QRS','Kun P-takker uden QRS','Kort PR alene'],answer:0,explanation:'Et bredt QRS kan ses ved grenblok, ventrikulær rytme eller præexcitation.'},
    {text:'Hvad tyder et bredt QRS mest på?',image:ECG_IMAGES.qrsWide,options:['Forsinket ventrikulær depolarisering','Normal AV-overledning alene','Kun atrial aktivitet','Kortere ventrikulær aktivering'],answer:0,explanation:'Bredt QRS tyder på forsinket aktivering af ventriklerne.'},
    {text:'Hvad viser dette EKG-mønster?',image:ECG_IMAGES.lvh,options:['Venstre ventrikelhypertrofi','WPW','Mobitz type I','Højre grenblok'],answer:0,explanation:'Meget høje QRS-udslag kan passe med venstre ventrikelhypertrofi.'},
    {text:'Hvad kan høje R/S-udslag i prækordiale afledninger tyde på?',image:ECG_IMAGES.lvh,options:['Venstre ventrikelhypertrofi','3. grads AV-blok','Mobitz type II','Normal PR-forlængelse'],answer:0,explanation:'Store voltager kan bruges som tegn på venstre ventrikelhypertrofi.'},
    {text:'Hvilket kriterium forbindes ofte med venstre ventrikelhypertrofi?',image:ECG_IMAGES.lvh,options:['Sokolow-Lyon kriteriet','Wenckebach-mønster','Deltabølge-kriteriet','AV-dissociation'],answer:0,explanation:'Sokolow-Lyon er et klassisk spændingskriterium for LVH.'},
    {text:'Hvad viser dette EKG?',image:ECG_IMAGES.rbbb,options:['Højre grenblok','Venstre grenblok','WPW','1. grads AV-blok'],answer:0,explanation:'Mønsteret passer bedst med højre grenblok.'},
    {text:'Hvilken grenblok passer bedst til billedet?',image:ECG_IMAGES.rbbb,options:['Højre grenblok','Venstre grenblok','Ingen grenblok','3. grads AV-blok'],answer:0,explanation:'RBBB giver forsinket aktivering af højre ventrikel og bredere QRS.'},
    {text:'Hvad er typisk ved grenblok?',image:ECG_IMAGES.rbbb,options:['Bredere QRS-kompleks','Kortere PR alene','Ingen QRS-komplekser','Kun delta-bølge'],answer:0,explanation:'Grenblok giver ofte bredt QRS, fordi ventriklerne aktiveres forsinket.'},
    {text:'Hvad viser dette EKG?',image:ECG_IMAGES.lbbb,options:['Venstre grenblok','Højre grenblok','WPW','Mobitz type I'],answer:0,explanation:'Mønsteret passer bedst med venstre grenblok.'},
    {text:'Hvilken grenblok passer bedst til billedet?',image:ECG_IMAGES.lbbb,options:['Venstre grenblok','Højre grenblok','1. grads AV-blok','Normal sinusrytme'],answer:0,explanation:'LBBB skyldes forsinket aktivering af venstre ventrikel.'},
    {text:'Hvad er vigtigt ved venstre grenblok?',image:ECG_IMAGES.lbbb,options:['QRS er bredt og aktiveringen af venstre ventrikel er forsinket','PR bliver altid kort','Der ses altid komplet AV-dissociation','Det er det samme som WPW'],answer:0,explanation:'Venstre grenblok giver bredt QRS og ændret ventrikulær aktivering.'},
    {text:'Hvad viser billedet mest sandsynligt?',image:ECG_IMAGES.wpw,options:['Præexcitation','Komplet AV-blok','Mobitz type II','Kun normal sinusrytme'],answer:0,explanation:'WPW er en præexcitationstilstand via accessorisk ledningsbane.'},
    {text:'Hvilket billede ville du beskrive som mest akut alvorligt blandt AV-blokke?',image:ECG_IMAGES.av3,options:['3. grads AV-blok','1. grads AV-blok','Normal smal QRS','Isoleret kort PR'],answer:0,explanation:'3. grads AV-blok er komplet blok og er normalt mere alvorlig end 1. grads AV-blok.'}
  ]
};

EKG_IMAGE_QUESTIONS.i18n = {
  ru: {
    title: "EKG-картинки",
    description: "Тренировка распознавания EKG по картинкам без подсказок на самом изображении."
  },
  ka: {
    title: "EKG სურათები",
    description: "EKG-ის ამოცნობის ვარჯიში სურათებით, ტექსტური მინიშნებების გარეშე."
  }
};

function cloneQuestion(question) {
  return {
    ...question,
    image: question.image || "",
    options: question.options.map((option) => {
      if (option && typeof option === "object") {
        return { ...option };
      }

      return option;
    })
  };
}

const ekgFolder = globalThis.QUIZ_FOLDERS?.find((folder) => folder.id === "ekg-repetition");

if (ekgFolder && !ekgFolder.materials.some((material) => material.id === EKG_IMAGE_QUESTIONS.id)) {
  ekgFolder.materials.push(EKG_IMAGE_QUESTIONS);
}

if (ekgFolder && !ekgFolder.materials.some((material) => material.id === "blandet-ekg-test")) {
  ekgFolder.materials.push({
    id: "blandet-ekg-test",
    title: "Blandet EKG Test",
    description: "Alle EKG-spørgsmål samlet i én blandet test. Spørgsmål og svar blandes ved hver start.",
    i18n: {
      ru: {
        title: "Смешанный EKG тест",
        description: "Все EKG-вопросы собраны в один смешанный тест. Вопросы и ответы перемешиваются при каждом запуске."
      },
      ka: {
        title: "შერეული EKG ტესტი",
        description: "ყველა EKG კითხვა ერთ შერეულ ტესტშია. კითხვები და პასუხები ყოველი დაწყებისას ირევა."
      }
    },
    questions: ekgFolder.materials.flatMap((material) => material.questions.map(cloneQuestion))
  });
}
