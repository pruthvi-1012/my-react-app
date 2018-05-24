import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class MyAppSubComponent extends React.Component {
  render() {
    return (
        <div> {this.props.value}</div>
    );
  }
}


class MyApp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value: 'hello',
        };
    }

    renderSubComponent(i) {
        return (
            <MyAppSubComponent value={i} />
        );
    }

    render() {
        return (
           <div> {this.renderSubComponent('hi')} </div>
        );
    }
}
ReactDOM.render(<MyApp />, document.getElementById('root'));
