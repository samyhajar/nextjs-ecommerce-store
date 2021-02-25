exports.up = async (sql) => {
  await sql`
		CREATE TABLE products(
		id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  	model VARCHAR(50),
		description text,
		url text,
		price INT,
		brand INT REFERENCES brand(id),
		body INT REFERENCES body(id),
		shape INT REFERENCES shape(id)
		);
	`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE products
	`;
};
