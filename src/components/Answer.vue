<template>
  <div class="wait_ma">
    <div class="question" >
      <div class="test" style="text-align:center">
        <h1>{{title}}</h1>
      </div>
      <div class="test1" style="text-align:right;color: #000000">
        {{time}}
      </div>
      <el-divider></el-divider>
      <h2 style="text-align:left">
        一、单项选择题（共35小题，每题1分，共计35分）
      </h2>
      <h2 style="text-align:left">
        二、多项选择题（共10小题，每题2分，共计20分）
      </h2>
      <h2 style="text-align:left">
        三、简答题（共6小题，每题4分，共计24分）
      </h2>
      <h2 style="text-align:left">
        四、案例分析题（共 2 小题，每题6分，共计12分）
      </h2>
      <h2 style="text-align:left">
        五、业务处理题（共1小题，每题9分，共计9分）
      </h2>
      <el-divider></el-divider>
      <h3>一、单项选择题（共35小题，每题1分，共计35分）</h3>
      <h3>答题要求：在下列每小题的四个备选答案中选出一个正确答案，将其字母标号填入在每题对应的括号内。错选、多选或未选均不得分。</h3>
      <div class="grid-content">
        1. 明确会计反映的特定对象，界定会计核算范围的基本假设是(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a1" label=1>A．会计主体</el-radio>
        <el-radio class = "radio" v-model="a1" label=2>B．持续经营</el-radio>
        <el-radio class = "radio" v-model="a1" label=3>C．会计分期</el-radio>
        <el-radio class = "radio" v-model="a1" label=4>D．货币计量</el-radio>
      </div>
      <div class="grid-content">
        2. 会计职业道德教育的形式是(     )。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a2" label=1>A．接受教育和自我教育</el-radio>
        <el-radio class = "radio" v-model="a2" label=2>B. 正规学历教育和单位培训</el-radio>
        <el-radio class = "radio" v-model="a2" label=3>C．岗位轮换和技能培训</el-radio>
        <el-radio class = "radio" v-model="a2" label=4>D. 岗位转换和自我学习</el-radio>
      </div>
      <div class="grid-content">
        3. 会计职业道德的检查可以通过(     )方式进行。。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a3" label=1>A.政府监管与自我监督</el-radio>
        <el-radio class = "radio" v-model="a3" label=2>B. 行业自律和自我监督</el-radio>
        <el-radio class = "radio" v-model="a3" label=3>C.行业自律和上级单位监督</el-radio>
        <el-radio class = "radio" v-model="a3" label=4>D. 政府监管和行业自律</el-radio>
      </div>
      <div class="grid-content">
        4. 下列经济事项中，能使企业经营活动的现金流量发生变化的是(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a4" label=1>A. 发放股票股利</el-radio>
        <el-radio class = "radio" v-model="a4" label=2>B. 缴纳增值税</el-radio>
        <el-radio class = "radio" v-model="a4" label=3>C. 赊销商品</el-radio>
        <el-radio class = "radio" v-model="a4" label=4>D. 固定资产计提折旧</el-radio>
      </div>
      <div class="grid-content">
        5. 月末结账后一般无余额的账户是(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a5" label=1>A. 银行存款</el-radio>
        <el-radio class = "radio" v-model="a5" label=2>B. 原材料</el-radio>
        <el-radio class = "radio" v-model="a5" label=3>C. 主营业务收入</el-radio>
        <el-radio class = "radio" v-model="a5" label=4>D. 应收账款</el-radio>
      </div>
      <div class="grid-content">
        6. 下列引起资产和负债同时减少的经济业务是(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a6" label=1>A. 将现金存入银行</el-radio>
        <el-radio class = "radio" v-model="a6" label=2>B. 赊购材料一批</el-radio>
        <el-radio class = "radio" v-model="a6" label=3>C. 用银行存款偿还所欠货款</el-radio>
        <el-radio class = "radio" v-model="a6" label=4>D. 签发支票预付购货款</el-radio>
      </div>
      <div class="grid-content">
        7. 资本公积的主要用途是(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a7" label=1>A．转增资本</el-radio>
        <el-radio class = "radio" v-model="a7" label=2>B．弥补亏损</el-radio>
        <el-radio class = "radio" v-model="a7" label=3>C．分派现金股利</el-radio>
        <el-radio class = "radio" v-model="a7" label=4>D．转入本年利润</el-radio>
      </div>
      <div class="grid-content">
        8. 下列各项中，属于留存收益的是(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a8" label=1>A. 资本公积</el-radio>
        <el-radio class = "radio" v-model="a8" label=2>B. 盈余公积</el-radio>
        <el-radio class = "radio" v-model="a8" label=3>C. 股本</el-radio>
        <el-radio class = "radio" v-model="a8" label=4>D. 实收资本</el-radio>
      </div>
      <div class="grid-content">
        9. 借贷记账法的记账规则是(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a9" label=1>A. 有借必有贷，借贷必相等</el-radio>
        <el-radio class = "radio" v-model="a9" label=2>B. 有增必有减，增减必相等</el-radio>
        <el-radio class = "radio" v-model="a9" label=3>C. ∑本期借方发生额＝∑本期贷方发生额</el-radio>
        <el-radio class = "radio" v-model="a9" label=4>D. 资产＝负债＋所有者权益</el-radio>
      </div>
      <div class="grid-content">
        10. 下列项目中，不属于资产负债表中存货项目的是(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a10" label=1>A．周转材料</el-radio>
        <el-radio class = "radio" v-model="a10" label=2>B．生产成本</el-radio>
        <el-radio class = "radio" v-model="a10" label=3>C．在途物资</el-radio>
        <el-radio class = "radio" v-model="a10" label=4>D．工程物资</el-radio>
      </div>
      <div class="grid-content">
        11. 某企业期初资产总额为300万元，现收回某单位前欠货款20万元，购入材料40万元款暂欠，则现在企业资产总额为(     ) 万元。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a11" label=1>A．320</el-radio>
        <el-radio class = "radio" v-model="a11" label=2>B、340</el-radio>
        <el-radio class = "radio" v-model="a11" label=3>C、360</el-radio>
        <el-radio class = "radio" v-model="a11" label=4>D、260</el-radio>
      </div>
      <div class="grid-content">
        12. 根据我国企业会计准则规定，企业购货时取得现金折扣，应当(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a12" label=1>A. 冲减购货成本</el-radio>
        <el-radio class = "radio" v-model="a12" label=2>B. 冲减管理费用</el-radio>
        <el-radio class = "radio" v-model="a12" label=3>C. 冲减财务费用</el-radio>
        <el-radio class = "radio" v-model="a12" label=4>D. 冲减资产减值损失</el-radio>
      </div>
      <div class="grid-content">
        13. 企业为生产车间管理人员支付的工资，应当计入(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a13" label=1>A. 管理费用</el-radio>
        <el-radio class = "radio" v-model="a13" label=2>B. 制造费用</el-radio>
        <el-radio class = "radio" v-model="a13" label=3>C. 销售费用</el-radio>
        <el-radio class = "radio" v-model="a13" label=4>D. 财务费用</el-radio>
      </div>
      <div class="grid-content">
        14.单位对外提供财务会计报告的责任主体是(     )。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a14" label=1>A．会计人员</el-radio>
        <el-radio class = "radio" v-model="a14" label=2>B．会计机构负责人</el-radio>
        <el-radio class = "radio" v-model="a14" label=3>C．主管会计</el-radio>
        <el-radio class = "radio" v-model="a14" label=4>D．单位负责人</el-radio>
      </div>
      <div class="grid-content">
        15.下列关于单位内部会计监督制度说法正确的是(     )。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a15" label=1>A．会计事项的经办人员和审批人员可以由一人兼任</el-radio>
        <el-radio class = "radio" v-model="a15" label=2>B．记账人员和经济业务的审批人员可以由一人兼任</el-radio>
        <el-radio class = "radio" v-model="a15" label=3>C．记账人员和财物保管人员的职责权限应明确，并相互分离</el-radio>
        <el-radio class = "radio" v-model="a15" label=4>D．记账人员和经济业务的经办人员可以由一人兼任</el-radio>
      </div>
      <div class="grid-content">
        16．由投资者投资转入的无形资产，应按合同或协议约定的价值（假定该价值是公允的），借记“无形资产”科目，按其在注册资本中所占的份额，贷记“实收资本”科目，按其差额计入的科目是(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a16" label=1>A．资本公积——资本溢价</el-radio>
        <el-radio class = "radio" v-model="a16" label=2>B．营业外收入</el-radio>
        <el-radio class = "radio" v-model="a16" label=3>C．资本公积——其他资本公积</el-radio>
        <el-radio class = "radio" v-model="a16" label=4>D．盈余公积</el-radio>
      </div>
      <div class="grid-content">
        17. 企业“预收账款”属于以下(     ) 财务报告要素。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a17" label=1>A．资产</el-radio>
        <el-radio class = "radio" v-model="a17" label=2>B．负债</el-radio>
        <el-radio class = "radio" v-model="a17" label=3>C．所有者权益</el-radio>
        <el-radio class = "radio" v-model="a17" label=4>D．收入</el-radio>
      </div>
      <div class="grid-content">
        18．按照国家《银行账户管理办法》规定，企业的工资、奖金等支取，只能通过(     ) 办理。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a18" label=1>A．一般存款账户</el-radio>
        <el-radio class = "radio" v-model="a18" label=2>B．临时存款账户</el-radio>
        <el-radio class = "radio" v-model="a18" label=3>C．专用存款账户</el-radio>
        <el-radio class = "radio" v-model="a18" label=4>D．基本存款账户</el-radio>
      </div>
      <div class="grid-content">
        19. 公司购进存货发生短缺，经查，属于意外事故造成的存货毁损，扣除保险公司及相关责任人赔款后的净损失应当计入(     ) 。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a19" label=1>A．管理费用</el-radio>
        <el-radio class = "radio" v-model="a19" label=2>B.营业外支出</el-radio>
        <el-radio class = "radio" v-model="a19" label=3>C．制造费用</el-radio>
        <el-radio class = "radio" v-model="a19" label=4>D.存货成本</el-radio>
      </div>
      <div class="grid-content">
        20. 某企业为增值税一般纳税人。本月购入的原材料增值税专用发票注明价款1 000万元，增值税额130万元。另发生运杂费10万元。该原材料入账价值为(     ) 万元。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a20" label=1>A．1000</el-radio>
        <el-radio class = "radio" v-model="a20" label=2>B．1130</el-radio>
        <el-radio class = "radio" v-model="a20" label=3>C．1010</el-radio>
        <el-radio class = "radio" v-model="a20" label=4>D．1140</el-radio>
      </div>
      <div class="grid-content">
        21.在中国共产党成立100周年之际，中共中央、国务院印发了(     ) ，其中包括总体要求、把思想政治工作作为治党治国的重要方式、深入开展思想政治教育、提升基层思想政治工作质量和水平、推动新时代思想政治工作守正创新发展、构建共同推进思想政治工作的大格局六个部分。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a21" label=1>A.《关于新时代加强和改进思想政治工作的意见》</el-radio>
        <el-radio class = "radio" v-model="a21" label=2>B.《关于新时代加强和改进思想政治教育的意见》</el-radio>
        <el-radio class = "radio" v-model="a21" label=3>C.《关于全社会加强和改进思想政治工作的意见》</el-radio>
        <el-radio class = "radio" v-model="a21" label=4>D.《关于新时代推进和提升思想政治工作的意见》</el-radio>
      </div>
      <div class="grid-content">
        22.2021年国家网络安全宣传周网络安全博览会的主题是(     )
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a22" label=1>A.网络维护为人民，网络维护靠人民</el-radio>
        <el-radio class = "radio" v-model="a22" label=2>B.网络安全为人民，网络安全靠人民</el-radio>
        <el-radio class = "radio" v-model="a22" label=3>C.网络安全为国家，网络安全靠人民</el-radio>
        <el-radio class = "radio" v-model="a22" label=4>D.网络安全人人有责</el-radio>
      </div>
      <div class="grid-content">
        23.2021年9月15日，第十四届全国运动会在(     ) 开幕。这是全运会首次在中西部地区举行。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a23" label=1>A.西安</el-radio>
        <el-radio class = "radio" v-model="a23" label=2>B.成都</el-radio>
        <el-radio class = "radio" v-model="a23" label=3>C.兰州</el-radio>
        <el-radio class = "radio" v-model="a23" label=4>D.昆明</el-radio>
      </div>
      <div class="grid-content">
        24.2021年10月12日，《生物多样性公约》缔约方大会第十五次会议在哪里举行(     )
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a24" label=1>A.北京</el-radio>
        <el-radio class = "radio" v-model="a24" label=2>B.天津</el-radio>
        <el-radio class = "radio" v-model="a24" label=3>C.成都</el-radio>
        <el-radio class = "radio" v-model="a24" label=4>D.昆明</el-radio>
      </div>
      <div class="grid-content">
        25.《关于推动现代职业教育高质量发展的意见》指出，到2025年职业本科教育招生规模不低于高等职业教育招生规模的(     )
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a25" label=1>A.5%</el-radio>
        <el-radio class = "radio" v-model="a25" label=2>B.10%</el-radio>
        <el-radio class = "radio" v-model="a25" label=3>C.15%</el-radio>
        <el-radio class = "radio" v-model="a25" label=4>D.20%</el-radio>
      </div>
      <div class="grid-content">
        26.《中国互联网发展报告（2021）》显示，截止2020年底，我国5G网络用户数超过(     ) ，约占全球5G用户数的89%。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a26" label=1>A．1.6亿</el-radio>
        <el-radio class = "radio" v-model="a26" label=2>B.0.6亿</el-radio>
        <el-radio class = "radio" v-model="a26" label=3>C.1.2亿</el-radio>
        <el-radio class = "radio" v-model="a26" label=4>D.1.4亿</el-radio>
      </div>
      <div class="grid-content">
        27.2021年10月21日，国家“十三五”科技创新成就展在北京展览馆开幕。此次成就展的主题是(     )
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a27" label=1>A.新时代新发展新成就</el-radio>
        <el-radio class = "radio" v-model="a27" label=2>B.创新驱动发展 迈向科技强国</el-radio>
        <el-radio class = "radio" v-model="a27" label=3>C.科技创新智能发展</el-radio>
        <el-radio class = "radio" v-model="a27" label=4>D.创新驱动科技强国</el-radio>
      </div>
      <div class="grid-content">
        28.2021年10月23日通过的《中华人民共和国陆地国界法》自(     ) 起施行。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a28" label=1>A.即日</el-radio>
        <el-radio class = "radio" v-model="a28" label=2>B.2021年11月1日</el-radio>
        <el-radio class = "radio" v-model="a28" label=3>C.2022年1月1日</el-radio>
        <el-radio class = "radio" v-model="a28" label=4>D.2022年11月1日</el-radio>
      </div>
      <div class="grid-content">
        29.2021年11月11日，十九届六中全会通过的党的文件的名称是(     )
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a29" label=1>A.《关于若干历史问题的决议》</el-radio>
        <el-radio class = "radio" v-model="a29" label=2>B.《关于建国以来党的若干历史问题的决议》</el-radio>
        <el-radio class = "radio" v-model="a29" label=3>C.《中共中央关于党的百年奋斗重大成就和历史经验的决议》</el-radio>
        <el-radio class = "radio" v-model="a29" label=4>D.《关于加快构建社会主义主义市场经济的决议》</el-radio>
      </div>
      <div class="grid-content">
        30.2021年11月17日“一带一路”可持续城市联盟圆桌会在哪里召开(     )
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a30" label=1>A.天津</el-radio>
        <el-radio class = "radio" v-model="a30" label=2>B.成都</el-radio>
        <el-radio class = "radio" v-model="a30" label=3>C.北京</el-radio>
        <el-radio class = "radio" v-model="a30" label=4>D.武汉</el-radio>
      </div>
      <div class="grid-content">
        31.中国第38次南极科考队第二批队员101人随(     ) 号从上海出发 前往南极长城站等地 执行科考任务。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a31" label=1>A.雪龙</el-radio>
        <el-radio class = "radio" v-model="a31" label=2>B.雪龙1</el-radio>
        <el-radio class = "radio" v-model="a31" label=3>C.雪龙2</el-radio>
        <el-radio class = "radio" v-model="a31" label=4>D.雪融</el-radio>
      </div>
      <div class="grid-content">
        32.习近平在第三次“一带一路“建设座谈会上强调，以(     ) 为目标 继续推动共建“一带一路”高质量发展
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a32" label=1>A.高标准可持续惠民生</el-radio>
        <el-radio class = "radio" v-model="a32" label=2>B.高标准可持续向未来</el-radio>
        <el-radio class = "radio" v-model="a32" label=3>C.高标准好质量惠民生</el-radio>
        <el-radio class = "radio" v-model="a32" label=4>D.严标准高水平惠民生</el-radio>
      </div>
      <div class="grid-content">
        33.中科院软件所团队日前发布全新量子计算编程软件(     ) ，并成功部署至世界领先的超导量子硬件平台
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a33" label=1>A.cuBase</el-radio>
        <el-radio class = "radio" v-model="a33" label=2>B.myBase</el-radio>
        <el-radio class = "radio" v-model="a33" label=3>C.isQ-Core</el-radio>
        <el-radio class = "radio" v-model="a33" label=4>D.my-Core</el-radio>
      </div>
      <div class="grid-content">
        34.2022年2月27日上午11时06分，长征八号遥二运载火箭飞行试验在中国文昌航天发射场顺利实施，火箭飞行正常，试验取得圆满成功。此次任务共搭载(     ) 卫星，创下我国一箭多星任务最高纪录。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a34" label=1>A.10颗</el-radio>
        <el-radio class = "radio" v-model="a34" label=2>B.15颗</el-radio>
        <el-radio class = "radio" v-model="a34" label=3>C.20颗</el-radio>
        <el-radio class = "radio" v-model="a34" label=4>D.22颗</el-radio>
      </div>
      <div class="grid-content">
        35.在24届北京冬奥会上，中国中国体育代表团首次全项参赛，共夺得(     ) 枚金牌。
      </div>
      <div style="text-align: left">
        <el-radio class = "radio" v-model="a35" label=1>A.7</el-radio>
        <el-radio class = "radio" v-model="a35" label=2>B、8</el-radio>
        <el-radio class = "radio" v-model="a35" label=3>C、9</el-radio>
        <el-radio class = "radio" v-model="a35" label=4>D、10</el-radio>
      </div>
      <br>
      <h3>二、多项选择题（共10小题，每题2分，共计20分.答题要求：在下列每小题的四个备选答案中选出二至四个正确答案，错选、多选或未选均不得分。）</h3>
      <h3></h3>
      <div class="grid-content">
        1.下列不属于收入准则中规范的合同是(           )。
      </div>
      <el-checkbox-group v-model="checkList1">
        <el-checkbox class = "checkbox" label=1>A.投资合同</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.商品销售合同</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.保险合同</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.租赁合同</el-checkbox>
      </el-checkbox-group>
      <div class="grid-content">
        2.下列各项中，应作为管理费用处理的是(           )。
      </div>
      <el-checkbox-group v-model="checkList2">
        <el-checkbox class = "checkbox" label=1>A.自然灾害造成的流动资产净损失</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.审计费用</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.短期借款的利息</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.支付的诉讼费</el-checkbox>
      </el-checkbox-group>
      <div class="grid-content">
        3.下列各项中，不属于企业会计政策范围的是(           )。
      </div>
      <el-checkbox-group v-model="checkList3">
        <el-checkbox class = "checkbox" label=1>A.固定资产的使用年限</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.无形资产的使用寿命</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.存货的计价方法</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.预计负债金额的确定</el-checkbox>
      </el-checkbox-group>
      <div class="grid-content">
        4.下列各项中，属于会计计量属性的是(           )。
      </div>
      <el-checkbox-group v-model="checkList4">
        <el-checkbox class = "checkbox" label=1>A.重置成本</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.历史成本</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.未来成本</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.可变现净值</el-checkbox>
      </el-checkbox-group>
      <div class="grid-content">
        5.借贷记账法的记账符号“借”对下列账户表示减少的是(           )。
      </div>
      <el-checkbox-group v-model="checkList5">
        <el-checkbox class = "checkbox" label=1>A.“短期借款”账户</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.“固定资产”账户</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.“主营业务收入”账户</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.“管理费用”账户</el-checkbox>
      </el-checkbox-group>
      <div class="grid-content">
        6.2021年全党开展党史学习教育活动的目标是(           )
      </div>
      <el-checkbox-group v-model="checkList6">
        <el-checkbox class = "checkbox" label=1>A.学党史</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.悟思想</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.办实事</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.开新局</el-checkbox>
      </el-checkbox-group>
      <div class="grid-content">
        7.2021年10月16日，搭载神舟十三号载人飞船的长征二号F遥十三运载火箭，在酒泉卫星发射中心发射，顺利将(           )3名航天员送入太空。这是我国载人航天工程空间站阶段的第二次载人飞行任务。
      </div>
      <el-checkbox-group v-model="checkList7">
        <el-checkbox class = "checkbox" label=1>A.翟志刚</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.王亚平</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.叶光富</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.聂海胜</el-checkbox>
      </el-checkbox-group>
      <div class="grid-content">
        8.2021年10月25日，习近平在中华人民共和国恢复联合国合法席位50周年纪念会议上的讲话中指出，我们应该顺应历史大势，坚持合作、不搞对抗，坚持开放、不搞封闭，坚持互利共赢、不搞零和博弈，坚决反对(           )
      </div>
      <el-checkbox-group v-model="checkList8">
        <el-checkbox class = "checkbox" label=1>A.一切形式的霸权主义和强权政治</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.一切形式的单边主义和保护主义</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.一切破坏世界和平的战争行为</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.一切冷战思维</el-checkbox>
      </el-checkbox-group>
      <div class="grid-content">
        9.《国家公园设立规范》明确国家公园准入条件的原则包括(           )
      </div>
      <el-checkbox-group v-model="checkList9">
        <el-checkbox class = "checkbox" label=1>A.国家代表性</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.生态重要性</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.管理可行性</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.生态多样性</el-checkbox>
      </el-checkbox-group>
      <div class="grid-content">
        10.习近平致信祝贺首届中国网络文明大会召开，强调要(           )
      </div>
      <el-checkbox-group v-model="checkList10">
        <el-checkbox class = "checkbox" label=1>A.发展和治理相统一</el-checkbox>
        <el-checkbox class = "checkbox" label=2>B.网上和网下相融合</el-checkbox>
        <el-checkbox class = "checkbox" label=3>C.广泛汇聚向上向善力量</el-checkbox>
        <el-checkbox class = "checkbox" label=4>D.共建网上美好精神家园</el-checkbox>
      </el-checkbox-group>
      <br>
      <h3>三、简答题（共6小题，每题4分，共计24分。答题要求：简略、正确回答所给出的问题，将答案填写在每题下方的空白处。）</h3><br>
      <div style="font-weight:bold;background-color: #dedcdb">1．简述会计信息质量要求包含的内容。</div>
      <el-input
        style="margin-bottom: 20px;margin-top: 3px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容 (输入框自动延展)"
        v-model="textarea1">
      </el-input>
      <div style="font-weight:bold;background-color: #dedcdb">2．简述会计循环的基本步骤。</div>
      <el-input
        style="margin-bottom: 20px;margin-top: 3px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容 (输入框自动延展)"
        v-model="textarea2">
      </el-input>
      <div style="font-weight:bold;background-color: #dedcdb">3．简述财务报表的基本内容。</div>
      <el-input
        style="margin-bottom: 20px;margin-top: 3px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容 (输入框自动延展)"
        v-model="textarea3">
      </el-input>
      <div style="font-weight:bold;background-color: #dedcdb">4．简述收入的含义及特征。</div>
      <el-input
        style="margin-bottom: 20px;margin-top: 3px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容 (输入框自动延展)"
        v-model="textarea4">
      </el-input>
      <div style="font-weight:bold;background-color: #dedcdb">5.十九届六中全会提出的“两个确立”的含义是什么？</div>
      <el-input
        style="margin-bottom: 20px;margin-top: 3px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容 (输入框自动延展)"
        v-model="textarea5">
      </el-input>
      <div style="font-weight:bold;background-color: #dedcdb">6.习近平总书记在参加十三届全国人大五次会议内蒙古代表团的审议时,首次提出的“五个必由之路”是什么？</div>
      <el-input
        style="margin-bottom: 20px;margin-top: 3px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容 (输入框自动延展)"
        v-model="textarea6">
      </el-input>
      <h3>四、案例分析题（共2小题，每题6分，共计12分）</h3><br>
      <div style="font-weight:bold;background-color: #dedcdb">1．开源公司2×22年5月用银行存款支付了下列有关费用，并编制了会计分录：</div>
      （1）招待客户代表支付招待费2 600元。<br>
        借：销售费用                          2 600 <br>
        贷：银行存款                                 2 600<br>
      （2）支付业务培训费3 900元。<br>
        借：制造费用                          3 900<br>
        贷：银行存款                                 3 900<br>
      （3）支付在银行办理业务的手续费300元。<br>
        借：管理费用                            300<br>
        贷：银行存款                                   300<br>
      （4）支付专设销售机构人员的工资20 000元，发生专设销售机构人员的福利费2 500元。<br>
        借：管理费用                           22 500<br>
        贷：银行存款                                 22 500<br>
      （5）因参加产品销售展览，支付产品展销费8 000元。<br>
        借：主营业务成本                       8 000<br>
        贷：银行存款                           8 000     <br>
      <div style="font-weight:bold;background-color: #dedcdb">要求：以上账务处理存在的主要问题是什么？如果是你的话，你将怎样编制这些业务的会计分录？</div>
      <el-input
        style="margin-bottom: 20px;margin-top: 3px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容 (输入框自动延展)"
        v-model="textarea7">
      </el-input>
      <div style="font-weight:bold;background-color: #dedcdb">2．根据下列资料，对智林公司下列事项进行分析,看看这些事项违反了哪些会计基本假设：</div>
      （1）智林公司郝总经理将个人旅游的机票及餐宿费16 000元作为差旅费报销，他觉得企业是他自己的，所以个人支出可以由企业来负担。<br>
      （2）智林公司某下属分公司因经营不善，正在面临破产清算，智林公司在编制合并报表时对该分公司与其他分公司按照同样的标准编制。<br>
      （3）智林公司有一个大的建筑项目，从2×21年6月10日开始，至2×21年12月1日结束，该公司因此编制了从6月10日至12月10日的会计报表。<br>
      （4）智林公司在美国设立的分公司，主要的经济业务也集中于美国,在向国内报送财务会计报告时，列报货币仍为美元。<br>
      <div style="font-weight:bold;background-color: #dedcdb">要求：结合上述资料，逐项阐述智林公司的会计处理违背了哪些会计假设，并阐述相关会计假设的内涵。</div>
      <el-input
        style="margin-bottom: 20px;margin-top: 3px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容 (输入框自动延展)"
        v-model="textarea8">
      </el-input>
      <h3>五、业务处理题（共1小题，每题9分，共计9分。答题要求：根据以下资料编制有关会计分录，凡要求计算的项目，应列明计算过程。将答案填写在每题下方的空白处。）</h3>
      <div style="font-weight:bold;background-color: #dedcdb">1.资料：某公司为增值税一般纳税人，增值税按13%计算，原材料按实际成本核算，2×22年4月份发生如下经济业务：</div>
      （1）购入A材料500 000元，增值税进项税额65 000元，运杂费3 000元，款项均已用银行存款付讫，材料验收入库。<br>
      （2）销售产品一批，开具增值税专用发票，价款为80 000元，增值税为10 400元，货款尚未收到。<br>
      （3）公司购入不需安装的生产用设备一台，买价7 000元，增值税910元。销售方代垫运费200元，所有款项尚未支付。<br>
      （4）经计算，本月应付职工工资为：生产甲产品工人工资300 000元，车间技术与管理人员100 000元，企业管理人员100 000元。<br>
      （5）将本月实现的销售收入500 000元，结转至“本年利润”科目。<br>
      （6）将本月发生的管理费用131 500元，销售费用8 000元，销售成本280 000元结转至“本年利润”科目。<br>
      <div style="font-weight:bold;background-color: #dedcdb">要求：以元为单位，编制甲公司会计分录。（本题10分）</div>
      <el-input
        style="margin-bottom: 20px;margin-top: 3px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容 (输入框自动延展)"
        v-model="textarea9">
      </el-input>
      <el-divider></el-divider>
      <div>
        <el-button type="primary" style="margin-top: 30px;margin-left: 45%" :disabled="isDisable" @click="sub11">确认提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { getSettings, sub1 } from '../api/api'

  export default {
    data () {
      return {
        isDisable: false,
        qyear: '',
        qmonth: '',
        qday: '',
        qhour: '',
        qmin: '',
        kstime: '',
        time: '',
        title: '2022年会计岗位公开招聘笔试试卷',
        tp: 0,
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        a6: '',
        a7: '',
        a8: '',
        a9: '',
        a10: '',
        a11: '',
        a12: '',
        a13: '',
        a14: '',
        a15: '',
        a16: '',
        a17: '',
        a18: '',
        a19: '',
        a20: '',
        a21: '',
        a22: '',
        a23: '',
        a24: '',
        a25: '',
        a26: '',
        a27: '',
        a28: '',
        a29: '',
        a30: '',
        a31: '',
        a32: '',
        a33: '',
        a34: '',
        a35: '',
        checkList1: [],
        checkList2: [],
        checkList3: [],
        checkList4: [],
        checkList5: [],
        checkList6: [],
        checkList7: [],
        checkList8: [],
        checkList9: [],
        checkList10: [],
        textarea1: '',
        textarea2: '',
        textarea3: '',
        textarea4: '',
        textarea5: '',
        textarea6: '',
        textarea7: '',
        textarea8: '',
        textarea9: ''
      };
    },
    created () {
      getSettings().then(res => {
        if (res.data.code === 20000) {
          this.qyear = res.data.data.Qyear
          this.qmonth = res.data.data.Qmonth
          this.qday = res.data.data.Qday
          this.qhour = res.data.data.Qhour
          this.qmin = res.data.data.Qmin
          this.kstime = res.data.data.Kstime
        } else {
          this.$message({
            message: '未获取到考试时间!',
            type: 'warning'
          })
        }
      })
      setInterval(this.gettime, 1000)
    },
    methods: {
      gettime () {
        const min = parseInt(this.kstime) % 60
        const hour = (parseInt(this.kstime) - min) / 60
        const nowtime = new Date()
        const endtime = new Date(parseInt(this.qyear), parseInt(this.qmonth) - 1, parseInt(this.qday),
          parseInt(this.qhour) + hour, parseInt(this.qmin) + min)
        const lefttime = endtime.getTime() - nowtime.getTime()
        const lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24)
        const leftm = Math.floor(lefttime / (1000 * 60) % 60)
        const lefts = Math.floor(lefttime / 1000 % 60)
        this.time = '剩余时间：' + lefth + ':' + leftm + ':' + lefts
        if (nowtime >= endtime) {
          this.sub2()
          this.time = '00:00:00'
          this.isDisable = true
          clearInterval(this.gettime)
          this.$router.replace('/wait3')
        }
      },
      sub11 () {
        if (!this.a1 ||
          !this.a2 ||
          !this.a3 ||
          !this.a4 ||
          !this.a5 ||
          !this.a6 ||
          !this.a7 ||
          !this.a8 ||
          !this.a9 ||
          !this.a10 ||
          !this.a11 ||
          !this.a12 ||
          !this.a13 ||
          !this.a14 ||
          !this.a15 ||
          !this.a16 ||
          !this.a17 ||
          !this.a18 ||
          !this.a19 ||
          !this.a20 ||
          !this.a21 ||
          !this.a22 ||
          !this.a23 ||
          !this.a24 ||
          !this.a25 ||
          !this.a26 ||
          !this.a27 ||
          !this.a28 ||
          !this.a29 ||
          !this.a30 ||
          !this.a31 ||
          !this.a32 ||
          !this.a33 ||
          !this.a34 ||
          !this.a35 ||
          this.checkList1.length === 0 ||
          this.checkList2.length === 0 ||
          this.checkList3.length === 0 ||
          this.checkList4.length === 0 ||
          this.checkList5.length === 0 ||
          this.checkList6.length === 0 ||
          this.checkList7.length === 0 ||
          this.checkList8.length === 0 ||
          this.checkList9.length === 0 ||
          this.checkList10.length === 0) {
          this.$message.error('请完成所有选择题！(包括判断、单选、多选)')
          return
        }
      sub1(
        {
          a1: this.a1,
          a2: this.a2,
          a3: this.a3,
          a4: this.a4,
          a5: this.a5,
          a6: this.a6,
          a7: this.a7,
          a8: this.a8,
          a9: this.a9,
          a10: this.a10,
          a11: this.a11,
          a12: this.a12,
          a13: this.a13,
          a14: this.a14,
          a15: this.a15,
          a16: this.a16,
          a17: this.a17,
          a18: this.a18,
          a19: this.a19,
          a20: this.a20,
          a21: this.a21,
          a22: this.a22,
          a23: this.a23,
          a24: this.a24,
          a25: this.a25,
          a26: this.a26,
          a27: this.a27,
          a28: this.a28,
          a29: this.a29,
          a30: this.a30,
          a31: this.a31,
          a32: this.a32,
          a33: this.a33,
          a34: this.a34,
          a35: this.a35,
          checkList1: this.checkList1,
          checkList2: this.checkList2,
          checkList3: this.checkList3,
          checkList4: this.checkList4,
          checkList5: this.checkList5,
          checkList6: this.checkList6,
          checkList7: this.checkList7,
          checkList8: this.checkList8,
          checkList9: this.checkList9,
          checkList10: this.checkList10,
          textarea1: this.textarea1,
          textarea2: this.textarea2,
          textarea3: this.textarea3,
          textarea4: this.textarea4,
          textarea5: this.textarea5,
          textarea6: this.textarea6,
          textarea7: this.textarea7,
          textarea8: this.textarea8,
          textarea9: this.textarea9
        }
      ).then(res => {
            if (res.data.code === 20000) {
              this.$router.replace('/wait3')
            } else {
              this.$message.error('提交出错!')
            }
          }
        )
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-divider--horizontal{
    margin: 30px 0;
    background: 0 0;
    border-top: 1px dashed #323131;
  }
  .wait_ma{
    background-color: white;
    padding: 20px;
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .test{
    background-color: #dedcdb;
    height: auto;
    width: 100%;
  }
  .test1{
    background-color: #dedcdb;
    height: auto;
    width: 100%;
  }
  .question{
    background-color: white;
    height: auto;
    width: 80%;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    margin-top: 10px;
    background: #dedcdb
  }
  .radio {
    color: #000000;
  }
  .checkbox {
    color: #000000;
  }

</style>
