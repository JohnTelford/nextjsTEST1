import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import '../comps/Highlighter.css'

const components = {}

const Page = ({Component}) => (
  <MDXProvider components={components}>
    <Component />
  </MDXProvider>
)

export default Page
