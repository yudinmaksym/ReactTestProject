export const topSectionDefault = {
  id: 1,
  name: 'top',
  disabled: false,
  sectionOrder: null,
  content: {
    title: 'Lorem ipsum dolo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
    sold: '100000000',
    available: '100',
    from: 1513807200000,
    to: 1516658400000,
    bg: '../assets/images/top.png',
    problem: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },

    ],
    key_benefits: [
      {
        title: 'Lorem ipsum dolo',
        content: [
          {
            img: '../assets/images/target.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
          {
            img: '../assets/images/target.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
          {
            img: '../assets/images/target.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
        ],
      },
      {
        title: 'Lorem ipsum dolo',
        content: [
          {
            img: '../assets/images/target.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
          {
            img: '../assets/images/target.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
        ],
      },
      {
        title: 'Lorem ipsum dolo',
        content: [
          {
            img: '../assets/images/target.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
          {
            img: '../assets/images/target.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
        ],
      },
      {
        title: 'Lorem ipsum dolo',
        content: [
          {
            img: '../assets/images/target.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
          {
            img: '../assets/images/target.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
        ],
      },
    ],
    white_paper: [
      {
        img: '../assets/images/germany.png',
      },
      {
        img: '../assets/images/germany.png',
      },
      {
        img: '../assets/images/germany.png',
      },
    ],
    token_eco: [
      {
        disc: '../assets/images/bounty_el.png',
        text: 'Bitcoin Signature Campaign',
      },
      {
        disc: '../assets/images/bounty_el.png',
        text: 'Bitcoin Signature Campaign',
      },
      {
        disc: '../assets/images/bounty_el.png',
        text: 'Bitcoin Signature Campaign',
      },
      {
        disc: '../assets/images/bounty_el.png',
        text: 'Bitcoin Signature Campaign',
      },
      {
        disc: '../assets/images/bounty_el.png',
        text: 'Bitcoin Signature Campaign',
      },
    ],
    media_top: [
      {
        img: '../assets/images/m4.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
      {
        img: '../assets/images/m4.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
      {
        img: '../assets/images/m4.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
    ],
    media_bottom: [
      {
        img: '../assets/images/m4.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
      {
        img: '../assets/images/m4.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
      {
        img: '../assets/images/m4.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
    ],
    socials: [
      {
        link: 'https://facebook.com',
        type: 'fb',
        img: '../assets/images/facebook.png',
      },
      {
        link: 'https://www.instagram.com',
        type: 'insta',
        img: '../assets/images/insta.png',
      },
      {
        link: 'https://twitter.com',
        type: 'tw',
        img: '../assets/images/twitter-.png',
      },
      {
        link: 'https://telegram.org/',
        type: 'tel',
        img: '../assets/images/telegram.png',
      },
    ],
    countDown: {
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rates: 'US$0.05',
      acceptTitle: 'We accept',
      acceptLogo: '../assets/images/eth.png',
      acceptCrypt: 'ETH',
    },
    navbar: [
      {
        title: 'About',
      },
      {
        title: 'ICO section',
      },
      {
        title: 'Whitepaper',
      },
      {
        title: 'Roadmap',
      },
      {
        title: 'Team',
      },
      {
        title: 'FAQ',
      },
    ],
  },
};

export const INITIAL_STATE = {
  app: {
    type: '',
    locale: 'en',
    loaded: false,
  },
  dialog: {
    params: {},
    name: '',
  },
  events: {},
  user: {
    email: '',
  },
};
