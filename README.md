# Tài xế 247

Landing page dịch vụ lái xe hộ 24/7 — khi đã uống rượu bia, đưa bạn và xe về nhà an toàn.

Hotline: **0973 998 188**

## Chạy local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel (khuyến nghị)

1. Vào [vercel.com/new](https://vercel.com/new)
2. Import repo `Tranducvu1/thuexe`
3. Framework: Vite — Build: `npm run build` — Output: `dist`
4. Deploy

Hoặc CLI:

```bash
npx vercel --prod
```

### GitHub Pages (Actions)

Workflow `.github/workflows/deploy-pages.yml` tự build & publish khi push `main`.

URL: https://tranducvu1.github.io/thuexe/
