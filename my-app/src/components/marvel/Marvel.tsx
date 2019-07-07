import React from 'react'; 
import crypto from 'crypto';

const API_KEY = "ca54bd133feadc34cd6dd26621f32e4a";
const PRIV_KEY = "2b0fe4ecdda6bb1a61c54ce34667b2800041e52d";
const hash = crypto.createHash('md5').update(1 + PRIV_KEY + API_KEY).digest('hex');


class Marvel extends React.Component<{}, { characters: any, error: boolean }> {
	constructor(props:any) {
		super(props);
		this.state = {
			error: false,
			characters: []
		}
	}

	public componentDidMount() {
		this.fetchData();
	}


	public render() {
		return (
			<div>{this.state.characters}</div>
		)
	}

	private fetchData() {
		let URLAPI = "http://gateway.marvel.com/v1/public/characters?";
		URLAPI += "apikey="+API_KEY+"&ts=1&hash="+hash;

		fetch(URLAPI)
			// get API response and receive data in JSON format
			.then(response => response.json())
			// then map in data and put them in DOM
			.then(data => {
				let characters = data.data.results.map((character:any) => {
					const thumbnail = character.thumbnail.path + ".jpg";
					return (
						<div key={character.id}>
							<span>{character.name}</span>
							<p>{character.description}</p>
							<img src={thumbnail} />
						</div>
					)
				})
				
				// then we update users state 
				this.setState({
					characters: characters
			  	})
			 }
			)
			//Catch error 
			.catch(error => this.setState({error}));

		console.log(URLAPI);
	}

}

export default Marvel;