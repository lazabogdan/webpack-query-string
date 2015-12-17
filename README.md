# webpack-query-string

### Install

	npm install lazabogdan/webpack-query-string
	
### Usage
	
Pass in the object to convert to a query string as the first parameter and any other optional [qs options](https://github.com/hapijs/qs). Returns a query string.
	
	function(fromObject, [options]) -> String
	
### Example

	var qs = require('webpack-query-string');
	
	// webpack.config.js
	
	loaders: [
		{
			test: /\.html$/, 
			loader: 'html?' + qs({
				attrs: [
					'img:src', 
					'some-element:src', 
					'some-other-element:src'
				]
			})
		}
	]
	
	// will return 
	// attrs[]=img:src&attrs[]=some-element:src&attrs[]=some-other-element:src