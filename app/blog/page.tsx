"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
};

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [form, setForm] = useState({ title: "", content: "", author: "", image: "" });
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    fetch("/api/blog")
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm(f => ({ ...f, image: reader.result as string }));
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newArticle: Article = {
      id: Date.now(),
      title: form.title,
      content: form.content,
      author: form.author,
      date: new Date().toLocaleDateString(),
      image: form.image
    };
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle)
    });
    if (res.ok) {
      setArticles([newArticle, ...articles]);
      setForm({ title: "", content: "", author: "", image: "" });
      setImagePreview("");
    }
  }

  
  const colors = {
    bleuProfond: "#0A1D35",
    ivoire: "#F2E8DC",
    bleuClair: "#6CAED6",
    champagne: "#D9C9B4",
    bleuDiamant: "#D0E7F5"
  };

  return (
    <main style={{
      fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
      background: colors.bleuDiamant,
      minHeight: '100vh',
      margin: 0,
      padding: 0,
    }}>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: colors.bleuProfond,
        color: colors.ivoire,
        boxShadow: '0 2px 8px rgba(10,29,53,0.10)',
        padding: '1.5rem 0 1rem 0',
        textAlign: 'center',
        letterSpacing: 2,
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Blog Isihess Consulting</h1>
        <p style={{ color: colors.bleuClair, fontSize: '1.1rem', fontWeight: 500, margin: 0 }}>Retrouvez ici nos derniers articles et conseils !</p>
      </header>
      <section style={{
        maxWidth: 900,
        margin: '2rem auto',
        padding: '0 1rem',
      }}>
        <form onSubmit={handleSubmit} style={{
          marginBottom: '2.5rem',
          background: colors.champagne,
          borderRadius: 16,
          padding: '2rem',
          boxShadow: '0 2px 12px rgba(10,29,53,0.08)',
          border: `1px solid ${colors.bleuProfond}`,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <h2 style={{ color: colors.bleuProfond, fontSize: '1.3rem', fontWeight: 700 }}>Écrire un nouvel article</h2>
          <input name="title" value={form.title} onChange={handleChange} placeholder="Titre" required style={{ padding: 12, borderRadius: 8, border: `1px solid ${colors.bleuClair}`, fontSize: '1rem', background: colors.ivoire }} />
          <textarea name="content" value={form.content} onChange={handleChange} placeholder="Contenu" required rows={4} style={{ padding: 12, borderRadius: 8, border: `1px solid ${colors.bleuClair}`, fontSize: '1rem', background: colors.ivoire }} />
          <input name="author" value={form.author} onChange={handleChange} placeholder="Auteur" required style={{ padding: 12, borderRadius: 8, border: `1px solid ${colors.bleuClair}`, fontSize: '1rem', background: colors.ivoire }} />
          <input type="file" accept="image/*" onChange={handleImage} style={{ marginBottom: 8 }} />
          {imagePreview && <img src={imagePreview} alt="Aperçu" style={{ maxWidth: 220, marginBottom: 8, borderRadius: 12, boxShadow: `0 2px 8px ${colors.bleuProfond}` }} />}
          <button type="submit" style={{
            background: colors.bleuProfond,
            color: colors.ivoire,
            padding: '0.9rem 2rem',
            border: 'none',
            borderRadius: 10,
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: `0 2px 8px ${colors.bleuClair}`,
            transition: 'background 0.2s',
          }}>Publier</button>
        </form>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {articles.map(article => (
            <article key={article.id} style={{
              background: colors.ivoire,
              borderRadius: 18,
              boxShadow: '0 4px 16px rgba(10,29,53,0.10)',
              border: `1px solid ${colors.champagne}`,
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.2s',
            }}>
              <h2 style={{ color: colors.bleuProfond, fontSize: '1.5rem', marginBottom: 8, fontWeight: 700, textAlign: 'center' }}>{article.title}</h2>
              <div style={{ fontSize: '0.95rem', color: colors.bleuClair, marginBottom: 12, fontWeight: 500 }}>
                Par <span style={{ fontWeight: 700 }}>{article.author}</span> le {article.date}
              </div>
              {article.image && <img src={article.image} alt={article.title} style={{ maxWidth: 300, marginBottom: 12, borderRadius: 14, boxShadow: `0 2px 12px ${colors.bleuProfond}` }} />}
              <p style={{ color: colors.bleuProfond, lineHeight: 1.7, fontSize: '1.05rem', textAlign: 'center', background: colors.bleuDiamant, borderRadius: 10, padding: '1rem 1.5rem', boxShadow: `0 2px 8px ${colors.champagne}` }}>{article.content}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
