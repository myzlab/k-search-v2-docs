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
    "get-started/what-is-ksearch",
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
      label: "SELECT Statement",
      items: [
        "select-statement/introduction",
        {
          type: "category",
          label: "Clauses",
          items: [
            "select-statement/clauses/with",
            {
              type: "category",
              label: "Select",
              items: [
                "select-statement/clauses/select/select",
                "select-statement/clauses/select/distinct",
                "select-statement/clauses/select/single",
                "select-statement/clauses/select/multiple"
              ],
            },
            "select-statement/clauses/from",
            "select-statement/clauses/join",
            {
              type: "category",
              label: "Where",
              items: [
                "select-statement/clauses/where/introduction",
                "select-statement/clauses/where/equal",
                "select-statement/clauses/where/like",
                "select-statement/clauses/where/in",
                "select-statement/clauses/where/null",
                "select-statement/clauses/where/between",
                "select-statement/clauses/where/boolean-conditions",
                "select-statement/clauses/where/greater-than",
                "select-statement/clauses/where/less-than",
                "select-statement/clauses/where/raw",
                "select-statement/clauses/where/date-extraction",
                "select-statement/clauses/where/agrupation"
              ],
            },
            "select-statement/clauses/group-by",
            {
              type: "category",
              label: "Having",
              items: [
                "select-statement/clauses/having/introduction"
              ],
            },
            "select-statement/clauses/order-by",
            "select-statement/clauses/limit",
            "select-statement/clauses/offset",
          ],
        }
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
          label: "Clauses",
          items: [
            "delete-statement/clauses/from",
            "delete-statement/clauses/using",
            {
              type: "category",
              label: "Where",
              items: [
                "delete-statement/clauses/where/introduction"
              ],
            }
          ]
        }
      ],
    }
  ]
};

module.exports = sidebars;
