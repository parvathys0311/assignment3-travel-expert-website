# Travel Experts

- Author: Parvathy Sudhakaran
- Submission Date: 26-07-2020
- Course Module: CPRG-210-XM1
- Assignment No : 3/Node Final


### Objective

To deploy a multi-page website using Express, EJS and Mongoose. It will have a database-driven "Destinations" gallery deployed to Heroku and MongoDB Atlas.

### Details & Features overview

- Project is created in Node, with npm and dependences installed
- Project uses Mongoose and MangoDb database
- Deployed using Heroku
- Static html's are served with EJS
- Endpoints are defined
- In index page destination gallery is served from database
- Local version of database is available in seeds/destinations.js
- Additional Front-end works from previous version:
  - Gallery images in index page, when clicked, goes to an EJS page - it displays a single destination(larger pic), with a title & a description
  - A custom 404-error page
  - Repeating page elements are moved to partials
  - Current year in footer - uses moment module
  - Current page is indicated on nav bar - used javascript


### Issues encountered on the way & how it is being tackled

 - In nav bar, current page is activated. So, when in index page, current is indicated as destination link. However, when gallery is clicked, as it is referenced to the same index page, the current stays in destination. Haven't figured out the solution yet.  

 - Initially had some trouble using moment module, but solved it with some help from StackOverflow
   
### Atribution

- Images from https://www.pexels.com/, https://picsum.photos/
- Logo & Icon from https://fontawesome.com/
- Fonts from https://fonts.google.com/ 
- Static form service provider : https://formspree.io/
- Node & javascript helps -
  - StackOverflow 
    - https://stackoverflow.com/questions/6964503/using-javascript-to-highlight-current-page-in-navbar
    - https://stackoverflow.com/questions/45557788/npm-err-code-eperm
  - Freecodecamp
- Syntax helps - https://developer.mozilla.org/en-US/
- Mentor: Tony Grimes, https://github.com/acidtone  






