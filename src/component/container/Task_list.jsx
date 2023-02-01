import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { levels } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

import '../../styles/task.scss';

const Task_list = props => {

  const defaultTask = new Task("Example","Default desciption", false, levels.NORMAL);

  const [tasks, setTasks] = useState(defaultTask);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      console.log("Task component is going to unmount")
    }
  }, [tasks])



  const changeCompleted = () => {
    console.log("TODO: Cambiar estado de una tarea");
  }

  return (
    <div>
        <div>
            Your Tasks:
        </div>
        <TaskComponent  task={ defaultTask }></TaskComponent>
    </div>
  )
}


export default Task_list