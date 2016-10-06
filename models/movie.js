/**
 * Created by zhangcong on 16/10/5.
 */
var mongoose = require('mongoose');

var MovieSchema = require('../schemas/movie');
var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;