const brand = [{ name: 'Fender' }, { name: 'Ibanez' }, { name: 'Gibson' }, {}];

exports.up = async (sql) => {
  await sql`
	INSERT INTO brand
	${sql(brand, 'name')}
	`;
};

exports.down = async (sql) => {
  await sql`
		DELETE FROM
		brand
		`;
};
