"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DeleteProductButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    setIsDeleting(true);
    
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);
      
    if (error) {
      console.log(error);
      alert("Erreur lors de la suppression du produit");
      setIsDeleting(false);
    } else {
      // Rafraîchir la page pour mettre à jour la liste
      router.refresh();
    }
  }

  return (
    <button 
      onClick={handleDelete} 
      disabled={isDeleting}
      style={{ 
        marginTop: "10px",
        padding: "5px 10px", 
        background: "red", 
        color: "white", 
        border: "none", 
        cursor: "pointer" 
      }}
    >
      {isDeleting ? "Suppression..." : "Delete"}
    </button>
  );
}
