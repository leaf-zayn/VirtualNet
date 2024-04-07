<template>
  <el-container class="stp-container">
    <el-header>
      <h1 class="header-title">生成树协议（STP）攻击原理及防御</h1>
    </el-header>

    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="box-card">
            <h2>什么是STP攻击？</h2>
            <p>
              STP攻击是指利用网络的生成树协议的漏洞，通过发送伪造的BPDU（桥协议数据单元）信息来控制网络的生成树计算，进而导致网络拓扑结构的改变，造成网络通信故障或者网络流量被恶意重定向。
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
            <el-col :span="24" class="defense-section">
          <ul>
            <li v-for="(step, index) in stepsData" :key="index">
              <h3 style="font-size:large;">{{ step.title }}</h3>
              <p style="font-size: medium;">{{ step.description }}</p>
            </li>
          </ul>
        </el-col>
          </el-card>
        </el-col>
        
        <!-- STP入侵检测的卡片 -->
        <el-col>
          <el-card class="detection-card">
            <h2>入侵检测</h2>
            <p>
              STP入侵检测旨在通过监控和分析网络流量中的BPDU包，识别异常或伪造的STP活动。这个过程包括流量监控、行为分析、异常检测等多个方面。
            </p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "STPExplanation",
  data() {
    return {
      timelineData: [
        {
          timestamp: "攻击发起阶段",
          content: "攻击者通过发送伪造的BPDU包，试图成为根桥。",
        },
        {
          timestamp: "拓扑改变阶段",
          content: "网络拓扑因错误的根桥选举而发生改变，导致流量异常。",
        },
        {
          timestamp: "流量重定向阶段",
          content: "攻击者利用控制的位置重定向或中断网络流量。",
        },
      ],
      stepsData: [
        {
          title: "BPDU防护",
          description: "在所有接口上启用BPDU防护，阻止非法BPDU包。",
        },
        { 
          title: "根保护", 
          description: "配置根保护以维护网络拓扑的稳定性。" 
        },
        { 
          title: "环路保护", 
          description: "启用环路保护以防止网络环路的产生。" 
        },
      ],
    };
  },
};
</script>

<style scoped>
.stp-container .el-header {
  background-color: #409eff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-title {
  color: #fff;
}
.box-card {
  margin-bottom: 20px;
}

li {
  margin-bottom: 10px;
}
</style>
