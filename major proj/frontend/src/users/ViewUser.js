import React from 'react'

export default function ViewUser(){
    return(

    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
           <h2 className='text-center m-4'>User Details</h2>
           <div className='card'>
            <div className='card-header'>
                Details of user id:
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Name:</b>

                    </li>
                    <li className='list-group-item'>
                        <b>UserName:</b>
                        
                    </li>
                    <li className='list-group-item'>
                        <b>Email:</b>
                        
                    </li>
                </ul>
            </div>
           </div>
           <Link className='btn btn-primary my-2' to={('/')}>Back to Home</Link>
    </div>
    </div>
    </div>
  );
}

