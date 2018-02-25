import React from 'react';

import { connect } from "react-redux"
import * as companyAction from "../actions/companies"

class CompanyList extends React.Component {

    componentWillMount = () => {
       // console.log(this.props)
       // this.props.getCompaniesList()
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
            companyAction.getCompanyInformation(id)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
