#include <string>
#include <cmark-gfm.h>

#include "node.h"
#include "boj_stack.h"

#define COMPUTER_CODE_COLOR "#e74c3c"

struct render_state {
  std::string content;
  int indent;
};

static void S_render_node(cmark_node *node, cmark_event_type ev_type, struct render_state *state) {
  cmark_node *parent;
  cmark_node *grandparent;
  std::string data_string;
  bool is_tight;
  char heading[3];

  if (node == NULL) return;

  bool entering = (ev_type == CMARK_EVENT_ENTER);

  switch (cmark_node_get_type(node)) {
  case CMARK_NODE_DOCUMENT:
    break;
  case CMARK_NODE_BLOCK_QUOTE:
    if (entering) {
      state->content.append("<blockquote>\n");
    } else {
      state->content.append("</blockquote>\n");
    }
    break;
  case CMARK_NODE_LIST:
    switch (cmark_node_get_list_type(node)) {
    case CMARK_BULLET_LIST:
      if (entering) {
        state->content.append("<ul>\n");
      } else {
        state->content.append("</ul>\n");
      }
      break;
    case CMARK_ORDERED_LIST:
      if (entering) {
        state->content.append("<ol>\n");
      } else {
        state->content.append("</ol>\n");
      }
      break;
    }
    break;
  case CMARK_NODE_ITEM:
    if (entering) {
      state->content.append("<li>");
    } else {
      state->content.append("</li>\n");
    }
    break;
  case CMARK_NODE_CODE_BLOCK:
    state->content.append("<span style=\"color:");
    state->content.append(COMPUTER_CODE_COLOR);
    state->content.append(";\"><pre><code>");
    state->content.append(cmark_node_get_literal(node));
    state->content.append("</code></pre></span>\n");
    break;
  case CMARK_NODE_HTML_BLOCK:
    state->content.append(cmark_node_get_literal(node));
    break;
  case CMARK_NODE_CUSTOM_BLOCK:
    if (entering) {
      data_string.assign((char *)node->as.custom.on_enter.data, node->as.custom.on_enter.len);
    } else {
      data_string.assign((char *)node->as.custom.on_exit.data, node->as.custom.on_exit.len);
    }
    state->content.append(data_string);
    break;
  case CMARK_NODE_PARAGRAPH:
    parent = cmark_node_parent(node);
    grandparent = cmark_node_parent(parent);
    is_tight = false;
    if (grandparent != NULL && cmark_node_get_type(grandparent) == CMARK_NODE_LIST) {
      is_tight = grandparent->as.list.tight;
    }
    if (!is_tight) {
      if (entering) {
        state->content.append("<p>");
      } else {
        state->content.append("</p>\n");
      }
    }
    break;
  case CMARK_NODE_HEADING:
    strcpy(heading, "h_");
    heading[1] = (char)((int)'0' + cmark_node_get_heading_level(node));
    state->content.append("<");
    if (!entering) {
      state->content.append("/");
    }
    state->content.append(heading);
    state->content.append(">\n");
    break;
  case CMARK_NODE_THEMATIC_BREAK:
    state->content.append("<hr />\n");
    break;
  case CMARK_NODE_FOOTNOTE_DEFINITION:
    // TODO: Implement this
    break;
  case CMARK_NODE_TEXT:
    state->content.append(cmark_node_get_literal(node));
    break;
  case CMARK_NODE_SOFTBREAK:
  case CMARK_NODE_LINEBREAK:
    state->content.append("<br />\n");
    break;
  case CMARK_NODE_CODE:
    state->content.append("<span style=\"color:");
    state->content.append(COMPUTER_CODE_COLOR);
    state->content.append(";\"><code>");
    state->content.append(cmark_node_get_literal(node));
    state->content.append("</code></span>\n");
    break;
  case CMARK_NODE_HTML_INLINE:
    state->content.append(cmark_node_get_literal(node));
    break;
  case CMARK_NODE_CUSTOM_INLINE:
    if (entering) {
      data_string.assign((char *)node->as.custom.on_enter.data, node->as.custom.on_enter.len);
    } else {
      data_string.assign((char *)node->as.custom.on_exit.data, node->as.custom.on_exit.len);
    }
    state->content.append(data_string);
    break;
  case CMARK_NODE_EMPH:
    if (entering) {
      state->content.append("<em>");
    } else {
      state->content.append("</em>");
    }
    break;
  case CMARK_NODE_STRONG:
    if (entering) {
      state->content.append("<strong>");
    } else {
      state->content.append("</strong>");
    }
    break;
  case CMARK_NODE_LINK:
    if (entering) {
      state->content.append("<a href=\"");
      state->content.append(cmark_node_get_url(node));
      state->content.append("\">");
    } else {
      state->content.append("</a>");
    }
    break;
  case CMARK_NODE_IMAGE:
    if (entering) {
      state->content.append("<pre style=\"color:");
      state->content.append(COMPUTER_CODE_COLOR);
      state->content.append(";\"><code>Image `");
      state->content.append(cmark_node_get_url(node));
      state->content.append("` must be uploaded manually. Upload image and replace this.");
      state->content.append("</code></pre>");
    }
    break;
  case CMARK_NODE_FOOTNOTE_REFERENCE:
    // TODO: Implement this
    break;
  }
}

std::string cmark_render_boj_stack(cmark_node *root) {
  std::string result;
  cmark_event_type ev_type;
  cmark_node *cur;
  cmark_iter *iter = cmark_iter_new(root);
  struct render_state state = {result, 0};

  while ((ev_type = cmark_iter_next(iter)) != CMARK_EVENT_DONE) {
    cur = cmark_iter_get_node(iter);
    S_render_node(cur, ev_type, &state);
  }

  cmark_iter_free(iter);
  return state.content;
}
