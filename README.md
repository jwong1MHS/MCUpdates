# MCUpdates
Website containing MCU News and Information

## Cloning the Repository ##
(First create a GitHub account if you haven't done so)
1. Open up **Command Prompt** (you can type in **Command Prompt** or **cmd.exe** into your search bar)
2. Change your directory to where you want your working directory to be in 
    1. I recommend making a folder called **GitHub** in your **Documents** folder, so if you want to do that type `cd Documents`, press <kbd>Enter</kbd>, followed by `mkdir GitHub`, press <kbd>Enter</kbd>, and then `cd GitHub`
    2. If you've already made a **GitHub** folder, change your directory to that folder by doing `cd Documents/GitHub` and pressing <kbd>Enter</kbd>
3. To clone the repository from GitHub, type `git clone https://github.com/jwong1MHS/MCUpdates.git` and press <kbd>Enter</kbd>

## Pulling changes from GitHub ##
(This is assuming you haven't made any local changes, or else you will have merge errors)
1. Type `cd Documents/GitHub/MCUpdates`, press <kbd>Enter</kbd>, followed by `git pull` and press <kbd>Enter</kbd>

## Pushing changes to GitHub ##
1. Commit all of your local changes by typing `git commit -am "Insert commit message here"`, press <kbd>Enter</kbd>, followed by `git push` and press <kbd>Enter</kbd>
    1. if there are push errors because your changes are different from GitHub, and you still want to force push your changes, type `git push --force` and press <kbd>Enter</kbd>
