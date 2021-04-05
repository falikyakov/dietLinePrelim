import React, { useEffect, useState } from 'react'

const UserDetails = () => {

    useEffect(() => {
        fetchUser();
    }, [])

    const [details, setDetails] = useState({});

    const fetchUser = async () => {
        const details = await fetch(`https://api.nal.usda.gov/fdc/v1/food/${match.params.fdcid}?api_key=sSF9MFj2ctRScm5GhVsP3vjkkR2Vd6SfFf52afxP`);
        const data = await details.json();
        setitem(data);
        console.log(data);
        console.log(item);
    }

    return (
        <div>

        </div>
    )
}

export default UserDetails;
