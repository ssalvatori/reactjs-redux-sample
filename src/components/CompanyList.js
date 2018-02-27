import React from 'react';

import { connect } from "react-redux"
import * as companyAction from "../actions/companies"

class CompanyList extends React.Component {

    render() {
        return (
            <div>
                <h3>Companies List </h3>
                <button onClick={this.props.fetchCompanyList()}>
                    Load Companies
                </button>
            </div>
        );
    }

}


const mapStateToProps = (state,ownProps) => {
    return {
        companies: state.companies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showCompany: (id) => {
            dispatch(companyAction.getCompanyInformation(id))
        },
        fetchCompanyList: () => {
            dispatch(companyAction.fetchCompanyList())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
