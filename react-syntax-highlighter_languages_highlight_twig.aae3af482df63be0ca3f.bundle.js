(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1719:function(module,exports){module.exports=function(hljs){var FUNCTION_NAMES="attribute block constant cycle date dump include max min parent random range source template_from_string",FUNCTIONS={beginKeywords:FUNCTION_NAMES,keywords:{name:FUNCTION_NAMES},relevance:0,contains:[{className:"params",begin:"\\(",end:"\\)"}]},FILTER={begin:/\|[A-Za-z_]+:?/,keywords:"abs batch capitalize convert_encoding date date_modify default escape first format join json_encode keys last length lower merge nl2br number_format raw replace reverse round slice sort split striptags title trim upper url_encode",contains:[FUNCTIONS]},TAGS="autoescape block do embed extends filter flush for if import include macro sandbox set spaceless use verbatim";return TAGS=TAGS+" "+TAGS.split(" ").map((function(t){return"end"+t})).join(" "),{aliases:["craftcms"],case_insensitive:!0,subLanguage:"xml",contains:[hljs.COMMENT(/\{#/,/#}/),{className:"template-tag",begin:/\{%/,end:/%}/,contains:[{className:"name",begin:/\w+/,keywords:TAGS,starts:{endsWithParent:!0,contains:[FILTER,FUNCTIONS],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/}}/,contains:["self",FILTER,FUNCTIONS]}]}}}}]);