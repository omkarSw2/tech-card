import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard/ProductCard";
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
];
const CategoryOptions = [
  { name: "All", href: "#", current: true },
  { name: "PVC", href: "#", current: false },
  { name: "Metal", href: "#", current: false },
  { name: "Combo", href: "#", current: false },
];
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://taponn.digital/cdn/shop/files/30_2cbbaa9e-bbd9-46e6-be30-85ed0c448c1e.png?v=1691579598&width=700",
    hoverImageSrc:
      "https://taponn.digital/cdn/shop/files/26.png?v=1691579598&width=500",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://taponn.digital/cdn/shop/files/30_2cbbaa9e-bbd9-46e6-be30-85ed0c448c1e.png?v=1691579598&width=700",
    hoverImageSrc:
      "https://taponn.digital/cdn/shop/files/26.png?v=1691579598&width=500",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://taponn.digital/cdn/shop/files/30_2cbbaa9e-bbd9-46e6-be30-85ed0c448c1e.png?v=1691579598&width=700",
    hoverImageSrc:
      "https://taponn.digital/cdn/shop/files/26.png?v=1691579598&width=500",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://taponn.digital/cdn/shop/files/30_2cbbaa9e-bbd9-46e6-be30-85ed0c448c1e.png?v=1691579598&width=700",
    hoverImageSrc:
      "https://taponn.digital/cdn/shop/files/26.png?v=1691579598&width=500",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Productpage() {
  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-5">
            <h1 className=" text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Products
            </h1>

            <div className="flex items-center">
              {/* Categiry Selector Start */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group  ml-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Categories
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {CategoryOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}>
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              {/* Categiry Selector End */}
              {/* Sort Selector Start  */}

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group ml-4   inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}>
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              {/* Sort Selector End */}
              <FormControl display="flex" className=" ml-4" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0" size={"xs"}>
                  In Stock
                </FormLabel>
                <Switch id="email-alerts" size={"sm"} />
              </FormControl>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            {/* Product grid  Start */}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
            {/* Product grid  End  */}
          </section>
        </main>
      </div>
    </div>
  );
}
