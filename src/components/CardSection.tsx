import Card from "./Card";
import { anomander, caladan, coltaine, dancer, fiddler, laseen, lostara, mappoicarium, quickben, rhulad, shadowthrone, shaik, sorry, spinnock, tehol, toblakai, tool, traveller, trull, whiskeyjack } from "./images";

const CardSection = () => {
  return (
    <section className="flex flex-wrap justify-center gap-8 max-w-[90rem] my-20 py-4 px-4 mx-auto md:my-8 lg:my-10">
      <Card url={anomander} />
      <Card url={caladan} />
      <Card url={coltaine} />
      <Card url={dancer} />
      <Card url={fiddler} />
      <Card url={laseen} />
      <Card url={lostara} />
      <Card url={mappoicarium} />
      <Card url={quickben} />
      <Card url={rhulad} />
      <Card url={shadowthrone} />
      <Card url={shaik} />
      <Card url={sorry} />
      <Card url={spinnock} />
      <Card url={tehol} />
      <Card url={toblakai} />
      <Card url={tool} />
      <Card url={traveller} />
      <Card url={trull} />
      <Card url={whiskeyjack} />
    </section>
  );
};

export default CardSection;