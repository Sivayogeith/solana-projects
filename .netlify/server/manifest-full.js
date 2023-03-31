export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c6c75b1d.js","imports":["_app/immutable/entry/start.c6c75b1d.js","_app/immutable/chunks/index.fad5d6e4.js","_app/immutable/chunks/singletons.bb58ab88.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d6ca07d5.js","imports":["_app/immutable/entry/app.d6ca07d5.js","_app/immutable/chunks/index.fad5d6e4.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/airdrop",
				pattern: /^\/airdrop\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/transfer",
				pattern: /^\/transfer\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
