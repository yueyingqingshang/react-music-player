import React from 'react';
import Header from './components/header';
import Player from './page/player';
import { MUSIC_LIST } from './config/musicList';
//音乐文件
var chengdu = require('../static/music/chengdu.mp3');
let Root = React.createClass({
	getInitialState() {
		console.log(MUSIC_LIST);
		return {
			currentMusicItem: MUSIC_LIST[0]
		};
	},
	componentDidMount() {
		console.log(MUSIC_LIST);
		$('#player').jPlayer({
			ready: function(e) {
				$(this).jPlayer('setMedia',{
					mp3: chengdu
				}).jPlayer('play');
			},
			supplied: 'mp3',
			wmode: 'window'
		});
	},
	componentWillUnMount() {
	},
	render() {
		return (
			<div>
				<Header />
				<Player
					currentMusicItem = {this.state.currentMusicItem}
				></Player>
			</div>	
		);
	}
});

export default Root;