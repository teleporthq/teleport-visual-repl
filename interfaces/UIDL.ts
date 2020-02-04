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
  node?: any;
  content?: string;
  elementType?: string;
  elementInfo?: object;
  depthLevel: number;
  name?: string;
  style?: any;
  attrs?: any;
  events?: any;
  children?: UIDLNode[];
  dataSource?: any;
}
