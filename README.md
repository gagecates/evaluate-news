# News Evaluation
## Udacity front end project using webpack
This application uses webpack and a node.js express server 
to evaluate a news article's content for things such as:

    1. Score Tag

    2. Agreement

    3. Subjectivity

    4. Confidence

    5. Irony

The application uses the 3rd party API from [Meaning Cloud](http://meaningcloud.com)
to parse and interperate the article. 

## Webpack
Webpack was used for both development and production. Two seperate webpack config files were
used. 
To run the development build:
```
npm run build-dev
```
To run the production build, which will produce a main.js file within the dist folder:
```
npm run build-prod
```

## Testing
Jest was used for testing. Testing can be accomplished by running
```
npm test
```

## Express Server
A node.js server was used to interact with the [Meaning Cloud](http://meaningcloud.com) API. To run the server, run:
```
npm start
```
This will run the server on localhost:8081 where you can navigate to and test the application.


