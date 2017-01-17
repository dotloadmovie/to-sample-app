import React from 'react';

class ListVenuesItem extends React.Component{

    renderInner(){

        return(
            <div>
                <h3 dangerouslySetInnerHTML={{ __html: this.props.venue.name }}></h3>
                <p><strong>Drinks:</strong> {this.props.venue.drinks.join(', ' )}, <strong>Food:</strong> {this.props.venue.food.join(', ' )}</p>
                {this.props.venue.inactive &&
                    <p><em>{this.props.venue.reason.join('. ')}</em></p>
                }
            </div>
        );

    }

    render(){

        var css = '';

        if(this.props.venue.inactive){
            css += 'inactive';
        }

        return(
            <li className={css}>
                {this.renderInner()}
            </li>
            );

    }

}

export default ListVenuesItem;
