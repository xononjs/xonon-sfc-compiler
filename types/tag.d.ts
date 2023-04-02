declare const TagParser: {
    parse(tags: any[]): {
        nodes: never[];
        listeners: never[];
    };
    parseTags(nodes: {
        index: any;
        type: string;
        attrs: {};
        name: any;
        parent: any;
    }[], listeners: {
        index: any;
        event: any;
        handler: any;
    }[], parent: number | null, index: number, tags: any[]): number;
    parseText(nodes: any[], index: number, parent: number | null, tag: {
        value: any;
    }): number;
    addText(nodes: {
        index: any;
        type: string;
        value: any;
        parent: any;
    }[], index: number, parent: any, value: string): number;
    addBinding(nodes: {
        index: any;
        type: string;
        name: any;
        parent: any;
    }[], index: number, parent: any, name: any): number;
    parseElement(nodes: {
        index: any;
        type: string;
        attrs: {};
        name: any;
        parent: any;
    }[], listeners: {
        index: any;
        event: any;
        handler: any;
    }[], index: number, parent: any, tag: {
        attrs: any[];
        nodeName: any;
        childNodes: any;
    }): number;
    removeTrailingWhitespace(nodes: any[]): void;
};
export default TagParser;
