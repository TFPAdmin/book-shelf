function BookCard({ book, onClick }) {
  return (
    <div className="book-card cursor-pointer" onClick={onClick}>
      <div className="book-card-image">
        <img
          src={book.image_url}
          alt={book.title}
          className="w-full h-full object-contain transition-transform hover:scale-[1.03] duration-300"
        />
      </div>
      <div className="book-card-content">
        <h2 className="text-lg font-serif mb-1 line-clamp-1">{book.title}</h2>
        <h3 className="text-gray-900 text-sm mb-2"> {book.subtitle}</h3>
        <p className="text-gray-900 text-sm mb-2">by {book.author}</p>
        <p className="text-gray-900 text-sm overflow-hidden line-clamp-3 mb-4">
          {book.description}
        </p>
        <button className="btn-primary w-full text-sm font-bold">
          Learn more
        </button>
        {/* New button linking to Wattpad profile */}
        <a
          href="https://www.wattpad.com/user/CBReed_Author"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary w-full text-sm font-bold mt-2"
        >
          Visit Wattpad Profile
        </a>
      </div>
    </div>
  );
}

export default BookCard;
