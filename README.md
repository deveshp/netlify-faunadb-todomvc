# Netlify/FaunaDB TodoMVC Single Page Application

Have you ever wanted the simplest possible backend for your single page applications?
With multi-cloud powers? One you don't have to pay for unless there's traffic to your page, and can stand up
to even the most grueling loads. This version of TodoMVC uses [FaunaDB](http://fauna.com)
to manage login, access control, and storing user data, and is deployed using Netlify.

Additionally, it demonstrates using Netlify's Identity service and FaunaDB add-on, so you can deploy your own copy of this app with zero configuration. Once you are deployed, you can just replace some code with your own application code, and you'll have a database backed single page web app with user login. Ideal for kicking off your hackday app!

## Running

Don't skip any steps! Sometimes a deploy, or the first run of your Identity function, might take a few seconds. Don't despair, this flow is well tested and ought to just work. Assumptions we are making: you have latest NodeJS installed, you are familiar with Git, your workstation is connected to the internet.

1. Sign up or login to your Netlify account.
2. Click this button to fork and deploy this app. You can leave the FaunaDB Server Secret blank, we'll configure it using the Netlify CLI. &nbsp;&nbsp;&nbsp;<a href="https://app.netlify.com/start/deploy?repository=https://github.com/fauna/netlify-faunadb-todomvc"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
3. enable Identity on your app in the Netlify UI, while you are waiting for the first deploy to finish (it's not expected to work until we finish configuring it and redeploy).
4. Install the Netlify CLI: `npm install netlify-cli -g` and `netlify login`
5. Clone your forked repo locally: `git clone https://github.com/YOUR_GITHUB_ACCOUNT/netlify-faunadb-todomvc` and `cd netlify-faunadb-todomvc`
6. Inside your repo checkout run `npm install`
7. Link your checkout to your Netlify site with `netlify link` and selecting the default option.
8. Create your FaunaDB database with `netlify addons:create fauna`
9. Via the Netlify UI, trigger a redeploy.

When deploy finishes, visit your site (you can find the link on your Netlify dashbaord), and sign up as a user to manage your todo lists and items. (If you upgrade to Netlify's paid Identity service they add the option to login via Facebook, GitHub, etc.)

The application includes an `identity-signup.js` function which is triggered upon email confirmation to create the FaunaDB user. So click that confirmation link and start using your app. Any changes you push to your master branch will be automatically deployed, thanks Netlify!

## Developing Locally

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In the project directory, you can run:

#### `npm start`

Note you will need to link your app to a Netlify site and enable Identity, as described above. You may need to run this in your console if you have previously linked to a different Netlify site from `localhost:3000`:

```js
localStorage.removeItem("netlifySiteURL");
```

Run `npm start` to launch the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
