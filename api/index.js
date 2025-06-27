export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Route: GET /api/books — list all books
    if (pathname === "/api/books" && request.method === "GET") {
      const { results } = await env.DB.prepare("SELECT * FROM books").all();
      return Response.json({ books: results, source: "d1" });
    }

    // Route: GET /api/books/:id — get book by ID
    const bookMatch = pathname.match(/^\/api\/books\/(\d+)$/);
    if (bookMatch && request.method === "GET") {
      const bookId = Number(bookMatch[1]);

      const { results } = await env.DB.prepare(
        "SELECT * FROM books WHERE id = ?"
      ).bind(bookId).all();

      if (results.length === 0) {
        return new Response("Book not found", { status: 404 });
      }

      return Response.json({ book: results[0], source: "d1" });
    }

    // Route: POST /api/books — add a book (expects JSON body)
    if (pathname === "/api/books" && request.method === "POST") {
      try {
        const body = await request.json();
        const { title, author, genre, description } = body;

        if (!title || !genre) {
          return new Response("Title and genre are required", { status: 400 });
        }

        await env.DB.prepare(`
          INSERT INTO books (title, author, genre, description)
          VALUES (?, ?, ?, ?)
        `).bind(title, author ?? null, genre, description ?? null).run();

        return new Response("Book added", { status: 201 });
      } catch (err) {
        return new Response("Invalid JSON", { status: 400 });
      }
    }

    // Default 404 response
    return new Response("Not found", { status: 404 });
  }
};
