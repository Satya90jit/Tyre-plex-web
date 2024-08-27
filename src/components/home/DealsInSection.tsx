const CLIENTS = [
  { _id: "1", name: "MRF" },
  { _id: "2", name: "CEAT" },
  { _id: "3", name: "Goodyear" },
  { _id: "4", name: "Apollo" },
  { _id: "5", name: "Bridgestone" },
  { _id: "6", name: "JK Tyre" },
  { _id: "7", name: "Michelin" },
  { _id: "8", name: "Pirelli" },
  { _id: "9", name: "Yokohama" },
  { _id: "10", name: "TVS Eurogrip" },
  { _id: "11", name: "Continental" },
  { _id: "12", name: "Hankook" },
];

const OurClients = () => {
  return (
    <section className="lg:mt-12 mt-8 flex flex-col">
      <div className="flex flex-col items-start gap-4 text-start">
        <p className="uppercase text-gray-400 font-medium">Deals In</p>
        <h2 className="text-2xl font-semibold">Explore Our Deals</h2>
      </div>
      <aside className="w-full flex flex-wrap justify-center gap-4 lg:gap-6 pt-5 lg:pt-8">
        {CLIENTS.map((item) => (
          <article
            className="w-[45%] lg:w-[20%] grid place-items-center text-center gap-2 bg-white border border-secondary/40 rounded-md shadow-[0px_6px_30px_0px_#06072e1a] common-transition p-4 lg:p-5 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
            key={item._id}
          >
            <p className="text-lg font-semibold">{item.name}</p>
          </article>
        ))}
      </aside>
    </section>
  );
};

export default OurClients;
