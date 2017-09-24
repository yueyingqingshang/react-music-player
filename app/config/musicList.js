var chengdu = require('../../static/music/chengdu.mp3');
var chengduPic = require('../../static/images/chengduPic.jpg');

var angel = require('../../static/music/angel.mp3');
var angelPic = require('../../static/images/angel.jpg');

var fengyu = require('../../static/music/闫东炜--风屿.mp3');
var fengyuPic = require('../../static/images/wind-island.jpg');

var secrets = require('../../static/music/OneRepublic - Secrets.mp3');
var secretsPic = require('../../static/images/secrets.jpg');
//default导出时可以不适用{}直接使用类名;
export const MUSIC_LIST = [{
	id: 0,
	title: '成都',
	artist: '赵雷',
	file: chengdu,
	cover: chengduPic
},{
	id: 1,
	title: '天使中的魔鬼',
	artist: '田馥甄',
	file: angel,
	cover: angelPic//'http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.jpg'
},{
	id: 2,
	title: '风屿',
	artist: '闫东炜',
	file: fengyu,
	cover: fengyuPic//'http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.jpg'
},{
	id: 3,
	title: 'secrets',
	artist: 'OneRepublic',
	file: secrets,
	cover: secretsPic//'http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.jpg'
}];