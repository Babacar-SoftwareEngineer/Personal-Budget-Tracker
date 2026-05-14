import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px" }}>
      <h2>Se connecter / S'inscrire</h2>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          required 
          style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc" }} 
        />
      </div>
      
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input 
          id="password" 
          name="password" 
          type="password" 
          required 
          style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc" }} 
        />
      </div>
      
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button formAction={login} style={{ padding: "10px", background: "#0070f3", color: "white", border: "none", cursor: "pointer", flex: 1 }}>
          Se connecter
        </button>
        <button formAction={signup} style={{ padding: "10px", background: "#333", color: "white", border: "none", cursor: "pointer", flex: 1 }}>
          S'inscrire
        </button>
      </div>
    </form>
  )
}
