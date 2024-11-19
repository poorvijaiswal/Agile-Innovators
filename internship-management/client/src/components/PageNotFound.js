import React from 'react';

const PageNotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go Back to Home</a>
    </div>
  );
};

export default PageNotFound;
