/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docsSidebar: [
    "what-is-ksearch",
    {
      type: 'category',
      label: "Get Started",
      items: [
        {
          type: "category",
          label: "Installation",
          items: [
            "get-started/installation/springboot-jdbc",
            "get-started/installation/springboot-jpa"
          ],
        },
        "get-started/recommendations"
      ],
    },
    {
      type: "category",
      label: "Payload Validator",
      items: [
        "payload/payload-validator"
      ],
    },
    {
      type: "category",
      label: "SQL Functions",
      items: [
        {
          type: "category",
          label: "Aggregate Functions",
          items: [
            "sql-functions/aggregate-functions/introduction",
            "sql-functions/aggregate-functions/array-agg",
            "sql-functions/aggregate-functions/avg",
            "sql-functions/aggregate-functions/bit-and",
            "sql-functions/aggregate-functions/bit-or",
            "sql-functions/aggregate-functions/bool-and",
            "sql-functions/aggregate-functions/bool-or",
            "sql-functions/aggregate-functions/count",
            "sql-functions/aggregate-functions/count-kcolumn",
            "sql-functions/aggregate-functions/count-distinct",
            "sql-functions/aggregate-functions/every",
            "sql-functions/aggregate-functions/json-agg",
            "sql-functions/aggregate-functions/jsonb-agg",
            "sql-functions/aggregate-functions/json-object-agg",
            "sql-functions/aggregate-functions/max",
            "sql-functions/aggregate-functions/min",
            "sql-functions/aggregate-functions/string-agg",
            "sql-functions/aggregate-functions/sum",
            "sql-functions/aggregate-functions/sum-distinct",
            "sql-functions/aggregate-functions/xmlagg"
          ],
        },
        {
          type: "category",
          label: "Window Functions",
          items: [
            "sql-functions/window-functions/introduction",
            "sql-functions/window-functions/cume-dist",
            "sql-functions/window-functions/dense-rank",
            "sql-functions/window-functions/first-value",
            "sql-functions/window-functions/lag",
            "sql-functions/window-functions/last-value",
            "sql-functions/window-functions/lead",
            "sql-functions/window-functions/nth-value",
            "sql-functions/window-functions/ntile",
            "sql-functions/window-functions/percent-rank",
            "sql-functions/window-functions/rank",
            "sql-functions/window-functions/row-number"
          ],
        },
        {
          type: "category",
          label: "Array Functions",
          items: [
            "sql-functions/array-functions/introduction",
            "sql-functions/array-functions/array-append",
            "sql-functions/array-functions/array-cat",
            "sql-functions/array-functions/array-dims",
            "sql-functions/array-functions/array-fill",
            "sql-functions/array-functions/array-length",
            "sql-functions/array-functions/array-lower",
            "sql-functions/array-functions/array-ndims",
            "sql-functions/array-functions/array-position",
            "sql-functions/array-functions/array-positions",
            "sql-functions/array-functions/array-prepend",
            "sql-functions/array-functions/array-remove",
            "sql-functions/array-functions/array-replace",
            "sql-functions/array-functions/array-to-string",
            "sql-functions/array-functions/array-upper",
            "sql-functions/array-functions/cardinality",
            "sql-functions/array-functions/string-to-array",
            "sql-functions/array-functions/unnest"
          ],
        },
        {
          type: "category",
          label: "Mathematical Functions",
          items: [
            "sql-functions/mathematical-functions/introduction"
          ],
        },
        {
          type: "category",
          label: "String Functions",
          items: [
            "sql-functions/string-functions/introduction",
            "sql-functions/string-functions/ascii",
            "sql-functions/string-functions/bit-length",
            "sql-functions/string-functions/btrim",
            "sql-functions/string-functions/char-length",
            "sql-functions/string-functions/character-length",
            "sql-functions/string-functions/chr",
            "sql-functions/string-functions/concat",
            "sql-functions/string-functions/concat-ws",
            "sql-functions/string-functions/convert",
            "sql-functions/string-functions/convert-from",
            "sql-functions/string-functions/convert-to",
            "sql-functions/string-functions/decode",
            "sql-functions/string-functions/encode",
            "sql-functions/string-functions/format",
            "sql-functions/string-functions/initcap",
            "sql-functions/string-functions/left",
            "sql-functions/string-functions/length",
            "sql-functions/string-functions/lower",
            "sql-functions/string-functions/lpad",
            "sql-functions/string-functions/ltrim",
            "sql-functions/string-functions/md5",
            "sql-functions/string-functions/octet_length",
            "sql-functions/string-functions/overlay",
            "sql-functions/string-functions/position",
            "sql-functions/string-functions/quote_ident",
            "sql-functions/string-functions/quote_literal",
            "sql-functions/string-functions/quote_nullable",
            "sql-functions/string-functions/reverse",
            "sql-functions/string-functions/right",
            "sql-functions/string-functions/rpad",
            "sql-functions/string-functions/rtrim",
            "sql-functions/string-functions/substring",
            "sql-functions/string-functions/to_hex",
            "sql-functions/string-functions/trim",
            "sql-functions/string-functions/upper"
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Special Functions",
      items: [
        "special-functions/total-count",
        "special-functions/assert-exists",
        "special-functions/update-multiple"
      ],
    },
    {
      type: "category",
      label: "Repository",
      items: [
        "repository/introduction",
        "repository/assert-exists-by-id",
        "repository/assert-not-exists-by-id",
        "repository/count",
        "repository/count-distinct",
        "repository/delete-all",
        "repository/delete-by-id",
        "repository/exists-by-id",
        "repository/find-all",
        "repository/find-by-id",
        "repository/insert",
        "repository/update-by-id"
      ],
    },
    {
      type: "category",
      label: "Data Manipulation",
      items: [
        "data-manipulation/introduction",
        "data-manipulation/mapper",
        "data-manipulation/metadata",
        "data-manipulation/single",
        "data-manipulation/multiple",
        "data-manipulation/execute-insert",
        "data-manipulation/execute-update",
        "data-manipulation/execute-delete"
      ],
    },
    {
      type: "category",
      label: "SELECT Statement",
      items: [
        "select-statement/introduction",
        {
          type: "category",
          label: "With",
          items: [
            "select-statement/with/with",
            "select-statement/with/with-recursive",
          ],
        },
        {
          type: "category",
          label: "Select",
          items: [
            "select-statement/select/select",
            "select-statement/select/select1",
            "select-statement/select/distinct",
            "select-statement/select/distinct-on"
          ],
        },
        "select-statement/from/from",
        {
          type: "category",
          label: "Join",
          items: [
            "select-statement/join/inner-join",
            "select-statement/join/left-join",
            "select-statement/join/right-join",
            "select-statement/join/full-join",
            "select-statement/join/cross-join"
          ],
        },
        {
          type: "category",
          label: "Where",
          items: [
            "select-statement/where/where",
            "select-statement/where/and",
            "select-statement/where/and-not",
            "select-statement/where/or",
            "select-statement/where/or-not"
          ],
        },
        {
          type: "category",
          label: "Group By",
          items: [
            "select-statement/group-by/group-by",
            {
              type: "category",
              label: "Grouping Sets",
              items: [
                "select-statement/group-by/grouping-sets/grouping",
                "select-statement/group-by/grouping-sets/grouping-sets",
                "select-statement/group-by/grouping-sets/cube",
                "select-statement/group-by/grouping-sets/rollup"
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Having",
          items: [
            "select-statement/having/having",
            "select-statement/having/and",
            "select-statement/having/and-not",
            "select-statement/having/or",
            "select-statement/having/or-not"
          ],
        },
        {
          type: "category",
          label: "Window",
          items: [
            "select-statement/window/over",
            "select-statement/window/window"
          ],
        },
        {
          type: "category",
          label: "Combining",
          items: [
            "select-statement/combining/except",
            "select-statement/combining/except-all",
            "select-statement/combining/intersect",
            "select-statement/combining/intersect-all",
            "select-statement/combining/union",
            "select-statement/combining/union-all"
          ],
        },
        "select-statement/order-by/order-by",
        "select-statement/limit/limit",
        "select-statement/offset/offset",
        "select-statement/fetch/fetch"
      ],
    },
    {
      type: "category",
      label: "INSERT Statement",
      items: [
        "insert-statement/introduction",
        {
          type: "category",
          label: "With",
          items: [
            "insert-statement/with/with",
            "insert-statement/with/with-recursive",
          ],
        },
        "insert-statement/insert-into/insert-into",
        "insert-statement/columns/columns",
        "insert-statement/values/values",
        "insert-statement/select/select",
        "insert-statement/on-conflict/on-conflict",
        "insert-statement/returning/returning",
      ],
    },
    {
      type: "category",
      label: "UPDATE Statement",
      items: [
        "update-statement/introduction",
        {
          type: "category",
          label: "With",
          items: [
            "update-statement/with/with",
            "update-statement/with/with-recursive",
          ],
        },
        "update-statement/update/update",
        "update-statement/set/set",
        "update-statement/from/from",
        {
          type: "category",
          label: "Where",
          items: [
            "update-statement/where/where",
            "update-statement/where/and",
            "update-statement/where/and-not",
            "update-statement/where/or",
            "update-statement/where/or-not"
          ],
        },
        "update-statement/returning/returning",
      ],
    },
    {
      type: "category",
      label: "DELETE Statement",
      items: [
        "delete-statement/introduction",
        {
          type: "category",
          label: "With",
          items: [
            "delete-statement/with/with",
            "delete-statement/with/with-recursive",
          ],
        },
        "delete-statement/delete-from/delete-from",
        "delete-statement/using/using",
        {
          type: "category",
          label: "Where",
          items: [
            "delete-statement/where/where",
            "delete-statement/where/and",
            "delete-statement/where/and-not",
            "delete-statement/where/or",
            "delete-statement/where/or-not"
          ],
        },
        "delete-statement/returning/returning",
      ],
    },
    {
      type: "category",
      label: "Misc",
      items: [
        {
          type: "category",
          label: "KCondition",
          items: [
            "misc/kcondition/introduction",
            "misc/kcondition/eq",
            "misc/kcondition/gt",
            "misc/kcondition/gte",
            "misc/kcondition/ilk",
            "misc/kcondition/ilka",
            "misc/kcondition/ilksw",
            "misc/kcondition/ilkew",
            "misc/kcondition/lt",
            "misc/kcondition/lte",
            "misc/kcondition/lk",
            "misc/kcondition/lka",
            "misc/kcondition/lksw",
            "misc/kcondition/lkew",
            "misc/kcondition/bt",
            "misc/kcondition/in",
            "misc/kcondition/null",
            "misc/kcondition/true",
            "misc/kcondition/false",
            "misc/kcondition/unknown",
            "misc/kcondition/exists"
          ],
        },
        "misc/cte",
        "misc/select-list-values",
        "misc/ktable",
        "misc/kjoindefinition",
        "misc/window-definition",
        "misc/kvalues",
        "misc/kencoding",
        "misc/kformat",
        "misc/ktuple"
      ],
    }
  ]
};

module.exports = sidebars;
