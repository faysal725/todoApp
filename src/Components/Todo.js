import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AddTodo from './AddTodo';
import { Form, Button } from 'react-bootstrap';
import { addToTask, editToTask, removeToTask } from '../Redux/Actions/Actions';
import { connect } from 'react-redux';

const Todo = (props) => {
    const {taskName, addToTask, needToDo, removeToTask, editToTask}= props
    console.log(props)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => addToTask(data.taskName);
    
    // console.log(taskName)

    return (
        <div style={{backgroundColor:"black", color:"red"}}>
            <h1>THIS IS TODO</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("taskName")} />
            <br /><br />
            
            <input type="submit" value="New Task"/>
            </form>


            {
                needToDo.map(lt => <AddTodo listTodo={lt} removeToTask={removeToTask} editToTask={editToTask}></AddTodo>)
            }

        </div>
    );



};


const mapStateToProps = state => {
    return {
        needToDo: state.needToDo,
        taskName: state.totalTask
    }
}
const mapDispatchToProps = {
    addToTask: addToTask,
    removeToTask: removeToTask,
    editToTask: editToTask
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo);