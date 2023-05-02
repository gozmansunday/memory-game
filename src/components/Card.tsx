interface Props {
  url: string;
}

const Card = ({url}: Props) => {
  return (
    <div className="w-24 md:w-36 lg:w-44 border-neutral-400 border-2">
      <img src={url} alt={url} />
    </div>
  );
};

export default Card;