import React, { Component } from 'react';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: [],
        };
    }

    componentWillMount() {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then(response => response.json())
            .then(data => {
                var categories = [];
                data.feed.entry.forEach(entry => {
                    var newCategory = true;
                    categories.forEach(category => {
                        if (entry.category.attributes.term === category) {
                            newCategory = false;
                        }
                    });
                    if (newCategory) {
                        categories.push(entry.category.attributes.term)
                    }
                });
                this.setState({ genre: [...categories] });
            })
    }

    renderCategories() {
        var contentCategories = [];
        var i = 0;
        this.state.genre.forEach(element => {
            contentCategories.push(
                <li key={'categories-' + i} className="pb-1">
                    <button onClick={() => this.changeCategory(element)} className={"text-white btn-nav-bar " + (this.props.filter === element ? 'active' : '')}>
                        {element}
                    </button>
                </li>
            );
            i++;
        });

        return contentCategories;
    }

    changeCategory(name) {
        this.props.changeCategory(name);
    }

    render() {
        return (
            <div className="w-19 bg-black d-inline-block vh-100">
                <div className="bg-red px-1 h-10 align-items-center d-flex">
                    <h3 className="text-white text-center m-0 w-100">Muzik</h3>
                </div>

                <div className="container-categories h-90">
                    <ul>
                        <h4 className="text-white">MUSIK</h4>
                        {this.renderCategories()}
                    </ul>
                </div>

            </div>
        );
    }
}


