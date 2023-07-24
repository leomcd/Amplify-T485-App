import React from 'react';

import './css/latestevents.css';

import WithAuth from './generic/WithAuth';

function LatestEvents() {
    return (
        <div className="photo-section container-fluid color-scheme-alt">
            <h3 className="section-heading">Latest Events</h3>
            <WithAuth from="latestevents">
                <div className="latestevents">
                    <div className="latestevent">
                        <h2 className="latestevent-title">4th of July Fireworks Event</h2>
                        <h3 className="latestevent-subtitle">Westlake Village Golf Course, July 4, 2023</h3>
                        <img src="/images/latestevents/4thJuly2023.JPG" />
                        <p className="latestevent-description"></p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">4th of July Fireworks Parade and Flag Retirement</h2>
                        <h3 className="latestevent-subtitle">Berniece Bennett Park, July 4, 2023</h3>
                        <img src="/images/latestevents/4thJulyFlag2023.JPG" />
                        <p className="latestevent-description"></p> 
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Emerald Bay 2023</h2>
                        <h3 className="latestevent-subtitle">Catalina Island, June 18, 2023</h3>
                        <img src="/images/latestevents/EBay2023.JPG" />
                        <p className="latestevent-description"></p> 
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Memorial Day 2023</h2>
                        <h3 className="latestevent-subtitle">Pierce Brothers Westwood Village Memorial Park, May 27, 2023</h3>
                        <img src="/images/latestevents/Memorial2023.JPG" />
                        <p className="latestevent-description"></p> 
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Backpacking Trip</h2>
                        <h3 className="latestevent-subtitle">May 20, 2023</h3>
                        <img src="/images/latestevents/Backpacking2023.JPG" />
                        <p className="latestevent-description"></p> 
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Carpinteria State Beach Campout</h2>
                        <h3 className="latestevent-subtitle">Carpinteria State Beach, April 28, 2023</h3>
                        <img src="/images/latestevents/Carpinteria2023.JPG" />
                        <p className="latestevent-description"></p> 
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Luke Dato Eagle Project</h2>
                        <h3 className="latestevent-subtitle">King Gilette Ranch, March 4, 2023</h3>
                        <img src="/images/latestevents/LukeDatoEagleProject.JPG" />
                        <p className="latestevent-description"></p> 
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Ladyface Trail Hike</h2>
                        <h3 className="latestevent-subtitle">Ladyface Mountain, Dec 10, 2022</h3>
                        <img src="/images/latestevents/LadyFace2023.JPG" />
                        <p className="latestevent-description"></p> 
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Deep Sea Fishing</h2>
                        <h3 className="latestevent-subtitle">Catalina Island, August 21, 2022</h3>
                        <img src="/images/latestevents/deepsea.jpg" />
                        <p className="latestevent-description">Troop 485 went on a daytrip on a boat with Ventura Sportfishing. There was good fishing in the waters around Catalina Island, with each scout having a good catch.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Independence Day Parade</h2>
                        <h3 className="latestevent-subtitle">Westlake Village, July 4, 2022</h3>
                        <img src="/images/latestevents/julyfourth.png" />
                        <p className="latestevent-description">Troop 485 proudly led the July 4 parade in Westlake Village. The parade culminated in a flag ceremony, led by the troop, at the Berniece Bennett Park in Westlake Village.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Camp Whitsett Summer Camp</h2>
                        <h3 className="latestevent-subtitle">Camp Whitsett Scout Camp, June 19, 2022</h3>
                        <img src="/images/latestevents/whitsett.png" />
                        <p className="latestevent-description">The 2022 Summer Camp was a week-long camp at Whitsett in the Sequoia National Forest. The camp was attended by a large number of scouts from the troop, all having fun and earning merit badges during their stay. Camp Whitsett offers land activities as well as water activities at Ida Lake.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Welding Merit Badge</h2>
                        <h3 className="latestevent-subtitle">Piru, May 20, 2022</h3>
                        <img src="/images/latestevents/welding.png" />
                        <p className="latestevent-description">The scouts were fortunate and grateful to participate in the Welding Merit Badge led by instructor Jack Compton and his team of trained volunteers. Jack enthused the scouts with his lessons in welding and safety, resulting in each scout welding a steel birdhouse. The facility had all the required equipment and materials, with many volunteer instructors to help the scouts with welding safely. The scouts also learnt about the many career opportunities in welding.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Backpacking Overnighter</h2>
                        <h3 className="latestevent-subtitle">Santa Paula Punch Bowls, May 14, 2022</h3>
                        <img src="/images/latestevents/hiking.png" />
                        <p className="latestevent-description">This was an overnight back-packing trip to the Punch Bowls in Santa Paula. There was a 3 mile hike into the camping area. The scouts carried their tents, sleeping bags, food, water, and water purifiers, in their backpacks. During their stay, they were able to visit the Punch Bowl waterfalls, learn how to filter water with a gravity filter, and observe the “leave no trace” law by leaving the campground and trail as pristine as they found it.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Carpinteria Beach Campout</h2>
                        <h3 className="latestevent-subtitle">Carpinteria State Park, April 29, 2022</h3>
                        <img src="/images/latestevents/carpinteria.png" />
                        <p className="latestevent-description">The scouts had a two-night camp at the Carpinteria State Beach Campground, enjoying cooking, orienteering, games, and, of course, the beach. Above is a photo of the Carpinteria Seal Sanctuary.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">King Gillette Ranch Eagle Project</h2>
                        <h3 className="latestevent-subtitle">King Gillette Ranch, January 29, 2022</h3>
                        <img src="/images/latestevents/gilletteeagle.png" />
                        <p className="latestevent-description">Eagle Scout Jefferson Matthew’s Eagle Project involved building a 60-foot long fence at King Gillette Ranch. The fence runs along the main roadway to provide safety for cars, animals and pedestrians attempting to cross the road.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Rocket Launch</h2>
                        <h3 className="latestevent-subtitle">El Mirage Dry Lake, November 7, 2021</h3>
                        <img src="/images/latestevents/rocketlaunch.png" />
                        <p className="latestevent-description">Having been postponed so many times, it jokingly became known as “unicorn hunting”. On November 7, 2021, Troop 485 finally got to do a series of rocket launches at El Mirage Dry Lake Bed. The activity had been previously postponed due to high winds and the Covid lockdown, but on that day, there was little wind, and conditions were perfect. Each scout built their own rocket, and got to launch it safely several times.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Lake Cachuma Campout</h2>
                        <h3 className="latestevent-subtitle">Lake Cachuma, October 8, 2021</h3>
                        <img src="/images/latestevents/lakecachuma.png" />
                        <p className="latestevent-description">The campout at Lake Cachuma provided great scenery, fishing, and the opportunity for fun and games.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Volunteering at Westlake Village Fishing Derby</h2>
                        <h3 className="latestevent-subtitle">Westlake Village, September 18, 2021</h3>
                        <img src="/images/latestevents/fishingderby.png" />
                        <p className="latestevent-description">In September 2021, many scouts from the troop volunteered to help with the Westlake Village Fishing Derby.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Lake Casitas Campout</h2>
                        <h3 className="latestevent-subtitle">Lake Casitas, September 12, 2021</h3>
                        <img src="/images/latestevents/casitas.png" />
                        <p className="latestevent-description">This was one of the first campouts after the Covid lockdown, with scouts traveling to camp separately accompanied by their parents. It was an opportunity to go on a campout as a troop, and renew the practices of meal planning, cooking, and having fun around the campfire. To practice knots and lashings, the scouts built a flag pole from three separate poles, and conducted a flag ceremony.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Westlake Village Eagle Project</h2>
                        <h3 className="latestevent-subtitle">Westminster Presbyterian Preschool, Westlake Village, July-August, 2021</h3>
                        <img src="/images/latestevents/westlakevillageeagle.png" />
                        <p className="latestevent-description">Eagle Scout Brian Nio's Eagle Project involved building a permanent sunshade for the preschool at Westminster Presbyterian Church. This was accomplished with a permanent steel frame supporting durable shade cloth to provide shade for children outside their classrooms.</p>
                    </div>
                    <div className="latestevent">
                        <h2 className="latestevent-title">Emerald Bay Summer Camp</h2>
                        <h3 className="latestevent-subtitle">Catalina Island, July 25, 2021</h3>
                        <img src="/images/latestevents/emeraldbay.png" />
                        <p className="latestevent-description">The 2021 summer camp was at Emerald Bay in Catalina Island. The camp has many water based activities, including kayaking, sailing, motorboating, and scuba diving, to name just a few. It was attended by seven scouts, who all had a great time.</p>
                    </div>
                </div>
            </WithAuth>
        </div>
    );
}

export default LatestEvents;
