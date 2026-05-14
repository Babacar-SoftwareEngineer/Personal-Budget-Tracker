"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function UpdateProduct({ id, initialTitle, initialPrice }: { id: string, initialTitle: string, initialPrice: number }) {
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice.toString())
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setIsSubmitting(true)
        const { error } = await supabase
            .from("products")
            .update({ title, price: parseFloat(price) })
            .eq("id", id)

        if (error) {
            console.log(error)
            alert("Erreur lors de la mise à jour du produit")
        } else {
            // Optionnel: On pourrait réinitialiser le formulaire ou le fermer
            router.refresh()
        }

        setIsSubmitting(false)
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
                {isSubmitting ? "Mise à jour..." : "Update Product"}
            </button>
        </form>
    )
}