import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import {
  Sidebar,
  SidebarHeader,
} from "../../Components/UserPanel/Sidebar/Sidebar";

import "./Index.css";
import TopBar from "../../Components/TopBar/TopBar";
import Navbar from "../../Components/NAvbar/Navbar";

export default function Index() {
  return (
    <>
      <TopBar />
      <Navbar />

      <section class="content">
        <SidebarHeader />

        <div class="content-main">
          <div class="container  mt-0 px-8 md:px-4 lg:px-10 mx-auto">
            <div class="lg:flex">
              <Sidebar className={"hidden"} />
              <div className="lg:w-3/4">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
