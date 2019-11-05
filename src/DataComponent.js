import React from 'react';
import axios from 'axios';
import Modal from "react-responsive-modal";
import { connect } from 'react-redux';
import {data,editClick} from './actions';
import Filter from './filter';
import img1 from './IMAGES/small-down.svg';
import img2 from './IMAGES/Avatar.png';
import img3 from './IMAGES/Group 289.png';
import img4 from './IMAGES/Group 11@2x.png'
import './App.css';

class DataComponent extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
          posts:[],
          name:'',
          empId:'',
          blood:'',
          language: '',
          open: false,
          nameEdit:'',
          empIdEdit:'',
          bloodEdit:'',
          languageEdit: ''        
        };
      }      

      openModal = () => {
        this.setState({ open: true });
      };

      onCloseModal = () => {
    
        this.setState({ open: false });
      };
      onSaveData=()=>{
    
        this.setState({ open: false });

        let postData =  axios.post('http://localhost:4000/posts',this.state)

     .then(response=>{console.log(response.data);let filterResponseData = response.data;

      console.log(typeof( filterResponseData));

      data();
    
    })
      }
      onSubmitForm=(e)=>{
        e.preventDefault()
      }

     
      onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value}) 
      }

      onChangeHandlerEdit=(e)=>{

        this.setState({[e.target.name]:e.target.value})
        
      }
     
      componentDidMount(){
        data();
      }
      
      editClick =(postId) => {
        alert(postId);
      }


    render(){
      const edit =this.props.edit
      const { open } = this.state;
      const {name,blood,empId,language}=this.state;
      const {nameEdit,bloodEdit,empIdEdit,languageEdit}=this.state;

        return(<div className="App" >
          <div class="header">
                <div><img id="header_image" src={img4} alt="" /></div>
                <p>John Doe </p>&nbsp; &nbsp;
                <img id="smallDown" src={img1} alt="" />&nbsp; &nbsp;
                <img id="avatar" src={img2} alt="" />
          </div>
            <div class="middleone">
                <div class="middle">
                    <input id="search_image" onkeyup="searchData()" type="text" placeholder="Search" />
                    <img id="image" src={img3} onClick={this.openModal} />
                </div>
            </div>
           <div class="data">
                <table className="table_data">
                <thead>
                    <tr>
                        <th>#</th>                        
                        <th>TRACK</th>
                        <th>ALBUM</th>
                        <th>RUN TIME</th>
                        <th>LANGUAGE</th>
                        <th id="action">ACTION</th>
                    </tr>
                    </thead>
                    <tbody><Filter/></tbody>                 
                </table>               
            </div>
        <div className="go-addBtn">      
 
      <Modal open={open} onClose={this.onCloseModal}>
        <h2>Add Album</h2>     
        <form onSubmit={this.onSubmitForm} autoComplete="off">
        <label>Track :</label>
        <input type="text" name="name" placeholder="Track" value={name} onChange={this.onChangeHandler}/><br/>
        <label>Album :</label>
        <input type="text" name="empId" placeholder="Album" value={empId} onChange={this.onChangeHandler} /><br/>
        <label>Runtime :</label>
        <input type="text" name="blood" placeholder="Runtime" value={blood} onChange={this.onChangeHandler} /><br/>
        <label>Language :</label>
        <input type="text" name="language" placeholder="Language" value={language} onChange={this.onChangeHandler} /><br/>
        <button type="submit" className="save_button" onClick={this.onSaveData}>Save</button>
        </form>         
      </Modal>
      <Modal  open={this.props.edit} onClose={this.props.edit}>
          <h2>Edit Album</h2>     
          <form >        
      <div className="ui input focus" autoComplete="off">
      <label>Track :</label>
    <input type="text" name="nameEdit" placeholder="Track" value={nameEdit} onChange={this.onChangeHandlerEdit}/><br/>
    <label>Album :</label>
    <input type="text" name="empIdEdit" placeholder="Album" value={empIdEdit} onChange={this.onChangeHandlerEdit} /><br/>
    <label>Runtime :</label>
    <input type="text" name="bloodEdit" placeholder="Runtime" value={bloodEdit} onChange={this.onChangeHandlerEdit} /><br/>
    <label>Language :</label>
    <input type="text" name="languageEdit" placeholder="Language" value={languageEdit} onChange={this.onChangeHandlerEdit} />
</div>
    <button  className="ui primary button" type="submit"  onClick={()=>{this.props.HandleEditedData(this.state.nameEdit,this.state.bloodEdit,this.state.empIdEdit,this.state.languageEdit,false,this.props.id)}}>Save</button>
    
    </form>
          
        </Modal>

      </div>
      </div>)
    }
}

  
function mapStateToProp(state){

  console.log(state);
    return {
      edit:state.edit,
      id:state.id
    }
  }
   function mapDispatchToProps(dispatch){
  
  return {
  
    HandleEditedData: (input1,input2,input3,input4,display,id) => {
      editClick (input1,input2,input3,input4,display,id)
      
      }
  
  }
  
   } 
  
  export default connect(mapStateToProp,mapDispatchToProps)  (DataComponent);