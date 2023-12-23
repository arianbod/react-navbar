import React from 'react';

const Menu = ({
	links,
	showLinksState,
	linksContainerRef,
	linksRef,
	linkStyles,
}) => {
	console.log(showLinksState);
	return (
		<div
			className='links-container'
			style={linkStyles}
			ref={linksContainerRef}>
			<ul
				className='links'
				ref={linksRef}>
				{links.map((menuItem) => {
					const { id, text, url } = menuItem;
					return (
						<li key={id}>
							<a href={url}>{text}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Menu;
