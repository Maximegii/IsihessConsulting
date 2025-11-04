"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
};

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a: Article) => a.id === Number(id));
        setArticle(found);
      });
  }, [id]);

  if (!article)
    return <p className="text-center py-20 text-[#0A1D35]">Chargement...</p>;

  return (
    <main className="min-h-screen bg-[#D9C9B4] text-[#0A1D35] font-outfit">
      <article className="max-w-4xl mx-auto px-6 py-12 bg-[#F2E8DC] rounded-2xl shadow-md border border-[#0A1D35]/10">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
        )}
        <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
        <p className="text-[#0A1D35]/70 mb-6">
          Par <span className="font-medium">{article.author}</span> — {article.date}
        </p>
        <div
          className="prose max-w-none text-[#0A1D35] prose-img:rounded-lg prose-img:shadow-sm"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
}
