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
				}).jPlayer('stop');
			},
			supplied: 'mp3',
			wmode: 'window'
		});
		$('#player').on($.jPlayer.event.timeupdate,function(e) {
			self.setState({
				progress: Math.round(e.jPlayer.status.currentTime)
			})
		})

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