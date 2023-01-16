import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import CariBarang from './modiv/CariBarang'
import Footer from './Footer'


export default function Barang ({data}) {
  const [message , setMessage] = useState(false)
  const router = useRouter()

  async function hapusBarang(id,kdbarang) {
    //setDeleting(true) 
    try {

        const response = await axios.delete(
          `http://localhost:1337/api/data-barangs/${id}`
          );
         
          if (response.data.message) {
            setMessage(response.data.message);
          }

        alert(`Barang dengan Kode ${kdbarang} telah terhapus`)
    } catch (error) {
        console.log({message : error.message});
    }

    router.push('/dataBarang')
  }


    return (
<div className="content">
  <div className="judul">
    <h2>DATA BARANG</h2>
  </div>
  <div className="modiv">
    <Link href="/admin/formTambahBarang">
      <button id="myBtn" className="btn-tambah" >Tambah Data</button>
    </Link>
    <CariBarang/>  
  </div>
  <table>
      <tbody>
        <tr>
          <th>NO</th>
          <th>KODE BARANG</th>
          <th>NAMA BARANG</th>
          <th>JUMLAH BARANG</th>
          <th>KONDISI</th>
          {/* <th>STATUS</th> */}
          <th>KETERANGAN</th>
          <th colSpan={2}>AKSI</th>
        </tr>
        {
          data.map((dt,idx) =>(
            <tr key={idx}>
              <td></td>
              <td>{dt.attributes.kdbarang}</td>
              <td>{dt.attributes.barang}</td>
              <td>{dt.attributes.jumlah}</td>
              <td>{dt.attributes.kondisi}</td>
              {/* <td>{dt.attributes.status}</td> */}
              <td>{dt.attributes.keterangan}</td>
              <td><button className="btn-aksi" ><span><Link 
                      href={
                        { pathname : '/admin/formEditBarang', 
                          query : {
                            id : dt.id,
                            kdbarang : dt.attributes.kdbarang,
                            barang : dt.attributes.barang,
                            jumlah : dt.attributes.jumlah,
                            kondisi : dt.attributes.kondisi,
                            // status : dt.attributes.status,
                            keterangan : dt.attributes.keterangan
                          }
                        }}>
                      {/* <i class="fa-solid fa-pen-to-square"></i> */}
                      Edit
                      </Link></span></button>
              </td>
              <td>
              <button className="btn-aksi" value={dt.attributes.kdbarang} onClick={(e)=>hapusBarang(dt.id, dt.attributes.kdbarang)} ><span>Hapus</span></button>
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


  