import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";


const UpdateDataBarang = ({data}) => {
    const [_kdbarang, setKodeBarang] = useState('');
    const [_barang, setNamaBarang] = useState('');
    const [_jumlah, setJumlahBarang] = useState('');
    const [_kondisi, setKondisi] = useState('');
    // const [_status, setStatus] = useState('');
    const [_keterangan, setKeterangan] = useState('');

    const router = useRouter();
    const { id, kdbarang, barang, jumlah, kondisi, keterangan } = router.query;
    console.log(data);
    useEffect(() => {
        if (typeof kdbarang == 'string') {
            setKodeBarang(kdbarang);
        }
        if (typeof barang == 'string') {
            setNamaBarang(barang)
        }
        if (typeof jumlah == 'string') {
            setJumlahBarang(jumlah)
        }
        if (typeof kondisi == 'string') {
            setKondisi(kondisi)
        }
        // if (typeof status == 'string') {
        //     setStatus(status)
        // }
        if (typeof keterangan == 'string') {
            setKeterangan(keterangan)
        }
    }, [id, kdbarang, barang, jumlah, kondisi, keterangan])
    
    const editData = async (e) => {
        e.preventDefault()
          try {
            axios
                .put(`http://localhost:1337/api/data-barangs/${id}`, {
                  data:{
                    kdbarang : _kdbarang,
                    barang : _barang,
                    jumlah : _jumlah,
                    kondisi : _kondisi,
                    // status : _status,
                    keterangan : _keterangan,
                  },

                })
                .then(response => {
                    console.log(response);
                });

            alert("Update Data Barang Sukses")
            Router.push('/dataBarang')
        } catch (e) {
            //throw Error(e.message)
            console.log({ message: e.message });
        }
    }

    return (
        <div className="kotak">
  <div className="header-fom">
    <h1>FORM EDIT DATA BARANG</h1>
  </div>
  <div className="main-fom">
    <form>
    <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Kode Barang :</label>
        <input type="text" id="kdbarang"  value={_kdbarang} onChange={(e)=>setKodeBarang(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Nama Barang :</label>
        <input type="text" id="barang"  value={_barang} onChange={(e)=>setNamaBarang(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Jumlah Barang :</label>
        <input type="text" id="jumlah"  value={_jumlah} onChange={(e)=>setJumlahBarang(e.target.value)} />
      </div><br />
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Kondisi :</label>
        <input type="text" id="kondisi"  value={_kondisi} onChange={(e)=>setKondisi(e.target.value)} />
      </div><br />
      {/* <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Status :</label>
        <input type="text" id="status"  value={_status} onChange={(e)=>setStatus(e.target.value)} />
      </div><br /> */}
      <div className="text-fom">
        <label style={{display: 'inline-block', width: 125}}>Keterangan :</label>
        <input type="text" id="keterangan"  value={_keterangan} onChange={(e)=>setKeterangan(e.target.value)} />
      </div><br />
      <button  className="submit" type="button" onClick={editData} >Submit</button>
    </form>
  </div>
</div>
    )
}
export default UpdateDataBarang;