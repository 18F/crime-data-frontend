/* eslint-disable no-nested-ternary */

import { get } from '../http'

export const API = '/api-proxy'

// Agencies
const getAgencies = () => (
  get(`${API}/agencies`));

const getAgencyDetails = ori => (
  get(`${API}/agencies/${ori}`));

const getAgencyParticipation = () => (
  get(`${API}/agencies/participation`));

// Agencies' SubOffenses Counts
const getAgencySumsByState = stateAbbr => (
  get(`${API}/agencies/count/states/suboffenses/${stateAbbr}`));

const getAgencySumsByOri = (stateAbbr, ori) => (
  get(`${API}/agencies/count/states/suboffenses/${stateAbbr}/${ori}`));

const getAgencySumsByCounty = (stateAbbr, countyCode) => (
  get(`${API}/agencies/count/states/suboffenses/${stateAbbr}/counties/${countyCode}`));

// Agencies' Offenses Counts
const getAgencyOffensesByState = stateAbbr => (
  get(`${API}/agencies/count/states/${stateAbbr}/offenses`));

const getAgencyOffensesByOri = ori => (
  get(`${API}/agencies/count/${ori}/offenses`));

const getAgencyOffensesByCounty = (stateAbbr, countyCode) => (
  get(`${API}/agencies/count/states/offenses/${stateAbbr}/counts/${countyCode}`));

export default {
  getAgencies,
  getAgencyDetails,
  getAgencyParticipation,
  getAgencySumsByState,
  getAgencySumsByOri,
  getAgencySumsByCounty,
  getAgencyOffensesByState,
  getAgencyOffensesByOri,
  getAgencyOffensesByCounty
}
