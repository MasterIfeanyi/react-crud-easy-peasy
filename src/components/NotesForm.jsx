import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
const NotesForm = () => {
    const [title, setTitle] = useState("");
    const [err, setErr] = useState(false);
    const addNote = useStoreActions(actions => actions.addNote);
    const handleSubmit = e => {
        e.preventDefault();
        if (title.trim() === "") {
            setErr(true);
        } else {
            setErr(false);
            addNote({
                title,
                completed: false
            });
        }
        setTitle("");
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="d-flex py-5 form-inline">
                <input
                    type="text"
                    placeholder="Add Todo Title"
                    value={title}
                    className="form-control mr-sm-2 form-control-lg"
                    onChange={e => setTitle(e.target.value)}
                />
                <button type="submit" className="btn btn-success btn-lg rounded">
                    Add Note
                </button>
            </form>
            {err && (
                <div className="alert alert-dismissible alert-danger">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        onClick={() => setErr(false)}
                    >
                        &times;
                    </button>
                    <strong>Oh oh!</strong>{" "}
                    <span className="alert-link">please add a valid text</span>
                </div>
            )}
        </>
    );
};
export default NotesForm;