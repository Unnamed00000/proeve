function l10n(da, ru, ka) {
  return {
    text: da,
    i18n: {
      ru: { text: ru },
      ka: { text: ka }
    }
  };
}

function question(text, ruText, kaText, options, answer, explanation, ruExplanation, kaExplanation) {
  return {
    text,
    options,
    answer,
    explanation,
    i18n: {
      ru: { text: ruText, explanation: ruExplanation },
      ka: { text: kaText, explanation: kaExplanation }
    }
  };
}

const QUIZ_FOLDERS = [
  {
    id: "ekg-repetition",
    title: "EKG repetition",
    description: "PR-interval, AV-blok og Wolff-Parkinson-White.",
    i18n: {
      ru: {
        title: "EKG repetition",
        description: "PR-интервал, AV-блокады и синдром Wolff-Parkinson-White."
      },
      ka: {
        title: "EKG repetition",
        description: "PR ინტერვალი, AV ბლოკადა და Wolff-Parkinson-White."
      }
    },
    materials: [
      {
        id: "pr-first-degree",
        title: "PR-interval og 1. grads AV-blok",
        description: "Grundlæggende PR-interval, normal ledning og forlænget PR-interval.",
        i18n: {
          ru: {
            title: "PR-интервал и AV-блокада I степени",
            description: "Основы PR-интервала, нормального проведения и удлинённого PR-интервала."
          },
          ka: {
            title: "PR ინტერვალი და I ხარისხის AV ბლოკადა",
            description: "PR ინტერვალის, ნორმალური გამტარობის და გახანგრძლივებული PR ინტერვალის საფუძვლები."
          }
        },
        questions: [
          question(
            "Hvad måler PR-intervallet på et EKG?",
            "Что измеряет PR-интервал на ЭКГ?",
            "რას ზომავს PR ინტერვალი ეკგ-ზე?",
            [
              l10n("Tiden fra start af P-takken til start af QRS-komplekset", "Время от начала зубца P до начала комплекса QRS", "დრო P ტალღის დასაწყისიდან QRS კომპლექსის დასაწყისამდე"),
              l10n("Tiden fra start af QRS til slutningen af T-takken", "Время от начала QRS до конца зубца T", "დრო QRS-ის დასაწყისიდან T ტალღის ბოლომდე"),
              l10n("Højden af R-takken i millimeter", "Высоту зубца R в миллиметрах", "R ტალღის სიმაღლეს მილიმეტრებში"),
              l10n("Afstanden mellem to T-takker", "Расстояние между двумя зубцами T", "მანძილს ორ T ტალღას შორის")
            ],
            0,
            "PR-intervallet beskriver ledningstiden fra atriernes depolarisering starter i P-takken, til ventriklernes depolarisering starter i QRS-komplekset.",
            "PR-интервал показывает время проведения от начала деполяризации предсердий в зубце P до начала деполяризации желудочков в комплексе QRS.",
            "PR ინტერვალი აჩვენებს გამტარობის დროს წინაგულების დეპოლარიზაციის დაწყებიდან P ტალღაში პარკუჭების დეპოლარიზაციის დაწყებამდე QRS კომპლექსში."
          ),
          question(
            "Hvilket EKG-kriterium passer med 1. grads AV-blok?",
            "Какой ЭКГ-критерий соответствует AV-блокаде I степени?",
            "რომელი ეკგ კრიტერიუმი შეესაბამება I ხარისხის AV ბლოკადას?",
            [
              l10n("PR-interval under 120 ms", "PR-интервал меньше 120 мс", "PR ინტერვალი 120 ms-ზე ნაკლები"),
              l10n("PR-interval over 200 ms", "PR-интервал больше 200 мс", "PR ინტერვალი 200 ms-ზე მეტი"),
              l10n("Ingen synlig P-tak", "Нет видимого зубца P", "P ტალღა არ ჩანს"),
              l10n("QRS-varighed under 80 ms", "Длительность QRS меньше 80 мс", "QRS ხანგრძლივობა 80 ms-ზე ნაკლები")
            ],
            1,
            "Ved 1. grads AV-blok er impulsen stadig ledt til ventriklerne, men ledningen er forsinket. Derfor ses PR-interval over 200 ms.",
            "При AV-блокаде I степени импульс всё ещё проводится к желудочкам, но проведение замедлено. Поэтому PR-интервал становится больше 200 мс.",
            "I ხარისხის AV ბლოკადის დროს იმპულსი პარკუჭებამდე მაინც მიდის, მაგრამ გამტარობა ნელდება. ამიტომ PR ინტერვალი 200 ms-ზე მეტია."
          ),
          question(
            "Hvor mange små tern svarer cirka til 200 ms på standard EKG-papir?",
            "Сколько маленьких клеток примерно соответствует 200 мс на стандартной ЭКГ-бумаге?",
            "რამდენ პატარა უჯრას შეესაბამება დაახლოებით 200 ms სტანდარტულ ეკგ ქაღალდზე?",
            [
              l10n("2 små tern", "2 маленькие клетки", "2 პატარა უჯრა"),
              l10n("3 små tern", "3 маленькие клетки", "3 პატარა უჯრა"),
              l10n("5 små tern", "5 маленьких клеток", "5 პატარა უჯრა"),
              l10n("10 små tern", "10 маленьких клеток", "10 პატარა უჯრა")
            ],
            2,
            "Ved papirhastighed 25 mm/s svarer ét lille tern til 40 ms. Fem små tern giver 200 ms.",
            "При скорости бумаги 25 мм/с одна маленькая клетка равна 40 мс. Пять маленьких клеток дают 200 мс.",
            "25 mm/s ქაღალდის სიჩქარეზე ერთი პატარა უჯრა 40 ms-ს უდრის. ხუთი პატარა უჯრა არის 200 ms."
          ),
          question(
            "Hvad er det typiske forhold mellem P-takker og QRS-komplekser ved 1. grads AV-blok?",
            "Какое типичное соотношение между зубцами P и комплексами QRS при AV-блокаде I степени?",
            "როგორია P ტალღებისა და QRS კომპლექსების ტიპური კავშირი I ხარისხის AV ბლოკადის დროს?",
            [
              l10n("Alle P-takker efterfølges normalt af et QRS-kompleks", "Каждый зубец P обычно сопровождается комплексом QRS", "ყველა P ტალღას ჩვეულებრივ მოჰყვება QRS კომპლექსი"),
              l10n("P-takker og QRS-komplekser har ingen relation", "Зубцы P и комплексы QRS не связаны", "P ტალღებსა და QRS კომპლექსებს კავშირი არ აქვთ"),
              l10n("Hver anden P-tak blokeres altid", "Каждый второй зубец P всегда блокируется", "ყოველი მეორე P ტალღა ყოველთვის იბლოკება"),
              l10n("Der findes QRS-komplekser uden P-takker", "Есть комплексы QRS без зубцов P", "არის QRS კომპლექსები P ტალღების გარეშე")
            ],
            0,
            "1. grads AV-blok er en forsinkelse, ikke en fuld blokering. Derfor ledes P-takkerne videre, men PR-intervallet er forlænget.",
            "AV-блокада I степени — это задержка, а не полная блокада. Поэтому зубцы P проводятся дальше, но PR-интервал удлинён.",
            "I ხარისხის AV ბლოკადა არის დაყოვნება და არა სრული ბლოკირება. ამიტომ P ტალღები ტარდება, მაგრამ PR ინტერვალი გახანგრძლივებულია."
          ),
          question(
            "Hvad er den bedste korte beskrivelse af 1. grads AV-blok?",
            "Какое краткое описание лучше всего подходит для AV-блокады I степени?",
            "რომელი მოკლე აღწერა შეესაბამება I ხარისხის AV ბლოკადას?",
            [
              l10n("Forsinket AV-ledning uden tabte QRS-komplekser", "Замедленное AV-проведение без выпадения QRS-комплексов", "დაგვიანებული AV გამტარობა QRS კომპლექსების დაკარგვის გარეშე"),
              l10n("Pludselige tabte QRS-komplekser uden PR-forlængelse", "Внезапное выпадение QRS без удлинения PR", "QRS-ის უეცარი დაკარგვა PR-ის გახანგრძლივების გარეშე"),
              l10n("Total adskillelse mellem P-takker og QRS", "Полное разобщение зубцов P и QRS", "P ტალღებისა და QRS-ის სრული განცალკევება"),
              l10n("Kort PR-interval med deltabølge", "Короткий PR-интервал с дельта-волной", "მოკლე PR ინტერვალი დელტა ტალღით")
            ],
            0,
            "Kernen er langsommere AV-ledning. Impulserne mistes ikke periodisk; PR-intervallet er konstant forlænget.",
            "Суть — замедленное AV-проведение. Импульсы не выпадают периодически; PR-интервал стабильно удлинён.",
            "მთავარია შენელებული AV გამტარობა. იმპულსები პერიოდულად არ იკარგება; PR ინტერვალი მუდმივად გახანგრძლივებულია."
          ),
          question(
            "Hvilket udsagn om PR-intervallet er korrekt?",
            "Какое утверждение о PR-интервале верно?",
            "რომელი განცხადებაა სწორი PR ინტერვალის შესახებ?",
            [
              l10n("Det starter ved slutningen af P-takken", "Он начинается в конце зубца P", "ის იწყება P ტალღის ბოლოს"),
              l10n("Det slutter ved slutningen af QRS-komplekset", "Он заканчивается в конце комплекса QRS", "ის მთავრდება QRS კომპლექსის ბოლოს"),
              l10n("Det inkluderer AV-ledningstiden", "Он включает время AV-проведения", "ის მოიცავს AV გამტარობის დროს"),
              l10n("Det bruges kun ved Wolff-Parkinson-White", "Он используется только при Wolff-Parkinson-White", "ის გამოიყენება მხოლოდ Wolff-Parkinson-White-ის დროს")
            ],
            2,
            "PR-intervallet afspejler tiden gennem atrier, AV-knude og His-Purkinje-system frem til ventrikulær aktivering.",
            "PR-интервал отражает время прохождения через предсердия, AV-узел и систему Гиса-Пуркинье до активации желудочков.",
            "PR ინტერვალი ასახავს დროს წინაგულებიდან, AV კვანძიდან და His-Purkinje სისტემიდან პარკუჭების აქტივაციამდე."
          ),
          question(
            "Hvis PR-intervallet er 240 ms, hvilken vurdering passer bedst?",
            "Если PR-интервал равен 240 мс, какая оценка подходит лучше всего?",
            "თუ PR ინტერვალი 240 ms-ია, რომელი შეფასებაა ყველაზე შესაფერისი?",
            [
              l10n("Normalt PR-interval", "Нормальный PR-интервал", "ნორმალური PR ინტერვალი"),
              l10n("1. grads AV-blok", "AV-блокада I степени", "I ხარისხის AV ბლოკადა"),
              l10n("Mobitz type II med sikkerhed", "Точно Mobitz II", "აუცილებლად Mobitz II"),
              l10n("3. grads AV-blok med sikkerhed", "Точно AV-блокада III степени", "აუცილებლად III ხარისხის AV ბლოკადა")
            ],
            1,
            "240 ms er længere end grænsen på 200 ms. Hvis P-takkerne stadig ledes til QRS, passer det bedst med 1. grads AV-blok.",
            "240 мс больше границы 200 мс. Если зубцы P всё ещё проводятся к QRS, это лучше всего соответствует AV-блокаде I степени.",
            "240 ms 200 ms-ის ზღვარზე მეტია. თუ P ტალღები მაინც ტარდება QRS-მდე, ეს ყველაზე მეტად I ხარისხის AV ბლოკადას შეესაბამება."
          ),
          question(
            "Hvilket fund er ikke typisk for 1. grads AV-blok?",
            "Какой признак не типичен для AV-блокады I степени?",
            "რომელი ნიშანი არ არის ტიპური I ხარისხის AV ბლოკადისთვის?",
            [
              l10n("PR-interval over 200 ms", "PR-интервал больше 200 мс", "PR ინტერვალი 200 ms-ზე მეტი"),
              l10n("Et QRS-kompleks efter hver P-tak", "Комплекс QRS после каждого зубца P", "QRS კომპლექსი ყოველი P ტალღის შემდეგ"),
              l10n("Progressivt kortere PR-interval før et tabt slag", "Постепенно укороченный PR перед выпадением комплекса", "დათმობილი კომპლექსის წინ თანდათან მოკლებული PR ინტერვალი"),
              l10n("Forsinket AV-ledning", "Замедленное AV-проведение", "დაგვიანებული AV გამტარობა")
            ],
            2,
            "Progressive ændringer før et tabt QRS hører til 2. grads AV-blok. 1. grads AV-blok har forlænget PR uden tabte komplekser.",
            "Прогрессивные изменения перед выпадением QRS относятся к AV-блокаде II степени. При I степени PR удлинён, но комплексы не выпадают.",
            "QRS-ის დაკარგვამდე პროგრესული ცვლილებები II ხარისხის AV ბლოკადას ეკუთვნის. I ხარისხის დროს PR გახანგრძლივებულია, მაგრამ კომპლექსები არ იკარგება."
          ),
          question(
            "Hvilken del af EKG'et markerer starten på ventriklernes depolarisering?",
            "Какая часть ЭКГ обозначает начало деполяризации желудочков?",
            "ეკგ-ის რომელი ნაწილი აღნიშნავს პარკუჭების დეპოლარიზაციის დასაწყისს?",
            [
              l10n("P-takken", "Зубец P", "P ტალღა"),
              l10n("PR-segmentet", "PR-сегмент", "PR სეგმენტი"),
              l10n("QRS-komplekset", "Комплекс QRS", "QRS კომპლექსი"),
              l10n("T-takken", "Зубец T", "T ტალღა")
            ],
            2,
            "QRS-komplekset repræsenterer ventriklernes depolarisering, og PR-målingen stopper ved starten af QRS.",
            "Комплекс QRS отражает деполяризацию желудочков, поэтому измерение PR заканчивается в начале QRS.",
            "QRS კომპლექსი პარკუჭების დეპოლარიზაციას ასახავს, ამიტომ PR-ის გაზომვა QRS-ის დასაწყისში მთავრდება."
          ),
          question(
            "Hvorfor er et PR-interval over 200 ms vigtigt i dette materiale?",
            "Почему PR-интервал больше 200 мс важен в этом материале?",
            "რატომ არის PR ინტერვალი 200 ms-ზე მეტი მნიშვნელოვანი ამ მასალაში?",
            [
              l10n("Det er kriteriet for 1. grads AV-blok", "Это критерий AV-блокады I степени", "ეს არის I ხარისხის AV ბლოკადის კრიტერიუმი"),
              l10n("Det beviser altid 3. grads AV-blok", "Это всегда доказывает AV-блокаду III степени", "ეს ყოველთვის ამტკიცებს III ხარისხის AV ბლოკადას"),
              l10n("Det viser altid Wolff-Parkinson-White", "Это всегда показывает Wolff-Parkinson-White", "ეს ყოველთვის Wolff-Parkinson-White-ს აჩვენებს"),
              l10n("Det betyder, at QRS altid er bredt", "Это означает, что QRS всегда широкий", "ეს ნიშნავს, რომ QRS ყოველთვის განიერია")
            ],
            0,
            "Materialet angiver 1. grads AV-blok som PR-interval > 200 ms. Fundet skal vurderes sammen med P-QRS-forholdet.",
            "В материале AV-блокада I степени указана как PR-интервал > 200 мс. Признак нужно оценивать вместе с отношением P и QRS.",
            "მასალაში I ხარისხის AV ბლოკადა მითითებულია როგორც PR ინტერვალი > 200 ms. ნიშანი უნდა შეფასდეს P-QRS კავშირთან ერთად."
          )
        ]
      },
      {
        id: "second-degree-av-block",
        title: "2. grads AV-blok: Mobitz I og II",
        description: "Progressiv PR-forlængelse, tabte QRS-komplekser og forskellen på Mobitz I og II.",
        i18n: {
          ru: {
            title: "AV-блокада II степени: Mobitz I и II",
            description: "Прогрессивное удлинение PR, выпадение QRS и различия между Mobitz I и II."
          },
          ka: {
            title: "II ხარისხის AV ბლოკადა: Mobitz I და II",
            description: "PR-ის პროგრესული გახანგრძლივება, QRS-ის დაკარგვა და განსხვავება Mobitz I-სა და II-ს შორის."
          }
        },
        questions: [
          question("Hvad kendetegner 2. grads AV-blok Mobitz type I?", "Что характерно для AV-блокады II степени Mobitz I?", "რა ახასიათებს II ხარისხის AV ბლოკადას Mobitz I?", [l10n("Progressiv forlængelse af PR-intervallet indtil et QRS-kompleks falder ud", "Постепенное удлинение PR-интервала до выпадения комплекса QRS", "PR ინტერვალის თანდათან გახანგრძლივება QRS კომპლექსის დაკარგვამდე"), l10n("Konstant kort PR-interval med deltabølge", "Постоянно короткий PR-интервал с дельта-волной", "მუდმივად მოკლე PR ინტერვალი დელტა ტალღით"), l10n("Ingen relation mellem P-takker og QRS-komplekser", "Нет связи между зубцами P и комплексами QRS", "P ტალღებსა და QRS კომპლექსებს შორის კავშირი არ არის"), l10n("Alle P-takker ledes normalt", "Все зубцы P проводятся нормально", "ყველა P ტალღა ნორმალურად ტარდება")], 0, "Mobitz I kaldes også Wenckebach. PR-intervallet bliver længere fra slag til slag, indtil en P-tak ikke ledes videre.", "Mobitz I также называют Wenckebach. PR-интервал удлиняется от удара к удару, пока один зубец P не проводится дальше.", "Mobitz I-ს Wenckebach-საც უწოდებენ. PR ინტერვალი დარტყმიდან დარტყმამდე გრძელდება, სანამ ერთი P ტალღა აღარ გატარდება."),
          question("Hvad betyder et 'dropped QRS complex' i forbindelse med AV-blok?", "Что означает «выпавший комплекс QRS» при AV-блокаде?", "რას ნიშნავს „დაკარგული QRS კომპლექსი“ AV ბლოკადის დროს?", [l10n("En P-tak bliver ikke ledt til ventriklerne", "Зубец P не проводится к желудочкам", "P ტალღა პარკუჭებამდე არ ტარდება"), l10n("T-takken bliver højere end normalt", "Зубец T становится выше нормы", "T ტალღა ნორმაზე მაღალი ხდება"), l10n("PR-intervallet bliver altid kortere end 120 ms", "PR-интервал всегда становится меньше 120 мс", "PR ინტერვალი ყოველთვის 120 ms-ზე ნაკლები ხდება"), l10n("Der opstår altid ventrikelflimren", "Всегда возникает фибрилляция желудочков", "ყოველთვის ვითარდება პარკუჭთა ფიბრილაცია")], 0, "Et tabt QRS betyder, at atriet aktiveres, men impulsen når ikke ventriklerne. Derfor ses en P-tak uden efterfølgende QRS.", "Выпавший QRS означает, что предсердие активируется, но импульс не достигает желудочков. Поэтому виден зубец P без следующего QRS.", "დაკარგული QRS ნიშნავს, რომ წინაგული აქტიურდება, მაგრამ იმპულსი პარკუჭებამდე ვერ აღწევს. ამიტომ ჩანს P ტალღა შემდეგი QRS-ის გარეშე."),
          question("Hvad kendetegner 2. grads AV-blok Mobitz type II?", "Что характерно для AV-блокады II степени Mobitz II?", "რა ახასიათებს II ხარისხის AV ბლოკადას Mobitz II?", [l10n("Intermitterende ikke-ledte P-takker uden progressiv PR-forlængelse", "Периодические непроведённые зубцы P без прогрессивного удлинения PR", "პერიოდული გაუტარებელი P ტალღები PR-ის პროგრესული გახანგრძლივების გარეშე"), l10n("PR-interval over 200 ms ved alle slag uden tabte QRS", "PR больше 200 мс во всех ударах без выпадения QRS", "PR 200 ms-ზე მეტი ყველა დარტყმაში QRS-ის დაკარგვის გარეშე"), l10n("Ingen relation mellem P-takker og QRS-komplekser", "Нет связи между P и QRS", "P და QRS შორის კავშირი არ არის"), l10n("Kort PR-interval, deltabølge og bredt QRS", "Короткий PR, дельта-волна и широкий QRS", "მოკლე PR, დელტა ტალღა და ფართო QRS")], 0, "Mobitz II giver periodiske P-takker, som ikke ledes til ventriklerne, uden den gradvise PR-forlængelse fra Mobitz I.", "Mobitz II даёт периодические зубцы P, которые не проводятся к желудочкам, без постепенного удлинения PR как при Mobitz I.", "Mobitz II იწვევს პერიოდულ P ტალღებს, რომლებიც პარკუჭებამდე არ ტარდება, Mobitz I-ისთვის დამახასიათებელი თანდათან PR გახანგრძლივების გარეშე."),
          question("Hvordan adskilles Mobitz type I bedst fra Mobitz type II i dette materiale?", "Как лучше всего отличить Mobitz I от Mobitz II в этом материале?", "როგორ განვასხვაოთ Mobitz I Mobitz II-სგან ამ მასალაში?", [l10n("Mobitz I har progressiv PR-forlængelse; Mobitz II har tabte P-takker uden progressiv PR-forlængelse", "При Mobitz I есть прогрессивное удлинение PR; при Mobitz II есть выпавшие проведения без прогрессивного удлинения PR", "Mobitz I-ს აქვს PR-ის პროგრესული გახანგრძლივება; Mobitz II-ს აქვს გაუტარებელი P ტალღები პროგრესული PR გახანგრძლივების გარეშე"), l10n("Mobitz I har altid kort PR; Mobitz II har altid deltabølge", "Mobitz I всегда имеет короткий PR; Mobitz II всегда имеет дельта-волну", "Mobitz I-ს ყოველთვის მოკლე PR აქვს; Mobitz II-ს ყოველთვის დელტა ტალღა"), l10n("Mobitz I har ingen P-takker; Mobitz II har ingen QRS-komplekser", "При Mobitz I нет P; при Mobitz II нет QRS", "Mobitz I-ს P ტალღები არ აქვს; Mobitz II-ს QRS არ აქვს"), l10n("Mobitz I er det samme som 3. grads AV-blok", "Mobitz I — это то же самое, что AV-блокада III степени", "Mobitz I იგივეა, რაც III ხარისხის AV ბლოკადა")], 0, "Forskellen ligger i mønsteret før det manglende QRS: gradvis PR-forlængelse ved Mobitz I, ingen gradvis forlængelse ved Mobitz II.", "Разница в картине перед отсутствующим QRS: постепенное удлинение PR при Mobitz I и отсутствие такого удлинения при Mobitz II.", "განსხვავება დაკარგულ QRS-მდე არსებულ ნიმუშშია: Mobitz I-ზე PR თანდათან გრძელდება, Mobitz II-ზე კი არა."),
          question("Hvilket fund peger mest på Mobitz type I?", "Какой признак сильнее всего указывает на Mobitz I?", "რომელი ნიშანი მიუთითებს ყველაზე მეტად Mobitz I-ზე?", [l10n("PR-intervallet bliver længere og længere før et QRS mangler", "PR-интервал становится всё длиннее перед выпадением QRS", "PR ინტერვალი სულ უფრო გრძელდება QRS-ის დაკარგვამდე"), l10n("PR-intervallet er under 120 ms", "PR-интервал меньше 120 мс", "PR ინტერვალი 120 ms-ზე ნაკლებია"), l10n("QRS-varigheden er altid under 80 ms", "QRS всегда меньше 80 мс", "QRS ხანგრძლივობა ყოველთვის 80 ms-ზე ნაკლებია"), l10n("P-takker og QRS-komplekser er helt uafhængige", "P и QRS полностью независимы", "P ტალღები და QRS კომპლექსები სრულად დამოუკიდებელია")], 0, "Progressiv PR-forlængelse før et tabt QRS er det klassiske kriterium for Mobitz type I.", "Прогрессивное удлинение PR перед выпадением QRS — классический критерий Mobitz I.", "QRS-ის დაკარგვამდე PR-ის პროგრესული გახანგრძლივება Mobitz I-ის კლასიკური კრიტერიუმია."),
          question("Hvilket fund peger mest på Mobitz type II?", "Какой признак сильнее всего указывает на Mobitz II?", "რომელი ნიშანი მიუთითებს ყველაზე მეტად Mobitz II-ზე?", [l10n("En P-tak ledes ikke til ventriklerne, selv om PR-intervallet ikke gradvist forlænges", "Зубец P не проводится к желудочкам, хотя PR не удлиняется постепенно", "P ტალღა პარკუჭებამდე არ ტარდება, მიუხედავად იმისა, რომ PR თანდათან არ გრძელდება"), l10n("Alle P-takker har et efterfølgende QRS", "У всех зубцов P есть следующий QRS", "ყველა P ტალღას აქვს შემდეგი QRS"), l10n("PR-intervallet bliver kortere efter hvert slag", "PR-интервал становится короче после каждого удара", "PR ინტერვალი ყოველი დარტყმის შემდეგ მოკლდება"), l10n("Der er deltabølge ved hvert QRS", "При каждом QRS есть дельта-волна", "ყოველ QRS-ს აქვს დელტა ტალღა")], 0, "Mobitz II viser pludselige, intermitterende ledningssvigt uden gradvis PR-forlængelse.", "Mobitz II показывает внезапные периодические нарушения проведения без постепенного удлинения PR.", "Mobitz II აჩვენებს უეცარ პერიოდულ გამტარობის ჩავარდნას PR-ის თანდათან გახანგრძლივების გარეშე."),
          question("Hvilket udsagn om 2. grads AV-blok er korrekt?", "Какое утверждение об AV-блокаде II степени верно?", "რომელი განცხადებაა სწორი II ხარისხის AV ბლოკადის შესახებ?", [l10n("Nogle atriale impulser ledes ikke videre til ventriklerne", "Некоторые предсердные импульсы не проводятся к желудочкам", "ზოგი წინაგულოვანი იმპულსი პარკუჭებამდე არ ტარდება"), l10n("Alle atriale impulser ledes altid normalt", "Все предсердные импульсы всегда проводятся нормально", "ყველა წინაგულოვანი იმპულსი ყოველთვის ნორმალურად ტარდება"), l10n("Der er aldrig P-takker på EKG'et", "На ЭКГ никогда нет зубцов P", "ეკგ-ზე P ტალღები არასდროს არის"), l10n("QRS-komplekserne kommer altid uden relation til P-takker", "QRS всегда появляются без связи с P", "QRS კომპლექსები ყოველთვის P ტალღებთან კავშირის გარეშე მოდის")], 0, "2. grads AV-blok betyder periodisk svigt i ledningen fra atrier til ventrikler. Derfor ses nogle P-takker uden QRS.", "AV-блокада II степени означает периодический сбой проведения от предсердий к желудочкам. Поэтому часть зубцов P видна без QRS.", "II ხარისხის AV ბლოკადა ნიშნავს წინაგულებიდან პარკუჭებამდე გამტარობის პერიოდულ ჩავარდნას. ამიტომ ზოგი P ტალღა QRS-ის გარეშე ჩანს."),
          question("Ved Mobitz type I, hvad sker der lige før det tabte QRS-kompleks?", "Что происходит прямо перед выпадением QRS при Mobitz I?", "რა ხდება Mobitz I-ის დროს დაკარგულ QRS-მდე?", [l10n("PR-intervallet er blevet gradvist længere", "PR-интервал постепенно удлинился", "PR ინტერვალი თანდათან გახანგრძლივდა"), l10n("PR-intervallet er blevet kortere end 120 ms", "PR-интервал стал меньше 120 мс", "PR ინტერვალი 120 ms-ზე ნაკლები გახდა"), l10n("P-takkerne forsvinder helt", "Зубцы P полностью исчезают", "P ტალღები მთლიანად ქრება"), l10n("QRS-komplekset bliver altid smalt", "QRS всегда становится узким", "QRS კომპლექსი ყოველთვის ვიწრო ხდება")], 0, "Materialet beskriver Mobitz I som progressiv prolongation af PR-intervallet indtil et QRS-kompleks droppes.", "В материале Mobitz I описан как прогрессивное удлинение PR до выпадения комплекса QRS.", "მასალაში Mobitz I აღწერილია როგორც PR ინტერვალის პროგრესული გახანგრძლივება QRS კომპლექსის დაკარგვამდე."),
          question("Hvilken mulighed beskriver bedst en ikke-ledt P-tak?", "Какой вариант лучше всего описывает непроведённый зубец P?", "რომელი ვარიანტი აღწერს საუკეთესოდ გაუტარებელ P ტალღას?", [l10n("En P-tak uden efterfølgende QRS-kompleks", "Зубец P без следующего комплекса QRS", "P ტალღა შემდეგი QRS კომპლექსის გარეშე"), l10n("Et QRS-kompleks uden forudgående elektrisk aktivitet", "Комплекс QRS без предшествующей электрической активности", "QRS კომპლექსი წინამორბედი ელექტრული აქტივობის გარეშე"), l10n("En T-tak uden ST-segment", "Зубец T без ST-сегмента", "T ტალღა ST სეგმენტის გარეშე"), l10n("En høj R-tak i brystafledningerne", "Высокий зубец R в грудных отведениях", "მაღალი R ტალღა გულმკერდის განხრებში")], 0, "En ikke-ledt P-tak betyder, at atriet aktiveres, men impulsen ikke passerer videre til ventriklerne.", "Непроведённый зубец P означает, что предсердие активируется, но импульс не проходит дальше к желудочкам.", "გაუტარებელი P ტალღა ნიშნავს, რომ წინაგული აქტიურდება, მაგრამ იმპულსი პარკუჭებამდე აღარ გადადის."),
          question("Hvilket svar passer bedst til teksten 'intermittent non-conducted P waves'?", "Какой ответ лучше всего соответствует фразе «intermittent non-conducted P waves»?", "რომელი პასუხი შეესაბამება საუკეთესოდ ფრაზას „intermittent non-conducted P waves“?", [l10n("Nogle P-takker ledes ikke videre", "Некоторые зубцы P не проводятся дальше", "ზოგი P ტალღა აღარ ტარდება"), l10n("Alle P-takker ledes videre", "Все зубцы P проводятся дальше", "ყველა P ტალღა ტარდება"), l10n("Der findes ingen P-takker", "Зубцов P нет", "P ტალღები არ არსებობს"), l10n("P-takkerne er altid efter QRS", "Зубцы P всегда после QRS", "P ტალღები ყოველთვის QRS-ის შემდეგაა")], 0, "Intermitterende betyder, at det sker af og til. Non-conducted P waves er P-takker uden efterfølgende QRS.", "Intermittent значит периодически. Non-conducted P waves — это зубцы P без следующего QRS.", "Intermittent ნიშნავს პერიოდულად. Non-conducted P waves არის P ტალღები შემდეგი QRS-ის გარეშე."),
          question("Hvilken diagnose passer bedst, hvis PR-intervallet gradvist forlænges og derefter mangler et QRS?", "Какой диагноз подходит лучше всего, если PR постепенно удлиняется, а затем отсутствует QRS?", "რომელი დიაგნოზი შეესაბამება PR-ის თანდათან გახანგრძლივებას და შემდეგ QRS-ის დაკარგვას?", [l10n("1. grads AV-blok", "AV-блокада I степени", "I ხარისხის AV ბლოკადა"), l10n("2. grads AV-blok Mobitz type I", "AV-блокада II степени Mobitz I", "II ხარისხის AV ბლოკადა Mobitz I"), l10n("2. grads AV-blok Mobitz type II", "AV-блокада II степени Mobitz II", "II ხარისხის AV ბლოკადა Mobitz II"), l10n("Wolff-Parkinson-White", "Wolff-Parkinson-White", "Wolff-Parkinson-White")], 1, "Progressiv PR-forlængelse efterfulgt af et tabt QRS er mønsteret for Mobitz type I.", "Прогрессивное удлинение PR с последующим выпадением QRS — картина Mobitz I.", "PR-ის პროგრესული გახანგრძლივება და შემდეგ QRS-ის დაკარგვა Mobitz I-ის ნიმუშია."),
          question("Hvilken diagnose passer bedst, hvis der er tabte QRS-komplekser uden progressiv PR-forlængelse?", "Какой диагноз подходит лучше всего, если QRS выпадают без прогрессивного удлинения PR?", "რომელი დიაგნოზი შეესაბამება QRS-ის დაკარგვას PR-ის პროგრესული გახანგრძლივების გარეშე?", [l10n("2. grads AV-blok Mobitz type II", "AV-блокада II степени Mobitz II", "II ხარისხის AV ბლოკადა Mobitz II"), l10n("1. grads AV-blok", "AV-блокада I степени", "I ხარისხის AV ბლოკადა"), l10n("Normal AV-ledning", "Нормальное AV-проведение", "ნორმალური AV გამტარობა"), l10n("Kun sinusarytmi", "Только синусовая аритмия", "მხოლოდ სინუსური არითმია")], 0, "Mobitz II defineres ved intermitterende ikke-ledte P-takker uden progressiv forlængelse af PR-intervallet.", "Mobitz II определяется периодическими непроведёнными зубцами P без прогрессивного удлинения PR-интервала.", "Mobitz II განისაზღვრება პერიოდული გაუტარებელი P ტალღებით PR ინტერვალის პროგრესული გახანგრძლივების გარეშე.")
        ]
      },
      {
        id: "third-degree-and-wpw",
        title: "3. grads AV-blok og WPW",
        description: "AV-dissociation, komplet blok og Wolff-Parkinson-White-syndrom.",
        i18n: {
          ru: {
            title: "AV-блокада III степени и WPW",
            description: "AV-диссоциация, полная блокада и синдром Wolff-Parkinson-White."
          },
          ka: {
            title: "III ხარისხის AV ბლოკადა და WPW",
            description: "AV დისოციაცია, სრული ბლოკადა და Wolff-Parkinson-White სინდრომი."
          }
        },
        questions: [
          question("Hvad er EKG-kriteriet for 3. grads AV-blok i materialet?", "Какой ЭКГ-критерий AV-блокады III степени указан в материале?", "რომელი ეკგ კრიტერიუმია III ხარისხის AV ბლოკადისათვის მასალაში?", [l10n("Ingen relation mellem P-takker og QRS-komplekser", "Нет связи между зубцами P и комплексами QRS", "P ტალღებსა და QRS კომპლექსებს შორის კავშირი არ არის"), l10n("PR-interval over 200 ms med 1:1-ledning", "PR больше 200 мс с проведением 1:1", "PR 200 ms-ზე მეტი 1:1 გამტარობით"), l10n("Kort PR-interval med deltabølge", "Короткий PR с дельта-волной", "მოკლე PR დელტა ტალღით"), l10n("Progressiv PR-forlængelse før et tabt QRS", "Прогрессивное удлинение PR перед выпадением QRS", "PR-ის პროგრესული გახანგრძლივება QRS-ის დაკარგვამდე")], 0, "Ved 3. grads AV-blok er der komplet AV-blok. Atria og ventrikler aktiveres uafhængigt.", "При AV-блокаде III степени есть полная AV-блокада. Предсердия и желудочки активируются независимо.", "III ხარისხის AV ბლოკადისას არის სრული AV ბლოკი. წინაგულები და პარკუჭები დამოუკიდებლად აქტიურდება."),
          question("Hvad betyder AV-dissociation ved 3. grads AV-blok?", "Что означает AV-диссоциация при AV-блокаде III степени?", "რას ნიშნავს AV დისოციაცია III ხარისხის AV ბლოკადის დროს?", [l10n("P-takker og QRS-komplekser følger hver sin rytme", "Зубцы P и комплексы QRS идут каждый в своём ритме", "P ტალღები და QRS კომპლექსები საკუთარ რიტმს მიჰყვებიან"), l10n("Alle P-takker ledes langsomt men sikkert videre", "Все зубцы P медленно, но уверенно проводятся дальше", "ყველა P ტალღა ნელა, მაგრამ აუცილებლად ტარდება"), l10n("QRS-komplekset bliver altid smalt", "QRS всегда становится узким", "QRS კომპლექსი ყოველთვის ვიწრო ხდება"), l10n("PR-intervallet er altid under 120 ms", "PR всегда меньше 120 мс", "PR ინტერვალი ყოველთვის 120 ms-ზე ნაკლებია")], 0, "AV-dissociation betyder, at atrier og ventrikler ikke arbejder i et fast ledningsforhold.", "AV-диссоциация означает, что предсердия и желудочки не работают в фиксированном проводящем соотношении.", "AV დისოციაცია ნიშნავს, რომ წინაგულებსა და პარკუჭებს შორის ფიქსირებული გამტარობითი კავშირი არ არის."),
          question("Hvilket fund taler mest imod 3. grads AV-blok?", "Какой признак больше всего говорит против AV-блокады III степени?", "რომელი ნიშანი მეტყველებს ყველაზე მეტად III ხარისხის AV ბლოკადის წინააღმდეგ?", [l10n("Fast PR-interval og et QRS efter hver P-tak", "Постоянный PR и QRS после каждого зубца P", "ფიქსირებული PR და QRS ყოველი P ტალღის შემდეგ"), l10n("P-takker uden fast relation til QRS", "Зубцы P без фиксированной связи с QRS", "P ტალღები QRS-თან ფიქსირებული კავშირის გარეშე"), l10n("Uafhængige atriale og ventrikulære rytmer", "Независимые предсердный и желудочковый ритмы", "დამოუკიდებელი წინაგულოვანი და პარკუჭოვანი რიტმები"), l10n("Manglende sammenhæng mellem P-tak og QRS", "Отсутствие связи между P и QRS", "P ტალღასა და QRS-ს შორის კავშირის არარსებობა")], 0, "Fast PR med 1:1-ledning viser, at impulser ledes fra atrier til ventrikler. Det passer ikke med komplet AV-blok.", "Постоянный PR с проведением 1:1 показывает, что импульсы проводятся от предсердий к желудочкам. Это не соответствует полной AV-блокаде.", "ფიქსირებული PR 1:1 გამტარობით აჩვენებს, რომ იმპულსები წინაგულებიდან პარკუჭებამდე ტარდება. ეს სრულ AV ბლოკადას არ შეესაბამება."),
          question("Hvad kendetegner Wolff-Parkinson-White-syndrom på EKG i materialet?", "Что характеризует синдром Wolff-Parkinson-White на ЭКГ в материале?", "რა ახასიათებს Wolff-Parkinson-White სინდრომს ეკგ-ზე ამ მასალაში?", [l10n("PR-interval < 120 ms, deltabølge og QRS-forlængelse > 110 ms", "PR < 120 мс, дельта-волна и QRS > 110 мс", "PR < 120 ms, დელტა ტალღა და QRS > 110 ms"), l10n("PR-interval > 200 ms og ingen tabte QRS", "PR > 200 мс и нет выпадения QRS", "PR > 200 ms და QRS არ იკარგება"), l10n("Progressiv PR-forlængelse indtil QRS droppes", "Прогрессивное удлинение PR до выпадения QRS", "PR-ის პროგრესული გახანგრძლივება QRS-ის დაკარგვამდე"), l10n("Ingen relation mellem P-takker og QRS", "Нет связи между P и QRS", "P და QRS შორის კავშირი არ არის")], 0, "Materialet angiver tre WPW-kriterier: kort PR, deltabølge og forlænget QRS. Kombinationen skyldes præeksitation via en accessorisk bane.", "Материал указывает три критерия WPW: короткий PR, дельта-волна и удлинённый QRS. Комбинация связана с преэксцитацией через дополнительный путь.", "მასალა WPW-ის სამ კრიტერიუმს ასახელებს: მოკლე PR, დელტა ტალღა და გახანგრძლივებული QRS. ეს კომბინაცია დამატებითი გზით პრეექსციტაციას უკავშირდება."),
          question("Hvad er en deltabølge?", "Что такое дельта-волна?", "რა არის დელტა ტალღა?", [l10n("En sløret/opadskrånende begyndelse af QRS-komplekset", "Сглаженное/наклонное начало комплекса QRS", "QRS კომპლექსის დაბინდული/აღმავალი დასაწყისი"), l10n("En ekstra P-tak efter T-takken", "Дополнительный зубец P после T", "დამატებითი P ტალღა T-ის შემდეგ"), l10n("En flad T-tak uden ST-segment", "Плоский T без ST-сегмента", "ბრტყელი T ტალღა ST სეგმენტის გარეშე"), l10n("Et helt manglende QRS-kompleks", "Полностью отсутствующий QRS", "სრულად დაკარგული QRS კომპლექსი")], 0, "Deltabølgen er den langsomme, slørede begyndelse af QRS ved præeksitation.", "Дельта-волна — это медленное, сглаженное начало QRS при преэксцитации.", "დელტა ტალღა არის QRS-ის ნელი, დაბინდული დასაწყისი პრეექსციტაციის დროს."),
          question("Hvad betyder 'accessory pathway' ved WPW?", "Что означает «accessory pathway» при WPW?", "რას ნიშნავს „accessory pathway“ WPW-ის დროს?", [l10n("En ekstra ledningsbane mellem atrier og ventrikler", "Дополнительный проводящий путь между предсердиями и желудочками", "დამატებითი გამტარი გზა წინაგულებსა და პარკუჭებს შორის"), l10n("En ekstra T-tak i hver hjertesyklus", "Дополнительный зубец T в каждом сердечном цикле", "დამატებითი T ტალღა ყოველი გულის ციკლში"), l10n("En blokering i sinusknuden", "Блокада в синусовом узле", "ბლოკირება სინუსურ კვანძში"), l10n("En mekanisk hjerteklap", "Механический сердечный клапан", "მექანიკური გულის სარქველი")], 0, "En accessorisk pathway er en ekstra elektrisk forbindelse, der kan lede impulser uden om AV-knuden.", "Accessory pathway — это дополнительное электрическое соединение, которое может проводить импульсы в обход AV-узла.", "Accessory pathway არის დამატებითი ელექტრული კავშირი, რომელსაც იმპულსების AV კვანძის გვერდის ავლით გატარება შეუძლია."),
          question("Hvor kort er PR-intervallet typisk ved WPW ifølge materialet?", "Насколько короткий PR-интервал типичен для WPW по материалу?", "რამდენად მოკლეა PR ინტერვალი WPW-ის დროს მასალის მიხედვით?", [l10n("Under 120 ms", "Меньше 120 мс", "120 ms-ზე ნაკლები"), l10n("Over 200 ms", "Больше 200 мс", "200 ms-ზე მეტი"), l10n("Præcis 300 ms", "Ровно 300 мс", "ზუსტად 300 ms"), l10n("Det kan ikke måles", "Его нельзя измерить", "მისი გაზომვა შეუძლებელია")], 0, "Materialet angiver PR-interval < 120 ms som kriterium for WPW.", "В материале PR-интервал < 120 мс указан как критерий WPW.", "მასალაში PR ინტერვალი < 120 ms WPW-ის კრიტერიუმად არის მითითებული."),
          question("Hvilken QRS-varighed nævnes som kriterium ved WPW?", "Какая длительность QRS указана как критерий WPW?", "QRS-ის რომელი ხანგრძლივობაა მითითებული WPW-ის კრიტერიუმად?", [l10n("Over 110 ms", "Больше 110 мс", "110 ms-ზე მეტი"), l10n("Under 80 ms", "Меньше 80 мс", "80 ms-ზე ნაკლები"), l10n("Præcis 40 ms", "Ровно 40 мс", "ზუსტად 40 ms"), l10n("Over 300 ms", "Больше 300 мс", "300 ms-ზე მეტი")], 0, "QRS-prolongation > 110 ms nævnes, fordi præeksitation kan gøre QRS bredere.", "Удлинение QRS > 110 мс указано потому, что преэксцитация может расширять QRS.", "QRS-ის გახანგრძლივება > 110 ms მითითებულია, რადგან პრეექსციტაციას QRS-ის გაფართოება შეუძლია."),
          question("Hvad nævner materialet som ætiologi ved WPW?", "Что материал указывает как этиологию WPW?", "რას ასახელებს მასალა WPW-ის ეტიოლოგიად?", [l10n("Genetisk disposition", "Генетическую предрасположенность", "გენეტიკურ წინასწარგანწყობას"), l10n("Altid akut blodprop", "Всегда острый тромб", "ყოველთვის მწვავე თრომბი"), l10n("Altid infektion i AV-knuden", "Всегда инфекцию AV-узла", "ყოველთვის AV კვანძის ინფექცია"), l10n("Kun elektrolytforstyrrelse", "Только электролитное нарушение", "მხოლოდ ელექტროლიტური დარღვევა")], 0, "Under ætiologi nævner materialet genetisk disposition, altså en medfødt eller arvelig tendens.", "В разделе этиологии указана генетическая предрасположенность, то есть врождённая или наследственная склонность.", "ეტიოლოგიის ნაწილში მითითებულია გენეტიკური წინასწარგანწყობა, ანუ თანდაყოლილი ან მემკვიდრეობითი მიდრეკილება."),
          question("Hvilken epidemiologi angives for WPW i materialet?", "Какая эпидемиология WPW указана в материале?", "რომელი ეპიდემიოლოგიაა მითითებული WPW-ისთვის მასალაში?", [l10n("3 tilfælde per 1000 individer", "3 случая на 1000 человек", "3 შემთხვევა 1000 ადამიანზე"), l10n("3 tilfælde per 100 individer", "3 случая на 100 человек", "3 შემთხვევა 100 ადამიანზე"), l10n("30 tilfælde per 1000 individer", "30 случаев на 1000 человек", "30 შემთხვევა 1000 ადამიანზე"), l10n("1 tilfælde per 1 million individer", "1 случай на 1 миллион человек", "1 შემთხვევა 1 მილიონ ადამიანზე")], 0, "Materialet angiver 3 cases per 1000 individuals, altså cirka 3 tilfælde per 1000 individer.", "Материал указывает 3 cases per 1000 individuals, то есть примерно 3 случая на 1000 человек.", "მასალაში მითითებულია 3 cases per 1000 individuals, ანუ დაახლოებით 3 შემთხვევა 1000 ადამიანზე."),
          question("Hvilken kombination passer bedst med WPW og ikke med 1. grads AV-blok?", "Какая комбинация лучше соответствует WPW, а не AV-блокаде I степени?", "რომელი კომბინაცია შეესაბამება WPW-ს და არა I ხარისხის AV ბლოკადას?", [l10n("Kort PR-interval og deltabølge", "Короткий PR-интервал и дельта-волна", "მოკლე PR ინტერვალი და დელტა ტალღა"), l10n("Langt PR-interval uden tabte QRS", "Длинный PR без выпадения QRS", "გრძელი PR QRS-ის დაკარგვის გარეშე"), l10n("Progressiv PR-forlængelse før tabt QRS", "Прогрессивное удлинение PR перед выпадением QRS", "PR-ის პროგრესული გახანგრძლივება QRS-ის დაკარგვამდე"), l10n("Ingen relation mellem P og QRS", "Нет связи между P и QRS", "P და QRS შორის კავშირი არ არის")], 0, "WPW viser præeksitation med kort PR og deltabølge. 1. grads AV-blok viser derimod forlænget PR.", "WPW показывает преэксцитацию с коротким PR и дельта-волной. AV-блокада I степени, наоборот, даёт удлинённый PR.", "WPW აჩვენებს პრეექსციტაციას მოკლე PR-ით და დელტა ტალღით. I ხარისხის AV ბლოკადა კი გახანგრძლივებულ PR-ს აჩვენებს."),
          question("Hvilken diagnose passer bedst til 'ingen relation mellem P-takker og QRS-komplekser'?", "Какой диагноз лучше всего соответствует фразе «нет связи между P и QRS»?", "რომელი დიაგნოზი შეესაბამება ფრაზას „P და QRS შორის კავშირი არ არის“?", [l10n("3. grads AV-blok", "AV-блокада III степени", "III ხარისხის AV ბლოკადა"), l10n("1. grads AV-blok", "AV-блокада I степени", "I ხარისხის AV ბლოკადა"), l10n("Mobitz type I", "Mobitz I", "Mobitz I"), l10n("Wolff-Parkinson-White", "Wolff-Parkinson-White", "Wolff-Parkinson-White")], 0, "Ingen relation mellem P-takker og QRS-komplekser er materialets kriterium for 3. grads AV-blok.", "Отсутствие связи между P и QRS — критерий AV-блокады III степени в материале.", "P ტალღებსა და QRS კომპლექსებს შორის კავშირის არარსებობა მასალაში III ხარისხის AV ბლოკადის კრიტერიუმია."),
          question("Hvilket fund passer bedst til præeksitation?", "Какой признак лучше всего соответствует преэксцитации?", "რომელი ნიშანი შეესაბამება ყველაზე მეტად პრეექსციტაციას?", [l10n("Deltabølge og kort PR-interval", "Дельта-волна и короткий PR-интервал", "დელტა ტალღა და მოკლე PR ინტერვალი"), l10n("PR-interval over 200 ms", "PR-интервал больше 200 мс", "PR ინტერვალი 200 ms-ზე მეტი"), l10n("Progressivt længere PR-interval", "Постепенно удлиняющийся PR", "თანდათან გახანგრძლივებული PR ინტერვალი"), l10n("P-takker uden nogen QRS-relation", "P без какой-либо связи с QRS", "P ტალღები QRS-თან ყოველგვარი კავშირის გარეშე")], 0, "Præeksitation betyder tidlig ventrikelaktivering. Ved WPW ses det som kort PR og deltabølge.", "Преэксцитация означает раннюю активацию желудочков. При WPW это видно как короткий PR и дельта-волна.", "პრეექსციტაცია ნიშნავს პარკუჭების ადრეულ აქტივაციას. WPW-ის დროს ეს ჩანს როგორც მოკლე PR და დელტა ტალღა."),
          question("Hvilken forskel mellem 3. grads AV-blok og WPW er korrekt?", "Какое различие между AV-блокадой III степени и WPW верно?", "რომელი განსხვავებაა სწორი III ხარისხის AV ბლოკადასა და WPW-ს შორის?", [l10n("3. grads AV-blok har AV-dissociation; WPW har præeksitation via accessorisk pathway", "При AV-блокаде III степени есть AV-диссоциация; при WPW есть преэксцитация через дополнительный путь", "III ხარისხის AV ბლოკადას აქვს AV დისოციაცია; WPW-ს აქვს პრეექსციტაცია დამატებითი გზით"), l10n("Begge har altid PR-interval over 200 ms", "У обоих всегда PR больше 200 мс", "ორივეს ყოველთვის PR 200 ms-ზე მეტი აქვს"), l10n("Begge defineres af progressiv PR-forlængelse", "Оба определяются прогрессивным удлинением PR", "ორივე განისაზღვრება PR-ის პროგრესული გახანგრძლივებით"), l10n("WPW har ingen relation mellem P-takker og QRS-komplekser", "При WPW нет связи между P и QRS", "WPW-ს დროს P და QRS შორის კავშირი არ არის")], 0, "3. grads AV-blok er komplet ledningsblok. WPW er præeksitation, hvor en ekstra ledningsbane aktiverer ventriklerne tidligt.", "AV-блокада III степени — полная блокада проведения. WPW — преэксцитация, при которой дополнительный путь рано активирует желудочки.", "III ხარისხის AV ბლოკადა სრული გამტარობის ბლოკია. WPW არის პრეექსციტაცია, როცა დამატებითი გზა პარკუჭებს ადრე ააქტიურებს.")
        ]
      }
    ]
  },
  {
    id: "upper-limb",
    title: "Upper limb",
    description: "Knogler, led, muskler, kar, lymfe og nerver i overekstremiteten.",
    i18n: {
      ru: { description: "Кости, суставы, мышцы, сосуды, лимфоотток и нервы верхней конечности." },
      ka: { description: "ზედა კიდურის ძვლები, სახსრები, კუნთები, სისხლძარღვები, ლიმფა და ნერვები." }
    },
    materials: []
  },
  {
    id: "lower-limb",
    title: "Lower limb",
    description: "Materialer om underekstremiteten tilføjes her.",
    i18n: {
      ru: { description: "Здесь будут материалы по нижней конечности." },
      ka: { description: "აქ დაემატება ქვედა კიდურის მასალები." }
    },
    materials: []
  },
  {
    id: "head-and-neck",
    title: "Head and neck",
    description: "Materialer om hoved og hals tilføjes her.",
    i18n: {
      ru: { description: "Здесь будут материалы по голове и шее." },
      ka: { description: "აქ დაემატება თავისა და კისრის მასალები." }
    },
    materials: []
  }
];

globalThis.QUIZ_FOLDERS = QUIZ_FOLDERS;
