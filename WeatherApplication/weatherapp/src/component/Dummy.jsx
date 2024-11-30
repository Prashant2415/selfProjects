import React from 'react';

const Dummy = () => {
  return (
    <div>
      {/* Page Header */}
      <h1 id="page-heading" tabIndex="-1">
        Welcome to the Accessible Page
      </h1>

      {/* Page Content */}
      <p>
        Use NVDA's shortcut keys to navigate headings or press <kbd>H</kbd> to jump to the next heading.
      </p>
      <h2>Subheading 1</h2>
      <p>Details under subheading 1.</p>
      <h2>Subheading 2</h2>
      <p>Details under subheading 2.</p>
    </div>
  );
};

export default Dummy;
