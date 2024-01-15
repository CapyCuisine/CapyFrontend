import CategorieType from '../components/CategorieType';


const Categories = () => {

    const categories = ['Categorie 1', 'Categorie 2', 'Categorie 3'];

  return (
    <div>
      <h2>Nos catégories de recette :</h2>  

      <div className="categories-container">
        {categories.map((categorie, index) => (
          <CategorieType key={index} nomCategorie={categorie} />
        ))}
      </div>
    </div>
  );
};
export default Categories;
