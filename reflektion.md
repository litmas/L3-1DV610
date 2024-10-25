### Kapitel 2: Meaningful Names

När jag reflekterar på detta kapitel märker jag hur dålig och otydlig jag var innan när det gällde att namnge saker som variabler inom min kod. Detta är en ganska enkel sak att göra egentligen eller det är det man tänker men man märker inte hur små ord som get kan påstå något helt annat. Genom att läsa detta kapitel har jag lärt mig hur viktigt det är att ha "meaningful names" inom sin kod.  Ett exempel på detta är min funktion getExercises inom min modul. Det är namnet jag hade innan men bytte sedan till fetchExerciseForMuscle. Ordet get kan påstå att man skapar övningar men egentligen så "fetchar" jag övningar från ett API vilket är varför jag bytte namnet.

### Kapitel 3: Functions

Kapitel 3 är kapitlet som jag hade mest problem med. Jag tror att det är ett antal i klassen som tyckte att det var orimligt att funktioner ska vara cirka 4-10 rader där vissa funktioner krävs för att vara längre. Men i helhet så handlar kapitlet om att det är allmänt bättre att ha små funktioner. Jag bröt ut min workoutPlanner.js kod från 2 funktioner, createWorkout och createWorkoutSplit till sju funktioner vilket gör det enklare att förstå vad koden gör och det är enklare att förstå vad varje funktion gör.  

### Kapitel 4: Comments

Efter att ha läst detta kapitel har jag äntligen hittat en bok som håller med att JSDoc kommentarer kan vara onödiga. Jag i princip aldrig skriver JSDoc kommentarer i min egen kod dock så använde jag LNUs ES Lint vilket kräver JSDoc kommentarer. Jag använde LNUs ES Lint på grund av att den har krav på kommentarerna. Detta kapitel var bra att inse hur värdelösa vissa kommentarer man skrev tidigare var. Jag hade en massa med TODO kommentarer som låg runt mitt kod och som Robert Martin sa så hjälpte det inte utan gjorde koden mer stökigt. 

### Kapitel 5: Formatting

Om jag ska vara helt ärlig så har formatering inte varit någonting jag har tänkt på under dessa ett och ett halvt år jag har programmerat. Antingen har man använt Lint för att fixa till det men för det mestadels har jag fixat det själv där man kan se ganska enkelt när en linje borde ha en "line break" eller inte. Däremot så märkte jag hur stor skillnad det gör när jag gjorde mina kommentarer. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXddxIfyWuIKUBnl432EHyM7vuzmMjb_vuHBG58VxRQyJjxM503Dvo3k-MMlZP8CqsSHheRR-qlbmXlwUp0bPFzunMESHbEEPSPL1IdBaavFHEFZfxc0KMXaxCPnKkSc0mxj3usjzhWn-tVYTng0htG9hMvg?key=ICmaExCFdCpmANDz019PqA)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXefPJ_4omsV_KstO1BlAo1CFi6UgPrHuaMpNZRnD6hoLS87qnWz_IG_WToIW_ALR0019OMbYw44m4LF-02r6mU-YOLXCKAaknPQlO_M9bL42SbtxFS1TBIJgwETaYq1MGOtzkYCU62AxUAtGfcczqALTKk?key=ICmaExCFdCpmANDz019PqA)

I första bilden har jag ingen line break och i andra bilden har jag lagt till en line break mellan class deklarationen och kommentaren och det gör en enorm skillnad. 

### Kapitel 6: Objects and Data Structures

Det här kapitlets distinktion mellan dataobjekt och datastrukturer gjorde mig mer försiktig med hur jag strukturerar och kapslar in data i min kod. Att tillämpa dessa principer har hjälpt mig att designa mer robusta klasser som bättre följer inkapslings principerna. Även om detta har krävt mer genomtänkt planering i förväg, har resultaten varit enorma, särskilt när jag har jobbat med att översätta JSON data till HTML. Ett bra exempel inom min kod hade varit inom min exerciseGenerator klass: 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd-J64ky26bY2c01DehIq_ilAGvBliK-YW7pQcgzhX5zXQHF0pshgrT-b8O3OI5iCypxSEmqyM7_9oghl_MGgK5f_6r65YkAEJxI1cn9V27iqbHbilnSj1GDkA7mMW5DwjtV3kY775Lnlu6-8nsj7J3coY?key=ICmaExCFdCpmANDz019PqA)

