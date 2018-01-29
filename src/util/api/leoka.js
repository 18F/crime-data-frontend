/* eslint-disable no-nested-ternary */

import includes from 'array-includes'

import { get } from '../http'

export const API = '/api-proxy'

const badRequest = () => Promise.reject({ message: 'Bad Request' })

const LEOKA_ASSAULT_VALID_VALUES = ['assign-dist', 'weapon', 'weapon-activity', 'weapon-group', 'group']

// Leoka Assault
const getLeokaAssaultNational = v => {
  if (includes(LEOKA_ASSAULT_VALID_VALUES, v)) {
    return get(`${API}/leoka/assault/national/${v}`);
  }
  return badRequest();
}

const getLeokaAssaultByRegion = (regionName, v) => {
  if (includes(LEOKA_ASSAULT_VALID_VALUES, v)) {
    return get(`${API}/leoka/assault/region/${regionName}/${v}`);
  }
  return badRequest();
}

const getLeokaAssaultByState = (stateAbbr, v) => {
  if (includes(LEOKA_ASSAULT_VALID_VALUES, v)) {
    return get(`${API}/leoka/assault/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getLeokaAssaultByOri = (ori, v) => {
  if (includes(LEOKA_ASSAULT_VALID_VALUES, v)) {
    return get(`${API}/leoka/assault/agencies/${ori}/${v}`);
  }
  return badRequest();
}

const getLeokaAssaultTimeDist = () => (
  get(`${API}/leoka/assault/time-distribution`));

export default { getLeokaAssaultNational, getLeokaAssaultByRegion, getLeokaAssaultByState, getLeokaAssaultByOri, getLeokaAssaultTimeDist }
