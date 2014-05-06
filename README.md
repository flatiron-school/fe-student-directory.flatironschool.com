---
language: html, js, javascript, css
tags: typography, images, links, git, forking, pull requests, jquery, layout, kids
---

# Part 1 - Student Directory

This challenge asks you to work in teams to collaborate on a group site where each member will submit a personal bio page for themselves.

## Tasks

1. Fork this repository.
2. Clone your fork.
3. cd into your local cloned repo folder.
4. Checkout a new branch with your name on it. make sure the branch name is all lowercase and use hyphens instead of spaces like `your-full-name`.
5. Open up the code in Sublime Text.
6. In the index.html page you will locate a link with your name and make  note of the href url `your-name.html`.
7. Inside the `students/` folder create a new html file with the name matching the link from the index page `your-name.html` (so that your name on the index page will link to the bio page your creating).
8. Open this page using html code include your full name as a heading, a pic of yourself, and a short paragraph telling us about yourself. For the picture make sure you name it your full name all lowercase with hyphens for spaces like `your-name.jpg` and place it in the `images/` folder.
9. Once you are done. Push your code up to your origin on the branch with your name.
10. Then go back to the original repo you forked from and submit a pull request comparing my master branch with your forked repos branch of your own name.

After I merge everyones pull requests we will have a single student directory where everyone built there own page and we used Github to combine it all together. Then I will post it online and provide you a link. Feel free to customize your page any way you want.

# Part 2 - Styling The Student Directory

This challenge asks you use HTML5 semantic elements and an external style sheet to style your personal bio page.

## Tasks

1. Visit the student directory repo you last made a pull request to in part 1 and copy the clone url either HTTPS or SSH link.
2. Inside your local repo for this fork, in terminal type ♥ `git remote add upstream (paste the link you copied in step 1)`
3. Check to see if you added my repo  ♥ `git remote -v` it should be listed as upstream.
4. Checkout your master branch.
5. Pull down the newest changes ♥ `git pull upstream master` and resolve any conflicts if neccesary.
6. Create a new feature branch named `your-name-style`
7. Create a file in the /css folder named `your-name.css` and link to it on your bio page in the students/ folder.
8. Use CSS to style your page to your liking. Ask an instructor or TA if you have questions about what you can do.
9. Push the changes up as a new branch on your origin remote.
10. Make a pull request comparing your-name-style branch from your origin to the master branch on the forked upstream repository.

# Part 3 -  Adding Page Layout To The Student Directory

This challenge asks that you use CSS to create column structure and positioning within your personal bio page.

## Tasks

1. Checkout your master branch.
2. Pull down the newest changes ♥ `git pull upstream master`
3. Create a new feature branch named `your-name-layout`
4. Use your CSS file with `your-name.css` to add column structure and positioning to your bio page. You can create any type of layout you choose. Ask an instructor or TA if you have questions about what you can do.
5. Push the changes up as a new branch on your origin remote.
6. Make a pull request comparing your-name-layout branch from your origin to the master branch on the forked upstream repository.

# Part 4 - Create a Responsive Student Bio Page

This challenge asks that you use CSS media queries to add responsive behavior to your personal bio page.

## Tasks

1. Checkout your master branch.
2. Pull down the newest changes ♥ `git pull upstream master`
3. Create a new feature branch named `your-name-responsive`
4. Use your CSS file with `your-name.css` to CSS media queries to your bio page. As you narrow the browser window the content should adapt. Ask an instructor or TA if you have questions about what responsive techniques (responsive columns, text, media) you can do.
5. Push the changes up as a new branch on your origin remote.
Make a pull request comparing your-name-responsive branch from your origin to the master branch on the forked upstream repository.

# Part 5 - Add jQuery to Student Bio Page

This challenge asks that you to experiment with jQuery by making use of its selectors and methods to add rich interactive behavior to your student bio page.

## Tasks

1. Checkout your master branch.
2. Pull down the newest changes ♥ `git pull upstream master`
3. Create a new feature branch named `your-name-jquery`
4. Link your student page to the jQuery using a remote CDN: [cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js](http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js)
5. Inside the js/ folder create a custom JavaScript file called `your-name.js`
6. Explore different selectors and methods at: [api.jQuery.com](http://api.jquery.com) and add some rich interactive behaviors to your page. Ask an instructor or a TA if you need examples of jQuery interactions you can add.
7. Push the changes up as a new branch on your origin remote.
8. Make a pull request comparing your-name-jquery branch from your origin to the master branch on the forked upstream repository.

# Part 6 - Add Core JavaScript Logic To Student Bio Page


