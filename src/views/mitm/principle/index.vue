<template>
  <el-container class="mitm-container">
    <el-header>
      <h1 class="header-title">MitM（中间人攻击）攻击原理、防御及检测</h1>
    </el-header>

    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="box-card">
            <h2>什么是MitM攻击？</h2>
            <p>
              MitM（Man-in-the-MiddleAttack）攻击是网络攻击的一种形式，攻击者在通信的两端之间秘密拦截、转发或修改通信内容，以窃取敏感信息或操纵通信过程。
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
        <!-- MITM入侵检测的卡片 -->
        <el-col :span="24">
          <el-card class="detection-card">
            <h2>入侵检测</h2>
            <p>
              MitM入侵检测包括监控异常网络行为、使用加密通信以及验证通信双方的身份。关键措施包括：
            </p>
            <ul>
              <li>
                <strong>SSL/TLS加密：</strong
                >确保所有敏感信息传输均通过SSL/TLS加密，防止数据在传输过程中被拦截。
              </li>
              <li>
                <strong>证书验证：</strong
                >验证服务器证书的有效性，确保与真实服务器建立连接。
              </li>
              <li>
                <strong>网络监控：</strong
                >使用网络监控工具检测异常的连接和数据包，以识别可能的MITM活动。
              </li>
              <li>
                <strong>双向认证：</strong
                >在需要安全通信的系统中实施双向认证机制，确保通信双方的真实性。
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
  name: "MITMExplanation",
  data() {
    return {
      timelineData: [
        {
          timestamp: "拦截阶段",
          content: "攻击者通过各种手段，如ARP欺骗，将自己置于通信双方之间。",
        },
        {
          timestamp: "窃听阶段",
          content: "攻击者秘密监听通信双方的交流，窃取传输中的敏感信息。",
        },
        {
          timestamp: "篡改阶段",
          content: "在必要时，攻击者会修改通信内容，以欺骗或操纵通信双方。",
        },
      ],
      stepsData: [
        {
          title: "使用HTTPS",
          description: "对所有网站和在线服务使用HTTPS协议，确保数据加密传输。",
        },
        {
          title: "公钥基础设施（PKI）",
          description:
            "通过可靠的PKI确保数字证书的真实性，帮助验证通信方的身份。",
        },
        {
          title: "强化Wi-Fi安全",
          description:
            "使用强加密方法如WPA2或WPA3保护无线网络，防止攻击者从网络层进行攻击。",
        },
        {
          title: "定期安全审计",
          description:
            "进行网络和系统的定期安全审计，检测可能的安全漏洞和入侵迹象。",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mitm-container .el-header {
  background-color: #409eff;
  color: white;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.header-title {
  color: white;
  margin: 20px 0;
}
.box-card {
  margin-bottom: 20px;
}
.box-little-card {
  height: 100%;
  overflow: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.detection-card {
  margin-bottom: 20px;
}
li {
  margin-bottom: 10px;
}
</style>
  