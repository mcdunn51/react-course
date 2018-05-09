import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
	return (
		<div>
			<p className="Paragraph1">{props.userName}Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper sodales odio, nec ultrices diam. Aenean ut orci at nulla tincidunt feugiat. Duis et nisi justo. Sed sed porta velit, nec tincidunt odio. Morbi lacus massa, placerat sit amet mauris sagittis, laoreet luctus ex. Donec metus velit, sagittis vel dictum id, ornare nec ex. Quisque ultrices lorem a lectus ultrices rutrum. Curabitur diam nunc, consequat ut sapien at, cursus varius ipsum. Pellentesque tincidunt, odio in blandit auctor, ante mi molestie enim, at lacinia nulla metus vel libero. Vestibulum placerat ex elit, scelerisque scelerisque ante maximus eget. Fusce sem quam, dapibus a aliquam interdum, sagittis vel dolor. Cras vestibulum ex pellentesque nibh posuere tempor.{props.userName3}</p>

			<p className="Paragraph2">Suspendisse risus diam, tincidunt eu faucibus ut, pharetra at mauris. Fusce tortor nunc, elementum non ligula non, efficitur tincidunt eros. Nam quis facilisis libero, molestie lacinia metus. Sed euismod nibh ut ipsum scelerisque, a convallis magna porttitor. Vivamus dolor diam, consectetur sit amet diam quis, vehicula sagittis tortor. Praesent id malesuada lectus, et dignissim nunc. Aliquam elementum sit amet augue egestas mollis. Phasellus mollis finibus felis, sed accumsan nisl ornare non. Curabitur eleifend rhoncus ipsum, et accumsan velit. Aliquam rhoncus mi at nunc mattis, sed pretium ex rutrum. Vestibulum dapibus vehicula pharetra.{props.userName2}</p>
		</div>
	)
};

export default UserOutput;

