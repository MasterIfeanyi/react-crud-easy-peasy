import React from "react";
import { useStoreActions } from "easy-peasy";
const Note = ({ note }) => {
    const { completed } = note;
    const removeNote = useStoreActions(actions => actions.removeNote);
    const toggleNote = useStoreActions(actions => actions.toggleNote);
    return (
        <li className="d-flex justify-content-between align-items-center mb-2">
            <span
                className="h2 mr-2"
                style={{
                    textDecoration: completed ? "line-through" : "",
                    cursor: "pointer"
                }}
                onClick={() => toggleNote(note.id)}
            >
                {note.title}
            </span>
            <button
                onClick={() => removeNote(note.id)}
                className="btn btn-danger btn-lg"
            >
                &times;
            </button>
        </li>
    );
};
export default Note;