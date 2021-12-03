(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{410:function(t,a,s){t.exports=s.p+"assets/img/dhcp1.476ebb29.png"},411:function(t,a,s){t.exports=s.p+"assets/img/dhcp2.9811b06a.png"},462:function(t,a,s){"use strict";s.r(a);var e=s(31),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dhcp-服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dhcp-服务端"}},[t._v("#")]),t._v(" DHCP 服务端")]),t._v(" "),e("h2",{attrs:{id:"版本要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本要求"}},[t._v("#")]),t._v(" 版本要求")]),t._v(" "),e("p",[t._v("0.16.0 版本更新后，macOS 版本支持 DHCP 服务端部署")]),t._v(" "),e("h2",{attrs:{id:"用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),e("p",[e("a",{attrs:{href:"./tun"}},[t._v("TUN 模式")]),t._v("下，macOS 可作为局域网代理网关。DHCP 服务器可以方便对局域网内其他设备进行地址及网关分配，进而控制设备流量是否被 Clash 接受并处理。")]),t._v(" "),e("h2",{attrs:{id:"开启条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启条件"}},[t._v("#")]),t._v(" 开启条件")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"./tun"}},[t._v("TUN 模式")]),t._v("正确配置并运行，并且已经开启 IP 转发")]),t._v(" "),e("li",[t._v("网络中 DHCP 功能关闭（一般是路由器，避免冲突）")]),t._v(" "),e("li",[t._v("本机 IP 地址设置为静态地址")])]),t._v(" "),e("h2",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("进入 Settings 界面，底部找到 "),e("code",[t._v("Experimental Features")]),t._v(" 打开 "),e("code",[t._v("DHCP Server")]),t._v(" 选项")])]),t._v(" "),e("li",[e("p",[t._v("进入 Router 界面，点击右上角 Start 按钮\n"),e("img",{attrs:{src:s(410),alt:""}}),t._v("\n点击 Interface 右边选择对应网卡，此时剩下值会自动填充，如果不明白这些字段的意义，使用默认即可")])]),t._v(" "),e("li",[e("p",[t._v("点击 Continue 后，DHCP 服务器将会启动\n"),e("img",{attrs:{src:s(411),alt:""}}),t._v("\n局域网中设备重新连接后，列表中将会出现。此时可以在 "),e("code",[t._v("Default Gateway")]),t._v(" 和 "),e("code",[t._v("Clash TUN")]),t._v(" 中切换进而控制设备是否由 Clash 接管网络，切换后设备需要重新接入网络")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("接管切换后需要将设备重新接入网络方能获取正确的地址")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("启动 DHCP 服务端功能后，CFW 将会阻止系统进入休眠（但允许关闭显示器）")])])])}),[],!1,null,null,null);a.default=v.exports}}]);