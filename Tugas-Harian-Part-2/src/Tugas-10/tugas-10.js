import React, {Component} from "react"


class Weight extends React.Component {
    render() {
      return <td>{this.props.berat/1000} kg</td>;
    }
  }
class PriceTable extends Component {
    render() {
        let dataHargaBuah = [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
          ]
        return(
            <div class={"price"}>
                <h1>Tabel Harga Buah</h1>
                <table>
                    <tr>
                        <th width ={"300px"} >Nama</th>
                        <th width ={"200px"}>Harga</th>
                        <th width ={"200px"}>Berat</th>
                    </tr>
                    {dataHargaBuah.map (el=> {
                        return(
                        <tr>
                            <td>{el.nama}</td>
                            <td>{el.harga}</td>
                            <Weight berat ={el.berat}/>
                        </tr>
                        )   
                    })}
                </table>
            </div>
        )
    }
}

export default PriceTable