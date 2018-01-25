/* eslint-disable no-nested-ternary */

import upperFirst from 'lodash.upperfirst'

import { get } from './http'
import { mapToApiOffense } from './offenses'
import { oriToState } from './agencies'
import { slugify } from './text'

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
  get(`${API}/agencies/count/states/offenses/${stateAbbr}/countes/${countyCode}`));

// Arrests
const getArrestsNational = () => (
  get(`${API}/arrests/national`));

// Arson
const getArsonNational = () => (
  get(`${API}/arson/national`));

const getArsonByRegion = regionName => (
  get(`${API}/arson/region/${regionName}`));

const getArsonByState = stateAbbr => (
  get(`${API}/arson/state/${stateAbbr}`));

// Codes
const getCodeTypes = () => (
  get(`${API}/codes`));

const getCodes = codeType => (
  get(`${API}/codes/${codeType}`));

// Cargo Theft
// VARIABLES = ['location_name', 'offense_name', 'victim_type_name', 'prop_desc_name']
const getCargoTheftNational = v => (
  get(`${API}/ct/count/national/${v}`));

const getCargoTheftByStateId = (id, v) => (
  get(`${API}/ct/count/states/${id}/${v}`));

const getCargoTheftByStateAbbr = (stateAbbr, v) => (
  get(`${API}/ct/count/states/${stateAbbr}/${v}`));

const getCargoTheftByOri = (ori, v) => (
  get(`${API}/ct/count/agencies/${ori}/${v}`));

// Cargo Theft Offenses
// VARIABLES = ['location_name', 'victim_type_name', 'prop_desc_name']
const getCargoTheftOffensesNational = v => (
  get(`${API}/ct/count/national/${v}/offenses`));

const getCargoTheftOffensesByStateId = (id, v) => (
  get(`${API}/ct/count/states/${id}/${v}/offenses`));

const getCargoTheftOffensesByStateAbbr = (stateAbbr, v) => (
  get(`${API}/ct/count/states/${stateAbbr}/${v}/offenses`));

const getCargoTheftOffensesByOri = (ori, v) => (
  get(`${API}/ct/count/agencies/${ori}/${v}/offenses`));

// Estimates
const getEstimatesNational = () => (
  get(`${API}/estimates/national`));

const getEstimatesByRegion = regionName => (
  get(`${API}/estimates/regions/${regionName}`));

const getEstimatesByState = stateAbbr => (
  get(`${API}/estimates/states/${stateAbbr}`));

// Geo
const getGeoByState = id => (
  get(`${API}/geo/states/${id}`));

const getGeoByCounty = id => (
  get(`${API}/geo/counties/${id}`));

// Hate Crimes
// VARIABLES = ['bias_name']
const getHateCrimeNational = v => (
  get(`${API}/hc/count/national/${v}`));

const getHateCrimeByStateId = (id, v) => (
  get(`${API}/hc/count/states/${id}/${v}`));

const getHateCrimeByStateAbbr = (stateAbbr, v) => (
  get(`${API}/hc/count/states/${stateAbbr}/${v}`));

const getHateCrimeByOri = (ori, v) => (
  get(`${API}/hc/count/agencies/${ori}/${v}`));

// Hate Crime Offenses
// VARIABLES = ['bias_name']
const getHateCrimeOffensesNational = v => (
  get(`${API}/hc/count/national/${v}/offenses`));

const getHateCrimeOffensesByStateId = (id, v) => (
  get(`${API}/hc/count/states/${id}/${v}/offenses`));

const getHateCrimeOffensesByStateAbbr = (stateAbbr, v) => (
  get(`${API}/hc/count/states/${stateAbbr}/${v}/offenses`));

const getHateCrimeOffensesByOri = (ori, v) => (
  get(`${API}/hc/count/agencies/${ori}/${v}/offenses`));

// Human Traffic
const getHumanTrafficAgencies = () => (
  get(`${API}/ht/agencies`));

const getHumanTrafficStates = () => (
  get(`${API}/ht/states`));

// Leoka Assault
const getLeokaAssaultNation = v => (
  get(`${API}/leoka/assault/national/${v}`));

const getLeokaAssaultByRegion = (regionName, v) => (
  get(`${API}/leoka/assault/region/${regionName}/${v}`));

const getLeokaAssaultByState = (stateAbbr, v) => (
  get(`${API}/leoka/assault/states/${stateAbbr}/${v}`));

const getLeokaAssaultByOri = (ori, v) => (
  get(`${API}/leoka/assault/agencies/${ori}/${v}`));

const getLeokaAssaultTimeDist = () => (
  get(`${API}/leoka/assault/time-distribution`));

// Lookups
const getLookupRegion = () => (
  get(`${API}/lookup/region`));

const getLookupState = () => (
  get(`${API}/lookup/state`));

