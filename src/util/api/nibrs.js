/* eslint-disable no-nested-ternary */

import includes from 'array-includes'

import { get } from '../http'

export const API = '/api-proxy'

const badRequest = () => Promise.reject({ message: 'Bad Request' })

const NIBRS_VICTIM_VALID_VALUES = ['sex', 'age', 'race', 'ethnicity', 'location']
const NIBRS_OFFENDER_VALID_VALUES = ['sex', 'age', 'race', 'ethnicity']

// NIBRS Victim
const getNibrsVictimNational = () => (
  get(`${API}/nibrs/victim/count/national`));

const getNibrsVictimNationalByFilter = v => {
  if (includes(NIBRS_VICTIM_VALID_VALUES, v)) {
    return get(`${API}/nibrs/victim/count/national/${v}`);
  }
  return badRequest();
}

const getNibrsVictimByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/victim/count/states/${stateAbbr}`));

const getNibrsVictimByStateAbbrAndFilter = (stateAbbr, v) => {
  if (includes(NIBRS_VICTIM_VALID_VALUES, v)) {
    return get(`${API}/nibrs/victim/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getNibrsVictimByOri = ori => (
  get(`${API}/nibrs/victim/count/agencies/${ori}`));

const getNibrsVictimByOriAndFilter = (ori, v) => {
  if (includes(NIBRS_VICTIM_VALID_VALUES, v)) {
    return get(`${API}/nibrs/victim/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// NIBRS Offender
const getNibrsOffenderNational = () => (
  get(`${API}/nibrs/offender/count/national`));

const getNibrsOffenderNationalByFilter = v => {
  if (includes(NIBRS_OFFENDER_VALID_VALUES, v)) {
    return get(`${API}/nibrs/offender/count/national/${v}`);
  }
  return badRequest();
}

const getNibrsOffenderByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/offender/count/states/${stateAbbr}`));

const getNibrsOffenderByStateAbbrAndFilter = (stateAbbr, v) => {
  if (includes(NIBRS_OFFENDER_VALID_VALUES, v)) {
    return get(`${API}/nibrs/offender/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getNibrsOffenderByOri = ori => (
  get(`${API}/nibrs/offender/count/agencies/${ori}`));

const getNibrsOffenderByOriAndFilter = (ori, v) => {
  if (includes(NIBRS_OFFENDER_VALID_VALUES, v)) {
    return get(`${API}/nibrs/offender/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// NIBRS Victim Offender Relationship
const getNibrsVictimOffenderRelNational = () => (
  get(`${API}/nibrs/victim/count/national/relationships`));

const getNibrsVictimOffenderRelByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/victim/count/states/${stateAbbr}/relationships`));

const getNibrsVictimOffenderRelByOri = ori => (
  get(`${API}/nibrs/victim/count/agencies/${ori}/relationships`));

// NIBRS Offenses
const getNibrsOffenseNational = () => (
  get(`${API}/nibrs/offense/count/national`));

const getNibrsOffenseByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/offense/count/states/${stateAbbr}`));

const getNibrsOffenseByOri = ori => (
  get(`${API}/nibrs/offense/count/agencies/${ori}`));

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
