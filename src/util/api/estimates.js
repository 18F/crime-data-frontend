/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Estimates
const getEstimatesNational = () => (
  get(`${API}/estimates/national`));

const getEstimatesByRegion = regionName => (
  get(`${API}/estimates/regions/${regionName}`));

const getEstimatesByState = stateAbbr => (
  get(`${API}/estimates/states/${stateAbbr}`));

export default { getEstimatesNational, getEstimatesByRegion, getEstimatesByState }
