import React from "react"

import Table from "../Home componets/Table"
import search from "../IMG/search.svg"
import Filters from "../Home componets/Filters"

import NavbarCustom from "../Home componets/Navbar_custom"


export default function Home() {
    return (
        <div className="home">
            <NavbarCustom />
            <Filters />
            {/* <Table></Table> */}
        </div>
    )
}