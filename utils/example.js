const app = getApp();
const img = app.globalData.img_url;

function slidehome(){
  var image = [{ url: 'http://wanty.oss-cn-beijing.aliyuncs.com/haili/slide1.png', id: 0 },
    { url: 'http://wanty.oss-cn-beijing.aliyuncs.com/haili/slide2.png', id: 1 },
    { url: 'http://wanty.oss-cn-beijing.aliyuncs.com/haili/slide3.png', id: 2 }
  ];
  return image;
}

function goods(){
  var images = [
    { url: img + 'goods1.png', name: '阿里巴巴精品牙刷', price: 108.52, id: 1 },
    { url: img + 'goods2.png', name: '腾讯王者牌收音机', price: 108.52, id: 2 },
    { url: img + 'goods3.png', name: '网易时尚女装外套', price: 108.52, id: 3 },
    { url: img + 'goods3.png', name: '百度限量版女装', price: 108.52, id: 4 },
    { url: img + 'goods2.png', name: '海康新品收音机', price: 108.52, id: 5 },
    { url: img + 'goods1.png', name: '小米促销电子牙刷非常好用', price: 108.52, id: 6 }
  ];
  return images;
}

function smallus(){
  var btn = [
    { img: img + 'w_rank.png', title: '排行榜', type: 1 }, { img: img + 'w_recommend.png', title: '推荐', type: 2 },
    { img: img + 'w_collect.png', title: '收藏', type: 3 }, { img: img + 'w_bargin.png', title: '促销', type: 4 },
    { img: img + 'w_coupon.png', title: '优惠卷', type: 5 }, { img: img + 'w_new.png', title: '新品', type: 6 },
    { img: img + 'w_class.png', title: '分类', type: 7 }, { img: img + 'w_newbag.png', title: '新人礼', type: 8 },
    { img: img + 'w_vip.png', title: '会员', type: 9 }, { img: img + 'w_brand.png', title: '品牌', type: 10 }
  ];
  return btn;
}

