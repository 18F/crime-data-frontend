/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Police Employment Data
const getPoliceEmploymentNational = () => (
  get(`${API}/police-employment/national?per_page=25`));

const getPoliceEmploymentByRegion = regionName => (
  get(`${API}/police-employment/region/${regionName}?per_page=25`));

const getPoliceEmploymentByStateAbbr = stateAbbr => (
  get(`${API}/police-employment/states/${stateAbbr}?per_page=25`));

const getPoliceEmploymentByOri = ori => (
  get(`${API}/police-employment/agencies/${ori}?per_page=25`));

export default { getPoliceEmploymentNational, getPoliceEmploymentByRegion, getPoliceEmploymentByStateAbbr, getPoliceEmploymentByOri }
