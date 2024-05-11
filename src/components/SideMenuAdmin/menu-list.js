/* eslint-disable import/no-extraneous-dependencies */
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

import paths from '../../constants/paths';

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagTwoToneIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ShoppingCartTwoToneIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: ShoppingCartCheckoutTwoToneIcon
  }
];

export default listLinks;
