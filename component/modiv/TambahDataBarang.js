import { useState } from "react";
import axios from "axios";
import Router, { useRouter } from 'next/router';

export default function TambahDataBarang(){
  const [kdbarang, setKodeBarang] = useState('');
  const [barang, setNamaBarang] = useState('');
  const [jumlah, setJumlahBarang] = useState('');
  const [kondisi, setKondisi] = useState('');
  // const [status, setStatus] = useState('');
  const [keterangan, setKeterangan] = useState('');
  

     async function addData(e){
      e.preventDefault()
        try {
          
            axios
                .post("http://localhost:1337/api/data-barangs", {
                  "data":{
                    kdbarang : kdbarang,
                    barang : barang,
                    kondisi : kondisi,
                    // status :status,
                    keterangan : keterangan,
                    jumlah :jumlah
                   }
                })

                .then(response => {
                    console.log(response);
                });

           
            alert("Penambahan Data Sukses")
            Router.push('/dataBarang')
            //clearInput()
        } catch (e) {
            throw Error(e.message)
        }

        const clearInput = () => {
          setKodeBarang('')
          setNamaBarang('')
          // setStatus('')
          setKondisi('')
          setKeterangan('')
          setJumlahBarang('')
      }

    }
    return (
      <div className="kotak">
  <div className="header-fom">
    <h1>FORM TAMBAH DATA BARANG</h1>
  </div>
  <div className="main-fom">
    <form>
    <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Kode Barang :</label>
        <input type="text" name="kdbarang" placeholder="Masukan Kode Barang" value={kdbarang} onChange={(e)=>setKodeBarang(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Nama Barang :</label>
        <input type="text" name="nmbarang" placeholder="Masukan Nama Barang" value={barang} onChange={(e)=>setNamaBarang(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Jumlah Barang :</label>
        <input type="text" name="jumlah" placeholder="Masukkan JUmalah Barang" value={jumlah} onChange={(e)=>setJumlahBarang(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Kondisi :</label>
        <input type="text" name="kondisi" placeholder="Masukan Kondisi Barang" value={kondisi} onChange={(e)=>setKondisi(e.target.value)} />
      </div><br />
      {/* <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Status :</label>
        <input type="text" name="status" placeholder="Masukkan status (Di Pinjam / Tersedia)" value={status} onChange={(e)=>setStatus(e.target.value)} />
      </div><br /> */}
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Keterangan :</label>
        <input type="text" name="keterangan" placeholder="Masukan Keterangan" value={keterangan} onChange={(e)=>setKeterangan(e.target.value)} />
      </div><br />
      <button  className="submit" type="button" onClick={addData} value="Simpan">Submit</button>
    </form>
  </div>
</div>

    )
}
