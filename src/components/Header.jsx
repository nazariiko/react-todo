import React from 'react'

function Header() {
  return (
    <header className="header">
      <h1 className="header__heading">ToDo React App</h1>
    </header>
  );
}

export default React.memo(Header);
