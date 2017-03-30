import React, { Component } from 'react';
/*import Artist from '../components/Artist';*/
import NewPlaylist from '../components/NewPlaylist';
import FilterInput from '../components/FilterInput';

export default class PlaylistFCont extends React.Component {
	constructor(){
		super();
		this.state = {
			inputValue: "",
		}
		this.addPlaylist = this.addPlaylist.bind(this);
	}
	

	handleSubmit(event){
		event.preventDefault();
	}


	addPlaylist(event){
		console.log(event)
		const playlistName = event.target.value;
		console.log("running add playlist heres the value ", playlistName)
		this.setState({
			inputValue: playlistName,
		})

	}

	render () {


		return (
			<div>
				<NewPlaylist addPlaylist={this.addPlaylist} handleSubmit={this.handleSubmit} value={this.state.inputValue} />
			</div>

		)
	}

}