DROP TABLE IF EXISTS items;
CREATE TABLE items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    buy_price INTEGER DEFAULT 0,
    sell_price INTEGER DEFAULT 0
);
-- Seed some data
INSERT INTO items (name, buy_price, sell_price) VALUES ('Indomie', 3000, 3500);