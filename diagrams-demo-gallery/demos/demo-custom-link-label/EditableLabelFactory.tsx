import * as React from 'react';
import { AbstractReactFactory, GenerateWidgetEvent } from '@treenity/react-canvas-core';
import { DiagramEngine } from '@treenity/react-diagrams';

import { EditableLabelModel } from './EditableLabelModel';
import { EditableLabelWidget } from './EditableLabelWidget';

export class EditableLabelFactory extends AbstractReactFactory<EditableLabelModel, DiagramEngine> {
	constructor() {
		super('editable-label');
	}

	generateModel(): EditableLabelModel {
		return new EditableLabelModel();
	}

	generateReactWidget(event: GenerateWidgetEvent<EditableLabelModel>): JSX.Element {
		return <EditableLabelWidget model={event.model} />;
	}
}
