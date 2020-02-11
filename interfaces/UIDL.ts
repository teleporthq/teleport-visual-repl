export interface UIDLNode {
  type?: string;
  content?: any;
  elementInfo?: any;
  depthLevel?: number;
}

export interface UIDLElementNode {
  type: "element";
  content: {
    elementType: string;
    name?: string;
    style?: any;
    attrs?: any;
    events?: any;
    children?: UIDLNode[];
  };
}

export interface UIDLElementContent {
  type?: string;
  node?: any;
  propDefinitions?: object;
  stateDefinitions?: object;
  content?: string;
  elementType?: string;
  elementInfo?: object | string;
  depthLevel?: number;
  name?: string;
  style?: any;
  attrs?: any;
  events?: any;
  children?: UIDLNode[];
  dataSource?: object;
  reference?: object;
  value?: boolean | string | number;
  filterCondition?: any;
}
