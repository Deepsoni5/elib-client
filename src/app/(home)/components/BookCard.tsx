import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded">
      <Image
        src={book.coverImage}
        alt={book.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "12rem" }}
      />
      <div>
        <h2 className="line-clamp-2 text-xl font-bold text-primary-600 text-balance">
          {book.title}
        </h2>
        <p className="font-bold text-primary-900 m-1">{book.author.name}</p>
        <Link
          href={`/book/${book._id}`}
          className="border border-b-primary-500 py-2 px-2 rounded-md mt-4 inline-block text-primary-500 font-medium text-sm hover:border-primary-100 hover:bg-primary-100 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