// NIBRS Victim
// VARIABLES = ['sex', 'age', 'race', 'ethnicity', 'location']
const getNibrsVictimNational = () => (
  get(`${API}/nibrs/victim/count/national`));

const getNibrsVictimNationalByFilter = v => (
  get(`${API}/nibrs/victim/count/national/${v}`));

const getNibrsVictimByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/victim/count/states/${stateAbbr}`));

const getNibrsVictimByStateAbbrAndFilter = (stateAbbr, v) => (
  get(`${API}/nibrs/victim/count/states/${stateAbbr}/${v}`));

const getNibrsVictimByOri = ori => (
  get(`${API}/nibrs/victim/count/agencies/${ori}`));

const getNibrsVictimByOriAndFilter = (ori, v) => (
  get(`${API}/nibrs/victim/count/agencies/${ori}/${v}`));


// NIBRS Offender
// VARIABLES = ['sex', 'age', 'race', 'ethnicity']
const getNibrsOffenderNational = () => (
  get(`${API}/nibrs/offender/count/national`));

const getNibrsOffenderNationalByFilter = v => (
  get(`${API}/nibrs/offender/count/national/${v}`));

const getNibrsOffenderByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/offender/count/states/${stateAbbr}`));

const getNibrsOffenderByStateAbbrAndFilter = (stateAbbr, v) => (
  get(`${API}/nibrs/offender/count/states/${stateAbbr}/${v}`));

const getNibrsOffenderByOri = ori => (
  get(`${API}/nibrs/offender/count/agencies/${ori}`));

const getNibrsOffenderByOriAndFilter = (ori, v) => (
  get(`${API}/nibrs/offender/count/agencies/${ori}/${v}`));

// NIBRS Victim Offender Relationship
const getNibrsVictimOffenderRelNational = () => (
  get(`${API}/nibrs/victim/count/national/relationships`));

const getNibrsVictimOffenderRelByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/victim/count/states/${stateAbbr}/relationships`));

const getNibrsVictimOffenderRelByOri = ori => (
  get(`${API}/nibrs/victim/count/agencies/${ori}/relationships`));

// NIBRS Offenses
const getNibrsOffenseNational = () => (
  get(`${API}/nibrs/offense/count/national`));

const getNibrsOffenseByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/offense/count/states/${stateAbbr}`));

const getNibrsOffenseByOri = ori => (
  get(`${API}/nibrs/offense/count/agencies/${ori}`));

// Offenders
// VARIABLES = ['ethnicity', 'prop_desc_name', 'offense_name',
// 'race_code', 'location_name', 'age_num', 'sex_code']
const getOffendersNational = v => (
  get(`${API}/offenders/count/national/${v}`));

const getOffendersByStateId = (id, v) => (
  get(`${API}/offenders/count/states/${id}/${v}`));

const getOffendersByStateAbbr = (stateAbbr, v) => (
  get(`${API}/offenders/count/states/${stateAbbr}/${v}`));

const getOffendersByOri = (ori, v) => (
  get(`${API}/offenders/count/agencies/${ori}/${v}`));

// Offender By Offenses
// VARIABLES = ['ethnicity', 'race_code', 'age_num', 'sex_code']
const getOffenderOffensesNational = v => (
  get(`${API}/offenders/count/national/${v}/offenses`));

const getOffenderOffensesByStateId = (id, v) => (
  get(`${API}/offenders/count/states/${id}/${v}/offenses`));

const getOffenderOffensesByStateAbbr = (stateAbbr, v) => (
  get(`${API}/offenders/count/states/${stateAbbr}/${v}/offenses`));

const getOffenderOffensesByOri = (ori, v) => (
  get(`${API}/offenders/count/agencies/${ori}/${v}/offenses`));

// Offenses
// VARIABLES = ['weapon_name', 'method_entry_code', 'num_premises_entered',
// 'location_name', 'offense_name']
const getOffensesNational = v => (
  get(`${API}/offenses/count/national/${v}`));

const getOffensesByStateId = (id, offense) => (
  get(`${API}/offenses/count/states/${id}/${offense}`));

const getOffensesByStateAbbr = (stateAbbr, offense) => (
  get(`${API}/offenses/count/states/${stateAbbr}/${offense}`));

const getOffensesByOri = (ori, offense) => (
  get(`${API}/offenses/count/agencies/${ori}/${offense}`));

// Offense By Offense Types
// VARIABLES = ['weapon_name', 'method_entry_code', 'num_premises_entered',
// 'location_name']
const getOffensesByOffenseNational = v => (
  get(`${API}/offenses/count/national/${v}/offenses`));

const getOffensesByOffenseByStateId = (id, v) => (
  get(`${API}/offenses/count/states/${id}/${v}/offenses`));

