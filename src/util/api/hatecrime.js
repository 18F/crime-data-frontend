/* eslint-disable no-nested-ternary */

import includes from 'array-includes'

import { get } from '../http'

export const API = '/api-proxy'

const badRequest = () => Promise.reject({ message: 'Bad Request' })

const HATE_CRIMES_VALID_VALUES = ['bias_name']

// Hate Crimes
// VARIABLES = ['bias_name']
const getHateCrimeNational = v => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/national/${v}`);
  }
  return badRequest();
}

const getHateCrimeByStateId = (id, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/states/${id}/${v}`);
  }
  return badRequest();
}

const getHateCrimeByStateAbbr = (stateAbbr, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getHateCrimeByOri = (ori, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// Hate Crime Offenses
const getHateCrimeOffensesNational = v => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getHateCrimeOffensesByStateId = (id, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getHateCrimeOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getHateCrimeOffensesByOri = (ori, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

export default { getHateCrimeNational, getHateCrimeByStateId, getHateCrimeByStateAbbr, getHateCrimeByOri, getHateCrimeOffensesNational, getHateCrimeOffensesByStateId, getHateCrimeOffensesByStateAbbr, getHateCrimeOffensesByOri }
