/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Lookups
const getLookupRegion = params => (
  get(`${API}/lookup/region`, params));

const getLookupState = params => (
  get(`${API}/lookup/state`, params));

export default { getLookupRegion, getLookupState }
