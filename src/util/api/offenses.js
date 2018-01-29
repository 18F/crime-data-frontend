/* eslint-disable no-nested-ternary */

import includes from 'array-includes'

import { get } from '../http'

export const API = '/api-proxy'

const badRequest = () => Promise.reject({ message: 'Bad Request' })

const OFFENSES_VALID_VALUES = ['weapon_name', 'method_entry_code', 'num_premises_entered', 'location_name', 'offense_name']
const OFFENSES_BY_OFFENSE_VALID_VALUES = ['weapon_name', 'method_entry_code', 'num_premises_entered', 'location_name']

// Offenses
const getOffensesNational = v => {
  if (includes(OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/national/${v}`);
  }
  return badRequest();
}

const getOffensesByStateId = (id, v) => {
  if (includes(OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/states/${id}/${v}`);
  }
  return badRequest();
}

const getOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getOffensesByOri = (ori, v) => {
  if (includes(OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// Offense By Offense Types
const getOffensesByOffenseNational = v => {
  if (includes(OFFENSES_BY_OFFENSE_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getOffensesByOffenseByStateId = (id, v) => {
  if (includes(OFFENSES_BY_OFFENSE_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getOffensesByOffenseByStateAbbr = (stateAbbr, v) => {
  if (includes(OFFENSES_BY_OFFENSE_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getOffensesByOffenseByOri = (ori, v) => {
  if (includes(OFFENSES_BY_OFFENSE_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

export default { getOffensesNational, getOffensesByStateId, getOffensesByStateAbbr, getOffensesByOri, getOffensesByOffenseNational, getOffensesByOffenseByStateId, getOffensesByOffenseByStateAbbr, getOffensesByOffenseByOri }
