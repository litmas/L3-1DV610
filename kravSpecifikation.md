# Kravspecifikation

## Funktionella krav:

1.1 Användaren ska kunna få övningar baserat på data de matar in

1.2 Användaren ska kunna få allmänna tips beroende på difficulty och workout type

1.3 Användaren ska kunna bygga en workout kring specifika muskler, difficulty och workout-type.

1.4 Användaren ska kunna bygga en workout-split som visar ett schema för en hel vecka som är specificerad för användaren.

## Icke funktionella krav:

Jag kommer inte ta med någonting om mängd med övningar där jag kan ej göra något om det där det är API:et som genererar dem.

2.1 Webbplatsen ska vara användarvänlig där även de som har grundläggande datorkunskap ska kunna använda webbplatsen.

2.2 Om det går ej att generera övningar/workouts så ska felmeddelandet komma upp.

2.3 Webbplatsen är anpassad för alla sorts screens t.ex iPhone, iPad, dator osv.

2.4 Navbar ska ändras när man använder webbplatsen på en telefon.

## Organisationskrav

### Tekniska krav

Jag kommer att bygga denna applikation inom React. Jag kommer också göra detta på ett objektorienterat sätt där jag följer principerna och reglerna från kapitel 2-11 inom boken Clean Code skriven av Robert Martin.

Plattformar som produkten ska vara tillgänglig på:

Det är en webbapplikation som innebär att den är tillgänglig på alla webbrowser och vem som helst som är ansluten till ett nätverk ska kunna komma åt min webbplats.

### 3.1 Versionshantering

För att hantera versionen av denna webbapplikation kommer jag att använda SemVer som är en förkortning till semantic versioning. När första versionen av webbapplikationen släpps kommer den ha versionen 1.0.0 där första siffran är major, andra siffran är minor och sista siffran är patch.

### 3.2 Kodstandard

Jag har använt mig av universitetets Lint för min kodstandard. Däremot hade jag problem med detta när jag försökte att deploya min webbapplikation. Min modul är vanilla javascript och min webbapplikation är React och Lint kunde inte skilja dem. Alltså behövde jag ta bort Linten från mitt projekt när jag deployade den. Koden har fortfarande en kodstandard men inte på ett optimalt sätt.

### 3.3 koddokumentation

För att dokumentera min kod kommer jag att använda JSDoc även om Clean Code säger emot det. Som sagt innan så använde jag universitetets Lint och den kräver JSDoc kommentarer. Jag kommer också dokumentera delar av koden inom README.

## 4\. Externa krav

### 4.1 etiska krav

Är det moraliskt korrekt att skapa denna applikation?

Jag har byggt en workout-applikation där användare behöver inte logga in eller skapa ett konto. Jag sparar ingen data från användaren och bara låter användare att använda ett API och en bra designad webbapplikation. Den hjälper även användare att komma igång med gymmet vilket nuförtiden är ganska berömt.

Kan någon skadas av applikationen?

Jag tror inte att någon kan direkt skadas av applikationen där det går inte att t.ex sprida falsk data om andra. Däremot skulle man kunna skada sig på gymmet genom att göra övningar som är för svåra för en. Jag  skulle också kunna skadas av denna webbapplikation genom att om någon kommer åt min API nyckel och host så kan de göra så att jag måste betala en väldigt massa pengar till API Ninjas.

Om applikationen brister i säkerhet

Som sagt innan, det enda som kan brista i säkerhet är att om någon får tag i min API nyckel och host, vilket bara skadar mig och ingen annan.

## Lagar och standarder

Jag hanterar inte personuppgifter vilket innebär att jag inte bryter mot några lagar eller standarder.
