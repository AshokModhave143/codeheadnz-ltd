export const IntroductionSection = () => {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat py-12 text-center h-full"
      style={{
        backgroundImage: `url(
          'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1'
        )`,
      }}
    >
      <div className="flex justify-center items-center">
        <div className="w-full lg:w-1/3 md:w-1/2 sm:w-3/4 text-center rounded-sm backdrop-blur-sm bg-white/20 px-4 py-4">
          <h1 className="text-5xl text-white">Codehead NZ Limited</h1>
          <p className="text-2xl border-small w-fit mx-auto px-2 my-4 bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent uppercase">
            Bring ideas to real
          </p>
          <p className="text-lg bg-background text-center light:text-foreground/40 font-light mt-8 px-4 py-2 rounded-lg">
            we blend innovation with expertise to deliver cutting-edge software
            development and programming services tailored to meetß your unique
            business needs. As a leading technology solutions provider, we take
            pride in our commitment to excellence and our passion for staying at
            the forefront of the latest technological advancements.
          </p>
        </div>
      </div>
    </div>
  );
};
