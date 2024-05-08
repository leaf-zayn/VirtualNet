<template>
  <el-container class="eternalblue-container">
    <el-header>
      <h1 class="header-title">永恒之蓝漏洞攻击、防御及检测</h1>
    </el-header>

    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="box-card">
            <h2>什么是永恒之蓝漏洞？</h2>
            <p>
              永恒之蓝漏洞（EternalBlue）是一种利用Microsoft Windows系统中的SMB协议漏洞进行网络攻击的技术。这个漏洞允许攻击者远程执行恶意代码并获取控制权。
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
        <el-col :span="24">
          <el-card class="box-card">
            <h2>入侵检测</h2>
            <p>
              检测永恒之蓝漏洞的方法包括使用特定的入侵检测系统、监控异常SMB流量等技术来防止漏洞被利用。
            </p>
            <ul>
              <li><strong>系统更新：</strong>定期更新系统以安装所有安全补丁。</li>
              <li><strong>入侵检测系统：</strong>部署IDS来监控和阻断异常SMB请求。</li>
              <li><strong>网络监控：</strong>使用网络监控工具检测网络中的异常活动。</li>
              <li><strong>安全培训：</strong>教育员工识别钓鱼攻击和其他社交工程技巧。</li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "EternalBlueExplanation",
  data() {
    return {
      timelineData: [
        {
          timestamp: "漏洞发布",
          content: "2017年，漏洞被公开后不久，就被广泛用于各种网络攻击中。",
        },
        {
          timestamp: "攻击实施",
          content: "攻击者通过发送特制的数据包到目标系统的139/445端口来利用此漏洞。",
        },
        {
          timestamp: "系统感染",
          content: "一旦系统被攻破，攻击者可远程控制受害者的机器，并可进一步传播恶意软件。",
        },
      ],
      stepsData: [
        {
          title: "安装补丁",
          description: "安装微软为SMB漏洞发布的MS17-010安全补丁。",
        },
        {
          title: "禁用SMBv1",
          description: "在所有系统上禁用SMBv1协议以减少攻击面。",
        },
        {
          title: "使用防火墙",
          description: "配置防火墙阻止外部访问139和445端口。",
        },
        {
          title: "网络隔离",
          description: "对关键系统进行网络隔离，限制对敏感资源的访问。",
        },
      ],
    };
  },
};
</script>

<style scoped>
.eternalblue-container .el-header {
  background-color: #409eff; /* 更改颜色以区分不同的主题 */
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
.box-little-card {
  width: 250px;
  height: 200px;
  overflow: auto;
  padding: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
li {
  margin-bottom: 10px;
}
</style>
