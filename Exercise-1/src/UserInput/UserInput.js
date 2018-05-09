import React from 'react';

const UserInput = ( props ) => {
	const style = {
		border : '5px solid red'
	};
	return (
		<input type="text" style={style} onChange={props.change} value={props.userName3}/>
	)
};

export default UserInput;