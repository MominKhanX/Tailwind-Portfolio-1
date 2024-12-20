export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];
  
export const gridItems = [
  {
    id: 1,
    title: "I advocate for adaptability, meeting dynamic client needs.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Skills",
    description: "My Skills:",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 top-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    skills: [
      { name: "HTML", level: 98 },
      { name: "CSS", level: 85 },
      { name: "TypeScript", level: 74 },
      { name: "Next.Js", level: 87 },
      { name: "ReactJs", level: 64 },
      { name: "Tailwind CSS", level: 89 },
    ],
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
  
  export const projects = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      des: "Next.js and Tailwind CSS power this sleek, responsive E-Commerce site, enhancing user experience with modern design.",
      img: "/E-commerce-web.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://ui-ux-hackathon-design-q2.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio 2 (By Custom CSS)",
      des: "Portfolio 2, crafted with Next.js and custom CSS, showcases innovative design and interactive features for a unique web presence.",
      img: "/Portfolio2.png",
      iconLists: ["/next.svg", "/css-3.svg", "/ts.svg"],
      link: "https://css-portfolio-web-2.vercel.app/",
    },
    {
      id: 3,
      title: "The Coffee Club",
      des: "The Coffee Club website, built with Next.js and Tailwind, offers a sleek, responsive, and user-friendly experience.",
      img: "/TheCoffeeClub.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://the-coffee-club-next-js.vercel.app/",
    },
    {
      id: 4,
      title: "Whitespace Figma",
      des: "A Figma design brought to life with Next.js and Tailwind CSS, showcasing a sleek, visually stunning layout.",
      img: "/Whitespace.png",
      iconLists: ["/next.svg", "/tail.svg"],
      link: "https://homework-assignment3-whitespace.vercel.app/",
    },
];
  
  export const testimonials = [
    {
      quote: "Collaborating with Momin was a seamless and enjoyable experience. His attention to detail, reliability, and commitment to delivering top-tier results made every step of the project effortless. Momin’s passion for development is clear, and if you're looking to enhance your online presence, he’s the right person.",
      name:  "Alvaro Fernandez",
      title: "Director of Quantum Technologies",
    },
    {
      quote: "Working with Momin was an outstanding experience from beginning to end. His professionalism, creativity, and focus on delivering high-quality results made the entire process enjoyable. Momin's enthusiasm for development and innovation is truly inspiring. For anyone looking to elevate their website and brand, Momin is an excellent choice.",
      name:  "Mark Stone",
      title: "Product Manager of Nova Industries",
    },
    {
      quote: "I thoroughly enjoyed collaborating with Momin. His professionalism, reliability, and passion for excellence were evident throughout our project. Momin brings energy and dedication to every aspect of development, ensuring exceptional results. If you want to elevate your brand and online presence, Momin is the ideal partner.",
      name:  "Carlos Rodríguez",
      title: "HR Manager of SilverLine Technologies",
    },
    {
      quote: "It was a pleasure working with Momin on our project. His professionalism, timely communication, and relentless drive to achieve great results set him apart. Momin’s enthusiasm for every aspect of development stands out. If you want to take your website to the next level, Momin is your go-to partner.",
      name:  "Elena Hernández",
      title: "Brand Manager of Cascade Industries",
    },
    {
      quote: "Momin was an exceptional partner to collaborate with. His professionalism, attention to detail, and ability to deliver outstanding results on time made the process efficient and enjoyable. Momin’s passion for development is inspiring. If you want to elevate your website and brand, Momin is the perfect fit.",
      name:  "Owen Ford",
      title: "Project Manager of CloudWave Technologies",
    },
];
  
  export const workExperience = [
    {
      id: 1,
      title: "Web Designer",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quos expedita eveniet voluptatum!",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Junior Front-end developer",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quos expedita eveniet voluptatum!",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quos expedita eveniet voluptatum!",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Frontend Developer",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quos expedita eveniet voluptatum!",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
];
  
