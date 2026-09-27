# Putna Bar | Cafe & Cocktails 🍸

Vibrant, modern Single Page Application (SPA) pro **Putna Bar | Cafe & Cocktails** v historickém centru Hradce Králové.

![Putna Bar Hero Preview](https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80)

---

## ✨ Klíčové vlastnosti

- **Vibrant Dark Design System**: Hluboká temná paleta (charcoal, obsidian, midnight navy) doplněná zářivými neonovými akcenty (neon pink, royal purple, warm amber).
- **Hero sekce s atmosférou**: Působivý vizuální úvod, claim, rychlé odznaky a okamžitá výzva k rezervaci.
- **Integrovaný rezervační systém**:
  - Responzivní vyskakovací okno (`ReservationModal.tsx`) s rozostřeným pozadím a zářivým neonovým lemováním.
  - Vložený oficiální rezervační widget Resos: `<iframe src="https://putna-bar.resos.com/booking" width="100%" height="600px" frameBorder="0" style={{ borderRadius: '0.5rem' }}></iframe>`.
  - Přímý záložní odkaz pro otevření v novém okně.
- **O nás (Vibe)**: 4 pilíře baru – útulná atmosféra, profesionální servis a mixologie, letní venkovní zahrádka v uličce Tomkova a dog-friendly přístup.
- **Interaktivní nabídka drinků**:
  - Dynamické filtrování: *Signature drinky*, *Moderní koktejly*, *Čepované pivo & Cafe*.
  - Chutné chuťové profily, detailní složení, objemy, ceny a autentické fotografie.
- **Vizuální galerie**: Život v baru, mixologické řemeslo a kouzlo starého města.
- **Kontakt & Otevírací doba**:
  - **Adresa**: Tomkova 139/22, Hradec Králové
  - **Otevírací doba**: St–Čt 14:00–22:00, Pá 14:00–00:00, So 16:00–00:00
  - Dynamický indikátor otevřeno/zavřeno podle reálného času v ČR.
  - Integrovaná Google mapa a přímé prokliky na navigaci, telefon a Instagram.

---

## 🛠️ Použité technologie

- **Vite** – bleskový bundler & dev server
- **React 19** & **TypeScript** – typově bezpečné komponenty a moderní hooky
- **Tailwind CSS v4** – moderní stylování s `@theme`, skleněnými morfickými efekty a neonovými stíny
- **Framer Motion** – plynulé animace zjevení, layout transitions a animovaný modál
- **Lucide React** – elegantní vektorové ikony

---

## 🚀 Spuštění projektu lokálně

1. **Instalace závislostí:**
   ```bash
   npm install
   ```

2. **Spuštění vývojového serveru:**
   ```bash
   npm run dev
   ```

3. **Sestavení produkčního balíčku:**
   ```bash
   npm run build
   ```

---

📍 **Putna Bar**: Tomkova 139/22, 500 03 Hradec Králové  
📅 **Rezervace online**: [putna-bar.resos.com/booking](https://putna-bar.resos.com/booking)
