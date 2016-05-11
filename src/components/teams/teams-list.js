import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Link from 'react-router';

export default class TeamsList extends Component {

	handleClick(team){
		console.log(team);
		console.log(this.props);
		this.props.history.push(`/teams/${team.key}`)
	}

	renderTeams() {
		const { teams } = this.props;
		console.log(this.props);
		return teams
			.map((team, index) => {
				return (
					<ListItem primaryText={team.teamName} key={index} onClick={()=>this.handleClick(team)} />
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