import React, { Component } from 'react';
import { Form, FormGroup, Input, FormFeedback } from 'reactstrap';

import axios from 'axios';


class Forget extends Component {

    constructor(props){
        super(props);
        this.state={
           
            password: '',
            confirmPassword: '',
            touched: {
                password: false,
                confirmPassword: false,
              },
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
        this.handleJoin=this.handleJoin.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });
      }
    handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
      };

    validate(telnum,password,confirmPassword,){
        const errors = {
          telnum: "",
          password: "",
          confirmPassword: "",
        };
        
        const reg = /^\d+$/;
        
         if (this.state.touched.password && this.state.password.length < 6)
          errors.password = "Password should be >=6";
        if (this.state.touched.confirmPassword && this.state.confirmPassword != this.state.password)
          errors.confirmPassword = "Password didn't match";
        return errors;
      }
    
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }
    handleJoin(event){
        this.toggleModalj();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }
    scrollToFooter(){
        const anchor = document.querySelector('#footer')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    scrollToAbout(){
        const anchor = document.querySelector('#about')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    

    render() {
        const errors = this.validate(
            this.state.password,
            this.state.confirmPassword,
          );
        return(
                    <div className="xxyyzz">
                    <center>
                    
                    <div className="container" style={{display:"flex",justifyContent:"center",flexDirection:"row",height:"auto",borderRadius:"15px"
                    ,boxShadow: "0 0 6px rgba(0,0,0,.1)",width:"40%",backgroundColor:"white",
                }}>			
                    <Form className="cd-signin-modal__form" style={{padding:"2em"}}>
	                <p style={{fontSize:"35px" , textAlign:"center" ,fontFamily:"Josefin Sans", color:"black"}}>Reset Your Password</p>
                    <p style={{fontSize:"14px", fontFamily:"Montserrat",textAlign:"center",lineHeight:"18px",letterSpacing:"1px",color:"white"}}>Signin to access personalized articles, podcasts, career enhancement services along with interest based professional communication groups.</p>

 	
 
					<p style={{margin:"1em 0"}}>
						<center>
                        <FormGroup>
						<Input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="password" type="password"  placeholder="New Password"
                        name="password"
                        value={this.state.password} 
			valid={errors.password === "" && this.state.touched.password}
			invalid={errors.password !== ""}
			onBlur={this.handleBlur("password")}
			onChange={this.handleInputChange}
                        
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans",height:"70%"}}/>
                        
			<FormFeedback style={{ fontSize: "14px" }}>
                            {errors.password}
                         </FormFeedback>			
                          </FormGroup>
                        </center>

					
                    </p>
                        
					<p style={{margin:"1em 0 0.5em 0"}}>  
						<center>
                                                 <FormGroup>
						<Input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="confirmPassword" type="password"  placeholder="Confirm Password"
                        name="confirmPassword"
                        value={this.state.confirmPassword} 
			valid={errors.confirmPassword === "" && this.state.touched.confirmPassword}
			invalid={errors.confirmPassword !== ""}
			onBlur={this.handleBlur("confirmPassword")}
			onChange={this.handleInputChange}
                        
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans",height:"70%"}}/>
                        
		       <FormFeedback style={{ fontSize: "14px" }}>
                            {errors.confirmPassword}
                         </FormFeedback>		
                           </FormGroup>
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>

					<p style={{margin:"0em 0"}}>
						<center><a href="twitter.com" className="twitter btn" style={{backgroundColor: "black",color:"#ffd700",
                         padding:"8px 12px",fontSize: "20px", textAlign:"center",  fontFamily:"Josefin Sans",boxShadow:"0 2",borderRadius:"10px"}}
                         onClick={this.handleLoginClick}
                         >
          								 Continue
       							 </a></center>
					</p>
				</Form>
				
				</div></center>
                         </div>

        );
    }
  }

export default Forget;
