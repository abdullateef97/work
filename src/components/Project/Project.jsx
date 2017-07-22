import React, {Component} from 'react'
import GeoPattern from 'geopattern'

import Tag from '../Tag/Tag.jsx'
import styles from './Project.css'

export default class Project extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let pattern = GeoPattern.generate(this.props.name, {
			baseColor: '#b6d78b'
		});
		document.getElementsByClassName(this.props.id)[0].style.backgroundImage = pattern.toDataUrl();
	}

	render() {
		let tagsDOM = this.props.tags.map((t) =>
			<Tag key={t} name={t}/>
		);
		return (
			<div className={[styles.project, this.props.id].join(' ')}>
				<div className={styles.projectTitle}>
					{this.props.name}
					<span className={styles.projectLinks}>
						<img className={styles.logo} src="../../../img/github-logo.svg" />
					</span>
				</div>
				<div className={styles.projectDesc}>{this.props.desc}</div>
				<div className={styles.projectTags}>{tagsDOM}</div>
			</div>
		)
	}
}
