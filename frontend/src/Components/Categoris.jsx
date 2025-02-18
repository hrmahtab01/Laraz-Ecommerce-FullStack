import React from "react";
import Container from "../Layout/Container";
import Image from "../Layout/Image";

const Categoris = () => {
  const categorys = [
    {
      name: "Shirt",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/f4a90ab802cab10f6ecebd7f4a0758b7.jpg_200x200q80.jpg_.webp",
    },
    {
      name: "Desktop",
      image:
        "https://media.istockphoto.com/id/506040816/photo/modern-desktop-pc-with-curved-screen.jpg?s=612x612&w=0&k=20&c=0ZjhDRbcyZnKfOOHNBw5U_H5pqyg13LHLRb0B5iDgUY=",
    },
    {
      name: "Laptop",
      image: "https://techterms.com/img/xl/laptop_586.png",
    },
    {
      name: "T-Shirt",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/631c3b4695fb2e9ba50aaaa5e00adc45.jpg_200x200q80.jpg_.webp",
    },
  ];

  return (
    <section className="mt-[50px]">
      <Container>
        <div>
          <h2 className="text-xl mt-8 text-center lg:text-2xl font-bold text-primary font-Nunito">
            Categorys
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
            {categorys.map((item) => (
              <>
                <div className="xl:w-[300px] mt-5  border border-gray-500 p-3 rounded-xl gap-4">
                  <Image className="w-full lg:h-[250px] object-contain"  src={item.image} alt={item.name} />
                  <h3 className="text-xl font-tirobangla  text-primary mt-2 text-center">
                    {item.name}
                  </h3>
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categoris;
