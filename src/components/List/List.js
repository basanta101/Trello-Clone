import Card from '@/components/Card/Card';
import TaskCreateBtn from '@/components/TaskCreateBtn/TaskCreateBtn';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '@/constants/board.constants.js';
import styles from './List.module.scss'
import addTask from '@/utils/actions/addTask';

const List = ({ list, moveCard, addTaskToList, onTaskEdit }) => {
    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => {
            console.log('drop called from list', item)
            moveCard(item.id, item.fromListId, list.id);
        }
    });

    const addTaskCb = async (task) => {
        console.log('addtaskCB', list, task)
        const data = await addTask({ ...task, listId: list.id })
        addTaskToList(data)
    }


    return (
        <div ref={drop} className={styles.list}>
            <h2>{list.name}</h2>
            {list.tasks.map((card) => (
                <Card key={card.id} card={card} listId={list.id} onTaskEdit={onTaskEdit}/>
            ))}
            <TaskCreateBtn addTaskCb={addTaskCb} />
        </div>
    );
};

export default List;
