"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

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
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((f) => ({ ...f, image: reader.result as string }));
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
      image: form.image,
    };
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    });
    if (res.ok) {
      setArticles([newArticle, ...articles]);
      setForm({ title: "", content: "", author: "", image: "" });
      setImagePreview("");
    }
  }

  return (
    <main className="min-h-screen bg-[#d9c9b4] text-[#0a1d35] font-[var(--font-outfit)] overflow-hidden">

      {/* Liste des articles */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="grid md:grid-cols-3 gap-10"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${article.id}`}
                className="bg-[#f2e8dc] border border-[#0a1d35]/10 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col text-center group"
              >
                {article.image && (
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-xl mb-4 border border-[#a9c5dc]/30 transition-transform duration-300"
                  />
                )}
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-[#0a1d35]/80 transition">
                  {article.title}
                </h2>
                <p className="text-sm text-[#0a1d35]/70 mb-4">
                  Par <span className="font-medium">{article.author}</span> – {article.date}
                </p>
                <div
                  className="text-base leading-relaxed text-[#0a1d35]/90 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                <motion.p
                  className="text-[#0a1d35]/60 mt-2 font-medium"
                  whileHover={{ x: 4 }}
                >
                  → Lire la suite
                </motion.p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Formulaire animé */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#f2e8dc] border border-[#0a1d35]/20 rounded-2xl shadow-md p-8 max-w-3xl mx-auto hover:shadow-xl transition-all"
        >
          <motion.h2
            className="text-2xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             Rédiger un nouvel article
          </motion.h2>

          <div className="space-y-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Titre de l’article"
              required
              className="w-full border border-[#0a1d35]/30 rounded-lg px-4 py-3 bg-[#d9c9b4]/30 focus:outline-none focus:ring-2 focus:ring-[#0a1d35] transition"
            />
            <ReactQuill
              theme="snow"
              value={form.content}
              onChange={(val) => setForm((f) => ({ ...f, content: val }))}
              placeholder="Rédigez votre article (texte formaté, images, etc.)"
              className="bg-[#f2e8dc] rounded-lg border border-[#0a1d35]/30 transition-all hover:border-[#0a1d35]/60"
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Auteur"
              required
              className="w-full border border-[#0a1d35]/30 rounded-lg px-4 py-3 bg-[#d9c9b4]/30 focus:outline-none focus:ring-2 focus:ring-[#0a1d35] transition"
            />
            <div>
              <label className="block mb-1 font-medium text-[#0a1d35]">
                Image de couverture :
              </label>
              <input type="file" accept="image/*" onChange={handleImage} />
              {imagePreview && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  src={imagePreview}
                  alt="Aperçu"
                  className="w-40 h-40 object-cover rounded-lg mt-3 border border-[#0a1d35]/20 shadow"
                />
              )}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="px-6 py-3 rounded-full border border-[#0a1d35] text-[#0a1d35] font-medium hover:bg-[#0a1d35] hover:text-[#f2e8dc] transition-all duration-300"
            >
              Publier l’article
            </motion.button>
          </div>
        </motion.form>
      </section>
    </main>
  );
}
