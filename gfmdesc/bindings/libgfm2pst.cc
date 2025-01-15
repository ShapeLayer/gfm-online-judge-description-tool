#include <string>
#include <emscripten/bind.h>

#include "cmark-gfm.h"
#include "polygon.hpp"

using namespace emscripten;

std::string _cmark_render_pstatement_impl(std::string text) {
  cmark_node *document;
  cmark_parser *parser;
  int options = CMARK_OPT_DEFAULT;

  parser = cmark_parser_new_with_mem(options, cmark_get_arena_mem_allocator());
  cmark_parser_feed(parser, text.c_str(), text.size());
  document = cmark_parser_finish(parser);

  std::string result = cmark_render_pstatement(document, options);
  return result;
}

std::string _cmark_markdown_to_html_impl(std::string text) {
  char* content;
  content = cmark_markdown_to_html(text.c_str(), text.size(), 0);
  std::string result = std::string(content);
  return result;
}

EMSCRIPTEN_BINDINGS(LibGFM2pst) {
  function("cmark_render_pstatement", &_cmark_render_pstatement_impl, allow_raw_pointers());
  function("cmark_markdown_to_html", &_cmark_markdown_to_html_impl, allow_raw_pointers());
}

float lerp(float a, float b, float t) {
  return (1 - t) * a + t * b;
}

EMSCRIPTEN_BINDINGS(my_module) {
  function("lerp", &lerp);
}
