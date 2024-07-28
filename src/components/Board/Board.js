"use client"
import { useEffect, useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import List from '@/components/List/List';
import { getBoard } from '@/utils/actions/getBoard';
import { updateCardList } from '@/utils/actions/updateCardList';
import styles from './Board.module.scss';

const Board = ({ boardId = "" }) => {
    const [lists, setLists] = useState([]);

    const getBoardData = async () => {
        const board = await getBoard({ boardId });
        console.log('board ==>', board);
        setLists(board);
        return null;
    };

    useEffect(() => {
        getBoardData();
    }, []);

    const moveCard = async (cardId, fromListId, toListId) => {
        console.log('moveCard', cardId, fromListId, toListId);

        // Update card's list_id in the database
        const { data, error } = await updateCardList(cardId, toListId);
        if (error) {
            console.error('Error updating card list_id:', error);
            return; // Return early if there is an error updating the database
        }

        // Update the local state
        setLists((prevLists) => {
            // Find the card to move
            const fromList = prevLists.find((list) => list.id === fromListId);
            const cardToMove = fromList?.tasks.find((card) => card.id === cardId);

            // If the card is not found, return the previous state
            if (!cardToMove) {
                return prevLists;
            }

            // Map over the lists and update the fromList and toList
            const newLists = prevLists.map((list) => {
                if (list.id === fromListId) {
                    return {
                        ...list,
                        tasks: list.tasks.filter((card) => card.id !== cardId),
                    };
                }
                if (list.id === toListId) {
                    return {
                        ...list,
                        tasks: [...list.tasks, { ...cardToMove, list_id: toListId }],
                    };
                }
                return list;
            });

            return newLists;
        });
    };

    const addTaskToList = (task, listIndex) => {
        console.log('addTaskToList', task, listIndex, lists)
        const updatedList = lists.map((list, index) => {
            if (index === listIndex) {
                return { ...list, tasks: [...list.tasks, ...task] }
            }
            return list
        })
        setLists(updatedList)
    }

    const onTaskEdit = ([taskToUpdate] = [], listIndex) => {
        const updatedList = lists.map((list, index) => {
            if (index === listIndex) {
                return {
                    ...list, tasks: list.tasks.map((task) => {
                        if (task.id === taskToUpdate.id) {
                            return taskToUpdate
                        } return task
                    })
                }
            }
            return list
        })
        setLists(updatedList)
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.board}>
                {lists.map((list, listIndex) => (
                    <List
                        key={list.id}
                        list={list}
                        moveCard={moveCard}
                        addTaskToList={(task) => addTaskToList(task, listIndex)}
                        onTaskEdit={(task) => onTaskEdit(task, listIndex)}
                    />
                ))}
            </div>
        </DndProvider>
    );
};

export default Board;
