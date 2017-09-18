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
}, {
	id: 2,
	title: '风继续吹',
	artist: '张国荣',
	file: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.mp3',
	cover: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.jpg'
}, {
	id: 3,
	title: '恋恋风尘',
	artist: '老狼',
	file: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%81%8B%E6%81%8B%E9%A3%8E%E5%B0%98.mp3',
	cover: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%81%8B%E6%81%8B%E9%A3%8E%E5%B0%98.jpg'
}, {
	id: 4,
	title: '我要你',
	artist: '任素汐',
	file: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.mp3',
	cover: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg'
}, {
	id: 5,
	title: '成都',
	artist: '赵雷',
	file: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.mp3',
	cover: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.jpg'
}, {
	id: 6,
	title: 'sound of silence',
	artist: 'Simon & Garfunkel',
	file: 'http://oj4t8z2d5.bkt.clouddn.com/sound-of-silence.mp3',
	cover: 'http://oj4t8z2d5.bkt.clouddn.com/sound-of-silence.jpg'
}];