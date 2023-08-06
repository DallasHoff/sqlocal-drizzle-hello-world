import { sql } from 'drizzle-orm';
import { db } from './db';
import { groceries } from './schema';

async function main() {
  // Prepare database table for demo
  await db.run(sql`CREATE TABLE IF NOT EXISTS groceries (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)`);
  await db.run(sql`DELETE FROM groceries`);
  
  // Insert grocery items into the database
  const itemNames = ['Bread', 'Milk', 'Rice', 'Apples'];

  for (let name of itemNames) {
    await db.insert(groceries).values({ name }).run();
  }

  // Fetch grocery items from the database
  const items = await db.select().from(groceries).all();

  // Create elements
  const h1 = document.createElement('h1');
  h1.innerText = 'Grocery List';
  const ul = document.createElement('ul');

  // Add a list item for each grocery item fetched from the database
  for (let item of items) {
    const li = document.createElement('li');
    li.innerText = item.name;
    ul.appendChild(li);
  }

  // Add elements to page
  document.body.appendChild(h1);
  document.body.appendChild(ul);
}

main();
