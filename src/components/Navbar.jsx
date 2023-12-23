import React, { useRef, useState } from 'react';
import { Menu, Socials, Title } from './index';
import { links, social } from '../data';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
	const [showLinksState, setShowLinksState] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const toggleLinks = () => {
		setShowLinksState(!showLinksState);
	};
	const linkStyles = {
		height: showLinksState
			? `${linksRef.current.getBoundingClientRect().height}px`
			: '0px',
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

				<Menu
					links={links}
					showLinksState={showLinksState}
					linksContainerRef={linksContainerRef}
					linksRef={linksRef}
					linkStyles={linkStyles}
				/>

				<Socials social={social} />
			</div>
		</nav>
	);
};

export default Navbar;
