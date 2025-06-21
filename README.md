# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Часть 1: Инструкция по включению всех отключённых сервисов AWS
Эти шаги позволят тебе восстановить всё, что ты отключил (например, S3 Bucket для хранения сайта).

Шаги для S3 Bucket
Включить доступ к S3 Bucket:

Зайди в S3 Console.
Найди Bucket, который ты отключил (например, ab-testing-demo).
Перейди во вкладку Permissions.
Включи доступ:
Сними флажок с "Block all public access", если включена блокировка.
Подтверди изменения.
Загрузить файлы обратно:

Если ты удалил файлы из S3, загрузив их:
Перейди во вкладку Objects.
Нажми Upload → загрузи содержимое папки dist твоего проекта (например, index.html и другие файлы).
Включить Static Website Hosting:

Перейди на вкладку Properties.
Найди "Static Website Hosting" → Включи эту опцию.
Укажи:
Index Document: index.html.
Error Document: index.html (если это React SPA).
Нажми Save.
Проверить URL: После включения хостинга ты снова сможешь перейти по адресу:

http://YOUR_BUCKET_NAME.s3-website-REGION.amazonaws.com
