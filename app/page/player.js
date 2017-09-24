import React from 'react';
import Progress from '../components/progress';
import { Link } from 'react-router';
import Pubsub from 'pubsub-js';
import './player.less';
//音频文件播放进度
let duration = null;
let Player = React.createClass({
	getInitialState() {
		return {
			progress: 0,
			volume: 0,
			isPlay: true
		};
	},
	playMusicOther(type) {
		Pubsub.publish('PLAY_MUSIC_OTHER',type);
	},
	componentDidMount() {
		$('#player').on($.jPlayer.event.timeupdate,(e)=> {
			//Math.round(e.jPlayer.status.currentTime);
			duration = e.jPlayer.status.duration;
			this.setState({
				volume: (e.jPlayer.options.volume * 100),
				progress: (e.jPlayer.status.currentPercentAbsolute)
			});
		})
	},
	
	componentWillUnmount() {
		//解绑
		$('#player').off($.jPlayer.event.timeupdate);
		duration = null;
	},
	progressChangeHandler(progress) {
		var play = this.state.isPlay ? 'play':'pause';
		$('#player').jPlayer(play,duration * progress);
	},
	changeVolumeHandler(progress) {
		$('#player').jPlayer('volume',progress);
		this.setState({
			volume: progress * 100
		});
	},
	playMusic(isPlay) {
		var play = this.state.isPlay ? 'pause':'play';
		$('#player').jPlayer(play);
		this.setState({
			isPlay: !this.state.isPlay
		});
	},
	render() {
		return (
			<div className="player-page">
                <Link to="/list"><h1 className="caption">我的私人音乐坊 &gt;</h1></Link>
                <div className="mt20 row">
                	<div className="controll-wrapper">
                		<h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                		<h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                		<div className="row mt20">
                			<div className="left-time -col-auto">-2:00</div>
                			<div className="volume-container">
                				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                				<div className="volume-wrapper">
					                <Progress
										progress={this.state.volume}
										onProgressChange={this.changeVolumeHandler}
					                >
					                </Progress>
                				</div>
                			</div>
                		</div>
                		<div style={{height: 10, lineHeight: '10px'}}>
			                <Progress
								progress={this.state.progress}
								onProgressChange={this.progressChangeHandler}
			                >
			                </Progress>
                		</div>
                		<div className="mt35 row">
                			<div>
	                			<i className="icon prev" title="上一曲" onClick={this.playMusicOther.bind(this,'prev')}></i>
	                			<i title={`${this.state.isPlay ? '暂停' : '播放' }`} 
	                			className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} 
	                			onClick={this.playMusic}></i>
	                			<i className="icon next ml20" title="下一曲" onClick={this.playMusicOther.bind(this,'next')}></i>
                			</div>
                			<div className="-col-auto">
                				<i className="icon repeat-cycle" onClick={this.changeRepeat}></i>
                			</div>
                		</div>
                	</div>
                	<div className="-col-auto cover">
                		<img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title}/>
                	</div>
                </div>
        	</div>
		);
	}
});

export default Player;