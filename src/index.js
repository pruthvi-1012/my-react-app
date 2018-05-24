import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class MyApp extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div> test </div>
        );
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
