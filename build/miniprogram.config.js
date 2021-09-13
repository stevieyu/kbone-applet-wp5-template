// https://wechat-miniprogram.github.io/kbone/docs/config/
module.exports = {
	origin: 'https://kbone.applet',
	entry: '/',	
	router: {
		index: [
			'/:x?',
			'/:x/:x?',
			'/:x/:x/:x?',
			'/:x/:x/:x/:x?'
		]
	},	
	redirect: {		
		notFound: 'index',
		accessDenied: 'index',
	},
    generate: {
		app: 'default',
		appWxss: 'default',
		// autoBuildNpm: 'npm',
		globalVars: [
            ['SVGElement', 'function SVGElement(){}'],
        ],
		weui: true,
    },
	appExtraConfig: {
		useExtendedLib: {
			kbone: true,
		},
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},
	projectConfig: {
		appid: process.env.APPID,
        projectname: 'kbone-demo',
		libVersion: "2.18.1",
		setting: {
			"es6": false,
			"enhance": false,
		}
	},
	sitemapConfig: {
		rules: [{
			action: 'allow',
			page: '*',
		}],
	},
	global: {
	    share: true,
		shareTimeline: true,
	    windowScroll: false,
		pageBackgroundColor: '#efeef2',
		reachBottom: true,
		reachBottomDistance: 10,
		pullDownRefresh: true,
		rem: true,
		pageStyle: true,
	},
	packageConfig: {
		author: 'wechat-miniprogram',
	},
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,

		// wxssUniversalSelector: 'classprefix',
	},
}