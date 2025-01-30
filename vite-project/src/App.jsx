import { useState } from "react"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/guitarras"

export default function(){

  const [guitars] =useState(db)

  return (
    <>
    
    <Header></Header>
    
       <main classNameName="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {
                guitars.map(g => (
                  <Guitar key={g.id} guitar={gitar}/>
                ))
            }
        </div>
    </main>
    <Footer></Footer>
    </>
    
  )
}