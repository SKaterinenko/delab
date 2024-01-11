import Image from 'next/image';
import H1 from '@/components/H1/H1';
import P from '@/components/P/P';
import Button from '@/components/Button/Button';
import PopularBots from '@/components/Greetings/PopularBots';

const Greetings = () => (
  <section className="container pt-10 pb-[150px]">
    <div className="flex justify-between flex-col md:flex-row">
      <div className="md:text-left text-center">
        <H1 className="mt-[76px] text-center md:text-left">
          Crypto payments for
          <br />
          <span className="text-primary "> telegram bots</span>
        </H1>
        <P className="mt-8">
          Seamlessly accept crypto payments
          <br />
          in your Telegram bots and services.
        </P>
        <Button className="mt-8 text-white bg-primary hover:bg-lightBlue hover:text-deepBlue">Get started</Button>
        <PopularBots />
        <P className="mt-[16px]">Popular bots use Crypto Pay</P>
      </div>
      <div className="lg:mr-20 flex justify-center mt-[50px] md:mt-0">
        <Image className="dark:hidden" src="/assets/phone.png" alt="Phone" width={328} height={688} />
        <Image className="hidden dark:block" src="/assets/blackPhone.png" alt="Phone" width={328} height={688} />
      </div>
    </div>
  </section>
);

export default Greetings;
