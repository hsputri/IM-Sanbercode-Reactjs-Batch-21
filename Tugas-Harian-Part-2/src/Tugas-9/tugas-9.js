import React, {Component} from "react"

class PurchaseForm extends Component {
    render() {
        return(
        <div class={"form"}>
            <div>
                <h1>Form Pembelian Buah</h1>
            </div>
            <div>
                <form>
                    <table>
                      <tr>
                        <th>Nama Pelanggan</th>
                        <td><input type="text"></input></td>
                      </tr>
                      <tr>
                        <th>Daftar Item</th>
                        <td>
                            <input type="checkbox"></input>
                            <label for="">Semangka</label><br></br>
                            <input type="checkbox"></input>
                            <label for="">Jeruk</label><br></br>
                            <input type="checkbox"></input>
                            <label for="">Nanas</label><br></br>
                            <input type="checkbox"></input>
                            <label for="">Salak</label><br></br>
                            <input type="checkbox"></input>
                            <label for="">Anggur</label>
                        </td>
                      </tr>
                    </table>
                </form>
                <button>Kirim</button>
            </div>
        </div>
        )
    }
}

export default PurchaseForm