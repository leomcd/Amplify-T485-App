import React from 'react';

import { Storage } from 'aws-amplify';

class StorageImage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	
	UNSAFE_componentWillMount() {
		Storage.get(this.props.imgKey, { download: true }).then((result) => {
			this.setState({
				imagething: URL.createObjectURL(result.Body)
			});
		});
	}

	componentDidMount() {
		Storage.get(this.props.imgKey, { download: true }).then((result) => {
			this.setState({
				imagething: URL.createObjectURL(result.Body)
			});
		});
	}

	render() {
		return (
			<img src={this.state.imagething} className="amplify-img-gallery" />
		);
	}
}

export default StorageImage;