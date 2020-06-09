import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);

    this.onChangeProfessor = this.onChangeProfessor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            professor: '',
          }

    }

    onChangeProfessor(e) {
        this.setState({
          professor: e.target.value
        })
      }

      onSubmit(e) {
        e.preventDefault();
    
        const user = {
          professor: this.state.professor,

        }
    
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        this.setState({
            professor: ''
          })
        
        
      }

      render() {
        return (
          <div>
            <h3>Krijo perdoruesin e ri</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Profesori: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.professor}
                    onChange={this.onChangeProfessor}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Krijo perdoruesin" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
    }