const getOffensesByOffenseByStateAbbr = (stateAbbr, v) => (
  get(`${API}/offenses/count/states/${stateAbbr}/${v}/offenses`));

const getOffensesByOffenseByOri = (ori, v) => (
  get(`${API}/offenses/count/agencies/${ori}/${v}/offenses`));

// Participation
const getParticipationNational = () => (
  get(`${API}/participation/national`));

const getParticipationByRegion = regionName => (
  get(`${API}/participation/regions/${regionName}`));

const getParticipationByState = stateAbbr => (
  get(`${API}/participation/states/${stateAbbr}`));

// Police Employment Data
const getPoliceEmploymentNational = () => (
  get(`${API}/police-employment/national`));

const getPoliceEmploymentByRegion = regionName => (
  get(`${API}/police-employment/region/${regionName}`));

const getPoliceEmploymentByStateAbbr = stateAbbr => (
  get(`${API}/police-employment/states/${stateAbbr}`));

const getPoliceEmploymentByOri = (ori) => (
  get(`${API}/police-employment/agencies/${ori}`));

// Victims
// VARIABLES = ['prop_desc_name', 'offense_name', 'ethnicity',
// 'resident_status_code', 'offender_relationship',
// 'circumstance_name', 'race_code', 'location_name',
// 'age_num', 'sex_code']
const getVictimsNational = v => (
  get(`${API}/victims/count/national/${v}`));

const getVictimsByStateId = (id, v) => (
  get(`${API}/victims/count/states/${id}/${v}`));

const getVictimsByStateAbbr = (stateAbbr, v) => (
  get(`${API}/victims/count/states/${stateAbbr}/${v}`));

const getVictimsByOri = (ori, v) => (
  get(`${API}/victims/count/agences/${ori}/${v}`));

// Victim By Offenses
// VARIABLES = ['resident_status_code', 'offender_relationship',
// 'circumstance_name', 'ethnicity', 'race_code', 'age_num', 'sex_code']
const getVictimOffensesNational = v => (
  get(`${API}/victims/count/national/${v}/offenses`));

const getVictimOffensesByStateId = (id, v) => (
  get(`${API}/victims/count/states/${id}/${v}/offenses`));

const getVictimOffensesByStateAbbr = (stateAbbr, v) => (
  get(`${API}/victims/count/states/${stateAbbr}/${v}/offenses`));

const getVictimOffensesByOri = (ori, v) => (
  get(`${API}/victims/count/agencies/${ori}/${v}/offenses`));

export const nationalKey = 'united-states'

const dimensionEndpoints = {
  ageNum: 'age_num',
  locationName: 'location_name',
  offenseName: 'offense_name',
  raceCode: 'race_code',
  relationship: 'offender_relationship',
  sexCode: 'sex_code',
}

const fetchNibrs = ({ crime, dim, place, placeType, type, placeId }) => {
  const loc =
    place === nationalKey
      ? 'national'
      : placeType === 'agency'
        ? `agencies/${place}`
        : `states/${placeId}`

  const field = dimensionEndpoints[dim] || dim
  const fieldPath = dim === 'offenseName' ? field : `${field}/offenses`
  const url = `${API}/${type}s/count/${loc}/${fieldPath}`

  const params = {
    per_page: 50,
    aggregate_many: false,
    explorer_offense: mapToApiOffense(crime),
  }

  return get(url, params).then(d => ({
    key: `${type}${upperFirst(dim)}`,
    data: d.results,
  }))
}

const getNibrsRequests = params => {
  const { crime, place, placeType, placeId } = params

  const slices = [
    { type: 'offender', dim: 'ageNum' },
    { type: 'offender', dim: 'ethnicity' },
    { type: 'offender', dim: 'raceCode' },
    { type: 'offender', dim: 'sexCode' },
    { type: 'offense', dim: 'locationName' },
    { type: 'offense', dim: 'offenseName' },
    { type: 'victim', dim: 'ageNum' },
    { type: 'victim', dim: 'ethnicity' },
    { type: 'victim', dim: 'raceCode' },
    { type: 'victim', dim: 'sexCode' },
    { type: 'victim', dim: 'relationship' },
  ]

  return slices.map(s => fetchNibrs({ ...s, crime, place, placeType, placeId }))
}

const fetchResults = (key, path) =>
  get(`${API}/${path}?per_page=500`).then(response => ({
    key,
    results: response.results,
  }))

const fetchArson = (place, placeId, placeType) => {
  let url
  if (placeType === 'state') {
    url = `${API}/arson/states/${placeId}?per_page=50`
  } else if (placeType === 'region') {
    url = `${API}/arson/regions/${place}?per_page=50`
  } else {
    url = `${API}/arson/national?per_page=50`
  }

  return get(url).then(({ results }) =>
    results.map(d => ({ year: d.year, arson: d.actual })),
  )
}

