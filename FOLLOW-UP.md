# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

### Q) What's the command to start the frontend application locally?

### Q) What libraries did you add to the backend? What are they used for?
    I tried to keep it simple and use the minim required: 
    - express: facilitates app development
    - axios: allows to do api calls
    - coinbase: allows to get book data of coinbase exchange
    - nodemon: automatic restart of the app after file change

### Q) What's the command to start the backend application locally?
    npm install
    npm start
---

# General:

### Q) If you had more time, what further improvements or new features would you add?
- a proper production ready arcitecture is needed, we can go towards OOP approach and create Controller, Service, Server classes as an examlpe. 
- no middleware is implemented, no input values validation
- logging functionality is needed
- linting and formatting tools
- it could be re-written in typescript to have type checks
- a proper error handling flow is required
- a proper test suite that uses production ready testing library is required
- crypto symbols are now hardcoded, it needs a little bit of extra  work to support any available symbol
- it doesnt take into account the required quantity, but noticed it is returned as a value from API calls, so it might be important to check the requirements
- in terms of features, it is hard to tell at the moment, as am not an expert of crypto systems, needs a little bit of research before I can suggest a valuable feature

### Q) Which parts are you most proud of? And why?
- I would say the time I have spent on implementing first workable solution was quite short. 

### Q) Which parts did you spend the most time with? What did you find most difficult?
- 1/3 of the time I have spent on DB task and 2/3 of the time on API implementation, I would say it wasn't a difficult test.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.
- I totally enjoyed the experience of writing this small piece of code. It showed me how easy it is to work with crypto system apis and I will definitelly reuse it in my side project.
