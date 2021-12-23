import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//var div = React.createElement('div', null, "Helo World!")
const WORLD = 'world'
const user = {
   id: 1,
   name: 'Ivan',
   secondName: 'Ivanov',
   age:15,
   getFullname: function(){ return this.name + ' ' + this.secondName + ' ' + this.age }
}

ReactDOM.render(  
  <>
     <div> Hello {WORLD + '!' } </div>
     <div>user.getFullname()</div>
  </>,
  document.getElementById('root')
);
