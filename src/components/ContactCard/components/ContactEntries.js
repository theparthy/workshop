import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const ContactEntries = ({entries=[], onSelect}) => {
  const TabsToDisplay = Object.keys(entries).map((entry,idx)=>
    <Tab
      key={idx}
      label={entry.toUpperCase()}
      onClick={() => onSelect(entry)}
    />
  )

  return <Tabs>{TabsToDisplay}</Tabs>

}

export default ContactEntries;
