const products = [
  { name: "Vehicle System UE5", desc: "Chaos vehicle setup ready for production.", price: "FREE" },
  { name: "Niagara FX Pack", desc: "Real-time effects for cinematics.", price: "FREE" },
  { name: "Procedural Materials", desc: "Substance-based materials.", price: "FREE" },
];

export default function Plugins() {
  return (
    <section id="assets" className="bg-black px-24 py-32">
      <h2 className="mb-12 text-4xl font-bold">ASSETS / PLUGINS</h2>

      <div className="grid grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-xl border border-white/10 p-6 transition hover:border-white/40"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>

            <p className="mt-2 text-sm text-zinc-400">{product.desc}</p>

            <div className="mt-6 flex items-center justify-between">
              <span>{product.price}</span>

              <button className="rounded-full border px-4 py-2 transition hover:bg-white hover:text-black">
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
