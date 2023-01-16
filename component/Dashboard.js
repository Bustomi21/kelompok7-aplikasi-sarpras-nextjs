import Footer from "./Footer";
import Link from "next/link";
import Cookies from "js-cookie";


export default function Dashboard(){
// shortcut

// document.getElementById.onkeydown = function(teziger){
//    switch(teziger.keyCode){
//       case 13:   
//       alert('Berhasil!');
//       break;

//       case 8:    
//       window.location='dataBarang';
//       break;
//    }
//    teziger.preventDefault();    
//  }
  return (
    

<div className="content">
  <h2>DASHBOARD</h2>
  <div className="card">
    <div href className="card-item">
      <h3>Data Barang</h3>
      <h1>45</h1>
      <Link href="/dataBarang"><p>Lihat Selengkapnya</p></Link>
    </div>
    <div href className="card-item" style={{backgroundColor: '#38E54D'}}>
      <h3>Peminjaman</h3>
      <h1>32</h1>
      <Link href="/peminjaman"><p>Lihat Selengkapnya</p></Link>
      
    </div>
    <div href className="card-item" style={{backgroundColor: '#FF8B8B'}}>
      <h3>Laporan</h3>
      <h1>12</h1>
      <Link href="/laporan"><p>Lihat Selengkapnya</p></Link>
    </div>
  </div>
  <Footer/>
</div>
  )
}
