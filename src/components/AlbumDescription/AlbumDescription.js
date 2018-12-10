import React from 'react';
import PropTypes from 'prop-types';

import { Panel } from 'react-bootstrap';

import './AlbumDescription.css';

class AlbumDescription extends React.Component {

    render() {
        return (

            <div>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{this.props.album.title} <strong>({this.props.album.id})</strong></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        Title: <strong>{this.props.album.title}</strong><br />
                        UserId: <strong>{this.props.album.userId}</strong> <br />
                    </Panel.Body>
                </Panel>

            </div>

        );
    }

}

AlbumDescription.propTypes = {
    album: PropTypes.object,
    fetched: PropTypes.bool
};

export default AlbumDescription;