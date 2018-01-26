/* eslint-disable no-nested-ternary */

import upperFirst from 'lodash.upperfirst'
import Promise from 'promise'
import includes from 'array-includes'

import { get } from './http'
import { mapToApiOffense } from './offenses'
import { oriToState } from './agencies'
import { slugify } from './text'

export const API = '/api-proxy'

const badRequest = () => Promise.reject({ message: 'Bad Request' })

const CARGO_THEFT_VALID_VALUES = ['location_name', 'offense_name', 'victim_type_name', 'prop_desc_name']
const CARGO_THEFT_OFFENSES_VALID_VALUES = ['location_name', 'victim_type_name', 'prop_desc_name']
const HATE_CRIMES_VALID_VALUES = ['bias_name']
const LEOKA_ASSAULT_VALID_VALUES = ['assign-dist', 'weapon', 'weapon-activity', 'weapon-group', 'group']
const NIBRS_VICTIM_VALID_VALUES = ['sex', 'age', 'race', 'ethnicity', 'location']
const NIBRS_OFFENDER_VALID_VALUES = ['sex', 'age', 'race', 'ethnicity']
const OFFENDERS_VALID_VALUES = ['ethnicity', 'prop_desc_name', 'offense_name', 'race_code', 'location_name', 'age_num', 'sex_code']
const OFFENDER_OFFENCES_VALID_VALUES = ['ethnicity', 'race_code', 'age_num', 'sex_code']
const OFFENSES_VALID_VALUES = ['weapon_name', 'method_entry_code', 'num_premises_entered', 'location_name', 'offense_name']
const OFFENSES_BY_OFFENSE_VALID_VALUES = ['weapon_name', 'method_entry_code', 'num_premises_entered', 'location_name']
const VICTIMS_VALID_VALUES = ['prop_desc_name', 'offense_name', 'ethnicity', 'resident_status_code', 'offender_relationship', 'circumstance_name', 'race_code', 'location_name', 'age_num', 'sex_code']
const VICTIMS_OFFENSES_VALID_VALUES = ['resident_status_code', 'offender_relationship', 'circumstance_name', 'ethnicity', 'race_code', 'age_num', 'sex_code']

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
const getCargoTheftNational = v => {
  if (includes(CARGO_THEFT_VALID_VALUES, v)) {
    return get(`${API}/ct/count/national/${v}`);
  }
  return badRequest();
}

const getCargoTheftByStateId = (id, v) => {
    if (includes(CARGO_THEFT_VALID_VALUES, v)) {
      return get(`${API}/ct/count/states/${id}/${v}`);
    }
    return badRequest();
}

const getCargoTheftByStateAbbr = (stateAbbr, v) => {
    if (includes(CARGO_THEFT_VALID_VALUES, v)) {
      return get(`${API}/ct/count/states/${stateAbbr}/${v}`);
    }
    return badRequest();
}

const getCargoTheftByOri = (ori, v) => {
    if (includes(CARGO_THEFT_VALID_VALUES, v)) {
      return get(`${API}/ct/count/agencies/${ori}/${v}`);
    }
    return badRequest();
}

