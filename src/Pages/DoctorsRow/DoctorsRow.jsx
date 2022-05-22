const DoctorsRow = ({doctor, index, refetch}) => {
    const {name, specialty, email, img} = doctor;

    const handelDelete = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert(`The ${name} doctor is deleted`)
                refetch()
            }
        })
    }

    return (
        <tr>
        <th>{ index +1 }</th>
        <td>
        <div class="avatar">
            <div class="w-12 rounded-full">
                <img src={img} alt={name} />
            </div>
            </div>
        </td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td><button onClick={() => handelDelete(email)} className='btn btn-sm btn-error'>Delete</button></td>
    </tr>
    );
};

export default DoctorsRow;