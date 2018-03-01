import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';

import * as companyAction from '../actions/companies';

import './CompanyList.css';

class CompanyList extends React.Component {

    render() {
        var autoSelector;

        if (this.props.fetched) {
            autoSelector = <Autocomplete
                value={this.props.autocomplete.value}
                items={this.props.companies}

                inputProps={{ id: 'company-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                getItemValue={(item) => item.name}

                onSelect={(value, company) => {
                    this.props.showCompany(value, company);
                    //this.setState({ value, companyList: [company], companySelected: company.symbol, showDescription: true });
                }}

                onChange={(event, value) => {
                    //this.setState({ value, showDescription: false, loading: true, companyList: [] });
                    this.props.selectCompany(value);
                    clearTimeout(this.requestTimer);
                    this.requestTimer = this.getCompanyList(value, (items) => {
                        this.setState({ companyList: items, loading: false });
                    });

                }}

                renderMenu={(items, value) => (
                    <div className="menu">
                        {value === '' ? (
                            <div className="item">Type of the name or symbol of a Company</div>
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
                        key={item.symbol}
                    ><strong>({item.symbol})</strong>:{item.name}</div>
                )}
            />;
        }

        return (
            <div>
                <h3>Companies List</h3>
                <button onClick={this.props.fetchCompanyList}>
                    Load Companies
                </button>

                <div className="box">
                    {autoSelector}
                </div>

            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return ({
        companies: state.companiesReducer.companies,
        fetched: state.companiesReducer.fetched,
        autocomplete: state.companiesReducer.autocomplete,
        ...ownProps
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        showCompany: (id) => {
            dispatch(companyAction.getCompanyInformation(id));
        },
        fetchCompanyList: () => {
            dispatch(companyAction.fetchCompanyList());
        }
    });
};

CompanyList.propTypes = {
    fetchCompanyList: PropTypes.func,
    showCompany: PropTypes.func,
    selectCompany: PropTypes.func,
    companies: PropTypes.array,
    autocomplete: PropTypes.object,
    fetched: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
