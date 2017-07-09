import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'material-ui/Tabs'

const ContactEntries = ({entries, onSelect}) => (
  <Tabs>
    {entries.map((entry, idx) => (
        <Tab
          key={idx}
          value={idx}
          label={entry.toUpperCase()}
          onClick={() => onSelect(idx)}
        />
      )
    )}
  </Tabs>
)
ContactEntries.propTypes = {
  entries: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default ContactEntries;
