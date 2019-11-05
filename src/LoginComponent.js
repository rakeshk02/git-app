import React from 'react';
import {withRouter} from 'react-router-dom';
import img from './IMAGES/Group 11.png';
import './App.css';

class Login extends React.Component{

    handleSignIn=async()=>{

    this.props.history.push('/DataComponent');

}

render(){

    return(<div>

<div className="ui input focus">
   



<div class="container1">
            <img src={img} alt="Image" />
             <form>
                 <table id="table">
                     <tr>
                         <td>
                             <label for="Email">Email address</label>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <input name="email" type="text" placeholder="Email" />
                           
                         </td>

                     </tr>
            
                     <tr>
                         <td>Password
                             <a class="pwd" href="#">forgot Password</a>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <input name="password" type="password" placeholder="Password" />
                         </td>
                     </tr>
      
                     <tr>
                         <td>
                             <input id="come" type="submit" value="Sign in" onClick={this.handleSignIn}/>
                         </td>

                     </tr>

                 </table>
                 <p>Don't have an account?
                     <a href="#">Sign up now</a>
                 </p>
             </form>
             </div>
</div>

 </div>)
}


}

export default withRouter (Login);