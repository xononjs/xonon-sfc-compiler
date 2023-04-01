declare const FileParser: {
    readFile(contents: string): {
        code: string;
        tags: any;
    };
    extract(fragment: any): {
        code: string;
        tags: any;
    };
};
export default FileParser;
