import React from 'react';
import './progress.less';
//	{ this.props.progress }s 
let Progress = React.createClass({

	render() {
		return (
			<div className="components-progress">
				<div className="progress" style ={{width: `${this.props.progress}%`}}></div>
			</div>			
		);
	}
});

export default Progress;