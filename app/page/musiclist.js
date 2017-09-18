import React from 'react';
import MusicListItem from '../components/musiclistitem';
let MusicList = React.createClass({
	render() {
		let eleList = null;
		eleList = this.props.musicList.map((item)=>{
			return (
				<MusicListItem 
					focus={ item === this.props.currentMusicItem }
					key={item.id}
					musiclistItem = { item }
				>
					{ item.title }
				</MusicListItem>
			);
		});
		return (
			<ul>
				{ eleList }
			</ul>	
		)
	}
});

export default MusicList;