export const ADD_TO_TASK = "ADD_TO_TASK";
export const REMOVE_TO_TASK = "REMOVE_TO_TASK";
export const EDIT_TO_TASK = "EDIT_TO_TASK";


export const addToTask = (taskName) => {
    return {type: ADD_TO_TASK, taskName}
}

export const removeToTask = (taskId) => {
    return {type: REMOVE_TO_TASK, taskId}
}


export const editToTask = (taskName, taskId) => {
    return {type: EDIT_TO_TASK, taskName, taskId}
}