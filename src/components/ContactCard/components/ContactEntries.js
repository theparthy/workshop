import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'

const ContactEntries = ({entries = [], onSelect}) => {
  const TabsToDisplay = Object.keys(entries).map((entry, idx) =>
    <Tab
      key={idx}
      value={idx}
      label={entry.toUpperCase()}
      onClick={() => onSelect(idx)}
    />
  )

  return <Tabs>{TabsToDisplay}</Tabs>

}

export default ContactEntries;
