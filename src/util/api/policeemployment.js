/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Police Employment Data
const getPoliceEmploymentNational = () => (
  get(`${API}/police-employment/national`));

const getPoliceEmploymentByRegion = regionName => (
  get(`${API}/police-employment/region/${regionName}`));

const getPoliceEmploymentByStateAbbr = stateAbbr => (
  get(`${API}/police-employment/states/${stateAbbr}`));

const getPoliceEmploymentByOri = ori => (
  get(`${API}/police-employment/agencies/${ori}`));

export default { getPoliceEmploymentNational, getPoliceEmploymentByRegion, getPoliceEmploymentByStateAbbr, getPoliceEmploymentByOri }
