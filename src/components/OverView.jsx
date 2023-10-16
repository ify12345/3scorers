import React from "react";
import Img from "../assets/IMG-20230509-WA0021-removebg-preview 1.png";
import { GiCloverSpiked } from "react-icons/gi";
import { FiUsers, FiLogOut } from "react-icons/fi";
import { LiaUsersSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const OverView = () => {
  return (
    <div className="flex flex-row bg-[#F4F4F4] h-[100vh] w-[100vw] overflow-hidden">
      <section className="bg-[#158F8F] w-[300px] h-[100vh]">
        <div className="">
          <img className=" h-[70px] my-8 flex mx-auto" src={Img} alt="img" />
        </div>
        <hr className="mx-8 w-[240px]" />
        <div className="my-5 flex flex-col text-white  mt-10 space-y-4 w-full box-border">
          <Link  to="/overview" className="flex items-center  text-black border bg-[#51FFFF] w-full border-none px-20 py-4">
            <GiCloverSpiked className="mr-3" />
            Overview
          </Link>
          <Link to="/users" className="flex items-center  px-20 ">
            <FiUsers className="mr-3"/>
            Users
          </Link>
          <Link to="/admins" className="flex items-center px-20 ">
            <LiaUsersSolid className="mr-3" />
            Admins
          </Link>
          <Link  to="/signup" className="flex items-center px-20 ">
            <FiLogOut className="mr-3" />
            Logout
          </Link>
        </div>
      </section>
      {/* BODY OF OVERVIEW */}
      <section>
        {/* NAVBAR SECTION */}
        <nav className="h-[80px] bg-white w-[1200px] flex justify-between px-10 items-center ">
          <div className="text-[#189393] font-bold">Overview</div>

          <div className="mr-12 font-thin text-sm">
            <div className="font-bold ">Rex Stephens</div>
            <div>Administrator</div>
          </div>
        </nav>

        {/* DASHBOARDS FOR NUMBER OF USERS AND ADMINS */}
        <div className="flex space-x-7 m-16 text-white">


          {/* NUMBER OF USERS */}
          <div className="bg-[#074F4F] w-[400px] h-[180px] flex justify-between rounded-2xl">
            <div className="my-8 ml-4 gap-3 font-light">
              <p>TOTAL NUMBER </p>
              <p>OF USERS</p>
              <p className="mt-4 font-bold text-lg">1,000,000</p>
            </div>
            <div className="bg-white rounded-full h-[50px] w-[50px] flex justify-center items-center my-auto mr-4">
              <FiUsers className="text-[#074F4F]" />
            </div>
          </div>

          {/* NUMBER OF ADMINS */}
          <div className="bg-[#0F7575] w-[400px] h-[180px] flex justify-between rounded-2xl">
            <div className="my-8 ml-4 gap-3 font-light">
              <p>TOTAL NUMBER OF</p>
              <p>ADMINS</p>
              <p className="mt-4 font-bold text-lg">970</p>
            </div>
            <div className="bg-white rounded-full h-[50px] w-[50px] flex justify-center items-center my-auto mr-4">
              <LiaUsersSolid className="text-[#074F4F]" />
            </div>
          </div>
        </div>
       {/* LIST OF USERS AND ADMINS */}

       <section className="m-16 flex space-x-6">
        <div className="">
            <p className="text-2xl font-bold">List of Users</p>
            <div className="w-[500px] h-[300px] bg-white mt-3 rounded-lg">
                {/* EACH USER */}
             <div className="flex justify-between p-4 items-center">
                <p className="flex items-center gap-x-4"><div  className="border rounded-xl bg-white w-[40px] h-[40px] flex items-center justify-center"><FiUsers/></div>Adelanke Adeleke</p>
                <Link className="text-[#0F7575]">View Details</Link>
             </div>
            </div>
        </div>

       {/* LIST OF ADMINS */}
        <div className="">
            <p className="text-2xl font-bold">List of Admins</p>
            <div className="w-[500px] h-[300px] bg-white  mt-3 rounded-lg">
                {/* EACH ADMIN */}
             <div className="flex justify-between p-4 items-center">
                <p className="flex items-center gap-x-4"><div className="border rounded-xl bg-white w-[40px] h-[40px] flex items-center justify-center"><FiUsers/></div>Adelanke Adeleke</p>
                <Link className="text-[#0F7575]">View Details</Link>
             </div>
            </div>
        </div>

       </section>








      </section>
    </div>
  );
};

export default OverView;
