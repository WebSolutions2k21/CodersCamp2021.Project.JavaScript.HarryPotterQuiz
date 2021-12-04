# CodersCamp2021.Project.JavaScript.HarryPotterQuiz

## Zespół projektowy:

Zespół pracował w ramach kursu CodersCamp. Aplikację wykonali uczestnicy kursu z pomocą mentora. Zachęcamy do odwiedzenia profili członków zespołu, w celu zapoznania się z ich portfolio.

#### Mentor:

[Aleksander Atamańczuk](https://github.com/TenGosc007)

#### Uczestnicy:

- [Małgorzata Bednarczuk](https://github.com/margiebed)

- [Anna Koruc](https://github.com/annakoruc)

- [Marta Probierz](https://github.com/marta-probierz)

- [Weronika Kurek-Pękala](https://github.com/SolWika)

- [Kasia Filip](https://github.com/kasia-filip)

- [Sebastian Michalczyk](https://github.com/WindOfCodes)

# Harry Potter Quiz

```
	Mockupy i prototyp (dodać hiperłącze)
```

### Demo

```
Wersja demonstracyjna aplikacji jest dostępna TUTAJ(dodać hiperłącze).
Powodzenia, Mugolu!
```

## Cel projektu

Celem projektu było dostarczenie aplikacji pozwalającej sprawdzić swoją wiedzę o uczniach, nauczycielach i domach Hogwartu.
`Dodatkowo gracz rywalizował z komputerem w trakcie grania w quiz. Komputer — zależnie od ustawień — odpowiada losowo lub inteligentnie — próbując rozpoznać przedstawiany obraz za pomocą Google Vision API.`

Aplikacja została wykonana wg dostarczonych przez organizatorów CodersCamp wymagań.

## Działanie aplikacji

#### Menu Główne

W menu głównym należy wybrać tryb gry (domyślnie jest to People):

- Students — rozpoznawanie postaci uczniów z Hogwartu oraz udzielanie odpowiedzi na pytania z nimi związane na podstawie wyświetlanych zdjęć
- Staff — rozpoznawanie postaci nauczycieli i innych pracowników Hogwartu oraz udzielanie odpowiedzi na pytania z nimi związane na podstawie wyświetlanych zdjęć
- Houses— rozpoznawanie do jakiego domu przynależy dana postać

#### Rozgrywka — Quiz

Rozgrywka polega na odgadywaniu kto wyświetla się na obrazie po lewej stronie, oraz odpowiadaniu na pytania związane z postacią. Do wyboru są 4 opcje, z czego zawsze tylko jedna jest prawidłowa. `W tym samym czasie obraz rozpoznaje także komputer, który rywalizuje z graczem (wyniki komputera nie zapisują się w rankingu)`. Wynik gracza z jednej gry to ilość dobrych odpowiedzi.
Czas pozostały do końca rozgrywki odlicza `paląca się różdżka na dole ekranu`.

#### Lista Funkcjonalności

1. Wybór trybu quizu (Students, Staff, Houses)
2. Opis zasad dla quizu. Obok zasad pokazuje się losowe zdjęcie z danego trybu (dostosowany opis, jeśli np. imię osoby ze zdjęcia jest w opisie zasad).
3. Po rozpoczęciu gry rozpoczyna się odliczanie czasu `(1 minuty)`.
4. Zadaniem gracza jest odpowiedzieć na jak najwięcej pytań w ciągu ustalonego czasu `(dodatkowo gracz konkuruje także z komputerem! Komputer tak samo jak gracz próbuje rozpoznać co jest na grafice).`
5. W trakcie trwania quizu `paląca się różdżka` pokazuje, ile jeszcze czasu zostało. Po wybraniu odpowiedzi zostaje ukazane przez sekundę czy odpowiedź była dobra czy zła. Następnie pytanie zostaje zmienione na kolejne i tak do końca czasu.
6. Pytania są generowane w następujący sposób:

- zostaje pobrany losowy zasób z danego trybu (np characters)
- dla wylosowanego zasobu zostanie pobrane zdjęcie
- losowane są 3 odpowiedzi z zapytania do HarryPotter API. Dla trybu "Students" będzie to http://hp-api.herokuapp.com/api/characters/students (jedna brana jest z wcześniej wylosowanego, musi być poprawna)

7. Po ukończeniu czasu wynik gracza zapisywany jest w rankingu dla danej przeglądarki (LocalStorage) i pokazywany jest ranking 3 najlepszych wyników.

#### Zasady gry

Po wyborze kategorii rozgrywki wyświetlą się szczegółowe zasady.

## Puchar Domów / Ranking

Po przejściu do House Cup pokazywane są 3 najlepsze wyniki graczy, grających na danym komputerze. Wyniki są pokazywane osobno, dla każdego z trybów.

### Ustawienia

```
W ustawieniach aplikacji możesz zdecydować, czy będziesz konkurować z komputerem losowym, czy bardziej inteligentnym. Aby walczyć przeciw komputerowi silnym w mocy, należy w ustawieniach podać ApiKey, który umożliwia wykonywanie zapytań do Google Vision Api. Taki API Key można wygenerować w następujący sposób.
1. Załóż konto w Google Cloud Platform wg tej instrukcji.
2. Załóż projekt, aktywuj dla niego Google Vision Api i wygeneruj swój API Key, jak opisano TUTAJ.
3. Wklej swój API Key w odpowiednim polu w ustawieniach gry. Spokojnie, Twój API Key będzie przetrzymywany jedynie w pamięci programu i wykorzystywany tylko do autoryzacji zapytań do Google Vision API. Przy przeładowaniu strony, musisz podać go ponownie.
```

### Zmiany wprowadzone w wymaganiach

`Nie wprowadzono żadnych zmian w wymaganiach względem projektu pierwotnego. Lekkim uproszczeniu uległ interfejs użytkownika. Wykonano wersje responsywne, dostosowane do telefonów i tabletów.` Aplikacja najlepszy efekt sprawia na większych ekranach. Możesz wtedy zagłębić się w świat Harrego Pottera i sprawdzić tak jak nad nim czuwa nad Tobą Twój Patronus!

### Zrealizowane dodatkowe zadania

Nasz zespół zrealizował także zadania dodatkowe, wykraczające poza zakres kursu.

```Zostało wykonane
1. zadanie dodatkowe z Google Vision API.
2. .....
```

## API

https://hp-api.herokuapp.com/

## Kod startowy projektu

1. Nasza aplikacja została wdrożona na GitHub Pages.
2. Aplikacja jest budowana przy pomocy narzędzia Parcel.
3. Biorąc pod uwagę fakt, iż nasza aplikacja jest implementowana przez kilku deweloperów, zdecydowaliśmy się na użycie biblioteki Prettier, służącej do formatowania kodu. Niniejsza biblioteka jest świetnym narzędziem, który wyłapuje błędy składni, automatycznie poprawia linie kodu według zdefiniowanej konfiguracji.
4. Zdecydowaliśmy się również na użycie narzędzia statycznej analizy kodu ESLint, który identyfikuje problematyczne fragmenty kodu JS. Obejmuje jakość kodu oraz problemy ze stylem kodowania.
5. Nasz projekt wykorzystuje także transpilator kodu JS Babel, który przekształca kod JS do takiej postaci, aby był kompatybilny ze wszystkimi przeglądarkami, a także zadziałał na starszych wersjach przeglądarek.

## Technologie użyte w projekcie:
1.HTML
2.SCSS
3.JavaScript
4. Node.js