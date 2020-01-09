import React from "react";
import {Component} from 'react';

export class LaunchDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            launch: undefined
        }
        this.fetchData = this.fetchData.bind(this);
        this.renderObj=this.renderObj.bind(this);

        this.fetchData(props.match.params.launchId);
    }

    fetchData(launchId){
        var apiUrl='https://spacelaunchnow.me/api/3.3.0/launch/' + launchId + '/';
        fetch(apiUrl)
        .then(response => response.json())
        .then(response => this.setState({launch:response}))
    }   

    renderObj(obj, indent){
        var result = [];       
        
        for(var key in obj)
        {
            if(typeof(obj[key]) != 'object')            
                result.push((<p><strong>{indent + key}</strong>:  {(obj[key])!=null?String(obj[key]): '-'} </p>))
            
            else if(obj[key])   
            {                     
                result.push((<p><strong>{key}</strong></p>))
                var r = this.renderObj(obj[key], indent + '---')
                              
                for(var key1 in r)               
                {   
                    result.push(r[key1])
                }
            }                        
        }
        
        return result;
    }
   
    render(){
        return (
            <div>
                {this.renderObj(this.state.launch,'')}
            </div>            
            )
    }
}

export default LaunchDetails;
