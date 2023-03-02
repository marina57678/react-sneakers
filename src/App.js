import BrandSliders from "./components/BrandSliders";
import react from "react";
import Header from "./components/Header";
import namesOfBrands from "./jsons/namesOfBrands";
import listOfConverse from "./jsons/brands/converse/index";
import brands from "./jsons/namesOfBrands";
import MainNavigation from "./components/MainNavigation";

console.log(namesOfBrands);
console.log(listOfConverse.pictures[0]);
function App() {
   return (
      <div className="App">
         <Header />
         <div className="line"></div>
         <MainNavigation />
         <BrandSliders brand={brands} />;
      </div>
   );
}

export default App;
