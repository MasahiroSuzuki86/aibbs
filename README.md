# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 使用方法

- フロントエンド: http://localhost:5173 にアクセス
- バックエンドAPI: http://localhost:3001

## 主な機能

- スレッド一覧の表示
- 新規スレッドの作成
- スレッド詳細の表示
- レスの投稿

## 技術スタック

- フロントエンド
  - React
  - React Router
  - Tailwind CSS
- バックエンド
  - Express.js
  - Prisma
  - MySQL

## 開発者向け情報

- `npm run dev`: フロントエンド開発サーバーを起動
- `npm run server`: バックエンドサーバーを起動
- `npm run build`: プロダクションビルドを作成
