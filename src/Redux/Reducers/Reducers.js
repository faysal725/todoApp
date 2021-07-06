import React from 'react';
import { ADD_TO_TASK, EDIT_TO_TASK, REMOVE_TO_TASK } from '../Actions/Actions';

const initialState = {
    needToDo: [],
    totalTask:[
                {taskName: "Eat"},
                {taskName: "sleep"},
                {taskName: "homework"},
                {taskName: "play"},
        
    ]
}


const Reducers = (state = initialState, action) => {


    switch(action.type){
        case ADD_TO_TASK:
            console.log(action)
            const newTodo= {
                taskName: action.taskName,
                taskId: state.needToDo.length + 1
                }
                const newTask = [...state.needToDo, newTodo]
            return {...state, needToDo: newTask}

        case REMOVE_TO_TASK:
            const newTaskId= action.taskId 
            const remainingTask = state.needToDo.filter(task =>task.taskId !== newTaskId)
            return {...state, needToDo:remainingTask}
        

        case EDIT_TO_TASK:
            console.log(action)
            const newTaskName= action.taskName
            const editTaskId = action.taskId
            const editedTask={
                taskName: newTaskName,
                taskId: editTaskId
            }
            console.log(editedTask)



            const changedTask = state.needToDo.findIndex(task => task.taskId === editTaskId)
            console.log(changedTask)
            
            const afterTask = state.needToDo[changedTask].taskName= newTaskName
            console.log(afterTask)
            console.log(state.needToDo)
            console.log(state)
            
            return {...state}

            
            default:
                return state;
            }
    
            
};

export default Reducers;