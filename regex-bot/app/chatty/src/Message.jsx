import React, {Component} from 'react';

const Message = React.createClass({
  render: function() {
    var message = this.props;
    var username = message.username || 'Anonymous';
    return (
      <div className="message" key={message.id}>
        <span className="username">{username}</span>
        <span className="content" dangerouslySetInnerHTML={{__html: message.content}} />
      </div>
    );
  }
});

export default Message;
