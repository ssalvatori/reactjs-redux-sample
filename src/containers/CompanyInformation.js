import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as companyAction from '../actions/companies';

import { Grid, Row, Col } from 'react-bootstrap';

import CompanyDescription from '../components/CompanyDescription';
import CompanyList from '../components/CompanyList';

class CompanyInformation extends React.Component {

    render() {
        return (
            <Grid>

                <Row className="show-grid">

                    <Col>
                        <CompanyList
                            showCompany={this.props.showCompany}
                            changeValue={this.props.changeValue}
                            companies={this.props.companies}
                            fetchCompanyList={this.props.fetchCompanyList}
                            fetched={this.props.fetched}
                            autocomplete={this.props.autocomplete}
                            filterList={this.props.filterList}
                        />
                    </Col>

                </Row>

                <Row className="show-grid">

                    <Col>
                        <CompanyDescription />
                    </Col>

                </Row>

            </Grid>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return ({
        companies: state.companies.list,
        fetched: state.companies.fetched,
        autocomplete: state.autocomplete,
        company: state.company,
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

CompanyInformation.propTypes = {
    fetchCompanyList: PropTypes.func,
    showCompany: PropTypes.func,
    changeValue: PropTypes.func,
    filterList: PropTypes.func,
    companies: PropTypes.array,
    company: PropTypes.object,
    autocomplete: PropTypes.object,
    fetched: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInformation);