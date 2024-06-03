"use strict";

/* Tests for splitsquare.js
 *
 * Joel Burton <joel@joelburton.com>
 *
 */

if (typeof require === "function") {
    var assert = require("chai").assert;
    var {dump, is_valid, simplify, add} = require("../splitsquare");
}