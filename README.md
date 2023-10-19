# kinderguide-frontend

## Stack:

- Html5
- SCSS
- BEM
- React
- Redux Toolkit
- Axios
- Storybook

## Available Scripts

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

```
npm run sb
```

Launches Storybook.

```
npm run commit
```

Generates a commit message using Commitizen.

## Contributing

To contribute to this project, please follow these steps:

1. Clone this repository.
2. Create a new branch from the `develop` branch for your work.
3. Make your changes and commit them using the following command:
   (This command includes automatic linting and formatting)
   ```
   git add . && npm run commit
   ```
4. Push your branch to GitHub.
5. Create a pull request from your branch to the `develop` branch.
6. Add someone from the team as a reviewer for cross-review.

Please note that your changes should pass linting and formatting checks. If you encounter any issues or need assistance,
feel free to reach out to the team.

Happy coding!

## Файловая структура проекта(пример):

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
  ├──utils
  │    └── constants.jsx
  ├──styles
  │    ├──abstracts
  │    │  ├── constants.scss
  │    │  ├── placeholders.scss
  │    │  └── mixins.scss
  │    ├──base.scss
  │    └──index.scss
  ├──api
```
