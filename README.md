Вот это изменение!!!

# kinderguide-frontend

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Файловая структура проекта организована примерно так:

```
src
  ├── components(компоненты, которые используются больше одного раза)
  │    ├── common(компоненты, которые используются больше двух раз)
  │    │   └── Button
  │    │       ├── Button.jsx
  │    │       ├── Button.scss
  │    │       ├── Button.stories.jsx
  │    │       └── index.js
  │    └── Signup-form(компонент, который используется два раза)
  │        ├── Signup-form.jsx
  │        ├── Signup-form.scss
  │        ├── Signup-form.stories.jsx
  │        └── index.js
  ├── pages(компоненты, которые являются результатом композиции других компоненты)
  │    ├──Home.jsx(главная страница)
  │    ├──Signin.jsx
  │    ├──Signup.jsx
  │    └──Profile(компонент личного кабинета)
  │       ├── index.ts
  │       ├── Profile.jsx
  │       └── components(компоненты, используемые только один раз только здесь в профиле)
  │           └── Profile-form
  │               ├── Profile-form.jsx
  │               ├── Profile-form.scss
  │               └── index.js
  ├── layouts
  │    ├── main.jsx
  │    └── auth.jsx
  ├──constants
  │    └── index.ts
  ├──styles
  │    ├──abstracts
  │    │  ├── constants.scss
  │    │  ├── placeholders.scss
  │    │  └── mixins.scss
  │    ├──base.scss
  │    └──index.scss
  ├──api
```

## Stack:

- Html5
- SCSS
- BEM
- React
- Redux Toolkit
- Axios
