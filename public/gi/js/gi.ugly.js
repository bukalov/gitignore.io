function generateGitIgnore(){$("#ignoreSearch").select2("val").length>0&&(window.location="/api/"+$("#ignoreSearch").select2("val"),$("#ignoreSearch").select2("val",""))}function generateGitIgnoreFile(){$("#ignoreSearch").select2("val").length>0&&(window.location="/api/f/"+$("#ignoreSearch").select2("val"))}$(document).ready(function(){$(".fancybox-media").fancybox({openEffect:"none",closeEffect:"none",helpers:{media:{}}}),$.ajax("/dd.json").success(function(a){$("#ignoreSearch").select2({placeholder:"Search Operating Systems, IDEs, or Programming Languages",tags:!0,minimumInputLength:1,data:a})})})