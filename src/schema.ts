import { text, serial, integer, pgTable } from "drizzle-orm/pg-core"

export const userTable = pgTable("user_table", {
    id: serial("id").primaryKey(),
    name: text("name"),
    age: integer("age")
});