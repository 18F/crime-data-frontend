/* eslint-disable no-nested-ternary */

import upperFirst from 'lodash.upperfirst'

import api from '../../util/api/nibrs'

const d = (type, dim) => ({
  key: `${type}${upperFirst(dim)}`,
  data: d.results,
})

const fetchNibrsCounts = ({ dim, type, place, placeType, placeId }) => {
  const params = {
    per_page: 1000,
    aggregate_many: false,
  }
  if (placeType === 'state') {
    if (type === 'offender') {
      if (dim === '') {
        return api.getNibrsOffenderByStateAbbr(placeId, params).then(d(type, dim))
      }
      return api.getNibrsOffenderByStateAbbrAndFilter(placeId, dim, params).then(d(type, dim))
    } else if (type === 'victim') {
      if (dim === '') {
        return api.getNibrsVictimByStateAbbr(placeId, params).then(d(type, dim))
      } else if (dim === 'relationships') {
        return api.getNibrsVictimOffenderRelByStateAbbr(placeId, params).then(d(type, dim))
      }
      return api.getNibrsVictimByStateAbbrAndFilter(placeId, dim, params).then(d(type, dim))
    }
    return api.getNibrsOffenseByStateAbbr(placeId, params).then(d(type, dim))
  } else if (placeType === 'agency') {
    if (type === 'offender') {
      if (dim === '') {
        return api.getNibrsOffenderByOri(place, params).then(d(type, dim))
      }
      return api.getNibrsOffenderByOriAndFilter(placeId, dim, params).then(d(type, dim))
    } else if (type === 'victim') {
      if (dim === '') {
        return api.getNibrsVictimByOri(place, params).then(d(type, dim))
      } else if (dim === 'relationships') {
        return api.getNibrsVictimOffenderRelByOri(place, params).then(d(type, dim))
      }
      return api.getNibrsVictimByOriAndFilter(place, dim, params).then(d(type, dim))
    }
    return api.getNibrsOffenseByOri(place, params).then(d(type, dim))
  }
  // get NIBRS counts on national level
  if (type === 'offender') {
    if (dim === '') {
      return api.getNibrsOffenderNational(params).then(d(type, dim))
    }
    return api.getNibrsOffenderNationalByFilter(dim, params).then(d(type, dim))
  } else if (type === 'victim') {
    if (dim === '') {
      return api.getNibrsVictimNational(params).then(d(type, dim))
    } else if (dim === 'relationships') {
      return api.getNibrsVictimOffenderRelNational(params).then(d(type, dim))
    }
    return api.getNibrsVictimNationalByFilter(dim, params).then(d(type, dim))
  }
  return api.getNibrsOffenseNational(params).then(d(type, dim))
}

const getNibrsCountsRequests = ({ place, placeType, placeId }) => {
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
  return slices.map(s => fetchNibrsCounts({ ...s, place, placeType, placeId }))
}

export default {
  getNibrsCountsRequests
}
