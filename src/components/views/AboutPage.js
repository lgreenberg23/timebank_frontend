import React from 'react'
import {Grid } from 'semantic-ui-react'

const About = () => {

	return(
		<div>
		<Grid>
			<Grid.Row>
				<Grid.Column width={6}>
					<h1>About This Endeavor</h1>
					<h2>What is time banking?</h2>
					<h3>It’s a different way of valuing labor by using time as the currency.</h3>
					<h2>How does it work?</h2>
					<h3>People spend and earn time credits by sharing skills and helping others. If I take you up on an offer, 
					(such as you help me with CSS for 2 hours) you can bank those hours and use them later to have someone 
					else help you with something that you're looking for (like someone to teach you to make bagels)</h3>
					<h2>Can you go into debt? </h2>
					<h3>Yes. Receiving is just as important as giving. Do not be afraid of debt.</h3>
					<h2>Why are we doing it in this community?</h2>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		</div>
		)
}

export default About