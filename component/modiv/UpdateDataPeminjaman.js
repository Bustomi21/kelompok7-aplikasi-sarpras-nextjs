import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";


const UpdateDataPeminjaman= ({data}) => {
    const [_namabarang, setNamaBarang] = useState('');
    const [_jumlah, setJumlah] = useState('');
    const [_namapeminjam, setNamaPeminjam] = useState('');
    const [_tanggalpinjam, setTanggalPinjam] = useState('');
    const [_tanggalkembali, setTanggalKembali] = useState('');
    const [_statuss, setStatuss] = useState('');

    const router = useRouter();
    const { id, namabarang,jumlah, namapeminjam, tanggalpinjam, tanggalkembali, statuss } = router.query;
    console.log(data);
    useEffect(() => {
        if (typeof namabarang == 'string') {
            setNamaBarang(namabarang)
        }
        if (typeof jumlah == 'string') {
            setJumlah(jumlah)
        }
        if (typeof namapeminjam == 'string') {
            setNamaPeminjam(namapeminjam)
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
    }, [id, namabarang ,jumlah, namapeminjam, tanggalpinjam, tanggalkembali, statuss])
    
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
                });

            alert("Update Data Sukses")
            Router.push('/peminjaman')
        } catch (e) {
            //throw Error(e.message)
            console.log({ message: e.message });
        }
    }

    return (
        <div className="kotak">
  <div className="header-fom">
    <h1>FORM EDIT DATA PEMINJAMAN</h1>
  </div>
  <div className="main-fom">
    <form>
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>Nama Barang :</label>
        <input type="text" id="namabarang" value={_namabarang} onChange={(e)=>setNamaBarang(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>Jumlah :</label>
        <input type="text" id="jumlah" value={_jumlah} onChange={(e)=>setJumlah(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 170}}>NamaPeminjam :</label>
        <input type="text" id="namapeminjam" value={_namapeminjam} onChange={(e)=>setNamaPeminjam(e.target.value)} />
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
      <button  className="submit" type="button" onClick={editData} value="Simpan">Submit</button>
    </form>
  </div>
</div>
    )
}
export default UpdateDataPeminjaman;

