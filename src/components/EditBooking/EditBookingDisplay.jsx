import { useNavigate, useLocation } from 'react-router-dom'
import EditBookingHeader from './EditBookingHeader.jsx'
import EditBookingRow from './EditBookingRow.jsx'

const EditBookingDisplay = () => {

    const location = useLocation()
    const {booking} = location.state



    return (
        <div>
            <table>
                <thead>
                    <EditBookingHeader />
                </thead>

                <tbody>
                    <EditBookingRow booking={booking}/>
                </tbody>
            </table>
        </div>
    )
}

export default EditBookingDisplay