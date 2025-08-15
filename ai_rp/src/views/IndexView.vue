<template>
  <div class="home-page">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="@/assets/logo.png" alt="Logo" />
          <span class="logo-text">LOGO</span>
        </div>
        <ul class="nav-menu">
          <li class="nav-item"><a href="#" class="nav-link">首页</a></li>
          <li class="nav-item"><a href="#" class="nav-link">产品</a></li>
          <li class="nav-item"><a href="#" class="nav-link">解决方案</a></li>
          <li class="nav-item"><a href="#" class="nav-link">关于我们</a></li>
          <li class="nav-item"><a href="#" class="nav-link">联系我们</a></li>
        </ul>
        <button class="nav-button">立即体验</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">AI人工智能解决方案</h1>
          <p class="hero-description">
            基于深度学习和自然语言处理技术，为企业提供智能化解决方案，提升业务效率和用户体验
          </p>
          <!-- AI Generator Section -->
          <div class="ai-generator">
            <div class="device-selector">
              <h3>选择设备类型</h3>
              <div class="device-options">
                <button 
                  :class="['device-btn', { active: selectedDevice === 'web' }]"
                  @click="selectDevice('web')"
                >
                  网页端
                </button>
                <button 
                  :class="['device-btn', { active: selectedDevice === 'mobile' }]"
                  @click="selectDevice('mobile')"
                >
                  移动端
                </button>
              </div>
            </div>
            
            <div class="prompt-section">
              <h3>输入提示词</h3>
              <textarea 
                v-model="promptText"
                placeholder="请描述您想要生成的页面，例如：一个电商网站首页，包含商品展示和购物车功能..."
                class="prompt-textarea"
              ></textarea>
            </div>
            
            <div class="language-selector">
              <h3>选择代码语言</h3>
              <select v-model="selectedLanguage" class="language-dropdown">
                <option value="html">HTML</option>
                <option value="vue2">Vue 2</option>
                <option value="vue3">Vue 3</option>
                <option value="react">React</option>
                <option value="react-ts">React (TypeScript)</option>
              </select>
            </div>
            
            <button 
              @click="generatePage"
              :disabled="!promptText.trim()"
              class="generate-button"
            >
              生成页面
            </button>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-placeholder">
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <h2 class="features-title">我们的优势</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-placeholder"></div>
            </div>
            <h3 class="feature-title">智能识别</h3>
            <p class="feature-description">
              采用先进的AI算法，精准识别图像、语音和文本内容
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-placeholder"></div>
            </div>
            <h3 class="feature-title">高效处理</h3>
            <p class="feature-description">
              强大的计算能力，实现毫秒级响应速度
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-placeholder"></div>
            </div>
            <h3 class="feature-title">安全可靠</h3>
            <p class="feature-description">
              多重安全防护机制，保障数据隐私和系统稳定
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-placeholder"></div>
            </div>
            <h3 class="feature-title">灵活部署</h3>
            <p class="feature-description">
              支持云端、本地和混合部署模式，满足不同需求
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-info">
            <div class="footer-logo">
              <img src="@/assets/logo.png" alt="Logo" />
              <span class="logo-text">LOGO</span>
            </div>
            <p class="footer-description">
              专注于人工智能技术研发，为企业提供智能化解决方案
            </p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>产品</h4>
              <ul>
                <li><a href="#">AI识别</a></li>
                <li><a href="#">自然语言处理</a></li>
                <li><a href="#">机器学习</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>关于我们</h4>
              <ul>
                <li><a href="#">公司简介</a></li>
                <li><a href="#">团队介绍</a></li>
                <li><a href="#">发展历程</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>联系我们</h4>
              <ul>
                <li><a href="#">客服热线</a></li>
                <li><a href="#">邮箱地址</a></li>
                <li><a href="#">办公地址</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2023 AI解决方案. 保留所有权利</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 设备选择
const selectedDevice = ref('web')

// 提示词输入
const promptText = ref('')

// 代码语言选择
const selectedLanguage = ref('vue3')

// 选择设备类型
const selectDevice = (device: string) => {
  selectedDevice.value = device
}

// 生成页面函数
const generatePage = () => {
  if (!promptText.value.trim()) {
    alert('请输入提示词')
    return
  }
  
  // 这里应该调用实际的API来生成页面
  console.log('生成页面参数:', {
    device: selectedDevice.value,
    prompt: promptText.value,
    language: selectedLanguage.value
  })
  
  alert(`页面生成请求已提交！\n设备类型: ${selectedDevice.value}\n代码语言: ${selectedLanguage.value}\n提示词: ${promptText.value.substring(0, 30)}...`)
}

</script>

<style scoped>
.home-page {
  font-family: 'Arial', sans-serif;
  color: #333;
}

/* Navigation Styles */
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.nav-logo {
  display: flex;
  align-items: center;
}

.nav-logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.nav-menu {
  display: flex;
  list-style: none;
}

.nav-item {
  margin: 0 15px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #409EFF;
}

.nav-button {
  background-color: #409EFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #337ecc;
}

/* Hero Section Styles */
.hero-section {
  margin-top: 80px;
  padding: 60px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4edf9 100%);
}

.hero-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
}

.hero-content {
  flex: 1;
  padding-right: 40px;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-description {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-image {
  flex: 1;
}

.image-placeholder {
  background-color: #ddd;
  border-radius: 10px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

/* AI Generator Styles */
.ai-generator {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.ai-generator h3 {
  margin-bottom: 15px;
  color: #333;
  font-size: 18px;
}

.device-selector {
  margin-bottom: 20px;
}

.device-options {
  display: flex;
  gap: 15px;
}

.device-btn {
  flex: 1;
  padding: 12px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.device-btn:hover {
  border-color: #409EFF;
}

.device-btn.active {
  border-color: #409EFF;
  background-color: #e4edf9;
  color: #409EFF;
  font-weight: bold;
}

.prompt-section {
  margin-bottom: 20px;
}

.prompt-textarea {
  width: 100%;
  min-height: 120px;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  resize: vertical;
  transition: border-color 0.3s;
}

.prompt-textarea:focus {
  outline: none;
  border-color: #409EFF;
}

.language-selector {
  margin-bottom: 25px;
}

.language-dropdown {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
}

.language-dropdown:focus {
  outline: none;
  border-color: #409EFF;
}

.generate-button {
  width: 100%;
  padding: 15px;
  background-color: #409EFF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.generate-button:hover:not(:disabled) {
  background-color: #337ecc;
}

.generate-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* Features Section Styles */
.features-section {
  padding: 80px 0;
  background-color: #fff;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.features-title {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.feature-card {
  text-align: center;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  margin-bottom: 20px;
}

.icon-placeholder {
  width: 80px;
  height: 80px;
  background-color: #e4edf9;
  border-radius: 50%;
  margin: 0 auto;
}

.feature-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.feature-description {
  color: #666;
  line-height: 1.6;
}

/* Footer Styles */
.footer {
  background-color: #333;
  color: #fff;
  padding: 60px 0 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.footer-info {
  flex: 1;
  max-width: 300px;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.footer-logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.footer-description {
  color: #ccc;
  line-height: 1.6;
}

.footer-links {
  display: flex;
  gap: 60px;
}

.footer-column h4 {
  margin-bottom: 20px;
  font-size: 18px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #409EFF;
}

.footer-bottom {
  border-top: 1px solid #555;
  padding-top: 20px;
  text-align: center;
  color: #999;
}

/* Responsive Design */
@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    padding-right: 0;
    margin-bottom: 40px;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-content {
    flex-direction: column;
    gap: 40px;
  }
  
  .footer-links {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 20px;
  }
}
</style>