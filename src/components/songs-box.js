import React, { Component } from 'react';

export default class SongsBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [],

        };
    }

    render() {
        console.log(this.props.song["im:artist"]);
        return (
            <div className="p-1 w-15">
                <div className="w-100">
                    <img src={this.props.song["im:image"][2].label} alt={this.props.song["im:artist"].label} className="w-100 img-rounded"/>
                </div>
                <div>
                    <p className="m-0 text-center">{this.props.song["im:artist"].label}</p>
                </div>
            </div>
        );
    }
}


