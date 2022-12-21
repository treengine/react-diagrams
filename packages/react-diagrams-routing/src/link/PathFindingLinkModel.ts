import { DefaultLinkModel, DefaultLinkModelOptions } from '@treenity/react-diagrams-defaults';
import { PATH_FINDING_LINK_FACTORY_NAME } from './Names';

export class PathFindingLinkModel extends DefaultLinkModel {
	constructor(options: DefaultLinkModelOptions = {}) {
		super({
			type: PATH_FINDING_LINK_FACTORY_NAME,
			...options
		});
	}

	performanceTune() {
		return false;
	}
}
