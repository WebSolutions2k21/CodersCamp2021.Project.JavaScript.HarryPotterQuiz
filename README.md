# CodersCamp2021 - Projekt JavaScript

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


![1920px-Harry_Potter_wordmark](https://user-images.githubusercontent.com/95089940/148245737-3a6438ff-2b0b-49c1-b0b8-4507fec607b9.png)

[Mockupy i prototyp](https://www.figma.com/file/0hPqbStz3EtSrjtSQXExDl/HP-Quiz?node-id=8%3A3)
	
### [ZAGRAJ TERAZ](https://websolutions2k21.github.io/CodersCamp2021.Project.JavaScript.HarryPotterQuiz/)


## Cel projektu

Celem projektu było dostarczenie aplikacji pozwalającej sprawdzić swoją wiedzę o uczniach, nauczycielach i domach Hogwartu.

Aplikacja została wykonana wg dostarczonych przez organizatorów CodersCamp wymagań.


## Działanie aplikacji

#### Menu Główne

![Zrzut ekranu 2022-01-05 o 16 58 44](https://user-images.githubusercontent.com/95089940/148250862-2f3ebd8b-d504-4a40-8655-295ab338d23d.jpg)

Na głównej stronie znajdują się przyciski prowadzące do rozpoczęcia gry, zasad oraz rankingu z najlepszymi uczestnikami. Również tutaj w górnym prawym rogu, pojawia się opcja wyboru języka.

#### Tryb gry

![Zrzut ekranu 2022-01-05 o 16 58 49](https://user-images.githubusercontent.com/95089940/148250793-ba754c74-8469-45d8-b19c-a0bb86415342.jpg)

W tej zakładce należy wybrać tryb gry oraz wpisać swój nick(bez niego gra się nie uruchomi):

- Students — rozpoznawanie postaci uczniów z Hogwartu na podstawie wyświetlanych zdjęć
- Staff — rozpoznawanie postaci nauczycieli i innych pracowników Hogwartu na podstawie wyświetlanych zdjęć
- Houses— rozpoznawanie do jakiego domu przynależy dana postać

#### Rozgrywka — Quiz

![Zrzut ekranu 2022-01-05 o 16 59 00](https://user-images.githubusercontent.com/95089940/148250944-f4a75ba6-687f-4318-939f-fd88e0bb28bd.jpg)


Rozgrywka polega na odgadywaniu kto wyświetla się na obrazie lub odpowiadaniu do którego domu postać przynależy. Do wyboru są 3 opcje, z czego zawsze tylko jedna jest prawidłowa.Za każdą poprawną odpowiedź gracz dostaje 10pkt.
Czas pozostały do końca rozgrywki odlicza gasnący płomień na różdżce oraz timer.

![Zrzut ekranu 2022-01-05 o 16 59 06](https://user-images.githubusercontent.com/95089940/148250956-bff5aeea-a234-4ba8-8383-902fad61902a.jpg)


#### Lista Funkcjonalności

1. wpisanie nazwy użytkownika oraz wybór trybu quizu (Students, Staff, Houses),
3. Po rozpoczęciu gry rozpoczyna się odliczanie czasu (1 minuty).
4. Zadaniem gracza jest odpowiedzieć na jak najwięcej pytań w ciągu ustalonego czasu. (max. 20 pytań)
5. W trakcie trwania quizu gasnący płomień na różdżce oraz timer pokazuje, ile jeszcze czasu zostało. Po wybraniu odpowiedzi zostaje ukazane przez dwie sekundy czy odpowiedź była dobra czy zła. Następnie pytanie zostaje zmienione na kolejne i tak do końca czasu.
6. Pytania są generowane w następujący sposób:

- zostaje pobrany losowy zasób z danego trybu (np students)
- dla wylosowanego zasobu zostanie pobrane zdjęcie
- losowane są 3 odpowiedzi z zapytania do HarryPotter API - jedna poprawna. 
- Pytania nie powtarzają się

7. Po ukończeniu czasu lub wykorzystaniu wszystkich pytań, wynik gracza zapisywany jest w rankingu dla danej przeglądarki (LocalStorage) i wyświetlana jest strona z wynikiem gracza oraz trzema najlepszymi wynikami w danej kategorii.
8. w zakładce ranking pokazane są najlepsze wyniki ze wszystkich trzech kategorii.

![Zrzut ekranu 2022-01-05 o 17 01 07](https://user-images.githubusercontent.com/95089940/148251057-b0efedd2-115f-4d8a-84bf-521d7bf10767.jpg)

#### Zasady gry

W zakładce Rules wytłumaczone są zasady gry.

'Naciśnij przycisk Start, następnie wpisz nazwę gracza i wybierz jedną z trzech kategorii. Odpowiadaj na pytania klikając w jedną z trzech odpowiedzi. Otrzymasz: 10 pkt za każdą poprawną odpowiedź; 0 za każdą błędną. Pamiętaj! Masz minutę na udzielenie jak największej liczby odpowiedzi.'

##  Ranking

Po przejściu do 'Best Scores' pokazywane są najlepsze wyniki graczy, grających na danym komputerze. Wyniki są pokazywane dla każdego z trybów. Dodatkowo po ukończeniu gry, na stronie z wynikiem znajduje się lista trzech najlepszych graczy z kategorii wybranej przez użytkownika. 


### Dodatkowe informacje

Nasz zespół zrealizował także responsywność stron oraz możliwość wyboru języka: polski lub angielski

## API

https://hp-api.herokuapp.com/

## Kod startowy projektu
1. Nasza aplikacja została wdrożona na GitHub Pages.
2. Aplikacja jest budowana przy pomocy narzędzia Parcel.
3. Biorąc pod uwagę fakt, iż nasza aplikacja jest implementowana przez kilku deweloperów, zdecydowaliśmy się na użycie biblioteki Prettier, służącej do formatowania kodu. Niniejsza biblioteka jest świetnym narzędziem, który wyłapuje błędy składni, automatycznie poprawia linie kodu według zdefiniowanej konfiguracji.
4. Zdecydowaliśmy się również na użycie narzędzia statycznej analizy kodu ESLint, który identyfikuje problematyczne fragmenty kodu JS. Obejmuje jakość kodu oraz problemy ze stylem kodowania.
5. Nasz projekt wykorzystuje także transpilator kodu JS Babel, który przekształca kod JS do takiej postaci, aby był kompatybilny ze wszystkimi przeglądarkami, a także zadziałał na starszych wersjach przeglądarek.

## Technologie użyte w projekcie:

1. HTML
2. SCSS
3. JavaScript 
4. Node.js
5. Harry Potter API

## Narzędzia pomocnicze

- Visual Studio Code
- Git
- Figma
- Trello

## Instalacja

#### Uruchomienie projektu:

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Sklonuj sobie repozytorium.
2. Otwórz repozytorium w ulubionym edytorze.
3. Zainstaluj zależności za pomocą komendy: npm install
4. Utwórz w głównym katalogu plik o nazwie: .env i następnie wklej następującą treść:
   BASE_API_URL: 'http://hp-api.herokuapp.com/',
   QUIZ_MAX_TIME: 60
5. Wystartuj serwer za pomocą komendy: npm run start

Aplikacja będzie dostępna pod adresem localhost:8080

# Powodzenia, Mugolu!! ![Harry Potter1](https://user-images.githubusercontent.com/95089940/148243158-aff61740-0f34-4a3f-aa15-f320eeb36016.png)




