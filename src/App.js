import React, { Component } from 'react';

import Intro from './components/Intro';
import ListPeople from './components/ListPeople';
import ListVenues from './components/ListVenues';
import Utils from './components/Utils';

class App extends Component {

    constructor() {

        super();

        this.utils = new Utils();

        this.settings = {
            apiPath: '/'
        }

        this.state = {
            status: false,
            data: {
                people: [],
                venues: []
            },
            attendees: []
        };

        this.handlePersonChange = this.handlePersonChange.bind(this);

        this.dataURL = 'data/data.json';


    }

    componentDidMount() {

        this.loadData();

    }

    loadData() {

        var data = this.state;

        data.status = false;

        this.setState(data);

        var self = this;

        if (fetch) {

            fetch(this.settings.apiPath + this.dataURL, {

                method: 'get'

            }).then(function (response) {

                return response.json();

            }).then(function (json) {

                self.setState({
                    status: true,
                    data: {
                        people: json.data.people,
                        venues: json.data.venues
                    }
                });

            }).catch(function (err) {

                    //handle errors

                }
            );

        }

    }

    handlePersonChange(personRef, active){

        this.state.data.people.map( function(person){

            if(personRef === person.name){

                if(active){

                    person.active = true;

                }
                else{

                    person.active = false;

                }
            }

            return false;

        });

        this.calculateMatches();

    }


    calculateMatches(){

        var self = this;

        var objdata = this.state;

        for(var i = 0;  i < objdata.data.venues.length; i++){

            objdata.data.venues[i].inactive = false;
            objdata.data.venues[i].reason = [];

        }

        objdata.data.people.map( function(person){

            if(person.active){

                objdata.data.venues.map(function(venue){

                    //do we have a food match?
                    var foodMatch = self.utils.arrayContains(person.wont_eat, venue.food);
                    if(foodMatch.length > 0){

                        venue.inactive = true;
                        venue.reason.push(person.name+' cannot eat ' + foodMatch.join(', '));

                    }

                    //do we have a drinks match?
                    var drinksMatch = self.utils.arrayDoesNotContain(person.drinks, venue.drinks);
                    if(drinksMatch.length > 0){

                        venue.inactive = true;
                        venue.reason.push(person.name + ' only likes to drink ' + drinksMatch.join(', '));

                    }


                    return false;

                });

            }

            return false;

        });

        this.setState(objdata);

//        this.forceUpdate();

    }


    render() {

        return (
            <div className="container">
                <Intro />
                <div className="section">
                    <h2>Team members</h2>
                    <ListPeople people={this.state.data.people} handlePersonChange={this.handlePersonChange} />
                </div>
                <div className="section">
                    <h2>Venues</h2>
                    <ListVenues venues={this.state.data.venues} />
                </div>
            </div >
          );

    }
}

export default App;
