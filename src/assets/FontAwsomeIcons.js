import { faBars, faShop, faBug, faTruck, faMobilePhone, faMoneyBillTrendUp, faAngleDoubleDown, faHome, faShoppingBag, faBuilding, faPhone, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from 'react';

const CustomIcon = {
  home: faHome,
  bars: faBars,
  times: faTimes,
  cart: faShoppingCart,
  shop: faShop,
  contact: faPhone,
  branch: faBuilding,
  bag: faShoppingBag,
  down: faAngleDoubleDown,
  bug: faBug,
  mobile: faMobilePhone,
  truck: faTruck,
  money: faMoneyBillTrendUp,
};

const Icon = memo(({ name, defaultClassName, ...props }) => {
  console.log("icon");
  const iconData = CustomIcon[name];
  if (!iconData) {
    console.error(`Icon '${name}' not found`);
    return null;
  }

  return (
    <FontAwesomeIcon icon={iconData} className={defaultClassName || 'text-xl'} {...props} />
  );
});

export default Icon;
