// ==UserScript==
// @name         TokyoTech Matrix Autocomplete
// @namespace    https://jun.su/
// @version      1.0
// @description  This is the last time filling your TokyoTech Matrix! See disclaimer at github before using.
// @author       Jun Su
// @match        https://portal.nap.gsic.titech.ac.jp/GetAccess/Login*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.titech.ac.jp
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Jun1453/Titech-Matrix-Auto/main/titech-matrix-auto.user.js
// @downloadURL  https://raw.githubusercontent.com/Jun1453/Titech-Matrix-Auto/main/titech-matrix-auto.user.js
// @supportURL   https://github.com/Jun1453/Titech-Matrix-Auto
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to load
    $(document).ready(function() {

        // Complete your Matrix
        //              A    B    C    D    E    F    G    H    I    J
        var matrix = [['', '', '', '', '', '', '', '', '', ''], // 1
                      ['', '', '', '', '', '', '', '', '', ''], // 2
                      ['', '', '', '', '', '', '', '', '', ''], // 3
                      ['', '', '', '', '', '', '', '', '', ''], // 4
                      ['', '', '', '', '', '', '', '', '', ''], // 5
                      ['', '', '', '', '', '', '', '', '', ''], // 6
                      ['', '', '', '', '', '', '', '', '', '']] // 7

        // Get the first th element under each closest tr
        var message3Value = $("tr input[name='message3']").closest("tr").find("th:first").text().trim();
        var message4Value = $("tr input[name='message4']").closest("tr").find("th:first").text().trim();
        var message5Value = $("tr input[name='message5']").closest("tr").find("th:first").text().trim();

        // Fill in the input values
        $("input[name='message3']").val(matrix[message3Value.charCodeAt(3)-49][message3Value.charCodeAt(1)-65]);
        $("input[name='message4']").val(matrix[message4Value.charCodeAt(3)-49][message4Value.charCodeAt(1)-65]);
        $("input[name='message5']").val(matrix[message5Value.charCodeAt(3)-49][message5Value.charCodeAt(1)-65]);
    });
})();