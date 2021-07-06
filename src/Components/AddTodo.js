import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Container} from 'react-bootstrap'
import './AddTodo.css'

const AddTodo = (props) => {
    const {removeToTask, editToTask} = props
    const {taskName, taskId} = props.listTodo
    const [edit, setEdit] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        editToTask(data.taskName, taskId);
        setEdit(true)
    } 



    return (
        // <div style={{backgroundColor:'pink', height:'50px', margin:'40px', display:'flex'}}>
            <Container  className="mb-3" style={{backgroundColor:'#7ffc03', height:'70px', margin:'40px', borderRadius:"15px"}}>
                <div className="taskPart">

            {
                edit ?
                <>
                <h3>{taskName} <button onClick={() => setEdit(!edit)}>EDIT</button> <button onClick={()=> removeToTask(taskId)}>X</button></h3> 
                </>:<>
                <h3>{taskName} 
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("taskName")} />
                        <input className="submitBtn" type="submit" value="New Task" />
                        <button onClick={()=> setEdit(true)}>X</button>
                    </form>
                    </h3>
                
                </>
                }

            </div>



            {/* <button onClick={()=> editToTask(TaskName, taskId)}></button> */}
            </Container>
    );
};

export default AddTodo;