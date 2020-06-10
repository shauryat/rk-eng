import React, { Component } from 'react';
import MACHINE_DATA from '../Data/MachineData';
import Template from './Template';

export default class TestingLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            machines : MACHINE_DATA
        }
    }
    render() {
        const {machines} = this.state
        return (
            <div>
                {machines.map(({title, id,description, imageUrl}) => (
                           <Template key={id} description={description} title={title} imageUrl={imageUrl}/>
                ))}
            </div>
        )
    }
}
