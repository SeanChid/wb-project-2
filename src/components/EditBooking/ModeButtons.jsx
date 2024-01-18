const ModeButtons = (props) => {

    const {isEditing, changeEditMode, changeNormalMode, handleDelete} = props

    if (isEditing) {
        return (
            <div>
                <button className='btn btn-primary' onClick={changeNormalMode}>Cancel</button>
            </div>
        )
    } else {
        return (
            <div>
                <button className='btn btn-primary' onClick={changeEditMode}>Edit</button>
                <button className='btn btn-primary' onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default ModeButtons