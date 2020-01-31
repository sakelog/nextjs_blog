import * as React from "react"
const rehypeReact = require("rehype-react")

// component再定義
const RenderAst = new rehypeReact({
createElement: React.createElement,
components: {
    table: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement>) => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered" {...props}></table>
        </div>
    )
    },
    blockquote: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLElement> & React.BlockquoteHTMLAttributes<HTMLElement>) => {
    return <blockquote className="blockquote" {...props}></blockquote>
    },
},
}).Compiler

export default RenderAst