import React from 'react';
import Header from './components/header';
import Player from './page/player';
import Musiclist from './page/musiclist';
import { MUSIC_LIST } from './config/musicList';
//音乐文件
var chengdu = require('../static/music/chengdu.mp3');
let Root = React.createClass({
	getInitialState() {
		return {
			musicList: MUSIC_LIST,
			currentMusicItem: MUSIC_LIST[1]
		};
	},
	componentDidMount() {
		var self = this;
		$('#player').jPlayer({
			ready: function(e) {
				$(this).jPlayer('setMedia',{
					mp3: self.state.currentMusicItem.file
				}).jPlayer('stop');
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
				
				<Musiclist
					currentMusicItem={this.state.currentMusicItem}
					musicList = {this.state.musicList}
				></Musiclist>
			</div>	
		);
	}
});

export default Root;