import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from './Welcome'

it('should render div with "Hello World"',()=>{
const div = document.createElement('div');
// div.innerHTML = 'Hello World'
ReactDOM.render(<Welcome/> , div);
expect(div.innerHTML).toBe('<div>Hello World</div>')
})