/* eslint-disable no-nested-ternary */

import includes from 'array-includes'

import { get } from '../http'

export const API = '/api-proxy'

const badRequest = () => Promise.reject({ message: 'Bad Request' })

const NIBRS_VICTIM_VALID_VALUES = ['sex', 'age', 'race', 'ethnicity', 'location']
const NIBRS_OFFENDER_VALID_VALUES = ['sex', 'age', 'race', 'ethnicity']

// NIBRS Victim
const getNibrsVictimNational = params => (
  get(`${API}/nibrs/victim/count/national`, params));

const getNibrsVictimNationalByFilter = (v, params) => {
  if (includes(NIBRS_VICTIM_VALID_VALUES, v)) {
    return get(`${API}/nibrs/victim/count/national/${v}`, params);
  }
  return badRequest();
}

const getNibrsVictimByStateAbbr = (stateAbbr, params) => (
  get(`${API}/nibrs/victim/count/states/${stateAbbr}`, params));

const getNibrsVictimByStateAbbrAndFilter = (stateAbbr, v, params) => {
  if (includes(NIBRS_VICTIM_VALID_VALUES, v)) {
    return get(`${API}/nibrs/victim/count/states/${stateAbbr}/${v}`, params);
  }
  return badRequest();
}

const getNibrsVictimByOri = (ori, params) => (
  get(`${API}/nibrs/victim/count/agencies/${ori}`, params));

const getNibrsVictimByOriAndFilter = (ori, v, params) => {
  if (includes(NIBRS_VICTIM_VALID_VALUES, v)) {
    return get(`${API}/nibrs/victim/count/agencies/${ori}/${v}`, params);
  }
  return badRequest();
}

// NIBRS Offender
const getNibrsOffenderNational = params => (
  get(`${API}/nibrs/offender/count/national`, params));

const getNibrsOffenderNationalByFilter = (v, params) => {
  if (includes(NIBRS_OFFENDER_VALID_VALUES, v)) {
    return get(`${API}/nibrs/offender/count/national/${v}`, params);
  }
  return badRequest();
}

const getNibrsOffenderByStateAbbr = (stateAbbr, params) => (
  get(`${API}/nibrs/offender/count/states/${stateAbbr}`, params));

const getNibrsOffenderByStateAbbrAndFilter = (stateAbbr, v, params) => {
  if (includes(NIBRS_OFFENDER_VALID_VALUES, v)) {
    return get(`${API}/nibrs/offender/count/states/${stateAbbr}/${v}`, params);
  }
  return badRequest();
}

const getNibrsOffenderByOri = (ori, params) => (
  get(`${API}/nibrs/offender/count/agencies/${ori}`, params));

const getNibrsOffenderByOriAndFilter = (ori, v, params) => {
  if (includes(NIBRS_OFFENDER_VALID_VALUES, v)) {
    return get(`${API}/nibrs/offender/count/agencies/${ori}/${v}`, params);
  }
  return badRequest();
}

// NIBRS Victim Offender Relationship
const getNibrsVictimOffenderRelNational = params => (
  get(`${API}/nibrs/victim/count/national/relationships`, params));

const getNibrsVictimOffenderRelByStateAbbr = (stateAbbr, params) => (
  get(`${API}/nibrs/victim/count/states/${stateAbbr}/relationships`, params));

const getNibrsVictimOffenderRelByOri = (ori, params) => (
  get(`${API}/nibrs/victim/count/agencies/${ori}/relationships`, params));

// NIBRS Offenses
const getNibrsOffenseNational = params => (
  get(`${API}/nibrs/offense/count/national`, params));

const getNibrsOffenseByStateAbbr = (stateAbbr, params) => (
  get(`${API}/nibrs/offense/count/states/${stateAbbr}`, params));

const getNibrsOffenseByOri = (ori, params) => (
  get(`${API}/nibrs/offense/count/agencies/${ori}`, params));

export default {
  getNibrsVictimNational,
  getNibrsVictimNationalByFilter,
  getNibrsVictimByStateAbbr,
  getNibrsVictimByStateAbbrAndFilter,
  getNibrsVictimByOri,
  getNibrsVictimByOriAndFilter,
  getNibrsOffenderNational,
  getNibrsOffenderNationalByFilter,
  getNibrsOffenderByStateAbbr,
  getNibrsOffenderByStateAbbrAndFilter,
  getNibrsOffenderByOri,
  getNibrsOffenderByOriAndFilter,
  getNibrsVictimOffenderRelNational,
  getNibrsVictimOffenderRelByStateAbbr,
  getNibrsVictimOffenderRelByOri,
  getNibrsOffenseNational,
  getNibrsOffenseByStateAbbr,
  getNibrsOffenseByOri
}
