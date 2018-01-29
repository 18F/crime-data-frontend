/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Lookups
const getLookupRegion = () => (
  get(`${API}/lookup/region`));

const getLookupState = () => (
  get(`${API}/lookup/state`));

export default { getLookupRegion, getLookupState }
