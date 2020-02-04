import React, { Component } from 'react';

class CharInfo extends Component{


	constructor(props){
		super(props);

		this.state = {
			expanded: false,
		}

		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}


		open(){
			this.setState({ expanded: !this.state.expanded})
	    }
		
		close(){
			this.setState({ expanded: !this.state.expanded})
		}
	
	render() {
		const info = this.props.CharInfo;

		if(!this.state.expanded){
		return <p className="btn btn-info" onClick={this.open}>Mostre as informações</p>
		}

		return(
			<div className="user-details">
				<p className="btn btn-danger" onClick={this.close}>Esconde as informações</p>
				<ul>
					<li><h2>Genero:{info.gender}</h2></li>
					<li><h2>Data nascimento:{info.birth_year}</h2></li>
					<li><h2>Genero:{info.hair_color}</h2></li>
				</ul>
			</div>
		)
	}
}

export default CharInfo;