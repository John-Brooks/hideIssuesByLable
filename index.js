// ==UserScript==
// @name         Hide by tags
// @version      1.0
// @description  hides in review items in issues list
// @author       OG:Daniil Babanin, forked by: John Brooks
// @homepageURL  https://github.com/John-Brooks/hideIssuesByLable
// @match        http://lustra/*/*/issues*
// @match        http://lustra/*/issues*
// @grant        none
// @license      MIT
// ==/UserScript==
(function() {
  hideGitlabTags();
  window.setInterval(hideGitlabTags, 500);
})();
function hideGitlabTags() {
  'use strict';
  var opacityLables = [
    'in review',
  ];
  var ignoreLables = [
  ];

  [].forEach.call(document.getElementsByClassName('issue'), function(issue) {
    var tagElems = issue.getElementsByTagName('a');

    if (tagElems.length < 3) {
      return;
    }

    [].forEach.call(tagElems, function(elem, index) {
      if (index < 2) {
        return;
      }
      if(elem && elem.getElementsByTagName('span').length){
        var tagText = elem.getElementsByTagName('span')[0].innerHTML;
        if(ignoreLables.indexOf(String(tagText)) !== -1){
          issue.style.display = 'none';
          return;
        }
        for ( var i in opacityLables ) {
          var label = opacityLables[i];
          if ( typeof(label) !== "string" ) {

            continue;
          }
          if ( String(tagText).match(label) !== null ) {
        issue.style.opacity = 0.5;
        return;
      }
    }
      }
    });
  });
}