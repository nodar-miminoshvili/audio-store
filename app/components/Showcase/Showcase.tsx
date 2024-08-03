import GreyBox from './GreyBox';
import OrangeBox from './OrangeBox';
import EarbudsBox from './EarbudsBox';

const Showcase = () => {
  return (
    <section className="container pb-28 py-5 ">
      <OrangeBox />
      <GreyBox />
      <EarbudsBox />
    </section>
  );
};

export default Showcase;
