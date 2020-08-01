# voyagerinstruments.com * GatsbyJS and Sanity.io Starter

## Setup
* Go to the https://manage.sanity.io/ and create the new dataset titled `production` (Public)
* Go to the https://manage.sanity.io/ and set the CORS origins for (make sure you click `Allow credentials`):
  * http://localhost:3333
  * https://voyagerinstruments.sanity.studio
  * https://voyagerinstruments.netlify.app
  * https://voyagerinstruments-studio.netlify.app
* Copy the `.env.development.template` and rename to `.env.development`
* Go to the https://manage.sanity.io/ and set the following on the .env:
  * Set the Token for `Website preview` (Read) and add the token to .env file
  * Set the `Project ID` on the .env file
  * Set the `Dataset` on the .env file (typically it's `production`)
* Setup the Netlify account for the public site.
  * Connect to your github repo
  * Build command: `npm run build`
  * Publish directory: `web/public`
  * Advanced settings set: `GATSBY_SANITY_DATASET`,  `GATSBY_SANITY_PROJECT_ID` and `SANITY_READ_TOKEN`
* Setup the Netlify account for the studio/admin site.
  * Connect to your github repo
  * Build command: `npm run build && cp ./netlify.toml dist`
  * Publish directory: `studio/dist`
  * Advanced settings set: `GATSBY_SANITY_DATASET`,  `GATSBY_SANITY_PROJECT_ID` and `SANITY_READ_TOKEN`
* In the `/studio` directory update the following:
  * Update the `/studio/sanity.json` file's projectID and dataset
  * Update the `/studio/dashboardConfig.js` file's github and netlify
* In the `/web` directory update the following:
  * Update the `/web/client-config.js` file's projectID and dataset
* In the root run `npm run graphql-deploy` to deploy the current base setup to sanity's server
* In the root run `npm run dev` to get the site running locally.

## Quick start
* Clone this repository from your GitHub account
* `npm install` in the project root folder on local
* `npm run dev` to start the studio and frontend locally
   * Your studio should be running on [http://localhost:3333](http://localhost:3333)
   * GraphQL playground running on [http://localhost:8000/___graphql](http://localhost:8000/___graphql)
   * Your frontend should be running on [http://localhost:8000](http://localhost:8000)
* `npm run build` to build to production locally

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

Github Actions
![.github/workflows/action.yml](https://github.com/brentrobbins/voyagerinstruments.com/workflows/.github/workflows/action.yml/badge.svg)