function classfily(){
  var rightItem = [
    [
      {
        'title': '大牌手机',
        'desc': [
          { url: img + 'phone-huawei.png', text: '华为', id: 108 },
          { url: img + 'phone-iphones.png', text: 'Apple', id: 109 },
          { url: img + 'phone-meizus.png', text: '魅族', id: 200 },
          { url: img + 'phone-sanxing.png', text: '三星', id: 201 },
          { url: img + 'phone-nokias.png', text: '诺基亚', id: 202 },
          { url: img + 'phone-xiaomis.png', text: '小米', id: 203 },
          { url: img + 'phone-htcs.png', text: 'htc', id: 204 },
          { url: img + 'phone-oppo.png', text: 'oppo', id: 205},
          { url: img + 'phone-vivos.png', text: 'vivo', id: 206 },
          { url: img + 'phone-yijias.png', text: '一加', id: 207 },
          { url: img + 'phone-ztes.png', text: '中兴', id: 208 }
        ]
      },
      {
        'title': '热销产品',
        'desc':[
          { url: img + 'hot-oppor17.png', text: 'oppo r17', id: 308 },
          { url: img + 'hot-huawei-mate20.png', text: '华为mate20', id: 109 },
          { url: img + 'hot-huawei-荣耀v20.png', text: '荣耀v20', id: 300 },
          { url: img + 'hot-meizu-16h.png', text: '魅族16h', id: 301 },
          { url: img + 'hot-sanxing-Galaxys10.png', text: '三星s10', id: 302 },
          { url: img + 'hot-vivo-nex.png', text: 'vivo nex', id: 304 },
          { url: img + 'hot-xiaomi-9.png', text: '小米9', id: 204 },
          { url: img + 'hot-iphone-xr.png', text: '苹果XR', id: 205 },
          { url: img + 'hot-vivo-x23.png', text: 'vivo X23', id: 206 },
          { url: img + 'hot-lanya.png', text: '蓝牙音箱', id: 207 },
          { url: img + 'hot-table.png', text: '平板电脑', id: 208 },
          { url: img + 'hot-vr.png', text: 'VR眼镜', id: 208 },
          { url: img + 'hot-canon.png', text: '佳能单反', id: 208 }
        ]
      },
      {
        'title': '手机配件',
        'desc':[
          { url: img + 'chongdianqi.png', text: '充电器', id: 202 },
          { url: img + 'earphone.png', text: '耳机', id: 202 },
          { url: img + 'shoujike.png', text: '手机壳', id: 202 },
          { url: img + 'shoujimo.png', text: '手机膜', id: 202 },
          { url: img + 'zhihuan.png', text: '手机指环', id: 202 },
          { url: img + 'shoujizhijia.png', text: '手机支架', id: 202 },
          { url: img + 'yidongdianyuan.png', text: '移动电源', id: 202 },
          { url: img + 'shoujuxian.png', text: '数据线', id: 202 }
        ]
      },
      {
        'title': '智能设备',
        'desc': [
          { url: img + 'shoubiao.png', text: '智能手表', id: 202 },
          { url: img + 'shouhuan.png', text: '智能手环', id: 203 },
          { url: img + 'tiganche.png', text: '智能体感车', id: 203 },
          { url: img + 'robot.png', text: '智能机器人', id: 203 }
        ]
      }
    ],
    [
      {
        'title': '热销产品',
        'desc': [
          { url: img + 'maoyi.png', text: '毛衣', id: 108 },
          { url: img + 'weiyi.png', text: '卫衣', id: 109 },
          { url: img + 'xiuxianku.png', text: '休闲裤', id: 200 },
          { url: img + 'yurongfu.png', text: '羽绒服', id: 201 },
          { url: img + 'yundongfu.png', text: '运动服', id: 201 },
          { url: img + 'lianyiqun.png', text: '连衣裙', id: 201 }
        ]
      },
      {
        'title': '男士外套',
        'desc': [
          { url: img + 'bangqiufu.png', text: '棒球服', id: 108 },
          { url: img + 'fengyi.png', text: '风衣', id: 108 },
          { url: img + 'jiake.png', text: '夹克', id: 108 },
          { url: img + 'niuzai.png', text: '牛仔', id: 108 },
          { url: img + 'piyi.png', text: '皮衣', id: 108 },
          { url: img + 'xifu.png', text: '西服', id: 108 }
        ]
      },
      {
        'title': '女士小衫',
        'desc': [
          { url: img + 'baichenshan.png', text: '白衬衫', id: 108 },
          { url: img + 'gezishan.png', text: '格子衬衫', id: 108 },
          { url: img + 'tiaowen.png', text: '条纹衬衫', id: 108 },
          { url: img + 'tuan.png', text: '图案衬衫', id: 108 },
          { url: img + 'yuanlingshan.png', text: '圆领衬衫', id: 108 },
          { url: img + 'leis.png', text: '蕾丝衬衫', id: 108 }
        ]
      },
      {
        'title': '新品T恤',
        'desc': [
          { url: img + 'changxu.png', text: '长袖T恤', id: 108 },
          { url: img + 'chunse.png', text: '纯色T恤', id: 108 },
          { url: img + 'duanxu.png', text: '短袖T恤', id: 108 },
          { url: img + 'tiaowenxu.png', text: '条纹T恤', id: 108 },
          { url: img + 'yinhua.png', text: '印花T恤', id: 108 },
          { url: img + 'chunmian.png', text: '纯棉T恤', id: 108 }
        ]
      },
      {
        'title': '裙子',
        'desc': [
          { url: img + 'leisiqun.png', text: '蕾丝连衣裙', id: 108 },
          { url: img + 'niuzaiqun.png', text: '牛仔裙', id: 108 },
          { url: img + 'yizijian.png', text: '一字肩连衣裙', id: 108 },
          { url: img + 'zhensi.png', text: '真丝连衣裙', id: 108 },
          { url: img + 'shatan.png', text: '沙滩裙', id: 108 },
          { url: img + 'beidai.png', text: '背带裙', id: 108 }
        ]
      }
    ]
  ];
  return rightItem;
}

