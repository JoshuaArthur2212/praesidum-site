import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PraesidumWebsite() {
  const [page, setPage] = useState("landing");

  const products = [
    { name: "Instagram Growth Guide", price: "£9.99", link: "#" },
    { name: "Digital Marketing Bundle", price: "£19.99", link: "#" },
    { name: "Passive Income Blueprint", price: "£29.99", link: "#" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Praesidum logo" className="w-12 h-12 object-contain" />
          <span className="font-semibold text-lg">Praesidum</span>
        </div>

        <div className="flex gap-4 items-center">
          <button onClick={() => setPage("landing")} className="hover:underline">Home</button>
          <button onClick={() => setPage("store")} className="hover:underline">Store</button>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800">
            Get Started
          </button>
        </div>
      </nav>

      {/* LANDING PAGE */}
      {page === "landing" && (
        <>
          <section className="text-center py-24 px-6 bg-slate-900 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Build Income Online with Digital Products
            </motion.h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Learn how to create, market, and sell digital products that generate passive income — even if you're starting from scratch.
            </p>

            <button
              onClick={() => setPage("store")}
              className="text-lg px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-gray-200"
            >
              Start Now
            </button>
          </section>

          {/* BENEFITS */}
          <section className="grid md:grid-cols-3 gap-6 px-6 py-16 max-w-6xl mx-auto">
            {["No Experience Needed", "Passive Income", "Step-by-Step Guides"].map((item, i) => (
              <div key={i} className="border rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600">
                  Designed to help you succeed quickly and effectively online.
                </p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section className="text-center py-20 bg-slate-900 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
            <button
              onClick={() => setPage("store")}
              className="text-lg px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-gray-200"
            >
              View Products
            </button>
          </section>
        </>
      )}

      {/* STORE PAGE */}
      {page === "store" && (
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Digital Products</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div key={i} className="bg-white border rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

                <p className="text-gray-600 mb-4">
                  Everything you need to start making money online.
                </p>

                <p className="font-bold mb-4">{product.price}</p>

                <a href={product.link} target="_blank">
                  <button className="w-full bg-slate-900 text-white py-2 rounded-xl hover:bg-slate-800">
                    Buy Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="text-center py-6 border-t text-gray-500">
        © {new Date().getFullYear()} Praesidum Enterprises. All rights reserved.
      </footer>
    </div>
  );
                                                                                   }
