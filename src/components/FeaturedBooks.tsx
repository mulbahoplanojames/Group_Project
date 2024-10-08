import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { featuredBooks } from "@/Data/Data";

const FeaturedBooks = () => {
  return (
    <>
      <section className="bg-p1 md:px-20 px-4 md:py-12 py-10" id="/featured">
        <p className="text-lg text-slate-400 uppercase text-center pb-5">
          Some quality items
        </p>
        <h2 className="md:text-5xl text-4xl pb-8  text-center">
          Featured Books
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 gap-y-10 place-items-center">
          {featuredBooks.map((book) => (
            <Card
              className="px-4 py-5 bg-transparent w-full text-center group transition-all duration-300"
              key={book.id}
            >
              <CardContent>
                <img src={book.image} alt="" className="w-full" />
              </CardContent>
              <CardTitle className="text-lg pb-2 text-[#88846a]">
                {book.title}
              </CardTitle>
              <CardDescription>
                <p className="text-base pb-2 text-[#88846a]">{book.author}</p>
                <p className="text-base pb-2 text-[#88846a]">${book.price}</p>
              </CardDescription>
              <Button className="w-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Add to cart
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedBooks;
