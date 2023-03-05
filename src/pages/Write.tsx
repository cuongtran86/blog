import * as React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = React.useState('');
  console.log(value);
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{display:"none"}} type="file" id='file' name='' />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name='cat' value={"Java"} id="java" />
            <label htmlFor="java">Java</label>
          </div>
          
          <div className="cat">
            <input type="radio" name='cat' value={"Oracle PL/SQL"} id="plsql" />
            <label htmlFor="plsql">Oracle PL/SQL</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value={"Oracle Apex"} id="apex" />
            <label htmlFor="apex">Oracle Apex</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value={"NodeJS"} id="node" />
            <label htmlFor="node">NodeJS</label>
          </div>
          
          <div className="cat">
            <input type="radio" name='cat' value={"ReactJS"} id="react" />
            <label htmlFor="react">ReactJS</label>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Write