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