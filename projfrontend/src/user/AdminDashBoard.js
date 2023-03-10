import React from 'react'
import Base from "../core/Base"
import { isAuthenticated } from '../auth/helper' 
import { Link } from 'react-router-dom'


const AdminDashBoard = () =>{


    const adminLeftSide=()=>{
        //
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">
                    Admin Navigation
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-link text-success">
                            Create categories
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" className="nav-link text-success">
                            Manage categories
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product" className="nav-link text-success">
                            Create Product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" className="nav-link text-success">
                            Manage product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/orders" className="nav-link text-success">
                            Manage Orders
                        </Link>
                    </li>
                </ul>
            </div>
        )
        }
        
        const adminRightSide=()=>{
            return(
                <div className="card mb-4">
                    <h4 className="card-header">Admin information</h4>
                    <ul className="list-group">
                        <li className="list-group">
                           <p> <span className="badge badge-success mr-2">
                                Name:
                            </span>{name}
                            </p>
                        </li>
                        <li className="list-group">
                           <p> <span className="badge badge-success mr-2">
                                Email:
                            </span>{email}
                            </p>
                        </li>
                        <li className="list-group">
                           <span className='badge badge-danger'>Admin Area</span>
                        </li>
                    </ul>
                </div>
            )
        //
        }


const{user:{name,email,role}} = isAuthenticated()

  return (
    <Base title="Welcome to admin area" 
    description="Manage all of your products here"
    className="container bg-success p-4">
        <div className="row">
            <div className="col-3">
            {adminLeftSide()}
            </div>
            <div className="col-9">
            {adminRightSide()}
            </div>
        </div>
 
  
    </Base>
  )
}



export default AdminDashBoard