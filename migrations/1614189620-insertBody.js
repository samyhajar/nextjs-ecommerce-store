const body = [{ name: 'Maple' }, { name: 'Rosewood' }, { name: 'Walnut' }]; // this constant is being used on line 6 for a helper

exports.up = async (sql) => {
  await sql`
	INSERT INTO body
	${sql(body, 'name')}
	`;
};

exports.down = async (sql) => {
  await sql`
		DELETE FROM
		body
		`;
};
