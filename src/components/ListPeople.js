import React from 'react';
import ListPeopleItem from './ListPeopleItem';

class ListPeople extends React.Component{

    render(){

        var self = this;

        return(
            <ul className="select-list">
            {this.props.people.map(function(person){

                return(<ListPeopleItem person={person} key={person.name} handlePersonChange={self.props.handlePersonChange} />);

            })}
            </ul>
        );

    }

}

export default ListPeople;