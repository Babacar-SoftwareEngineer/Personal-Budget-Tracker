// app/page.tsx
import { supabase } from './utils/supabase/client';
import { revalidatePath } from 'next/cache';

export default async function Home() {
  const { data: transactions } = await supabase.from('transactions').select('*');

  // 1. La Server Action (La logique d'insertion)
  async function addTransaction(formData: FormData) {
    'use server' // Cette ligne est cruciale
    
    // On récupère les données du formulaire
    const label = formData.get('label');
    const amount = formData.get('amount');
    
    // On insère dans la base de données
    await supabase.from('transactions').insert([
      { label, amount, type: 'expense', category: 'Divers' }
    ]);
    
    // On demande à Next.js de rafraîchir la liste affichée
    revalidatePath('/');
  }
  return (
    <main>
      <h1>Mon Tracker de Budget</h1>
      <form action={addTransaction}>
        <input type="text" name="label" placeholder="Libellé (ex: Hébergement Webixo) " required />
        <input type="number" name="amount" placeholder="Montant" required />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {transactions?.map((t) => (
          <li key={t.id}>
            {t.label} : {t.amount} CFA ({t.type})
          </li>
        ))}
      </ul>
    </main>
  );
}