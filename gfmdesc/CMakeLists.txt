cmake_minimum_required(VERSION 3.20)
project(gfm-online-judge-description-converter)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -O3")
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -O3")

include(GNUInstallDirs)

set(CMARK_GFM_PROJECT_VERSION_MAJOR 0)
set(CMARK_GFM_PROJECT_VERSION_MINOR 29)
set(CMARK_GFM_PROJECT_VERSION_PATCH 0)
set(CMARK_GFM_PROJECT_VERSION_GFM 13)
set(CMARK_GFM_PROJECT_VERSION ${CMARK_GFM_PROJECT_VERSION_MAJOR}.${CMARK_GFM_PROJECT_VERSION_MINOR}.${CMARK_GFM_PROJECT_VERSION_PATCH}.gfm.${CMARK_GFM_PROJECT_VERSION_GFM})

set(HEADERS
  cmark-gfm/src/cmark-gfm.h
  cmark-gfm/src/cmark-gfm-extension_api.h
  cmark-gfm/src/parser.h
  cmark-gfm/src/buffer.h
  cmark-gfm/src/node.h
  cmark-gfm/src/iterator.h
  cmark-gfm/src/chunk.h
  cmark-gfm/src/references.h
  cmark-gfm/src/footnotes.h
  cmark-gfm/src/map.h
  cmark-gfm/src/utf8.h
  cmark-gfm/src/scanners.h
  cmark-gfm/src/inlines.h
  cmark-gfm/src/houdini.h
  cmark-gfm/src/cmark_ctype.h
  cmark-gfm/src/render.h
  cmark-gfm/src/registry.h
  cmark-gfm/src/syntax_extension.h
  cmark-gfm/src/plugin.h
  gfm2polygon-statement/src/polygon.hpp
  src/boj_stack.h
  )
set(LIBRARY_SOURCES
  cmark-gfm/src/cmark.c
  cmark-gfm/src/node.c
  cmark-gfm/src/iterator.c
  cmark-gfm/src/blocks.c
  cmark-gfm/src/inlines.c
  cmark-gfm/src/scanners.c
  cmark-gfm/src/scanners.re
  cmark-gfm/src/utf8.c
  cmark-gfm/src/buffer.c
  cmark-gfm/src/references.c
  cmark-gfm/src/footnotes.c
  cmark-gfm/src/map.c
  cmark-gfm/src/render.c
  cmark-gfm/src/man.c
  cmark-gfm/src/xml.c
  cmark-gfm/src/html.c
  cmark-gfm/src/commonmark.c
  cmark-gfm/src/plaintext.c
  cmark-gfm/src/latex.c
  cmark-gfm/src/houdini_href_e.c
  cmark-gfm/src/houdini_html_e.c
  cmark-gfm/src/houdini_html_u.c
  cmark-gfm/src/cmark_ctype.c
  cmark-gfm/src/arena.c
  cmark-gfm/src/linked_list.c
  cmark-gfm/src/syntax_extension.c
  cmark-gfm/src/registry.c
  cmark-gfm/src/plugin.c
  gfm2polygon-statement/src/polygon.cpp
  src/boj_stack.cc
  ${HEADERS}
  )

set(LIBRARY "libgfmdesc")
set(PROGRAM "gfmdesc")
set(CMARK_GFM_PROJECT_NAME "cmark-gfm")

include_directories(${CMAKE_CURRENT_BINARY_DIR})
include_directories(${CMAKE_CURRENT_BINARY_DIR}/gen)
include_directories(${CMAKE_CURRENT_BINARY_DIR}/src)
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/cmark-gfm/src)
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/cmark-gfm/extensions)
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/gfm2polygon-statement/src)

include_directories(${EMSCRIPTEN}/system/include)
include_directories(${EMSCRIPTEN}/system/include/libc)
include_directories(${EMSCRIPTEN}/system/include/libcxx)

configure_file(
  ${CMAKE_CURRENT_SOURCE_DIR}/cmark-gfm-in/cmark-gfm_version.h.in
  ${CMAKE_CURRENT_BINARY_DIR}/gen/cmark-gfm_version.h)

include(GenerateExportHeader)
add_library(${LIBRARY} ${LIBRARY_SOURCES})

generate_export_header(${LIBRARY}
  BASE_NAME ${CMARK_GFM_PROJECT_NAME}
  EXPORT_FILE_NAME gen/cmark-gfm_export.h)

include(${CMAKE_CURRENT_SOURCE_DIR}/cmark-gfm/CheckFileOffsetBits.cmake)
CHECK_FILE_OFFSET_BITS()

include(CheckIncludeFile)
include(CheckCSourceCompiles)
include(CheckCSourceRuns)
include(CheckSymbolExists)
CHECK_INCLUDE_FILE(stdbool.h HAVE_STDBOOL_H)
CHECK_C_SOURCE_COMPILES(
  "int main() { __builtin_expect(0,0); return 0; }"
  HAVE___BUILTIN_EXPECT)
CHECK_C_SOURCE_COMPILES("
  int f(void) __attribute__ (());
  int main() { return 0; }
" HAVE___ATTRIBUTE__)

configure_file(
  ${CMAKE_CURRENT_SOURCE_DIR}/cmark-gfm/src/config.h.in
  ${CMAKE_CURRENT_BINARY_DIR}/gen/config.h)

add_executable(${PROGRAM} bindings/libgfm2pst.cc)
target_link_libraries(${PROGRAM} ${LIBRARY})
set_target_properties(${PROGRAM} PROPERTIES
    LINK_FLAGS "-O3 --bind -sEXPORT_ES6 -o ${PROGRAM}.js"
)
