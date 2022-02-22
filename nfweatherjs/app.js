import express from 'express';
import weather from 'weather-js';
var app = express();

app.set('view engine', 'ejs');



app.get('/', function (req, res) {
    let data = {
        url: req.url
    }
    res.render('pages/index', data);
})
app.get('/davao', function (req, res) {
    weather.find({search: 'Davao, PH', degreeType: 'C'}, function(err, result) {
        if(err) {console.log(err);}
        else{
            let data = {
                url: req.url,
                weatherdavao: eval(JSON.stringify(result, null, 2))
            }
            res.render('pages/davao', data);
        }
       
      });
    
})
app.get('/tokyo', function (req, res) {
    weather.find({search: 'Tokyo, JP', degreeType: 'C'}, function(err, result) {
        if(err) {console.log(err);}
        else{
            let data = {
                url: req.url,
                weathertokyo: result,
            }
            res.render('pages/tokyo', data);
        }
       
      });
})
app.get('/toronto', function (req, res) {
    weather.find({search: 'Toronto, CA', degreeType: 'C'}, function(err, result) {
        if(err) {console.log(err);}
        else{
            console.log(JSON.stringify(result, null, 2));
            let data = {
                url: req.url,
                weathertoronto: result,
            }
            res.render('pages/toronto', data);
        }
       
      });
})
app.get('/jakarta', function (req, res) {
    weather.find({search: 'Jakarta, ID', degreeType: 'C'}, function(err, result) {
        if(err) {console.log(err);}
        else{
            console.log(JSON.stringify(result, null, 2));
            let data = {
                url: req.url,
                weatherjakarta: result,
            }
            res.render('pages/jakarta', data);
        }
       
      });
})
app.get('/others', function (req, res) {
    let data = {
        url: req.url
    }
    res.render('pages/others', data);
})
app.listen(8080);