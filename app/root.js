import React from 'react';
import Header from './components/header';
import Player from './page/player';
//音乐文件
var chengdu = require('../static/music/chengdu.mp3');
let Root = React.createClass({
	getInitialState() {
		return {
		};
	},
	componentDidMount() {
		$('#player').jPlayer({
			ready: function(e) {
				$(this).jPlayer('setMedia',{
					mp3: chengdu
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
				<Player></Player>
			</div>	
		);
	}
});

export default Root;