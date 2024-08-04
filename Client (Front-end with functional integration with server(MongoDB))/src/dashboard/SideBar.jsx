import { Sidebar, SidebarItem } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { IoMdHome } from "react-icons/io"
import { MdSpaceDashboard } from "react-icons/md";
import userImg from "../assets/person1(1).png";

const SideBar = () => {
  return (
    <Sidebar className="border-4  border-[#15121F] m-1  rounded-lg h-[100%]">
      <Sidebar.Logo href="#" img={userImg} imgAlt="" >
        Varun Agarwal
      </Sidebar.Logo>
        <Sidebar.ItemGroup className="bg-[#15121F] rounded-lg">
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <Sidebar.Item
            href="/admin/dashboard"
            className="  text-white hover:bg-[#1512F] hover:text-red-700"
          >
            <div className="flex items-center">
              <MdSpaceDashboard className="mr-2 text-2xl -ml-2" />
              <h2>Dashboard</h2>
            </div>
          </Sidebar.Item>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            className=" text-white hover:bg-[#1512F] hover:text-red-700"
          >
           <div className="flex items-center">
              <HiOutlineCloudUpload className="mr-2 text-2xl -ml-2" />
              <h2>Upload Creation</h2>
            </div>
          </Sidebar.Item>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <Sidebar.Item
            href="/admin/dashboard/manage"

            className="text-white hover:bg-[#1512F] hover:text-red-700"
          >
            <div className="flex items-center">
              <HiInbox className="mr-2 text-2xl -ml-2" />
              <h2>Manage Creations</h2>
            </div>
          </Sidebar.Item>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <Sidebar.Item
            href="/marketplace"
            className="text-white hover:bg-[#1512F] hover:text-red-700"
          >
            <div className="flex items-center">
              <HiShoppingBag className="mr-2 text-2xl -ml-2" />
              <h2>Marketplace</h2>
            </div>
          </Sidebar.Item>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <Sidebar.Item
            href="/"
            className="text-white hover:bg-[#1512F] hover:text-red-700"
          >
            <div className="flex items-center">
              <IoMdHome className="mr-2 text-2xl -ml-2" />
              <h2>Home</h2>
            </div>
          </Sidebar.Item>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <Sidebar.Item
            href="#"
            className="text-white hover:bg-[#1512F] hover:text-red-700"
          >
            <div className="flex items-center">
              <HiArrowSmRight className="mr-2 text-2xl -ml-2" />
              <h2>Sign in </h2>
            </div>
          </Sidebar.Item>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <Sidebar.Item
            href="#"

            className="text-white hover:bg-[#1512F] hover:text-red-700"
          >
         <div className="flex items-center">
              <HiArrowSmLeft className="mr-2 text-2xl -ml-2" />
              <h2>Log Out </h2>
            </div>
          </Sidebar.Item>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
          <SidebarItem className="bg-[#15121F] hover:bg-[#1512F]"></SidebarItem>
        </Sidebar.ItemGroup>
     
    </Sidebar>
  );
};

export default SideBar;
