import React from 'react';
import EditorJs from '@editorjs/editorjs';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { postTask, patchTask } from '../redux/actions/tasks';
import { editorInit } from '../redux/actions/editor';

const editor = new EditorJs({
  holder: 'editorjs',
  autofocus: true,
});

function Editor({ visible, handleSetVisibleEditor, isEdit }) {
  const dispatch = useDispatch();
  const { activeFolderId, activeFolderName, activeFolderColorName, activeFolderColorCode } =
    useSelector((state) => state.filter);
  const { editTaskId, editTaskContent } = useSelector((state) => state.edit);

  const handleAddTask = (task) => {
    if (!checkEditorFilled(task)) {
      return;
    }

    const constuctedTask = {
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
      folder: {
        id: activeFolderId,
        name: activeFolderName,
        colorName: activeFolderColorName,
        colorCode: activeFolderColorCode,
      },
      folderId: activeFolderId,
      content: task,
    };

    dispatch(postTask(constuctedTask));
    handleSetVisibleEditor();
  };

  const showEditTask = (editTaskContent) => {
    editor.blocks.clear();
    for (let i = 0; i < editTaskContent.length; i++) {
      editor.blocks.insert('paragraph', editTaskContent[i].data);
    }
    editor.blocks.delete(0);
  };

  const handleEditedTask = (task) => {
    if (!checkEditorFilled(task)) {
      return;
    }

    dispatch(patchTask(editTaskId, { content: task }));
    handleSetVisibleEditor();
  };

  const checkEditorFilled = (task) => {
    return Boolean(task.length);
  };

  React.useEffect(() => {
    if (isEdit) {
      showEditTask(editTaskContent);
    }
  }, [isEdit]);

  React.useEffect(() => {
    dispatch(editorInit(editor));
  }, []);

  return (
    <div
      className={classNames('editor-container', {
        visible: visible,
      })}>
      <h2 className="editor-container__heading">Your task:</h2>
      <div id="editorjs" className="editorjs"></div>
      <button
        onClick={() =>
          editor.save().then((data) => {
            if (isEdit) {
              handleEditedTask(data.blocks);
            } else {
              handleAddTask(data.blocks);
              editor.blocks.clear();
            }
          })
        }
        className="editor-container__button-save">
        Save
      </button>
    </div>
  );
}

export default Editor;
