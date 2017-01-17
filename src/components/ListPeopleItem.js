import React from 'react';

class ListPeopleItem extends React.Component{

    constructor(){

        super();

        this.active = false;

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(evt){

        evt.preventDefault();

        this.active = !this.active;

        this.props.handlePersonChange(this.props.person.name, this.active);

    }

    render(){

        var css = '';

        if(this.props.person.active){
            css += 'active';
        }

        return(<li className={css} onClick={this.handleClick}><span className="check"></span>{this.props.person.name}</li>);


    }

}

export default ListPeopleItem;
