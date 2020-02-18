import React from 'react'
import uuid from 'uuid'

const initialState = {

    todos : [
    
        {
          item: 'Learn about reducers',
          completed: false,
          id: uuid()
        },
    
        
        {
            item: 'Pay visit to friends',
            completed: false,
            id: uuid()
          },
    
          {
            item: 'Do some laundry',
            completed: false,
            id: uuid()
          },
    
          {
            item: 'Do school run',
            completed: false,
            id: uuid()
          },
    
          {
            item: 'Shopping',
            completed: false,
            id: uuid()
          },
    
          {
            item: 'Go to the pharmacy',
            completed: false,
            id: uuid()
          }
    
      
        ]
}


    const todoReducer = (state, action) => {

    return {

    }

    }


    const INPUT_CHANGE = 'INPUT_CHANGE'
    const ADD_TODO = 'ADD_TODO'
     const MARK_COMPLETED_TODO = 'MARK_COMPLETED_TODO'

     function reducer(state, action) {
         switch(action.type) {
       case ADD_TODO:
           {
           ...state,
           todo: state.todo.map(todo =>{

            const itemid = action.payload
           })


           }

           case INPUT_CHANGE:
               const {inputName, inputValue} = action.payload

               return { 

                ...state,
                formValues: {

               state.formValues,
               [inputName]: inputValue,
                }
            }

                }
               }


         }
     }

default: 

return state



   
    




export default reducer

