import { Request, Response } from 'express'
import pool from '../config/db'

// 用户接口类型
interface User {
  id: number
  name: string
  email: string
  created_at: string
}

// 用户控制器类
 class UserController {
  // 搜索用户方法
  async searchUsers(req: Request, res: Response) {
    const { keyword } = req.query
    // 验证查询参数
    if (!keyword || typeof keyword !== 'string') {
      return res.status(400).json({ 
        success: false,
        message: '请输入搜索关键词'
      })
    }
    
    try {
      // 执行 SQL 查询
      const [rows] = await pool.query(
        `SELECT id, name, email, created_at 
         FROM ai_users 
         WHERE name LIKE ? OR email LIKE ?`,
        [`%${keyword}%`, `%${keyword}%`]
      ) as [User[], any]
      
      // 返回搜索结果
      res.json({
        success: true,
        data: rows
      })
    } catch (error) {
      console.error('数据库查询错误:', error)
      res.status(500).json({ 
        success: false,
        message: '服务器内部错误'
      })
    }
  }
}

export default new UserController()