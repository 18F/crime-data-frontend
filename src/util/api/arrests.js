/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Agencies
const getArrestsNational = () => (
  get(`${API}/arrests/national`));

export default {
  getArrestsNational
}
