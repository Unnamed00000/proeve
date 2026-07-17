# EKG repetition

Quiz-app til repetition af EKG-stof.

## Funktioner

- startsiden viser mapperne `EKG repetition`, `Upper limb`, `Lower limb` og `Head and neck`;
- mappen `EKG repetition` indeholder seks emner;
- mappen `Upper limb` indeholder syv faglige emner, en billedtest uden labels og en blandet test med 264 spørgsmål;
- mappen `Lower limb` indeholder syv faglige emner, en billedtest uden labels og en blandet test med over 280 spørgsmål;
- `Upper limb` og `Lower limb` kan trænes med enten fire svarmuligheder (A-D) eller manuelt indtastede svar;
- hvert emne starter en ny repetition med tilfældig rækkefølge på spørgsmål;
- svarmulighederne A, B, C og D blandes ved hver ny repetition;
- valgte svar gemmes ikke efter lukning;
- knappen `Nulstil` rydder gamle gemte quiz-svar og starter den aktuelle repetition forfra;
- lys og mørk tema gemmes efter lukning;
- sprog gemmes efter lukning;
- appen viser versionsnummer;
- appen viser besked, når en ny version er klar;
- indstillingerne har en knap til tvungen opdatering;
- indstillingerne har lyd og vibration med gemte valg;
- sprog vælges i et separat vindue fra indstillingerne;
- lyd forsøger at aktivere browserens AudioContext efter brugertryk;
- vibration vises som ikke understøttet, hvis browseren ikke tilbyder vibration;
- indstillingerne viser appnavn, version og udvikler nederst;
- interface og quizindhold findes på dansk, russisk og georgisk;
- layoutet er mobilvenligt og kan publiceres som PWA via GitHub Pages.

## Redigering af spørgsmål

Spørgsmålene ligger i `questions.js`, `extra-questions.js`, `upper-limb-questions.js` og `lower-limb-questions.js`.

Strukturen er:

- `QUIZ_FOLDERS` = mapper;
- `materials` = emner inde i en mappe;
- `questions` = spørgsmål inde i et emne.

Svarnummeret i `answer` bruger denne rækkefølge:

- `0` = A;
- `1` = B;
- `2` = C;
- `3` = D.

Appen blander selv svarmulighederne, så `answer` skal altid pege på den rigtige mulighed i den oprindelige liste.

## GitHub Pages

1. Opret et nyt repository på GitHub.
2. Upload alle filerne fra denne mappe.
3. Gå til `Settings` -> `Pages`.
4. Vælg `Deploy from a branch`.
5. Vælg branch `main` og mappen `/root`.
6. Gem og vent på linket fra GitHub.

Åbn linket på telefonen og vælg `Føj til hjemmeskærm` i browseren.
