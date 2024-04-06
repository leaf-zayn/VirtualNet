<template>
  <el-container class="dhcp-container">
    <el-header>
      <h1 class="header-title">DHCP欺诈原理、防御及检测</h1>
    </el-header>

    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="box-card">
            <h2>什么是DHCP欺诈？</h2>
            <p>
              DHCP欺诈是一种网络攻击，攻击者在网络中设置假的DHCP服务器，分发错误的网络配置信息，从而控制或中断网络服务。
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
        <!-- DHCP入侵检测的卡片 -->
        <el-col>
          <el-card class="detection-card">
            <h2>入侵检测</h2>
            <p>
              DHCP入侵检测包括监控网络中的DHCP通信，确保所有DHCP响应都是来自合法的服务器。
            </p>
            <ul>
              <li>
                <strong>网络监控：</strong>实时监控DHCP通信，确保来源的合法性。
              </li>
              <li>
                <strong>服务器验证：</strong
                >验证DHCP服务器的身份，确保它是网络管理员授权的。
              </li>
              <li>
                <strong>配置审核：</strong
                >检查DHCP服务器的配置，防止不当配置造成安全漏洞。
              </li>
              <li>
                <strong>日志分析：</strong
                >定期分析DHCP服务器和客户端的日志，寻找异常行为。
              </li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
  
  <script>
export default {
  name: "DHCPFraudExplanation",
  data() {
    return {
      timelineData: [
        {
          timestamp: "初始化阶段",
          content: "攻击者在网络中部署假冒的DHCP服务器。",
        },
        {
          timestamp: "响应阶段",
          content: "假服务器响应DHCP请求，分发错误的网络设置。",
        },
        {
          timestamp: "控制阶段",
          content: "攻击者通过错误的网络配置来控制或中断网络服务。",
        },
      ],
      stepsData: [
        {
          title: "部署DHCP Snooping",
          description: "通过DHCP Snooping验证DHCP消息的合法性。",
        },
        { title: "配置动态ARP检查", description: "动态ARP检查可以与DHCP Snooping配合使用，以确保只有通过DHCP Snooping验证的设备才能进行ARP通信。" },
        {
          title: "限制未授权DHCP服务器",
          description: "在交换机上设置DHCP服务器白名单。",
        },
        {
          title: "使用网络访问控制(NAC)",
          description: "对连接到网络的设备进行身份验证和授权。",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.dhcp-container .el-header {
  /* 样式与DDoS相同，确保统一的视觉风格 */
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
  width: 280px; /* 或您希望的固定宽度 */
  height: 200px; /* 或您希望的固定高度 */
  overflow: auto; /* 如果内容超出指定大小，允许滚动 */
  padding: 5px; /* 可选，为了更好的内容显示 */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* 可选，添加一些阴影效果 */
  margin: 0 auto; /* 可选，如果您希望卡片在其父容器中居中 */
}
li {
  margin-bottom: 10px;
}
/* 其他样式保持与DDoS攻击页面模板相同 */
</style>
  