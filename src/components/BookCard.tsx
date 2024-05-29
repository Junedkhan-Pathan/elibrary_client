import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex gap-5 border p-5 shadow-md rounded">
          <img
            src={
              "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
            }
            alt={"Book"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "12rem" }}
          />
          <div>
            <h2 className="line-clamp-2 text-xl font-bold text-primary-600 text-balance">
              Atomic habbit
            </h2>
            <p className="font-bold text-primary-900 mt-1">authors</p>
            <Link
              to={`/book`}
              className="py-1 px-2 rounded border border-primary-500 mt-4 inline-block text-primary-500 font-medium text-sm
                    hover:border-primary-100 hover:bg-primary-100 transition"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
