import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { testConnection } from './config/db'
import userRoutes from '@/routes/userRoutes';

// 加载环境变量
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// 中间件
app.use(cors()) // 允许跨域
app.use(express.json()) // 解析JSON请求体

//添加API路由，注：使用use关键字
app.use('/api/users', userRoutes);

// 健康检查端点
app.get('/health', async (req, res) => {
  const dbConnected = await testConnection()
  res.status(200).json({
    status: 'UP',
    database: dbConnected ? 'CONNECTED' : 'DISCONNECTED'
  })
})

// 启动服务器
app.listen(PORT, async () => {
  console.log(`🚀 后端服务已启动: http://localhost:${PORT}`)
  console.log(`🔍 用户搜索API: GET http://localhost:${PORT}/api/users/search?keyword=张三`)
  
  // 测试数据库连接
  await testConnection()
})
