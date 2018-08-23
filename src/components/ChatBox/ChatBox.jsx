import React from 'react';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import { palette } from 'styles/muiTheme';
import MessageList from './MessageList';
import classes from './ChatBox.scss';

const styles = {
  header: {
    borderBottom: `1px solid ${palette.accent1Color}`,
    marginBottom: '1rem',
  },
};

const ChatBox = ({ time, log, user }) => (
  <Card className={classes.container}>
    <CardHeader
      title="LOG CONVERSATION"
      subtitle={`Début: ${new Intl.DateTimeFormat('fr-FR', { 
          year: 'numeric', 
          month: 'long', 
          day: '2-digit' 
        }).format(time)}`}
      style={styles.header}
    />
    <MessageList user={user} log={log} />
  </Card>
);

ChatBox.propTypes = {
  user: React.PropTypes.string.isRequired,
  log: React.PropTypes.array.isRequired,
  time: React.PropTypes.string.isRequired,
};

export default ChatBox;
