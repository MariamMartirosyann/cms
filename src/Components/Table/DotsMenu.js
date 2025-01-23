import { Button, Menu, MenuItem } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { Fragment, useCallback, useState } from "react";
import MoreIcon from "@mui/icons-material/More";



const DotsMenu = ({
  row,
  actions,
  onActionClick,
} ) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, onMenuOpen] = useState(false);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
    onMenuOpen(true);
  }, []);

  const handleClickMenuItem = (action, row) => {
    onActionClick(action, row);
    onMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        aria-controls={menuOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
        onClick={handleClick}
        disabled={!actions?.length}
        id={`basic-button-${nanoid(2)}`}
        startIcon={<MoreIcon />}
      ></Button>
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={() => onMenuOpen(false)}
      >
        {actions?.map((action, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => handleClickMenuItem(action, row)}
            >
              {action.label}
            </MenuItem>
          );
        })}
      </Menu>
    </Fragment>
  );
};

export default DotsMenu;