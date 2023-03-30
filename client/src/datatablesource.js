export const userColumns = [
    { field: "id", headerName: "ID", width: 70 }, 
    {
        field: "user", headerName:"User", width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImage">
                <img className="cellImage" src={params.row.image} alt="avatar" />
                {params.row.username}
            </div>
        )
    },
    
},
{
    field: "email",
    headerName: "Email",
    width: 230
},
{
    field: "age",
    headerName: "Age",
    width: 100
},

{
    field: "status",
    headerName: "Status",
    width: 200,
    RenderCell:(params) => {
        return (
            <div class={`cellWithStatus ${params.row.status}` }>{params.row.status}</div>
        )
    }
},
];

export const userRows = [
    {
        id: 1, 
        username: "Snow",
        image: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress",
        status: "active",
        email: "snow@gmail.com",
        age: 35

    },
    {
        id: 2, 
        username: "Snow",
        image: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress",
        status: "passive",
        email: "snow@gmail.com",
        age: 35

    },
    {
        id: 3, 
        username: "Snow",
        image: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress",
        status: "pending",
        email: "snow@gmail.com",
        age: 35

    }

]