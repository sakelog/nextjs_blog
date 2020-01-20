import * as React from "react"
const rehypeReact = require("rehype-react")

// component再定義
const RenderAst = new rehypeReact({
createElement: React.createElement,
components: {
    h2: props => {
    return (
        <h2 className="text-primary p-2 my-4" {...props}>
        {}
        </h2>
    )
    },
    h3: props => {
        return (
            <h3 className="p-2 mt-4 mb-2" {...props}>
            {}
            </h3>
        )
    },
    table: props => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered" {...props}></table>
        </div>
    )
    },
    blockquote: props => {
    return <blockquote className="blockquote" {...props}></blockquote>
    },
},
}).Compiler

export default RenderAst