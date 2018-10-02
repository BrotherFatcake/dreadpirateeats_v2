import React from 'react';

import TopNav from './nav';
import GrubForm from './grubForm';
//import UserStatus from './userStatus';

import './App.css';

export default class DreadPirate extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      grub: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
      grubOffer: [],
      grubPlace:'',
      hangryTaunt: 'Click to get started!'
      }
  }

  resetApp() {
    this.setState({
      grub: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
      grubOffer: [],
      grubPlace:'',
      hangryTaunt: 'Click to get started!'
    })
  }
  
  //method to select grub

  selectGrub(pulls){
    
    //Check if false from gameOn in grubForm is sent
    if(!pulls) {
      console.log('reset flow: ', pulls)
      this.resetApp();
    }

    else {
      console.log('form pulls: ', pulls)


      let grubLength = this.state.grub.length-1;
      console.log('grubLength: ', grubLength)

      let random = Math.floor(Math.random() * parseInt(grubLength+1)) +0
      console.log('random: ', random)

      //Add IF flow to prevent duplicates
      
      let grubPlace = this.state.grub[random];

    
      this.setState({
        grubPlace,
        grubOffer: [...this.state.grubOffer, `'${grubPlace}' `]
      })
      

      if (pulls < 3) {
        this.setState({
          hangryTaunt: `You're turn is almost up!`
        })
      }

      if (pulls > 2) {
        this.setState({
          hangryTaunt: `You're turn is up!`
        })
      }
    }
  }

  render() {

    return (
      <main>
        <TopNav />
        <br></br>
        <GrubForm selectGrub={(pulls) => this.selectGrub(pulls)}/>

      <ul>
        {this.state.grubOffer}
      </ul>

      <ul>
        {this.state.hangryTaunt}
      </ul>
        
      </main>

    )

  }
}