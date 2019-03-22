import React, { Component } from 'react';
import SongsBox from './songs-box';

export default class MusicContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            musicName: [],
            image: [],
        };
    }

    componentWillMount() {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    songs: data.feed.entry,
                });
            });
    }

    renderSongs() {
        var contentSongs = [];
        var i = 0;
        console.log(this.state.songs);

        if (this.props.filter === 'any') {
            this.state.songs.forEach(element => {
                contentSongs.push(
                    <SongsBox
                        key={'songs-' + i}
                        song={element}
                    />
                );
                i++;
            });
        }else{
            this.state.songs.forEach(element => {
                if(this.props.filter === element.category.attributes.term){
                    contentSongs.push(
                        <SongsBox
                            key={'songs-' + i}
                            song={element}
                        />
                    );
                    i++;
                }
            });
        }

        return contentSongs;
    }

    render() {
        return (
            <div className="px-1 pt-1 d-flex align-content-start flex-wrap container-categories h-85 justify-content-center">
                {this.renderSongs()}
            </div>
        );
    }
}


