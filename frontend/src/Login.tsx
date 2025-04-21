import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      })

      const data = await response.json()
      if (response.ok) {
        setMensagem(`Bem-vindo, ${data.nome || email}!`)
      } else {
        setMensagem(data.mensagem || 'Erro no login')
      }
    } catch (error) {
      setMensagem('Erro ao conectar com o servidor.')
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login - Sistema de Cursos</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Entrar</button>
      </form>
      {mensagem && <p style={styles.message}>{mensagem}</p>}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '80px auto',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '12px',
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
  },
  title: {
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#4f46e5',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '1rem',
    color: '#4f46e5',
    fontWeight: 500,
  },
}

export default Login
