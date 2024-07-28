"use client"
import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button/Button";
import styles from './TaskCreateBtn.module.scss';
import Input from "@/components/Input/Input";

const TaskCreateBtn = ({ addTaskCb = f => f, btnText = "Create Task", btnType = "secondary", classes = {}, taskDetails = {} }) => {
    const [showModal, setShowModal] = useState(false);
    const [task, setTaskDetails] = useState({
        name: '', description: '',
        ...taskDetails
    });

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addTask = () => {
        addTaskCb(task)
        toggleModal()
    }

    return (
        <>
            <Button type={btnType} onClick={toggleModal} classes={{ button: `${styles.button} ${classes?.button}` }}>{btnText}</Button>
            {/* <Button type="secondary" onClick={toggleModal} classes={{ button: styles.button }}>Create Task</Button> */}
            {showModal && (
                <Modal show={showModal} onClose={toggleModal}>
                    <div className={styles['modal-body']}>
                        <div className={styles['modal-body-input-field']}>
                            <div>Name</div>
                            <Input
                                name="name"
                                value={task.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles['modal-body-input-field']}>
                            <div>Description</div>
                            <Input
                                name="description"
                                value={task.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Button type="secondary" onClick={addTask} classes={{ button: styles.button }}>Add</Button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default TaskCreateBtn;
