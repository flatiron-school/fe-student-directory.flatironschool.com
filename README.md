---
tags: typography, images, links, git, forking, pull requests, jquery, layout, kids
language: html, js, javascript, css
resources: 0
---

# Part 1 - Student Directory

This challenge asks you to create a personal bio page for yourself and make a pull request to submit your changes.

## Tasks

1. Fork this repository.
2. Clone your fork.
3. cd into your locally cloned repository for this project.
4. Open up the code in Sublime Text.
5. In the index.html page you will locate a link with your name and make  note of the href url `your-full-name.html`. Note: There is no need to edit the index.html file.
6. Inside the `students/` folder create a new html file with the name matching the link from the index page `your-full-name.html` (so that your name on the index page will link to the bio page your creating). Notice that your file should be your full name, all lowercase, and separated using hyphens.
7. Open `students/your-full-name.html`. Using html code include your full name as a heading, a pic of yourself, and a short paragraph telling us about yourself. For the picture make sure you name it your full name all lowercase with hyphens for spaces like `your-full-name.jpg` and place it in the `images/` folder.
8. Once you are done. Stage your files using ♥ `git add .`. Commit your changes ♥ `git commit -m "created my bio page"`. Push your code up to your origin remote. ♥ `git push origin master`.
9. Submit a pull request to the upstream repository comparing my master branch with your forked repos master branch.

  * In your browser go to your github repository page for this project.
  * Click the "forked from" link under the header name for your repository.
  * From the sidebar click on "Pull Requests".
  * Click "New pull request" button.
  * Click "compare across forks" link.
  * Set the head fork to your personal repo and the compare branch to master. Note: You can click the edit button at any time to change the head fork or compare branch.
  * Then click the "Create pull request". You can fill in a title and a description for the pull request.
  * Then click "Send pull request".

After I merge everyones pull requests we will have a single student directory where everyone built there own page and we used Github to combine it all together. Then I will post it online and provide you a link. Feel free to customize your page any way you want.

# Part 2 - Styling The Student Directory

This challenge asks you use an external style sheet to style your personal bio page.

## Tasks

1. Go to github.com. Visit the student directory repo you last made a pull request to in part 1 and copy the SSH clone URL.
2. cd into your local repo for this fork, in terminal type ♥ `git remote add upstream (paste the link you copied in step 1)`
3. Check to see if you added my repo  ♥ `git remote -v` it should be listed as upstream and your remote should be listed as origin.
4. Checkout your master branch.
5. Pull down the newest changes ♥ `git pull upstream master` and resolve any conflicts if neccesary.
6. Create a new feature branch named `your-full-name-style`
7. Create a file in the /css folder named `your-full-name.css` and link to it on your bio page in the students/ folder.
8. Use CSS to style your page to your liking. Ask an instructor or Teaching Assitant if you have questions about what you can do. Experiement with changing colors, typography, etc.
9. Push the changes up as a new branch on your origin remote.
10. Make a pull request comparing your-full-name-style branch from your origin to the master branch on the forked upstream repository.
11. Submit a pull request to the upstream repository comparing my master branch with your forked repos master branch.

  * In your browser go to your github repository page for this project.
  * Click the "forked from" link under the header name for your repository.
  * From the sidebar click on "Pull Requests".
  * Click "New pull request" button.
  * Click "compare across forks" link.
  * Set the head fork to your personal repo and the compare branch to your-full-name-style. Note: You can click the edit button at any time to change the head fork or compare branch.
  * Then click the "Create pull request". You can fill in a title and a description for the pull request.
  * Then click "Send pull request".