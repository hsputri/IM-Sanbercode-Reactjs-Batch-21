import React, {useState, useEffect} from "react"
import axios from "axios"
import "./tugas-13.css"

const DaftarBuah = () =>{
    const [daftarBuah, setDaftarBuah] = useState(null)
    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputWeight, setInputWeight] = useState("0")
    const [ID_FRUIT, setCurrentId] =  useState(null)

    useEffect( () => {
        if (daftarBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            let data = res.data
            setDaftarBuah(data.map(el=> {return {id: el.id, name: el.name, price: el.price, weight: el.weight}}))
          })
        }
      }, [daftarBuah])


    const handleSubmit = (event) =>{
        event.preventDefault()
    
        if (ID_FRUIT === null){
          // untuk create data baru
          axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: inputName, price: inputPrice, weight: inputWeight})
          .then(res => {
              let data = res.data
              setDaftarBuah([...daftarBuah, {id: data.id, name: data.name, price: data.price, weight: data.weight}])
          })
        }else{
          axios.put(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`, {name: inputName, price: inputPrice, weight: inputWeight})
          .then(() => {
              let buah = daftarBuah.find(el=> el.id === ID_FRUIT)
              buah.name= inputName
              buah.price= inputPrice
              buah.weight= inputWeight
              setDaftarBuah([...daftarBuah])
          })      
        }
        setInputName("")
        setCurrentId(null)
        setInputPrice("")
        setInputWeight(0)
      }
    
    const handleChange = (event)=>{
        let typeOfInput = event.target.name
        switch (typeOfInput){
          case "name":
          {
            let inputName = event.target.value
            setInputName(inputName)
            break
          }
          case "price":
          {
            let inputPrice = event.target.value
            setInputPrice(inputPrice)
            break
          }
          case "weight":
          {
            let inputWeight = event.target.value
            setInputWeight(inputWeight)
            break
          }
        default:
          {break;}
        }
    }

    const handleEdit = (event) =>{
        let idBuah = event.target.value
        axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
          let data = res.data
          setInputName(data.name)
          setInputPrice(data.price)
          setInputWeight(data.weight)
          setCurrentId(data.id)
        })
      }

    const handleDelete = (event) =>{
        let idBuah = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`)
        .then(() => {
          let newDaftarBuah = daftarBuah.filter(el=> {return el.id !== idBuah})
          setDaftarBuah(newDaftarBuah)
        })
      }

    return(
        <>
        { daftarBuah !== null && 
            (
            <>
                <h1>Daftar Harga Buah</h1>
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama</th>
                      <th>Harga</th>
                      <th>Berat</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        daftarBuah.map((item, index)=>{
                          return(                    
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{item.name}</td>
                              <td>{item.price}</td>
                              <td>{item.weight/1000} kg</td>
                              <td>
                                <button onClick={handleEdit} value={item.id}>Edit</button>
                                &nbsp;
                                <button onClick={handleDelete} value={item.id}>Delete</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </table>

                {/* Form */}
                <h1>Form Daftar Harga Buah</h1>
                <div style={{width: "50%", margin: "0 auto", display: "block"}}>
                  <div style={{border: "1px solid #aaa", padding: "20px"}}>
                    <form onSubmit={handleSubmit}>
                      <label style={{float: "left"}}>
                        Nama:
                      </label>
                      <input style={{float: "right"}} type="text" required name="name" value={inputName} onChange={handleChange}/>
                      <br/>
                      <br/>
                      <label style={{float: "left"}}>
                        Harga:
                      </label>
                      <input style={{float: "right"}} type="text" required name="price" value={inputPrice} onChange={handleChange}/>
                      <br/>
                      <br/>
                      <label style={{float: "left"}}>
                        Berat (dalam gram):
                      </label>
                      <input style={{float: "right"}} type="number" required name="weight" value={inputWeight} onChange={handleChange}/>
                      <br/>
                      <br/>
                      <div style={{width: "100%", paddingBottom: "20px"}}>
                        <button style={{ float: "right"}}>submit</button>
                      </div>
                    </form>
                  </div>
                </div>
            </>
            )
        }
        
        
        </>
    )
}

export default DaftarBuah