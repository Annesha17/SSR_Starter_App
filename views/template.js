"use strict";

function template(title) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var scripts = "";

  if (content) {
    scripts = "<script>\n            window.__state__ = ".concat(JSON.stringify(initialState), "\n        </script>\n        <script src=\"assets/client.js\"></script>");
  } else {
    scripts = " <script src=\"assets/bundle.js\"></script>";
  }

  var page = "<!DOCTYPE html>\n              <html lang=\"en\">\n              <head>\n                <meta charset=\"utf-8\">\n                <title> ".concat(title, " </title>\n                <link href=\"assets/style.css\" rel=\"stylesheet\">\n              </head>\n              <body>\n                <div class=\"content\">\n                   <div id=\"app\" class=\"wrap-inner\">\n                     ").concat(content, "\n                   </div>\n                </div>\n                  ").concat(scripts, "\n              </body>\n              </html>\n              ");
  return page;
}

module.exports = template;