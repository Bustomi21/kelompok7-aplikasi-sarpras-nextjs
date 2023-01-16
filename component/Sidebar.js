import Link from "next/link";

export default function Sidebar() {
    return (
        <>
        <div className="sidebar">
    <img src="images/gambar.1.png" />
    <ul>
      
      <li>
        <Link href="/dashboard">
          Dashboard
        </Link>
      </li>
        <br />
      <li>
        <Link href="/dataBarang">
          Data Barang
        </Link>
      </li>
        <br />
        <li>
          <Link href="/peminjaman">
            Peminjaman
          </Link>
        </li>
        <br />
        <li>
          <Link href="/laporan">
            Laporan
          </Link>
        </li>
      
    </ul>
  </div>
  </>

    )
}