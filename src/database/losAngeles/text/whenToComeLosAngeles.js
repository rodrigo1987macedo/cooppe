// React
import React from "react";

import Table from "../../../components/Table";

// Style
import { Paragraph, A } from "../../textStyle";

const whenToComeLosAngeles = (
	<div>
		<Paragraph>
			Introduction recomended here: Lorem ipsum dolor sit amet, consectetur
			adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
			qui officia deserunt mollit anim id est laborum.
		</Paragraph>
		<Table
			tableTitle="Min/max avarage temperatures (first semester)"
			tableHeader={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
			tableData={[
				{
					january: 30,
					february: 1,
					march: 1,
					april: 1,
					may: 1,
					june: 1
				},
				{
					january: 2,
					february: 2,
					march: 2,
					april: 2,
					may: 2,
					june: 2
				}
			]}
		/>
		<Table
			tableTitle="Min/max avarage temperatures (second semester)"
			tableHeader={["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
			tableData={[
				{
					july: 2,
					august: 1,
					september: 1,
					october: 1,
					november: 1,
					december: 1
				},
				{
					july: 2,
					august: 2,
					september: 2,
					october: 2,
					november: 2,
					december: 2
				}
			]}
		/>
		<Paragraph>
			There are many events and conventions taking place every year in San
			Francisco. With close to 34,000 rooms in about 220 hotels, 15,000 or so
			attendees will start impacting rates. The weather, of course, should also
			be taken into consideration when making travel plans. San Francisco is a
			city with microclimates and sub-microclimates. Because of its topology and
			location temperature can vary by as much as 9 °F (5 °C) from block to
			block. Only a 30 min drive by car to the north, east or south often
			results in much higher temperatures. No matter when you visit always bring
			layers of clothing.
		</Paragraph>
		<h3>Winter (December - February)</h3>
		<Paragraph>
			Winter is a good time to save on your vacation because hotels normally
			slash their rates. Average temperatures are not extremely low, but the fog
			and chilly winds can make it seem much colder. It is also a time when the
			area experiences most rain. Events end conventions: January -{" "}
			<A
				href="http://www.sfsketchfest.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				SF Sketchfest Comedy Festival
			</A>,{" "}
			<A
				href="https://www.specialtyfood.com/shows-events/winter-fancy-food-show/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Winter Fancy Food Show
			</A>{" "}
			(19,000 est. attendees) and{" "}
			<A
				href="http://spie.org/conferences-and-exhibitions/photonics-west"
				target="_blank"
				rel="noopener noreferrer"
			>
				SPIE Photonic West
			</A>{" "}
			(20,000 est. attendees), February -{" "}
			<A
				href="http://www.gdconf.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				GDC Game Developers Conference
			</A>{" "}
			(26,000 est. attendees).
		</Paragraph>
		<h3>Spring (March - May)</h3>
		<Paragraph>
			This is a pretty good time to visit. The weather is mild and the hotel
			prices have yet to rise. Events and conventions: March -{" "}
			<A
				href="http://www.sresproductions.com/events/st-patricks-day-festival/"
				target="_blank"
				rel="noopener noreferrer"
			>
				St. Patrick's Day Parade and Festival
			</A>, April -{" "}
			<A
				href="http://www.sffilm.org/festival"
				target="_blank"
				rel="noopener noreferrer"
			>
				San Francisco International Film Festival
			</A>{" "}
			and{" "}
			<A
				href="https://www.sfbeerfest.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				San Francisco International Beer Festival
			</A>, May -{" "}
			<A
				href="http://baytobreakers.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Bay to Breakers
			</A>{" "}
			and{" "}
			<A
				href="http://www.carnavalsanfrancisco.org/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Carnaval San Francisco
			</A>.
		</Paragraph>
		<h3>Summer (June - August)</h3>
		<Paragraph>
			Despite the winds and chilly, damp fog combined with the rising hotel
			rates summer is the peak of tourism in the city and surrounding area.
			Events and conventions: June -{" "}
			<A
				href="http://www.sresproductions.com/events/north-beach-festival/"
				target="_blank"
				rel="noopener noreferrer"
			>
				North Beach Festival
			</A>{" "}
			and{" "}
			<A
				href="http://www.sfpride.org/"
				target="_blank"
				rel="noopener noreferrer"
			>
				San Francisco Pride
			</A>, July -{" "}
			<A
				href="http://www.sresproductions.com/events/fillmore-jazz-festival/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Fillmore Street Jazz Festival
			</A>,{" "}
			<A
				href="http://semiconwest.org/"
				target="_blank"
				rel="noopener noreferrer"
			>
				SEMICON West
			</A>{" "}
			(31,000 est. attendees) and{" "}
			<A
				href="http://www.thesfmarathon.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				The San Francisco Marathon
			</A>, August -{" "}
			<A
				href="https://www.sfoutsidelands.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Outside Lands Music Festival
			</A>{" "}
			and{" "}
			<A
				href="http://www.cdapresents.com/tabid/65/default.aspx"
				target="_blank"
				rel="noopener noreferrer"
			>
				California Dental Association
			</A>{" "}
			(16,000 est. attendees).
		</Paragraph>
		<h3>Fall (September - November)</h3>
		<Paragraph>
			Most people consider fall to be the best time to visit. The weather is
			often warmer than during the summer, skies are sunny and clear while
			crowds are mostly gone. Events and conventions: September -{" "}
			<A
				href="http://www.sffringe.org/"
				target="_blank"
				rel="noopener noreferrer"
			>
				San Francisco Fringe Festival
			</A>,{" "}
			<A
				href="http://www.sresproductions.com/events/ghirardelli-chocolate-festival/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Ghirardelli Square Chocolate Festival
			</A>,{" "}
			<A
				href="http://www.gsma.com/northamerica/events"
				target="_blank"
				rel="noopener noreferrer"
			>
				GSMA Mobile World Congress
			</A>{" "}
			(45,000 est. attendees) and{" "}
			<A
				href="http://castrostreetfair.org/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Castro Street Fair
			</A>, October -{" "}
			<A
				href="https://www.oracle.com/openworld/index.html"
				target="_blank"
				rel="noopener noreferrer"
			>
				Oracle OpenWorld
			</A>{" "}
			(60,000 est. attendees) and{" "}
			<A
				href="http://www.hardlystrictlybluegrass.com/2016/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Hardly Strictly Bluegrass
			</A>, November -{" "}
			<A
				href="https://www.salesforce.com/form/dreamforce/df17.jsp"
				target="_blank"
				rel="noopener noreferrer"
			>
				Dreamforce
			</A>{" "}
			(60,000 est. attendees) and{" "}
			<A
				href="http://www.sfautoshow.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Annual International Auto Show
			</A>{" "}
			(30,000 est. attendees).
		</Paragraph>
	</div>
);

export default whenToComeLosAngeles;
