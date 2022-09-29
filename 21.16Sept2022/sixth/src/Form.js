import React from 'react';
import ReactDOM from 'react-dom/client';

const Form_one=()=> {  

  return (
    <form >
      <label>Enter your name:
        <input 
          type="text" 
        />
      </label><br/><br/><br/>
      <label>Enter your monile no:
        <input 
          type="number" 
        />
      </label><br/><br/><br/>
      <label>Enter your Article:
       <textarea>
     Content of the text area goes here
       </textarea>
      </label>   <br/> <br/><br/>
<label>
    Select the appropirate one
      <select>
  <option value="abc">abc</option>
  <option value="def" selected>def</option>
  <option value="ghi">ghi</option>
</select>  
</label><br/><br/><br/>
<input type="submit"/>
    </form>
  )
}
export default Form_one;