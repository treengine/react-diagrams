import * as React from 'react';
import { DiagramEngine } from '@treenity/react-diagrams';
import { CanvasWidget } from '@treenity/react-canvas-core';

export interface BodyWidgetProps {
	engine: DiagramEngine;
}

export class BodyWidget extends React.Component<BodyWidgetProps> {
	render() {
		return <CanvasWidget className="diagram-container" engine={this.props.engine} />;
	}
}