function buycar(){
  var car = [{
    "productId": 1,
    "title": "小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待",
    "price": '2299.99',
    "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/iphoneX1.jpg",
    "total": 1,
    "仓库": '北美',
    "logistic": {
      "顺风": '10.00',
      "申通": '8.00',
      "韵达": '6.00'
    },
    "property": "64GB 黑色 8G内存"
  },
  {
    "productId": 2,
    "title": "针织衫男 2019春季新款 男士男装休闲开衫外套 新品毛线衣男",
    "price": '169.00',
    "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic14707.jpg",
    "total": 1,
    "仓库": '北美',
    "logistic": {
      "顺风": '10.00',
      "申通": '8.00',
      "韵达": '6.00'
    },
    "property": "尺码3 黑色 "
  },
  {
    "productId": 3,
    "title": "TELESIN Gopro6 7自行车支架Hero5 4配件 小蚁4K运动相机单车固定夹 摩托车支架",
    "price": '39.00',
    "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic10645.jpg",
    "total": 1,
    "仓库": '北美',
    "logistic": {
      "顺风": '10.00',
      "申通": '8.00',
      "韵达": '6.00'
    },
    "property": "钛色"
  },
  {
    "productId": 4,
    "title": "联想小新潮7000 13.3/14英寸超极本酷睿8代固态轻薄便携家用商务办公游戏学生手提笔记本电脑 银色标配:i5-8250U 8G 512G独显",
    "price": '5399.49',
    "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic44012.jpg",
    "total": 1,
    "仓库": '北美',
    "logistic": {
      "顺风": '10.00',
      "申通": '8.00',
      "韵达": '6.00'
    },
    "property": "立体 黑色 安卓通用"
  },
  {
    "productId": 5,
    "title": "XZOO 连衣裙2019春季新款女装韩版小香风长袖打底裙中长款圆领修身职业裙子 米白色",
    "price": '198.00',
    "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic11475.jpg",
    "total": 1,
    "仓库": '北美',
    "logistic": {
      "顺风": '10.00',
      "申通": '8.00',
      "韵达": '6.00'
    },
    "property": "五分 纯色"
  }
  ];
  return car;
}

