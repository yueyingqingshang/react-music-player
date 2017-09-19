var chengdu = require('../../static/music/chengdu.mp3');
var chengduPic = require('../../static/images/chengduPic.jpg');
var angel = require('../../static/music/angel.mp3');
var angelPic = require('../../static/images/angel.jpg');
//default导出时可以不适用{}直接使用类名;
export const MUSIC_LIST = [{
	id: 10,
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
}];