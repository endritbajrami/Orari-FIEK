import React, {Component} from 'react';
import axios from 'axios';

export default class EditSchedules extends Component {
    constructor(props) {
        super(props);

    this.onChangeProfessor = this.onChangeProfessor.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeEcts = this.onChangeEcts.bind(this);
    this.onChangeNrhours = this.onChangeNrhours.bind(this);
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeClassroom = this.onChangeClassroom.bind(this);
    this.onChangeStype = this.onChangeStype.bind(this);
    this.onChangeGroup = this.onChangeGroup.bind(this);
    this.onChangeSemester = this.onChangeSemester.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            professor: '',
            subject: '',
            ects: 0,
            nrhours: 0,
            day: '',
            duration: '',
            classroom: 0,
            stype: '',
            group: '',
            semester: '',
            note:'',
            users: []
          }

    }
    componentDidMount() {
        axios.get('http://localhost:5000/schedules/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              professor: response.data.professor,
              subject: response.data.subject,
              ects: response.data.ects,
              nrhours: response.data.nrhours,
              day: response.data.day,
              duration: response.data.duration,
              classroom: response.data.classroom,
              stype: response.data.stype,
              group: response.data.group,
              semester: response.data.semester,
              note: response.data.note
              })   
          })
          .catch(function (error) {
            console.log(error);
          })

    
        axios.get('http://localhost:5000/users/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.professor),
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }

    onChangeProfessor(e) {
        this.setState({
          professor: e.target.value
        })
      }
    
      onChangeSubject(e) {
        this.setState({
          subject: e.target.value
        })
      }

      onChangeEcts(e) {
        this.setState({
          ects: e.target.value
        })
      }
    
      onChangeNrhours(e) {
        this.setState({
          nrhours: e.target.value
        })
      }

      onChangeDay(e) {
        this.setState({
          day: e.target.value
        })
      }

      onChangeDuration(e) {
        this.setState({
          duration: e.target.value
        })
      }

      onChangeClassroom(e) {
        this.setState({
          classroom: e.target.value
        })
      }

      onChangeStype(e) {
        this.setState({
          stype: e.target.value
        })
      }

      onChangeGroup(e) {
        this.setState({
          group: e.target.value
        })
      }

      onChangeSemester(e) {
        this.setState({
          semester: e.target.value
        })
      }

      onChangeNote(e) {
        this.setState({
          note: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const schedule = {
          professor: this.state.professor,
          subject: this.state.subject,
          ects: this.state.ects,
          nrhours: this.state.nrhours,
          day: this.state.day,
          duration: this.state.duration,
          classroom: this.state.classroom,
          stype: this.state.stype,
          group: this.state.group,
          semester: this.state.semester,
          note: this.state.note
        }
    
        console.log(schedule);

        axios.post('http://localhost:5000/schedules/update/'+ this.props.match.params.id, schedule)
        .then(res => console.log(res.data));
    
        window.location = '/';
      }

      render() {
        return (
        <div>
          <h3>Ndrysho orarin</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Profesori: </label>
              <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.professor}
                  onChange={this.onChangeProfessor}>
                  {
                    this.state.users.map(function(user) {
                      return <option 
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group"> 
              <label>Lenda: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.subject}
                  onChange={this.onChangeSubject}
                  />
            </div>
            <div className="form-group">
              <label>ECTS: </label>
              <input 
                  type="text" 
                  required
                  className="form-control"
                  value={this.state.ects}
                  onChange={this.onChangeEcts}
                  />
            </div>
            <div className="form-group">
              <label>Numri i oreve: </label>
              <input 
                  type="text" 
                  required
                  className="form-control"
                  value={this.state.nrhours}
                  onChange={this.onChangeNrhours}
                  />
            </div>
            <div className="form-group">
              <label>Dita: </label>
              <input 
                  type="text" 
                  required
                  className="form-control"
                  value={this.state.day}
                  onChange={this.onChangeDay}
                  />
            </div>
            <div className="form-group">
              <label>Koha: </label>
              <input 
                  type="text" 
                  required
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                  />
            </div>
            <div className="form-group">
              <label>Salla: </label>
              <input 
                  type="text" 
                  required
                  className="form-control"
                  value={this.state.classroom}
                  onChange={this.onChangeClassroom}
                  />
            </div>
            <div className="form-group">
              <label>Ligjerate/Ushtrime </label>
              <input 
                  type="text" 
                  required
                  className="form-control"
                  value={this.state.stype}
                  onChange={this.onChangeStype}
                  />
            </div>
            <div className="form-group">
              <label>Grupet: </label>
              <input 
                  type="text" 
                  required
                  className="form-control"
                  value={this.state.group}
                  onChange={this.onChangeGroup}
                  />
            </div>
            <div className="form-group">
              <label>Semestri: </label>
              <input 
                  type="text" 
                  required
                  className="form-control"
                  value={this.state.semester}
                  onChange={this.onChangeSemester}
                  />
            </div>
            <div className="form-group">
              <label>Verejtje: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.note}
                  onChange={this.onChangeNote}
                  />
            </div>
            <div className="form-group">
              <input type="submit" value="Ndrysho" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }