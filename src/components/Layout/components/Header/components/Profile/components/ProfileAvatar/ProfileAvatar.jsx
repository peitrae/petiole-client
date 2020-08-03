import React from 'react';

import './ProfileAvatar.scss';

const ProfileAvatar = () => (
  <button className="profile__ava">
      <img
        className="profile__ava__img"
        src={process.env.PUBLIC_URL + '/img/avatar.jpg'}
        alt="avatar"
      />
  </button>
);

export default ProfileAvatar;
