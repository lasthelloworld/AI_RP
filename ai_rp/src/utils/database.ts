// // 引入 mysql2/promise 模块
// import mysql from 'mysql2/promise';

// // 引入 dotenv 模块
// import dotenv from 'dotenv';


// // 加载环境变量
// dotenv.config();

// // 创建数据库连接池
// const pool = mysql.createPool({
//   host: process.env.DB_HOST || 'localhost',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || '',
//   database: process.env.DB_NAME || 'test',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// export default pool;