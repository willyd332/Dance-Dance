# game-project
Game-Projects-GA


### Technical Requirements:

HAVE ITS OWN REPO, under your github account. NOT A FORK.

Include Wireframes and User Stories in the README
Wireframe: - Basically draw out what your game will look like—very different way it could look. You can use paper or any wireframe tool you find online.

User Stories - Wording should center around how a user interacts with your game, for example:
The user click starts and the level starts
When the user hits the f key a fire ball is catuplulated into the galaxy.

Render a game in the browser

Switch turns between two players, if your game doesn't make sense for two players talk to your local instructor about it

Design logic for winning & visually display which player won

Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles

Use JavaScript or jQuery for DOM manipulation

Deploy your game online, where the rest of the world can access it (we will show you how)

Use semantic markup for HTML and CSS (adhere to best practices)

Be reasonably complex



### Necessary Deliverables:


A working MVP (minium viable product) what is the absolute bare minimum functionality for you game, do not make it more complex until you've completed your MVP.

A working game, built by you, hosted somewhere on the internet

A link to your hosted working game in the URL section of your Github repo
A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project.

A README.md file with an explanation of what the project is and why you made it, your user stories, explanations of the technologies used, the approach taken, installation instructions, unsolved problems, the other components previously indicated (if applicable). In this project, also include your wireframes in the readme.



## WIREFRAME

![Dance Dance Revolution](/images/dancedancewireframe.jpg)


## User-Story

1. On a title screen, the user picks **out of a selection of three songs, each at a faster tempo (higher difficulty)**.
2. When song is selected, the game starts and the above wireframe appears.
3. The choses song begins to play.
4. Arrows, pointing in certain directions, are generated a a rate dependent on the bpm of the chosen song.
5. These arrows fall from the top of the screen in the correct column. (or maybe rise from the bottom)
6. If the user clicks the corresponding arrow-key to a falling arrow when that arrow is in a certain location the arrow will disappear and points will be added to the score.

**************** MINIMUM VIABLE PRODUCT *******************

7. If a falling arrow passes a certain location and the user fails to click the corresponding button the arrow will disappear, the score will decrease, and "health" will decrease.
8. If the user clicks an arrow-key, and the corresponding arrow is not in the correct location, score is reduced.
9. If health reaches 0, music stops, arrows stop, "game over" and score is displayed, "Return to title screen" button is displayed, "restart song" button is displayed.
10. If the song ends, "congratulations" and score is displayed, arrows stop, "Return to title screen" button is displayed, "restart song" button is displayed.**
11. When the game is being played, there should always be a "restart" button next to the score that will clear all the arrows, stop the music, reset the score, reset the health, and restart the current song.

** additional feature idea: when song is completed, unlock and "extreme version" that generates arrows at 2x speed.
