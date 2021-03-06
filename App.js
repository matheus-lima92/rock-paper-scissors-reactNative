import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Top from './src/components/top';
import Icon from './src/components/icon';


export default class App extends React.Component {

  	constructor(props){
		super(props);
  		this.state = {userChoice: '', computerChoice: '', result: ''};
  	}

  	game(userChoice){
  		let randomNumber = Math.floor(Math.random()*3);
  		let computerChoice = '';
  		switch(randomNumber){
  			case 0: 
  				computerChoice = 'rock';
  				break;
  			case 1:
  				computerChoice = 'paper';
  				break;
  			case 2:
	  			computerChoice = 'scissors';
  				break;
  		}

  		//defining game result
  		let result = '';
  		if(computerChoice === 'rock'){
  			if(userChoice === 'rock')
  				result = 'Draw'
  			else if(userChoice === 'paper')
  				result = 'You Win!'
  			else
  				result = 'You Lose!'
  		}
  		else if(computerChoice === 'paper'){
  			if(userChoice === 'paper')
  				result = 'Draw'
  			else if(userChoice === 'scissors')
  				result = 'You Win!'
  			else
  				result = 'You Lose!'
  		}
  		else if(computerChoice === 'scissors'){
  			if(userChoice === 'scissors')
  				result = 'Draw'
  			else if(userChoice === 'rock')
  				result = 'You Win!'
  			else
  				result = 'You Lose!'
  		}

  		this.setState({userChoice, computerChoice, result});

  	}

  	render() {
	    return (
	    	<View>
	    		<Top></Top>
	    		<View style={styles.panelActions}>
	    			<View style={styles.choiceBtn}>
			    		<Button title='rock' onPress={ () => this.game('rock') }></Button>
			    	</View>
			    	<View style={styles.choiceBtn}>
			      		<Button title='paper' onPress={ () => this.game('paper') }></Button>
			      	</View>
			      	<View style={styles.choiceBtn}>
		    	  		<Button title='scissors' onPress={ () => this.game('scissors') }></Button>
		    	  	</View>
	    		</View>
	    		<View style={styles.stage}>
		      		<Text style={styles.txtResult}>{this.state.result}</Text>
		      		<Icon player='computer' choice={this.state.computerChoice}></Icon>
		    	  	<Icon player='you' choice={this.state.userChoice}></Icon>
		      	</View>
	      		
	      	</View>
	    );
  	}
}


const styles = StyleSheet.create({
	choiceBtn: {
		width: 90
	},
	panelActions: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	stage: {
		alignItems: 'center',
		marginTop: 10
	},
	txtResult: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'red'
	}
});