function managerlist(){
  var prolist = [
    {
      'locate': 'eBay',
      'name': '小当店铺',
      'state': 0,
      "productId": 1,
      "title": "针织衫男 2019春季新款 男士男装休闲开衫外套 新品毛线衣男",
      "price": '169.00',
      "usprice": '150.00',
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic14707.jpg",
      "property": ['尺码1', '黑色']
    },
    {
      "price": '39.00',
      'locate': 'eBay',
      'name': '飞流店铺',
      'state': 0,
      "productId": 1,
      "title": "TELESIN Gopro6 7自行车支架Hero5 4配件 小蚁4K运动相机单车固定夹 摩托车支架",
      "price": '39.00',
      "usprice": '27.00',
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic10645.jpg",
      "property": ['钛色', '1m']
    },
    {
      "price": '138.49',
      'locate': 'eBay',
      'name': '小李店铺',
      'state': 1,
      "productId": 3,
      "title": "联想小新潮7000 13.3/14英寸超极本酷睿8代固态轻薄便携家用商务办公游戏学生手提笔记本电脑 银色标配:i5-8250U 8G 512G独显",
      "price": '5399.00',
      "usprice": '5200.00',
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic12732.jpg",
      "sell": 40,
      "property": ['立体', '黑色', '安卓通用']
    },
    {
      'locate': 'eBay',
      'name': '小赵店铺',
      'state': 2,
      "productId": 4,
      "title": "小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待",
      "price": '2299.00',
      "usprice": '2100.00',
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/iphoneX1.jpg",
      "sell": 50,
      "property": ['64G', '黑色', '8G内存']
    },
    {
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic11475.jpg",
      'locate': 'eBay',
      'name': '小孙店铺',
      'state': 3,
      "productId": 5,
      "title": "XZOO 连衣裙2019春季新款女装韩版小香风长袖打底裙中长款圆领修身职业裙子 米白色",
      "price": '198.00',
      "usprice": '189.00',
      "sell": 30,
      "property": ['五分', '纯色']
    }
  ];
  return prolist;
}
function orderlistmanager(){
  var orderlist = [
    {
      'locate': 'eBay',
      'state': 0,
      "productId": 1,
      "title": "HLA海澜之家时尚有型牛仔裤2019舒适柔软男裤HKNAD3E109A 牛仔蓝",
      "price": '168.00',
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic19875.jpg",
      "property": ['牛仔蓝', '165', '72A'],
      "total": 1,
      "totalprice": '168.00',
      "payTime": '22时12分',
      "user": "张三",
      "telephone": '131****4432',
      "address": '中国广东省广州市海珠区新港中路397号T.I.T创意园B4',
      "order": { 'id': '8467558392', 'time': '2019-01-03 17:23:11', 'deliver': '普通快递','deliverPrice':'2.00'},
      "invoice":{ 'style':'普通发票','belong':'个人','content':'商品明细' }
    },
    {
      'locate': '亚马逊',
      'state': 1,
      "productId": 2,
      "title": "AK GUAGUA2018秋季宽松男装秋装圆领休闲潮流黑色个性透气青年薄款日韩夹克 黑色 XL",
      "price": '429.00',
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic16543.jpg",
      "sell": 40,
      "property": ['L', '深灰色'],
      "total": 2,
      "totalprice": '858.00',
      "user": "李四",
      "telephone": '137****5462',
      "address": '中国广东省广州市海珠区新港中路397号T.I.T创意园B4',
      "order": { 'id': '84839362843', 'time': '2018-03-05 11:20:01', 'deliver': '普通快递','deliverPrice':'5.00'},
      "invoice": { 'style': '普通发票', 'belong': '个人', 'content': '商品明细' }
    },
    {
      'locate': '淘宝',
      'state': 2,
      "productId": 3,
      "title": "小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待",
      "price": '2299.00',
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/xiaomi-8-gold.jpg",
      "sell": 50,
      "property": ['64G', '黑色', '8G内存'],
      "total": 3,
      "totalprice": '6870.00',
      "user": "王五",
      "telephone": '158****9702',
      "address": '中国广东省广州市海珠区新港中路397号T.I.T创意园B4',
      "order": { 'id': '75648493653', 'time': '2019-01-23 08:23:41', 'deliver': '航空快递','deliverPrice': '100.00'},
      "invoice": { 'style': '普通发票', 'belong': '个人', 'content': '商品明细' }
    },
    {
      'locate': '天猫',
      'state': 3,
      "productId": 4,
      "title": "华为（HUAWEI） honor/荣耀10 GT游戏加速 AIS手持夜景全网通4G智能手机 吃鸡神器 幻夜黑 全网通（6G+128G）",
      "price": '2599.00',
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic15426.jpg",
      "sell": 30,
      "property": ['128G', '黑色', '6G内存'],
      "total": 1,
      "totalprice": '2599.00',
      "user": "马六",
      "telephone": '159****7745',
      "address": '中国广东省广州市海珠区新港中路397号T.I.T创意园B4',
      "order": { 'id': '8573638043', 'time': '2018-12-05 07:55:32', 'deliver': '普通快递','deliverPrice': '0.00'},
      "invoice": { 'style': '普通发票', 'belong': '个人', 'content': '商品明细' }
    }
  ];
  return orderlist;
}

