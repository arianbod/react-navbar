import React from 'react';

const Socials = ({ social }) => {
	return (
		<ul>
			{social.map((socialItem) => (
				<li key={socialItem.id}>
					<a href={socialItem.url}>{socialItem.icon}</a>
				</li>
			))}
		</ul>
	);
};

export default Socials;
