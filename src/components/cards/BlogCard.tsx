import { TBlog } from "@/assets/data/blogs";
import { cn } from "@/lib/utils";
import Link from "next/link";

type BlogCardProps = {
  blog: Partial<TBlog>;
  className?: string;
};

const BlogCard = ({ blog, className }: BlogCardProps) => {
  return (
    <div
      className={cn(
        "group basis-1/1 sm:basis-1/2 sm:px-4 md:basis-1/3 md:px-6",
        className,
      )}
    >
      <div className="group/card grid items-center gap-6">
        <Link
          href={"/blogs/" + blog?._id}
          className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-xl"
        >
          <img
            className="bg-muted size-full object-cover object-center transition-all duration-700 ease-in-out group-hover/card:scale-110"
            src={blog?.thumbnail}
            alt={blog?.title}
          />
        </Link>
        <div className="space-y-6 md:pr-12">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center divide-x">
              {blog?.tags?.map((tag, index) => (
                <strong
                  key={index}
                  className="text-muted-foreground inline-block px-2 text-sm font-normal capitalize first:pl-0 last:pr-0"
                >
                  {tag}
                </strong>
              ))}
            </div>
            <h3 className="text-3xl">
              <Link
                href={"/blogs/" + blog?._id}
                className="primary hover:text-primary underline-effect"
              >
                {blog?.title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
