declare const TagParser: {
    parse(tags: any): {
        nodes: never[];
        listeners: never[];
    };
    parseTags(nodes: any, listeners: any, parent: any, index: any, tags: any): any;
    parseText(nodes: any, index: any, parent: any, tag: any): any;
    addText(nodes: any, index: any, parent: any, value: any): any;
    addBinding(nodes: any, index: any, parent: any, name: any): any;
    parseElement(nodes: any, listeners: any, index: any, parent: any, tag: any): any;
    removeTrailingWhitespace(nodes: any): void;
};
export default TagParser;
