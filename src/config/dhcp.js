export const Attack = {
  configDetails: `# 攻击时的网络配置
  1.伪造DHCP服务器R4配置
  分配DHCP地址池
  将DNS设置为伪造的dns服务器ip:192.168.1.8

  2.伪造DNS服务器配置
  将主机域名www.baidu.com指向黑客主机192.168.1.20

  3.黑客主机配置
  伪造百度站点,将灰鸽子木马挂在Web根目录下,
  在伪造的百度站点下嵌入长度和宽度都为0(隐形）的挂马页面，
  一旦进入伪造的baidu服务器,
  加载隐形的iframe页面,主机会自动下载并执行木马,从而被黑客控制。`,
  experimentResult: "技术部主机从伪造的DHCP服务器R4请求分配ip地址192.168.1.254,DNS server的ip地址变更为192.168.1.8,技术部主机浏览baidu站点会被伪造的DNS服务器解析为192.168.1.20,从而将技术部主机劫持至黑客伪造的baidu服务器,下载木马被黑客控制"
};
export const Defense = {
  configDetails: `# 防御措施的网络配置
  在交换机SW1启用DHCP监听,将GE0/0/3设置为信任端口,配置如下	
  [Huawei]sysname SW1
  [SW1]dhcp enable                   //开启DHCP服务
  [SW1]dhcp snooping enable          //启用DHCP监听功能
  [SW1]dhcp snooping enable vlan 1   //指定监听区域vlan 1
  [SW1]interface GigabitEthernet 0/0/3
  [SW1-GigabitEthernet0/0/3]dhcp snooping trusted
  //指定DHCP信任端口,交换机只转发从信任端口发送和接收端DHCP响应报文
  [SW1-GigabitEthernet0/0/3]quit`,
  experimentResult: "从合法的DHCP server获取IP地址,baidu域名被正确解析到公网IP203.203.100.10"
}