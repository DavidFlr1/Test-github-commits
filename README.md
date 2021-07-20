# Objective - Welcome to github-commits-history project
  The goal of this project will be to create a web application that shows git commit history for the project you’re working on.

## Instructions - 1. Clone or download repository
  1. Open a new terminal
  2. Move to the folder where you want to save the repository
  3. Execute git clone https://github.com/DavidFlr1/Test-github-commits.git
  4. Open the folder on your code editor
  or
  1. Download this repository https://github.com/DavidFlr1/Test-github-commits/archive/refs/heads/main.zip
  2. Unzip the folder
  3. Open the folder on your code editor
## Instructions - 2. Install necesary dependencies
  1. Open a new terminal
  2. Run 'npm install'
## Instructions - 3. Run project on your local network
  1. Open a new terminal
  2. Run 'npm start'
  3. localhost:3000 should be automatically openen on your browser, if not, type http://localhost:3000 on your browser
## Instructions - 4. Update github page
  1. Open a new terminal
  2. Add, commit and push changes (Repository needs to be up to date)
  3. Run 'npm run predeploy'
  4. Run 'npm run deploy'

## Additional - Comments
  This project has default values to fetch this repository commits, my user profile and public repositories
  but you can change this values to fetch another public user and repository
# Website - Try the project on my github page or visit mi web portfolio to see my work
This project -> https://davidflr1.github.io/Test-github-commits/
My portfolio -> https://davidflr1.github.io/web-Portfolio/
# Consumed APIs
Documentation -> API
https://docs.github.com/en/rest/reference/repos#commits -> GET https://api.github.com/repos/<user>/<repo>/commits
https://docs.github.com/en/rest/reference/users -> GET https://api.github.com/users/<user>
https://docs.github.com/en/rest/reference/users -> GET https://api.github.com/users/<user>/repos
https://docs.github.com/en/rest/reference/emojis -> GET https://api.github.com/emojis