import { useNavigate } from "react-router";
import Breadcrumbs from "./Breadcrumbs";

function BookDetail({ bookData }) {
  const navigate = useNavigate();
  const { book, relatedBooks } = bookData;

  const breadcrumbItems = [{ label: "All Books", value: null }];

  if (book.genre) {
    breadcrumbItems.push({ label: book.genre, value: book.genre });
  }

  breadcrumbItems.push({ label: book.title, value: "book" });

  const handleNavigate = (value) => {
    if (value === null) {
      navigate("/");
    } else if (value !== "book") {
      navigate(`/genre/${encodeURIComponent(value)}`);
    }
  };

  const handleRelatedBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} onNavigate={handleNavigate} />

      <div className="space-y-12 mt-6">
        <div className="card">
          <div className="md:flex gap-10">
            <div className="md:w-1/3 lg:w-1/4 flex-shrink-0 mb-8 md:mb-0">
              <img
                src={book.image_url}
                alt={book.title}
                className="w-full h-full object-contain rounded-md border border-gray-200"
              />
            </div>
            <div className="md:w-2/3 lg:w-3/4">
              <h1 className="mb-3">{book.title}</h1>
              <h2 className="mb-3">{book.subtitle}</h2>
              <h2 className="text-xl text-gray-900 mb-6 font-serif font-normal">
                by {book.author}
              </h2>

              {book.genre && (
                <div className="mb-6">
                  <span
                    className="inline-block border border-blue-800 text-blue-800 text-sm px-3 py-1 rounded-full font-sans cursor-pointer"
                    onClick={() =>
                      navigate(`/genre/${encodeURIComponent(book.genre)}`)
                    }
                  >
                    {book.genre}
                  </span>
                </div>
              )}

              <p className="text-gray-900 leading-relaxed">{book.description}</p>

              {/* Button linking to Wattpad profile (Outlined) */}
              <div className="mt-8">
                <a
                  href="https://www.wattpad.com/user/CBReed_Author"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-fu
