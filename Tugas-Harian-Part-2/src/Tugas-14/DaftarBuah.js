import React from "react"
import {DaftarBuahProvider} from "./DaftarBuahContext"
import DaftarBuahList from "./DaftarBuahList"
import DaftarBuahForm from "./DaftarBuahForm"
import "./DaftarBuah.css"

const Tugas14 = () =>{
  return(
    <>
      <DaftarBuahProvider>
        <DaftarBuahList/>
        <DaftarBuahForm/>
      </DaftarBuahProvider>
    </>
  )
}

export default Tugas14