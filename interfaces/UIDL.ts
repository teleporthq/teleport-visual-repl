export interface UIDLNode {
  type: string;
  content: any;
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
