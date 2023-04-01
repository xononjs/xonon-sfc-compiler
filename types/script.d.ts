declare const ScriptParser: {
    parse(source: any): {
        props: any;
        rest: any;
    };
    walk(ast: any): {
        props: any;
        rest: any;
    };
    addExport(props: any, variableDeclaration: any): void;
};
export default ScriptParser;
