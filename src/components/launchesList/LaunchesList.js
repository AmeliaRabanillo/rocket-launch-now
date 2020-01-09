import React from "react";
import {Component} from 'react';
import { Link } from "react-router-dom";

export class LaunchesList extends Component{
    constructor(props){
        super(props)
        this.state={
            launches: []
        }
        this.fetchData = this.fetchData.bind(this);
        this.generateRows = this.generateRows.bind(this);
        this.fetchData();
    }

    fetchData(){
        var apiUrl='https://spacelaunchnow.me/api/3.3.0/launch/upcoming/';
        fetch(apiUrl)
        .then(response => response.json())
        .then(response => response.results)
        .then(results=>this.setState({launches:results}));
    }   
    
    generateRows(){
        return this.state.launches.map(launch =>            
            <tr key={launch.id}>
                <td>{launch.name}</td>
                <td>{launch.status.name}</td>
                <td>{launch.net.toLocaleString('en-US')}</td>
                <td>{launch.window_start.toLocaleString('en-US')}</td>
                <td>{launch.window_end.toLocaleString('en-US')}</td>    
                <td>{ <Link to={"/details/" + launch.id}>Details</Link>}</td>
            </tr>
        );
    }

    render(){
        return (
            <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Net</th>
                        <th>Start</th>
                        <th>End</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.generateRows()}
                </tbody>
            </table>
        </div>
            )
    }
}

export default LaunchesList;
