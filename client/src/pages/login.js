﻿import React from "react";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import withStyles from "@material-ui/core/styles/withStyles";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errors: {
    textAlign: 'center',
    color: 'red'
  },
  showPass: {
    left: '200px'
  }
});

class SignIn extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      inputs: {
        email: '',
        password: ''
      },
      db: [
        {login: 'admin@gmail.com', password: 'adminADMIN1234!'},
        {login: 'user@gmail.com', password: 'userUSER1234!'}
      ],
      isValid: false
    }
  }

  contactSubmit = (e) => {
    e.preventDefault();
    let inputs = this.state.inputs;
    let result = this.state.db.find(user => user.password === inputs.password)
    if (result === undefined) {
      alert('User undefined')
    } else {
      console.log(result)
      alert('Successful login')
      window.location.href = '/monuments' // заменить на react component
    }
  }

  handleChange = (input, e) => {
    let inputs = this.state.inputs;
    inputs[input] = e.target.value;
    this.setState({input: inputs[input]});
  }

  showPassword = () => {
    if (document.getElementById('password').type === 'password') {
      document.getElementById('password').type = 'text'
    } else {
      document.getElementById('password').type = 'password'
    }
  }

  render() {

    const { classes } = this.props;
    console.log(this.state)

    return (
        <Container component="main" maxWidth="xs" onSubmit= {this.contactSubmit.bind(this)}>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}/>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  onChange={this.handleChange.bind(this, "email")}
                  value={this.state.inputs["email"]}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  onChange={this.handleChange.bind(this, "password")}
                  value={this.state.inputs["password"]}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Checkbox
                  icon={<VisibilityIcon/>}
                  checkedIcon={<VisibilityOffIcon/>}
                  onClick={this.showPassword}
                  className={classes.showPass}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </form>
              <Grid container>
                <Grid item xs>
                  <Link to='/reset'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/signup'>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </div>
        </Container>
    );
  }
}

//  Где будут храниться логины и пароли пользователей + в каком виде ? (https://habr.com/ru/company/acribia/blog/413157/)
export default withStyles(styles, {withTheme: true})(SignIn)

