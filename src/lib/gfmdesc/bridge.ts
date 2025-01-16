import Module from '$include/gfmdesc'

let module: any = null

const validateModule = async () => {
  if (!module) {
    module = await Module()
  }
}

export const toHtml = async (content: string): Promise<string> => {
  await validateModule()
  return module.cmark_markdown_to_html(content)
}

export const toBOJDesc = async (content: string): Promise<string> => {
  await validateModule()
  return module.cmark_render_boj_stack(content)
}

export const toPolygonStatement = async (content: string): Promise<string> => {
  await validateModule()
  return module.cmark_render_pstatement(content)
}