function searchlist(){
  var list =  [
    {
      "productId": 1,
      "title": "小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待",
      "price": '2299.00',
      "mainPicUrl": "http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/xiaomi-8-gold.jpg",
      "downloadTime": 77,
      "sell": 2233
    },
    {
      "productId": 38,
      "title": "小米 红米6 4GB+64GB 流沙金 全网通4G手机 双卡双待",
      "price": '799.00',
      "mainPicUrl": "/image/红米.png",
      "downloadTime": 72,
      "sell": 2221
    },
    {
      "productId": 38,
      "title": "小米6X 全网通 6GB+64GB 赤焰红 移动联通电信4G手机 双卡双待 智能手机",
      "price": '1299.00',
      "mainPicUrl": "/image/6x.png",
      "downloadTime": 90,
      "sell": 2235
    },
    {
      "productId": 39,
      "title": "小米Mix3 6GB+128GB黑色 骁龙845 全网通4G 双卡双待 全面屏拍照游戏智能手机",
      "price": '3599.00',
      "mainPicUrl": "/image/mix3.png",
      "downloadTime": 54,
      "sell": 234
    },
    {
      "productId": 37,
      "title": "小米8青春版 镜面渐变AI双摄 6GB+64GB 魅力红 骁龙 全网通4G 双卡双待 全面屏",
      "price": '14499.00',
      "mainPicUrl": "/image/小米8青春.png",
      "downloadTime": 64,
      "sell": 123
    },  
    {
      "productId": 36,
      "title": "小米 8SE 全面屏智能游戏拍照手机 6GB+128GB 黑色 骁龙710处理器 全网通",
      "price": '1599.00',
      "mainPicUrl": "/image/8se.png",
      "downloadTime": 43,
      "sell": 342
    }
  ];
  // for(var i=4;i<12;i++){
  //   list[i] = list[i%4];
  // }
  return list;
}

function promotion(){
  var list=[
    {
      "id": 3,
      "simple": 0,
      "type": "精品手机",
      "style": "全场打折最低999元",
      "brand": "大型手机商品专场",
      "time": 5,
      "photo1": img + 'hot-meizu-16h.png',
      "photo2": img + 'hot-oppor17.png'
    },
    {
      "id":2,
      "simple":3,
      "type":"户外运动", 
      "style":"特价专区39元封顶",
      "brand":"运动鞋服特卖专场",
      "time":5,
      "photo1": img + 'yundongfu.png',
      "photo2": img + 'weiyi.png'
    },
    {
      "id": 1,
      "simple": 2,
      "type": "智能数码",
      "style": "全场低至9.9元",
      "brand": "影音娱乐拼购专场",
      "time": 5,
      "photo1": img+'hot-canon.png',
      "photo2": img+'hot-lanya.png'
    },
    {
      "id": 1,
      "simple": 1,
      "type": "电脑办公",
      "style": "部分满千减百",
      "brand": "电竞外设",
      "time": 5,
      "photo1": img + 'hot-vr.png',
      "photo2": img + 'hot-table.png'
    },
    {
      "id": 2,
      "simple": 1,
      "type": "男鞋女鞋",
      "style": "领劵立减30",
      "brand": "流行男鞋专场",
      "time": 5,
      "photo1": img + 'shoe.png',
      "photo2": img + 'shoe2.png'
    },
    {
      "id": 2,
      "simple": 2,
      "type": "箱包饰品",
      "style": "领劵满499减80",
      "brand": "时尚拉杆箱",
      "time": 5,
      "photo1": img + 'xiang.png',
      "photo2": img + 'xiang1.png'
    },
    {
      "id": 2,
      "simple": 3,
      "type": "户外运动",
      "style": "199免运费",
      "brand": "运动户外精选专场",
      "time": 5,
      "photo1": img + 'shoe1.png',
      "photo2": img + 'bangqiufu.png'
    }
  ];
  return list;
}

