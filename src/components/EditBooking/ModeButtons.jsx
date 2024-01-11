const ModeButtons = (props) => {

    const {isEditing, changeEditMode, changeNormalMode} = props

    if (isEditing) {
        return (
            <div>
                <button onClick={changeNormalMode}>Cancel</button>
            </div>
        )
    } else {
        return <button onClick={changeEditMode}>Edit</button>
    }
}

export default ModeButtons