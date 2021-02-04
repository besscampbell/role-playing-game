# _Sci-fi '80 High School RPG!!_

#### _In-class homework assignment at Epicodus, building an RPG with functional programming in Javascrpt & webpack with Tests_

##### Project began on 2.3.21. Last updated 2.4.21_

##### By _**Bess Campbell, Kaila Sprague-Mcrae, Danielle Thompson**_

___

## Known Bugs

[Report bugs here.](https://github.com/besscampbell/role-playing-game/issues) | [Request features here.](https://github.com/besscampbell/role-playing-game/issues)

## Support and contact details

Contact us at ...

Bess <  bess.k.campbell [at] gmail.com >.
Kaila <  kaila.sprague [at] icloud.com >.
Danielle < danithompson74 [at] gmail.com >.

___

## Description

Play an RPG (Role Playing Game) where player One assumes the role of a character in a fictional world and fights their archnemesis. The world? Cyberpunk sci-fi '80s high school!

Objectives:
- Use functional techniques
--> Composition
--> Currying
--> Recursion
--> StoreState

Logic includes:
- *Character creation*
--> generate different character types (PromQueen, Pilot) with special attributes ("addCharacterToState").(_completed_)
--> Attributes e.g. strength, intelligence, snark, charm, agility. (_completed_)
--> update attributes ("updateState") using composition, e.g. snark: 100, monster-blasting: 200 (_completed_)

- *Battle system* (_completed_)
--> e.g. prom queen dance off with the blorgon from OuterPlanet16.
--> points accumulated from dance-off style


## Stretch Goals

- *Level up*
--> Have characters go from Level 1 to Level 2, etc.
--> Each level should come with new abilities/attributes/powers (e.g. strength: L1 (100) vs strength: L2 (200))

- *Inventory* (to enhance abilities)
--> e.g. legwarmers increase dance-off ability
--> functionality should include adding, dropping, buying, and selling items

- DRY up and refactor code, especially in main.js.
- Having custom abilities for battles, for both player & enemy.
- Adding enemy attack, instead of only losing points as a player when superAttacking.
- More on-brand styling.
- Add dance-off battleground with custom dance powers/inventories.

___

## Technologies Used

- _ES6 Javascript_
- _Bootstrap_
- _jQuery_
- _node.js_
- _npm_
- _webpack_
- _ES Lint_
- _Jest_
- _Babel_

## Setup/Installation Requirements

This application requires the above technologies. If your local system does not include any of the listed technologies, please follow the instructions below to clone the project from GitHub to your local machine, as well as to set up your local machine to be able to view the cloned project.

Alternatively, the live project can be accessed at https://besscampbell.github.io/role-playing-game.

###### For Mac Users
* _Access Terminal in your Finder, and open a new window. Install the package manager, [Homebrew](https://brew.sh/), on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`._
* _Ensure Homebrew packages are run with this line of code: `echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`._
* _Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`._
* _Now, install Node.js through Homebrew with the following command: `brew install node`._
* _Confirm that node and npm (Node's package manager that is automatically installed alongside Node) are on your working system with two command lines `node -v` & `npm -v`, respectively returning something resembling `v14.5.0` & `6.14.5` (or higher)._

###### For Windows Users
* _Open a new Command Prompt window by typing "Cmd" in your computer's search bar._
* _Determine whether you have 32-bit or 64-bit Windows by following these [instructions](https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running)._
* _Go to [Git Bash](https://gitforwindows.org/), click on the "Download" button, and download the corresponding exe file from the Git for Windows site._
* _Follow the instructions in the set up menu._
* _Once you have Git installed on your computer, go to this [GitHub repository](https://github.com/besscampbell/role-playing-game), click the "Fork" button in the upper right hand corner of the page, and clone this application with the following command:`git clone https://github.com/besscampbell/role-playing-game.git`._
* _Go to the [Node.js website](https://nodejs.org/en/download/) and download the appropriate source code for your Windows operating system._

###### For Both Mac & Windows systems
* _Once the project has been cloned to your computer and you have all the necessary items on your local computer, open the project in the application of your choice ((Visual Code Studio)[https://code.visualstudio.com/] was used and is recommended by the application builder), and run `npm install` to get the appropriate dependencies from Node.js in the project._
* _Once Node's dependencies for the project have successfully downloaded, run the command `npm run build` in your terminal._
* _From there, you can run `npm run test` to run the package's test script(s)._
* _If you run `npm run start`, you will then be able to open a live session of the application._


### License

*This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).*
Copyright (c) 2021 **_Bess Campbell, Kaila Sprague-Mcrae, Danielle Thompson_**