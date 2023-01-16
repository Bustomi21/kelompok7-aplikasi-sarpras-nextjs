import { useRouter } from 'next/router';
import { useState } from 'react';
function CariPeminjam(peminjamen) {
    const [namapeminjam, setNamaPeminjam] = useState('')
    const router = useRouter()
    function cariPinjam(e) {
        e.preventDefault();
        router.push({
            pathname: '/peminjaman',
            query: { namapeminjam: namapeminjam }
        })
    }   
    return (
        <form>
            <input type="text" 
                    placeholder="Cari Dengan Nama Peminjam" 
                    name="search" 
                    value={namapeminjam} 
                    onChange={(e) => setNamaPeminjam(namapeminjam => e.target.value)} />
        <button className="btn-tambah" onClick={cariPinjam}>Search</button>
      </form>
    )
}

export default CariPeminjam;