import Card from "./Card";
import imageUrls from "./images";

const CardSection = () => {
  return (
    <section className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-[90rem] py-8 px-4 mx-auto sm:py-10 md:py-12">
      {imageUrls.map((imageUrl) => (
        <Card url={imageUrl} /> 
      ))}
    </section>
  );
};

export default CardSection;