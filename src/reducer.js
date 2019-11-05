



const initialState = {
  data: '',
  edit:false,
  id:''
  
    }
    export default function file(state = initialState, action) {
      console.log(action);
      // console.log(state)
      switch (action.type) {
    
        case 'DATA':
  
          return {
  ...state,
              data:action.data,edit:action.display
          }
         case 'EDIT':
         return {
        ...state,
        edit:action.input,
        id:action.id
         }
 
          default:
                return state;
  
      }
  }