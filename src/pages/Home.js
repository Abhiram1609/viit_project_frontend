import React from "react"

import Table from "../Home componets/Table"
import search from "../IMG/search.svg"
import Filters from "../Home componets/Filters"
import Carousel2 from "../Home componets/Carousel2"
import NavbarCustom from "../Home componets/Navbar_custom"


export default function Home() {
    return (
        <div className="home">
            <NavbarCustom />
            {/* <Carousel2 /> */}
            <Filters />

            <div className="or">
                -------------------------------OR-------------------------------
            </div>

            <div className="search">
                <form className="search-bar">
                    <input type="text" placeholder="Search here" />
                </form>
                <img src={search} alt="" />
            </div>
            <div>
                <Table></Table>
            </div>
        </div>
    )
}