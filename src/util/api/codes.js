/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Codes
const getCodeTypes = () => (
  get(`${API}/codes`));

const getCodes = codeType => (
  get(`${API}/codes/${codeType}`));

export default { getCodeTypes, getCodes }
