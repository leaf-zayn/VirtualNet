<template>
  <el-container class="ddos-container">
    <el-header>
      <h1 class="header-title">DDoS攻击原理、防御及检测</h1>
    </el-header>

    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="box-card">
            <h2>什么是DDoS攻击？</h2>
            <p>
              DDoS（Distributed Denial of
              Service，分布式拒绝服务攻击）是一种网络攻击手段，旨在通过向目标网络或资源发送大量请求来使其无法处理合法用户的请求，从而使服务不可用。
            </p>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card">
            <h2>攻击原理</h2>
            <el-timeline>
              <el-timeline-item
                v-for="(item, index) in timelineData"
                :key="index"
                :timestamp="item.timestamp"
                placement="top"
              >
                {{ item.content }}
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card">
            <h2>如何防御</h2>
            <el-row :gutter="20">
              <el-col v-for="(step, index) in stepsData" :key="index" :span="6">
                <el-card class="box-little-card">
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <!-- DDoS入侵检测的卡片 -->
        <el-col>
          <el-card class="detection-card">
            <h2>入侵检测</h2>
            <p>
              DDoS入侵检测旨在通过分析网络流量和行为模式来识别和预防DDoS攻击。这个过程包括：
            </p>
            <ul>
              <li>
                <strong>流量监控：</strong
                >实时监控网络流量，以识别流量异常增加的情况，这可能是DDoS攻击的初期迹象。
              </li>
              <li>
                <strong>行为分析：</strong
                >使用基于行为的检测技术来识别与正常网络行为模式不一致的活动。
              </li>
              <li>
                <strong>签名匹配：</strong
                >对比流量特征与已知DDoS攻击签名，识别已知的攻击模式。
              </li>
              <li>
                <strong>异常检测：</strong
                >利用机器学习和统计模型分析流量，识别不符合正常行为的模式。
              </li>
              <li>
                <strong>响应与缓解：</strong
                >一旦检测到潜在的DDoS攻击，立即启动预设的响应机制，如流量清洗，以减轻攻击影响。
              </li>
            </ul>
            <p>
              有效的DDoS入侵检测不仅可以帮助识别即将发生的攻击，还可以为快速响应和缓解提供关键信息。
            </p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
  
  <script>
export default {
  name: "DDoSExplanation",
  data() {
    return {
      timelineData: [
        {
          timestamp: "发起阶段",
          content: "攻击者控制大量计算机或设备，形成僵尸网络。",
        },
        {
          timestamp: "放大阶段",
          content: "利用网络协议缺陷或漏洞增加攻击流量。",
        },
        {
          timestamp: "执行阶段",
          content: "向目标发送大量请求，耗尽目标资源，使服务不可用。",
        },
      ],
      stepsData: [
        {
          title: "部署基础防护",
          description: "利用防火墙和入侵检测系统防御未知攻击。",
        },
        { title: "流量清洗", description: "使用流量清洗服务过滤掉非法流量。" },
        { title: "增加冗余带宽", description: "提高网络带宽，减轻攻击压力。" },
        {
          title: "建立应急计划",
          description: "准备应急响应计划和工具，以快速恢复服务。",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.ddos-container .el-header {
  background-color: #409eff;
  color: #fff;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.header-title {
  color: #fff;
}
.box-card {
  margin-bottom: 20px;
}
.box-little-card {
  width: 250px; /* 或您希望的固定宽度 */
  height: 200px; /* 或您希望的固定高度 */
  overflow: auto; /* 如果内容超出指定大小，允许滚动 */
  padding: 10px; /* 可选，为了更好的内容显示 */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* 可选，添加一些阴影效果 */
  margin: 0 auto; /* 可选，如果您希望卡片在其父容器中居中 */
}
li {
  margin-bottom: 10px;
}
</style>
  