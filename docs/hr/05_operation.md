---
title: Rad / Upotreba
---

# Pregled mobilne aplikacije

## 1. Lista uređaja

U ovom prikazu možete vidjeti popis uređaja u vašem vlasništvu.

![DeviceListViewApp](assets/DeviceListViewApp.jpg)

Odaberite jedan od prikazanih uređaja s popisa.

!!! info "Ako ne vidite nijedan uređaj, pretražite ovu dokumentaciju pomoću izraza „Dodavanje vlasništva nad punionicom (mobilna aplikacija)”."

---

## 2. Glavni pregled uređaja

U ovom prikazu dostupan je pregled toka energije i statusa punionice.

![MainDeviceView](assets/MainDeviceView.jpg)

1. Snaga solarnih panela, snaga EV punjača i postotak napunjenosti baterije  
2. Status uređaja  
3. Količina generirane energije (putem solarnih panela)  
4. Dostupna energija za EV vozilo i ostale potrošače (temeljeno na energetskoj procjeni)

!!! info "Dostupna količina energije ovisi o okolišnim uvjetima: jačini sunčeva zračenja, dobu dana, godišnjem dobu i temperaturi zraka koja utječe na performanse baterije."

5. Potrošnja Schuko (aux) utičnica  
6. U gornjem desnom kutu nalazi se ikona „olovke” kojom možete preimenovati svoj uređaj

Dodatne mogućnosti:

- **Location** – prikaz lokacije punionice  
- **Manual** – otvaranje korisničkih uputa

Na dnu su dostupne tri kartice:

1. **Overview** – trenutačni prikaz kao na slici  
2. **Control** – prikaz za upravljanje punionicom  
3. **Camera** – prikaz slike s web kamere punionice

---

## 3. Kontrola – upravljački prikaz uređaja

![DeviceControlView](assets/DeviceControlView.jpg)

U ovom prikazu dostupna su tri odjeljka:

1. **Lights Control** – omogućuje uključivanje i isključivanje rasvjete  
2. **EV Charger Control** – omogućuje uključivanje i isključivanje EV punjača  
3. **Sockets Control** – omogućuje upravljanje Schuko jednofaznim utičnicama

Dodatne opcije pri dnu prikaza:

1. **Device Light Dance** – uređaj izvodi „svjetlosni ples” radi lakšeg pronalaska u mraku  
2. **Start Folding Procedure** – pokreće postupak podizanja ili spuštanja strehe sa solarnim panelima

### Načini kontrole (svjetla, punjača i utičnica):

1. **Manual (instantna kontrola)** – promjena se primjenjuje odmah  
2. **Scheduled (zakazana kontrola)** – promjena se izvršava u definiranom vremenskom periodu

Zakazana kontrola ima dvije mogućnosti:

- **One time** – aktivacija u točno određenom periodu, s definiranim trajanjem  
- **Repeat** – ponavljanje na tjednoj bazi (npr. uključivanje rasvjete u 19:00, isključivanje u 00:00)

!!! info "Svaka nova naredba zamjenjuje prethodnu! Npr. 'One time' naredba bit će poništena ako se naknadno pošalje 'Manual' komanda."

## 3.1 Sklapanje strehe

!!! danger "Prije pomicanja strehe putem aplikacije, korisnik mora biti fizički prisutan pored punionice i upoznat s lokacijom tipke za zaustavljanje u nuždi."

![EStop](assets/EStop.png)

!!! warning "Korisnik je dužan osigurati da pomicanje strehe ne ugrožava sigurnost osoba niti prouzroči materijalnu štetu."

![Overview3](assets/Overview3.png)

1. Tipke za zaustavljanje u nuždi  
2. Schuko jednofazna utičnica  
3. EV punjač  
4. Web kamera  

!!! danger "Uređaj se kontrolira putem mobilne LTE mreže, zbog čega može doći do gubitka komunikacije tijekom procesa sklapanja. Korisnik stoga mora biti fizički prisutan uz punionicu i upoznat s lokacijom tipki za zaustavljanje u nuždi."

### Napomena tijekom nepovoljnih vremenskih uvjeta

