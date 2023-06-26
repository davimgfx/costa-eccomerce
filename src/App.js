import "./sass/main.scss";
import { CategoryItem } from "./component"
import { categoriesData } from "./constants"
const App = () => {
 
  return (
    <>
      <div className="categories-container">
        {categoriesData.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </>
  );
};

export default App;
