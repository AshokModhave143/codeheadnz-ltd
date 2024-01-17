export const IntroductionSection = () => {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center h-full"
      style={{
        backgroundImage: `url(
          'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1'
        )`,
      }}
    >
      <div className="flex justify-center items-center">
        <div className="w-full sm:w-1/2 text-center rounded-sm backdrop-blur-sm bg-white/20 px-4 py-4">
          <h1 className="text-5xl text-white">Codehead NZ Limited</h1>
          <p className="text-2xl bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">
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
