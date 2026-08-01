# QA Acceptance Matrix & E2E Testing Specifications
## "bas." Personal Portfolio Website

**Document Version:** 2.0  
**Methodology:** Agentic Development Life Cycle (ADLC) — *Verify Phase*  
**Testing Stack:** Vitest, React Testing Library, Playwright, Storybook 8, axe-core  
**Purpose:** Panduan kriteria verifikasi mandiri bagi AI Agent dan developer sebelum menyetujui (*approve*) setiap commit/phase.

---

## 1. Automated Unit & Integration Testing Matrix (Vitest + RTL)

Setiap utilitas di `src/core/lib/`, hook di `src/core/hooks/`, dan komponen (diposisikan dalam aturan **Folder-per-Component**) wajib memenuhi skenario unit testing berikut:

| Target Component / Utility | Test File Path | Minimum Mandatory Test Cases |
|---|---|---|
| `src/core/lib/cn.ts` | `src/core/lib/cn.test.ts` | • Merge standard Tailwind classes<br>• Override conflicting classes correctly |
| `src/core/lib/formatDate.ts` | `src/core/lib/formatDate.test.ts` | • Format 'YYYY-MM-DD' to readable string<br>• Handle relative time ("2 days ago") |
| `src/core/hooks/useTheme.ts` | `src/core/hooks/useTheme.test.ts` | • Toggle between 'light' and 'dark'<br>• Persist selection in localStorage<br>• Respect OS prefers-color-scheme |
| `src/core/components/ui/Button/Button.tsx` | `src/core/components/ui/Button/Button.test.tsx` | • Render primary, secondary, and ghost variants<br>• Respond to `onClick` and `onKeyDown (Enter/Space)`<br>• Have `focus-visible` ring |
| `src/core/components/ui/Badge/Badge.tsx` | `src/core/components/ui/Badge/Badge.test.tsx` | • Render with Bibit green background `#EBF8F3` and text `#00AB6B`<br>• Accessible text contrast |
| `src/features/blog/components/VocabCard/VocabCard.tsx` | `src/features/blog/components/VocabCard/VocabCard.test.tsx` | • Flip 3D card when clicked or pressed Enter<br>• Announce meaning via `aria-live` |

---

## 2. Playwright E2E User Journey Scenarios (`e2e/*.spec.ts`)

Playwright menjalankan pengujian pada **3 Fitur Utama** (`homepage`, `blogs`, `blog`):

```
+-------------------------------------------------------------------------------+
|                            E2E USER JOURNEYS (PLAYWRIGHT)                     |
+---------------+---------------------------------------------------------------+
| Scenario ID   | Description & Expected Pass Condition                         |
+---------------+---------------------------------------------------------------+
| E2E-01        | Feature 1 (`homepage`): Main Homepage & Sections Navigation   |
|               | • Open `/` -> verify title "bas. — Senior Frontend Engineer"  |
|               | • Verify Hero, About, Experience, Now, and Contact sections   |
|               | • Click "Read my writing" -> navigates to `/writing` < 500ms   |
+---------------+---------------------------------------------------------------+
| E2E-02        | Dark/Light Theme Persistence                                  |
|               | • Click theme toggle -> class `.dark` applied to `<html>`     |
|               | • `--accent` shifts from `#00AB6B` to `#00BF71`               |
|               | • Reload page -> `.dark` remains active                       |
+---------------+---------------------------------------------------------------+
| E2E-03        | Feature 2 (`blogs`): Blog Listing Page                        |
|               | • Open `/writing` -> verify article list renders              |
|               | • Click tag filter "React" -> only matching posts appear      |
+---------------+---------------------------------------------------------------+
| E2E-04        | Feature 3 (`blog`): Blog Detail & MDX Reader                  |
|               | • Open post `/writing/[slug]` -> check code block Copy button |
|               | • Verify `VocabCard` interactive kanji study flip animation   |
+---------------+---------------------------------------------------------------+
| E2E-05        | Homepage `/now` Section Seniority Frame & Hobby Tracker       |
|               | • In homepage `/now` section -> verify heatmap squares render |
|               | • Verify Japanese JLPT N5 card shows 40% progress bar         |
|               | • ASSERT ZERO progress bars on React, TypeScript, or CSS      |
+---------------+---------------------------------------------------------------+
| E2E-06        | Homepage `/contact` Section Form Validation                   |
|               | • In homepage `/contact` section -> submit empty form         |
|               | • Fill form & submit -> mock success toast displayed          |
+---------------+---------------------------------------------------------------+
```

---

## 3. Accessibility (a11y) & WCAG 2.1 AA Checklist

Setiap halaman di App Router wajib lolos pengujian **axe-core** dengan kriteria nol (*zero*) pelanggaran berat/kritis:

- [ ] **Color Contrast Ratio (AA Standard):**
  - Warna teks hijau Bibit `#00AB6B` pada latar putih (`#FFFFFF`) harus bernilai rasio kontras ≥ **4.5:1** (teks normal) atau ≥ **3:1** (teks judul > 24px/bold 18px).
  - Dalam Dark Mode (`#0A0A0B`), hijau khas `#00BF71` harus memenuhi standar rasio kontras ≥ **6.8:1**.
- [ ] **Visible Keyboard Focus Rings:**
  - Semua tombol, tautan navigasi, dan elemen interaktif wajib memiliki `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00AB6B]`.
- [ ] **Semantic HTML Hierarchy:**
  - Hanya ada tepat **satu elemen `<main>`** dan **satu judul `<h1>`** pada setiap halaman.
  - Urutan judul hierarkis (`<h1>` ➔ `<h2>` ➔ `<h3>`), tidak boleh melompati level demi gaya tampilan.
- [ ] **Screen Reader Support:**
  - Tersedia tautan **"Skip to content"** tersembunyi yang muncul saat penekanan tombol `Tab` pertama kali.
  - Ikon sosial dan tombol ikonik wajib dilengkapi dengan atribut `aria-label` yang bermakna.

---

## 4. Storybook 8 & Responsive Breakpoint Verification

Sebelum menyelesaikan tahap implementasi komponen UI, pengujian Storybook dilakukan pada **4 *responsive breakpoint*** standar yang telah disepakati di `docs/FIGMA_PROMPT.md`:

```
1440px (Desktop Wide)  ➔ 1024px (Standard Tablet/Laptop) ➔ 768px (Tablet Portrait) ➔ 375px (Mobile Portrait)
```

### Kriteria Kelulusan Storybook:
1. **Light & Dark Theme Switcher:** Semua cerita memiliki *toolbar selector* untuk memverifikasi tampilan pada mode terang dan gelap tanpa *color clipping*.
2. **No Horizontal Overflow:** Pada ukuran `375px`, tidak boleh ada elemen (seperti tabel atau baris kode) yang memicu scroll horizontal pada *root body*.

---

## 5. Husky Pre-Commit & Pre-Push Quality Gates

Matriks ini diotomatisasi langsung melalui *git hooks* proyek:
1. **Pre-Commit Hook (`pnpm lint` & `pnpm test`):**
   - Menolak commit jika `eslint` menemukan tipe `any` atau impor terlarang antar-layer (`@features` mengimpor `@app`).
   - Menolak commit jika pesan tidak mematuhi *Conventional Commits* (`feat:`, `fix:`, `docs:`, dll.).
2. **Pre-Push Hook (`pnpm build`):**
   - Menolak *push* ke remote Git jika Next.js gagal membuat build statis/SSR pada tahap pengecekan tipe TypeScript.
