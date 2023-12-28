const ContactUs = () => {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/* <!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/htmlForms
--> */}

        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12 animate-slideleft">
                <p className="max-w-xl text-lg">
                  Do you have any question?for any query contact us at
                </p>

                <div className="mt-8">
                  <a href="" className="text-2xl font-bold text-pink-600">
                    {" "}
                    +91 998 606 2050{" "}
                  </a>

                  <p className="max-w-xl text-lg mt-8">or fill the form. </p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 animate-slideright">
                <htmlForm action="" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <input
                        className="peer sr-only"
                        id="option1"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <label
                        htmlFor="option1"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0">
                        <span className="text-sm"> Bulk Purchanse </span>
                      </label>
                    </div>

                    <div>
                      <input
                        className="peer sr-only"
                        id="option2"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <label
                        htmlFor="option2"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0">
                        <span className="text-sm"> Product Query </span>
                      </label>
                    </div>

                    <div>
                      <input
                        className="peer sr-only"
                        id="option3"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <label
                        htmlFor="option3"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0">
                        <span className="text-sm"> Product complaint </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                      Send Enquiry
                    </button>
                  </div>
                </htmlForm>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactUs;
