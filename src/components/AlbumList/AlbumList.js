import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from 'react-autocomplete';

import { Button, Badge } from 'react-bootstrap';

import './AlbumList.css';

class AlbumList extends React.Component {

    matchAlbumToTerm(album, value) {
        return (
            album.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }

    getAlbumList(value, albumList) {
        setTimeout(albumList, 200, value ?
            this.props.autocomplete.items.filter(album => this.matchAlbumToTerm(album, value)) :
            this.props.albums
        );
    }

    render() {
        var autoSelector;

        if (this.props.fetched) {
            autoSelector = <Autocomplete
                value={this.props.autocomplete.value}
                items={this.props.autocomplete.items}

                inputProps={{ id: 'album-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                getItemValue={(item) => item.title}

                /* ITEM SELECTED FROM THEM DROP-DOWN MENU */
                onSelect={(value, item) => {
                    this.props.showAlbum(value, item);
                }}

                /* CHANGE IN THE INPUT VALUE */
                onChange={(event, value) => {
                    this.props.changeValue(value);
                    clearTimeout(this.requestTimer);

                    this.requestTimer = this.getAlbumList(value, (items) => {
                        this.props.filterList(items);
                    });

                }}

                renderMenu={(items, value) => (
                    <div className="menu">
                        {value === '' ? (
                            <div className="item">Type of the title Album</div>
                        ) : this.props.autocomplete.loading ? (
                            <div className="item">Loading...</div>
                        ) : items.length === 0 ? (
                            <div className="item">No matches for {value}</div>
                        ) : items}
                    </div>
                )}

                renderItem={(item, isHighlighted) => (
                    <div
                        className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                        key={item.id}
                    ><strong>({item.title})</strong>:{item.title}</div>
                )}
            />;
        }

        let buttonFetchAlbums = !this.props.fetched ? <Button bsStyle="primary" onClick={this.props.fetchAlbumList}>Load Albums</Button> : '';

        return (
            <div>
                <h3>
                    Albums List <Badge>{this.props.albums.length}</Badge>
                </h3>

                {buttonFetchAlbums}

                <div className="box">
                    {autoSelector}
                </div>

            </div>
        );
    }

}


AlbumList.propTypes = {
    fetchAlbumList: PropTypes.func,
    showAlbum: PropTypes.func,
    changeValue: PropTypes.func,
    filterList: PropTypes.func,
    albums: PropTypes.array,
    autocomplete: PropTypes.object,
    fetched: PropTypes.bool
};

export default AlbumList;
