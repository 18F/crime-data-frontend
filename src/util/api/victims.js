/* eslint-disable no-nested-ternary */

import includes from 'array-includes'

import { get } from '../http'

export const API = '/api-proxy'

const badRequest = () => Promise.reject({ message: 'Bad Request' })

const VICTIMS_VALID_VALUES = ['prop_desc_name', 'offense_name', 'ethnicity', 'resident_status_code', 'offender_relationship', 'circumstance_name', 'race_code', 'location_name', 'age_num', 'sex_code']
const VICTIMS_OFFENSES_VALID_VALUES = ['resident_status_code', 'offender_relationship', 'circumstance_name', 'ethnicity', 'race_code', 'age_num', 'sex_code']

// Victims
const getVictimsNational = v => {
  if (includes(VICTIMS_VALID_VALUES, v)) {
    return get(`${API}/victims/count/national/${v}`);
  }
  return badRequest();
}

const getVictimsByStateId = (id, v) => {
  if (includes(VICTIMS_VALID_VALUES, v)) {
    return get(`${API}/victims/count/states/${id}/${v}`);
  }
  return badRequest();
}

const getVictimsByStateAbbr = (stateAbbr, v) => {
  if (includes(VICTIMS_VALID_VALUES, v)) {
    return get(`${API}/victims/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getVictimsByOri = (ori, v) => {
  if (includes(VICTIMS_VALID_VALUES, v)) {
    return get(`${API}/victims/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// Victim By Offenses
const getVictimOffensesNational = v => {
  if (includes(VICTIMS_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/victims/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getVictimOffensesByStateId = (id, v) => {
  if (includes(VICTIMS_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/victims/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getVictimOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(VICTIMS_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/victims/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getVictimOffensesByOri = (ori, v) => {
  if (includes(VICTIMS_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/victims/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

export default {
  getVictimsNational,
  getVictimsByStateId,
  getVictimsByStateAbbr,
  getVictimsByOri,
  getVictimOffensesNational,
  getVictimOffensesByStateId,
  getVictimOffensesByStateAbbr,
  getVictimOffensesByOri
}
