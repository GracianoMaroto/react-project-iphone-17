function Intro() {
  const specs = [
    { value: '6.3"', label: "Display Super Retina", color: "text-blue-600" },
    { value: 'A18 Pro"', label: "Chip mais rápido", color: "text-orange-500" },
    { value: '48MP"', label: "Sistema de câmeras", color: "text-blue-600" },
    { value: '29h"', label: "Bateria", color: "text-orange-500" },
  ];
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 ">IPhone 17 Pro</h1>
        <p className="text-2xl md:text-4xl mb-4 text-gradient font-bold">
          Alumínio. Tão forte. Tão leve. Tão Pro.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          O design mais refinado que já criamos. Alumínio de grau cirúrgico.
          Chip A18 Pro. Sistema de câmeras Pro revolucionário
        </p>
        <div>
          <button>Compre agora</button>
          <button>Saiba mais</button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
