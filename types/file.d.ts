declare const FileParser: {
    readFile(path: any): {
        code: string;
        tags: any;
    };
    extract(fragment: any): {
        code: string;
        tags: any;
    };
};
export default FileParser;