### Kapitel 7: Error Handling

Innan jag läste detta kapitel har jag alltid hanterat mina errors inom samma funktion där jag har en try catch. Nu har jag följt det Robert Martin påstår genom att både bryta ut funktionen och att funktioner ska "do one thing". Jag har gjort detta inom t.ex generateExercises där jag bröt ut funktionen där en hanterar koden och en hanterar error meddelande som i exemplet nedan. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXczjklw-n5V3tQPtE_qNVZMqLRxsX58lHTyOrjRyIMVDhafIh3IsfsqFC8h_F7V4gYXWk1TKa05LukXPZTq6xAnOeO5y7v29qlPapnSC_Vr9pw7MOiHnz62qDwVFKlhn1dt_2FC0DrHITm2H3kXC0BR84ED?key=ICmaExCFdCpmANDz019PqA)

### Kapitel 8: Boundaries

Jag använder ett API vilket innebär att jag måste följa reglerna inom detta kapitel noggrant. Jag gjorde detta inom min workoutPlanner.js i min modul där jag har en funktion som hanterar API interactions, sedan använder andra funktioner datan som fetchExercises får. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_InhchAOiJL0MU9D0bczXBdemvWOySnA-2U8az0zmJxAhKG13qWvqQ4lXDlatTAbSO_2ddAIlU8845D0eJuAw1hdx_HC7j-mdQvv1T780eC-MZpcckGFzRFPI-A5Qwutlz4xL-1KN6fV4ChHL0_e5mrmn?key=ICmaExCFdCpmANDz019PqA)

### Kapitel 9: Unit Tests

Detta är ett kapitel som jag har ej använt. Jag har det svårt med att jobba inom TDD (test driven development) och tycker att bara skriva koden rent ut genom att följa instruktionerna är mycket enklare för mig. Jag har också inte använt unit tests men där jag använder ett API tycker jag att jag borde ha gjort det där det hade underlättat testning. 

### Kapitel 10: Classes

När jag lämnade in min modul för första gången hade jag bara två klasser och nu har jag utvecklat min modul till tre klasser. Jag skulle kunna utöka detta ännu mer genom att dela upp min workoutUtility in i två klasser men jag har märkt hur mycket det underlättade förståelsen av koden när man bröt ut det inom fler klasser. 

### Kapitel 11: Systems

Jag tycker att detta kapitel är ett av de viktigaste för mig. När jag lämnade in min modul för första gången var min createWorkoutSplit nästan 100 rader kod. Jag har nu brutit ut det så att den är mer anpassad för andra att fortsätta bygga på den genom att bryta ut den. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdGwZ7lfmwHtmW-sWUQQFLqD1gMYE5VCNKXNT4oFccAv_nuuX-GJaZL1Mt_hTpwPkyRjhqeWnRCfe_dyyIS_OYYyy-XiuZhDIBzfo1C-GYgX3uz_SjiCEig2D-dWuOk8GVbJb0Mg4tMr0PkyDjMLvgwOlyf?key=ICmaExCFdCpmANDz019PqA)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeJXTAF_ZKSfLRlx0nSaM6H8eLucZtpCV4U89KwSUDV92deeUE4ECEUPGTmUbEB41RMVLrQN8biDwG_qhbQOd1ehK93k6_uoa6EETyrCYPNv2LJDHlfa2HSueVqlD-cJn9ETEHWg93EmECu0GYnjl9V_8Wo?key=ICmaExCFdCpmANDz019PqA)

Som man ser ovan finns det två olika funktioner. En som hanterar splits och en som skapar en workout split. Jag hade detta inom samma funktion innan och nu att jag har separerat det märker jag hur mycket lättare det är att förbättra min kod.
