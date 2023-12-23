import React from 'react';
import Logo from '../logo.svg';
const Title = () => {
	return (
		<div>
			<img
				src={Logo}
				alt='logo'
				className='logo'
			/>
		</div>
	);
};

export default Title;
