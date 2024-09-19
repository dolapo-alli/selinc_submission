import { useContext } from 'react';  
import { TaskContext } from './TaskProvider';

export const useTasks = () => useContext(TaskContext);