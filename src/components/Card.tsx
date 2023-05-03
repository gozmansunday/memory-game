interface Props {
  url: string;
}

const Card = ({url}: Props) => {
  return (
    <div className="w-28 md:w-36 lg:w-44 border-neutral-600 border">
      <img src={url} alt={url} />
    </div>
  );
};

export default Card;