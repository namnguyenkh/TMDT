import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'menu.customers',
    icon: 'book-open-outline',
    children: [
      {
        title: 'Home',
        link: '/client/home'
      },
      {
        title: 'Food',
        link: '/client/item'
      },
      {
        title: 'About',
        link: '/client/about'
      },
      {
        title: 'Food-Detail',
        link: '/client/item-detail'
      },
      {
        title: 'Login',
        link: '/client/login'
      },
      {
        title: 'Register',
        link: '/client/register'
      },
      {
        title: 'Forgot',
        link: '/client/forgot'
      },
      {
        title: 'Cart',
        link: '/client/cart'
      },
      {
        title: 'Checkout wac',
        link: '/client/login-purchase'
      },
      {
        title: 'Checkout noac',
        link: '/client/purchase'
      },
      {
        title: 'Thanks',
        link: '/client/thanks-you'
      }
    ]
  },
  {
    title: 'menu.dashboard',
    icon: 'file-text-outline',
    link: '/admin/dashboard'
  },
  {
    title: 'menu.foods',
    icon: 'book-open-outline',
    children: [
      {
        title: 'Food List',
        link: '/admin/food/food-list'
      },
      {
        title: 'Food Upload',
        link: '/admin/food/food-upload'
      }
    ]
  },
  // Books
  // {
  //   title: 'menu.book.management',
  //   icon: 'bulb-outline',
  //   children: [
  //     {
  //       title: 'menu.book.list',
  //       link: '/admin/book/books-list'
  //     }
  //   ]
  // },
  // Accounting
  {
    title: 'menu.accounting',
    icon: 'people-outline',
    children: [
      {
        title: 'menu.accounting.list',
        icon: 'person-add-outline',
        link: '/admin/account/list'
      },
      {
        title: 'menu.accounting.permission',
        icon: 'person-done-outline',
        link: '/admin/account/permission'
      }
    ]
  },
  // User Management
  {
    title: 'menu.users',
    icon: 'radio-outline',
    children: [
      {
        title: 'menu.users',
        link: '/admin/users/list'
      },
      {
        title: 'menu.users.contract',
        link: '/admin/users/contracts'
      },
      {
        title: 'menu.users.historical',
        link: '/admin/users/historical'
      },
      {
        title: 'menu.users.shipper',
        link: '/admin/users/shipper'
      }
    ]
  },
  // Reporting
  {
    title: 'menu.reporting',
    icon: 'file-text-outline',
    children: [
      {
        title: 'menu.reporting.user-access',
        link: '/admin/report/user-access'
      },
      {
        title: 'menu.reporting.user-partner',
        link: '/admin/report/user-partner'
      }
    ]
  },
  // Marketing
  {
    title: 'Marketing',
    icon: 'bar-chart-outline',
    children: [
      {
        title: 'Marketing',
        link: '/admin/marketing/list'
      },
      // {
      //   title: 'Report',
      //   link: '/admin/marketing/report'
      // },
      {
        title: 'Create Marketing',
        link: '/admin/marketing/create'
      }
    ]
  }
];
