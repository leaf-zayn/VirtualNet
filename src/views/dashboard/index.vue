<template>
  <el-container style="margin: 20px;">
    <el-header class="header" style="margin-bottom: 30px;">
      <h1>虚拟网络攻防实验室介绍</h1>
    </el-header>

    <el-main>
      <el-row :gutter="40">
        <el-col :span="24" style="margin-bottom: 20px;">
          <el-card class="box-card" shadow="always">
            <div class="text-center">
              <h2 style="margin-bottom: 15px;">实验室概览</h2>
              <p>本实验室通过GNS3为学生提供一个模拟的网络环境，进行网络攻防实验。学生可以在此环境中安全地学习和实践网络攻击与防御技术。</p>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12" style="margin-bottom: 20px;">
          <el-card class="box-card" shadow="always">
            <h3 style="margin-bottom: 15px;">核心功能</h3>
            <ul>
              <li>网络拓扑构建</li>
              <li>攻击模拟</li>
              <li>入侵检测</li>
              <li>防御机制实践</li>
            </ul>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="box-card" shadow="always">
            <h3 style="margin-bottom: 15px;">快速入门</h3>
            <ol>
              <li>在GNS3中创建网络拓扑</li>
              <li>选择并实施网络攻击</li>
              <li>应用网络防御策略</li>
              <li>使用检测工具分析攻击</li>
            </ol>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "LabIntroduction",
};
</script>

<style scoped>
.header h1 {
  color: #333;
  text-align: center;
  margin: 0;
}

.box-card {
  border-radius: 8px;
}

.text-center {
  text-align: center;
}

h2, h3 {
  color: #409EFF;
}

ul, ol {
  padding-left: 1.5em;
}
</style>
