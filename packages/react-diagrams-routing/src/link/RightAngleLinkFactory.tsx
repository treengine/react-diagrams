import * as React from 'react';
import { RightAngleLinkWidget } from './RightAngleLinkWidget';
import { DefaultLinkFactory } from '@treenity/react-diagrams-defaults';
import { RightAngleLinkModel } from './RightAngleLinkModel';
import { RIGHT_ANGE_LINK_FACTORY_NAME } from './Names';

/**
 * @author Daniel Lazar
 */
export class RightAngleLinkFactory extends DefaultLinkFactory<RightAngleLinkModel> {
	constructor() {
		super(RIGHT_ANGE_LINK_FACTORY_NAME);
	}

	generateModel(event): RightAngleLinkModel {
		return new RightAngleLinkModel();
	}

	generateReactWidget(event): JSX.Element {
		return <RightAngleLinkWidget diagramEngine={this.engine} link={event.model} factory={this} />;
	}
}
