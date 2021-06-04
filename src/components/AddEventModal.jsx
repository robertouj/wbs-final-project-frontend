import React from 'react';
import Modal from 'react-Modal';
import { useState } from 'react';
import Datetime from 'react-datetime';


export default function AddEventModal({isOpen, onClose, onEventAdded}) {

    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }

    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={onClose}>
                <form onSubmit={onSubmit}>
                    <input placeholder='Title' value={title} onChange={e=> setTitle(e.target.value)} />
                    <div>
                        <label>Start Date</label>
                    <Datetime valu={start} onChange={date => setStart(date)} />
                    </div>
                    <div>
                        <label>End Date</label>
                    <Datetime valu={start} onChange={date => setStart(date)} />
                    </div>
                    <button>Add event</button>
                    </form>
            </Modal>
        </div>
    )
}
