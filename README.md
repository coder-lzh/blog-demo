11



目录结构

docs
├─ README.md          // 博客首页配置
├─ index.md           // 必须是空的，用来生成目录结构
├─ about/             // nav导航的目录about模块
│  ├─ index.md        // 直接写关于我的内容
├─ blog/              // nav导航的目录blog模块，写文章的主体内容
│  ├─ index.md        // 必须是空的，用来生成文章列表
│  ├─ one.md          // 文章内容一
│  └─ two.md          // 文章内容二
└─ .vuepress/         // vuepress配置文件夹
   ├─ dist            // 不需要自己创建，用来存放build之后的东西
   ├─ public/         // 用来放置一些静态资源
   │  ├─ img/         // 用来存放图片
   │  ├─ favicon.ico  // 博客的logo
   └─ config.js       // 基本配置信息