param($installPath, $toolsPath, $package, $project)

$project | 
	Add-Paths "{
		'scalejs.effects-jqueryui'	: 'Scripts/scalejs.effects-jqueryui-$($package.Version)',
		'jQuery'					: 'Scripts/jquery-1.9.0',
		'jQuery-ui-effects'			: 'Scripts/jquery-ui-1.10.0.effects'
	}" | 
	Add-Shims "{ 
		'jQuery'					: {
			'exports'	: 'jQuery'
		},
		'jQuery-ui-effects'			: { 
			deps : ['jQuery']
		}
	}" | 
	Add-ScalejsExtension 'scalejs.effects-jqueryui' |
	Out-Null

		
	