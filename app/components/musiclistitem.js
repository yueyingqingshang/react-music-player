import React from 'react';
import './musiclistitem.less';
import Pubsub from 'pubsub-js';
import {Link} from 'react-router'
let MusicListItem = React.createClass({
	playMisic(musiclistItem) {
		Pubsub.publish('PLAY_MUSIC',musiclistItem);
	},
	render() {
		let musiclistItem = this.props.musiclistItem;
		return (
			<Link to="/"><li onClick={this.playMisic.bind(this, musiclistItem)} className={`components-musiclistitem row ${this.props.focus?'focus':''}`}>
				<p><strong>{ musiclistItem.title }</strong>--{ musiclistItem.artist }</p>
				<p className="-col-auto delete"></p>
			</li>
			</Link>
		);
	}
});

export default MusicListItem; 