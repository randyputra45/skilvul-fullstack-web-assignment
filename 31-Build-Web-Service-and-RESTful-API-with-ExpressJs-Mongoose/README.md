## Link

1. Postman Documentation: https://documenter.getpostman.com/view/18532743/UVREjQPT
2. Heroku Deployment: https://mooc-skivul.herokuapp.com/

## Deployment Steps

1. Create Procfile

```
web: npm start
```

2. Edit package.json

```
"scripts": {
    "start": "node index.js"
},
```

3. Set index.js

```
process.env.PORT || 3000
```

4. Set package.json

```
"engines": {
    "node": "^14.0.0",
    "npm": "^6.0.0"
},
```

5. Login on heroku
6. Create heroku app `heroku create <your app name>`
7. Add to git `git add .`
8. Commit to git `git commit -am "deploy"`
9. Push to git `git push heroku master`
10. Repeat step 7-9 when code changes
