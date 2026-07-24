import { useState } from 'react'
import './App.css'

function App() {
  const [posts] = useState([
    { id: 1, title: 'Project Kickoff', date: '2026-07-25', summary: 'Time to get tendinitis :fire:' },
  ]);

  return (
    <div className="app-container">
      <header className="header">
        <h1>My FYP Blog</h1>
        <p>Documenting my Final Year Project</p>
      </header>
      
      <main className="content">
        <section className="posts">
          <h2>Recent Updates</h2>
          {posts.map(post => (
            <article key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <span className="post-date">{post.date}</span>
              <p>{post.summary}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FYP Blog. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
