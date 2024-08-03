import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-[var(--text-primary-clr)]">
      <div className="container pt-28 pb-28  text-center overflow-hidden hero lg:text-left lg:pt-36 lg:pb-32">
        <span className="hero-text-faded text-sm font-bold tracking-[0.45rem] mb-4 block">
          NEW PRODUCT
        </span>
        <h1 className="text-white text-4xl font-bold mb-6 tracking-wider sm:text-5xl lg:text-6xl">
          XX99 Mark II
          <br /> Headphones
        </h1>
        <p className="hero-text-faded leading-relaxed mb-10">
          Experience natural, lifelike audio and
          <br /> exceptional build quality made for the <br /> passionate music enthusiast.
        </p>
        <Link
          href="#"
          className="btn btn-primary block w-fit mx-auto tracking-wide lg:mx-0 lg:mr-auto transition-colors hover:bg-[var(--accent-clr-highlight)]"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default Hero;
