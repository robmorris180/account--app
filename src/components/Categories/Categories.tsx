type CategoriesProps = {
  categories: string[];
  filterQuotes: (category: string) => void;
};

export const Categories = ({ categories, filterQuotes }: CategoriesProps) => {
  return (
    <div>
      {categories.map((category, i: number) => (
        <button key={i} onClick={() => filterQuotes(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};
