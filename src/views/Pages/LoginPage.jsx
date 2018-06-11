import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import Auth from "../../components/Auth/Auth";
// @material-ui/icons
// import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import LoginCard from "components/Cards/LoginCard.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      userEmail : "",
      userPwd : "",
      cardAnimaton: "cardHidden"
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePwChange = this.handlePwChange.bind(this);
  }
  handleEmailChange(event) {
    this.setState({userEmail: event.target.value});
  }
  
  handlePwChange(event) {
    this.setState({userPwd: event.target.value});
  }
  
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <ItemGrid xs={12} sm={6} md={4}>
              <form>
                <LoginCard
                  customCardClass={classes[this.state.cardAnimaton]}
                  headerColor="rose"
                  cardTitle="Login"
                  //cardSubtitle="Or Be Classical"
                  footerAlign="center"
                  footer={
                    <Button color="roseNoBackground" wd size="lg" onClick={()=>{
                      let auth = new Auth();
                      auth.login(this.state.userEmail, this.state.userPwd)
                        .then(response=>{
                        if (response.state === "success"){
                          this.props.history.push("/dashboard");
                        }else{
                          alert("Access Denied");
                        }
                      });
                    }} >
                      Let's Go
                    </Button>
                  }
                  // socials={[
                  //   "fab fa-facebook-square",
                  //   "fab fa-twitter",
                  //   "fab fa-google-plus"
                  // ].map((prop, key) => {
                  //   return (
                  //     <Button
                  //       color="simple"
                  //       justIcon
                  //       key={key}
                  //       customClass={classes.customButtonClass}
                  //     >
                  //       <i className={prop} />
                  //     </Button>
                  //   );
                  // })}
                  content={
                    <div>
                      {/*<label>*/}
                        {/*Email*/}
                        {/*<input type="text" value={this.state.value} onChange={this.handleEmailChange} />*/}
                      {/*</label>*/}
                      <CustomInput
                        // inputProps={{
                        //   onChange: event =>
                        //     this.change(event, "registerEmail", "email"),
                        //   type: "email"
                        // }}
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event =>
                          this.handleEmailChange(event, "userEmail", "email"),
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        onChange = {this.handlePwChange}
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event =>
                            this.handlePwChange(event, "userPwd", "password"),
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutline
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                    </div>
                  }
                />
              </form>
            </ItemGrid>
          </GridContainer>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(LoginPage);
