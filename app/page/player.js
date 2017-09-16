import React from 'react';
import Progress from '../components/progress';
import './player.less';
//音频文件播放进度
let duration = null;
let Player = React.createClass({
	getInitialState() {
		return {
			progress: '-'
		};
	},
	componentDidMount() {
		$('#player').on($.jPlayer.event.timeupdate,(e)=> {
			//Math.round(e.jPlayer.status.currentTime);
			duration = e.jPlayer.status.duration;
			this.setState({
				progress: (e.jPlayer.status.currentPercentAbsolute)
			})
		})

	},
	progressChangeHandler(progress) {
		console.log('form player widget',progress);
		$('#player').jPlayer('play',duration * progress);
	},
	componentWillUnMount() {
		//解绑
		$('#player').off($.jPlayer.event.timeupdate);
	},
	render() {
		return (
			<div className="player-page">
				<h1 className="caption">我的私人音乐坊</h1>
				<div className="mt20 row">
					<div className="controll-wrapper">
						<h2 className="music-title">歌曲名称</h2>
						<h3 className="music-artist mt10">歌手</h3>
						<div className="row mt20">
							<div className="left-time -col-auto">-2:00</div>
							<div className="volume-container">
								<i className="icon-volume rt"></i>
								<div className="volume-wrapper">
								</div>
							</div>
						</div>	
					</div>
				</div>
				/*<Progress progress = {this.state.progress}
					onProgressChange={this.progressChangeHandler}
					barColor = '#ff0000'
				></Progress>*/
			</div>	
		);
	}
});

export default Player;