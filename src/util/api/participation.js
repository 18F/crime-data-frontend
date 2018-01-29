/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Participation
const getParticipationNational = () => (
  get(`${API}/participation/national`));

const getParticipationByRegion = regionName => (
  get(`${API}/participation/regions/${regionName}`));

const getParticipationByState = stateAbbr => (
  get(`${API}/participation/states/${stateAbbr}`));

export default { getParticipationNational, getParticipationByRegion, getParticipationByState }
