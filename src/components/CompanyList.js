import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';

import * as companyAction from '../actions/companies';

import './CompanyList.css';

class CompanyList extends React.Component {

    matchCompanyToTerm(company, value) {
        return (
            company.symbol.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            company.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }

    getCompanyList(value, companyList) {
        setTimeout(companyList, 200, value ?
            this.props.autocomplete.items.filter(company => this.matchCompanyToTerm(company, value)) :
            this.props.companies
        );
    }

    render() {
        var autoSelector;

        if (this.props.fetched) {
            autoSelector = <Autocomplete
                value={this.props.autocomplete.value}
                items={this.props.autocomplete.items}

                inputProps={{ id: 'company-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                getItemValue={(item) => item.name}

                /* ITEM SELECTED FROM THEM DROP-DOWN MENU */
                onSelect={(value, item) => {
                    this.props.showCompany(value, item);
                }}

                /* CHANGE IN THE INPUT VALUE */
                onChange={(event, value) => {
                    this.props.changeValue(value);
                    clearTimeout(this.requestTimer);

                    this.requestTimer = this.getCompanyList(value, (items) => {
                        this.props.filterList(items);
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
        companies: state.companies.companies,
        fetched: state.companies.fetched,
        autocomplete: state.autocomplete,
        ...ownProps
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        showCompany: (value, item) => {
            dispatch(companyAction.autocompleteChangeValue(item.name));
            dispatch(companyAction.getCompanyInformation(item.symbol));
        },
        fetchCompanyList: () => {
            dispatch(companyAction.fetchCompanyList());
        },
        changeValue: (value) => {
            dispatch(companyAction.autocompleteChangeValue(value));
        },
        filterList: (items) => {
            dispatch(companyAction.autocompleteChangeList(items));
        }
    });
};

CompanyList.propTypes = {
    fetchCompanyList: PropTypes.func,
    showCompany: PropTypes.func,
    changeValue: PropTypes.func,
    filterList: PropTypes.func,
    companies: PropTypes.array,
    autocomplete: PropTypes.object,
    fetched: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
