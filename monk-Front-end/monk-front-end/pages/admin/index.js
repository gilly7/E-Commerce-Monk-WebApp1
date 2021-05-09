import React, {useState} from "react";
import AddProduct from "../../components/AddProduct";
import { ManageProduct } from "../admin/ManageProduct";
import axios from "axios"

export default function Admin({data}) {

  const [determine, setDetermine] = useState("Add")

  const handleAdd = () => {
    setDetermine("Add")
  }
  const handleManage = () => {
    setDetermine("Manage")
  }

  const decideAdminAction = () => {
    switch(determine){
      case "Add":
        return <AddProduct />
      
        case "Manage":
          return <ManageProduct products = {data} />
    }
  }

  return (

// Beginning of the admin Page

    <div className="relative h-screen flex flex-col items-center">

{/* Hero Section of The Admin Page */}

      <div className="bg-gray-800 p-5 text-white text-2xl h-40 w-full">
        <h1 className = "font-normal">Dashboard</h1>
      </div>

{/* End of Hero Section of The Admin Page */}

{/* Hero Section of The Admin Page */}

{/* Main Section of the Admin page */}

      <div className="absolute top-20 bg-gray-200 h-3/4 border-2 border-gray-200 rounded-md w-11/12 shadow-lg">
        <div className="flex h-full">

{/* SideBar of the Admin PAGE */}

          <div className="flex flex-col h-full bg-gray-100 justify-between p-4 ">
            <div>
              <ul className = "space-y-4">
                <li onClick = {handleAdd} className = "cursor-pointer">Add Clothing</li>
                <li onClick = {handleManage} className = "cursor-pointer">Manage Products</li>
                <li>Charts</li>
              </ul>
            </div>
            <div>
              <ul className = "space-y-4">
                <li>Logout</li>
                <li>Account</li>
              </ul>
            </div>
          </div >

{/* End of SideBar of the Main page */}

{/* Main Content of the Admin Page */}

          <div className = "flex-grow max-h-full shadow-md bg-white space-x-4 flex items-center">
            {decideAdminAction() }
          </div>

{/* Main Content of the Admin Page */}

        </div>
      </div>
    </div>

// {/* End of Main Section of The Admin Page */}
  )
}

export const getStaticProps = async(context) => {

  const res = await axios({
    method: "GET",
    url: "http://localhost:9000/getProducts"
  })
  
  const data = res.data
return {
  props: {
     data,
  },
};
}