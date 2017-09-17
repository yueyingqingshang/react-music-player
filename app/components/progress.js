import React from 'react';
import './progress.less';
//	{ this.props.progress }s 
let Progress = React.createClass({
	changeProgress(e) {
		let progressBar = this.refs.progressBar;
		let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
		console.log(progress);
	},
	render() {
		return (
			<div className="components-progress" 
				ref = "progressBar"
				onClick = {this.changeProgress}>
				<div className="progress" 
				style ={{width: `${this.props.progress}%`}}
				
				></div>
			</div>			
		);
	}
});

export default Progress;