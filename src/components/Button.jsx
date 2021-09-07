import React from 'react';
import classNames from 'classnames';

function Button({ onClick, className, outline, children }) {

  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}

const buttonPropsAreEqual = (prevButton, nextButton) => {
    return prevButton.onClick === nextButton.onClick
}

export default React.memo(Button, buttonPropsAreEqual);
