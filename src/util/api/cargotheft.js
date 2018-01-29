/* eslint-disable no-nested-ternary */

import includes from 'array-includes'

import { get } from '../http'

export const API = '/api-proxy'

const badRequest = () => Promise.reject({ message: 'Bad Request' })

const CARGO_THEFT_VALID_VALUES = ['location_name', 'offense_name', 'victim_type_name', 'prop_desc_name']
const CARGO_THEFT_OFFENSES_VALID_VALUES = ['location_name', 'victim_type_name', 'prop_desc_name']

// Cargo Theft
const getCargoTheftNational = v => {
  if (includes(CARGO_THEFT_VALID_VALUES, v)) {
    return get(`${API}/ct/count/national/${v}`);
  }
  return badRequest();
}

const getCargoTheftByStateId = (id, v) => {
    if (includes(CARGO_THEFT_VALID_VALUES, v)) {
      return get(`${API}/ct/count/states/${id}/${v}`);
    }
    return badRequest();
}

const getCargoTheftByStateAbbr = (stateAbbr, v) => {
    if (includes(CARGO_THEFT_VALID_VALUES, v)) {
      return get(`${API}/ct/count/states/${stateAbbr}/${v}`);
    }
    return badRequest();
}

const getCargoTheftByOri = (ori, v) => {
    if (includes(CARGO_THEFT_VALID_VALUES, v)) {
      return get(`${API}/ct/count/agencies/${ori}/${v}`);
    }
    return badRequest();
}

// Cargo Theft Offenses
const getCargoTheftOffensesNational = v => {
  if (includes(CARGO_THEFT_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/ct/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getCargoTheftOffensesByStateId = (id, v) => {
  if (includes(CARGO_THEFT_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/ct/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getCargoTheftOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(CARGO_THEFT_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/ct/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getCargoTheftOffensesByOri = (ori, v) => {
  if (includes(CARGO_THEFT_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/ct/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

export default { getCargoTheftNational, getCargoTheftByStateId, getCargoTheftByStateAbbr, getCargoTheftByOri, getCargoTheftOffensesNational, getCargoTheftOffensesByStateId, getCargoTheftOffensesByStateAbbr, getCargoTheftOffensesByOri }
