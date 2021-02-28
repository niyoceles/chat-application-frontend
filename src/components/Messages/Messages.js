import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

const Messages = ({ messages }) => (
	<ScrollToBottom className='messages'>
		{messages === 'You have no message!' ? (
			<p className='pl-8 paragraph'>{messages}</p>
		) : (
			messages.map((message, i) => (
				<div key={i}>
					<Message message={message} />
				</div>
			))
		)}
	</ScrollToBottom>
);

export default Messages;
