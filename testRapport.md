# Testrapport

## introduktion

Jag kommer att göra manuella testfall för att testa min webbapplikation.

Anledningen till varför jag gör manuella tester är på grund av att det var rekommenderat inom 1DV610 Laboration 3 dokumentet. Min webbapplikation är också ganska lätt att använda och det finns inte så mycket som behövs att kontrolleras.

## Det som kommer att testas

Det som kommer att testas inom systemet är framförallt funktionaliteten av generate exercises, create workout och create workout-split vilket är huvudfunktionerna inom webbapplikationen. Jag kommer att testa informationen man får och error meddelande. Jag kommer också att testa om applikationen är anpassad för full screen och telefonläge.

## Det som kommer att testas inom system testet

### Funcitonality

Generate Exercises data

Create Workouts data

Create Workout Splits data

### User interaction

Homepage Links

Navbar

Screen sizes

### Errors

Error handling

## Test environment

Browser version: Firefox 131.0.3

Operating system: macOS

Network: Deployed project via Netlify

## Execute tests

### List of all tests

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd0a-Z5CVXPHCnRjZE54U1v4Bb_aFlelWMr2lkRxz_SViUvsSbqF_7fZnmtPLtVamUqPFLyVvT1tGIQmrLGXQdOV2XpEEn8wpttJFiVd5t367abI3qQkwrewseZHj40qbTTNjJwk-5zu3UpOl2mVQWd3169?key=GxCE6c4ii23h9jaI6XdrUw)

# Test cases

## 1.1 generate exercise data

### Vad som kommer att testas:

Övningar som man får efter man matar in muskel, type och difficulty kommer att testas. Jag kommer att kolla så att korrekt data ges till användaren.

### Steg:

Öppna webbapplikationen

Navigera till generate exercises 

Mata in korrekt data 

Kolla resultat

### Förväntade resultat:

Förväntade resultatet är att övningar som är relaterade till datan som användaren matade in returneras.

### Verklig resultat: 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcABQUdLYWzYi2VNZssl1P9nUNExyH6Bxyz44jYUo2fFGbWXfz_LIFWem20q5fA3T1Zn2epMDqc7als1hJe5ONiM6DZPSQYosI22YuAyk6wB-mleK7HA-jvnvX5PChSyQzFk_G8DCj2TQgkgdsXmWnqb_PI?key=GxCE6c4ii23h9jaI6XdrUw)

Verkliga resultatet var en mängd övningar som var relaterade till den datan som användaren gav.

## 1.2 Create workout data

### Vad som kommer att testas:

Det som kommer att testas är informationen man får när användaren ger korrekt data till create workout-delen av webbapplikationen.

### Steg:

Öppna webbapplikationen 

Navigera till create workout 

Mata in korrekt data 

Se resultat

### Förväntade resultat:

Förväntade resultat är att man får en hel workout-plan för en dag som har korrekt muskel, type och difficulty.

### Verklig resultat:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdzAsFmOjWLTEJ7nK0xkutuNzmQtOJcIoPITKxi0IeN737FEyNcPyndJWfcPCFiKGpNOL1H84CAr-P9kutoLesuVQMFlCF4UENH6Bz0rIdB2ZiIazaoOPC0KuppswFUgSkffpRJoBoJUVcSjmZ2Jmbyz-Om?key=GxCE6c4ii23h9jaI6XdrUw)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcgfcYXYnoLFB2urP8tVm3sw-8C_gWu42adEFZ4g0IfxcRGyMXUi_VFOHTnxLyd3rt7CdGTXqA464XbbrDJYNxPAL_soXF7O-dfZX9Xxk6dlck997sK4D2IbnOX2gyO8FHf-gzyTEr5FsN6ED2yZ0HNLiDD?key=GxCE6c4ii23h9jaI6XdrUw)

Verkliga resultatet var att jag fick tre övningar för varje muskel som jag matade in. allt stämmde.

## 1.3 Create workout split data

### Vad som kommer att testas:

Det som kommer att testas är informationen man får när man skapar en workout split för hela veckan.

### Steg:

Öppna webbapplikationen 

Navigera till create workout split 

Mata in korrekt data 

Se resultat

### Förväntade resultat:

Förväntade resultatet är att man får en workout split som är anpassad till den datan som användaren matade in.

