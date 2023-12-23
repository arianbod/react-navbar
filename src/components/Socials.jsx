import React from 'react';

const Socials = ({ social }) => {
	return (
		<ul className='social-icons'>
			{social.map((socialItem) => {
				const { id, url, icon } = socialItem;
				return (
					<li key={id}>
						<a href={url}>{icon}</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Socials;
