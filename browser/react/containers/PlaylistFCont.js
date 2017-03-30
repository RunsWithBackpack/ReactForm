import React, { Component } from 'react';
import axios from 'axios';
// import {hashHistory} from 'react-router';
/*import Artist from '../components/Artist';*/
import {NewPlaylist, Warning} from '../components/NewPlaylist';
import FilterInput from '../components/FilterInput';

export default class PlaylistFCont extends React.Component {
	constructor(){
		super();
		this.state = {
			inputValue: "",
			disabledorNot: false,
			warningBool:false,
		}
		this.addPlaylist = this.addPlaylist.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){//this is make new playlist.. which also refreshes playlists (setState the playlists array)
		event.preventDefault();
		this.props.addPlaylist(this.state.inputValue);
	}

	addPlaylist(event){
		// console.log(event)
		const playlistName = event.target.value;
		// console.log("running add playlist heres the value ", playlistName)
		if(playlistName.length > 16 || playlistName.length === 0){
			this.setState({
				inputValue: playlistName,
				disabledorNot: true,
				warningBool: true,
			})
		}
		else{
			this.setState({
				warningBool: false,
				disabledorNot: false,
				inputValue: playlistName,
			})
		}

	}

	render () {


		return (
			<div>
				<Warning warningBool={this.state.warningBool} />
				<NewPlaylist addPlaylist={this.addPlaylist} handleSubmit={this.handleSubmit} value={this.state.inputValue} disabledorNot={this.state.disabledorNot}/>
			</div>

		)
	}

}
