import { useState } from "react";

import Card from "./Card";
import imageUrls from "./images";

const CardSection = () => {
  const [imageUrlArray, setImageUrlArray] = useState<string[]>(imageUrls);

  const handleShuffleArray = () => {
    const array = [...imageUrlArray]

    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setImageUrlArray(array);
  };

  return (
    <section className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-[90rem] py-8 px-4 mx-auto sm:py-10 md:py-12">
      {imageUrlArray.map((imageUrl) => (
        <div onClick={handleShuffleArray}>
          <Card
            key={imageUrl}
            url={imageUrl}
          /> 
        </div>
      ))}
    </section>
  );
};

export default CardSection;