const parseAggregates = ([estimates, arsons]) => ({
  ...estimates,
  results: estimates.results.map(datum => ({
    ...datum,
    arson: (arsons.find(a => a.year === datum.year) || {}).arson,
  })),
})

const fetchAggregates = (place, placeType, placeId) => {
  let estimatesApi
  if (placeType === 'state') {
    estimatesApi = `estimates/states/${placeId}`
  } else if (placeType === 'region') {
    estimatesApi = `estimates/regions/${place}`
  } else {
    estimatesApi = 'estimates/national'
  }

  const requests = [
    fetchResults(place || nationalKey, estimatesApi),
    fetchArson(place, placeId, placeType),
  ]

  return Promise.all(requests).then(parseAggregates)
}

const fetchAgencyAggregates = (ori, crime) => {
  const url = `${API}/agencies/count/${ori}/offenses`
  const params = { explorer_offense: mapToApiOffense(crime), per_page: 200 }
  return get(url, params).then(d => ({ key: ori, results: d.results }))
}

const getSummaryRequests = ({ crime, place, placeType, placeId }) => {
  if (placeType === 'agency') {
    const stateName = slugify(oriToState(place))
    return [
      fetchAgencyAggregates(place, crime),
      fetchAggregates(stateName, placeType, placeId),
      fetchAggregates(),
    ]
  }
  return [fetchAggregates(place, placeType, placeId), fetchAggregates()]
}

const getUcrParticipation = (place, placeId, placeType) => {
  let path

  if (place === nationalKey) {
    path = 'participation/national';
  } else if (placeType === 'state') {
    path = `participation/states/${placeId}`
  } else if (placeType === 'region') {
    path = `participation/regions/${place}`
  }

  return get(`${API}/${path}`).then(response => ({
    place,
    results: response.results,
  }))
}

const getUcrParticipationRequests = filters => {
  const { place, placeType, placeId } = filters

  const requests = [getUcrParticipation(place, placeId, placeType)]

  // add national request (unless you already did)
  if (place !== nationalKey) {
    requests.push(getUcrParticipation(nationalKey))
  }

  return requests
}


const getUcrRegions = () => {
  const path = 'lookup/region'

  return get(`${API}/${path}`).then(response => ({
    results: response.results,
  }))
}

const getUcrRegionRequests = () => {
  const requests = [];
  requests.push(getUcrRegions())

  return requests
}


const getUcrStates = () => {
  const path = 'lookup/state?per_page=100'

  return get(`${API}/${path}`).then(response => ({
    results: response.results,
  }))
}

const getUcrStatesRequests = () => {
  const requests = [];
  requests.push(getUcrStates())

  return requests
}

export const formatError = error => ({
  code: error.response.status,
  message: error.message,
  url: error.config.url,
})

const fetchNibrsCounts = ({ dim, place, placeType, type, placeId }) => {
  const loc =
    place === nationalKey
      ? 'national'
      : placeType === 'agency'
        ? `agencies/${place}`
        : `states/${placeId}`

  const field = dimensionEndpoints[dim] || dim
  let url
  if (field !== '') { url = `${API}/nibrs/${type}/count/${loc}/${field}` } else { url = `${API}/nibrs/${type}/count/${loc}` }


  const params = {
    per_page: 1000,
    aggregate_many: false,
  }

  return get(url, params).then(d => ({
    key: `${type}${upperFirst(dim)}`,
    data: d.results,
  }))
}

const getNibrsCountsRequests = params => {
  const { crime, place, placeType, placeId } = params

  const slices = [
    { type: 'offender', dim: '' },
    { type: 'offender', dim: 'age' },
    { type: 'offender', dim: 'sex' },
    { type: 'offender', dim: 'race' },
    { type: 'offender', dim: 'ethnicity' },
    { type: 'victim', dim: '' },
    { type: 'victim', dim: 'age' },
    { type: 'victim', dim: 'ethnicity' },
    { type: 'victim', dim: 'race' },
    { type: 'victim', dim: 'sex' },
    { type: 'victim', dim: 'location' },
    { type: 'victim', dim: 'relationships' },
    { type: 'offense', dim: '' },

  ]
  return slices.map(s => fetchNibrsCounts({ ...s, crime, place, placeType, placeId }))
}

export default {
  getAgencies,
  getAgencyDetails,
  getAgencyParticipation,
  fetchAggregates,
  fetchAgencyAggregates,
  fetchNibrs,
  getNibrsRequests,
  fetchNibrsCounts,
  getNibrsCountsRequests,
  getSummaryRequests,
  getUcrParticipation,
  getUcrParticipationRequests,
  getUcrRegions,
  getUcrRegionRequests,
  getUcrStates,
  getUcrStatesRequests,
}
