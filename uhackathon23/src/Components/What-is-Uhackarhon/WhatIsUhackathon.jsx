import React from 'react'
import Heading from '../Heading/Heading'
import './What.css'
const WhatIsUhackathon = () => {
  return (
    <div className="container what-container two-margin-top">
      <Heading text="What is UHackathon 4.0 Meta Edition?" position="center" />
      <span className="container content">
        <p>
          UHackathon 4.0 META is the fourth iteration of UPES's flagship event,
          UHackathon organized by the School of Computer Science, with this
          year’s theme being “Metaverse”.
        </p><br/>
        <p>
          UHackathon 4.0 META is an initiative in sync with the vision of UPES,
          towards providing a mega platform to the programming community,
          technophiles and techpreneurs to address the critical challenges of
          the industry and society by building innovative solutions in form of
          prototypes leveraging technologies under the umbrella of Metaverse.
          <br />
          <br />
          UHackathon 4.0 is a 24-hour coding marathon planning to invite
          participants from G20 Nations and our associate International
          Universities to come together and participate in developing solutions
          towards achieving UN SDG goals leveraging the emerging technologies
          and technologies of tomorrow i.e, Metaverse Technologies.
        </p>
      </span>
    </div>
  );
}

export default WhatIsUhackathon
