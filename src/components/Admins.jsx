import React from "react";
import Img from "../assets/IMG-20230509-WA0021-removebg-preview 1.png";
import { GiCloverSpiked } from "react-icons/gi";
import { FiUsers, FiLogOut } from "react-icons/fi";
import { LiaUsersSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Admins = () => {
  return (
    <div>
        
      <div className="flex flex-row bg-[#F4F4F4] h-[100vh] w-[100vw] overflow-hidden">
        <section className="bg-[#158F8F] w-[300px] h-[100vh]">
          <div className="">
            <img className=" h-[70px] my-8 flex mx-auto" src={Img} alt="img" />
          </div>
          <hr className="mx-8 w-[240px]" />
          <div className="my-5 flex flex-col text-white  mt-10 space-y-4 w-full box-border">
            <Link to="/overview" className="flex items-center  px-20 ">
              <GiCloverSpiked className="mr-3" />
              overview
            </Link>
            <Link to="/users" className="flex items-center px-20 ">
              <FiUsers className="mr-3" />
              Users
            </Link>
            <Link
              to="/admins"
              className="flex items-center  text-black border bg-[#51FFFF] w-full border-none py-4 px-20 "
            >
              <LiaUsersSolid className="mr-3" />
              Admins
            </Link>
            <Link to="/signup" className="flex items-center px-20 ">
              <FiLogOut className="mr-3" />
              Logout
            </Link>
          </div>
        </section>
        {/* BODY OF OVERVIEW */}
        <section>
          {/* NAVBAR SECTION */}
          <nav className="h-[80px] bg-white w-[1200px] flex justify-between px-10 items-center ">
            <div className="text-[#189393] font-bold">Admins</div>

            <div className="mr-12 font-thin text-sm flex items-center">
              <div className="bg-white border rounded-full h-[50px] w-[50px] flex justify-center items-center my-auto mr-4">
                <FiUsers className="text-[#074F4F]" />
              </div>
              <div>
                <div className="font-bold ">Rex Stephens</div>
                <div>Administrator</div>
              </div>
            </div>
          </nav>

          {/* DASHBOARDS FOR NUMBER OF USERS AND ADMINS */}
          <div className="flex space-x-7 mx-8 text-white">
            {/* SEARCH SECTION */}
            <div className="bg-[#189393] w-full h-[60px] mr-4 flex justify-between items-center mt-10 px-4">
              <div className="flex items-center border bg-white ml-5 text-gray-400 p-3">
                <CiSearch/>
                <input
                  className="outline-none ml-2"
                  type="search"
                  placeholder="search for user"
                />
              </div>
              <button className="mr-4 bg-white flex text-black  py-1 rounded-sm justify-between w-[120px] px-2">
                <p>All</p>
                <FaSortDown className="ml-5" />
              </button>
            </div>
          </div>
          {/* LIST OF ADMINS */}

          <section className="mx-8 my-1 flex space-x-6">
            <div className="">
              <p className="text-2xl font-bold bg-white p-4">Admins Name</p>
              <div className="w-[1100px] h-[70px] bg-white mt-1 items-center">
                {/* EACH USER */}
                <div className="flex justify-between p-4 items-center ">
                  <p className="flex items-center gap-x-4">
                    <div className="border rounded-xl bg-white w-[40px] h-[40px] flex items-center justify-center">
                      <FiUsers />
                    </div>
                    Adelanke Adeleke
                  </p>
                  <Link className="bg-[#51FFFF] text-black p-1 rounded-lg">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </section>


        </section>
      </div>
    </div>
  );
};

export default Admins;
