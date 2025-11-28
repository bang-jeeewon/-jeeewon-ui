import { categories } from './category';

const menuItems = [
  {
    category: 1,
    label: 'Autocomplete',
    link: '/autocomplete',
  },
  {
    category: 1,
    label: 'Button',
    link: '/button',
  },
  {
    category: 1,
    label: 'Button Group',
    link: '/button-group',
  },
  {
    category: 1,
    label: 'Checkbox',
    link: '/checkbox',
  },
  {
    category: 1,
    label: 'Floating Action Button',
    link: '/floating-action-button',
  },
  {
    category: 1,
    label: 'Radio Group',
    link: '/radio-group',
  },
  {
    category: 1,
    label: 'Rating',
    link: '/rating',
  },
  {
    category: 1,
    label: 'Select',
    link: '/select',
  },
  {
    category: 1,
    label: 'Slider',
    link: '/slider',
  },
  {
    category: 1,
    label: 'Switch',
    link: '/switch',
  },
  {
    category: 1,
    label: 'Text Field',
    link: '/text-field',
  },
  {
    category: 1,
    label: 'Transfer List',
    link: '/transfer-list',
  },
  {
    category: 1,
    label: 'Toggle Button',
    link: '/toggle-button',
  },
  {
    category: 2,
    label: 'Avatar',
    link: '/avatar',
  },
  {
    category: 2,
    label: 'Badge',
    link: '/badge',
  },
  {
    category: 2,
    label: 'Chip',
    link: '/chip',
  },
  {
    category: 2,
    label: 'Divider',
    link: '/divider',
  },
  {
    category: 2,
    label: 'Icons',
    link: '/icons',
  },
  {
    category: 2,
    label: 'List',
    link: '/list',
  },
  {
    category: 2,
    label: 'Table',
    link: '/table',
  },
  {
    category: 2,
    label: 'Tooltip',
    link: '/tooltip',
  },
  {
    category: 2,
    label: 'Typography',
    link: '/typography',
  },
  {
    category: 3,
    label: 'Alert',
    link: '/alert',
  },
  {
    category: 3,
    label: 'Backdrop',
    link: '/backdrop',
  },
  {
    category: 3,
    label: 'Dialog',
    link: '/dialog',
  },
  {
    category: 3,
    label: 'Progress',
    link: '/progress',
  },
  {
    category: 3,
    label: 'Skeleton',
    link: '/skeleton',
  },
  {
    category: 3,
    label: 'Snackbar',
    link: '/snackbar',
  },
  {
    category: 4,
    label: 'Accordion',
    link: '/accordion',
  },
  {
    category: 4,
    label: 'App Bar',
    link: '/app-bar',
  },
  {
    category: 4,
    label: 'Card',
    link: '/card',
  },
  {
    category: 4,
    label: 'Paper',
    link: '/paper',
  },
  {
    category: 5,
    label: 'Bottom Navigation',
    link: '/bottom-navigation',
  },
  {
    category: 5,
    label: 'Breadcrumbs',
    link: '/breadcrumbs',
  },
  {
    category: 5,
    label: 'Drawer',
    link: '/drawer',
  },
  {
    category: 5,
    label: 'Link',
    link: '/link',
  },
  {
    category: 5,
    label: 'Menu',
    link: '/menu',
  },
  {
    category: 5,
    label: 'Pagination',
    link: '/pagination',
  },
  {
    category: 5,
    label: 'Speed Dial',
    link: '/speed-dial',
  },
  {
    category: 5,
    label: 'Stepper',
    link: '/stepper',
  },
  {
    category: 5,
    label: 'Tabs',
    link: '/tabs',
  },
  {
    category: 6,
    label: 'Box',
    link: '/box',
  },
  {
    category: 6,
    label: 'Container',
    link: '/container',
  },
  {
    category: 6,
    label: 'Grid',
    link: '/grid',
  },
  {
    category: 6,
    label: 'Stack',
    link: '/stack',
  },
  {
    category: 6,
    label: 'Image List',
    link: '/image-list',
  },
];

export const menus = categories.map((category) => ({
  ...category,
  items: menuItems.filter((item) => item.category === category.id),
}));
