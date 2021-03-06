import { max } from 'd3-array'
import pluralize from 'pluralize'
import PropTypes from 'prop-types'
import React from 'react'

import { nibrsTerm } from '../Terms'
import { formatNum } from '../../util/formats'

const highlight = txt =>
  <strong>
    {txt}
  </strong>

const NibrsIntro = ({
  crime,
  isAgency,
  nibrsFirstYear,
  participation,
  placeDisplay,
  totalCount,
  until,
}) => {
  const noun = 'incident'
  if (isAgency) {
    return (
      <div className="m0 sm-col-10">
        <p>
          This agency reported {highlight(formatNum(totalCount))} individual{' '}
          {crime} {pluralize(noun, totalCount)} to the FBI between{' '}
          {highlight(nibrsFirstYear)} and {highlight(until)}.
        </p>
      </div>
    )
  }
  const agencyCts = participation.map(p => p.nibrs_participating_agencies)
  const agencyCt = max(agencyCts)

  return (
    <div className="m0 sm-col-10">
      <p>
        There were {highlight(formatNum(totalCount))} individual {crime}{' '}
        {pluralize(noun, totalCount)} reported to the FBI in {placeDisplay}{' '}
        between {highlight(nibrsFirstYear)} and {highlight(until)} by{' '}
        {highlight(agencyCt)} law enforcement {pluralize('agency', agencyCt)}{' '}
        reporting {nibrsTerm} data.
      </p>
    </div>
  )
}

NibrsIntro.propTypes = {
  crime: PropTypes.string.isRequired,
  isAgency: PropTypes.bool.isRequired,
  nibrsFirstYear: PropTypes.number.isRequired,
  placeDisplay: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired,
  participation: PropTypes.array.isRequired,
  until: PropTypes.number.isRequired,
}

export default NibrsIntro
