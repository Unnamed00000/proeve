const EKG_IMAGE_QUESTIONS = {
  id: "ekg-billeder",
  title: "EKG-billeder",
  description: "Træn genkendelse af AV-blokke og WPW ud fra EKG-billeder og mønstre.",
  questions: [
    {
      text: "På et EKG-billede ses et PR-interval over 200 ms, men hver P-tak efterfølges af et QRS-kompleks. Hvilken diagnose passer bedst?",
      options: ["1. grads AV-blok", "Mobitz type I", "3. grads AV-blok", "WPW"],
      answer: 0,
      explanation: "1. grads AV-blok viser forlænget PR-interval over 200 ms, men der er stadig et QRS-kompleks efter hver P-tak."
    },
    {
      text: "På et EKG-billede bliver PR-intervallet længere og længere, indtil et QRS-kompleks falder ud. Hvad kaldes dette?",
      options: ["Mobitz type I", "Mobitz type II", "1. grads AV-blok", "WPW"],
      answer: 0,
      explanation: "Mobitz type I, også kaldet Wenckebach, kendetegnes ved progressiv PR-forlængelse før et tabt QRS-kompleks."
    },
    {
      text: "På et EKG-billede ses en P-tak uden efterfølgende QRS-kompleks, men uden progressiv PR-forlængelse. Hvilken diagnose passer bedst?",
      options: ["Mobitz type II", "Mobitz type I", "1. grads AV-blok", "Sinusrytme"],
      answer: 0,
      explanation: "Mobitz type II har intermitterende ikke-ledte P-takker uden gradvis PR-forlængelse."
    },
    {
      text: "På et EKG-billede ses ingen fast relation mellem P-takker og QRS-komplekser. Hvad tyder det mest på?",
      options: ["3. grads AV-blok", "1. grads AV-blok", "WPW", "Mobitz type I"],
      answer: 0,
      explanation: "Ved 3. grads AV-blok er atrier og ventrikler elektrisk adskilt, så P-takker og QRS-komplekser har ingen fast relation."
    },
    {
      text: "På et EKG-billede ses kort PR-interval og deltabølge. Hvilken tilstand passer bedst?",
      options: ["WPW", "1. grads AV-blok", "Mobitz type II", "3. grads AV-blok"],
      answer: 0,
      explanation: "WPW kendetegnes blandt andet ved kort PR-interval og deltabølge på grund af en accessorisk ledningsbane."
    },
    {
      text: "Hvilket fund på et EKG-billede er mest karakteristisk for WPW?",
      options: ["Deltabølge", "PR-interval over 200 ms", "Progressiv PR-forlængelse", "Ingen relation mellem P og QRS"],
      answer: 0,
      explanation: "Deltabølgen er et vigtigt visuelt tegn ved WPW og viser tidlig aktivering af ventriklerne."
    },
    {
      text: "Hvis billedet viser PR-interval under 120 ms sammen med bredere QRS-kompleks, hvad skal man især tænke på?",
      options: ["WPW", "1. grads AV-blok", "Mobitz type I", "Mobitz type II"],
      answer: 0,
      explanation: "I materialet beskrives WPW med PR-interval under 120 ms, deltabølge og QRS-forlængelse over 110 ms."
    },
    {
      text: "Hvilket EKG-billede passer bedst med 1. grads AV-blok?",
      options: ["Et billede med konstant forlænget PR-interval", "Et billede med deltabølge", "Et billede uden relation mellem P og QRS", "Et billede med pludselige tabte QRS uden PR-forlængelse"],
      answer: 0,
      explanation: "1. grads AV-blok viser et konstant forlænget PR-interval uden tabte QRS-komplekser."
    },
    {
      text: "Hvilket EKG-billede passer bedst med Mobitz type I?",
      options: ["Et billede hvor PR-intervallet gradvist bliver længere før et tabt QRS", "Et billede med kort PR og deltabølge", "Et billede hvor P og QRS er helt uafhængige", "Et billede med konstant PR over 200 ms uden tabte slag"],
      answer: 0,
      explanation: "Mobitz type I genkendes visuelt ved gradvis PR-forlængelse, indtil et QRS-kompleks mangler."
    },
    {
      text: "Hvilket EKG-billede passer bedst med Mobitz type II?",
      options: ["Et billede med intermitterende ikke-ledte P-takker uden progressiv PR-forlængelse", "Et billede med gradvis PR-forlængelse", "Et billede med konstant PR over 200 ms", "Et billede med deltabølge"],
      answer: 0,
      explanation: "Mobitz type II har tabte QRS-komplekser, men ikke den gradvise PR-forlængelse, som ses ved Mobitz type I."
    },
    {
      text: "Hvilket EKG-billede passer bedst med 3. grads AV-blok?",
      options: ["Et billede hvor P-takker og QRS-komplekser går uafhængigt af hinanden", "Et billede med kort PR-interval", "Et billede med kun forlænget PR-interval", "Et billede med deltabølge"],
      answer: 0,
      explanation: "3. grads AV-blok er komplet AV-blok med AV-dissociation, så P-takker og QRS-komplekser har ingen fast sammenhæng."
    },
    {
      text: "På et EKG-billede er P-takken markeret, men der kommer ikke QRS bagefter. Hvad beskriver dette bedst?",
      options: ["Ikke-ledt P-tak", "Deltabølge", "Normal AV-ledning", "Forkortet PR-interval"],
      answer: 0,
      explanation: "En ikke-ledt P-tak betyder, at atriet aktiveres, men impulsen ikke ledes videre til ventriklerne, så QRS mangler."
    },
    {
      text: "Hvilket fund er mest visuelt vigtigt, når man skal skelne Mobitz I fra Mobitz II?",
      options: ["Om PR-intervallet gradvist forlænges før det tabte QRS", "Om T-takken er positiv", "Om R-takken er høj", "Om QRS altid er smalt"],
      answer: 0,
      explanation: "Det afgørende visuelle skel er, om PR-intervallet bliver længere og længere før det tabte QRS. Det taler for Mobitz I."
    },
    {
      text: "På et billede med WPW står der 'accessory pathway'. Hvad betyder det i denne sammenhæng?",
      options: ["En ekstra ledningsbane mellem atrier og ventrikler", "En total blokering i AV-knuden", "En normal forsinkelse i AV-knuden", "En manglende P-tak"],
      answer: 0,
      explanation: "WPW skyldes en accessorisk ledningsbane, som kan aktivere ventriklerne tidligere end normalt."
    },
    {
      text: "Hvad er den mest sandsynlige diagnose, hvis EKG-billedet viser PR-interval > 200 ms og ingen tabte QRS-komplekser?",
      options: ["1. grads AV-blok", "Mobitz type I", "Mobitz type II", "WPW"],
      answer: 0,
      explanation: "Forlænget PR-interval uden tabte QRS-komplekser passer bedst med 1. grads AV-blok."
    },
    {
      text: "Hvad er den mest sandsynlige diagnose, hvis EKG-billedet viser deltabølge og PR-interval < 120 ms?",
      options: ["WPW", "3. grads AV-blok", "Mobitz type I", "1. grads AV-blok"],
      answer: 0,
      explanation: "Kort PR-interval sammen med deltabølge er klassisk for WPW."
    },
    {
      text: "Hvad er den mest sandsynlige diagnose, hvis EKG-billedet viser progressiv PR-forlængelse og derefter en pause uden QRS?",
      options: ["Mobitz type I", "Mobitz type II", "WPW", "1. grads AV-blok"],
      answer: 0,
      explanation: "Progressiv PR-forlængelse efterfulgt af tabt QRS-kompleks er Mobitz type I."
    },
    {
      text: "Hvad er den mest sandsynlige diagnose, hvis EKG-billedet viser flere P-takker end QRS-komplekser uden fast sammenhæng?",
      options: ["3. grads AV-blok", "1. grads AV-blok", "WPW", "Normal sinusrytme"],
      answer: 0,
      explanation: "Når P-takker og QRS-komplekser ikke har fast relation, passer det med 3. grads AV-blok."
    },
    {
      text: "Hvilket billede ville bedst vise 'no relationship between P waves and QRS complexes'?",
      options: ["3. grads AV-blok", "1. grads AV-blok", "Mobitz type I", "WPW"],
      answer: 0,
      explanation: "Udtrykket 'no relationship between P waves and QRS complexes' beskriver komplet AV-blok, altså 3. grads AV-blok."
    },
    {
      text: "Hvilket billede ville bedst vise 'progressive prolongation of the PR interval until a QRS complex is dropped'?",
      options: ["Mobitz type I", "Mobitz type II", "WPW", "3. grads AV-blok"],
      answer: 0,
      explanation: "Denne formulering beskriver Mobitz type I."
    }
  ]
};

function cloneQuestion(question) {
  return {
    text: question.text,
    options: [...question.options],
    answer: question.answer,
    explanation: question.explanation
  };
}

QUIZ_MATERIALS.push(EKG_IMAGE_QUESTIONS);

QUIZ_MATERIALS.push({
  id: "blandet-ekg-test",
  title: "Blandet EKG Test",
  description: "Alle EKG-spørgsmål samlet i én blandet test. Spørgsmål og svar blandes ved hver start.",
  questions: QUIZ_MATERIALS.flatMap((material) => material.questions.map(cloneQuestion))
});
