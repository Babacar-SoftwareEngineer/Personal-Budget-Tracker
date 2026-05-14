import { supabase } from "@/lib/supabase";
import AddProductForm from "./AddProductForm";
import DeleteProductButton from "./DeleteProductButton";
import UpdateProduct from "./UpdateProduct";
import { createClient } from "@/utils/supabase/server";
import { logout } from "./logoutAction";

export default async function Home() {
  const supabaseServer = await createClient()
  const { data: { user } } = await supabaseServer.auth.getUser()

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order('id', { ascending: false }); // Optional: order by newest first

  return (
    <main style={{ padding: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>Liste des produits</h1>
        <div>
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>Connecté en tant que: {user.email}</span>
              <form action={logout}>
                <button type="submit" style={{ padding: "5px 10px", cursor: "pointer" }}>Se déconnecter</button>
              </form>
            </div>
          ) : (
            <a href="/login" style={{ padding: "5px 10px", background: "#0070f3", color: "white", textDecoration: "none", borderRadius: "5px" }}>Se connecter</a>
          )}
        </div>
      </div>

      {/* Le formulaire est maintenant un composant client séparé */}
      <AddProductForm />

      {error && (
        <div style={{ color: "red", padding: "20px", border: "1px solid red", marginBottom: "20px" }}>
          <p>Erreur lors du chargement des produits:</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}

      {products?.length === 0 && !error && (
        <p>Aucun produit trouvé.</p>
      )}

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
          <DeleteProductButton id={product.id} />
          <UpdateProduct id={product.id} initialTitle={product.title} initialPrice={product.price} />
        </div>
      ))}
    </main>
  )
}