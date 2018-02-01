import arsonApi from '../../util/api/arson'
import estimatesApi from '../../util/api/estimates'
import agenciesApi from '../../util/api/agencies'

import { nationalKey } from '../../util/usa'
import { oriToState } from '../../util/agencies'
import { slugify } from '../../util/text'
import { mapToApiOffense } from '../../util/offenses'

const fetchArson = (place, placeId, placeType) => {
  let promise
  const params = { per_page: 50 }
  if (placeType === 'state') {
    promise = arsonApi.getArsonByState(place, params)
  } else if (placeType === 'region') {
    promise = arsonApi.getArsonByRegion(place, params)
  } else {
    promise = arsonApi.getArsonNational(params)
  }

  return promise.then(({ results }) =>
    results.map(d => ({ year: d.year, arson: d.actual })))
}

const fetchEstimates = (place, placeId, placeType) => {
  let promise
  if (placeType === 'state') {
    promise = estimatesApi.getEstimatesByState(place)
  } else if (placeType === 'region') {
    promise = estimatesApi.getEstimatesByRegion(place)
  } else {
    promise = estimatesApi.getEstimatesNational()
  }

  return promise.then(response => ({ key: place || nationalKey, results: response.results }))
}

const fetchAgencyOffenses = (ori, crime) => {
  const params = { explorer_offense: mapToApiOffense(crime), per_page: 200 }
  const promise = agenciesApi.getAgencyOffensesByOri(ori, params)
  return promise.then(response => ({ key: ori, results: response.results }))
}

const parseAggregates = ([estimates, arsons]) => ({
  ...estimates,
  results: estimates.results.map(datum => ({
    ...datum,
    arson: (arsons.find(a => a.year === datum.year) || {}).arson,
  })),
})

const fetchAggregates = (place, placeId, placeType) => {
  const requests = [
    fetchEstimates(place, placeId, placeType),
    fetchArson(place, placeId, placeType),
  ]
  return Promise.all(requests).then(parseAggregates)
}

const getSummaryRequests = ({ crime, place, placeType, placeId }) => {
  if (placeType === 'agency') {
    const stateName = slugify(oriToState(place))
    return [
      fetchAgencyOffenses(place, crime),
      fetchAggregates(stateName, placeId, 'state'),
      fetchAggregates(), // national data
    ]
  }
  return [fetchAggregates(place, placeId, placeType), fetchAggregates()]
}

export default {
  getSummaryRequests
}
