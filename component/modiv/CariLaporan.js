import { useRouter } from 'next/router';
import { useState } from 'react';
function CariLaporan(laporans) {
    const [tanggalpinjam, setTanggalPinjam] = useState('')
    const router = useRouter()
    function cariLapor(e) {
        e.preventDefault();
        router.push({
            pathname: '/laporan',
            query: { tanggalpinjam: tanggalpinjam }
        })
    }   
    return (
        <form >
            <input type="text" 
                    placeholder="Masukan Dengan Format YYYY-MM" 
                    name="search" 
                    value={tanggalpinjam} 
                    onChange={(e) => setTanggalPinjam(tanggalpinjam => e.target.value)} />
        <button className="btn-tambah" onClick={cariLapor}>Search</button>
      </form>
    )
}

export default CariLaporan;