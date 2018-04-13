import React from 'react';
import ProtectedRoute from '../../hoc/ProtectedRoute';

const Profile = () => (
  <div>Profile</div>
);

export default ProtectedRoute(
  Profile,
);
