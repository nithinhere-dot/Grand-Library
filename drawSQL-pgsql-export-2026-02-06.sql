CREATE TABLE "Users"(
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'User',
    "timestamp" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "password" TEXT NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE Books(
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" BIGINT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
ALTER TABLE
    "Books" ADD PRIMARY KEY("id");
CREATE TABLE borrowings(
    "id" SERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "Book_id" BIGINT NOT NULL,
    "Borrowed_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "Returned_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "borrowings" ADD PRIMARY KEY("id");
ALTER TABLE
    "borrowings" ADD CONSTRAINT "borrowings_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "borrowings" ADD CONSTRAINT "borrowings_book_id_foreign" FOREIGN KEY("Book_id") REFERENCES "Books"("id");
