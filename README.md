# DANCE DANCE
## LINK TO GAME: https://willyd332.github.io/Dance-Dance/


### Description:

DANCE DANCE is a music based browser game inspired by the classic Dance Dance Revolution. It uses Javascript, jQuery, and HTML Canvas, and is hosted fully on the client side. There are currently 9 playable songs, and more could be added easily as most of the game logic is dependent on the BPM of the song (given 4/4 time).

The falling arrows are generated randomly at three different difficulty levels, easy, medium, and hard. One or Two players can play at once. The goal is to acheive the highest score (hit all the arrows) or beat your opponents score. All of the songs are limited to around one minute long. 

The game is styled using pure CSS and was meant to have the asthetic of a modern arcade. In the future I would like to develope a backend that makes calls to Spotify's API and allows the game to be played with any number of songs.







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

** a two player version where both players compete to get the highest score at the same time (two sections of falling arrows). 
