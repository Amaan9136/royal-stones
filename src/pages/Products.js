import MainLayout from '../layouts/MainLayout';
import SearchBar from "../utils/SearchBar";
import Granites from '../products/Granites';
import Marbles from '../products/Marbles';
import Tiles from '../products/Tiles';
import SandStones from '../products/SandStones';
import ItalianMarbles from '../products/ItalianMarbles';
import VietnamMarbles from '../products/VietnamMarbles';
import OnyxStones from '../products/OnyxStones';

export default function Products() {
  return (
    <>
      <MainLayout>
        <div className="p-2 sm:ml-64">
          <SearchBar>
            {/* this children components will be displayed in case of no null in search bar*/}
            <Granites />
            <Marbles />
            <Tiles />
            <SandStones />
            <ItalianMarbles />
            <VietnamMarbles />
            <OnyxStones />
          </SearchBar>
        </div>
      </MainLayout>
    </>
  )
}
