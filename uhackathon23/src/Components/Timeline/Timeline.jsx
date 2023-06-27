import React from 'react'
import './Timeline.css'
import Heading from '../Heading/Heading'
const Timeline = () => {
  return (
    <div class="container">
      <Heading text="Timeline" position="center"></Heading>
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <a href="/" class="timeline-content">
                        <div class="timeline-year">27 June 2023</div>
                        <h3 class="title">Official Website Live</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="/" class="timeline-content">
                        <div class="timeline-year">29 June 2023</div>
                        <h3 class="title">Registrations Open</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="/" class="timeline-content">
                        <div class="timeline-year" style={{right:"-18px"}}>9 July 2023</div>
                        <h3 class="title">Theme Reveal</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="/" class="timeline-content">
                        <div class="timeline-year">11 July 2023</div>
                        <h3 class="title">Abstract Submission Starts</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="/" class="timeline-content">
                        <div class="timeline-year">31 July 2023</div>
                        <h3 class="title">Registrations & Abstract Submission Ends</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="/" class="timeline-content">
                        <div class="timeline-year">18 Aug. 2023</div>
                        <h3 class="title">Result Announcement</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="/" class="timeline-content">
                        <div class="timeline-year" style={{right:"-42px"}}>1 & 2 Sept. 2023</div>
                        <h3 class="title">UHackathon 4.0 Finale</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Timeline
