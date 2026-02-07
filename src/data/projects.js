/**
 * Projects data
 *
 * To add a new project: copy an object below and edit the fields.
 * To remove: delete the object.
 * The Projects section will automatically reflect the changes.
 *
 * bannerImage: URL for project screenshot/thumbnail
 * github: GitHub repository URL (optional - set to null if private)
 * deployed: Live demo URL (optional - set to null if not deployed)
 */

export const projects = [
  {
    id: 1,
    title: "E-Commerce WebApp",
    description:
      "Developed a full-featured E-Commerce web application where users can securely sign up and sign in using OAuth authentication, browse products displayed in both grid and list views, and easily filter items based on alphabet, brand/company, color, price range, and category, with each product page providing detailed information such as ratings, descriptions, pricing, shipping fees, and available stock, while enabling seamless and secure checkout through Razorpay integration, which supports multiple payment methods for a smooth end-to-end purchasing experience.",
    bannerImage:
      "/images/ECommerce.png",
    github: "https://github.com/khanempire/ECommerce_genetal-store",
    deployed: "https://fastservice.netlify.app/",
  },
  {
    id: 2,
    title: "ManPower Services",
    description:
      "Built a one-stop manpower services platform that connects customers with handpicked, reliable professionals across a wide range of services including AC servicing, plumbing, carpentry, painting, and more, offering a convenient and hassle-free experience through prompt service availability, transparent pricing, strict quality assurance, and quick response times to ensure dependable and high-quality workmanship for all home and commercial service needs.",
    bannerImage:
     "/images/manpower.png",
    github: "https://github.com/khanempire/manpowerbiz",
    deployed: "https://manpowerbiz.in/",
  },
  {
    id: 3,
    title: "Github Users Search App",
    description:
      "Developed a web application that allows users to explore and visualize GitHub repository data through interactive chart-based analytics, enabling secure Sign-Up and Sign-In using OAuth authentication, searching GitHub users by username, and displaying comprehensive insights such as user profile data, most frequently used programming languages, stars per language, and the most popular language, all presented through clear and intuitive visualizations for better understanding of development trends and activity.",
    bannerImage:
      "/images/github_search_users.png",
    github: "https://github.com/khanempire/github-search-user",
    deployed: "https://find-githubuser.netlify.app/login",
  },
  {
    id: 4,
    title: "Blog WebApp",
    description:
      "Developed a blog web application that allows users to read and explore the latest technology articles, featuring a homepage that highlights recent posts with detailed article views, category-wise organization of content for easy discovery, separate sections for recent articles and related posts, and a robust content management setup where all data is stored in GraphCMS and efficiently fetched using GraphQL to ensure fast, structured, and scalable content delivery.",
    bannerImage:
      "/images/blog_webapp.png",
    github: "https://github.com/khanempire/devEasy",
    deployed: "https://dev-easy.vercel.app/",
  },
];