!!! danger "Korisnik ili vlasnik punionice odgovoran je za praćenje vremenskih uvjeta, posebno jačine vjetra na lokaciji. U slučaju jakog vjetra (npr. izraženog njihanja strehe), korisnik je dužan spustiti strehu u transportni položaj i postaviti transportne stupove kako bi se osigurala stabilnost u spuštenoj konfiguraciji."

![FoldedDownAndSecured](assets/FoldedDownAndSecured.png)

### Kontrola u aplikaciji

Pogled za prihvaćanje uvjeta da je korisnik pročitao upute, da je prisutan pored punionice i da je osigurao sigurno pomicanje strehe.

![DeviceFoldingStartView](assets/DeviceFoldingStartView.jpg)

### Sučelje za dizanje/spuštanje strehe

Za pokretanje aktuatora strehe odaberite tipku smjera (Up/Gore, Down/Dolje) – pritisnite i držite tipku!  
Prilikom otpuštanja tipke, streha staje.

<iframe width="560" height="315" src="https://www.youtube.com/embed/hoim080mqY4?si=EB9EpQyoJKcOLy-V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

!!! danger "Internet/LTE veza može biti prekinuta s punionicom – tada spuštanje možete zaustaviti pomoću tipke za zaustavljanje u nuždi. Nakon ponovnog uspostavljanja veze, nastavite proces putem mobilne aplikacije."

!!! warning "Ako punionica ne komunicira sa serverom zbog loše LTE veze, koristite ugrađeni daljinski upravljač koji se nalazi u lijevoj razvodnoj kutiji (vidi upute pod 'Sekvenca inicijalnog dizanja strehe')."

![AppFoldingControls](assets/AppFoldingControls.jpg)


---

## 4. Kamera – dohvaćanje slika s punionice

![DeviceCameraView](assets/DeviceCameraView.jpg)

### Tipke za upravljanje prikazom slike

Iznad tabova na dnu ekrana nalaze se tri tipke za upravljanje prikazom slike s kamere:

1. **Dohvati sliku**  
   Dohvaća trenutnu sliku s kamere i prikazuje je na ekranu.

2. **Prikaz preko cijelog zaslona**  
   Proširuje prikaz slike preko cijelog zaslona uređaja.

3. **Preuzmi sliku**  
   Preuzima prikazanu sliku i sprema je na lokalni uređaj.

---

## Primjer korištenja aplikacije u kontroli punionice

<iframe width="560" height="315" src="https://www.youtube.com/embed/hp1TxnWh-L0?si=9eVGS6bAy1tPYr90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

# Limiti rada punionice

1. Ako se punionica nalazi na vrlo toplom području, sustav može odbiti punjenje vozila kako bi zaštitio inverter od pregrijavanja. Nakon hlađenja, punjenje se može nastaviti (nakon nove korisničke komande).
2. Tijekom zime može se očekivati smanjeni kapacitet baterija (zbog usporenih kemijskih procesa unutar same baterije).
3. U zimskim uvjetima (posebno kod nakupljanja snijega), solarni paneli imat će smanjenu učinkovitost, pa se punjenje baterija može protegnuti na nekoliko dana.

!!! warning "Preporučuje se da se punionica tijekom hladnih zimskih dana ne koristi kako bi se očuvalo zdravlje ugrađenih baterija."

!!! danger "Korištenje punionice pri temperaturama ispod 10°C i iznad 40°C ubrzava starenje baterijskog sustava!"

# Održavanje

1. Solarne panele potrebno je povremeno čistiti od prašine i nečistoća kako bi se održala maksimalna učinkovitost.
2. U slučaju snježnih oborina – obvezno očistiti panele nakon nakupljenih 10 cm snijega.

!!! warning "Nemojte dopustiti formiranje leda na strehi i solarnim panelima!"

3. Mehanizam „škara” i vodilice treba redovito (vizualno) pregledavati i čistiti kako bi rad sklopa bio neometan.
4. Povremeno provjerite ispušni otvor invertera za hlađenje kako biste se uvjerili da je protok zraka slobodan.
