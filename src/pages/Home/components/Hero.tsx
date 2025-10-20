
export const Hero = () => {
  return (
    <div className="min-h-screen flex items-centerjustify-center">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-9xl font-black">LA SALLE DU TEMPS </h1>

        <p className="py-6 uppercase font-semibold text-xl text-neutral-500">
          Le coaching sportif personnalisé pour permettre l'épanouissement de
          chacun.
        </p>

        <div className="flex gap-4 mt-5">
          <button className="btn btn-lg btn-primary rounded-full px-12">
            Contact
          </button>
          <button className="btn btn-lg btn-outline rounded-full px-12 hover:btn-primary">
            Nos Salles
          </button>
        </div>

        {/* <Hourglass className="mb-20 text-neutral-500" size={120} /> */}
      </div>
    </div>
  );
};
