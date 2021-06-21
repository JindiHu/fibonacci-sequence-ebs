type IKeys = {
	redisHost: string;
	redisPort: string;
	pgUser: string;
	pgHost: string;
	pgDatabase: string;
	pgPassword: string;
};

const keys: IKeys = {
	redisHost: process.env.REDIS_HOST,
	redisPort: process.env.REDIS_PORT,
	pgUser: process.env.PG_USER,
	pgHost: process.env.PG_HOST,
	pgDatabase: process.env.PG_DATABASE,
	pgPassword: process.env.PG_PORT,
};

export default keys;
