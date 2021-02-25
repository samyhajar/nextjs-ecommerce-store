exports.up = async (sql) => {
  await sql`
			CREATE TABLE body (
				id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
				name VARCHAR(50)
			);

`;
};
exports.down = async (sql) => {
  await sql`
	 DROP TABLE body
	`;
};
