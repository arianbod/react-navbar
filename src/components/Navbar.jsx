import React, { useState } from 'react';
import { Menu, Socials, Title } from './index';
import { links, social } from '../data';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
	const [showLinksState, setShowLinksState] = useState(true);
	const toggleLinks = () => {
		setShowLinksState(!showLinksState);
	};
	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<Title />
					<button
						className='nav-toggle'
						onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				{showLinksState && <Menu links={links} />}
				<Socials social={social} />
			</div>
		</nav>
	);
};

export default Navbar;
