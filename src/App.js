import "./sass/main.scss"
import logo from "./assets/logov1.png"
const App = () => {

  const categories = [
    {
      title: "Hats",
    },
    {
      title: "Sneakers",
    },
    {
      title: "Hats",
    },
    {
      title: "Womens",
    },
    {
      title: "Mens",
    },
  ];

  return (
    <>
    <img src={logo} />
      <div className="categories-container">
        {categories.map(({ title }, id) => (
          <div className="category-container" key={id + 1}>
            {/* img */}

            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shopping Now</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
