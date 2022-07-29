const NotFoundMessage = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-center py-12">
        <p className="italic text-xl">&ldquo;No me vas a creer, porque casi nunca pasa, pero cometí un error&rdquo; - Rick Sanchez</p>
      </div>
      <div className="flex justify-center pb-6 text-2xl">
        <span className="text-cyan-500 font-bold">Not</span>&nbsp;<span className="font-thin">Found</span>
      </div>
    </div>
  );
};

export default NotFoundMessage;
