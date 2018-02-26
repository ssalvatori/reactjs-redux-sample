import React from 'react';

import { connect } from "react-redux"
import * as companyAction from "../actions/companies"

class CompanyList extends React.Component {

    componentWillMount = () => {
       this.props.getCompaniesList()
    }

    render() {
        return (
            <div>
                Compnaies List
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
        getCompaniesList: () => {
            dispatch(companyAction.getCompaniesList())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
