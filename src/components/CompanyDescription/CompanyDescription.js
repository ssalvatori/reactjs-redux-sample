import React from 'react';
import PropTypes from 'prop-types';

import './CompanyDescription.css';

class CompanyDescription extends React.Component {

    render() {
        return (
            <div>
                <h2>
                    Company Description
                </h2>
                <div>

                </div>
            </div>
        );
    }

}

CompanyDescription.propTypes = {
    company: PropTypes.object,
    fetched: PropTypes.bool
};

export default CompanyDescription;