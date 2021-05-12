[LIVE PREVIEW](https://netflix-clone-312522.web.app/)

## Netflix Clone App

This project is a simplified clone from Netflix. It uses [The Movie Database API](https://www.themoviedb.org/documentation/api) to search for movies and display details using Axios. The app is hosted on Firebase Hosting.

Username: `test@gmail.com`

Password: `abc123`

### Tools used
- React
- Redux
- Tailwind CSS
- Icons from [HeroIcons](https://heroicons.com/)
- Firebase Hosting and Authentication
- API from The Movie Database

### Running project locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### Install dependencies:

`run npm install in root project`

`Get API key from [TMDB](https://www.themoviedb.org/documentation/api)`

### Create `.env.local` file in root project and add: 
```
- REACT_APP_API_KEY=YOUR_API_KEY_HERE
- REACT_APP_FIREBASE_API_KEY= firebaseConfig.apiKey
- REACT_APP_FIREBASE_AUTH_DOMAIN=firebaseConfig.authDomain
- REACT_APP_FIREBASE_PROJECT_ID=firebaseConfig.projectId
- REACT_APP_FIREBASE_STORAGE_BUCKET=firebaseConfig.storageBucket
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID=firebaseConfig.messagingSenderId
- REACT_APP_FIREBASE_APP_ID=firebaseConfig.appId
```


### Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
