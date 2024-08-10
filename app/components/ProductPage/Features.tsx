const Features = ({ features, inTheBox }: { features: string; inTheBox: string[] }) => {
  return (
    <div className="mt-20 flex flex-col gap-20 lg:flex-row">
      <div className="lg:basis-2/3">
        <h2 className="text-2xl font-bold tracking-wide mb-6 text-[var(--text-temporary)] lg:text-[1.75rem]">
          FEATURES
        </h2>
        <p className="text-[var(--text-temporary-faded)] text-[0.936rem] tracking-wide leading-relaxed">
          <span className="block mb-5">{features.split('!!')[0]}</span>
          <span className="block">{features.split('!!')[2]}</span>
        </p>
      </div>
      <div className="lg:basis-1/3 ">
        <h2 className="text-2xl font-bold tracking-wide mb-6 text-[var(--text-temporary)] lg:text-[1.75rem]">
          IN THE BOX
        </h2>
        <ul className="grid gap-1.5">
          {inTheBox.map((item, idx) => {
            const splitedItem = item.split('/');
            return (
              <li key={idx} className="flex gap-4 tracking-wide">
                <span className="text-[var(--accent-clr)] font-bold w-5">{splitedItem[0]}</span>
                <p className="capitalize text-[var(--text-temporary-faded)]">{splitedItem[1]}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Features;
