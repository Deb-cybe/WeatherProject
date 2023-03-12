const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT||9000;//basically an environment variable remains here.......no need to think of it now.
//our pc sees the env var works or not,if not,uses port number given by us.

hbs.registerPartials(__dirname+'../templates/partials/');
const templatesPath=path.join(__dirname,'../templates/views');
app.set('view engine','hbs');
app.set('views',templatesPath);

// console.log(partialsPath);

const staticPath=(path.join(__dirname,'../public'));//we need public directory
// console.log('abcd');
app.use(express.static(staticPath));

app.get('',(req,res)=>{
    res.render('index.hbs');
});

app.get('/about',(req,res)=>{
    res.render('about.hbs');
});

app.get('/weather',(req,res)=>{
    res.render('weather.hbs');
});

app.get('*',(req,res)=>{
    res.render('404.hbs');
})
app.listen(port);