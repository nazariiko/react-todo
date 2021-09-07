import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleIsEdit } from './redux/actions/edit';

import { Header, Sidebar, Content, Editor } from './components';

import './css/app.css';

function App() {
  const dispatch = useDispatch();
  const [visibleEditor, setVisibleEditor] = React.useState(false);
  const isEdit = useSelector((state) => state.edit.isEdit);
  const { editor } = useSelector((state) => state.editor);

  const handleSetVisibleEditor = () => {
    setVisibleEditor(!visibleEditor);
    if (isEdit) {
      dispatch(toggleIsEdit);
      editor.clear();
    }
  };

  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Content onClickAddFolder={handleSetVisibleEditor} />
      <Editor
        visible={visibleEditor}
        handleSetVisibleEditor={handleSetVisibleEditor}
        isEdit={isEdit}
      />
      {visibleEditor && <div onClick={handleSetVisibleEditor} className="body-shadow"></div>}
    </div>
  );
}

export default App;
