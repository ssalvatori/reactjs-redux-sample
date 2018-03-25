import React from 'react';
import PropTypes from 'prop-types';

import { Panel } from 'react-bootstrap';

import './CompanyDescription.css';

class CompanyDescription extends React.Component {

    render() {
        return (

            <div>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{this.props.company.name} <strong>({this.props.company.symbol})</strong></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        Country: <strong>{this.props.company.country}</strong><br />
                        HomePage: <strong><a href='{this.props.company.url}'>{this.props.company.url}</a></strong> <br />
                        Sub-Sector: <strong>{this.props.company.subsector}</strong> <br />
                        Pipelines:
                        <ul>
                            {
                                this.props.company.pipeline_url.map(function (url) {
                                    return <li key={url}>{url}</li>
                                })
                            }
                        </ul>

                    </Panel.Body>
                </Panel>

            </div>

        );
    }

}

CompanyDescription.propTypes = {
    company: PropTypes.object,
    fetched: PropTypes.bool
};

export default CompanyDescription;