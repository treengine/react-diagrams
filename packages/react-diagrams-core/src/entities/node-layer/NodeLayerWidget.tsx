import * as React from 'react';
import styled from '@emotion/styled';
import { NodeModel } from '../node/NodeModel';
import { NodeWidget } from '../node/NodeWidget';
import { NodeLayerModel } from './NodeLayerModel';
import { DiagramEngine } from '../../DiagramEngine';

export interface NodeLayerWidgetProps {
	layer: NodeLayerModel;
	engine: DiagramEngine;
}

namespace S {
	export const Container = styled.div``;
}

export class NodeLayerWidget extends React.Component<NodeLayerWidgetProps> {
	render() {
		return (
			<>
				{Object.values(this.props.layer.getNodes()).map((node: NodeModel) => {
					return <NodeWidget key={node.getID()} diagramEngine={this.props.engine} node={node} />;
				})}
			</>
		);
	}
}
