const navlinks = [
  {
    id: 1,
    menu: "Our Services",
    content: true,
    title: "Our Services",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxljCiU3pRUXpw-39aklTNk7BDV3G9Dn7ocw&s",
    submenu: [
      {
        id: 1,
        subtitle: true,
        title: "Digital Marketing",
        sublinks: [
          {
            name: "Search Engine Optimization (SEO)",
            link: "/Search-Engine-Optimization",
          },
          {
            name: "App Store Optimization",
            link: "/App-Store-Optimization",
          },
          { name: "Ads (Social Media)", link: "/Ads" },
          { name: "Poster Design", link: "/Poster-Design" },
        ],
      },

      {
        id: 2,
        subtitle: true,
        title: "Core Development",
        sublinks: [
          { name: "Website Development", link: "/Website-Development" },
          {
            name: "Mobile Application Development",
            link: "/Mobile-Application-Development",
          },
          { name: "Ecommerce Solutions", link: "/Ecommerce-Solutions" },
          { name: "Software Development", link: "/Software-Development" },
          {
            name: "IOS Application Development",
            link: "/IOS-Application-Development",
          },
          {
            name: "Custom Development",
            link: "/Custom-Development",
          },
        ],
      },
    ],
  },
];

export default navlinks;
