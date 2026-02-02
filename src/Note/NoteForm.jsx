import { useState } from "react";

export default function NoteForm({onAddNote}) {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleChange2(b) {
        setText2(b.target.value);
    }

    function handleChange3(c) {
        setText3(c.target.value);
    }

    function handleClick() {
        setText('');
        setText2('');
        setText3('');
        onAddNote(text, text2, text3);
    }

    return (
        <>
            <input placeholder="Add Note" value={text} onChange={handleChange}/>
            <input placeholder="Add Note 2" value={text2} onChange={handleChange2}/>
            <input placeholder="Add Note 3" value={text3} onChange={handleChange3}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}