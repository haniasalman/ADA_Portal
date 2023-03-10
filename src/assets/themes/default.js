import tinycolor from "tinycolor2";

const primary = "#536DFE";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

const lightenRate = 7.5;
const darkenRate = 15;

const defaultTheme = {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString(),
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      hint: "#B9B9B9",
    },
    background: {
      default: "#F6F7FF",
      light: "#F3F5FF",
    },
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "#4A4A4A1A",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#fffff",
      },
      root: {
        boxShadow: "none",
      },
    },

    MuiListItemIcon: {
      root: {
        minWidth: "24px",
      },
    },
    MuiInputBase: {
      input: {
        color: "black",
      },
    },
    MuiMenu: {
      paper: {
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
      },
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9",
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#F3F5FF !important",
          "&:focus": {
            backgroundColor: "#F3F5FF",
          },
        },
      },
      gutters: {
        paddingLeft: "34px",
      },
      button: {
        "&:hover, &:focus": {
          backgroundColor: "#F3F5FF",
        },
      },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white",
      },
    },
    MuiTableRow: {
      root: {
        height: 56,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(224, 224, 224, .5)",
        paddingLeft: 24,
      },
      head: {
        fontSize: "16px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "25px",
        color: "rgba(0, 0, 0, 0.87)",
      },
      body: {
        fontSize: "14px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "25px",
        color: "rgba(0, 0, 0, 0.87)",
      },
    },
    PrivateSwitchBase: {
      root: {
        marginLeft: 10,
      },
    },

    MuiOutlinedInput: {
      root: {
        border: "1px solid",
        borderRadius: "12px",
        borderColor: "#979797",
        marginTop: "2px",
        marginLeft: "5px",
      },
      input: {
        "&:-webkit-autofill": {
          "-webkit-box-shadow": "0 0 0 100px #FFFFFF inset",
          "-webkit-text-fill-color": "#9B9B9B",
        },
        color: "Black",
      },
    },
    // MUIDataTable: {
    //     root: {
    //       backgroundColor: "#red",
    //     },
    //     paper: {
    //       boxShadow: "none",
    //     },
    // },
    MUIDataTableFilter: {
      root: {
        backgroundColor: "#fffff",
      },
      resetLink: {
        color: "#27AE60",
      },
    },
    MUIDataTableToolbar: {
      iconActive: {
        color: "#27AE60",
      },
      icon: {
        "&:hover": {
          color: "#27AE60",
        },
      },
    },
    // MUIDataTableToolbar-icon-103:hover
    // MuiInput: {
    //   underline: {
    //     "&:after": {
    //       transition: "none",
    //       borderBottom: "2px solid #27AE60",
    //     },
    //   },
    // },
    // MuiFormLabel: {
    //     root: {
    //       "&:focus": { color: "green" },
    //     },
    //   },
  },
};

export default defaultTheme;
