import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board';

class MyApp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value: 'hello',
        };
    }

    render() {
        return (
           <div> 
               <Board />
           </div>
        );
    }
}
ReactDOM.render(<MyApp />, document.getElementById('root'));
