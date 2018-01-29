/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Human Traffic
const getHumanTrafficAgencies = () => (
  get(`${API}/ht/agencies`));

const getHumanTrafficStates = () => (
  get(`${API}/ht/states`));

export default { getHumanTrafficAgencies, getHumanTrafficStates }
