# Clicky-Game: Fortnite Edition

## Description
*Clicky-Game* is a memory game where the user must select a character that has not been selected yet each turn. With every correct selection, the user's score increments by one. Once the user selects a character that they have already clicked on, the score resets. With every selection made, the characters' locations shuffle, making for a fun and challenging experience.


## Functionality
This website utilizes **ReactJS** and **Bootstrap** to create the game's layout and functionality. Multiple componenets are used and exported into `App.js`. The `Navbar.js` component consists of the *Clicky-Game* logo, instructions, the current top score, and the user's current score. The `Header.js` component contains instructions on how to play the game as well as two images of Fortnite llamas. The `Container.js` component houses the `Clickables.js` component, which creates the multiple divs and images for each Fortnite Character to be selected. The data for each characters is grabbed from `data.json`, which is redirected to the images folder to grab the images. Lastly, the `Footer.js` component contains a link to my portfolio. 

## Screenshots
**Top:** Shows all the articles.
![top](https://user-images.githubusercontent.com/36168517/44650566-cf6f4100-a99b-11e8-94f0-523c5b82899c.PNG)

**Clickables:** Shows information from the article with the addition of a short summary.
![clickables](https://user-images.githubusercontent.com/36168517/44650613-e7df5b80-a99b-11e8-8459-283dc2280fc2.PNG)


## Technologies Used
- [ReactJS](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)


## The Site is live!
[Click here to see the page on Github Pages!](https://marviesolis.github.io/clicky-game/)
