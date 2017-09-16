import React from 'react';
import Progress from '../components/progress';
import './player.less';
import { Link } from 'react-router';
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
			<div>
				<div className="player-page">
                <h1 className="caption">我的私人音乐坊 &gt;</h1>
                <div className="mt20 row">
                	<div className="controll-wrapper">
                		<h2 className="music-title">歌曲名称</h2>
                		<h3 className="music-artist mt10">歌手</h3>
                		<div className="row mt20">
                			<div className="left-time -col-auto">-2:00</div>
                			<div className="volume-container">
                				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                				<div className="volume-wrapper">
                					音量控制部分
					                <Progress
										progress={this.state.progress}
										onProgressChange={this.progressChangeHandler}
										barColor='#aaa'
					                >
					                </Progress>
                				</div>
                			</div>
                		</div>
                		<div style={{height: 10, lineHeight: '10px'}}>
                			播放进度部分
			                <Progress
								progress={this.state.progress}
								onProgressChange={this.progressChangeHandler}
			                >
			                </Progress>
                		</div>
                		<div className="mt35 row">
                			<div>
	                			<i className="icon prev"></i>
	                			<i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
	                			<i className="icon next ml20"></i>
                			</div>
                			<div className="-col-auto">
                				<i className={`icon repeat-${this.props.repeatType}`} onClick={this.changeRepeat}></i>
                			</div>
                		</div>
                	</div>
                	<div className="-col-auto cover">
                		<img src="" alt="歌曲名称"/>
                	</div>
                </div>
            </div>
			</div>	
		);
	}
});

export default Player;