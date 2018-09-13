import React, { Component } from 'react';
import { object } from 'prop-types';
import Web3 from 'web3';
import KittyCoreABI from '../contracts/KittyCoreABI.json';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';
import '../css/browser.css'
var moment = require('moment');

/*

Things to Fix:

FindKitty():
When you open the website if you click "Find Kitty" right away it will throw an error, since the state has not change yet.
If you click 2 consecutive times "Find Kitty" (with the same ID) it will throw the same error.

Things to do:
Make an overload for getTheKitty() -> getTheKitty(randomNumber)

Get the images of the Kitties via API 
https://api.cryptokitties.co/kitties/989999
Or
https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/989999.svg
 
Customize the style(Bootstrapt-React)

Add jQuery when you getKitty()

When you click FindKitty() -> Add (attribute -> 'disable') and change (button -> text_ to "Loading.."
Then remove (attribute -> 'disable') and change (button -> Text) to original text after promise is completed.

*/

class Browser extends Component {
  constructor(){
    super();
    this.state = {
      id:"123123",
      genes: "",
      generation: "",
      birthTime: "",
    };
  }

  //set/getKittyContract
  getContract(){
    const web3 = new Web3(window.web3.currentProvider);

    //Initialize the contract instance
    const kittyContract = new web3.eth.Contract(
      KittyCoreABI, // import the contracts's ABI and use it here
      CONTRACT_ADDRESS,
    );

    //Add the contract to the drizzle store
    this.context.drizzle.addContract({
      contractName: CONTRACT_NAME,
      web3Contract: kittyContract,
    });

    return kittyContract;
  }

  componentDidMount() {
    this.getTheKitty();
  }

  getRandomKitty = () =>  {
    let kittyContract = this.getContract();
    
    let randomNumber = Math.floor(Math.random() * 989999);
    document.getElementById("randomID").value = randomNumber;

    kittyContract.methods.getKitty(randomNumber).call().then((results) => {
      return {
        id: this.id,
        genes: results.genes,
        generation: results.generation,
        birthTime: moment.unix(results.birthTime).format('MMMM DD YYYY'),
      }    
    }).then((results) => {
      this.setState({
        id:results.id,
        genes: results.genes,
        generation: results.generation,
        birthTime: results.birthTime
      });
    });
  }

  getTheKitty = () =>  {
    let kittyContract = this.getContract();
    let id = this.state.id;

    kittyContract.methods.getKitty(id).call().then((results) => {
      return {
        id: this.id,
        genes: results.genes,
        generation: results.generation,
        birthTime: moment.unix(results.birthTime).format('MMMM DD YYYY'),
      }    
    }).then((results) => {
      this.setState({
        id:results.id,
        genes: results.genes,
        generation: results.generation,
        birthTime: results.birthTime
      });
    });
  }

  eraseInputText(){
    document.getElementById("randomID").value ="";
  }
 
  //Set id State
  onIdChange = (e) => {
    const id= e.target.value;
    this.setState(() => ({ id }));

    //Check if input is number
    if (isNaN(id)) 
    {
      alert("Must input numbers");
      //feature: add jQuery input value = ""
      return false;
    }
  };



  render() {
    return (
      <div>
        <h1>Kitty Browser</h1>
        <div>
          <p>Kitty ID: </p>
          <input
            id="randomID"
            type="text"
            placeholder="Enter ID"
            value={this.state.id}
            onChange={this.onIdChange}
          /><input onClick={this.eraseInputText} type="submit" value="X"></input>
          <button onClick={this.getTheKitty}>Find Kitty</button>
          <button onClick={this.getRandomKitty}>Random Kitty</button>
        </div>

        <div>
          <label>Genes: </label>
          <span>{ this.state.genes }</span> 
        </div>
        <div>
          <label >Generation: </label>
          <span>{ this.state.generation }</span> 
        </div>
        <div>
          <label>Birth Time: </label>
          <span>{ this.state.birthTime }</span> 
        </div>
      </div>
    );
  }
}

Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
