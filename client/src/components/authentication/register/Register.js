import React, { Component } from 'react';

// Components
import LabelInput from '../../common/components/Label_Input';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password2: '',
      errors: ''
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, email, password, password2 } = this.state;
    
    const data = { first_name, last_name, email, password, password2 };
    
    console.log(data)
  };

  render() {

    const { errors } = this.state;

    return (
      <div className='register'>
        <section className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4>
                      <i className="fas fa-user-plus"></i> Register</h4>
                  </div>
                  <div className="card-body">
                      <form noValidate onSubmit={this.onSubmit} >
                        <LabelInput
                          text='First Name'
                          icon='fas fa-user'
                          name='first_name'
                          value={this.state.first_name}
                          onChange={this.onChange}
                          error={errors}
                        />
                        <LabelInput
                          text='Last Name'
                          name='last_name'
                          icon='fas fa-user'
                          value={this.state.last_name}
                          onChange={this.onChange}
                          error={errors}
                        />
                        <LabelInput
                          text='Email'
                          name='email'
                          icon='fas fa-envelope'
                          type='email'
                          value={this.state.email}
                          onChange={this.onChange}
                          error={errors}
                        />
                        <LabelInput 
                          text='Password'
                          name='password'
                          icon='fas fa-lock'
                          type='password'
                          value={this.state.password}
                          onChange={this.onChange}
                          error={errors}
                        />
                        <LabelInput 
                          text='Confirm Password'
                          name='password2'
                          icon='fas fa-lock'
                          type='password'
                          value={this.state.password2}
                          onChange={this.onChange}
                          error={errors}
                        />
                      <input type="submit" value="Register" className="btn btn-secondary btn-block" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
