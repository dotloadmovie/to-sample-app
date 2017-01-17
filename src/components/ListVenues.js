import React from 'react';
import ListVenuesItem from './ListVenuesItem';

class ListVenues extends React.Component{

    render(){

        return(
            <ul className="display-list">
            {this.props.venues.map(function(venue){

                return(<ListVenuesItem venue={venue} key={venue.name} />);

            })}
    </ul>
    );

    }

}

export default ListVenues;