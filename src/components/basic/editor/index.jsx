import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { Component } from 'react';
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import PropTypes from 'prop-types';
import Wysiwyg from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import s from './styles/index.sass';

export default class Editor extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    defaultValue: '',
    label: '',
    onChange() {},
  };

  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(props.defaultValue || ''),
        ),
      ),
    };
  }

  stateToHtml(state) {
    return draftToHtml(convertToRaw(state.getCurrentContent()))
      .replace(/background-color[^;]+;?/g, '')
      .replace(/color[^;]+;?/g, '')
      .replace(/font-family[^;]+;?/g, '')
      .replace(/font-size[^;]+;?/g, '');
  }

  getValue = () => (
    this.stateToHtml(this.editorNode.getEditorState())
  );

  onChange = (state) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(this.stateToHtml(state));
    }
  };

  render() {
    const { label } = this.props;

    return (
      <div>
        {label && (
          <label>
            {label}
          </label>
        )}
        <Wysiwyg.Editor
          onEditorStateChange={this.onChange}
          defaultEditorState={this.state.editorState}
          editorClassName={s.editor}
          toolbarClassName={s.toolbar}
          ref={node => (this.editorNode = node)}
          toolbar={{
            options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'emoji', 'embedded', 'image', 'history'],
            inline: {
              inDropdown: false,
              options: ['bold', 'italic', 'underline', 'strikethrough'],
            },
            blockType: {
              inDropdown: false,
              options: ['Normal', 'H1', 'H2', 'H3', 'Blockquote'],
            },
            fontSize: {
              options: [16],
            },
          }}
        />
      </div>
    );
  }
}
