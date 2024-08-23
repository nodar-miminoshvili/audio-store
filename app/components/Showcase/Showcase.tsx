import GrayBox from './GrayBox';
import OrangeBox from './OrangeBox';
import EarbudsBox from './EarbudsBox';
import ShowcaseWatcher from '../IntersectionObservers/ShowcaseWatcher';

const Showcase = () => {
  return (
    <section className="container pb-36 py-5 overflow-x-hidden">
      <OrangeBox />
      <GrayBox />
      <EarbudsBox />
      <ShowcaseWatcher />
    </section>
  );
};

export default Showcase;
