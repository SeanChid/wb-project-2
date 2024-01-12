const ModeButtons = (props) => {

    const {isEditing, changeEditMode, changeNormalMode, handleDelete} = props

    if (isEditing) {
        return (
            <div>
                <button onClick={changeNormalMode}>Cancel</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={changeEditMode}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default ModeButtons