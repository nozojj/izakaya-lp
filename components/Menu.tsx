"use client";

import Image from "next/image";
import { useState } from "react";

export default function Menu() {
  const [category, setCategory] = useState("all");

  const menus = [
    {
      title: "焼き鳥盛り合わせ",
      desc: "人気の串をバランスよく",
      price: "￥1200",
      category: "food",
      image: "/images/menu/yakitori.jpg",
    },
    {
      title: "だし巻き卵",
      desc: "ふわふわ食感",
      price: "￥600",
      category: "food",
      image: "/images/menu/dashimaki.jpg",
    },
    {
      title: "日本酒",
      desc: "各種取り揃え",
      price: "￥500～",
      category: "drink",
      image: "/images/menu/sake.jpg",
    },
  ];

  const filteredMenus =
    category === "all"
      ? menus
      : menus.filter((item) => item.category === category);

  return (
    <section className="py-24">
      <h2 className="text-2xl font-bold text-center mb-8">お品書き</h2>

      <div className="flex justify-center gap-4 mb-8">
        {["all", "food", "drink"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full transition ${
              category === cat
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat === "all" && "すべて"}
            {cat === "food" && "料理"}
            {cat === "drink" && "ドリンク"}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {filteredMenus.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-200 rounded-xl overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={160}
              className="w-full h-40 object-cover"
            />

            <div className="p-6">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              <p className="mt-3 font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
