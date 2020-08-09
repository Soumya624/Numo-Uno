import React, { Component } from 'react';
import {Modal} from 'reactstrap';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isMdodalOpenj:false,
            
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            instiEmail: '',

            loginEmail: '',
            loginPassword: ''
        };
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({
            isMdodalOpen: !this.state.isMdodalOpen
        });
    }
    render(){
        return(
        <Modal  isOpen={this.props.isMdodalOpen} toggle={this.toggleModal} centered={true} 
                backdropTransition={{ timeout: 500000 }}
                centered={true}  style={{letterSpacing:"1px"}} >
                    <div className="modal-content" style={{borderRadius:"15px"}}>
           <center>
                    <div className="container" style={{display:"flex",justifyContent:"center",flexDirection:"row",height:"auto",borderRadius:"15px"
                    ,boxShadow: "0 0 6px rgba(0,0,0,.1)",width:"auto",
                }}>			
                    <form className="cd-signin-modal__form" style={{padding:"2em"}}>
	                <p style={{fontSize:"35px" , textAlign:"center" ,fontFamily:"Josefin Sans", color:"black"}}> Welcome Back</p>
                    <p style={{fontSize:"14px", fontFamily:"Montserrat",textAlign:"center",lineHeight:"18px",letterSpacing:"1px"}}>Signin to access personalized articles, podcasts, career enhancement services along with interest based professional communication groups.</p><br/>

 	<center><a  href="./img/cd-logo.svg" className="fb btn" alt="logo missing" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
		<img src={`${process.env.PUBLIC_URL}/assets/images/un.png`} style={{width: "40%",marginTop:"2px"}} alt="Logo missing"/></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
		Signin with Linkedin</div>
        	</a></center>
       <center><a  href="http://google.com/" className="twitter btn" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
          	<img src={`${process.env.PUBLIC_URL}/assets/images/abc.svg`}  style={{width: "40%",marginTop:"2px"}} alt=" twitter logo missing"/></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
 		Signin with Google</div>
        	</a></center>

        <center><a  href="http://apple.com/" className="google btn" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
           	<img src={`${process.env.PUBLIC_URL}/images/apple.png`} style={{width: "40%",marginTop:"2px"} } alt=" twitter logo missing"
               /></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
		Signin with Apple</div>
        	</a></center>
		<p  style={{margin:"1em 0"}}>
            <center>
		or</center></p> 
 
					<p style={{margin:"1em 0"}}>
						<center>
                        <input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-email" type="email" placeholder="E-mail" 
                        onChange={e => this.setState({ loginEmail: e.target.value })}
                        style={{fontSize:"16px",width: "85%", fontFamily:"Josefin Sans",height:"80%"}}/>
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>

					<p style={{margin:"1em 0 0.5em 0"}}>  
						<center>
						<input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-password" type="password" placeholder="Password"
                        onChange={e => this.setState({ loginPassword: e.target.value })}
                        style={{fontSize:"16px",width: "85%", fontFamily:"Josefin Sans",height:"80%"}}/>
						
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>
					<div className="row">
						<div className="b"><p style={{color:"white"}}>.</p></div>
						<div className="c" style={{textAlign:"left"}}>
                            
						<p  style={{margin:"0.5em 0 0.5em 0.3em"}}>
							<input type="checkbox" id="remember-me" checked className="cd-signin-modal__input "/>
							<label for="remember-me" style={{fontSize:"12px", fontFamily:"Montserrat"}}>Remember me</label>
					</p></div></div>

					<p style={{margin:"0em 0"}}>
						<center><a href="twitter.com" className="twitter btn" style={{backgroundColor: "black",color:"#ffd700",
                         padding:"8px 12px",fontSize: "20px", textAlign:"center",  fontFamily:"Josefin Sans",boxShadow:"0 2",borderRadius:"10px"}}
                         onClick={this.handleLoginClick}
                         >
          								 Continue
       							 </a></center>
					</p>

					<center><a href="google.com" style={{fontSize: "14px", fontFamily: "Montserrat"}}>Forgot Password?</a></center><br/>
					
					<div onClick={this.toggleModalj} style={{fontSize:"12px" , fontFamily:"Montserrat"}}><center>No Account?
                        Create One</center></div>

				</form>
				
				</div></center>
                </div>
       </Modal>
        )}
}
export default Login;

