This is a starter template for a full-stack MERN app
(Mongo, Express, React, Node)

Ready to be deployed on Heroku.

## Getting Started

In the root directory of the project...

1. Install node modules `npm i`.
2. Start development server `npm run start`.
3. Create .env add two variables

- SECRET=<SECRET-GOES-HERE>
- MONOGO_URI=<MONGO-URI-GOES-HERE> (recieved from mongo atlas when creating db)

## Next Steps

Assuming you use Hub for github command line tools, and Heroku cli tools

Install hub with homebrew. `brew install hub`
Install Heroku CLI `brew tap heroku/brew && brew install heroku`

<!-- Docs at https://hub.github.com/ -->

1. Remove git folder and add new remote
   `git init; git add -A; git commit -m 'initial commit'; hub create <APP-NAME>`
2. Set remote `git push --set-upstream origin master`
3. Create Heroku app with `heroku create <APP-NAME>`
4. Set Heroku remote `heroku git:remote -a <APP-NAME>`
5. Set Heroku config vars `heroku config:set "MONGO_URI='<MONGO-URI>'"`
6. Push to heroku `git push heroku master`

*Favourites
