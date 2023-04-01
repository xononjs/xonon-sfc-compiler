import ComponentGenerator from "./component-genorator"
import FileParser from "./file"
import CodeFormatter from "./format"
import ScriptParser from "./script"
import TagParser from "./tag"

export default function (file: string): string {
    const { code, tags } = FileParser.readFile(file)
    let { props, rest } = ScriptParser.parse(code)
    const { nodes, listeners } = TagParser.parse(tags)
    const output = ComponentGenerator.generate(props, nodes, listeners, rest)
    const formatted = CodeFormatter.format(output)
    return formatted
}