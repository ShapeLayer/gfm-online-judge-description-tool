#ifndef BOJ_STACK_H
#define BOJ_STACK_H

#include <string>
#include <cmark-gfm.h>

std::string cmark_render_boj_stack(cmark_node *root);

#ifndef BOJ_STACK_DOM_STYLE_DEF
#define BOJ_STACK_DOM_STYLE_DEF

#define BOJ_STACK_DOM_STYLE_H1 "font-size: 2em; font-weight: normal; margin-top: 1em; margin-bottom: 0.5em;"
#define BOJ_STACK_DOM_STYLE_H2 "font-size: 1.5em; font-weight: normal; margin-top: 1em; margin-bottom: 0.5em;"
#define BOJ_STACK_DOM_STYLE_H3 "font-size: 1.3em; font-weight: normal; margin-top: 1em; margin-bottom: 0.5em;"
#define BOJ_STACK_DOM_STYLE_H4 ""
#define BOJ_STACK_DOM_STYLE_H5 ""


#endif

#endif
