import React from 'react';

const Menu = ({ links }) => {
	console.log(links);
	return (
		<ul className='links'>
			{links.map((menuItem) => {
				const { id, text, url } = menuItem;
				return (
					<li key={id}>
						<a href={url}>{text}</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Menu;
