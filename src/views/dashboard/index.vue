<template>
  <el-container style="margin: 20px;">
    <el-header class="header" style="margin-bottom: 30px;">
      <h1>基于虚拟网络的入侵检测虚拟仿真平台</h1>
    </el-header>

    <el-main>
      <el-row :gutter="40">
        <el-col :span="24" style="margin-bottom: 20px;">
          <el-card class="box-card" shadow="always">
            <div class="text-center">
              <h2 style="margin-bottom: 15px;">实验的必要性</h2>
              <p>入侵检测是信息安全领域的关键任务，通过模拟的网络环境帮助学生了解网络攻击的形式，设计防范措施。传统实验在物理网络上进行，存在结构不可变、安全风险和高成本等问题。虚拟网络提供灵活、安全、低成本的替代方案。</p>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12" style="margin-bottom: 20px;">
          <el-card class="box-card" shadow="always">
            <h3 style="margin-bottom: 15px;">实验的实用性</h3>
            <p>该仿真平台通过模拟攻击情景，分析攻击特征，改进入侵检测模型的性能。帮助信息安全从业人员和学生提高安全意识和技能，更好地应对网络攻击。</p>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="box-card" shadow="always">
            <h3 style="margin-bottom: 15px;">教学设计的合理性</h3>
            <p>教学设计涵盖入侵检测的基本知识、安装配置、规则设置及报警应对等方面，实验环境提供多种网络入侵类型和检测方法，支持学生开发新算法，加深对技术的理解。</p>
          </el-card>
        </el-col>
        
        <el-col :span="24">
          <el-card class="box-card" shadow="always">
            <h3 style="margin-bottom: 15px;">实验系统的先进性</h3>
            <p>该实验利用EVE-NG网络虚拟化技术搭建环境，支持不同操作系统，实现资源共享和隔离，减少硬件成本。涵盖多个入侵检测方面，为学生提供接近真实的网络环境体验。</p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "IntrusionDetectionLab",
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

p {
  text-align: justify;
}
</style>
