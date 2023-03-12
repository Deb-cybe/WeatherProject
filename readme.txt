Create folder structure.

npm init, install express js, nodemon.

using express js,set the routes, listen ,set env variable || port number.

set static path, for css, js, images (the public folder).

now we are using bootstrap in our project,so install it (here I am doing by using cdn link).

## Navbar ##

using grid, set the container-fluid

create navbar, set ms-auto for links to set to the right.

get font awesome cdn, do required tasks.

## Main section ##

using grid, set the container-fluid

now, for main section right side, a carousel will be applied.

now develop the footer section.

way to align footer to bottom always-->
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
footer{
    margin-top:auto;
}

Now design about page

-->Now, we need to make the website dynamic............so, install hbs

create hbs pages

set ports to render...

create templates/views, templates/partials

delete html pages create before.

create weather.hbs

create form(in form set autocomplete="off".......)

https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=da91fe3804cffeda981510820197c8e1


Complete Git SSH Setup
-------------------------------------
SSH keys-->SSH(Secure Shell) is used to create a secure channel between a local and a remote computer.

sign in on github

now,in terminal(gitbash), reach the root directory.
git init
git status
-->create a file name .gitignore in root, type node_modules there,since we are not uploading this 
file to github
git add .
git commit -m "my project"
git status
now create repo, name it(do not add readme file at first) 

git remote add origin https://github.com/Deb-cybe/WeatherProject.git
git remote
