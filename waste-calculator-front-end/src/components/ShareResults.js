import React from 'react';
import PropTypes from 'prop-types';

const ShareResults = ({id, description}) => {
  return (
      <ul className="waste-calculator__social-share">
        <li>
          <a>
            <i className="fa fa-facebook-official facebook-color"
               aria-hidden="true"/>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-twitter-square twitter-color"
               aria-hidden="true"/>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-linkedin-square linkedin-color"
               aria-hidden="true"/>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-envelope mail-yellow-color"
               aria-hidden="true"/>
          </a>
        </li>
      </ul>
  );
};

ShareResults.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string
};

export default ShareResults;
