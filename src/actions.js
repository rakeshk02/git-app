import axios from 'axios';
import { store } from './index'

export async function data(){

    let filter = [];

    let getData =await axios.get("http://localhost:4000/posts")
    .then(response=>{
      filter = response.data;
           
            // store.dispatch((dispatch) => {
            // dispatch({
            // type:'DATA',
            // data:filter, display: false       
      })
  })
    })
  }

  export function click(id){
    let  getData = axios.delete(`http://localhost:4000/posts/${id}/`)
    data();
    return 
  }
  
  export function edit(id, input){
    console.log(id, input)
    store.dispatch((dispatch) => {
      dispatch({
      type:'EDIT',
      id:id,
      input     
    })
    })
  }

  export function editClick(input1,input2,input3,input4,display,id)
  {
    let  getData = axios.put(`http://localhost:4000/posts/${id}/`,{
      name: input1,
      empId: input2,
      blood: input3,
      language: input4
    })

    data();
  ;
  }