// Cargo Theft Offenses
const getCargoTheftOffensesNational = v => {
  if (includes(CARGO_THEFT_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/ct/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getCargoTheftOffensesByStateId = (id, v) => {
  if (includes(CARGO_THEFT_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/ct/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getCargoTheftOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(CARGO_THEFT_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/ct/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getCargoTheftOffensesByOri = (ori, v) => {
  if (includes(CARGO_THEFT_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/ct/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

// Estimates
const getEstimatesNational = () => (
  get(`${API}/estimates/national`));

const getEstimatesByRegion = regionName => (
  get(`${API}/estimates/regions/${regionName}`));

const getEstimatesByState = stateAbbr => (
  get(`${API}/estimates/states/${stateAbbr}`));

// Geo
const getGeoByState = stateAbbr => (
  get(`${API}/geo/states/${stateAbbr}`));

const getGeoByCounty = id => (
  get(`${API}/geo/counties/${id}`));

// Hate Crimes
// VARIABLES = ['bias_name']
const getHateCrimeNational = v => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/national/${v}`);
  }
  return badRequest();
}

const getHateCrimeByStateId = (id, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/states/${id}/${v}`);
  }
  return badRequest();
}

const getHateCrimeByStateAbbr = (stateAbbr, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getHateCrimeByOri = (ori, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// Hate Crime Offenses
const getHateCrimeOffensesNational = v => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getHateCrimeOffensesByStateId = (id, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getHateCrimeOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getHateCrimeOffensesByOri = (ori, v) => {
  if (includes(HATE_CRIMES_VALID_VALUES, v)) {
    return get(`${API}/hc/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

// Human Traffic
const getHumanTrafficAgencies = () => (
  get(`${API}/ht/agencies`));

const getHumanTrafficStates = () => (
  get(`${API}/ht/states`));

// Leoka Assault
const getLeokaAssaultNational = v => {
  if (includes(LEOKA_ASSAULT_VALID_VALUES, v)) {
    return get(`${API}/leoka/assault/national/${v}`);
  }
  return badRequest();
}

const getLeokaAssaultByRegion = (regionName, v) => {
  if (includes(LEOKA_ASSAULT_VALID_VALUES, v)) {
    return get(`${API}/leoka/assault/region/${regionName}/${v}`);
  }
  return badRequest();
}

const getLeokaAssaultByState = (stateAbbr, v) => {
  if (includes(LEOKA_ASSAULT_VALID_VALUES, v)) {
    return get(`${API}/leoka/assault/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getLeokaAssaultByOri = (ori, v) => {
  if (includes(LEOKA_ASSAULT_VALID_VALUES, v)) {
    return get(`${API}/leoka/assault/agencies/${ori}/${v}`);
  }
  return badRequest();
}

const getLeokaAssaultTimeDist = () => (
  get(`${API}/leoka/assault/time-distribution`));

// Lookups
const getLookupRegion = () => (
  get(`${API}/lookup/region`));

const getLookupState = () => (
  get(`${API}/lookup/state`));

// NIBRS Victim
const getNibrsVictimNational = () => (
  get(`${API}/nibrs/victim/count/national`));

const getNibrsVictimNationalByFilter = v => {
  if (includes(NIBRS_VICTIM_VALID_VALUES, v)) {
    return get(`${API}/nibrs/victim/count/national/${v}`);
  }
  return badRequest();
}

const getNibrsVictimByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/victim/count/states/${stateAbbr}`));

const getNibrsVictimByStateAbbrAndFilter = (stateAbbr, v) => {
  if (includes(NIBRS_VICTIM_VALID_VALUES, v)) {
    return get(`${API}/nibrs/victim/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getNibrsVictimByOri = ori => (
  get(`${API}/nibrs/victim/count/agencies/${ori}`));

const getNibrsVictimByOriAndFilter = (ori, v) => {
  if (includes(NIBRS_VICTIM_VALID_VALUES, v)) {
    return get(`${API}/nibrs/victim/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}


// NIBRS Offender
const getNibrsOffenderNational = () => (
  get(`${API}/nibrs/offender/count/national`));

const getNibrsOffenderNationalByFilter = v => {
  if (includes(NIBRS_OFFENDER_VALID_VALUES, v)) {
    return get(`${API}/nibrs/offender/count/national/${v}`);
  }
  return badRequest();
}

const getNibrsOffenderByStateAbbr = stateAbbr => (
  get(`${API}/nibrs/offender/count/states/${stateAbbr}`));

const getNibrsOffenderByStateAbbrAndFilter = (stateAbbr, v) => {
  if (includes(NIBRS_OFFENDER_VALID_VALUES, v)) {
    return get(`${API}/nibrs/offender/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getNibrsOffenderByOri = ori => (
  get(`${API}/nibrs/offender/count/agencies/${ori}`));

const getNibrsOffenderByOriAndFilter = (ori, v) => {
  if (includes(NIBRS_OFFENDER_VALID_VALUES, v)) {
    return get(`${API}/nibrs/offender/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

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
const getOffendersNational = v => {
  if (includes(OFFENDERS_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/national/${v}`);
  }
  return badRequest();
}

const getOffendersByStateId = (id, v) => {
  if (includes(OFFENDERS_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/states/${id}/${v}`);
  }
  return badRequest();
}

const getOffendersByStateAbbr = (stateAbbr, v) => {
  if (includes(OFFENDERS_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getOffendersByOri = (ori, v) => {
  if (includes(OFFENDERS_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// Offender By Offenses
const getOffenderOffensesNational = v => {
  if (includes(OFFENDER_OFFENCES_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getOffenderOffensesByStateId = (id, v) => {
  if (includes(OFFENDER_OFFENCES_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getOffenderOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(OFFENDER_OFFENCES_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getOffenderOffensesByOri = (ori, v) => {
  if (includes(OFFENDER_OFFENCES_VALID_VALUES, v)) {
    return get(`${API}/offenders/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

// Offenses
const getOffensesNational = v => {
  if (includes(OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/national/${v}`);
  }
  return badRequest();
}

const getOffensesByStateId = (id, v) => {
  if (includes(OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/states/${id}/${v}`);
  }
  return badRequest();
}

const getOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getOffensesByOri = (ori, v) => {
  if (includes(OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// Offense By Offense Types
const getOffensesByOffenseNational = v => {
  if (includes(OFFENSES_BY_OFFENSE_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getOffensesByOffenseByStateId = (id, v) => {
  if (includes(OFFENSES_BY_OFFENSE_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getOffensesByOffenseByStateAbbr = (stateAbbr, v) => {
  if (includes(OFFENSES_BY_OFFENSE_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getOffensesByOffenseByOri = (ori, v) => {
  if (includes(OFFENSES_BY_OFFENSE_VALID_VALUES, v)) {
    return get(`${API}/offenses/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

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

const getPoliceEmploymentByOri = ori => (
  get(`${API}/police-employment/agencies/${ori}`));

// Victims
const getVictimsNational = v => {
  if (includes(VICTIMS_VALID_VALUES, v)) {
    return get(`${API}/victims/count/national/${v}`);
  }
  return badRequest();
}

const getVictimsByStateId = (id, v) => {
  if (includes(VICTIMS_VALID_VALUES, v)) {
    return get(`${API}/victims/count/states/${id}/${v}`);
  }
  return badRequest();
}

const getVictimsByStateAbbr = (stateAbbr, v) => {
  if (includes(VICTIMS_VALID_VALUES, v)) {
    return get(`${API}/victims/count/states/${stateAbbr}/${v}`);
  }
  return badRequest();
}

const getVictimsByOri = (ori, v) => {
  if (includes(VICTIMS_VALID_VALUES, v)) {
    return get(`${API}/victims/count/agencies/${ori}/${v}`);
  }
  return badRequest();
}

// Victim By Offenses
const getVictimOffensesNational = v => {
  if (includes(VICTIMS_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/victims/count/national/${v}/offenses`);
  }
  return badRequest();
}

const getVictimOffensesByStateId = (id, v) => {
  if (includes(VICTIMS_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/victims/count/states/${id}/${v}/offenses`);
  }
  return badRequest();
}

const getVictimOffensesByStateAbbr = (stateAbbr, v) => {
  if (includes(VICTIMS_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/victims/count/states/${stateAbbr}/${v}/offenses`);
  }
  return badRequest();
}

const getVictimOffensesByOri = (ori, v) => {
  if (includes(VICTIMS_OFFENSES_VALID_VALUES, v)) {
    return get(`${API}/victims/count/agencies/${ori}/${v}/offenses`);
  }
  return badRequest();
}

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
//
// const getUcrParticipation = (place, placeId, placeType) => {
//   let path
//
//   if (place === nationalKey) {
//     path = 'participation/national';
//   } else if (placeType === 'state') {
//     path = `participation/states/${placeId}`
//   } else if (placeType === 'region') {
//     path = `participation/regions/${place}`
//   }
//
//   return get(`${API}/${path}`).then(response => ({
//     place,
//     results: response.results,
//   }))
// }
//
// const getUcrParticipationRequests = filters => {
//   const { place, placeType, placeId } = filters
//
//   const requests = [getUcrParticipation(place, placeId, placeType)]
//
//   // add national request (unless you already did)
//   if (place !== nationalKey) {
//     requests.push(getUcrParticipation(nationalKey))
//   }
//
//   return requests
// }


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
  getAgencySumsByState,
  getAgencySumsByOri,
  getAgencySumsByCounty,
  getAgencyOffensesByState,
  getAgencyOffensesByOri,
  getAgencyOffensesByCounty,
  getArrestsNational,
  getArsonNational,
  getArsonByRegion,
  getArsonByState,
  getCodeTypes,
  getCodes,
  getCargoTheftNational,
  getCargoTheftByStateId,
  getCargoTheftByStateAbbr,
  getCargoTheftByOri,
  getCargoTheftOffensesNational,
  getCargoTheftOffensesByStateId,
  getCargoTheftOffensesByStateAbbr,
  getCargoTheftOffensesByOri,
  getEstimatesNational,
  getEstimatesByRegion,
  getEstimatesByState,
  getGeoByState,
  getGeoByCounty,
  getHateCrimeNational,
  getHateCrimeByStateId,
  getHateCrimeByStateAbbr,
  getHateCrimeByOri,
  getHateCrimeOffensesNational,
  getHateCrimeOffensesByStateId,
  getHateCrimeOffensesByStateAbbr,
  getHateCrimeOffensesByOri,
  getHumanTrafficAgencies,
  getHumanTrafficStates,
  getLeokaAssaultNational,
  getLeokaAssaultByRegion,
  getLeokaAssaultByState,
  getLeokaAssaultByOri,
  getLeokaAssaultTimeDist,
  getLookupRegion,
  getLookupState,
  getNibrsVictimNational,
  getNibrsVictimNationalByFilter,
  getNibrsVictimByStateAbbr,
  getNibrsVictimByStateAbbrAndFilter,
  getNibrsVictimByOri,
  getNibrsVictimByOriAndFilter,
  getNibrsOffenderNational,
  getNibrsOffenderNationalByFilter,
  getNibrsOffenderByStateAbbr,
  getNibrsOffenderByStateAbbrAndFilter,
  getNibrsOffenderByOri,
  getNibrsOffenderByOriAndFilter,
  getNibrsVictimOffenderRelNational,
  getNibrsVictimOffenderRelByStateAbbr,
  getNibrsVictimOffenderRelByOri,
  getNibrsOffenseNational,
  getNibrsOffenseByStateAbbr,
  getNibrsOffenseByOri,
  getOffendersNational,
  getOffendersByStateId,
  getOffendersByStateAbbr,
  getOffendersByOri,
  getOffenderOffensesNational,
  getOffenderOffensesByStateId,
  getOffenderOffensesByStateAbbr,
  getOffenderOffensesByOri,
  getOffensesNational,
  getOffensesByStateId,
  getOffensesByStateAbbr,
  getOffensesByOri,
  getOffensesByOffenseNational,
  getOffensesByOffenseByStateId,
  getOffensesByOffenseByStateAbbr,
  getOffensesByOffenseByOri,
  getParticipationNational,
  getParticipationByRegion,
  getParticipationByState,
  getPoliceEmploymentNational,
  getPoliceEmploymentByRegion,
  getPoliceEmploymentByStateAbbr,
  getPoliceEmploymentByOri,
  getVictimsNational,
  getVictimsByStateId,
  getVictimsByStateAbbr,
  getVictimsByOri,
  getVictimOffensesNational,
  getVictimOffensesByStateId,
  getVictimOffensesByStateAbbr,
  getVictimOffensesByOri,
  fetchAggregates,
  fetchAgencyAggregates,
  fetchNibrs,
  getNibrsRequests,
  fetchNibrsCounts,
  getNibrsCountsRequests,
  getSummaryRequests,
  getUcrRegions,
  getUcrRegionRequests,
  getUcrStates,
  getUcrStatesRequests,
}
