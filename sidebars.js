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
        "special-functions/assert-exists"
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
        "data-manipulation/multiple"
      ],
    },
    {
      type: "category",
      label: "KCondition",
      items: [
        "kcondition/introduction",
        "kcondition/eq",
        "kcondition/gt",
        "kcondition/gte",
        "kcondition/lt",
        "kcondition/lte",
        "kcondition/lk",
        "kcondition/lka",
        "kcondition/lksw",
        "kcondition/lkew",
        "kcondition/bt",
        "kcondition/in",
        "kcondition/null",
        "kcondition/true",
        "kcondition/false",
        "kcondition/unknown",
        "kcondition/exists"
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
            "select-statement/with/introduction",
            "select-statement/with/with",
            "select-statement/with/with-recursive",
          ],
        },
        {
          type: "category",
          label: "Select",
          items: [
            "select-statement/select/introduction",
            "select-statement/select/distinct-on",
            "select-statement/select/distinct",
            "select-statement/select/select1",
            "select-statement/select/select"
          ],
        },
        {
          type: "category",
          label: "From",
          items: [
            "select-statement/from/introduction",
            "select-statement/from/from",
          ],
        },
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
        },,
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
      label: "INSERT Query",
      items: [
        "insert-query/insert"
      ],
    },
    {
      type: "category",
      label: "UPDATE Query",
      items: [
        "update-query/set",
        "update-query/from",
        {
          type: "category",
          label: "Where",
          items: [
            "update-query/where/introduction"
          ],
        }
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
            "delete-statement/with/introduction",
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
      ],
    }
  ]
};

module.exports = sidebars;
