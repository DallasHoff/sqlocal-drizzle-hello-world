import { SQLocalDrizzle } from 'sqlocal/drizzle';
import { drizzle } from 'drizzle-orm/sqlite-proxy';

// Initialize Drizzle with SQLocal driver
const { driver, batchDriver } = new SQLocalDrizzle('database.sqlite3');
export const db = drizzle(driver, batchDriver);

