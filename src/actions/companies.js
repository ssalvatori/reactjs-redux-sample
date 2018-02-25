/*  action types */
export const FETCH_COMPANIES = 'FETCH_COMPANIES'
export const FETCH_COMPANY_INFORMATION = 'FETCH_COMPANY_INFORMATION'

/* action creators */
export function getCompaniesList() {
    return { type: FETCH_COMPANIES }
}

export function getCompanyInformation(id) {
    return { type: FETCH_COMPANY_INFORMATION, id }
}