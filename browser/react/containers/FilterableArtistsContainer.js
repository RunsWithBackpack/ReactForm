import React, { Component } from 'react';
/*import Artist from '../components/Artist';*/
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends React.Component {
	constructor(){
		super();
		this.state = {
			inputValue: "",
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		const artistName = event.target.value;
		this.setState({
			inputValue: artistName,
		})
	}

	render () {

		var filteredArr = this.props.artists.filter(stateArtist => {
			var nameLength = this.state.inputValue.length;
			return this.state.inputValue === stateArtist.name.slice(0, nameLength);
		})




		return (
			<div>
				<FilterInput handleChange={this.handleChange} />
				<Artists artists={filteredArr} />
			</div>

		)
	}

}