# Clicky-Game: Fortnite Edition

## Description
*Clicky-Game* is a memory game where the user must select a character that has not been selected yet each turn. With every correct selection, the user's score increments by one. Once the user selects a character that they have already clicked on, the score resets. With every selection made, the characters' locations shuffle, making for a fun and challenging experience.


## Functionality
This website utilizes **ReactJS** and **Bootstrap** to create the game's layout and functionality. Multiple componenets are used and exported into `App.js`. The `Navbar.js` component consists of the *Clicky-Game* logo, instructions, the current top score, and the user's current score. The `Header.js` component contains instructions on how to play the game as well as two images of Fortnite llamas. The `Container.js` component houses the `Clickables.js` component, which creates the multiple divs and images for each Fortnite Character to be selected. The data for each characters is grabbed from `data.json`, which is redirected to the images folder to grab the images. Lastly, the `Footer.js` component contains a link to my portfolio. 

## Screenshots
**Top:** Displaying the Navbar and Header
![top](https://user-images.githubusercontent.com/36168517/45279646-aadc9400-b486-11e8-81b3-773fc69745c8.PNG)

**Clickables:** Displaying the clickables
![clickables](https://user-images.githubusercontent.com/36168517/45279647-aadc9400-b486-11e8-9a8b-00efa61101b5.PNG)


## Technologies Used
- [ReactJS](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)


## The Site is live!
[Click here to see the page on Github Pages!](https://marviesolis.github.io/clicky-game/)
