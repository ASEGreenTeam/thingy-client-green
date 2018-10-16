
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const Logs = {
  text: 'Logs',
  link: '/logs',
  icon: 'icon-speedometer',
  submenu: [
    {
        text: 'List',
        link: '/logs/list'
    }
  ]
};


const headingMain = {
    text: 'Main Navigation',
    heading: true
};

const headingComponents = {
    text: 'Components',
    heading: true
};

const headingMore = {
    text: 'More',
    heading: true
};

export const menu = [
    headingMain,
    Home,
    Logs,
    headingComponents,
    headingMore
];
