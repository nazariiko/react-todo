import React from 'react';
import { useDispatch } from 'react-redux';

import { postFolder } from '../redux/actions/folders';

import { Button, ColoredItems } from './';

import { setFolderFilter } from '../redux/actions/filter';

import closeIcon from '../assets/images/close.svg';
import addFolderIcon from '../assets/images/add-folder.svg';

const colorNames = ['red', 'orange', 'yellow', 'green', 'blue', 'sea-blue', 'violet'];
const colorCodes = ['#FF7272', '#FF9C54', '#FFE03C', '#94FF83', '#7BE7FF', '#54C1FF', '#9969FD'];

function AddFolder() {
  const dispatch = useDispatch();
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(2);
  const [inputFolderName, setInputFolderName] = React.useState('');

  const addFolderPopupRef = React.useRef();
  const inputFolderNameRef = React.useRef();

  const handleVisiblePopup = React.useCallback(() => {
    setVisiblePopup(!visiblePopup);
  }, [visiblePopup]);

  const handleSelectColor = React.useCallback(
    (id) => {
      setSelectedColor(id);
    },
    [selectedColor],
  );

  const handleInputFolderName = (e) => {
    removeInputClass();
    setInputFolderName(e.target.value);
  };

  const handleAddFolder = React.useCallback(() => {
    if (!checkInputFilled()) {
      addInputClass();
      return;
    }
    const folder = {
      name: inputFolderName,
      colorCode: colorCodes[selectedColor],
      colorName: colorNames[selectedColor],
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
    };
    dispatch(postFolder(folder));
    dispatch(setFolderFilter(folder.id, folder.name, folder.colorName, folder.colorCode));
    setInputFolderName('');
    setVisiblePopup(!visiblePopup);
  }, [inputFolderName, selectedColor]);

  const checkInputFilled = () => {
    return !!inputFolderName;
  };

  const addInputClass = () => {
    inputFolderNameRef.current.classList.add('input-empty');
  };

  const removeInputClass = () => {
    inputFolderNameRef.current.classList.remove('input-empty');
  };

  const catchOutsideClick = (e) => {
    if (!e.path.includes(addFolderPopupRef.current)) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', catchOutsideClick);
  }, []);

  return (
    <div ref={addFolderPopupRef} className="add-folder">
      <Button onClick={handleVisiblePopup}>
        <img
          src={addFolderIcon}
          alt="Plus"
          className="add-folder__plus-icon"
          width="30px"
          height="30px"></img>
      </Button>
      <h3 className="add-folder__text">Add folder</h3>
      {visiblePopup && (
        <div className="add-folder-popup">
          <input
            ref={inputFolderNameRef}
            onChange={(e) => handleInputFolderName(e)}
            className="add-folder-popup__input"
            type="text"
            value={inputFolderName}
            placeholder="Folder name"></input>

          {[...Array(7).keys()].map((id) => (
            <ColoredItems
              id={id}
              commonClassName={'add-folder-popup__colored-items'}
              colorName={colorNames[id]}
              onSelectColor={handleSelectColor}
              selectedColor={selectedColor === id}
              key={id}
            />
          ))}

          <Button onClick={handleAddFolder} className="add-folder-popup__button">
            Add
          </Button>

          <Button onClick={handleVisiblePopup}>
            <img
              src={closeIcon}
              className="close-folder-popup"
              width="30px"
              height="30px"
              alt="Cancel"></img>
          </Button>
        </div>
      )}
    </div>
  );
}

export default AddFolder;
