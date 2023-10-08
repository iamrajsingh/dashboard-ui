import blog from "../assets/blog.webp";

const blogPosts = [
  {
    title: "Blended Learning: What It Is, Why It Matters & How to Apply",
    date: "7 days ago",
  },
  {
    title: "Join the Course Sales Bootcamp [Free Live Workshops]",
    date: "12 days ago",
  },
  {
    title: "12 Steps to Creating Awesome Live Classes in 2021",
    date: "20 days ago",
  },
  {
    title: "Guy Kawasaki on the Future of Business in the Midst of al Pandemic",
    date: "22 days ago",
  },
  {
    title:
      "What is Educational Marketing & How to Use it to Grow with Examples",
    date: "23 days ago",
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col  bg-white mr-2 h-fit">
      <div className="flex flex-row p-2 items-center">
        <img src={blog} alt="blog" width={35} />
        <p className="text-slate-500 text-sm py-2 text-center font-bold pr-1">
          How to sell courses blog
        </p>
        <p className=" flex items-center px-2 py-1 rounded-3xl bg-secondary text-center text-white text-[16px] h-7">
          <a href="#">see all</a>
        </p>
      </div>
      <ul className="p-2">
        {blogPosts.map((item) => (
          <div className="w-full flex justify-between">
            <li className="relative w-[65%] mb-2 list-[circle] left-6" key={item.date}>
              <a href="#" className="text-secondary text-sm">
                {item.title}
              </a>
            </li>
            <p className="text-sm text-slate-400">{item.date}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
