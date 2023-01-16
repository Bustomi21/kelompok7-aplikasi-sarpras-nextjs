import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";


const FormPengembalian= ({data}) => {
    const [_namabarang, setNamaBarang] = useState('');
    const [_namapeminjam, setNamaPeminjam] = useState('');
    const [_jumlah, setJumlah] = useState('');
    const [_tanggalpinjam, setTanggalPinjam] = useState('');
    const [_tanggalkembali, setTanggalKembali] = useState('');
    const [_statuss, setStatuss] = useState('');
    const [_keterangan, setKeterangan] = useState('');

    const router = useRouter();
    const { id, namabarang, namapeminjam, jumlah, tanggalpinjam, tanggalkembali, statuss, keterangan } = router.query;
    console.log(data);
    useEffect(() => {
        if (typeof namabarang == 'string') {
            setNamaBarang(namabarang)
        }
        if (typeof namapeminjam == 'string') {
            setNamaPeminjam(namapeminjam)
        }
        if (typeof jumlah == 'string') {
            setJumlah(jumlah)
        }
        if (typeof tanggalpinjam == 'string') {
            setTanggalPinjam(tanggalpinjam)
        }
        if (typeof tanggalkembali == 'string') {
            setTanggalKembali(tanggalkembali)
        }
        if (typeof statuss == 'string') {
            setStatuss(statuss)
        }
        if (typeof keterangan == 'string') {
            setKeterangan(keterangan)
        }
    }, [id, namabarang, jumlah, namapeminjam, tanggalpinjam, tanggalkembali, statuss, keterangan])
    
    const editData = async (e) => {
        e.preventDefault()
        // setSubmitting(true)
        try {
            axios
                .put(`http://localhost:1337/api/peminjamen/${id}`, {
                  data:{
                    namabarang : _namabarang,
                    jumlah : _jumlah,
                    namapeminjam : _namapeminjam,
                    tanggalpinjam : _tanggalpinjam,
                    tanggalkembali : _tanggalkembali,
                    statuss : _statuss
                  },
                })
                .then(response => {
                    console.log(response);
                })
        } 
        catch (e) {
            //throw Error(e.message)
            console.log({ message: e.message });
        }
        e.preventDefault()
        // setSubmitting(true)
        try {
            axios
            .post("http://localhost:1337/api/laporans", {
                "data":{
                    namabarang : _namabarang,
                    jumlah : _jumlah,
                    namapeminjam : _namapeminjam,
                    tanggalpinjam : _tanggalpinjam,
                    tanggalkembali : _tanggalkembali,
                    statuss : _statuss,
                    keterangan : _keterangan
                  },
                })
                .then(response => {
                    console.log(response);
                });
            // alert("Update Data Sukses")
            // Router.push('/peminjaman')
        } 
        catch (e) {
            //throw Error(e.message)
            console.log({ message: e.message });
        }
        alert(" Data Pengembalian Sukses")
        Router.push('/peminjaman')
    }

    return (
        <div className="kotak">
  <div className="header-fom">
    <h1>FORM PENGEMBALIAN</h1>
  </div>
  <div className="main-fom">
    <form>
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>Nama Barang :</label>
        <input type="text" id="namabarang" value={_namabarang} onChange={(e)=>setNamaBarang(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>NamaPeminjam :</label>
        <input type="text" id="namapeminjam" value={_namapeminjam} onChange={(e)=>setNamaPeminjam(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>Jumlah :</label>
        <input type="text" id="namapeminjam" value={_jumlah} onChange={(e)=>setJumlah(e.target.value)} />
      </div><br />
      <div className="date-fom">
        <label style={{display: 'inline-block', width: 170}}>Tanggal Peminjaman :</label>
        <input type="date" id="tanggalpinjam" value={_tanggalpinjam} onChange={(e)=>setTanggalPinjam(e.target.value)} />
      </div><br />
      <div className="date-fom">
        <label style={{display: 'inline-block', width: 170}}>Tanggal Pengembalian :</label>
        <input type="date" id="tanggalkembali" value={_tanggalkembali} onChange={(e)=>setTanggalKembali(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>Status :</label>
        <input type="text" id="statuss" value={_statuss} onChange={(e)=>setStatuss(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>Keterangan :</label>
        <input type="text" id="keterangan" placeholder="Masukan Keterangan" value={_keterangan} onChange={(e)=>setKeterangan(e.target.value)} />
      </div><br />
      
      <button  className="submit" type="button" onClick={editData} value="Simpan">Submit</button>
    </form>
  </div>
</div>
    )
}
export default FormPengembalian;


// import { useEffect, useState } from "react";
// import Router, { useRouter } from 'next/router';
// import axios from "axios";

// export function edit () {
//     const modal = document.getElementById("myModal");
//       modal.style.display = "block"
//   }
//   export function close () {
//     const modal = document.getElementById("myModal");
//       modal.style.display = "none"
//   }

// const UpdateDataBarang = () => {
//     const [_tanggalpinjam, setTanggalPinjam] = useState('');
//     const [_namapeminjam, setNamaPeminjam] = useState('');
//     const [_tglkembali, setTanggalKembali] = useState('');
//     const [_statuss, setStatuss] = useState('');
//     const [_namabarang, setNamaBarang] = useState('');

//     const router = useRouter();
//     const { kdbarang, barang, jumlah, kondisi, status, keterangan } = router.query;

//     useEffect(() => {
//         if (typeof kdbarang == 'string') {
//             setKodeBarang(kdbarang);
//         }
//         if (typeof barang == 'string') {
//             setNamaBarang(barang)
//         }
//         if (typeof jumlah == 'string') {
//             setJumlahBarang(jumlah)
//         }
//         if (typeof kondisi == 'string') {
//             setKondisi(kondisi)
//         }
//         if (typeof status == 'string') {
//             setStatus(status)
//         }
//         if (typeof keterangan == 'string') {
//             setKeterangan(keterangan)
//         }
//     }, [kdbarang, barang, jumlah, kondisi, status, keterangan])
    
//     const editData = async (e) => {
//         e.preventDefault()
//         // setSubmitting(true)
//         try {

//             axios
//                 .put(`http://localhost:1337//api/data-barangs/:${_kdbarang}`, {
//                     kdbarang : _kdbarang,
//                     barang :_barang,
//                     jumlah :_jumlah,
//                     kondisi :_kondisi,
//                     status :_status,
//                     keterangan :_keterangan

//                 })
//                 .then(response => {
//                     console.log(response);
//                 });

//             alert("Update Data Sukses")
//             Router.push('/admin/dataBarang')
//         } catch (e) {
//             //throw Error(e.message)
//             console.log({ message: e.message });
//         }
//     }
// }