import {
  CheckBadgeIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Marquee from "react-fast-marquee";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

const HomePage = () => {
  return (
    <>
      <div className="overflow-hidden bg-gray-900  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 animate-slideleft">
              <div className="lg:max-w-lg">
                <h2 className=" font-semibold leading-7 text-3xl text-white">
                  NFC Based Smart Card
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get A better Connections
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-50">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline text-white">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="https://placehold.co/600x400/000000/FFF"
              alt="Product Promo"
              className="animate-slideright w-full  lg:max-w-xl rounded-xl   md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      {/* card Promo Section  Start */}
      <div className=" bg-white  py-12 sm:py-24">
        <div className="mx-automax-w-7xl px-6 lg:px-8 ">
          <h1 className="text-center text-3xl font-semibold ">Our Cards</h1>

          <div className="mx-auto py-12 sm:py-24 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 animate-slideleft">
              <img
                src="https://placehold.co/400x400/000000/FFF"
                alt="Product Promo"
                className="animate-slideright w-full  lg:max-w-xl rounded-xl   md:-ml-4 lg:-ml-0"
              />
            </div>
            <div className="lg:pr-8 lg:pt-4 animate-slideright">
              <h1 className="text-5xl">PVC</h1>
              <h2 className="text-4xl">Cards</h2>

              <p>
                Introducing the PVC NFC Cards by Techcardz. The perfect solution
                for a durable and NFC-enabled card.
              </p>
              <div className="grid grid-cols-2 items-center  ">
                <div>
                  <h1 className="text-4xl text-yellow-600">₹ 999</h1>
                  <h1 className="text-4xl line-through text-yellow-600">
                    ₹ 999
                  </h1>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-full bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 place-items-center sm:grid-cols-4 py-12 lg:py-24">
                <div>
                  <h2>
                    <CheckBadgeIcon
                      className=" h-10 w-10 text-black"
                      aria-hidden="true"
                    />
                    <span>env-Fridly</span>
                  </h2>
                </div>
                <div>
                  <h2>
                    <CheckBadgeIcon
                      className=" h-10 w-10 text-black"
                      aria-hidden="true"
                    />
                    <span>env-Fridly</span>
                  </h2>
                </div>
                <div>
                  <h2>
                    <CheckBadgeIcon
                      className=" h-10 w-10 text-black"
                      aria-hidden="true"
                    />
                    <span>env-Fridly</span>
                  </h2>
                </div>
                <div>
                  <h2>
                    <CheckBadgeIcon
                      className=" h-10 w-10 text-black"
                      aria-hidden="true"
                    />
                    <span>env-Fridly</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card Promo Section  End */}
      {/* Marquee Start */}
      <Marquee pauseOnHover={true} className=" py-12 sm:py-24">
        <img
          className="w-full px-5 "
          src="https://www.react-fast-marquee.com/static/media/dell.09332c44.png"
          alt="DEll"
        />
        <img
          className="w-full px-5 "
          src="https://www.react-fast-marquee.com/static/media/princeton.5d0a5006.png"
          alt="DEll"
        />
        <img
          className="w-full px-5 "
          src="https://www.react-fast-marquee.com/static/media/mit.1af911d7.png"
          alt="DEll"
        />
        <img
          className="w-full px-5 "
          src="https://www.react-fast-marquee.com/static/media/nasa.3bf5af29.png"
          alt="DEll"
        />
      </Marquee>
      {/* Marquee End */}
      {/* GET BULK ORDER START */}
      <div className="overflow-hidden bg-gray-900  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
          <h1 className=" text-2xl sm:text-6xl  text-white  font-mono mr-10">
            {" "}
            Order In Bulk{" "}
          </h1>
          <button className="rounded-full bg-indigo-600 px-3 py-2 text-lg lg:text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Order Now
          </button>
        </div>
      </div>
      {/* GET BULK ORDER END */}

      {/* About Company Start */}
      <div className="overflow-hidden bg-white  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 animate-slideleft">
              <div className="lg:max-w-lg">
                <h2 className=" font-medium leading-7 text-3xl text-gray-900">
                  About <span>TechKardz</span>
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Get A better Connections
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione. <span> More...</span>
                </p>
              </div>
            </div>
            <img
              src="https://placehold.co/400x400/000000/FFF"
              alt="Product Promo"
              className="animate-slideright w-full  lg:max-w-xl rounded-xl   md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      {/* About Company End */}
    </>
  );
};

export default HomePage;
