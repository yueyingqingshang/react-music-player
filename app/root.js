import React from 'react';
import Header from './components/header';
import Player from './page/player';
import Musiclist from './page/musiclist';
import {MUSIC_LIST} from './config/musicList';
import {Router,IndexRoute,Link,Route,hashHistory} from 'react-router'
//音乐文件
let App = React.createClass({
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