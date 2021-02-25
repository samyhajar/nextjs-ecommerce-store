const shape = [{ name: 'C Shape' }, { name: 'V Shape' }, { name: 'U Shape' }];

exports.up = async (sql) => {
  await sql`
	INSERT INTO shape
	${sql(shape, 'name')}
	`;
};

exports.down = async (sql) => {
  // just in case...
  await sql`
		DELETE FROM
		shape
		`;
};
