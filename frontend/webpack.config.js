const path = require("path");

module.exports = {
	// ... other webpack configuration options

	resolve: {
		fallback: {
			crypto: require.resolve("crypto-browserify"),
			stream: require.resolve("stream-browserify"),
			zlib: require.resolve("browserify-zlib"),
			fs: false, // or require.resolve("fs") if needed
			http: require.resolve("stream-http"),
			path: require.resolve("path-browserify"),
			util: require.resolve("util/"),
			querystring: require.resolve("querystring-es3"),
			path: require.resolve("path-browserify"),
			http: require.resolve("stream-http"),
		},
	},
};
