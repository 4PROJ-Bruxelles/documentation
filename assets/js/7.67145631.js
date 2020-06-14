(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{353:function(a,e,t){"use strict";t.r(e);var s=t(43),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),t("p",[a._v("The backup is handled by a Docker container to allow the best avaibility of the backup service.\nIt uses "),t("code",[a._v("pg_dump")]),a._v(" on the primary database of the API which contains everything.\nTo allow a daily backup at 2AM, the service is based on a "),t("code",[a._v("cron")]),a._v("job which will react to the time (for a better accuracy, please install "),t("code",[a._v("ntp")]),a._v(" on the Docker host).")]),a._v(" "),t("p",[a._v("To build the image, you need to execute:")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker build -t backup-database "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("To run the container, you first need to create an "),t("code",[a._v("variables")]),a._v(" file.\nYou can copy the template by doing:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cp variables.template variables\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("And you can run the container with:")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -it -v "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("local path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":/app/backups backup-database\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);