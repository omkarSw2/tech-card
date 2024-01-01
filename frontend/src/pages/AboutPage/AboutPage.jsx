const AboutPage = () => {
  return (
    <>
      {/* About Banner Intro Start  */}
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
      {/* About Banner Intro End  */}
      <div className="overflow-hidden bg-white  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 text-center align-middle animate-slideleft">
              <div className="lg:max-w-lg ">
                <h2 className=" font-medium leading-7 text-3xl lg:text-5xl  text-gray-900">
                  Our Trusted Users
                </h2>
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  1K+
                </p>
                <p className="text-lg leading-8 text-gray-900">Active users</p>
              </div>
            </div>
            <img
              src="https://placehold.co/400x400/000000/FFF"
              alt="Product Promo"
              className="animate-slideright w-full  lg:max-w-xl rounded-xl  md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
