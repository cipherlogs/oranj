import useSwitch from "@hooks/useSwitch";
import BaseItem from "@shared/BaseItem";
import { List, ListItem, ListSubheader, Switch } from "@mui/material";
import { useContext } from "react";
import ThemeContext from "@context/ThemeContext";

const ToggleListItem = (props) => {
  const { on, handleSwitch } = useSwitch();
  const isNotAlt = props.altText == undefined;
  const ctx = useContext(ThemeContext);

  const handleChange = props.isThemeMode
    ? () => {
        ctx.toggleTheme();
        handleSwitch();
      }
    : handleSwitch;

  const isOn = props.isThemeMode ? ctx.mode === "dark" : on;

  return (
    <ListItem>
      {isNotAlt ? (
        <BaseItem {...props} />
      ) : isOn ? (
        <BaseItem text={props.altText} MainIcon={props.AltIcon} />
      ) : (
        <BaseItem text={props.text} MainIcon={props.MainIcon} />
      )}
      <Switch edge="end" checked={isOn} onChange={handleChange} />
    </ListItem>
  );
};

const SectionList = ({ text, data }) => {
  return (
    <List subheader={<ListSubheader>{text}</ListSubheader>}>
      {data.map((item, i) =>
        item.type === "switch" ? (
          <ToggleListItem key={i} {...item} />
        ) : (
          <BaseItem key={i} wrapper={ListItem} {...item} />
        ),
      )}
    </List>
  );
};

export default SectionList;
