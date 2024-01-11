import Image from 'next/image';

const PopularBots = () => (
  <div className="flex mt-[56px] relative text-center md:text-left justify-center md:justify-start">
    <Image
      className="w-[63px] h-[63px] md:w-[96px] md:h-[96px] border-4 border-white dark:border-black rounded-full"
      src="/assets/bot1.png"
      alt="Popular Bot"
      width={96}
      height={96}
    />
    <Image
      className="-ml-[20px] md:-ml-[30px] w-[63px] h-[63px] md:w-[96px] md:h-[96px] border-4 border-white dark:border-black rounded-full"
      src="/assets/bot2.png"
      alt="Popular Bot"
      width={96}
      height={96}
    />
    <Image
      className="-ml-[20px] md:-ml-[30px] w-[63px] h-[63px] md:w-[96px] md:h-[96px] border-4 border-white dark:border-black rounded-full"
      src="/assets/bot3.png"
      alt="Popular Bot"
      width={96}
      height={96}
    />
    <Image
      className="-ml-[20px] md:-ml-[30px] w-[63px] h-[63px] md:w-[96px] md:h-[96px] border-4 border-white dark:border-black rounded-full"
      src="/assets/bot4.png"
      alt="Popular Bot"
      width={96}
      height={96}
    />
    <Image
      className="-ml-[20px] md:-ml-[30px] w-[63px] h-[63px] md:w-[96px] md:h-[96px] border-4 border-white dark:border-black rounded-full"
      src="/assets/bot5.png"
      alt="Popular Bot"
      width={96}
      height={96}
    />
  </div>
);

export default PopularBots;
