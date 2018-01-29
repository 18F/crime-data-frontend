/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Arson
const getArsonNational = () => (
  get(`${API}/arson/national`));

const getArsonByRegion = regionName => (
  get(`${API}/arson/region/${regionName}`));

const getArsonByState = stateAbbr => (
  get(`${API}/arson/state/${stateAbbr}`));

export default { getArsonNational, getArsonByRegion, getArsonByState }
