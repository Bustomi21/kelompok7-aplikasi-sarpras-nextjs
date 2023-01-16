import { useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";

export default function TambahDataPeminjaman(){
  const [namabarang, setNamaBarang] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [namapeminjam, setNamaPeminjam] = useState('');
  const [tanggalpinjam, setTanggalPinjam] = useState('');
  const [tanggalkembali, setTanggalKembali] = useState('');
  const [statuss, setStatuss] = useState('');
  
  

     async function addData(e){
      e.preventDefault()
        try {
          
            axios
                .post("http://localhost:1337/api/peminjamen", {
                  "data":{
                    namabarang : namabarang,
                    jumlah : jumlah,
                    namapeminjam : namapeminjam,
                    tanggalpinjam : tanggalpinjam,
                    tanggalkembali : tanggalkembali,
                    statuss : statuss,
                    
                   }
                })

                .then(response => {
                    console.log(response);
                });

           
            alert("Data Peminjaman Berhasil Ditambahkan")
            Router.push('/peminjaman')
            //clearInput()
        } catch (e) {
            throw Error(e.message)
        }

        const clearInput = () => {
          setNamaBarang('')
          setJumalah('')
          setNamaPeminjam('')
          setTanggalPinjam('')
          setTanggalKembali('')
          setStatuss('')
          
      }

    }
    return (
      <div className="kotak">
  <div className="header-fom">
    <h1>FORM TAMBAH DATA PEMINJAMAN</h1>
  </div>
  <div className="main-fom">
    <form>
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>Nama Barang :</label>
        <input type="text" id="namabarang" placeholder="Masukan Nama Barang" value={namabarang} onChange={(e)=>setNamaBarang(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>Jumlah :</label>
        <input type="text" id="jumlah" placeholder="Masukan Jumlah Barang" value={jumlah} onChange={(e)=>setJumlah(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>NamaPeminjam :</label>
        <input type="text" id="namapeminjam" placeholder="Masukan Nama Peminjam" value={namapeminjam} onChange={(e)=>setNamaPeminjam(e.target.value)} />
      </div><br />
      <div className="date-fom">
        <label style={{display: 'inline-block', width: 170}}>Tanggal Peminjaman :</label>
        <input type="date" id="tanggalpinjam" placeholder="Masukkan Tanggal Peminjaman" value={tanggalpinjam} onChange={(e)=>setTanggalPinjam(e.target.value)} />
      </div><br />
      <div className="date-fom">
        <label style={{display: 'inline-block', width: 170}}>Tanggal Pengembalian :</label>
        <input type="date" id="tanggalkembali" placeholder="Masukan Tanggal pangembalian" value={tanggalkembali} onChange={(e)=>setTanggalKembali(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>Status :</label>
        <input type="text" id="statuss" placeholder="Masukan Status Barang (Dipinjam / Dikembalikan)" value={statuss} onChange={(e)=>setStatuss(e.target.value)} />
      </div><br />
      <button  className="submit" type="button" onClick={addData} value="Simpan">Submit</button>
    </form>
  </div>
</div>

    )
}





