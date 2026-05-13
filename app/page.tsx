

// export default function Home() {
//   return (
//     <>
//       <header>
//         <h1>Personal Budget Tracker</h1>
//         <nav>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/expenses">Expenses</a></li>
//             <li><a href="/income">Income</a></li>
//             <li><a href="/summary">Summary</a></li>
//           </ul>
//         </nav>
//       </header>

//     </>
//   );
// }
import { supabase } from "@/lib/supabase";

export default async function Home() {

  const { data: products, error } = await supabase
    .from("products")
    .select("*")

  console.log(products)

  return (
    <main style={{ padding: "40px" }}>
      <h1>Liste des produits</h1>

      {products?.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "10px"
          }}
        >
          <h2>{product.title}</h2>
          <p>{product.price} FCFA</p>
        </div>
      ))}
    </main>
  )
}