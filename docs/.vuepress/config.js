module.exports = {
    base: '/blog-demo/', //路径  ps:http://localhost:8080/blog-demo
    title: 'blog-demo',
    description: 'Vuepress blog demo',
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录
        // 即 docs/.vuepress/public/geass-bg.ico
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    themeConfig: {   //首页
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/coder-lzh/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [ //上面的导航部分
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/' }, //对应的是 /docs/blog/README.md 文件  也可以指定文件   /blog/FirstBlog.md
            // 多项，下拉形式
            {
                text: 'Concat',
                items: [
                    // link：指向链接也可以是外网链接
                    { text: 'Segmentfault', link: 'https://segmentfault.com/u/mulander' },
                ]
            },
            {
                text: 'GitHub',
                items: [
                    { text: 'GitHub首页', link: 'https://github.com/Mulander-J' },
                    { text: 'Island', link: 'https://mulander-j.github.io/island/code/html/index.html' },
                    { text: 'TimeWaster', link: 'https://mulander-j.github.io/timeWaster/demo/index.html#/' },
                ]
            },
        ],
        /*sidebar: [ //侧边栏
            ['/', '首页'],
            ['/blog/', '我的第一篇博客']
        ],*/
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    },

    markdown: {
        lineNumbers: true // 代码块显示行号
    },
}