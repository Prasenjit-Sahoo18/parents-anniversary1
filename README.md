# Bapa & Ma — Anniversary Website

Lightweight React + TypeScript project (Vite) for a glassmorphism, animated anniversary page.

Quick start:

```bash
npm install
npm run dev
```

## Add Your Media

### 1. Kesariya background music
Place **Kesariya Tera Ishq Hai Piya-(Mr-Jat.in).mp3** in the `public` folder. Music auto-plays in the background; if the browser blocks it, any click on the page will start it.
```powershell
Copy-Item "C:\Users\91986\Downloads\Kesariya Tera Ishq Hai Piya-(Mr-Jat.in).mp3" -Destination "c:\Users\91986\Music\docu\Desktop\anniversary\public\Kesariya Tera Ishq Hai Piya-(Mr-Jat.in).mp3" -Force
```

### 2. Five anniversary images
Copy your 5 photos to `public/photos/` as **photo1.png** through **photo5.png**.

Or run the included script (PowerShell, run from project folder):
```powershell
.\copy-images.ps1
```

Features: floating hearts, auto-playing Kesariya background music, cream + pitch red love theme, auto-cycling gallery, countdown. Music autoplays on load; if the browser blocks it, any click starts playback.
