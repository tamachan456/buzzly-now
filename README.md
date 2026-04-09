# BUZZLY NOW - トレンド動画配信プラットフォーム

完全版 AdSense 対応のトレンド動画配信サービス。React + PWA で構成されています。

## 📦 セットアップ手順

### 1️⃣ フォルダを展開

ZIP ファイルを解凍して `buzzly-now` フォルダを取得してください。

### 2️⃣ npm install を実行

```bash
cd buzzly-now
npm install
```

### 3️⃣ ローカル開発サーバーを起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### 4️⃣ ビルド（本番環境用）

```bash
npm run build
```

`dist/` フォルダが生成されます。

---

## 🚀 Vercel へのデプロイ

### ステップ 1：GitHub にプッシュ

```bash
git init
git add .
git commit -m "BUZZLY NOW v1.0"
git remote add origin https://github.com/YOUR_USERNAME/buzzly-now.git
git push -u origin main
```

### ステップ 2：Vercel でデプロイ

1. https://vercel.com にアクセス
2. 「Import Project」をクリック
3. GitHub リポジトリを選択
4. 「Deploy」をクリック

---

## 🔧 AdSense セットアップ

### Publisher ID を取得

1. https://www.google.com/adsense にアクセス
2. アカウント作成
3. Publisher ID（`ca-pub-xxxxxxxxxxxxxxxx`）を取得

### ID を入力

以下の 2 箇所に Publisher ID を入力：

**1. public/index.html**
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
```

**2. src/AdBanner.jsx**
```javascript
data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
```

### AdSense スロット ID も入力

AdSense ダッシュボードから広告ユニットを作成し、スロット ID を取得。

**src/AdBanner.jsx** の以下に入力：
```javascript
data-ad-slot="0000000000"
```

---

## 📋 フォルダ構成

```
buzzly-now/
├ public/              # 静的ファイル
│ ├ index.html         # メイン HTML
│ ├ manifest.json      # PWA マニフェスト
│ ├ service-worker.js  # オフライン対応
│ ├ privacy.html       # プライバシーポリシー
│ ├ terms.html         # 利用規約
│ ├ contact.html       # お問い合わせ
│ └ about.html         # 説明ページ
├ src/                 # React コンポーネント
│ ├ App.jsx            # メインアプリ
│ ├ main.jsx           # エントリーポイント
│ ├ utils.js           # ユーティリティ
│ ├ api.js             # API（ダミーデータ）
│ ├ ads.js             # 広告挿入ロジック
│ ├ AdBanner.jsx       # 広告バナー
│ └ styles.css         # スタイル
├ package.json         # npm 設定
└ vite.config.js       # Vite 設定
```

---

## 🔥 フィーチャー

✅ React 18 + Vite  
✅ PWA 対応（オフライン対応）  
✅ Google AdSense 統合  
✅ プライバシーポリシー・利用規約完備  
✅ お問い合わせフォーム  
✅ Meta タグ・OG タグ完備  
✅ ダークテーマ  

---

## 💡 カスタマイズポイント

### データを増やす

`src/api.js` の `getAllTrends()` 関数を修正して、もっとコンテンツを追加してください。

### AdSense Publisher ID を置き換え

**重要：** デプロイ前に、自分の Publisher ID に置き換えてください。

```bash
# 検索して置き換え
ca-pub-xxxxxxxxxxxxxxxx → あなたの Publisher ID
```

### 会社情報を更新

- `public/about.html` - 会社説明
- `public/contact.html` - メールアドレス
- `public/privacy.html` - 連絡先

---

## 📞 サポート

問題が発生した場合は、`public/contact.html` のお問い合わせフォームを使用してください。

---

## 📄 ライセンス

© 2025 BUZZLY NOW. All rights reserved.
