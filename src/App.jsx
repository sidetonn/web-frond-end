import {useEffect, useState} from "react";

const App = () => {
    const [itemTypes, setItemTypes] = useState()

    useEffect( () => {
        fetch('http://localhost:5292/api/ItemType')
                .then(res => res.json())
                .then(data => {
                   setItemTypes(data)
                })
                .catch(err => err)
    }, [])

    console.log(itemTypes);



   return(
        <div className="container">
            <div className="row bg-secondary text-white py-3">
                <div className="col-12">
                    <p className="m-0">Get all Item Types</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Note</th>
                                <th width="200px" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemTypes?.map(itemType => {
                                return (<tr key={itemType.id}>
                                    <td>{itemType.id}</td>
                                    <td>{itemType.name}</td>
                                    <td>{itemType.image}</td>
                                    <td>{itemType.note}</td>
                                    <td className="text-center">
                                        <button className="btn btn-primary me-2">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>)
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
   )

}

export default App;