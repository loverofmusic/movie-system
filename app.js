/**
 * Created by zhangcong on 16/10/5.
 */


var express = require('express')
var app = express()
var port = process.env.PORT || 3000

app.listen(port)
app.set('views', './views')
app.set('view engine', 'jade')
// console.log('started on port' + port)

//index page
app.get('/', function (req, res) {
    res.render('index', {
        title: '电影首页'
    })
})

//detail page
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: '电影详情页'
    })
})

//admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: '电影后台录入页'
    })
})

//list page
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: '电影后台列表页'
    })
})

