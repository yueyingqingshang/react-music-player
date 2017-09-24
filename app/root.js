import React from 'react';
import Header from './components/header';
import Player from './page/player';
import Musiclist from './page/musiclist';
import {MUSIC_LIST} from './config/musicList';
import {Router,IndexRoute,Link,Route,hashHistory} from 'react-router';
import Pubsub from 'pubsub-js';
//音乐文件
let App = React.createClass({
	getInitialState() {
		return {
			musicList: MUSIC_LIST,
			currentMusicItem: MUSIC_LIST[0]
		};
	},
	playMusic(musicItem) {
		$('#player').jPlayer('setMedia',{
			mp3: musicItem.file
		}).jPlayer('play');
		this.setState({
			currentMusicItem: musicItem
		});
	},
	//播放其他的音乐
	playOther(type) {
		let index = this.findMusicIndex(this.state.currentMusicItem);
		let newIndex = null;
		let musicListLen = this.state.musicList.length;
		if(type == 'next') {
			newIndex = (index + 1) % musicListLen;
		} else {
			newIndex = (index - 1 + musicListLen) % musicListLen;
		};
		this.playMusic(this.state.musicList[newIndex]);
	},
	//查找当前文件在list中的index
	findMusicIndex(musicItem) {
		return this.state.musicList.indexOf(musicItem);
	},
	componentDidMount() {
		var self = this,playObj = $('#player');
		playObj.jPlayer({
			supplied: 'mp3',
			wmode: 'window'
		});

		
		//监听音乐播放状态
		playObj.on($.jPlayer.event.ended, (e)=> {
			this.playOther('next');
		});
		this.playMusic(this.state.currentMusicItem);
		Pubsub.subscribe('PLAY_MUSIC', (msg, musicItem)=> {
			this.playMusic(musicItem);
		});

		//播放上一曲下一去
		Pubsub.subscribe('PLAY_MUSIC_OTHER', (msg, type)=> {
			this.playOther(type);
		});

		
	},
	componentWillUnMount() {
		Pubsub.unsubscribe('PLAY_MUSIC');
		Pubsub.unsubscribe('PLAY_MUSIC_OTHER');
		$('#player').off($.jPlayer.event.ended);
	},
	render() {
		return (
			<div>
				<Header />
				{React.cloneElement(this.props.children,this.state)}
			</div>	
				
		);
	}
});
let Root = React.createClass({
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Player}></IndexRoute>
					<Route path="/list" component={Musiclist}></Route>
				</Route>
			</Router>
		);
	}
});

export default Root;