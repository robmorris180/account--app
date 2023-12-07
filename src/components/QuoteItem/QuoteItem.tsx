type QuoteItemProps = {
  id: number;
  title: string;
  price: number;
};

const QuoteItem = ({ title }: QuoteItemProps) => {
  return <div>{title}</div>;
};

export default QuoteItem;
