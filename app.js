/**
 * Created by zhangcong on 16/10/5.
 */
var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var path = require('path')

app.listen(port)
app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'bower_components')))
// console.log('started on port' + port)

//index page
app.get('/', function (req, res) {
    res.render('index', {
        title: '电影-首页',
        movies: [{
            title: '机械战警1',
            _id:1,
            poster: 'http://www.baidu.com'
        },{
            title: '机械战警2',
            _id:2,
            poster: 'http://www.baidu.com'
        },{
            title: '机械战警3',
            _id:3,
            poster: 'http://www.baidu.com'
        },{
            title: '机械战警4',
            _id:4,
            poster: 'http://www.baidu.com'
        },{
            title: '机械战警5',
            _id:5,
            poster: 'http://www.baidu.com'
        },{
            title: '机械战警6',
            _id:6,
            poster: 'http://www.baidu.com'
        },{
            title: '机械战警7',
            _id:7,
            poster: 'http://www.baidu.com'
        }]
    })
})

//detail page
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: '电影-<<机械战警>>',
        movie: {
            title: ,
            doctor: ,
            country: ,
            language: ,
            year: ,
            summary:
        }
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

