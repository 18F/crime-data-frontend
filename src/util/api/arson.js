/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Arson
const getArsonNational = (params = {}) => (
  get(`${API}/arson/national`, params));

const getArsonByRegion = (regionName, params = {}) => (
  get(`${API}/arson/region/${regionName}`, params));

const getArsonByState = (stateAbbr, params = {}) => (
  get(`${API}/arson/state/${stateAbbr}`, params));

export default { getArsonNational, getArsonByRegion, getArsonByState }
