import React from 'react';
import classNames from 'classnames';

function ColoredItems({ id, commonClassName, colorName, onSelectColor, selectedColor }) {
  return (
    <div
      onClick={() => onSelectColor(id)}
      className={classNames(commonClassName, colorName, {
        'selected-color': selectedColor,
      })}></div>
  );
}

export default React.memo(ColoredItems);
