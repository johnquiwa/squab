import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Link from 'react-router';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class TeamsList extends Component {

	handleClick(team) {
		console.log(team);
		console.log(this.props);
		this.props.history.push(`/teams/${team.key}`);
	}

	delete(teamKey) {
		this.props.deleteTeam(teamKey);
	}

	renderTeams() {
		const { teams } = this.props;

		console.log(this.props);
		return teams
			.map((team, index) => {
				let iconButtonElement = (
					<IconButton touch={true}>
					<MoreVertIcon color={Colors.grey400} />
					</IconButton>
				);
				let rightIconMenu = (
					<IconMenu iconButtonElement={iconButtonElement}>
					<MenuItem onTouchTap={()=>this.delete(team.key)}>Delete</MenuItem>
					<MenuItem>Edit</MenuItem>
					</IconMenu>
				);

				return (
					<ListItem rightIconButton={rightIconMenu} primaryText={team.teamName} key={index} onTouchTap={()=>this.handleClick(team)} />
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