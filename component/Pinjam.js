import { useRouter } from "next/router"
import Link from "next/link"
import Footer from "./Footer"
import CariPeminjam from "./modiv/CariPeminjam"
import axios from 'axios'
import { useState } from 'react'


export default function Pinjam ({pinjam}) {
  const router = useRouter()

  async function hapusPinjam(id,namapeminjam) {
    //setDeleting(true) 
    try {

        const response = await axios.delete(
          `http://localhost:1337/api/peminjamen/${id}`
          );
         
          if (response.data.message) {
            setMessage(response.data.message);
          }

        alert(`Data Peminjaman Dengan Nama : ${namapeminjam} Telah Terhapus`)
    } catch (error) {
        console.log({message : error.message});
    }

    router.push('/peminjaman')
  }

    return (
<div className="content">
  <div className="judul">
    <h2>DATA PEMINJAMAN</h2>
  </div>
  <div className="modiv">
  <Link href="/admin/formTambahPinjam">
    <button id="myBtn" className="btn-tambah" >Tambah Data</button>
  </Link>
      <CariPeminjam/>
  </div>
  <table>
      <tbody>
        <tr>
          <th>NO</th>
          <th>NAMA BARANG</th>
          <th>JUMLAH</th>
          <th>NAMA PEMINJAM</th>
          <th>TANGGAL PEMINJAMAN</th>
          <th>TANGGAL PENGEMBALIAN</th>
          <th>STATUS</th>
          <th colSpan={3}>AKSI</th>
        </tr>
        {
          pinjam.map(pj =>(
            <tr>
              <td></td>
              <td>{pj.attributes.namabarang}</td>
              <td>{pj.attributes.jumlah}</td>
              <td>{pj.attributes.namapeminjam}</td>
              <td>{pj.attributes.tanggalpinjam}</td>
              <td>{pj.attributes.tanggalkembali}</td>
              <td>{pj.attributes.statuss}</td>
          <td><button className="btn-aksi" ><span><Link 
                  href={
                    { pathname : '/admin/formEditPeminjaman', 
                      query : {
                        id : pj.id,
                        namabarang : pj.attributes.namabarang,
                        jumlah : pj.attributes.jumlah,
                        namapeminjam : pj.attributes.namapeminjam,
                        tanggalpinjam : pj.attributes.tanggalpinjam,
                        tanggalkembali : pj.attributes.tanggalkembali,
                        statuss : pj.attributes.statuss
                      }
                    }}>
                   Edit
                   </Link></span></button></td>
          <td>
            <button className="btn-aksi" ><span><Link 
                  href={
                    {  pathname : '/admin/formPengembalian',
                      query : {
                        id : pj.id,
                        namabarang : pj.attributes.namabarang,
                        jumlah : pj.attributes.jumlah,
                        namapeminjam : pj.attributes.namapeminjam,
                        tanggalpinjam : pj.attributes.tanggalpinjam,
                        tanggalkembali : pj.attributes.tanggalkembali,
                        statuss : pj.attributes.statuss
                      }
                    }}>
            kembali</Link></span></button>
          </td>
          <td>
            <button 
              className="btn-aksi" 
              value={pj.attributes.namapeminjam} 
              onClick={(e)=>hapusPinjam(pj.id,pj.attributes.namapeminjam)}>
              <span>Hapus</span></button>
          </td>
        </tr>
          ))
        }
        
    </tbody>
  </table>
  <Footer/>
</div>


    )
}


  




// import { open } from "./modiv/TambahDataPeminjaman"
// export default function Pinjam ({data}) {

//     return (
//     <div className="content">
//       <div className="judul">
//         <h2>PEMINJAMAN</h2>
//       </div>
//       <div className="modiv">
//       <button id="myBtn" className="btn-tambah" >Tambah Data</button>
//       <div className="search">
//       <form action="#">
//         <input type="text" placeholder=" Cari" name="search" />
//         <button className="btn-tambah" href="">Search</button>
//       </form>
//     </div>
//     <table>
//       <tbody><tr>
//           <th>NO</th>
//           <th>NAMA BARANG</th>
//           <th>NAMA PEMINJAM</th>
//           <th>TANGGAL PEMINJAMAN</th>
//           <th>TANGGAL KEMBALI</th>
//           <th>STATUS</th>
          
//           <th>AKSI</th>
//         </tr>
//           {
//             data.map(dt =>(
//               <tr>
//                 <th>{dt.id}</th>
//                 <td>{dt.attributes.tglpinjam}</td>
//                 <td>{dt.attributes.namapeminjam}</td>
//                 <td>{dt.attributes.tglkembali}</td>
//                 <td>{dt.attributes.statuss}</td>
//                 <td>{dt.attributes.namabarang}</td>
//                 <td><button className="btn-aksi" onClick={open}><a href=""><i class="fa-solid fa-pen-to-square"></i> Edit</a></button></td>
//                 <td><button className="btn-aksi"><a href=""><i class="fa-solid fa-arrows-rotate"></i></a></button></td>
//               </tr>
//             ))
//           }

//       </tbody>
//     </table>
//   </div>
// </div>
//     )
// }