function prolist(){
  var list=[
    { title: '为你精选', picture: img + 'sale1.png', id: 0 }, 
    { title: "电脑数码", picture: img + 'sale2.png', id: 1 ,content:["全部","电脑办公","智能数码"]},
    { title: '鞋包配饰', picture: img + 'sale3.png', id: 2 ,content: ["全部", "男鞋女鞋", "箱包服饰", "户外运动"]}, 
    { title: "手机通讯", picture: img + 'sale4.png', id: 3 },
    { title: '家居生活', picture: img + 'sale5.png', id: 4 ,content:["全部","家居家装","保养健身","汽车用品"]}, 
    { title: "超市百货", picture: img + 'sale6.png', id: 5,content:["全部","食品生鲜","个护美妆","图书音像"] },
    { title: '母婴育儿', picture: img + 'sale7.png', id: 6 },
    { title: "家用电器", picture: img + 'sale8.png', id: 7 },
    { title: '魅力女装', picture: img + 'sale9.png', id: 8 }, 
    { title: "潮流男装", picture: img + 'sale10.png', id: 9 }
  ];
  return list;
}

function getCoupon(){
  var coupon = [
    { cupId: 1, brandId: 1, goodId: 1, desc: '仅可购买小米指定商品', value: 100, style: '满2000可用', num: 0.77, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/xiaomi-8-gold.jpg', state: 1 ,text: '小米8'},
    { cupId: 3, brandId: 4, goodId: 4, desc: '仅可购买华硕指定商品', value: 400, style: '满4000可用', num: 0.99, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/pd_pic20645.jpg', state: 1 },
    { cupId: 2, brandId: 5, goodId: 5, desc: '仅可购买森宿部分商品', value: 30, style: '满65可用', num: 0.87, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/leisiqun.png', state: 1 },
    { cupId: 1, brandId: 2, goodId: 2, desc: '仅可购买小米指定商品', value: 30, style: '满500可用', num: 0.97, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/hot-lanya.png', state: 1 },
    { cupId: 3, brandId: 3, goodId: 3, desc: '仅可购买苹果部分商品', value: 200, style: '满3000可用', num: 0.78, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/hot-table.png', state: 1 },
    { cupId: 1, brandId: 8, goodId: 8, desc: '仅可购买canon指定商品', value: 50, style: '满499可用', num: 0.60, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/hot-canon.png', state: 1 },
    { cupId: 2, brandId: 6, goodId: 6, desc: '仅可购买AK部分商品', value: 30, style: '满199可用', num: 0.67, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/xifu.png', state: 1 },
    { cupId: 1, brandId: 9, goodId: 9, desc: '仅可购买魅族指定商品', value: 400, style: '满5000可用', num: 0.74, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/hot-meizu-16h.png', state: 1 },
    { cupId: 2, brandId: 10, goodId: 10, desc: '仅可购买耐克部分商品', value: 100, style: '满500可用', num: 0.90, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/yundongfu.png', state: 1 },
    { cupId: 2, brandId: 7, goodId: 7, desc: '仅可购买美特斯邦威指定商品', value: 20, style: '满199可用', num: 0.45, pic: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/bangqiufu.png', state: 1 }
  ];
  return coupon;
}
function getDiscount(){
  var discountList = [
    { title: '精选好券', type: 0, id: 't1' }, { title: '手机数码', type: 1, id: 't2' },
    { title: '服装内衣', type: 2, id: 't3' }, { title: '电脑办公', type: 3, id: 't4' },
    { title: '鞋靴箱包', type: 4, id: 't5' }, { title: '食品饮料', type: 5, id: 't6' },
    { title: '图书音像', type: 6, id: 't7' }, { title: '汽车用品', type: 7, id: 't8' }
  ];
  return discountList;
}

module.exports = {
  slidehome: slidehome,
  goods: goods,
  smallus: smallus,
  classfily: classfily,
  buycar: buycar,
  managerlist: managerlist,
  orderlistmanager: orderlistmanager,
  searchlist: searchlist,
  promotion: promotion,
  prolist: prolist,
  getCoupon: getCoupon,
  getDiscount: getDiscount
}