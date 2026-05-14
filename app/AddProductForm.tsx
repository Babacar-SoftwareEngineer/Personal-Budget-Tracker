"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const { data, error } = await supabase
      .from("products")
      .insert({ title, price: parseFloat(price) });

    if (error) {
      console.log(error);
      alert("Erreur lors de l'ajout du produit");
    } else {
      setTitle("");
      setPrice("");
      // Rafraîchir la page pour afficher le nouveau produit
      router.refresh();
    }

    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        style={{ padding: "8px", border: "1px solid #ccc" }}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
        style={{ padding: "8px", border: "1px solid #ccc" }}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        style={{ padding: "8px 16px", background: "#0070f3", color: "white", border: "none", cursor: "pointer" }}
      >
        {isSubmitting ? "Ajout..." : "Add Product"}
      </button>
    </form>
  );
}
