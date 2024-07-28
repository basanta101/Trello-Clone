import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '@/constants/board.constants.js';

import styles from './Card.module.scss'
import TaskEditBtn from '@/components/TaskCreateBtn/TaskCreateBtn';
import editTask from '@/utils/actions/editTask';

const Card = ({ card, listId, onTaskEdit }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { id: card.id, fromListId: listId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const editTaskCb = async (task) => {
    console.log('editTaskCB', task, card)
    try {
      setIsLoading(true)
      const data = await editTask({ ...task, taskId: card.id })
      onTaskEdit(data)
    } catch (e) {
      console.log('error while editing task', e)
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <div ref={drag} className={styles.card} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className={styles.header}>
        <div className={styles.name}>{card.name}</div>
        <TaskEditBtn btnText='Edit' classes={{ button: styles['edit-button'] }} addTaskCb={editTaskCb} taskDetails={{ name: card.name, description: card.description}}/>
      </div>
      <div className={styles.description}>{card.description}</div>
    </div>
  );
};

export default Card;
