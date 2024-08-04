import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineLifebuoy } from "react-icons/hi2";
const Manage = () => {
  const [allArts, setAllArts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-arts")
      .then((res) => res.json())
      .then((data) => setAllArts(data));
  }, [])
  //to delete
  const handleDelete=(id)=>{
    fetch(`http://localhost:5000/art/${id}`,{
      method:"DELETE",
    }).then((res) => res.json()).then(data=>alert("Art is deleted"))
    //setAllArts(data);
  }

  return (
    <div className=" px-4 my-12 w-full h-full">
    <div className="flex flex-col items-center gap-5">
    <div className="flex items-center">
        <HiOutlineLifebuoy className="text-9xl text-red-700 font-bold -mb-4" />
          <div className="text-9xl font-extrabold text-red-700">Artistry Atelier</div>
        </div>
      <h2 className="mb-8 text-5xl font-bold text-[#15121F]">Manage Your Arts</h2>
      {/* manageing table*/}
      <Table className="w-[1200px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Art Title</Table.HeadCell>
          <Table.HeadCell>Artist Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Size</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage Creations</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allArts.map((art,index)=> <Table.Body className="divide-y" key={art._id}>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index +1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {art.art_title}
            </Table.Cell>
            <Table.Cell>{art.artist_name}</Table.Cell>
            <Table.Cell>{art.category}</Table.Cell>
            <Table.Cell>{art.Size}</Table.Cell>
            <Table.Cell>{art.price}</Table.Cell>
           
            <Table.Cell className="flex">
              <Link className="font-medium text-red-700 hover:underline mr-5" to={`/admin/dashboard/edit/${art._id}`}>
              <p>Edit</p>
              </Link>
                
              <button onClick={()=> handleDelete(art._id)} className="bg-red-700 px-4 py-1 font-semibold text-white rounded-sm hover:bg-[#15121F]">Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
       
      </Table>
    </div>
    
    </div>
  );
};

export default Manage;
