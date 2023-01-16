import { useRouter } from 'next/router';
import { useState } from 'react';
function CariBarang(databarangs) {
    const [barang, setNamaBarang] = useState('')
    const router = useRouter()
    function cariData(e) {
        e.preventDefault();
        router.push({
            pathname: '/dataBarang',
            query: { barang: barang }
        })
    }   
    return (
        <form>
            <input type="text" 
                    placeholder="Cari Dengan Nama Barang" 
                    name="search" 
                    value={barang} 
                    onChange={(e) => setNamaBarang(barang => e.target.value)} />
        <button className="btn-tambah" onClick={cariData}>Search</button>
      </form>
    )
}

export default CariBarang;