import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.css';

const UserInfo = ({
  city,
  languages = [],
  social = [],
}) => (
  <div>
    <h3>Город: {city}</h3>

    <h3>Знание языков:</h3>
    <ul>
      {languages.map(lang => <li key={lang}>{lang}</li>)}
    </ul>

    <h3>Социальные сети:</h3>
    <ul>
      {social.map(({ label, link }) => (
        <li key={link}><a href={link}>{label}</a></li>
      ))}
    </ul>

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
