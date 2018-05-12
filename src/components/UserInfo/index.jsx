import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';

import styles from './styles.css';

const UserInfo = ({
  city,
  languages = [],
  social = [],
}) => (
  <div className={styles.layer}>
    <h3>Город: {city}</h3>

    <h3>Знание языков:</h3>
    <List>
      {languages.map(lang => <li key={lang}>{lang}</li>)}
    </List>

    <h3>Социальные сети:</h3>
    <List>
      {social.map(({ label, link }) => (
        <a key={link} target="_blank" href={link}>
          <ListItem>
            {label}
          </ListItem>
        </a>
      ))}
    </List>

  </div>
);

UserInfo.propTypes = {
  city: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
  social: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default UserInfo;
