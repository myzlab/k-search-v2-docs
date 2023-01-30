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
            "select-statement/join/introduction",
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
            "select-statement/where/introduction",
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
            "select-statement/group-by/introduction",
            "select-statement/group-by/group-by",
            {
              type: "category",
              label: "Grouping Sets",
              items: [
                "select-statement/group-by/grouping-sets/introduction",
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
            "select-statement/having/introduction",
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
            "select-statement/window/introduction",
            "select-statement/window/over",
            "select-statement/window/window"
          ],
        },
        {
          type: "category",
          label: "Combining",
          items: [
            "select-statement/combining/introduction",
            "select-statement/combining/except",
            "select-statement/combining/except-all",
            "select-statement/combining/intersect",
            "select-statement/combining/intersect-all",
            "select-statement/combining/union",
            "select-statement/combining/union-all"
          ],
        },
        {
          type: "category",
          label: "Order By",
          items: [
            "select-statement/order-by/introduction",
            "select-statement/order-by/order-by"
          ],
        },
        {
          type: "category",
          label: "Limit",
          items: [
            "select-statement/limit/introduction",
            "select-statement/limit/limit"
          ],
        },
        {
          type: "category",
          label: "Offset",
          items: [
            "select-statement/offset/introduction",
            "select-statement/offset/offset"
          ],
        }, ,
        {
          type: "category",
          label: "Fetch",
          items: [
            "select-statement/fetch/introduction",
            "select-statement/fetch/fetch"
          ],
        },
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
        {
          type: "category",
          label: "Insert Into",
          items: [
            "insert-statement/insert-into/introduction",
            "insert-statement/insert-into/insert-into"
          ],
        },
        {
          type: "category",
          label: "Columns",
          items: [
            "insert-statement/columns/introduction",
            "insert-statement/columns/columns"
          ],
        },
        {
          type: "category",
          label: "Values",
          items: [
            "insert-statement/values/introduction",
            "insert-statement/values/values"
          ],
        },
        {
          type: "category",
          label: "Select",
          items: [
            "insert-statement/select/introduction",
            "insert-statement/select/select"
          ],
        },
        {
          type: "category",
          label: "On Conflict",
          items: [
            "insert-statement/on-conflict/introduction",
            "insert-statement/on-conflict/on-conflict"
          ],
        },
        {
          type: "category",
          label: "Returning",
          items: [
            "insert-statement/returning/introduction",
            "insert-statement/returning/returning"
          ],
        },
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
        {
          type: "category",
          label: "Update",
          items: [
            "update-statement/update/introduction",
            "update-statement/update/update"
          ],
        },
        {
          type: "category",
          label: "Set",
          items: [
            "update-statement/set/introduction",
            "update-statement/set/set"
          ],
        },
        {
          type: "category",
          label: "From",
          items: [
            "update-statement/from/introduction",
            "update-statement/from/from"
          ],
        },
        {
          type: "category",
          label: "Where",
          items: [
            "update-statement/where/introduction",
            "update-statement/where/where",
            "update-statement/where/and",
            "update-statement/where/and-not",
            "update-statement/where/or",
            "update-statement/where/or-not"
          ],
        },
        {
          type: "category",
          label: "Returning",
          items: [
            "update-statement/returning/introduction",
            "update-statement/returning/returning"
          ],
        },
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
        {
          type: "category",
          label: "Delete From",
          items: [
            "delete-statement/delete-from/introduction",
            "delete-statement/delete-from/delete-from"
          ],
        },
        {
          type: "category",
          label: "Using",
          items: [
            "delete-statement/using/introduction",
            "delete-statement/using/using"
          ],
        },
        {
          type: "category",
          label: "Where",
          items: [
            "delete-statement/where/introduction",
            "delete-statement/where/where",
            "delete-statement/where/and",
            "delete-statement/where/and-not",
            "delete-statement/where/or",
            "delete-statement/where/or-not"
          ],
        },
        {
          type: "category",
          label: "Returning",
          items: [
            "delete-statement/returning/introduction",
            "delete-statement/returning/returning"
          ],
        },
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
        "misc/ktable"
      ],
    }
  ]
};

module.exports = sidebars;
