import React from 'react';
import Header from './components/header';
import Progress from './components/progress';
//音乐文件
var chengdu = require('../static/music/chengdu.mp3');
let Root = React.createClass({
	getInitialState() {
		return {
			progress: '-'
		};
	},
	componentDidMount() {
		var self = this;
		$('#player').jPlayer({
			ready: function(e) {
				$(this).jPlayer('setMedia',{
					mp3: chengdu
				}).jPlayer('play');
			},
			supplied: 'mp3',
			wmode: 'window'
		});
		$('#player').on($.jPlayer.event.timeupdate,(e) => {
			//Math.round(e.jPlayer.status.currentTime);
			this.setState({
				progress: (e.jPlayer.status.currentPercentAbsolute)
			})
		})

	},
	componentWillUnMount() {
		//解绑
		$('#player').off($.jPlayer.event.timeupdate);
	},
	render() {
		return (
			<div>
				<Header />
				<Progress progress = {this.state.progress}></Progress>
			</div>	
		);
	}
});

export default Root;