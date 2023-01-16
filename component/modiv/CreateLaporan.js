import { useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";

export default function CreateLaporan(){

const [namabarang, setNamaBarang] = useState('');
const [namapeminjam, setNamaPeminjam] = useState('');
const [jumlah, setJumlah] = useState('');
const [tanggalpinjam, setTanggalPinjam] = useState('');
const [tanggalkembali, setTanggalKembali] = useState('');
const [statusbarang, setStatusBarang] = useState('');
const [keterangan, setKeterangan] = useState('');

    async function Back(e){
    e.preventDefault()
    try {
        
        axios
            .post("http://localhost:1337/api/laporans", {
                "data":{
                namabarang : namabarang,
                namapeminjam : namapeminjam,
                jumlah : jumlah,
                tanggalpinjam : tanggalpinjam,
                tanggalkembali : tanggalkembali,
                statusbarang : statusbarang,
                keterangan : keterangan
                
                }
            })

            .then(response => {
                console.log(response);
            });

        
        alert("Barang Telah Dikembalikan")
        Router.push('/peminjaman')
        //clearInput()
    } catch (e) {
        throw Error(e.message)
    }

    const clearInput = () => {
        setNamaBarang('')
        setNamaPeminjam('')
        setJumlah('')
        setTanggalPinjam('')
        setTanggalKembali('')
        setStatusBarang('')
        setKeterangan('')
        
    }

}
}