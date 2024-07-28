"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button/Button";

const BoardCreateBtn = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    };

    return (
        <>
            <Button onClick={toggleModal}>Create</Button>
            {showModal && <Modal show={showModal} onClose={toggleModal} />}
        </>
    );
};

export default BoardCreateBtn;
