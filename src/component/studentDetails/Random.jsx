import React from 'react';
import axios from 'axios'
class Random extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            "persons" : []
        }
    }
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?nat=gb`)
          .then(res => {
            const persons = res.data.results;
            this.setState({ persons });
          })
      }
    render(){
        
        return (
            
            <div>
            { this.state.persons.map(person => 
            <ul>
            <li>{person.gender}</li>
            <li>{person.name.title}</li>
            <li>{person.name.first}</li>
            <li>{person.name.last}</li>
            </ul>)}
            </div>
          )
    }
}
export default Random;