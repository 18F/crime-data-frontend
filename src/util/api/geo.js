/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Geo
const getGeoByState = stateAbbr => (
  get(`${API}/geo/states/${stateAbbr}`));

const getGeoByCounty = id => (
  get(`${API}/geo/counties/${id}`));

export default { getGeoByState, getGeoByCounty }