### Verklig resultat:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc2yJKPcC0NismV0Y3rIVwLjzaP9h1kXC7nOXTGSEn5fnxPbWc7CEq8zHgpRuJ916rgoCajMk47MYpAQR8IB_1BX6sFnnXxqoNVFMtip3UDi6GivryTGIoBPKOxegs5GB3V88YDaPatQhaLyU6TiseluKOx?key=GxCE6c4ii23h9jaI6XdrUw)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcB0iyMfE8aidBHQrw6i7evTEqfbtuJdJSEgddcifpSo9THDak5aveN0Vs11t2aQtP6mVu02dInmWps8abnlLfAbrPclIWqO8FzKoFFv5a4Jz9gD7OyogZD0vCI1Rgmc_OqnqoIqNEZdaF5gfLZYhpt-hwH?key=GxCE6c4ii23h9jaI6XdrUw)

Verkliga resultatet var att jag fick ett workout split för en hel vecka som var optimerad till informationen som användaren gav. Det fanns rest days och övningar till alla dagar inom splittet.

## 1.4 Homepage links

### Vad som kommer att testas:

Det som kommer att testas är länkarna på homepage.

### Steg:

Öppna webbapplikationen 

Tryck på alla länkar på home page 

Säkerställa att man kom till den korrekta delen av webbapplikationen

### Förväntade resultat:

Förväntade resultatet är att man kommer till där man borde alltså det som står på länken. Om jag t.ex trycker på create workout borde jag komma till create workout.

### Verklig resultat:

Det går ej att visa att länkarna fungerar med bilder men jag testade alla och kan säkerställa att de funkar där jag kom till korrekt sida med varje länk.

## 1.5 Navbar

### Vad som kommer att testas:

Det som kommer att testas är om länkarna inom navbar funkar. Detta kommer att testas när den är på full screen och i telefonläge.

### Steg:

Öppna webbapplikationen 

Säkerställa att den är i fullscreen

Tryck på länkarna för att se om de funkar i fullscreen

Verifiera att man kommer till rätt del av webbapplikationen

Minska ner sidan till telefonläge

Tryck på alla länkar 

Verifiera att man kommer till korrekt del av webbapplikationen

### Förväntade resultat:

Förväntade resultatet är att man alltid kommer till rätt del av webbapplikationen genom länkarna.

### Verklig resultat:

Det går ej att visa verkliga resultatet med bilder men jag kan säkerställa att länkarna funkar när den är full screen och när den är på telefonläge.

## 1.6 Screen sizes

### Vad som kommer att testas:

Det som kommer att testas är att informationen, menyn och hela webbapplikationen funkar i fullscreen och i telefonläge.

### Steg:

Öppna webbapplikationen 

Säkerställa att den är i fullscreen

Testa att mata in korrekt data inom generate exercises

Se till att man kan se resultat

Verifiera att webbapplikationen går att använda i fullscreen

Gör webbapplikationen till telefonläge

Testa att mata in korrekt data inom generate exercises 

Verifiera att webbapplikationen går att använda i telefonläge

### Förväntade resultat:

Förväntade resultatet är att webbapplikationen går att använda inom fullscreen och telefonläge.

### Verklig resultat:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfvy2uKvL6-sFVtc2vN0XTJKHpGCe-VFG2qhtilrYWTdQPw2nUJOCEqB4IRNP1RFHnsedGHRa5C9f7mIbagivHYoYgFWg5gIHYOV_tKBkOGH6WvEFn069w9DmlWxn7QsFVvxXbethXofcMFOthREqO6Z7M?key=GxCE6c4ii23h9jaI6XdrUw)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe9tdPhulrJJtKYRKW6NEee-3qp1mXV965pmXqmbmeW4R9mA6JCYNR_GbZT7nY-IJw9Qjj_DLV5gnAjsIBigZYxzY1TxiFNOYVvTAf94EzSbpmuhWhs333NGW7xnmX3JHKGaCwRaDrF0a0fdqepXVUN85wh?key=GxCE6c4ii23h9jaI6XdrUw)

Bilderna ovan är från telefonläge. Som man ser så går det att använda navbar och man kan skriva in data och se resultat utan problem.

## 1.7 Error handling

### Vad som kommer att testas:

Det som kommer att testas är att användaren får errors när de skriver in felaktig data inom generate exercises.

### Steg:

Öppna webbapplikationen

Navigera till generate exercises

Skriv in ett värde som är fel och går ej igenom 

Se resultat

### Förväntade resultat:

Förväntade resultatet är att man får ett felmeddelande som står att man har matat in fel data.

### Verklig resultat:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeFkaiiIdOEdA3CcA3V8wD0R_L4ip76JnJb0mRuB_mnj3iAacb-GMU_GZc6PowhmQKq7ZczlTwnooSf1ltA6AS6G9xXLLxB33VaXILoFB-FfhXM2O5qjMDz0jp-2gxEMBz9Usr2CbtZIaIsWhMl3XVr99n4?key=GxCE6c4ii23h9jaI6XdrUw)

Verkliga resultatet var att felmeddelandet som står "No exercises found for the selected criteria."
