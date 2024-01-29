import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = props => (
	<ContentLoader
		speed={2}
		width={380}
		height={400}
		viewBox='0 0 380 400'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='112' y='49' rx='86' ry='86' width='158' height='69' />
		<rect x='120' y='93' rx='100' ry='100' width='141' height='31' />
		<rect x='112' y='107' rx='100' ry='100' width='158' height='39' />
		<rect x='-1' y='218' rx='15' ry='15' width='380' height='71' />
		<rect x='22' y='316' rx='20' ry='20' width='88' height='33' />
		<rect x='250' y='310' rx='20' ry='20' width='115' height='51' />
		<rect x='110' y='178' rx='10' ry='10' width='160' height='25' />
	</ContentLoader>
)

export default Skeleton
