import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default class TeamsList extends Component {
	renderTeams() {
		const { teams } = this.props;
		return teams
			.map((team, index) => {
				return (
					<ListItem primaryText={team.teamName} key={index}/>
				);
			});
	}

	render() {
		return (
			<List>
				{this.renderTeams()}
			</List>
		);
	}
}