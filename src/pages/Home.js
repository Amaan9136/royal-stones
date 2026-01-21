import MainLayout from "../layouts/MainLayout";
import HomeProducts from "../products/data/HomeProducts";
import MapOtherProducts from "../utils/MapOtherProduct";
import SearchBar from "../utils/SearchBar";

export default function Home() {
  return (
    <MainLayout>
      <div className="p-2 sm:ml-64">
        <SearchBar>
          <MapOtherProducts ArrayData={HomeProducts} />
        </SearchBar>
      </div>
    </MainLayout>
  );
}
