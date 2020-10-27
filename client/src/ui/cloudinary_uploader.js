// import React, { Component } from 'react';

// export default class CloudinaryUploader extends Component {
// 	componentDidMount() {
// 		cloudinary.applyUploadWidget(
// 			this.refs.button,
// 			{
// 				cloud_name: 'jujukro',
// 				upload_preset: 'ml_default',
// 				theme: 'minimal',
// 				sources: ['local', 'url'],
// 				button_caption: 'ADD PICTURES',
// 				button_class: 'btn',
// 				thumbnails: false
// 			},
// 			(err, upload) => {
// 				if (upload) this._handleUpload(upload);
// 			}
// 		);
// 	}
// 	render() {
// 		return <div ref={'button'} />;
// 	}
// 	_handleUpload({ event, info }) {
// 		if (event === 'success') {
// 			this.props.uploadPictures(info.path);
// 		}
// 	}
// }
