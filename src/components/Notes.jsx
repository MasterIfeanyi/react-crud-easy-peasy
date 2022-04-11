import React from "react";
import { useStoreState } from "easy-peasy";
import Note from "./Note";
const Notes = () => {
    const notes = useStoreState((state) => state.notes);
    return (
        <>
            <h1 className="display-4">Notes</h1>
            {notes.length === 0 ? (
                <h2 className="display-3 text-capitalize">Please add note</h2>
            ) : (
                notes.map((note) => <Note key={note.id} note={note} />)
            )}
        </>
    );
};
export default Notes;