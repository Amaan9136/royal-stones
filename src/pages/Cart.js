import MainLayout from "../layouts/MainLayout";
import SearchBar from "../utils/SearchBar";
import CartComponent from "../components/CartComponent";

export default function Cart() {

  return (
    <>
      <MainLayout>
        <div className="p-2 sm:ml-64">
          <SearchBar>
            <header className="border-2 rounded-lg border-dashed text-center text-3xl font-bold pb-1 mb-2 mt-3">Check Out</header>
          <CartComponent />
          </SearchBar>
        </div>
      </MainLayout>
    </>
  )
}