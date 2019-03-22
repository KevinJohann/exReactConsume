import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/nav-bar';
import Header from './components/header';
import MusicContainer from './components/music-container';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: 'any',
        };
    }

    render() {
        return (
            <div className="w-100 vh-100">
                <NavBar 
                filter={this.state.filter}
                changeCategory={(name) => this.changeCategory(name)}/>
                <div className="w-81 d-inline-block float-right vh-100">
                    <Header/>
                    <MusicContainer
                    filter={this.state.filter}/>
                </div>
                

            </div>
        );
    }

    changeCategory(name){
        this.setState({
            filter: name,
        });
        console.log(this.state.filter);
    }
}

export default App;
