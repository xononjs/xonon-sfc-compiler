declare const ComponentGenerator: {
    generate(props: any, nodes: any, listeners: any, rest: any): string;
    createNodeString(varNames: any, node: any): string | undefined;
    createAttributeStrings(varNames: any, node: any): string[];
};
export default ComponentGenerator;
