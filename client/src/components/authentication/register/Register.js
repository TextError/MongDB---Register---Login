import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import isEmpty from '../../validation/isEmpty';

// Redux
import { connect } from 'react-redux';
import { registerUser } from '../../../redux/actions/register';
import { clearError } from '../../../redux/actions/common';

// Components
import LabelInput from '../../common/components/Label_Input';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password2: '',
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { errors } = this.props.errors;

    // Reset the errors
    if (!isEmpty(errors)) {
      setTimeout(() => { this.props.clearError() }, 3000);
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, email, password, password2 } = this.state;
    
    const data = { first_name, last_name, email, password, password2 };
    
    this.props.registerUser(data, this.props.history)
  };

  render() {

    const { errors } = this.props.errors;

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
                          error={errors.first_name}
                        />
                        <LabelInput
                          text='Last Name'
                          name='last_name'
                          icon='fas fa-user'
                          value={this.state.last_name}
                          onChange={this.onChange}
                          error={errors.last_name}
                        />
                        <LabelInput
                          text='Email'
                          name='email'
                          icon='fas fa-envelope'
                          type='email'
                          value={this.state.email}
                          onChange={this.onChange}
                          error={errors.email}
                        />
                        <LabelInput 
                          text='Password'
                          name='password'
                          icon='fas fa-lock'
                          type='password'
                          value={this.state.password}
                          onChange={this.onChange}
                          error={errors.password}
                        />
                        <LabelInput 
                          text='Confirm Password'
                          name='password2'
                          icon='fas fa-lock'
                          type='password'
                          value={this.state.password2}
                          onChange={this.onChange}
                          error={errors.password2}
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});


export default connect(mapStateToProps, { registerUser, clearError })(withRouter(Register));