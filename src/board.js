import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './square';

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        return( 
            <div className="board-row"> {this.renderSquare(i)} </div> 
        );
    }
}

export default Board;

