/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Estimates
const getEstimatesNational = () => (
  get(`${API}/estimates/national?per_page=25`));

const getEstimatesByRegion = regionName => (
  get(`${API}/estimates/regions/${regionName}?per_page=25`));

const getEstimatesByState = stateAbbr => (
  get(`${API}/estimates/states/${stateAbbr}?per_page=25`));

export default { getEstimatesNational, getEstimatesByRegion, getEstimatesByState }
