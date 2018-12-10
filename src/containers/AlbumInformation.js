import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as albumAction from '../actions/albums';

import { Grid, Row, Col } from 'react-bootstrap';

import AlbumDescription from '../components/AlbumDescription';
import AlbumList from '../components/AlbumList';

import './AlbumInformation.css'

class AlbumInformation extends React.Component {

    render() {

        var album_information = "";

        if (this.props.album.fetched) {
            album_information = <AlbumDescription album={this.props.album.information} />
        }

        return (
            <Grid>

                <Row className="album-list">

                    <Col>
                        <AlbumList
                            showAlbum={this.props.showAlbum}
                            changeValue={this.props.changeValue}
                            albums={this.props.albums}
                            fetchAlbumList={this.props.fetchAlbumList}
                            fetched={this.props.fetched}
                            autocomplete={this.props.autocomplete}
                            filterList={this.props.filterList}
                        />
                    </Col>

                </Row>

                <Row className="show-grid">

                    <Col>
                        {album_information}
                    </Col>

                </Row>

            </Grid>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return ({
        albums: state.albums.list,
        fetched: state.albums.fetched,
        autocomplete: state.autocomplete,
        album: state.album,
        ...ownProps
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        showAlbum: (value, item) => {
            dispatch(albumAction.autocompleteChangeValue(item.title));
            dispatch(albumAction.getAlbumInformation(item.id));
        },
        fetchAlbumList: () => {
            dispatch(albumAction.fetchAlbumList());
        },
        changeValue: (value) => {
            dispatch(albumAction.autocompleteChangeValue(value));
        },
        filterList: (items) => {
            dispatch(albumAction.autocompleteChangeList(items));
        }
    });
};

AlbumInformation.propTypes = {
    fetchAlbumList: PropTypes.func,
    showAlbum: PropTypes.func,
    changeValue: PropTypes.func,
    filterList: PropTypes.func,
    albums: PropTypes.array,
    album: PropTypes.object,
    autocomplete: PropTypes.object,
    fetched: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumInformation);