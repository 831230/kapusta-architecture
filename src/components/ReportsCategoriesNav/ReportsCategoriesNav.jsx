import CategoryList from "../CategoryList/CategoryList";

const ReportsCategoriesNav = () => {
  return ( 
    <div className="categories-nav">
      <button>Expenses/Income</button>
      <div className="category-list">
        <CategoryList/>
      </div>
    </div>
   );
}
 
export default ReportsCategoriesNav;