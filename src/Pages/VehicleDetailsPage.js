import { useParams } from 'react-router-dom';

function VehicleDetailsPage()
{
    const { vehicleId } = useParams();

    // Fetch vehicle data using the vehicleId from the URL params

    return (
        <div className='w-full h-full py-[6rem] px-5' >
            <h1>Vehicle Details</h1>
            <p>Vehicle ID: {vehicleId}</p>
            {/* Render vehicle details data here */}
        </div >
    );
}

export default VehicleDetailsPage;
