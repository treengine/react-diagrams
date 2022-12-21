import { DefaultPortModel } from './DefaultPortModel';
import { AbstractModelFactory } from '@treenity/react-canvas-core';
import { DiagramEngine } from '@treenity/react-diagrams-core';

export class DefaultPortFactory extends AbstractModelFactory<DefaultPortModel, DiagramEngine> {
	constructor() {
		super('default');
	}

	generateModel(): DefaultPortModel {
		return new DefaultPortModel({
			name: 'unknown'
		});
	}
}
