/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Lookups
const getLookupRegion = () => (
  get(`${API}/lookup/region`));

const getLookupState = perPage => (
  get(`${API}/lookup/state?per_page=${perPage}`));

export default { getLookupRegion, getLookupState }
