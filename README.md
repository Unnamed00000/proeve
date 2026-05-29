# EKG repetition

Dette er en lille quiz-app til repetition af EKG-stof fra `ECG.docx`.

## Funktioner

- valg af emne;
- spørgsmål med svarmulighederne A, B, C og D;
- knapperne `Forrige side` og `Næste side`;
- forklaring efter hvert valgt svar;
- gemte svar i browseren;
- mobilvenligt layout;
- PWA-filer, så appen kan tilføjes til hjemmeskærmen efter publicering via HTTPS, for eksempel GitHub Pages.

## Sådan redigeres spørgsmål

Åbn `questions.js`.

Et spørgsmål ser sådan ud:

```js
{
  text: "Hvad måler PR-intervallet på et EKG?",
  options: [
    "Tiden fra start af P-takken til start af QRS-komplekset",
    "Tiden fra start af QRS til slutningen af T-takken",
    "Højden af R-takken i millimeter",
    "Afstanden mellem to T-takker"
  ],
  answer: 0,
  explanation: "PR-intervallet beskriver ledningstiden fra atriernes depolarisering starter i P-takken, til ventriklernes depolarisering starter i QRS-komplekset."
}
```

I `answer` bruges disse tal:

- `0` = A;
- `1` = B;
- `2` = C;
- `3` = D.

## GitHub Pages

1. Opret et nyt repository på GitHub.
2. Upload alle filerne fra denne mappe.
3. Gå til `Settings` -> `Pages`.
4. Vælg `Deploy from a branch`.
5. Vælg branch `main` og mappen `/root`.
6. Gem og vent på linket fra GitHub.

Åbn linket på telefonen og vælg `Føj til hjemmeskærm` i browseren.
