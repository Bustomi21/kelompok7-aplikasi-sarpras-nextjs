import { useRouter } from "next/router"
import Footer from "./Footer"
import CariLaporan from "./modiv/CariLaporan"
import React, {useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

export default function Laporan ({laporan}) {
  const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Data Laporan',
        sheet: 'Laporan Peminjaman'
    })

  const router = useRouter
    return (
      <div className="content">
      <div className="judul">
        <h2>LAPORAN</h2>
      </div>
      <div className="modiv">
        <CariLaporan/>  
      </div>
      <table ref={tableRef}>
         <tbody>
         <tr>
           <th>NO</th>
           <th>NAMA BARANG</th>
           <th>JUMLAH</th>
           <th>NAMA PEMINJAM</th>
           <th>TANGGAL PEMINJAMAN</th>
           <th>TANGGAL PENGEMBALIAN</th>
           <th>STATUS</th>
           <th>KETERANGAN</th>
         </tr>
         {
             laporan.map(lpr =>(
             <tr>
               <td></td>
               <td>{lpr.attributes.namabarang}</td>
               <td>{lpr.attributes.jumlah}</td>
               <td>{lpr.attributes.namapeminjam}</td>
               <td>{lpr.attributes.tanggalpinjam}</td>
               <td>{lpr.attributes.tanggalkembali}</td>
               <td>{lpr.attributes.statuss}</td>
               <td>{lpr.attributes.keterangan}</td>
         </tr>
           ))
         }
    
     </tbody>
      </table>
      <button className="export" onClick={onDownload}> Export ke excel </button>
      <Footer/>
    </div>





  //   <div className="content">
  //     <div className="judul">
  //       <h2>LAPORAN</h2>
  //       <div className="modiv">
  //       <CariLaporan/>
  //       </div>
        
  //     </div>
  //       <div className="data">
  //       <h3>LAPORAN PEMINJAMAN</h3>
  //       <h4>MAN 1 BANYUWANGI</h4>
  //       <table className="table-laporan">
  //     <tbody>
  //       <tr>
  //         <th>NO</th>
  //         <th>NAMA BARANG</th>
  //         <th>JUMLAH</th>
  //         <th>NAMA PEMINJAM</th>
  //         <th>TANGGAL PEMINJAMAN</th>
  //         <th>TANGGAL PENGEMBALIAN</th>
  //         <th>STATUS</th>
  //         <th>KETERANGAN</th>
  //       </tr>
  //       {
  //           laporan.map(lpr =>(
  //           <tr>
  //             <td></td>
  //             <td>{lpr.attributes.namabarang}</td>
  //             <td>{lpr.attributes.jumlah}</td>
  //             <td>{lpr.attributes.namapeminjam}</td>
  //             <td>{lpr.attributes.tanggalpinjam}</td>
  //             <td>{lpr.attributes.tanggalkembali}</td>
  //             <td>{lpr.attributes.statuss}</td>
  //             <td>{lpr.attributes.keterangan}</td>
  //       </tr>
  //         ))
  //       }
        
  //   </tbody>
  // </table>
  
  //       </div>
  //       <Footer/>
  //   </div>
    )
}