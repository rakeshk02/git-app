import React from 'react';
import axios from 'axios';
import Modal from "react-responsive-modal";
import { connect } from 'react-redux';
import {data} from './actions';
import {click} from './actions';
import {edit} from './actions';
import {editclick} from './actions';
import './App.css';
import img6 from './IMAGES/baseline-border_color-24px.png';
import img7 from './IMAGES/baseline-delete-24px.png';

const  Filter = ({filterData,deleteClick,editclick}) => {
    let posts=[];


    if(filterData)
    {
    posts = filterData.map((post,index)=>{

        return(
          <tr >
            <td>{index}</td>
            <td>{post.name}</td>
            <td>{post.empId}</td>
            <td>{post.blood}</td>
            <td>{post.language}</td>
            <img src={img7} onClick={()=>{deleteClick(post.id)}}/>
            <img src={img6} onClick={()=>{editclick(post.id,true)}}/>
          </tr>
      )
      })
    }
    
    
    return posts;
}
const mapDispatchToProps = dispatch => {
    return {
    deleteClick: id => {
    click(id)
    },
    editclick:(id,input)=>{
        edit(id,input)
    }
    }
    }
const mapStateToProps = (state)=>{
    console.log(state);
    return{
        filterData:state.data
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Filter);