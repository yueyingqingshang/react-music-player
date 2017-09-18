import React from 'react';
import './musiclistitem.less';
let MusicListItem = React.createClass({
	render() {
		let musiclistItem = this.props.musiclistItem;
		return (
			<li className={`components-musiclistitem row ${this.props.focus?'focus':''}`}>
				<p><strong>{ musiclistItem.title }</strong>--{ musiclistItem.artist }</p>
				<p className="-col-auto delete"></p>
			</li>
		);
	}
});

export default MusicListItem; 