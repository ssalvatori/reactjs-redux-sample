import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CompanyInformation extends React.Component {

    render() {
        return (
            <div>
                <h2>
                    Company Information
                </h2>
                <div>
                    {this.props.company.information.name}
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return ({
        company: state.company,
        ...ownProps
    });
};

const mapDispatchToProps = dispatch => {
    return ({});
}

CompanyInformation.propTypes = {
    company: PropTypes.object,
    fetched: PropTypes.bool
};

export default connect(mapStateToProps,mapDispatchToProps)(CompanyInformation);