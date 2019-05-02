import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/login';

// Components
import LabelInput from '../../common/components/Label_Input';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: ''
    }
  };

  componentDidMount() {
    const { isAuthenticated } = this.props.authenticated;
    if (isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentDidUpdate() {
    const { isAuthenticated } = this.props.authenticated;
    if (isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    
    const userData = { email, password };
    
    this.props.loginUser(userData);
  };

  render() {

    const { errors } = this.state;

    return (
      <div className='login'>
        <section className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4>
                      <i className="fas fa-sign-in-alt"></i> Login</h4>
                  </div>
                  <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                      <LabelInput
                        text='Email'
                        type='email'
                        icon='fas fa-envelope'
                        name='email'
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors}
                      />
                      <LabelInput
                        text='Password'
                        type='password'
                        icon='fas fa-lock'
                        name='password'
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors}
                      />

                      <input type="submit" value="Login" className="btn btn-secondary btn-block" />
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

const mapStateToProps = state => ({
  errors: state.errors,
  authenticated: state.authenticated,
});


export default connect( mapStateToProps, { loginUser } )(Login);