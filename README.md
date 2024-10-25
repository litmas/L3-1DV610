# L3 1DV610 Workout Webbapplikation

En interaktiv webbapplikation för att skapa och organisera personliga träningsplaner. Användare kan generera specifika övningar, sätta samman träningspass för en viss dag och skapa en veckoplan för sina träningsmål.

Detta är en länk till min projektvision som ger en detaljerad analys på mina tankar kring varför jag har byggt denna webbapplikation: https://github.com/litmas/L3-1DV610/blob/main/projektVision.md

Syftet med Workout Planner är att erbjuda en enkel och visuell lösning för att skapa och anpassa träningsprogram. Applikationen riktar sig till både nybörjare och avancerade användare genom att erbjuda flexibla val av muskelgrupper, träningstyper och svårighetsgrader.

## Installation och Användning

Koden finns redan publicerad vid: https://kelvinsworkouts.netlify.app/ om man vill använda den men om man vill arbeta och förbättra koden följ instruktionerna nedan: 

Klona repositoryt:

```
git@github.com:litmas/L3-1DV610.git
```
Installera nödvändiga paket:
```
npm install
```
Starta applikationen på localhost:
```
npm start
```

## Målgruppsspecifika Instruktioner

### För Slutanvändare

Applikationen låter dig generera övningar utifrån specifika muskelgrupper, typer av träning och svårighetsgrader. Du kan skapa dagliga träningspass och bygga en komplett veckoplan för en strukturerad träningsrutin.

#### muscle:
Välj mellan abdominals, abductors, adductors, biceps, calves, chest, forearms, glutes, hamstrings, lats, lower_back, middle_back, neck, quadriceps, traps och triceps.
#### type:
Alternativen inkluderar cardio, olympic_weightlifting, plyometrics, powerlifting, strength, stretching and strongman.
#### difficulty: 
Anpassa din träning med nivåerna beginner, intermediate eller expert.

### För Apputvecklare

Koden använder React i ett objektorienterat upplägg och är stilad med Tailwind CSS. För att bygga vidare eller anpassa applikationen kan du använda komponenter och metoder som redan är strukturerade inom projektets filsystem.

Komponenter ligger i components-mappen. Varje komponent (ExerciseComponent.js, WorkoutComponent.js, och WorkoutSplitComponent.js) renderar och hanterar JSON-data från modulen
Pages ligger i pages-mappen, där varje fil (t.ex. Exercise.js, Workout.js) representerar en vy och anropar komponenterna.

### För Modulutvecklare

Applikationen erbjuder en modul som hanterar all träningslogik. Modulen gör det möjligt att filtrera och generera övningar baserat på användarens preferenser, och API
levererar JSON-data som innehåller olika övningar. Här är en enkel guide för att använda modulen:

#### Instansiering av modulen: 

Under finns det en länk till repositoryt som innehåller all kod till modulen. Det finns också instruktioner till hur man installerar och hur man kan börja använda modulen. 

https://github.com/litmas/assignmentL2

Och om du vill klona repositoryt: 

```
git@github.com:litmas/assignmentL2.git
```

## Framtida Utveckling

För att utveckla denna webbapplikation ytterligare så finns det i princip oändligt mycket som man kan förbättra och lägga till. Man kan förbättra modulen eller webbapplikationen eller både. Med moduler så finns det en begränsad mängd övningar vilket kan utökas, man kan också lägga till och bygga fler funktioner. Med webbapplikationen så kan man t.ex bygga en backend till det hela där användare kan sign up och logga in och sedan spara övningar, workouts och workout splits inom en databas. Man skulle också kunna bygga ett system som rekommenderar t.ex workouts till användaren. 
