# Bibit.id Green Color System
## Extracted Color Tokens for "bas." Portfolio

Warna hijau khas **Bibit.id** diekstrak langsung dari stylesheet resmi (`https://bibit.id/`) untuk digunakan pada desain website portfolio.

---

### 1. Extracted CSS Custom Properties (Ready to Use)

Berikut adalah variabel CSS resmi yang diekstrak sesuai format yang diminta:

```css
:root {
  --accent: #00AB6B;         /* hijau Bibit light mode (--green-default) */
  --accent-light: #EBF8F3;   /* versi pucat untuk background (--green-low) */
  --accent-border: #CCEEE1;  /* versi border (--green-high) */
}

.dark {
  --accent: #00BF71;         /* hijau Bibit dark mode (lebih terang sedikit, --color-primary) */
}
```

---

### 2. Breakdown Warna & Asal Ekstraksi (Bibit.id Official CSS)

| Token Name | Hex Code | HSL Equivalent | Bibit CSS Original Variable | Penggunaan Utama |
|---|---|---|---|---|
| `--accent` (Light) | `#00AB6B` | `hsl(158, 100%, 34%)` | `--green-default` & `<meta name="theme-color">` | Warna utama Light Mode: tombol primary, teks link aktif, brand monogram, indikator status. |
| `--accent-light` | `#EBF8F3` | `hsl(158, 54%, 95%)` | `--green-low` | Latar belakang (background tint) untuk tag pill, badge, hover state pada kartu, dan menu navigasi aktif. |
| `--accent-border` | `#CCEEE1` | `hsl(158, 48%, 87%)` | `--green-high` | Border pada kartu aktif, garis pemisah chart, dan ring fokus input. |
| `--accent` (Dark) | `#00BF71` | `hsl(155, 100%, 37%)` | `--color-primary` | Warna utama Dark Mode: sedikit lebih terang dari `#00AB6B` agar kontras dan terbaca jelas di latar belakang gelap (`#0A0A0B` / `#141415`). |

> **💡 Catatan Dark Mode Tambahan:**
> Jika dibutuhkan versi yang *lebih bercahaya (glow)* pada latar hitam pekat untuk hover state di Dark Mode, Anda juga bisa memakai variasi **`#00D27F`** (`hsl(156, 100%, 41%)`).

---

### 3. Perbandingan dengan GreatFrontEnd Emerald
* **GreatFrontEnd Emerald (`#059669`):** Sedikit lebih gelap dan dewasa dengan nuansa forest green.
* **Bibit Green (`#00AB6B`):** Lebih segar, cerah (vibrant), dan modern khas aplikasi fintech terdepan Indonesia. Sangat cocok dan elegan dipadukan dengan desain *minimalist Apple-inspired*.
