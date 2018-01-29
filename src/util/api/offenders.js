/* eslint-disable no-nested-ternary */

import includes from 'array-includes'

import { get } from '../http'

export const API = '/api-proxy'

const badRequest = () => Promise.reject({ message: 'Bad Request' })

const OFFENDERS_VALID_VALUES = ['ethnicity', 'prop_desc_name', 'offense_name', 'race_code', 'location_name', 'age_num', 'sex_code']
const OFFENDER_OFFENCES_VALID_VALUES = ['ethnicity', 'race_code', 'age_num', 'sex_code']

// Offenders
const getOffendersNational = v => {
  if (includes(OFFENDERS_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/national/${v}`);
  }
  return badRequest();
}

const getOffendersByStateId = (id, v) => {
  if (includes(OFFENDERS_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/states/${id}/${v}`);
  }
  return badRequest();
}

const getOffendersByStateAbbr = (stateAbbr, v) => {
  if (includes(OFFENDERS_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getOffendersByOri = (ori, v) => {
  if (includes(OFFENDERS_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// Offender By Offenses
const getOffenderOffensesNational = v => {
  if (includes(OFFENDER_OFFENCES_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getOffenderOffensesByStateId = (id, v) => {
  if (includes(OFFENDER_OFFENCES_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getOffenderOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(OFFENDER_OFFENCES_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getOffenderOffensesByOri = (ori, v) => {
  if (includes(OFFENDER_OFFENCES_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

export default { getOffendersNational, getOffendersByStateId, getOffendersByStateAbbr, getOffendersByOri, getOffenderOffensesNational, getOffenderOffensesByStateId, getOffenderOffensesByStateAbbr, getOffenderOffensesByOri }
