import { createStyles } from "antd-style";

export const useEditorStyle = createStyles(({ token }) => ({
  editor: {
    ["& .jodit-container.jodit-jodit_fullsize_false"]: {
      maxHeight: 400,
      height: "400px !important",
    },
    ["& .jodit-ui-button.jodit-ui-button_size_middle.jodit-ui-button_text-icons_true.jodit-ui-button_keep.jodit-ui-button_variant_primary"]:
      {
        color: "black !important",
      },
    ["& ul"]: {
      listStyleType: "disc",
      marginLeft: "12px",
    },
    ["&>*:first-child"]: {
      backgroundColor: "transparent !important",
      color: "inherit !important",
    },
    ["& .jodit-container.jodit-jodit_fullsize_true.jodit_fullsize"]: {
      paddingBottom: "100px",
    },
    ["& .jodit-workplace, & .jodit-wysiwyg"]: {
      background: token.colorBgBase,
      outline: "none",
      borderColor: token.colorBorder,
      height: "300px !important",
    },
    ["& .jodit-jodit_fullsize_true.jodit_fullsize .jodit-workplace, & .jodit-jodit_fullsize_true.jodit_fullsize .jodit-wysiwyg"]:
      {
        height: "100% !important",
      },
    ["& .jodit-toolbar__box"]: {
      background: token.colorBgContainer,
      outline: "none",
    },
    ["&  button"]: {
      color: token.colorTextBase,
    },
    ["& button[disabled=true]"]: {
      color: token.colorTextDisabled + " !important",
    },
    ["& button.active"]: {
      color: token.colorPrimary + " !important",
    },
    ["& .sun-editor-editable"]: {
      background: token.colorBgContainer,
      color: token.colorTextBase,
    },
    ["& .se-resizing-bar.sun-editor-common"]: {
      background: token.colorBgBase,
      borderTopColor: token.colorBorder,
    },
    ["& hr.__se__solid"]: {
      borderColor: token.colorBorder,
    },
  },
}));
