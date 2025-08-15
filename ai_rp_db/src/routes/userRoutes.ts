import { Router } from 'express'
import UserController from '@/controllers/UserController';

const router = Router()

// 用户搜索路由
// GET /api/users/search?keyword=张三
router.get('/search', UserController.searchUsers)

// 添加测试路由
router.get('/test', (req, res) => {
  res.json({ message: 'User routes are working!' })
})

export default router