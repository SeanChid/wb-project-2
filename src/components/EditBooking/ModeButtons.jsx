const ModeButtons = (props) => {

    const {isEditing, changeEditMode, changeNormalMode, submitChange} = props

    if (isEditing) {
        return (
            <div>
                <button onClick={submitChange}>Submit</button>
                <button onClick={changeNormalMode}>Cancel</button>
            </div>
        )
    } else {
        return <button onClick={changeEditMode}>Edit</button>
    }
}

export default ModeButtons