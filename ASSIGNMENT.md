# Individuell examination: Interval App - for all you timing needs || Lucas Da Silva

## Bakgrund

Förmågan att mäta tid är väldigt användbart. Från träning till studier är en bra timer guld värd.

Några användningsområden för en bra tidtagar-app är:

- [Timeboxing](https://medium.com/dreimannzelt-adventures/7-secrets-to-master-timeboxing-66a744ea9175)
- [Pomondoro metoden](https://www.metodbanken.se/post/pomodorometoden)
- [Parprogrammering](https://sv.wikipedia.org/wiki/Parprogrammering)

## Uppdragsbeskrivning

Ert uppdrag är att skapa en ultimata tidtagar-webbappen för mobiler. Den är enkel till sin funktion, men kan visa tid på flera olika sätt, se vybeskrivningar samt screens nedan.

Viss remix av utseende får göras, ex. lägga till färger, ändra fonter etc, dock skall funktionalitet vara densamma.

## Funktionella krav

| Vy                | Beskrivning                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loading           | en loading screen där endast logotyp samt slogan finns med. Du kommer vidare till _Set Timer_ genom att klicka på logotypen.                                                                                                                                                                                                                                                                                                             |
| set timer         | Här ställer du in hur många minuter timern skall gå. **OBS! VG krav** Du anger också om timern ska gå i intervaller, d.v.s. starta om efter den nått 0. Valet att även lägga in en 5 minuters pause mellan varje intervall finns. Detta är väldigt användbart i ex. studiesyfte med [pomondoro metoden](https://www.metodbanken.se/post/pomodorometoden) alt. när man [parprogrammerar](https://sv.wikipedia.org/wiki/Parprogrammering). |
| analog timer      | Här visas tiden med en analog urtavla där minut samt sekundvisaren rör sig. En knapp för att avbryta nuvarande timer och återgå till _set timer_ skall finnas.                                                                                                                                                                                                                                                                           |
| digital timer     | Här visas tiden med en digital klocka som uppdateras varje sekund. En knapp för att avbryta nuvarande timer och återgå till _set timer_ skall finnas.                                                                                                                                                                                                                                                                                    |
| alarmvy           | Denna vy visas när tiden är ute. En knapp för att gå till _set timer_ skall finnas.                                                                                                                                                                                                                                                                                                                                                      |
| text timer **VG** | Visa tiden med hjälp av skriven text.                                                                                                                                                                                                                                                                                                                                                                                                    |

På samtliga timervyer skall en _meny-ikon_ i hörnet visa en meny där användaren ska kunna växla mellan olika timer-vyer. Notera att dessa byten inte skall avbryta eller nollställa timern.

En interaktiv mockup hittar ni [här](https://www.figma.com/proto/AerBB2Yx3IiT9iL8U8akVR/Interval-app-1.0?node-id=23%3A176&scaling=scale-down&page-id=23%3A3).

Figma filen hittar du [här](https://www.figma.com/file/AerBB2Yx3IiT9iL8U8akVR/Interval-app-1.0).

## Tekniska krav

- Att jobba med tid i programmering kan snabbt bli väldigt komplext. Därför är det högst rekomenderat att använda ett bibliotek som underlättar just detta. Ex. [EasyTimer.js av Albert Gonzalez](https://albert-gonzalez.github.io/easytimer.js/).
- Gjord i antingen React med framer motion **eller** html, css och vanilla JS med anime.js.
- Använder sig av någon CSS animering (transitions eller keyframes).

## Betygskriterier

**För Godkänt:**

- Uppfyller alla funktionella och tekniska krav.

**För Väl Godkänt:**

- Har implementerat vyn för "text timer".
- Har implementerat funktionaliteten för intervaller.

## Inlämning

Inlämning sker på Azomo med en länk till ditt Github repo med din kod senast 25/10 23:59.

## Muntlig redovisning

Denna kurs har en obligatorisk muntlig redovisning som sker på fredagen 25/10. Den kommer ske i grupper av cirka 10 personer. I tre omgångar:

- Kl 13-14
- kl 14-15
- kl 15-16
