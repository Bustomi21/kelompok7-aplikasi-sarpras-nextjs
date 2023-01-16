// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json( [
    {
        "no" : "1",
        "nmbarang" : "Proyektor",
        "jml" : "1",
        "kondisi" : "Rusak Berat"   
    },
    {
        "no" : "2",
        "nmbarang" : "Meja",
        "jml" : "50",
        "kondisi" : "Bagus"   
    },
    {
        "no" : "3",
        "nmbarang" : "gitar",
        "jml" : "5",
        "kondisi" : "Cuma Senar"   
    },
    {
        "no" : "4",
        "nmbarang" : "roman",
        "jml" : "1",
        "kondisi" : "sehat"   
    }
    
]

   )
}
