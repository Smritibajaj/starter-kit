import  React from "react";
import MenuUnstyled, { MenuUnstyledActions } from "@mui/base/MenuUnstyled";
import MenuItemUnstyled, {
  MenuItemUnstyledOwnerState,
  MenuItemUnstyledProps,
} from "@mui/base/MenuItemUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import Button from "../Button";

const MenuItem = React.forwardRef(function MenuItem(
  props: MenuItemUnstyledProps,
  ref: React.ForwardedRef<HTMLLIElement>
) {
  return (
    <MenuItemUnstyled
      {...props}
      slotProps={{
        root: (state: MenuItemUnstyledOwnerState) => ({
          className: `hover:text-cyan-500 transition-colors border px-6 py-4 ${
            state.focusVisible ? "outline-0 ring-2 ring-cyan-500" : ""
          }`,
        }),
      }}
      ref={ref}
    />
  );
});

export default function UseMenu() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const isOpen = Boolean(anchorEl);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuActions = React.useRef<MenuUnstyledActions>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpen) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
      if (event.key === "ArrowUp") {
        menuActions.current?.highlightLastItem();
      }
    }
  };

  const close = () => {
    setAnchorEl(null);
    buttonRef.current!.focus();
  };

  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
      close();
    };
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleButtonClick}
        onKeyDown={handleButtonKeyDown}
        ref={buttonRef}
        aria-controls={isOpen ? "simple-menu" : undefined}
        aria-expanded={isOpen || undefined}
        aria-haspopup="menu"
      >
        My account
      </Button>
      <MenuUnstyled
        actions={menuActions}
        open={isOpen}
        onClose={close}
        anchorEl={anchorEl}
        slots={{ root: PopperUnstyled }}
        slotProps={{
          root: { className: `p-1` },
          listbox: {
            id: "simple-menu",
            className: "p-1 my-2 w-max-sm w-min-[200px] border bg-white",
          },
        }}
      >
        <MenuItem onClick={createHandleMenuClick("Profile")}>Profile</MenuItem>
        <MenuItem onClick={createHandleMenuClick("My account")}>
          Language settings
        </MenuItem>
        <MenuItem onClick={createHandleMenuClick("Log out")}>Log out</MenuItem>
      </MenuUnstyled>
    </div>
  );
}
